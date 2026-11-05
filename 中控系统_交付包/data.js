// ===================== 假数据 / 配置（可直接修改本文件）=====================
// 本文件由 中控系统.html 抽离。修改下方种子列表 / 枚举 / 生成数量即可改假数据，
// 保存后刷新页面生效。需与 中控系统.html 放在同一目录，并在其之前由 <script> 引入。
// 注意：以下变量为页面全局共享（与主脚本同处全局作用域），请勿重复声明。
// ===========================================================================

const ROWS = 12, COLS = 26;
const AREA_CONFIGS = [
  { key:'zone-3', name:'3号分区', shortName:'3区', colHeights:[19,19,19,19,15,15,15,15] },
  { key:'zone-2', name:'2号分区', shortName:'2区', colHeights:[19,19,19,19,15,15,15,15] },
  { key:'zone-1', name:'1号分区', shortName:'1区', colHeights:[19,19,19,19,19] },
];
const SPEC_LIST  = ['H200×200×8×12', 'L100×100×8', 'T150×150×10', 'I250×125×8', 'C180×75×7'];
const MAT_LIST   = ['Q235B', 'Q345B', 'A36', 'DH36'];
const SHIP_LIST  = ['2401', '2402', 'SHIP-2403', 'SHIP-2404', 'SHIP-2405'];
const BLOCK_LIST = Array.from({length:20},(_,i)=>`B-${String(i+1).padStart(3,'0')}`);
const PROG_LIST  = ['PY', 'PZ', 'PX', 'PJ'];
const PACKAGE_LIST = Array.from({length:10},(_,i)=>`PKG-${String(i+1).padStart(3,'0')}`);
const PHASE_LIST = ['出库','喷码','去底漆','切割'];
// 刀次列表(排产仿真/工单假数据用,与 SCHED_PLAN_DAO_LIST 同枚举)
const DAO_LIST = ['H1','H2','H3','M1','M2','G1','R1','C1'];

const rnd = (n) => Math.floor(Math.random()*n);
const pick = (arr) => arr[rnd(arr.length)];
const padZ = (n,l=2) => String(n).padStart(l,'0');
const randId = () => Math.random().toString(36).slice(2,10).toUpperCase();
const randDate = (base=17) => `2026-05-${padZ(rnd(base)+1)}`;
const randTime = () => `${randDate()} ${padZ(rnd(24))}:${padZ(rnd(60))}:${padZ(rnd(60))}`;
const flattenWarehouseAreas = (areas) => areas.flatMap(area => area.rows.flat().filter(Boolean));

// Warehouse grid
const initGrid = () => {
  const STATUS_WEIGHTS = [
    ...Array(9).fill('occupied'),
    ...Array(5).fill('empty'),
    ...Array(2).fill('locked'),
    'abnormal','disabled'
  ];
  return AREA_CONFIGS.map((area) => {
    const cols = area.colHeights.length;
    const maxLevels = Math.max(...area.colHeights);
    return {
      ...area,
      cols,
      levels: maxLevels,
      totalBins: area.colHeights.reduce((sum, height) => sum + height, 0),
      colLabels: Array.from({length:cols}, (_,i)=>`列${padZ(i+1)}`),
      rows: Array.from({length:maxLevels}, (_,rowIdx) =>
        Array.from({length:cols}, (_,colIdx) => {
          if (rowIdx >= area.colHeights[colIdx]) return null;
          const level = maxLevels - rowIdx;
          const col = colIdx + 1;
          const st = pick(STATUS_WEIGHTS);
          const has = st === 'occupied' || st === 'locked' || st === 'abnormal';
          const binNo = `${area.shortName}-${padZ(level)}-${padZ(col)}`;
          return {
            id:`${area.key}-${level}-${col}`,
            areaKey: area.key,
            areaName: area.name,
            binNo,
            targetBinNo: has ? binNo : null,
            status: st,
            profileId:  has ? `P${randId()}` : null,
            shipNo:     has ? pick(SHIP_LIST) : null,
            blockNo:    has ? pick(BLOCK_LIST) : null,
            programNo:  has ? pick(PROG_LIST) : null,
            profileType:has ? pick(SPEC_LIST) : null,
            material:   has ? pick(MAT_LIST) : null,
            length:     has ? (rnd(8)+2)*1000 : null,
            level, col,
          };
        })
      ),
    };
  });
};

const makeInventory = (warehouseAreas) => flattenWarehouseAreas(warehouseAreas)
  .map((cell, i)=>({
    key:i+1,
    profileId:cell.profileId,
    profileType:cell.profileType,
    material:cell.material,
    length:cell.length,
    weight:+(Math.random()*800+100).toFixed(1),
    heatNumber:`HN-${randId().slice(0,6)}`,
    shipNo:cell.shipNo,
    blockNo:cell.blockNo,
    programNo:cell.programNo,
    nestingLayoutNo:`NEST-${padZ(rnd(999)+1,3)}`,
    planDate:randDate(),
    areaKey:cell.areaKey,
    areaName:cell.areaName,
    binNo:cell.binNo,
    targetBinNo:cell.targetBinNo,
    binStatus:cell.status,
    quantity:rnd(4)+1,
    updateDate:randDate(),
    remark: cell.status === 'abnormal' ? '待复核' : '',
  }));

const PLAN_STATUSES = {
  RECEIVED:{label:'已接收',color:'blue'},
  PARSING:{label:'解析中',color:'geekblue'},
  CHECKING:{label:'校验中',color:'orange'},
  CHECK_FAILED:{label:'校验失败',color:'red'},
  READY:{label:'可下发',color:'green'},
  DISPATCHED:{label:'已下发',color:'success'},
};
const PLAN_ITEM_STATUSES = ['NOT_STARTED','PLANNED','PLANNED','PLANNED','ABNORMAL'];
const makePlansFromSchedDb = (db) => {
  if (!db || !Array.isArray(db.materials) || !db.materials.length) return makePlans(22);
  const batchInfo = typeof window !== 'undefined' && window.listSchedBatches
    ? new Map(window.listSchedBatches(db).map(b => [`${b.ship}|${b.segment}|${b.program}`, b]))
    : new Map();
  return db.materials
    .filter(row => row.cut_time_raw == null || row.cut_time_raw > 0)
    .map((row, idx) => {
      const batchKey = `${row.ship}|${row.segment}|${row.program_code}`;
      const batch = batchInfo.get(batchKey);
      const packageNo = `${row.ship}-${row.segment}-${row.program_code}`;
      return {
        key: row.profile_id || idx + 1,
        profileId: row.file_name || `P${row.profile_id || idx + 1}`,
        shipNo: row.ship,
        blockNo: row.segment,
        programNo: row.program || row.program_code,
        packageNo,
        nestingLayoutNo: row.file_name || `${packageNo}-${padZ(idx + 1, 3)}`,
        scheduleDate: '',
        prodShift: '',
        source: 'MES',
        planningStatus: batch ? 'PLANNED' : 'NOT_STARTED',
        inStock: true,
        cutTime: Math.round(row.cut_time_raw || 0),
        profileType: row.section_size,
        material: row.material_type,
        length: row.length,
        partCount: row.part_count,
        dbName: db.db_name,
      };
    });
};
const makePlans = (pkgCount=10) => {
  let key = 1;
  return Array.from({length:pkgCount}, (_,pkgIdx) => {
    const packageNo = PACKAGE_LIST[pkgIdx] || `PKG-${padZ(pkgIdx+1,3)}`;
    const shipNo = pick(SHIP_LIST);
    const blockNo = pick(BLOCK_LIST);
    const lineCount = rnd(4) + 3;
    const scheduleDate = randDate(28);   // 计划日期：MES 下发，每个任务都有
    const prodShift = '';                // 生产日期：初始未排期，勾选后批量设置
    return Array.from({length:lineCount}, (_,lineIdx) => ({
      key:key++,
      profileId:`P${randId()}`,
      shipNo,
      blockNo,
      programNo:`${pick(PROG_LIST)}-${padZ(rnd(999)+1,3)}`,
      packageNo,
      nestingLayoutNo:`NEST-${padZ(pkgIdx+1,3)}-${padZ(lineIdx+1,2)}`,
      scheduleDate,
      prodShift,
      source:'MES',
      planningStatus: pick(PLAN_ITEM_STATUSES),
      inStock: Math.random() < 0.82,
      cutTime: rnd(240)+60,
    }));
  }).flat();
};

const INB_STATUSES = {
  NOT_STARTED: {label:'未开始',       color:'geekblue'},
  ZONE_MATCH_FAILED:{label:'异常', color:'red'},
  WAIT:        {label:'待入库',       color:'purple'},
  CHECK_FAILED:{label:'异常',     color:'red'},
  IN_PROGRESS: {label:'入库中',       color:'processing'},
  FINISHED:    {label:'入库完成',     color:'green'},
};
const INB_MODES = {SCAN:'效率模式', MANUAL:'精确模式'};
const INB_SPECS = ['250×90×10×15','200×90×9×14','180×75×8×12','300×100×11×16','220×95×10×14'];
const INB_PROGS = ['PX','PY','PZ','PJ'];
const INB_MATERIALS = ['AH32','DH36','EH36','Q235B','Q345B'];
const INB_LENGTHS = [6000,9000,11000,12000,13500];
const INB_ZONES = ['1区','2区','3区'];
const makeInbound = (n=18, plans=[]) => {
  const schedRows = Array.isArray(plans) ? plans.filter(p => p.planningStatus === 'PLANNED') : [];
  const failAt = Math.min(4, Math.max(0, n - 1));
  const historyFrom = Math.min(11, n);
  const shortProgramNo = value => {
    const match = String(value || '').toUpperCase().match(/(?:HC)?(PX|PY|PZ|PJ)/);
    return match ? match[1] : String(value || '');
  };
  const rows = Array.from({length:n},(_,i)=>{
    const status = i < failAt ? 'WAIT' : (i < historyFrom ? 'NOT_STARTED' : 'FINISHED');
    const matchedPlan = schedRows.length && i !== failAt ? schedRows[i % schedRows.length] : null;
    /* v97：「库区匹配异常」功能删除 —— 未匹配到排产的任务回退按序分配库区，不再产生异常态 */
    const matchedZone = INB_ZONES[(i + (matchedPlan?.key || 0)) % INB_ZONES.length];
    return {
      key:i+1,
      taskNo:`INB-2026-${padZ(i+1,4)}`,
      profileUid:`PM${randId()}`,
      shipNo:matchedPlan?.shipNo || 'H'+(2700+rnd(80)),
      blockNo:matchedPlan?.blockNo || String(5000+rnd(900)),
      programNo:matchedPlan ? shortProgramNo(matchedPlan.programNo) : pick(INB_PROGS),
      profileType:matchedPlan?.profileType || pick(INB_SPECS),
      material:matchedPlan?.material || pick(INB_MATERIALS),
      length:matchedPlan?.length || pick(INB_LENGTHS),
      heatNo:String(1000+rnd(9000)),
      mode:pick(Object.keys(INB_MODES)),
      status, manualNote:null, order:i,   /* v97：不再生成 ZONE_MATCH_FAILED */
      zone: matchedZone,
      zoneMatchStatus: 'MATCHED',
      zoneMatchSource: matchedPlan ? '排产匹配' : '按序分配',
      matchedPlanKey: matchedPlan?.key || null,
      scheduleDate: matchedPlan?.scheduleDate || randDate(28),
      inbound: status==='FINISHED' ? '是' : '否',
      autoBlocked: i > failAt && i < historyFrom,
      binCode: !matchedPlan || status==='NOT_STARTED' ? '' : ('A-'+padZ(rnd(20)+1)),
      createTime:randTime(),
      startTime: status==='FINISHED' ? randTime() : '',
      endTime: status==='FINISHED' ? randTime() : '',
      finishTime: status==='FINISHED' ? randTime() : '',
      reportTime: status==='FINISHED' ? randTime() : '',
    };
  });
  /* v97：恢复「校验异常」演示任务（v95 误删）—— 从已匹配的待下发任务中随机取一条 */
  const waiting = rows.filter(x=>x.status==='WAIT' && x.zoneMatchStatus==='MATCHED');
  if (waiting.length) waiting[rnd(waiting.length)].status = 'CHECK_FAILED';
  return rows;
};
// 入库视觉校验结果（合成图片，data URI）
const inbVerifyImg = (row) => {
  const fail = row.status === 'CHECK_FAILED';
  const parts = String(row.profileType).split('×').map(s=>parseInt(s,10));
  const H = parts[0]||250, B = parts[1]||90, TW = parts[2]||10;
  const measH = fail ? H-8 : H;
  const mark = (good)=> good ? "<tspan fill='#22c55e'> OK</tspan>" : "<tspan fill='#f87171'> NG</tspan>";
  let bars='', x=310; for (let i=0;i<44;i++){ const w=1+((i*13)%4); bars += `<rect x='${x}' y='250' width='${w}' height='52' fill='#0b1220'/>`; x += w+1+((i*7)%3); }
  const sH = Math.max(40, 120*(H/300)), sB = Math.max(30, 90*(B/120)), ox=160, oy=212;
  const prof = `<rect x='${ox-sB/2}' y='${oy-sH}' width='${sB}' height='${Math.max(8,sB*0.18)}' fill='#38bdf8'/>`
             + `<rect x='${ox-Math.max(5,sB*0.09)}' y='${oy-sH}' width='${Math.max(10,sB*0.18)}' height='${sH}' fill='#38bdf8'/>`;
  const sc = fail ? '#ef4444' : '#22c55e', stxt = fail ? '校验异常' : '校验通过';
  const stamp = `<g transform='translate(440,84) rotate(-12)'><rect x='-82' y='-28' width='164' height='56' rx='6' fill='none' stroke='${sc}' stroke-width='3'/><text x='0' y='9' text-anchor='middle' fill='${sc}' font-size='24' font-weight='bold'>${stxt}</text></g>`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='330' viewBox='0 0 600 330' font-family='sans-serif'>`
    + `<rect width='600' height='330' fill='#0b1220'/>`
    + `<rect x='10' y='10' width='580' height='310' fill='#111c30' stroke='#1e293b'/>`
    + `<text x='26' y='40' fill='#e2e8f0' font-size='16' font-weight='bold'>型材入库视觉校验 · 相机 CK-01</text>`
    + `<text x='26' y='60' fill='#7dd3fc' font-size='12' font-family='monospace'>${row.profileUid}</text>`
    + `<rect x='40' y='78' width='240' height='152' fill='#0b1220' stroke='#1e293b'/>` + prof
    + `<text x='${ox}' y='248' fill='#94a3b8' font-size='11' text-anchor='middle'>端面扫描</text>`
    + `<text x='310' y='100' fill='#cbd5e1' font-size='13'>标准规格 ${row.profileType}</text>`
    + `<text x='310' y='124' fill='#cbd5e1' font-size='12'>高度 H 实测 ${measH} / 标准 ${H}${mark(measH===H)}</text>`
    + `<text x='310' y='146' fill='#cbd5e1' font-size='12'>宽度 B 实测 ${B} / 标准 ${B}${mark(true)}</text>`
    + `<text x='310' y='168' fill='#cbd5e1' font-size='12'>腹板 t 实测 ${TW} / 标准 ${TW}${mark(true)}</text>`
    + `<text x='310' y='190' fill='#cbd5e1' font-size='12'>炉批号 ${row.heatNo}</text>`
    + bars
    + `<text x='40' y='312' fill='#64748b' font-size='10'>采集时间 ${row.createTime}</text>`
    + stamp + `</svg>`;
  return 'data:image/svg+xml,'+encodeURIComponent(svg);
};

const OUT_STATUSES = {
  CREATED:{label:'已创建',color:'default'},
  SENT_TO_WMS:{label:'已下发立库',color:'processing'},
  OUTBOUND_EXECUTING:{label:'出库中',color:'warning'},
  OUTBOUND_FINISHED:{label:'出库完成',color:'success'},
  REVOKED:{label:'已撤回',color:'default'},
  ABNORMAL:{label:'异常',color:'error'},
};
const PROCESS_STATUSES = {
  WAIT:    {label:'未出库',  color:'default'},
  CALLING: {label:'叫料中',  color:'blue'},
  OUTBOUND:{label:'出库中',  color:'processing'},
  SPRAY:   {label:'喷码中',  color:'cyan'},
  PRIMER:  {label:'去底漆中',color:'geekblue'},
  CUTTING: {label:'切割中',  color:'orange'},
  SORTING: {label:'分拣中',  color:'purple'},
};
const OUT_SOURCES = {RECEIVED:'接收', LOCAL:'本地创建'};
const makeOutbound = (n=16) => Array.from({length:n},(_,i)=>({
  key:i+1,
  taskNo:`OUT-2026-${padZ(i+1,4)}`,
  profileId:`P${randId()}`,
  profileType:pick(SPEC_LIST),
  shipNo:pick(SHIP_LIST),
  blockNo:pick(BLOCK_LIST),
  packageNo:pick(PACKAGE_LIST),
  outboundPort:Math.random()>.5?'出库口1':'出库口2',
  customEnabled:Math.random()>.5?1:0,
  processStatus:pick(Object.keys(PROCESS_STATUSES)),
  source:pick(Object.keys(OUT_SOURCES)),
  status:pick(Object.keys(OUT_STATUSES)),
  createTime:randTime(),
}));

const OP_STATUSES = {START:{label:'开始',color:'processing'},FINISH:{label:'结束',color:'success'},ABNORMAL:{label:'异常',color:'error'},ng:{label:'跳过',color:'default'}};
const makeMaterialReport = (n=25) => Array.from({length:n},(_,i)=>({
  key:i+1,
  profileId:`P${randId()}`,
  phaseNo:pick(PHASE_LIST),
  workshopNo:`WS-${padZ(rnd(3)+1)}`,
  workplaceNo:`WP-${padZ(rnd(10)+1)}`,
  opStatus:pick(Object.keys(OP_STATUSES)),
  operator:`操作员${rnd(10)+1}`,
  binCode:`A${padZ(rnd(ROWS)+1)}-${padZ(rnd(COLS)+1)}`,
  opTime:randTime(),
}));

const makePartsReport = (n=20) => Array.from({length:n},(_,i)=>({
  key:i+1,
  oid:`OID-${randId()}`,
  profileId:`P${randId()}`,
  phaseNo:pick(['切割','分拣']),
  workshopNo:`WS-${padZ(rnd(3)+1)}`,
  workplaceNo:`WP-${padZ(rnd(10)+1)}`,
  opStatus:pick(Object.keys(OP_STATUSES)),
  operator:`操作员${rnd(10)+1}`,
  palletNo:`PLT-${padZ(rnd(30)+1,3)}`,
  partsQuantity:rnd(20)+1,
  defectQuantity:rnd(3),
  opTime:randTime(),
}));

/* ═══════ 加工执行：任务 · 母材报工 · 零件报工 联动数据 ═══════ */
// 加工流水线阶段（与 PROCESS_STATUSES 对应）；matPhase 指向对应母材工序
const PROCESS_FLOW = [
  {key:'WAIT',     matPhase:null},     // 未出库
  {key:'CALLING',  matPhase:null},     // 叫料中
  {key:'OUTBOUND', matPhase:'出库'},   // 出库中
  {key:'SPRAY',    matPhase:'喷码'},   // 喷码中
  {key:'PRIMER',   matPhase:'去底漆'}, // 去底漆中
  {key:'CUTTING',  matPhase:'切割'},   // 切割中
  {key:'SORTING',  matPhase:'分拣'},   // 分拣中（零件级）
];
const flowIdxOf = (key) => PROCESS_FLOW.findIndex(f=>f.key===key);

// 以加工任务为主，按 profileId 联动生成母材报工与零件报工，并由阶段推导加工状态
const makeProductionData = (n=20) => {
  const outbound=[], matReports=[], partsReports=[];
  let mKey=1, pKey=1;
  const cutIdx  = flowIdxOf('CUTTING');
  const sortIdx = flowIdxOf('SORTING');

  for (let i=0;i<n;i++){
    const taskNo      = `OUT-2026-${padZ(i+1,4)}`;
    const profileId   = `P${randId()}`;
    const profileType = pick(SPEC_LIST);
    const shipNo      = pick(SHIP_LIST);
    const blockNo     = pick(BLOCK_LIST);
    const packageNo   = pick(PACKAGE_LIST);
    const source      = pick(Object.keys(OUT_SOURCES));
    const stageIdx    = rnd(PROCESS_FLOW.length);     // 0..6 当前加工阶段
    const processStatus = PROCESS_FLOW[stageIdx].key; // 加工状态 = 阶段（自动关联）
    const isAbnormal  = stageIdx>=2 && Math.random()<.12;

    // 任务状态由加工阶段自动推导
    let status;
    if (isAbnormal)             status='ABNORMAL';
    else if (stageIdx===0)      status='CREATED';
    else if (stageIdx===1)      status='SENT_TO_WMS';
    else if (stageIdx>=sortIdx) status='OUTBOUND_FINISHED';
    else                        status='OUTBOUND_EXECUTING';

    outbound.push({
      key:i+1, taskNo, profileId, profileType, shipNo, blockNo, packageNo,
      outboundPort:Math.random()>.5?'出库口1':'出库口2',
      customEnabled:Math.random()>.5?1:0,
      source, processStatus, status, stageIdx,
      createTime:randTime(),
    });

    // ── 母材报工：已到达/已完成的各母材工序（出库/喷码/去底漆/切割）──
    PROCESS_FLOW.forEach((f, fi)=>{
      if (!f.matPhase || f.matPhase==='分拣') return; // 分拣属零件级
      if (stageIdx < fi) return;
      const inProgress = stageIdx===fi;
      const ws=`WS-${padZ(rnd(3)+1)}`, wp=`WP-${padZ(rnd(10)+1)}`;
      const op=`操作员${rnd(10)+1}`, bin=`A${padZ(rnd(ROWS)+1)}-${padZ(rnd(COLS)+1)}`;
      matReports.push({
        key:mKey++, taskNo, profileId, profileType, shipNo, blockNo, packageNo,
        phaseNo:f.matPhase, workshopNo:ws, workplaceNo:wp,
        opStatus:(isAbnormal && inProgress)?'ABNORMAL':'START',
        operator:op, binCode:bin, opTime:randTime(),
      });
      if (!inProgress){
        matReports.push({
          key:mKey++, taskNo, profileId, profileType, shipNo, blockNo, packageNo,
          phaseNo:f.matPhase, workshopNo:ws, workplaceNo:wp,
          opStatus:'FINISH', operator:op, binCode:bin, opTime:randTime(),
        });
      }
    });

    // ── 零件报工：到达切割后，母材裂变为多个零件 ──
    if (stageIdx>=cutIdx){
      const pushPair = (phase, inProg) => {
        const oid=`OID-${randId()}`, ws=`WS-${padZ(rnd(3)+1)}`, wp=`WP-${padZ(rnd(10)+1)}`,
              op=`操作员${rnd(10)+1}`, plt=`PLT-${padZ(rnd(30)+1,3)}`, qty=rnd(8)+6, def=rnd(3);
        partsReports.push({ key:pKey++, oid, profileId, taskNo, phaseNo:phase, workshopNo:ws, workplaceNo:wp,
          opStatus:'START', operator:op, palletNo:plt, partsQuantity:qty, defectQuantity:0, opTime:randTime() });
        if (!inProg) partsReports.push({ key:pKey++, oid, profileId, taskNo, phaseNo:phase, workshopNo:ws, workplaceNo:wp,
          opStatus:'FINISH', operator:op, palletNo:plt, partsQuantity:qty, defectQuantity:def, opTime:randTime() });
      };
      pushPair('切割', stageIdx===cutIdx);
      if (stageIdx>=sortIdx) pushPair('分拣', stageIdx===sortIdx);
    }
  }
  return {outbound, matReports, partsReports};
};

const makeBinMaintenance = (warehouseAreas, n=12) => {
  const cells = flattenWarehouseAreas(warehouseAreas).filter(cell => cell.profileId);
  const sample = [...cells].sort(()=>Math.random()-.5).slice(0, n);
  return sample.map((cell, i)=>({
    key:i+1,
    binNo:cell.binNo,
    profileId:cell.profileId,
    shipNo:cell.shipNo,
    blockNo:cell.blockNo,
    material:cell.material,
    profileType:cell.profileType,
    nestingLayoutNo:`NEST-${padZ(rnd(99)+1,3)}`,
    length:cell.length,
    weight:+(Math.random()*800+100).toFixed(1),
    heatNumber:`HN-${randId().slice(0,6)}`,
    planDate:randDate(),
    operator:'仓管管理员',
    updateTime:randTime(),
  }));
};

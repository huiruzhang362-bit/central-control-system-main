// 型材切割排产算法 v1（移植自 排产_v1.py）—— 纯前端 JS，无需后端
// 入口：runSchedule(config) → output（结构与 排产_v1.build_output 一致）
// config: { db:{materials,parts}, batches:[[ship,seg,prog]...], topology,
//           splitThresholdSec, maxSplitMachines, alpha, gamma }
(function (root) {
  'use strict';

  const T_UNLOAD = 96, T_PRINT = 60, T_PAINT = 30, T_SORT = 30;
  const PROG_ORDER = { PJ: 1, PX: 2, PY: 3, PZ: 4 };
  const LONG_SHORT_THRESHOLD = 3000;
  const SYM = {'2':'3','3':'2','4':'5','5':'4','6':'7','7':'6','8':'9','9':'8'};

  const DEFAULT_TOPOLOGY = {
    outlets:  { E1:{enabled:true}, E2:{enabled:true} },
    machines: { C1:{enabled:true}, C2:{enabled:true}, C3:{enabled:true} },
    edges: [['E1','C1'],['E1','C2'],['E2','C2'],['E2','C3']],
  };
  const DEFAULT_BATCHES = [
    ['2779','3010','PY'],['2779','3010','PZ'],
    ['2779','3220','PY'],['2779','3220','PZ'],
    ['2779','3230','PY'],['2779','3240','PY'],
  ];

  function argmin(arr, keyFn){ let b=arr[0], bk=keyFn(arr[0]); for(let i=1;i<arr.length;i++){const k=keyFn(arr[i]); if(k<bk){bk=k;b=arr[i];}} return b; }
  function argmax(arr, keyFn){ let b=arr[0], bk=keyFn(arr[0]); for(let i=1;i<arr.length;i++){const k=keyFn(arr[i]); if(k>bk){bk=k;b=arr[i];}} return b; }
  function r1(x){ return Math.round((x + Number.EPSILON) * 10) / 10; }

  function _derive(topo){
    const ao = Object.keys(topo.outlets).filter(e=>topo.outlets[e].enabled);
    const am = Object.keys(topo.machines).filter(m=>topo.machines[m].enabled);
    if(topo.bypass_storage) return { OUTLETS:[], MACHINES:am, OUTLET_TO_MACHINES:{}, MACHINE_TO_OUTLETS:{}, bypassStorage:true };
    const ae = topo.edges.filter(([e,m])=>ao.includes(e)&&am.includes(m));
    const o2m={}, m2o={};
    for(const [e,m] of ae){ (o2m[e]=o2m[e]||[]).push(m); (m2o[m]=m2o[m]||[]).push(e); }
    const outlets = ao.filter(e=>o2m[e]&&o2m[e].length);
    const machines = am.filter(m=>m2o[m]&&m2o[m].length);
    return { OUTLETS:outlets, MACHINES:machines, OUTLET_TO_MACHINES:o2m, MACHINE_TO_OUTLETS:m2o };
  }

  function load_data(db, batches){
    const set = new Set(batches.map(b=>b[0]+''+b[1]+''+b[2]));
    // SCHED_DB.materials: program=程序号(全), program_code=程序号代码(PY/PZ)
    // 对齐 Python 内部命名：program=PY/PZ(短), program_code=程序号(全)
    const mats = [];
    for(const row of db.materials){
      const shortProg = row.program_code;            // PY/PZ/PX
      if(!set.has(row.ship+''+row.segment+''+shortProg)) continue;
      if(row.cut_time_raw==null || row.cut_time_raw<=0) continue;
      mats.push({ profile_id:row.profile_id, file_name:row.file_name,
        program_code: row.program, program: shortProg, ship:row.ship, segment:row.segment,
        material_type:row.material_type, section_size:row.section_size, length:row.length,
        actual_length:row.actual_length, part_count:row.part_count, cut_time_raw:row.cut_time_raw,
        parts:[] });
    }
    const byPid = {};
    for(const m of mats) byPid[m.profile_id]=m;
    for(const p of db.parts){
      const m = byPid[p.profile_id];
      if(!m) continue;
      m.parts.push({ part_id:p.part_id, profile_id:p.profile_id, name:p.name, ship:p.ship,
        segment_raw:p.segment_raw, dao_ci_raw:p.dao_ci_raw, left_end:p.left_end,
        right_end:p.right_end, mid_macros:p.mid_macros||0, length: (p.length==null?null:p.length) });
    }
    return mats;
  }

  function merge_segment(s){
    if(!s || String(s).length<3) return s;
    const pre3 = String(s).slice(0,3);
    if(pre3.length===3 && SYM[pre3[1]]!==undefined){
      const sym = pre3[0]+SYM[pre3[1]]+pre3[2];
      return sym < pre3 ? sym : pre3;
    }
    return pre3;
  }
  function merge_dao_ci(d){ return (d && String(d).length>=2) ? String(d).slice(0,2) : d; }
  function get_dao_lei(d){ return d ? String(d)[0] : d; }

  function compute_cut_time(mat){
    let t = mat.cut_time_raw || 0;
    for(const p of mat.parts){
      t += (2 + (p.mid_macros||0))*5;
      t += 3*3;
      t += 40;
      t /= 0.75;
    }
    return t;
  }

  function classify(mat){
    const parts = mat.parts;
    if(parts.some(p=>String(p.dao_ci_raw).startsWith('M-'))) return '加工件';
    const ls = new Set(parts.map(p=>p.dao_lei));
    if(ls.size===0) return '未知';
    if(ls.size===1) return '纯_'+Array.from(ls)[0];
    if(ls.has('H')) return 'H混套';
    if(ls.has('M')) return 'M混套';
    if(ls.has('C')) return 'C混套';
    return '其他混套';
  }

  function preprocess(materials){
    for(const m of materials){
      m.internal_seg = merge_segment(m.segment);
      for(const p of m.parts){ p.dao_ci = merge_dao_ci(p.dao_ci_raw); p.dao_lei = get_dao_lei(p.dao_ci); }
      m.dao_ci_set = new Set(m.parts.map(p=>p.dao_ci));
      m.dao_lei_set = new Set(m.parts.map(p=>p.dao_lei));
      m.category = classify(m);
      m.cut_time = compute_cut_time(m);
      m.batch_key = m.ship+''+m.internal_seg+''+m.program;
    }
    return materials;
  }

  function get_seg_index(cat, prog){
    if(prog==='PJ'||prog==='PX'){
      if(cat==='纯_C') return 0;
      if(cat==='C混套') return 1;
      if(cat.startsWith('纯_')) return 2;
      return 3;
    }
    if(cat==='纯_H') return 0;
    if(cat==='H混套') return 1;
    if(cat==='纯_M') return 2;
    if(cat==='M混套') return 3;
    if(cat==='加工件') return 4;
    if(cat==='纯_G'||cat==='纯_R') return 5;
    return 6;
  }

  function cmp(a,b){ return a<b?-1:(a>b?1:0); }

  function build_cut_packages(materials){
    const packages = {};
    for(const m of materials){ (packages[m.batch_key]=packages[m.batch_key]||[]).push(m); }
    for(const k of Object.keys(packages)){
      const prog = k.split('')[2];
      packages[k].sort((A,B)=>{
        const ai=get_seg_index(A.category,prog), bi=get_seg_index(B.category,prog);
        if(ai!==bi) return ai-bi;
        const ad = A.dao_ci_set.size? Array.from(A.dao_ci_set).sort()[0] : 'ZZ';
        const bd = B.dao_ci_set.size? Array.from(B.dao_ci_set).sort()[0] : 'ZZ';
        if(ad!==bd) return cmp(ad,bd);
        return (-A.length) - (-B.length);
      });
    }
    return packages;
  }

  function schedule_packages(packages, T){
    const { MACHINES } = T;
    let total_time=0; for(const k in packages) for(const m of packages[k]) total_time+=m.cut_time;
    const optimal = total_time / Math.max(MACHINES.length,1);
    const threshold = T.splitThresholdSec;
    const max_split = Math.max(1, T.maxSplitMachines);

    let pkg_list = Object.keys(packages).map(k=>{
      const [ship,seg,prog]=k.split('');
      const mats=packages[k];
      const tt=mats.reduce((s,m)=>s+m.cut_time,0);
      return {key:k, ship, segment:seg, program:prog, materials:mats, total_time:tt, split: tt>threshold};
    });
    pkg_list.sort((a,b)=>{
      if(a.ship!==b.ship) return cmp(a.ship,b.ship);
      if(a.segment!==b.segment) return cmp(a.segment,b.segment);
      const pa=PROG_ORDER[a.program]||99, pb=PROG_ORDER[b.program]||99;
      if(pa!==pb) return pa-pb;
      return (-a.total_time)-(-b.total_time);
    });

    const state={}; const same={};
    for(const m of MACHINES){ state[m]={completion_time:0.0, assigned:[]}; same[m]={}; }
    const ALPHA=T.alpha, GAMMA=T.gamma;
    function score_breakdown(m_id, ship, seg){
      const completion=state[m_id].completion_time;
      const same_bonus = (same[m_id][ship+''+seg]>0) ? -GAMMA : 0;
      const total = ALPHA*completion + same_bonus;
      return {completion_time:r1(completion), alpha_term:r1(ALPHA*completion),
              same_seg_bonus:r1(same_bonus), total_score:r1(total)};
    }
    function score(m_id, ship, seg){ return ALPHA*state[m_id].completion_time + ((same[m_id][ship+''+seg]>0)?-GAMMA:0); }

    const bm = T.batchMachine || {};
    const bo = T.batchOrder || {};
    const fkey = (p)=> p.ship+'|'+p.segment+'|'+p.program;
    const isForced = (p)=> MACHINES.indexOf(bm[fkey(p)])>=0;
    // ① 强制指派（机器 + 第几个生产顺序）先派：在该机器队列中按指定顺序靠前
    const forcedPkgs = pkg_list.filter(isForced).slice().sort((A2,B2)=>{
      const ma=bm[fkey(A2)], mb=bm[fkey(B2)];
      if(ma!==mb) return MACHINES.indexOf(ma)-MACHINES.indexOf(mb);
      const oa=parseInt(bo[fkey(A2)],10), ob=parseInt(bo[fkey(B2)],10);
      return (isNaN(oa)?9999:oa)-(isNaN(ob)?9999:ob);
    });
    for(const pkg of forcedPkgs){
      const ship=pkg.ship, seg=pkg.segment, m=bm[fkey(pkg)];
      for(const mat of pkg.materials){ mat.assigned_machine=m; state[m].assigned.push(mat); state[m].completion_time+=mat.cut_time; }
      same[m][ship+''+seg]=(same[m][ship+''+seg]||0)+1;
      const ord=parseInt(bo[fkey(pkg)],10);
      pkg.dispatch_log={mode:'forced', chosen:m, reason:'手动指定切割机 '+m+(isNaN(ord)?'':(' · 第'+ord+'个'))};
    }
    // ② 其余自动派单
    for(const pkg of pkg_list){
      if(isForced(pkg)) continue;
      const ship=pkg.ship, seg=pkg.segment;
      if(!pkg.split){
        const scores={}; for(const m of MACHINES) scores[m]=score_breakdown(m,ship,seg);
        const best = argmin(MACHINES, m=>score(m,ship,seg));
        pkg.dispatch_log={mode:'whole', weights:{alpha:ALPHA,gamma:GAMMA}, scores,
          chosen:best, reason:`机器 ${best} 打分最低 (${scores[best].total_score})`};
        for(const mat of pkg.materials){ mat.assigned_machine=best; state[best].assigned.push(mat); state[best].completion_time+=mat.cut_time; }
        same[best][ship+''+seg]=(same[best][ship+''+seg]||0)+1;
      } else {
        const used=new Set(); const per=[];
        for(const mat of pkg.materials){
          const candidates = (used.size<max_split)? MACHINES.slice() : Array.from(used);
          const scores={}; for(const m of candidates) scores[m]=score_breakdown(m,ship,seg);
          const best = argmin(candidates, m=>score(m,ship,seg));
          per.push({profile_id:mat.profile_id, file_name:mat.file_name||'', candidates:candidates.slice(), scores, chosen:best});
          mat.assigned_machine=best; used.add(best); state[best].assigned.push(mat); state[best].completion_time+=mat.cut_time;
          same[best][ship+''+seg]=(same[best][ship+''+seg]||0)+1;
        }
        pkg.dispatch_log={mode:'split', weights:{alpha:ALPHA,gamma:GAMMA}, max_split_machines:max_split,
          machines_used:Array.from(used).sort(), per_material:per};
      }
    }
    return {pkg_list, state, threshold, optimal};
  }

  function _outlet_plans(machine_state, T){
    const {OUTLETS, MACHINES, MACHINE_TO_OUTLETS} = T;
    const counts={}; for(const m of MACHINES) counts[m]=machine_state[m].assigned.length;
    const total=Object.values(counts).reduce((a,b)=>a+b,0);
    const target = total/Math.max(OUTLETS.length,1);
    const forced={}; for(const e of OUTLETS) forced[e]=0;
    const plans={}; const flexible=[];
    for(const m of MACHINES){
      const conn=MACHINE_TO_OUTLETS[m];
      if(conn.length===1){ const e=conn[0]; plans[m]=Array(counts[m]).fill(e); forced[e]+=counts[m]; }
      else flexible.push(m);
    }
    for(const m of flexible){
      const conn=MACHINE_TO_OUTLETS[m];
      const needs={}; for(const e of conn) needs[e]=Math.max(0, target-forced[e]);
      const sn=Object.values(needs).reduce((a,b)=>a+b,0);
      const ratios={};
      if(sn>0){ for(const e of conn) ratios[e]=needs[e]/sn; }
      else { for(const e of conn) ratios[e]=1.0/conn.length; }
      const shares={}; let run=0;
      for(let i=0;i<conn.length-1;i++){ const e=conn[i]; shares[e]=Math.round(counts[m]*ratios[e]); run+=shares[e]; }
      shares[conn[conn.length-1]] = counts[m]-run;
      for(const e of conn) forced[e]+=shares[e];
      const plan=[]; const left=Object.assign({},shares); const cum={}; for(const e of conn) cum[e]=0;
      for(let i=0;i<counts[m];i++){
        const ok=conn.filter(e=>left[e]>0);
        if(!ok.length){ plan.push(conn[0]); continue; }
        const best=argmax(ok, e=>ratios[e]*(i+1)-cum[e]);
        plan.push(best); cum[best]+=1; left[best]-=1;
      }
      plans[m]=plan;
    }
    return {plans, expected:forced};
  }

  function simulate_pipeline(machine_state, T){
    const {OUTLETS, MACHINES, MACHINE_TO_OUTLETS} = T;
    if(T.bypassStorage){
      const records=[];
      for(const m of MACHINES){ let cutFree=0; for(const mat of machine_state[m].assigned){ const c_start=cutFree, c_end=c_start+mat.cut_time, s_end=c_end+T_SORT; mat.outlet='—'; mat.timeline={unload:[c_start,c_start],print:[c_start,c_start],paint:[c_start,c_start],cut:[c_start,c_end],sort:[c_end,s_end]}; cutFree=c_end; records.push(mat); } }
      return records;
    }
    const {plans} = _outlet_plans(machine_state, T);
    const outlet_free={}, print_free={}; for(const e of OUTLETS){ outlet_free[e]=0; print_free[e]=0; }
    const prev_on_m={}; const queues={}; const next_plan={};
    for(const m of MACHINES){ prev_on_m[m]=null; queues[m]=machine_state[m].assigned.slice(); next_plan[m]=0; }
    const records=[];
    function admit_floor(prev){ if(!prev) return 0.0; return Math.max(prev.print_depart, prev.paint_depart - T_UNLOAD - T_PRINT); }

    function anyQueue(){ for(const m of MACHINES) if(queues[m].length) return true; return false; }
    while(anyQueue()){
      const cands=[];
      for(const m of MACHINES){
        if(!queues[m].length) continue;
        const outlet=plans[m][next_plan[m]];
        const prev=prev_on_m[m];
        const earliest=Math.max(outlet_free[outlet], admit_floor(prev));
        cands.push([earliest, m, outlet]);
      }
      cands.sort((a,b)=> a[0]!==b[0]? a[0]-b[0] : cmp(a[1],b[1]));
      const [, m_id, outlet]=cands[0];
      const mat=queues[m_id].shift(); next_plan[m_id]+=1;
      const prev=prev_on_m[m_id];

      const out_start=Math.max(outlet_free[outlet], admit_floor(prev));
      const out_svc_end=out_start+T_UNLOAD;
      const print_ready=Math.max(print_free[outlet], prev?prev.print_depart:0);
      const out_end=Math.max(out_svc_end, print_ready);
      outlet_free[outlet]=out_end;

      const p_start=out_end;
      const p_svc_end=p_start+T_PRINT;
      const paint_ready=prev?prev.paint_depart:0;
      const p_depart=Math.max(p_svc_end, paint_ready);
      print_free[outlet]=p_depart;

      const d_start=p_depart;
      const d_svc_end=d_start+T_PAINT;
      const cut_ready=prev?prev.cut_end:0;
      const d_depart=Math.max(d_svc_end, cut_ready);

      const c_start=d_depart;
      const c_end=c_start+mat.cut_time;
      const s_start=c_end;
      const s_end=s_start+T_SORT;

      prev_on_m[m_id]={print_depart:p_depart, paint_depart:d_depart, cut_end:c_end};
      mat.outlet=outlet;
      mat.timeline={ unload:[out_start,out_end], print:[p_start,p_depart], paint:[d_start,d_depart], cut:[c_start,c_end], sort:[s_start,s_end] };
      records.push(mat);
    }
    return records;
  }

  function assign_pallets(records, T){
    const {MACHINES} = T;
    const POOLS={short:['short-L','short-R'], long:['long-L','long-R']};
    const ALL_POS=['short-L','short-R','long-L','long-R'];
    const pallets={};
    for(const m of MACHINES){ pallets[m]={}; for(const p of ALL_POS) pallets[m][p]={load_events:[],clear_events:[],dao_ci_set:new Set()}; }
    const assign={}; const nxt={};
    for(const m of MACHINES) nxt[m]={short:0,long:0};
    function length_class(part, mat){
      let L=part.length;
      if(L==null){ const ml=mat.length||0; const pc=Math.max(1, mat.part_count||mat.parts.length); L=ml/pc; }
      return (L||0)>LONG_SHORT_THRESHOLD?'long':'short';
    }
    const events=[];
    for(const mat of records){
      const m_id=mat.assigned_machine; const t=mat.timeline.cut[1];
      for(const p of mat.parts){
        const cls=length_class(p,mat);
        const k=[m_id,mat.internal_seg,p.dao_ci,cls].join('');
        if(!(k in assign)){ const pool=POOLS[cls]; assign[k]=pool[nxt[m_id][cls]%pool.length]; nxt[m_id][cls]+=1; }
        events.push({machine:m_id, pallet:assign[k], t, part_id:p.part_id, profile_id:mat.profile_id,
          dao_ci:p.dao_ci, segment:mat.internal_seg, length:p.length, length_class:cls});
      }
    }
    events.sort((a,b)=>a.t-b.t);
    for(const e of events){
      pallets[e.machine][e.pallet].load_events.push({t:r1(e.t), part_id:e.part_id, profile_id:e.profile_id,
        dao_ci:e.dao_ci, segment:e.segment, length: e.length==null?null:r1(e.length), length_class:e.length_class});
      pallets[e.machine][e.pallet].dao_ci_set.add(e.dao_ci);
    }
    const last={};
    for(const e of events){ const k=[e.machine,e.segment,e.dao_ci,e.length_class].join(''); last[k]=Math.max(last[k]||0, e.t); }
    for(const k of Object.keys(last)){
      const [m_id,seg,dc,cls]=k.split(''); const pos=assign[k];
      pallets[m_id][pos].clear_events.push({t:r1(last[k]), reason:`道次 ${dc} / 分段 ${seg} / ${cls} 放完`});
    }
    return pallets;
  }

  function build_output(materials, pkg_list, state, records, pallets, threshold, optimal, T){
    const {OUTLETS, MACHINES, OUTLET_TO_MACHINES} = T;
    const mk_cut = records.reduce((mx,m)=>Math.max(mx,m.timeline.cut[1]),0);
    const mk_sort = records.reduce((mx,m)=>Math.max(mx,m.timeline.sort[1]),0);
    const machine_load={}, machine_profile_count={};
    for(const m of MACHINES){ machine_load[m]=r1(state[m].completion_time); machine_profile_count[m]=state[m].assigned.length; }
    return {
      meta:{
        constants:{ t_unload:T_UNLOAD, t_print:T_PRINT, t_paint:T_PAINT, t_sort:T_SORT,
          split_threshold_sec:T.splitThresholdSec, max_split_machines:T.maxSplitMachines,
          split_threshold:r1(threshold), dispatch_alpha:T.alpha, dispatch_gamma:T.gamma,
          optimal_makespan:r1(optimal), pipeline_model:'3-slot blocking + 叫料延后 (喷码→去底漆→切割)'},
        topology:{ outlets:OUTLETS, machines:MACHINES, outlet_to_machines:OUTLET_TO_MACHINES, bypass_storage:!!T.bypassStorage },
        makespan_cut:r1(mk_cut), makespan_sort:r1(mk_sort),
        num_profiles:materials.length,
        num_parts:materials.reduce((s,m)=>s+m.parts.length,0),
        num_packages:pkg_list.length,
        machine_load, machine_profile_count,
        data_source:{ db_path:(T.dbName||''), batches:T.batches.map(b=>b.slice()) },
      },
      schedule: pkg_list.map(p=>({
        batch_id:`${p.ship}-${p.segment}-${p.program}`, ship:p.ship, segment:p.segment, program:p.program,
        split:p.split, total_time:r1(p.total_time), dispatch_log:p.dispatch_log,
        materials:p.materials.map(m=>({ profile_id:m.profile_id, file_name:m.file_name, category:m.category,
          internal_segment:m.internal_seg, dao_ci_set:Array.from(m.dao_ci_set).sort(),
          is_mix:m.dao_lei_set.size>1, cut_time:r1(m.cut_time), length:m.length,
          material_type:m.material_type, section_size:m.section_size,
          assigned_machine:m.assigned_machine, outlet:m.outlet,
          timeline:Object.fromEntries(Object.entries(m.timeline).map(([k,v])=>[k,[r1(v[0]),r1(v[1])]])) })),
      })),
      outlet_timeline: (T.bypassStorage?[]:records).map(m=>({ outlet:m.outlet, start:r1(m.timeline.unload[0]), end:r1(m.timeline.unload[1]),
        profile_id:m.profile_id, to_machine:m.assigned_machine }))
        .sort((a,b)=> a.outlet!==b.outlet? cmp(a.outlet,b.outlet) : a.start-b.start),
      machine_timeline: records.map(m=>({ machine:m.assigned_machine, start:r1(m.timeline.cut[0]), end:r1(m.timeline.cut[1]),
        profile_id:m.profile_id, batch_id:`${m.ship}-${m.internal_seg}-${m.program}`, category:m.category }))
        .sort((a,b)=> a.machine!==b.machine? cmp(a.machine,b.machine) : a.start-b.start),
      pallet_timeline: (function(){
        const res=[];
        for(const m_id of MACHINES) for(const pos of ['short-L','short-R','long-L','long-R']){
          const pp=pallets[m_id][pos];
          if(!pp.load_events.length) continue;
          res.push({ pallet_id:`${m_id}-${pos}`, machine:m_id, position:pos,
            dao_ci_list:Array.from(pp.dao_ci_set).sort(), load_events:pp.load_events,
            clear_events:pp.clear_events.slice().sort((a,b)=>a.t-b.t) });
        }
        return res;
      })(),
    };
  }

  function runSchedule(config){
    config = config||{};
    const db = config.db || (root.SCHED_DB);
    const topology = config.topology || DEFAULT_TOPOLOGY;
    const der = _derive(topology);
    const T = Object.assign({}, der, {
      batches: config.batches || DEFAULT_BATCHES,
      splitThresholdSec: config.splitThresholdSec!=null?config.splitThresholdSec:30000,
      maxSplitMachines: config.maxSplitMachines!=null?config.maxSplitMachines:2,
      alpha: config.alpha!=null?config.alpha:1.0,
      gamma: config.gamma!=null?config.gamma:100.0,
      dbName: (db && db.db_name) || '',
      batchMachine: config.batchMachine || {},
      batchOrder: config.batchOrder || {},
    });
    if(!T.bypassStorage && !T.OUTLETS.length) throw new Error('没有启用的出料口');
    if(!T.MACHINES.length) throw new Error('没有启用的切割机');
    const materials = load_data(db, T.batches);
    preprocess(materials);
    const packages = build_cut_packages(materials);
    const {pkg_list, state, threshold, optimal} = schedule_packages(packages, T);
    const records = simulate_pipeline(state, T);
    const pallets = assign_pallets(records, T);
    return build_output(materials, pkg_list, state, records, pallets, threshold, optimal, T);
  }

  // 列出可选切割包（供前端 chips）
  function listBatches(db){
    db = db || root.SCHED_DB;
    const map = new Map();
    for(const row of db.materials){
      if(row.cut_time_raw==null || row.cut_time_raw<=0) continue;
      const key = row.ship+'|'+row.segment+'|'+row.program_code;
      if(!map.has(key)) map.set(key,{ship:row.ship, segment:row.segment, program:row.program_code, profile_count:0, cut_time:0});
      const o=map.get(key); o.profile_count+=1; o.cut_time+=row.cut_time_raw;
    }
    return Array.from(map.values()).sort((a,b)=>
      a.ship!==b.ship?cmp(a.ship,b.ship):(a.segment!==b.segment?cmp(a.segment,b.segment):cmp(a.program,b.program)));
  }

  root.runSchedule = runSchedule;
  root.listSchedBatches = listBatches;
  if (typeof module!=='undefined' && module.exports) module.exports = { runSchedule, listBatches };
})(typeof window!=='undefined'?window:globalThis);

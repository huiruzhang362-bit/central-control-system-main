// 加工任务真实假数据（来自 gen数据_1.db 抽样）。改这里即可改原型加工任务页数据。
// 由 中控系统.html 在主脚本前引入；与 加工任务_假数据.json 同源。
window.PROFILE_DB = {
  "_说明": "基于 gen数据_1.db 抽样的真实记录假数据（型材 → 零件 → 孔 三层）。字段值均来自原始数据库。",
  "_枚举": {
    "船号": [
      "2779",
      "2791"
    ],
    "分段号": [
      "3010",
      "3220",
      "3230",
      "3240",
      "3250",
      "3260",
      "3270",
      "5210",
      "5220",
      "5230",
      "5240",
      "1211",
      "1230",
      "2040",
      "8110",
      "8410",
      "8420",
      "8430"
    ],
    "程序号代码": [
      "PY",
      "PZ",
      "PX"
    ],
    "原材料": [
      "角钢(L)"
    ],
    "截面尺寸": [
      "400*100*11.5*16",
      "350*100*12*17",
      "200*90*9*14",
      "250*90*10*15",
      "300*90*12*17",
      "250*90*12*16",
      "300*90*10*16",
      "200*90*10*14",
      "150*90*12",
      "150*90*9"
    ],
    "道次": [
      "H1H2",
      "H3G1",
      "G1",
      "",
      "H2G1",
      "S1S1",
      "S1H2",
      "H2M5",
      "H2M1",
      "C1S1",
      "S1M1",
      "M1G1",
      "C1G1",
      "C1M2",
      "M2G1"
    ],
    "宏名称": [
      "D50",
      "R10",
      "HE150*75",
      "KE150*70*75",
      "D35",
      "KU40*12",
      "R35",
      "HE100*50"
    ]
  },
  "_统计": {
    "型材数": 40,
    "零件数": 83,
    "孔数": 122
  },
  "型材": [
    {
      "profile_id": 1,
      "套料版图号": "27793010HCPY001-1-01",
      "文件名": "27793010HCPY001-1-01-g.gen",
      "程序号": "27793010HCPY001-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "400*100*11.5*16",
      "型材规格": "400×100×11.5×16",
      "长度": 12000.0,
      "实际使用长度mm": 11948.3,
      "剩余余料长度mm": 51.7002,
      "零件个数": 1,
      "切割时间s": 221.99,
      "零件": [
        {
          "part_id": 1,
          "零件名称": "3011-IB1B-L6",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 8,
          "孔": [
            {
              "宏名称": "D50",
              "位置mm": 677.2
            },
            {
              "宏名称": "D50",
              "位置mm": 1177.4
            },
            {
              "宏名称": "D50",
              "位置mm": 3738.3
            },
            {
              "宏名称": "D50",
              "位置mm": 4838.7
            },
            {
              "宏名称": "D50",
              "位置mm": 7399.6
            },
            {
              "宏名称": "D50",
              "位置mm": 7899.8
            },
            {
              "宏名称": "D50",
              "位置mm": 9920.5
            },
            {
              "宏名称": "D50",
              "位置mm": 10420.7
            }
          ]
        }
      ]
    },
    {
      "profile_id": 2,
      "套料版图号": "27793010HCPY001-1-02",
      "文件名": "27793010HCPY001-1-02-g.gen",
      "程序号": "27793010HCPY001-1-02",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "400*100*11.5*16",
      "型材规格": "400×100×11.5×16",
      "长度": 12000.0,
      "实际使用长度mm": 11948.3,
      "剩余余料长度mm": 51.7002,
      "零件个数": 1,
      "切割时间s": 222.07,
      "零件": [
        {
          "part_id": 2,
          "零件名称": "3011-IB1B-L4",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 8,
          "孔": [
            {
              "宏名称": "D50",
              "位置mm": 377.1
            },
            {
              "宏名称": "D50",
              "位置mm": 1477.5
            },
            {
              "宏名称": "D50",
              "位置mm": 4038.4
            },
            {
              "宏名称": "D50",
              "位置mm": 4538.6
            },
            {
              "宏名称": "D50",
              "位置mm": 7099.5
            },
            {
              "宏名称": "D50",
              "位置mm": 8199.9
            },
            {
              "宏名称": "D50",
              "位置mm": 9620.4
            },
            {
              "宏名称": "D50",
              "位置mm": 10720.8
            }
          ]
        }
      ]
    },
    {
      "profile_id": 3,
      "套料版图号": "27793010HCPY001-1-03",
      "文件名": "27793010HCPY001-1-03-g.gen",
      "程序号": "27793010HCPY001-1-03",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "400*100*11.5*16",
      "型材规格": "400×100×11.5×16",
      "长度": 12000.0,
      "实际使用长度mm": 11948.3,
      "剩余余料长度mm": 51.7002,
      "零件个数": 1,
      "切割时间s": 218.24,
      "零件": [
        {
          "part_id": 3,
          "零件名称": "3011-IB1B-L18",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 8,
          "孔": [
            {
              "宏名称": "D50",
              "位置mm": 1527.5
            },
            {
              "宏名称": "D50",
              "位置mm": 2027.7
            },
            {
              "宏名称": "D50",
              "位置mm": 4048.4
            },
            {
              "宏名称": "D50",
              "位置mm": 4548.6
            },
            {
              "宏名称": "D50",
              "位置mm": 7109.5
            },
            {
              "宏名称": "D50",
              "位置mm": 8209.9
            },
            {
              "宏名称": "D50",
              "位置mm": 10770.8
            },
            {
              "宏名称": "D50",
              "位置mm": 11271.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 4,
      "套料版图号": "27793010HCPY001-1-04",
      "文件名": "27793010HCPY001-1-04-g.gen",
      "程序号": "27793010HCPY001-1-04",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "400*100*11.5*16",
      "型材规格": "400×100×11.5×16",
      "长度": 12000.0,
      "实际使用长度mm": 11948.3,
      "剩余余料长度mm": 51.7002,
      "零件个数": 1,
      "切割时间s": 218.32,
      "零件": [
        {
          "part_id": 4,
          "零件名称": "3011-IB1B-L16",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 8,
          "孔": [
            {
              "宏名称": "D50",
              "位置mm": 1227.4
            },
            {
              "宏名称": "D50",
              "位置mm": 2327.8
            },
            {
              "宏名称": "D50",
              "位置mm": 3748.3
            },
            {
              "宏名称": "D50",
              "位置mm": 4848.7
            },
            {
              "宏名称": "D50",
              "位置mm": 7409.6
            },
            {
              "宏名称": "D50",
              "位置mm": 7909.8
            },
            {
              "宏名称": "D50",
              "位置mm": 10470.7
            },
            {
              "宏名称": "D50",
              "位置mm": 11571.1
            }
          ]
        }
      ]
    },
    {
      "profile_id": 17,
      "套料版图号": "27793010HCPY003-1-01",
      "文件名": "27793010HCPY003-1-01-g.gen",
      "程序号": "27793010HCPY003-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "350*100*12*17",
      "型材规格": "350×100×12×17",
      "长度": 12000.0,
      "实际使用长度mm": 11948.3,
      "剩余余料长度mm": 51.7002,
      "零件个数": 1,
      "切割时间s": 77.4,
      "零件": [
        {
          "part_id": 25,
          "零件名称": "3011-IB1B-L25",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 18,
      "套料版图号": "27793010HCPY003-2-01",
      "文件名": "27793010HCPY003-2-01-g.gen",
      "程序号": "27793010HCPY003-2-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "350*100*12*17",
      "型材规格": "350×100×12×17",
      "长度": 6000.0,
      "实际使用长度mm": 4210.5,
      "剩余余料长度mm": 1789.5,
      "零件个数": 1,
      "切割时间s": 71.54,
      "零件": [
        {
          "part_id": 26,
          "零件名称": "3011-IB1B-L26",
          "船号": "2779",
          "分段号": "3011",
          "道次": "H1H2",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 19,
      "套料版图号": "27793010HCPY004-1-01",
      "文件名": "27793010HCPY004-1-01-g.gen",
      "程序号": "27793010HCPY004-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "350*100*12*17",
      "型材规格": "350×100×12×17",
      "长度": 9000.0,
      "实际使用长度mm": 8947.2,
      "剩余余料长度mm": 52.7998,
      "零件个数": 1,
      "切割时间s": 222.2,
      "零件": [
        {
          "part_id": 27,
          "零件名称": "3013-BS1B-L4",
          "船号": "2779",
          "分段号": "3013",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE150*75",
              "位置mm": 537.2
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 2037.7
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 3898.4
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 5298.9
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 6519.3
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 7919.8
            }
          ]
        }
      ]
    },
    {
      "profile_id": 21,
      "套料版图号": "27793010HCPY005-1-01",
      "文件名": "27793010HCPY005-1-01-g.gen",
      "程序号": "27793010HCPY005-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*9*14",
      "型材规格": "200×90×9×14",
      "长度": 9000.0,
      "实际使用长度mm": 8947.2,
      "剩余余料长度mm": 52.7998,
      "零件个数": 1,
      "切割时间s": 242.52,
      "零件": [
        {
          "part_id": 29,
          "零件名称": "3013-BS1B-L3",
          "船号": "2779",
          "分段号": "3013",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 12,
          "孔": [
            {
              "宏名称": "D35",
              "位置mm": 57.0
            },
            {
              "宏名称": "D35",
              "位置mm": 837.3
            },
            {
              "宏名称": "D35",
              "位置mm": 1737.6
            },
            {
              "宏名称": "D35",
              "位置mm": 2517.9
            },
            {
              "宏名称": "D35",
              "位置mm": 3418.2
            },
            {
              "宏名称": "D35",
              "位置mm": 4198.5
            },
            {
              "宏名称": "D35",
              "位置mm": 5098.8
            },
            {
              "宏名称": "D35",
              "位置mm": 5458.9
            },
            {
              "宏名称": "D35",
              "位置mm": 6359.3
            },
            {
              "宏名称": "D35",
              "位置mm": 6719.4
            },
            {
              "宏名称": "D35",
              "位置mm": 7619.7
            },
            {
              "宏名称": "D35",
              "位置mm": 8400.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 22,
      "套料版图号": "27793010HCPY005-1-02",
      "文件名": "27793010HCPY005-1-02-g.gen",
      "程序号": "27793010HCPY005-1-02",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*9*14",
      "型材规格": "200×90×9×14",
      "长度": 9000.0,
      "实际使用长度mm": 8947.2,
      "剩余余料长度mm": 52.7998,
      "零件个数": 1,
      "切割时间s": 242.52,
      "零件": [
        {
          "part_id": 30,
          "零件名称": "3013-BS1B-L2",
          "船号": "2779",
          "分段号": "3013",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 12,
          "孔": [
            {
              "宏名称": "D35",
              "位置mm": 57.0
            },
            {
              "宏名称": "D35",
              "位置mm": 837.3
            },
            {
              "宏名称": "D35",
              "位置mm": 1737.6
            },
            {
              "宏名称": "D35",
              "位置mm": 2517.9
            },
            {
              "宏名称": "D35",
              "位置mm": 3418.2
            },
            {
              "宏名称": "D35",
              "位置mm": 4198.5
            },
            {
              "宏名称": "D35",
              "位置mm": 5098.8
            },
            {
              "宏名称": "D35",
              "位置mm": 5458.9
            },
            {
              "宏名称": "D35",
              "位置mm": 6359.3
            },
            {
              "宏名称": "D35",
              "位置mm": 6719.4
            },
            {
              "宏名称": "D35",
              "位置mm": 7619.7
            },
            {
              "宏名称": "D35",
              "位置mm": 8400.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 23,
      "套料版图号": "27793010HCPY005-1-03",
      "文件名": "27793010HCPY005-1-03-g.gen",
      "程序号": "27793010HCPY005-1-03",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "3010",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*9*14",
      "型材规格": "200×90×9×14",
      "长度": 9000.0,
      "实际使用长度mm": 8947.2,
      "剩余余料长度mm": 52.7998,
      "零件个数": 1,
      "切割时间s": 242.52,
      "零件": [
        {
          "part_id": 31,
          "零件名称": "3013-BS1B-L1",
          "船号": "2779",
          "分段号": "3013",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 12,
          "孔": [
            {
              "宏名称": "D35",
              "位置mm": 57.0
            },
            {
              "宏名称": "D35",
              "位置mm": 837.3
            },
            {
              "宏名称": "D35",
              "位置mm": 1737.6
            },
            {
              "宏名称": "D35",
              "位置mm": 2517.9
            },
            {
              "宏名称": "D35",
              "位置mm": 3418.2
            },
            {
              "宏名称": "D35",
              "位置mm": 4198.5
            },
            {
              "宏名称": "D35",
              "位置mm": 5098.8
            },
            {
              "宏名称": "D35",
              "位置mm": 5458.9
            },
            {
              "宏名称": "D35",
              "位置mm": 6359.3
            },
            {
              "宏名称": "D35",
              "位置mm": 6719.4
            },
            {
              "宏名称": "D35",
              "位置mm": 7619.7
            },
            {
              "宏名称": "D35",
              "位置mm": 8400.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 574,
      "套料版图号": "27795210HCPX001-1-01",
      "文件名": "27795210HCPX001-1-01-g.gen",
      "程序号": "27795210HCPX001-1-01",
      "程序号代码": "PX",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*10*15",
      "型材规格": "250×90×10×15",
      "长度": 9000.0,
      "实际使用长度mm": 8949.3,
      "剩余余料长度mm": 50.7002,
      "零件个数": 1,
      "切割时间s": 230.2,
      "零件": [
        {
          "part_id": 602,
          "零件名称": "5210-IS1A-L1",
          "船号": "2779",
          "分段号": "5210",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 487.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 1888.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3849.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 5250.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 7211.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 8612.1
            }
          ]
        }
      ]
    },
    {
      "profile_id": 575,
      "套料版图号": "27795210HCPX001-2-01",
      "文件名": "27795210HCPX001-2-01-g.gen",
      "程序号": "27795210HCPX001-2-01",
      "程序号代码": "PX",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*10*15",
      "型材规格": "250×90×10×15",
      "长度": 5120.0,
      "实际使用长度mm": 3851.3,
      "剩余余料长度mm": 1268.7,
      "零件个数": 1,
      "切割时间s": 120.36,
      "零件": [
        {
          "part_id": 603,
          "零件名称": "5210-IS1A-L2",
          "船号": "2779",
          "分段号": "5210",
          "道次": "S1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 3,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 1823.1
            },
            {
              "宏名称": "R10",
              "位置mm": 2473.5
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3223.9
            }
          ]
        }
      ]
    },
    {
      "profile_id": 576,
      "套料版图号": "27795210HCPX002-1-01",
      "文件名": "27795210HCPX002-1-01-g.gen",
      "程序号": "27795210HCPX002-1-01",
      "程序号代码": "PX",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*10*15",
      "型材规格": "250×90×10×15",
      "长度": 9000.0,
      "实际使用长度mm": 8949.3,
      "剩余余料长度mm": 50.7002,
      "零件个数": 1,
      "切割时间s": 212.43,
      "零件": [
        {
          "part_id": 604,
          "零件名称": "5310-IS1A-L1",
          "船号": "2779",
          "分段号": "5310",
          "道次": "S1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 337.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 1738.0
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3699.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 5100.0
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 7061.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 8462.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 580,
      "套料版图号": "27795210HCPY001-1-01",
      "文件名": "27795210HCPY001-1-01-g.gen",
      "程序号": "27795210HCPY001-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*12*17",
      "型材规格": "300×90×12×17",
      "长度": 9000.0,
      "实际使用长度mm": 8949.3,
      "剩余余料长度mm": 50.7002,
      "零件个数": 1,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 612,
          "零件名称": "5211-SS1A-L7",
          "船号": "2779",
          "分段号": "5211",
          "道次": "H3G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 337.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 1738.0
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3699.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 5100.0
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 7061.2
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 8462.0
            }
          ]
        }
      ]
    },
    {
      "profile_id": 581,
      "套料版图号": "27795210HCPY001-1-02",
      "文件名": "27795210HCPY001-1-02-g.gen",
      "程序号": "27795210HCPY001-1-02",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*12*17",
      "型材规格": "300×90×12×17",
      "长度": 9000.0,
      "实际使用长度mm": 8949.3,
      "剩余余料长度mm": 50.7002,
      "零件个数": 1,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 613,
          "零件名称": "5311-SS1A-L7",
          "船号": "2779",
          "分段号": "5311",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 487.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 1888.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3849.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 5250.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 7211.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 8612.1
            }
          ]
        }
      ]
    },
    {
      "profile_id": 582,
      "套料版图号": "27795210HCPY001-1-03",
      "文件名": "27795210HCPY001-1-03-g.gen",
      "程序号": "27795210HCPY001-1-03",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "5210",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*12*17",
      "型材规格": "300×90×12×17",
      "长度": 9000.0,
      "实际使用长度mm": 7702.8,
      "剩余余料长度mm": 1297.2,
      "零件个数": 2,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 614,
          "零件名称": "5211-SS1A-L1",
          "船号": "2779",
          "分段号": "5211",
          "道次": "H3G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 3,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 627.4
            },
            {
              "宏名称": "R10",
              "位置mm": 1377.8
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 2028.2
            }
          ]
        },
        {
          "part_id": 615,
          "零件名称": "5311-SS1A-L1",
          "船号": "2779",
          "分段号": "5311",
          "道次": "H3G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 3,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 1822.9
            },
            {
              "宏名称": "R10",
              "位置mm": 2473.3
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3223.7
            }
          ]
        }
      ]
    },
    {
      "profile_id": 604,
      "套料版图号": "27795220HCPX001-1-01",
      "文件名": "27795220HCPX001-1-01-g.gen",
      "程序号": "27795220HCPX001-1-01",
      "程序号代码": "PX",
      "船号": "2779",
      "分段号": "5220",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*12*16",
      "型材规格": "250×90×12×16",
      "长度": 9000.0,
      "实际使用长度mm": 5249.4,
      "剩余余料长度mm": 3750.6,
      "零件个数": 6,
      "切割时间s": 533.52,
      "零件": [
        {
          "part_id": 644,
          "零件名称": "5220-IS1A-S1",
          "船号": "2779",
          "分段号": "5220",
          "道次": "S1S1",
          "左端宏类型": "23",
          "左端宏参数": "ENDCUT_CODE=2326; B=240; R1=50; V1=90; V2=30; V3=45; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 645,
          "零件名称": "5320-IS1A-S1",
          "船号": "2779",
          "分段号": "5320",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "23",
          "右端宏参数": "ENDCUT_CODE=2326; B=240; R1=50; V1=90; V2=30; V3=45; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 646,
          "零件名称": "5220-IS1A-T302",
          "船号": "2779",
          "分段号": "5220",
          "道次": "S1S1",
          "左端宏类型": "23",
          "左端宏参数": "ENDCUT_CODE=2326; B=240; R1=50; V1=90; V2=30; V3=45; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "28",
          "右端宏参数": "ENDCUT_CODE=2825; A=120; B=200; R1=50; R2=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 647,
          "零件名称": "5320-IS1A-T302",
          "船号": "2779",
          "分段号": "5320",
          "道次": "S1S1",
          "左端宏类型": "28",
          "左端宏参数": "ENDCUT_CODE=2825; A=120; B=200; R1=50; R2=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "23",
          "右端宏参数": "ENDCUT_CODE=2326; B=240; R1=50; V1=90; V2=30; V3=45; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 648,
          "零件名称": "5220-IS1A-T301",
          "船号": "2779",
          "分段号": "5220",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 649,
          "零件名称": "5320-IS1A-T301",
          "船号": "2779",
          "分段号": "5320",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 609,
      "套料版图号": "27795220HCPY001-1-01",
      "文件名": "27795220HCPY001-1-01-g.gen",
      "程序号": "27795220HCPY001-1-01",
      "程序号代码": "PY",
      "船号": "2779",
      "分段号": "5220",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*12*17",
      "型材规格": "300×90×12×17",
      "长度": 9000.0,
      "实际使用长度mm": 8949.3,
      "剩余余料长度mm": 50.7002,
      "零件个数": 1,
      "切割时间s": 283.99,
      "零件": [
        {
          "part_id": 654,
          "零件名称": "5221-SS1A-L1",
          "船号": "2779",
          "分段号": "5221",
          "道次": "H3G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 6,
          "孔": [
            {
              "宏名称": "HE100*50",
              "位置mm": 137.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 1537.9
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 3499.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 4899.9
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 6861.1
            },
            {
              "宏名称": "HE100*50",
              "位置mm": 8261.9
            }
          ]
        }
      ]
    },
    {
      "profile_id": 633,
      "套料版图号": "27795220HCPZ001-1-01",
      "文件名": "27795220HCPZ001-1-01-g.gen",
      "程序号": "27795220HCPZ001-1-01",
      "程序号代码": "PZ",
      "船号": "2779",
      "分段号": "5220",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*12*16",
      "型材规格": "250×90×12×16",
      "长度": 3600.0,
      "实际使用长度mm": 1852.4,
      "剩余余料长度mm": 1747.6,
      "零件个数": 2,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 686,
          "零件名称": "5220-000-S1",
          "船号": "2779",
          "分段号": "5220",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 687,
          "零件名称": "5320-000-S1",
          "船号": "2779",
          "分段号": "5320",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 710,
      "套料版图号": "27911211HCPX002-1-01",
      "文件名": "27911211HCPX002-1-01-g.gen",
      "程序号": "27911211HCPX002-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*10*16",
      "型材规格": "300×90×10×16",
      "长度": 6000.0,
      "实际使用长度mm": 3590.8,
      "剩余余料长度mm": 2409.2,
      "零件个数": 4,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 786,
          "零件名称": "1211-LB9B-S2",
          "船号": "2791",
          "分段号": "1211",
          "道次": "C1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 787,
          "零件名称": "1211-LB9B-S1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "C1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 788,
          "零件名称": "1311-LB9B-S2",
          "船号": "2791",
          "分段号": "1311",
          "道次": "C1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 789,
          "零件名称": "1311-LB9B-S1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "C1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 711,
      "套料版图号": "27911211HCPX003-1-01",
      "文件名": "27911211HCPX003-1-01-g.gen",
      "程序号": "27911211HCPX003-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*10*15",
      "型材规格": "250×90×10×15",
      "长度": 9000.0,
      "实际使用长度mm": 7181.6,
      "剩余余料长度mm": 1818.4,
      "零件个数": 8,
      "切割时间s": 617.0,
      "零件": [
        {
          "part_id": 790,
          "零件名称": "1211-PF1A-L8",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 791,
          "零件名称": "1211-PF1A-L7",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 792,
          "零件名称": "1211-PF1A-L6",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 793,
          "零件名称": "1211-PF1A-L5",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 794,
          "零件名称": "1211-PF1A-L4",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 795,
          "零件名称": "1211-PF1A-L3",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 796,
          "零件名称": "1211-LB18B-S1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "C1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 797,
          "零件名称": "1311-LB18B-S1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "C1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 713,
      "套料版图号": "27911211HCPX004-1-01",
      "文件名": "27911211HCPX004-1-01-g.gen",
      "程序号": "27911211HCPX004-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*10*14",
      "型材规格": "200×90×10×14",
      "长度": 12000.0,
      "实际使用长度mm": 11870.3,
      "剩余余料长度mm": 129.7,
      "零件个数": 5,
      "切割时间s": 400.49,
      "零件": [
        {
          "part_id": 804,
          "零件名称": "1211-LB12A-S7",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2192; R1=-10; V1=90; V2=30; KS=10; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=81.3; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 805,
          "零件名称": "1211-TB12A-S1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 806,
          "零件名称": "1211-TB12A-S3",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 807,
          "零件名称": "1211-TB12A-S6",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.5; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 808,
          "零件名称": "1211-TB12A-S12",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=100.1; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 714,
      "套料版图号": "27911211HCPX004-1-02",
      "文件名": "27911211HCPX004-1-02-g.gen",
      "程序号": "27911211HCPX004-1-02",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*10*14",
      "型材规格": "200×90×10×14",
      "长度": 12000.0,
      "实际使用长度mm": 11870.3,
      "剩余余料长度mm": 129.7,
      "零件个数": 5,
      "切割时间s": 401.22,
      "零件": [
        {
          "part_id": 809,
          "零件名称": "1311-LB12A-S7",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=81.3; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2192; R1=-10; V1=90; V2=30; KS=10; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 810,
          "零件名称": "1311-TB12A-S1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 811,
          "零件名称": "1311-TB12A-S3",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 812,
          "零件名称": "1311-TB12A-S6",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.5; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 813,
          "零件名称": "1311-TB12A-S12",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=100.1; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 715,
      "套料版图号": "27911211HCPX004-1-03",
      "文件名": "27911211HCPX004-1-03-g.gen",
      "程序号": "27911211HCPX004-1-03",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*10*14",
      "型材规格": "200×90×10×14",
      "长度": 12000.0,
      "实际使用长度mm": 9199.0,
      "剩余余料长度mm": 2801.0,
      "零件个数": 6,
      "切割时间s": 459.17,
      "零件": [
        {
          "part_id": 814,
          "零件名称": "1211-TB12A-S2",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 815,
          "零件名称": "1311-TB12A-S2",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 816,
          "零件名称": "1311-LB21B-S1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "C1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 817,
          "零件名称": "1211-LB21B-S1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "C1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 818,
          "零件名称": "1211-LB12B-S1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "C1S1",
          "左端宏类型": "23",
          "左端宏参数": "ENDCUT_CODE=2303; B=15; R1=0; V1=90; V2=30; V3=45; KS=0; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 819,
          "零件名称": "1311-LB12B-S1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "C1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "23",
          "右端宏参数": "ENDCUT_CODE=2303; B=15; R1=0; V1=90; V2=30; V3=45; KS=0; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 716,
      "套料版图号": "27911211HCPX004-2-01",
      "文件名": "27911211HCPX004-2-01-g.gen",
      "程序号": "27911211HCPX004-2-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*10*14",
      "型材规格": "200×90×10×14",
      "长度": 9000.0,
      "实际使用长度mm": 8797.1,
      "剩余余料长度mm": 202.9,
      "零件个数": 4,
      "切割时间s": 316.86,
      "零件": [
        {
          "part_id": 820,
          "零件名称": "1211-LB15A-S8",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2192; R1=-10; V1=90; V2=30; KS=10; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=77.7; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 821,
          "零件名称": "1211-TB12A-S4",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.8; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 822,
          "零件名称": "1211-TB12A-S5",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=80.7; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 823,
          "零件名称": "1211-TB12A-S13",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1M1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=99.9; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 718,
      "套料版图号": "27911211HCPX005-1-01",
      "文件名": "27911211HCPX005-1-01-g.gen",
      "程序号": "27911211HCPX005-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*12",
      "型材规格": "150×90×12",
      "长度": 6000.0,
      "实际使用长度mm": 3590.8,
      "剩余余料长度mm": 2409.2,
      "零件个数": 4,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 828,
          "零件名称": "1211-PF1A-L2",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 829,
          "零件名称": "1211-PF1A-L1",
          "船号": "2791",
          "分段号": "1211",
          "道次": "S1S1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 830,
          "零件名称": "1311-PF1A-L2",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 831,
          "零件名称": "1311-PF1A-L1",
          "船号": "2791",
          "分段号": "1311",
          "道次": "S1S1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 719,
      "套料版图号": "27911211HCPY001-1-01",
      "文件名": "27911211HCPY001-1-01-g.gen",
      "程序号": "27911211HCPY001-1-01",
      "程序号代码": "PY",
      "船号": "2791",
      "分段号": "1211",
      "原材料": "角钢(L)",
      "截面尺寸": "350*100*12*17",
      "型材规格": "350×100×12×17",
      "长度": 12000.0,
      "实际使用长度mm": 11902.9,
      "剩余余料长度mm": 97.0996,
      "零件个数": 1,
      "切割时间s": 404.97,
      "零件": [
        {
          "part_id": 832,
          "零件名称": "1211-DK1A-L13",
          "船号": "2791",
          "分段号": "1211",
          "道次": "M1G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=80.7; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=-900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=0; ANGLE_OS=70; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=-900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=70",
          "中间宏个数": 9,
          "孔": [
            {
              "宏名称": "HE150*75",
              "位置mm": 350.3
            },
            {
              "宏名称": "R10",
              "位置mm": 907.7
            },
            {
              "宏名称": "R10",
              "位置mm": 1212.0
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 1992.6
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 4253.4
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 5824.6
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 7495.9
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 9066.2
            },
            {
              "宏名称": "HE150*75",
              "位置mm": 10736.5
            }
          ]
        }
      ]
    },
    {
      "profile_id": 744,
      "套料版图号": "27911230HCPX001-1-01",
      "文件名": "27911230HCPX001-1-01-g.gen",
      "程序号": "27911230HCPX001-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*12*16",
      "型材规格": "250×90×12×16",
      "长度": 1370.0,
      "实际使用长度mm": 897.7,
      "剩余余料长度mm": 472.3,
      "零件个数": 1,
      "切割时间s": 114.84,
      "零件": [
        {
          "part_id": 872,
          "零件名称": "1230-LB27C-S1",
          "船号": "2791",
          "分段号": "1230",
          "道次": "C1G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 745,
      "套料版图号": "27911230HCPX001-2-01",
      "文件名": "27911230HCPX001-2-01-g.gen",
      "程序号": "27911230HCPX001-2-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "250*90*12*16",
      "型材规格": "250×90×12×16",
      "长度": 1370.0,
      "实际使用长度mm": 897.7,
      "剩余余料长度mm": 472.3,
      "零件个数": 1,
      "切割时间s": 116.48,
      "零件": [
        {
          "part_id": 873,
          "零件名称": "1330-LB27C-S1",
          "船号": "2791",
          "分段号": "1330",
          "道次": "C1G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=20; B=12; R1=12; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 747,
      "套料版图号": "27911230HCPX003-1-01",
      "文件名": "27911230HCPX003-1-01-g.gen",
      "程序号": "27911230HCPX003-1-01",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*9",
      "型材规格": "150×90×9",
      "长度": 9000.0,
      "实际使用长度mm": 8559.0,
      "剩余余料长度mm": 441.0,
      "零件个数": 2,
      "切割时间s": 135.83,
      "零件": [
        {
          "part_id": 880,
          "零件名称": "1231-TS07A-S5",
          "船号": "2791",
          "分段号": "1231",
          "道次": "M1G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 881,
          "零件名称": "1231-TS07A-S4",
          "船号": "2791",
          "分段号": "1231",
          "道次": "M1G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 748,
      "套料版图号": "27911230HCPX003-1-02",
      "文件名": "27911230HCPX003-1-02-g.gen",
      "程序号": "27911230HCPX003-1-02",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*9",
      "型材规格": "150×90×9",
      "长度": 9000.0,
      "实际使用长度mm": 8559.0,
      "剩余余料长度mm": 441.0,
      "零件个数": 2,
      "切割时间s": 135.89,
      "零件": [
        {
          "part_id": 882,
          "零件名称": "1231-TS07A-S1",
          "船号": "2791",
          "分段号": "1231",
          "道次": "M1G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "22",
          "右端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 883,
          "零件名称": "1331-TS07A-S5",
          "船号": "2791",
          "分段号": "1331",
          "道次": "M1G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 749,
      "套料版图号": "27911230HCPX003-1-03",
      "文件名": "27911230HCPX003-1-03-g.gen",
      "程序号": "27911230HCPX003-1-03",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*9",
      "型材规格": "150×90×9",
      "长度": 9000.0,
      "实际使用长度mm": 8559.0,
      "剩余余料长度mm": 441.0,
      "零件个数": 2,
      "切割时间s": 134.67,
      "零件": [
        {
          "part_id": 884,
          "零件名称": "1331-TS07A-S4",
          "船号": "2791",
          "分段号": "1331",
          "道次": "M1G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 885,
          "零件名称": "1331-TS07A-S1",
          "船号": "2791",
          "分段号": "1331",
          "道次": "M1G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 750,
      "套料版图号": "27911230HCPX003-1-04",
      "文件名": "27911230HCPX003-1-04-g.gen",
      "程序号": "27911230HCPX003-1-04",
      "程序号代码": "PX",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*9",
      "型材规格": "150×90×9",
      "长度": 9000.0,
      "实际使用长度mm": 8453.0,
      "剩余余料长度mm": 547.0,
      "零件个数": 4,
      "切割时间s": 279.66,
      "零件": [
        {
          "part_id": 886,
          "零件名称": "1232-FR10A-S1",
          "船号": "2791",
          "分段号": "1232",
          "道次": "C1M2",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "23",
          "右端宏参数": "ENDCUT_CODE=2303; B=15; R1=0; V1=90; V2=30; V3=30; KS=0; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 887,
          "零件名称": "1332-FR10A-S1",
          "船号": "2791",
          "分段号": "1332",
          "道次": "C1M2",
          "左端宏类型": "23",
          "左端宏参数": "ENDCUT_CODE=2303; B=15; R1=0; V1=90; V2=30; V3=30; KS=0; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 888,
          "零件名称": "1232-FR12A-S4",
          "船号": "2791",
          "分段号": "1232",
          "道次": "M2G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 889,
          "零件名称": "1232-FR12A-S3",
          "船号": "2791",
          "分段号": "1232",
          "道次": "M2G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=35; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 758,
      "套料版图号": "27911230HCPZ004-1-01",
      "文件名": "27911230HCPZ004-1-01-g.gen",
      "程序号": "27911230HCPZ004-1-01",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "200*90*9*14",
      "型材规格": "200×90×9×14",
      "长度": 13000.0,
      "实际使用长度mm": 12903.1,
      "剩余余料长度mm": 96.9004,
      "零件个数": 1,
      "切割时间s": 101.24,
      "零件": [
        {
          "part_id": 910,
          "零件名称": "1230-000-L5",
          "船号": "2791",
          "分段号": "1230",
          "道次": "G1",
          "左端宏类型": "22",
          "左端宏参数": "ENDCUT_CODE=2242; A=30; B=15; R1=15; V1=90; V2=90; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 764,
      "套料版图号": "27911230HCPZ005-1-01",
      "文件名": "27911230HCPZ005-1-01-g.gen",
      "程序号": "27911230HCPZ005-1-01",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*10*16",
      "型材规格": "300×90×10×16",
      "长度": 12000.0,
      "实际使用长度mm": 9952.8,
      "剩余余料长度mm": 2047.2,
      "零件个数": 2,
      "切割时间s": null,
      "零件": [
        {
          "part_id": 918,
          "零件名称": "1230-000-L4",
          "船号": "2791",
          "分段号": "1230",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=0; V1=90; V2=30; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=45; ANGLE_TS=45; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        },
        {
          "part_id": 919,
          "零件名称": "1330-000-L4",
          "船号": "2791",
          "分段号": "1330",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=0; V1=90; V2=30; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=45; ANGLE_TS=45; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 765,
      "套料版图号": "27911230HCPZ005-2-01",
      "文件名": "27911230HCPZ005-2-01-g.gen",
      "程序号": "27911230HCPZ005-2-01",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*10*16",
      "型材规格": "300×90×10×16",
      "长度": 9000.0,
      "实际使用长度mm": 8951.3,
      "剩余余料长度mm": 48.7002,
      "零件个数": 1,
      "切割时间s": 100.57,
      "零件": [
        {
          "part_id": 920,
          "零件名称": "1230-000-L9",
          "船号": "2791",
          "分段号": "1230",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 766,
      "套料版图号": "27911230HCPZ005-2-02",
      "文件名": "27911230HCPZ005-2-02-g.gen",
      "程序号": "27911230HCPZ005-2-02",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "1230",
      "原材料": "角钢(L)",
      "截面尺寸": "300*90*10*16",
      "型材规格": "300×90×10×16",
      "长度": 9000.0,
      "实际使用长度mm": 8951.3,
      "剩余余料长度mm": 48.7002,
      "零件个数": 1,
      "切割时间s": 98.12,
      "零件": [
        {
          "part_id": 921,
          "零件名称": "1330-000-L9",
          "船号": "2791",
          "分段号": "1330",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2191; R1=50; V1=90; V2=30; EXCESS=0; BEVEL_DEFINED=0; BEVEL_CODE=0; BEVEL_TYPE=0; BEVEL_VARIANT=0; ALPHA=0; ANGLE_TS=0; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=0; BEVEL_CODE_FLANGE=0; BEVEL_TYPE_FLANGE=0; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=0; ANGLE_TS_FLANGE=0; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 774,
      "套料版图号": "27912040HCPZ004-1-01",
      "文件名": "27912040HCPZ004-1-01-g.gen",
      "程序号": "27912040HCPZ004-1-01",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "2040",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*12",
      "型材规格": "150×90×12",
      "长度": 9000.0,
      "实际使用长度mm": 8949.0,
      "剩余余料长度mm": 51.0,
      "零件个数": 1,
      "切割时间s": 76.21,
      "零件": [
        {
          "part_id": 943,
          "零件名称": "2040-000-L26",
          "船号": "2791",
          "分段号": "2040",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 775,
      "套料版图号": "27912040HCPZ004-1-02",
      "文件名": "27912040HCPZ004-1-02-g.gen",
      "程序号": "27912040HCPZ004-1-02",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "2040",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*12",
      "型材规格": "150×90×12",
      "长度": 9000.0,
      "实际使用长度mm": 8949.0,
      "剩余余料长度mm": 51.0,
      "零件个数": 1,
      "切割时间s": 76.21,
      "零件": [
        {
          "part_id": 944,
          "零件名称": "2040-000-L25",
          "船号": "2791",
          "分段号": "2040",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    },
    {
      "profile_id": 776,
      "套料版图号": "27912040HCPZ004-1-03",
      "文件名": "27912040HCPZ004-1-03-g.gen",
      "程序号": "27912040HCPZ004-1-03",
      "程序号代码": "PZ",
      "船号": "2791",
      "分段号": "2040",
      "原材料": "角钢(L)",
      "截面尺寸": "150*90*12",
      "型材规格": "150×90×12",
      "长度": 9000.0,
      "实际使用长度mm": 8949.0,
      "剩余余料长度mm": 51.0,
      "零件个数": 1,
      "切割时间s": 76.21,
      "零件": [
        {
          "part_id": 945,
          "零件名称": "2040-000-L22",
          "船号": "2791",
          "分段号": "2040",
          "道次": "G1",
          "左端宏类型": "21",
          "左端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "右端宏类型": "21",
          "右端宏参数": "ENDCUT_CODE=2100; R1=0; V1=90; V2=90; KS=0; EXCESS=0; BEVEL_DEFINED=1; BEVEL_CODE=900; BEVEL_TYPE=20; BEVEL_VARIANT=0; ALPHA=20; ANGLE_TS=70; ANGLE_OS=0; BEVEL_DEFINED_FLANGE=1; BEVEL_CODE_FLANGE=900; BEVEL_TYPE_FLANGE=20; BEVEL_VARIANT_FLANGE=0; ALPHA_FLANGE=20; ANGLE_TS_FLANGE=70; ANGLE_OS_FLANGE=0",
          "中间宏个数": 0,
          "孔": []
        }
      ]
    }
  ]
};

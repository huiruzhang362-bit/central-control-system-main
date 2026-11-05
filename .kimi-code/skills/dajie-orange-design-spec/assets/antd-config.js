/* ═══════════════════════════════════════════════════════════
   antd 5 主题配置片段（源自中控系统项目，直接可用）
   用法：把 ConfigProvider 包在应用最外层。无 JSX，可直接运行。
   ═══════════════════════════════════════════════════════════ */
const { ConfigProvider, App } = antd;
const React = window.React;

const SHADOW = '0 2px 4px rgba(0,0,0,0.02),0 1px 6px -1px rgba(0,0,0,0.02),0 1px 2px rgba(0,0,0,0.03)';

// 分页文案（Figma「浅灰03」规范：只显示页码，无英文残留）
const PaginationLocaleZH = {
  items_per_page: '/ 页', jump_to: '跳至', jump_to_confirm: '确定', page: '页',
  prev_page: '上一页', next_page: '下一页',
  prev_5: '向前 5 页', next_5: '向后 5 页',
  prev_3: '向前 3 页', next_3: '向后 3 页', page_size: '页码',
};

const RootApp = ({ children }) => React.createElement(ConfigProvider, {
  theme: {
    token: {
      colorPrimary: '#EE6402',          // 主色：按钮/链接/选中/开关
      colorLink: '#EE6402',
      colorText: 'rgba(0,0,0,0.85)',    // 全站 85% 黑，不用纯黑
      borderRadius: 0,                   // 基础直角；卡片/弹窗 12、按钮 4、输入类 2 由样式覆盖
      colorBgContainer: '#ffffff',
      boxShadow: SHADOW,                 // 页眉/卡片统一投影（Figma 数据报表稿）
      boxShadowSecondary: SHADOW,
    },
  },
}, React.createElement(App, null, children));

/* 配合 assets/design-tokens.css 使用。关键覆盖（可放入全局样式）：
   - .ant-card, .ant-modal, .ant-drawer-content { border-radius:12px }
   - .ant-btn { border-radius:4px; font-size:14px; font-weight:400 }（按钮字重 Regular！）
   - .ant-input, .ant-select-selector, .ant-picker { border-radius:2px }
   - .ant-btn-link { color:#EE6402; text-decoration:underline }（hover #FF7A45）
   - .ant-table-thead>tr>th { font-weight:500; font-size:14px }
   - .ant-table-tbody>tr>td { font-size:14px; font-weight:400; white-space:nowrap }
   - .ant-table-tbody>tr.ant-table-row-selected>td { background:#FFF7E6 }
   - .ant-alert { background:#FFF7E6; border:1px solid #FFE7BA }
   - .page-form 内容 14px/Regular；标题/表头/弹窗标题/导航选中 Medium(500)
   - .ant-pagination { justify-content:flex-end }（分页右对齐）
   - .ant-pagination-item { 32x32、border:1px #d9d9d9、border-radius:2px }
   - .ant-pagination-item-active { border-color:#E27400 } .ant-pagination-item-active a { color:#E27400; font-weight:500 }
   - 页数跳转框 .pg-jump：高32px、1px #d9d9d9、圆角2px、内阴影 inset 0 -6px 8px rgba(0,0,0,0.02)、
     文字「当前页/总页数」14px rgba(0,0,0,0.25)、下拉向上弹出、项 hover 底 #FDF4E7 字 #EE6402
*/

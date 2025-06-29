const components = [
  'page/page',
  'button/button',
  'dropdown/dropdown',
  'menu/menu',
  'stepper/stepper',
  'button-group/button-group',
  'chip/chip',
  'image/image',
  'number/number',
  'rating/rating',
  'switch/switch',
  'repeator/repeator',
  'form/form',
  'input/input',
  'input/date-input',
  'input/time-input',
  'input/textarea',
  'input/switch-input',
  'input/rating-input',
  'input/button-group-input',
  'select/select',
  'select/cascading-select',
  'upload/upload',
  'facts/facts',
  'card/card',
  'timeline/timeline',
  'tabs/tabs',
  'popover/popover',
  'radio/radio',
  'checkbox/checkbox',
  'files/files',
  'list/list',
  'scrollable/scrollable',
  'grid/grid',
]

const scenarios = [
  'list/orders', // 订单表
  'list/transactions', // 交易记录
  'form/contract', // 发起合同
  'list/balance', // 余额
  'list/contracts', // 合同
  'list/clients', // 客户
  'list/followups', // 跟进
  'list/messages', // 消息
  'form/withdraw', // 提现
  'form/customer-information', // 客户资料
  'form/enterprise-information', // 企业资料
  'form/house-information', // 房产信息
  'form/material', // 影像资料
  'presentation/client', // 客户详情
  'presentation/contract', // 合同详情
  'interaction/share', // 分享
  'interaction/upload', // 上传
  'interaction/batch', // 批量操作
  'interaction/filter', // 数据筛选
  'presentation/order',   // 订单详情
  'presentation/remark-form', // 添加备注
  'presentation/material', // 影像资料
]

const interactives = [
  'dialog',
  'drawer',
  'sheet',
  'toast',
]

export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/home/report',
    'pages/guide/scroll',
    'pages/tokens/spacing',
    'pages/design/props',
    ...interactives.map(x => `pages/interactive/${x}`),
    ...components.map(x => `pages/components/${x}`),
    ...scenarios.map(x => `pages/scenarios/${x}`),
  ],
  // tabBar: {
  //   custom: true,
  //   color: '#000',
  //   selectedColor: '#000',
  //   backgroundColor: '#ddd',
  //   list: [
  //   ]
  // },
  window: {
    backgroundColor: '#F1F3F5',
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Expo Mobile',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents',
})

export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/home/report',
    'pages/account/index',
    'pages/account/approvals',
    'pages/account/login',
    // AI 审批申请页
    'pages/risk/apply',
    'pages/products/list',
    'pages/products/details',
    'pages/products/order',
    'pages/clients/list',
    'pages/clients/detail',
  ],
  tabBar: {
    custom: true,
    color: '#000',
    selectedColor: '#000',
    backgroundColor: '#ddd',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/clients/list',
        text: '客户'
      },
      {
        pagePath: 'pages/products/list',
        text: '产品'
      },
      {
        pagePath: 'pages/account/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundColor: '#F1F3F5',
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Expo Mobile',
    navigationBarTextStyle: 'black'
  },
  lazyCodeLoading: 'requiredComponents',
})

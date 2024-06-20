export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/account/index',
    'pages/account/approvals',
    'pages/account/login',
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

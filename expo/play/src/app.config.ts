export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/components/button',
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

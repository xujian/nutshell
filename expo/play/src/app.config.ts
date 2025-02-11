const components = [
  'page',
  'button',
  'chip',
  'repeator',
  'form',
  'facts',
  'card',
  'timeline',
  'tabs',
  'popover',
  'input',
  'date-select'
]

export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/home/report',
    'pages/interactive/dialog',
    'pages/interactive/drawer',
    'pages/interactive/sheet',
    'pages/guide/scroll',
    'pages/tokens/spacing',
    ...components.map(x => `pages/components/${x}/${x}`)
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

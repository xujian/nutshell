const components = [
  'page/page',
  'button/button',
  'dropdown/dropdown',
  'button-group/button-group',
  'chip/chip',
  'repeator/repeator',
  'form/form',
  'input/input',
  'input/date-input',
  'input/time-input',
  'select/select',
  'select/cascading-select',
  'facts/facts',
  'card/card',
  'timeline/timeline',
  'tabs/tabs',
  'popover/popover',
  'radio/radio'
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
    ...components.map(x => `pages/components/${x}`)
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

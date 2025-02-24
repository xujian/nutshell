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
  'files/files'
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

export * from './framework'
export * from './components'
export * from './composables'
export * from './services'
export * from './directives'
export * from './shared/models'
export * from './props'
export * from './types'
export * from './Resolver'

const Taro: any = {
  showToast (options: any) {},
  navigateBack: () => {},
  getWindowInfo: () => {},
  getMenuButtonBoundingClientRect: () => {},
  navigateTo: (options: any) => {},
  chooseMedia: (options: any) => {}
}

export {
  Taro
}

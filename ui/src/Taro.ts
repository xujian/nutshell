import { h } from "vue"

const Taro: any = {
  showToast (options: any) {},
  navigateBack: () => {},
  getWindowInfo: () => {},
  getMenuButtonBoundingClientRect: () => {},
  navigateTo: (options: any) => {},
  chooseMedia: (options: any) => {}
}

const ScrollView = (props: any) => {
  return h('div', {
  })
}

export {
  Taro,
  ScrollView
}

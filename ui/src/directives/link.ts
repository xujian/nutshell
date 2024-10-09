import { Directive, App } from 'vue'

/**
 * <ns-componnent v-link="/pages/home/index" />
 * @param modifiers
 * @returns
 */
const Link: Directive = {
  beforeMount (el, { modifiers, value }) {
    console.log('===Link Directive', value)
    el.addEventListener('click', function () {
      console.log('===Link Directive click')
      Taro.navigateTo({
        url: value
      })
    })
  }
}

const install = (app: App) => {
  app.directive('link', Link)
}

export default {
  install
}

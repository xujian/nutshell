import { Directive, App } from 'vue'

/**
 * <ns-componnent v-link="/pages/home/index" />
 * @param modifiers
 * @returns
 */
const Link: Directive = {
  beforeMount (el, { modifiers, value }) {
    el.addEventListener('click', function () {
      if (window && !('WeixinJSBridge' in window)) {
        window.location.href = value
      } else {
        Taro.navigateTo({
        url: value
      })
      }
    })
  }
}

const install = (app: App) => {
  app.directive('link', Link)
}

export default {
  install
}

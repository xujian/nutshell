import { Directive, App } from 'vue'

/**
 * <ns-componnent v-link="/pages/home/index" />
 * @param modifiers
 * @returns
 */
const Measure: Directive = {
  mounted (el, { modifiers, value }) {
    const h = el.cientHeight,
      w = el.clientWidth
    el.style['--w'] = +w
    el.style['--h'] = +h
  }
}

const install = (app: App) => {
  app.directive('measure', Measure)
}

export default {
  install
}

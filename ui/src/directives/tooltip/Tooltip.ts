import { Directive, App } from 'vue'
import { plugin as VueTippy } from 'vue-tippy'
import { DollarNutshell } from '../../types'

function getPositionClass(modifiers: any) {
  if (modifiers.top) {
      return 'top'
  } else if (modifiers.bottom) {
      return 'bottom'
  } else if (modifiers.left) {
      return 'left'
  } else if (modifiers.right) {
      return 'right'
  }
  return 'top'
}

const Tooltip: Directive = {
  beforeMount (el, { modifiers, value }) {
    el.setAttribute('data-tooltip', value?.text || value)
    el.classList.add('with-tooltip')
    const position = value.position || getPositionClass(modifiers)
    el.classList.add(`tooltip--${position}`)
  }
}

const install = (app: App, $n: DollarNutshell) => {
  app.use(VueTippy, {
    directive: 'tooltip',
    theme: 'dark',
  })
}

export default {
  install
}

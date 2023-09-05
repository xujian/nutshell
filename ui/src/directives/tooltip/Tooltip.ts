import { Directive, App } from 'vue'
import VueTippy from 'vue-tippy'
import { DollarNutshell } from '../../framework'

function getPositionClass(modifiers) {
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
    console.log('v-tooltip........................beforeMount', el, modifiers, value)
    el.setAttribute('data-tooltip', value?.text || value)
    el.classList.add('with-tooltip')
    const position = value.position || getPositionClass(modifiers)
    el.classList.add(`tooltip--${position}`)
  }
}

const install = (app: App, $n: DollarNutshell) => {
  app.use(VueTippy, {
    directive: 'tooltip'
  })
}

export default {
  install
}
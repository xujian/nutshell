import * as components from './components'

export default function install (Vue) {
  for (const c in components) {
    const component = components[c]
    Vue.component(component.name, component)
  }
}
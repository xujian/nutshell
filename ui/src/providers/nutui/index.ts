import { getCurrentInstance, h } from 'vue'
import { CoreProvider } from '..'
import * as components from './components'

// fallback for component not implemented
const dummy = () => h('div', {
  class: 'dummy'
}, '尚未实现')

const NutuiProvider: CoreProvider = (props: any) => {
  const { parent } = getCurrentInstance()
  const name = parent.type.name.slice(2).toLowerCase()
  const component = components[name] || dummy
  return h(component, {...props}, 'Provider works')
}

export default NutuiProvider
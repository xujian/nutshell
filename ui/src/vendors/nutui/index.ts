import { getCurrentInstance, h, App } from 'vue'
import { CoreProvider } from '../../shared'
import { dialog, toast, loading } from './services'
import * as components from './components'

const makeDummy = (name: string) => {
  return () => dummy(name.toUpperCase())
}

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

// provider 所需要的特别处理过程
function prepare (app: App) {
  this.app = app
  // app.use(ConfigProvider)
}

const nutuiProvider: CoreProvider = {
  app: null,
  prepare,
  render (props, ctx) {
    const { parent } = getCurrentInstance()
    const name = parent.type.name.slice(2) //.toLowerCase() // NsButton -> Button
    const component = components[name] || makeDummy(name)
    const { slots } = ctx
    return h(component, props, slots.default)
  },
  dialog,
  toast,
  loading
}

export default nutuiProvider
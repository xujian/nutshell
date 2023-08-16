import { getCurrentInstance, h } from 'vue'
import { CoreProvider } from '..'
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
export const prepare = (app) => {
  console.log('----PROVIDER nutui prepare', app)
  // app.use(ConfigProvider)
}

const NutuiProvider: CoreProvider = {
  render: (props, ctx) => {
    const { parent } = getCurrentInstance()
    const name = parent.type.name.slice(2).toLowerCase() // NsButton -> button
    const component = components[name] || makeDummy(name)
    const { slots } = ctx
    return h(component, props, slots.default)
  },
  prepare
}

export default NutuiProvider
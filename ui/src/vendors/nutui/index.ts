import { getCurrentInstance, h, App } from 'vue'
import { CoreVendor } from '../../shared'
import { dialog, toast, loading } from './services'
import components from './components'
import { ConfirmOptions } from '../../../src/services/dialog'

const makeDummy = (name: string) => {
  return () => dummy(name.toUpperCase())
}

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

const nutuiVendor: CoreVendor = {
  app: null,
  prepare (app: App) {
    this.app = app
    // app.use(ConfigProvider)
  },
  render (props, ctx) {
    const { parent } = getCurrentInstance()!
    const name = parent?.type?.name?.slice(2)! //.toLowerCase() // NsButton -> Button
    const component = components[name] || makeDummy(name)
    const { slots } = ctx
    return h(component, props, slots.default)
  },
  dialog,
  confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => {},
  toast,
  loading
}

export default nutuiVendor
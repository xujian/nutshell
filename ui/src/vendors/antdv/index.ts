import { getCurrentInstance, h, App, FunctionalComponent } from 'vue'
import { CoreVendor } from '../../shared'
import components from './components'
import { dialog, confirm, toast, loading, drawer, sheet } from './services'
import VXETable from 'vxe-table'
import { PreviewMediaParam, PreviewOptions } from '../../types'

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

const antdvVendor: CoreVendor = {
  app: null,
  prepare (app: App) {
    this.app = app
    app.use(VXETable)
  },
  render (props: any, ctx) {
    const vm = getCurrentInstance() as any
    const name = vm.type.name.slice(2) as keyof typeof components
    let component = components[name] as FunctionalComponent
    if (!component) {
      if (this.fallback) {
        return this.fallback.render(props, ctx)
      }
    }
    return h(component, {...props}, ctx.slots)
  },
  dialog,
  confirm,
  toast,
  loading,
  drawer,
  preview: (media: PreviewMediaParam, options: PreviewOptions) => {},
  sheet,
  notice: (message: string) => {},
}

export default antdvVendor

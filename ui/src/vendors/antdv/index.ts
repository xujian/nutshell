import { getCurrentInstance, h, App } from 'vue'
import { CoreProvider } from '../../shared'
import * as components from './components'
import { dialog, toast, loading } from './services'

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

// provider 所需要的特别处理过程
function prepare (app: App) {
  this.app = app
}

const antdvProvider: CoreProvider = {
  app: null,
  prepare,
  render (props: any, ctx) {
    const { parent } = getCurrentInstance()
    const name = parent.type.name.slice(2)
    let component = components[name]
    if (!component) {
      return this.fallback.render(props, ctx)
    }
    return h(component, {...props}, ctx.slots)
  },
  dialog,
  toast,
  loading
}

export default antdvProvider
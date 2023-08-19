import { App, ComponentPublicInstance, InjectionKey, reactive, inject as _inject } from 'vue'
import { createTheme } from './composables/theme'
import { prepareProvider } from './shared'
import { DeviceSymbol, createDevice } from './composables'

export interface NutshellOptions {
  theme?: string,
  provider?: string,
}

export function Nutshell ({
  theme = 'default', 
  provider = 'nutui',
}: NutshellOptions = {}) {

  const theming = createTheme('default')
  const device = createDevice()

  // for app.use()
  const install = (app: App) => {
    app.provide('provider', provider)
    app.provide(DeviceSymbol, device)
    prepareProvider(app, provider)
    // for (const key in components) {
    //   // app.component(key, components[key])
    // }
    // app.mixin({
    //   computed: {
    //     $n () {
    //       return reactive<NutshellOptions>({
    //         //theme: inject.call(this, 'theme'),
    //         provider: provider,
    //       })
    //     }
    //   }
    // })
  }

  return {
    install,
    theme
  }
}

// Vue's inject() can only be used in setup
function inject (
  this: ComponentPublicInstance,
  key: InjectionKey<any> | string) {
  const vm = this.$
  const provides = vm.parent
    ? vm.vnode.appContext?.provides
    : []
  if (provides && (key as any) in provides) {
    return provides[(key as string)]
  }
}

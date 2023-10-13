import { App, ComponentPublicInstance, InjectionKey, reactive, inject } from 'vue'
import { createTheme } from './composables/theme'
import { VendorSymbol } from './shared/symbols'
import { createVendor, prepareVendor } from './shared'
import { BusSymbol, PlatformSymbol, createBus, createPlatform } from './composables'
import directives from './directives'
import services from './services'
import { ConfirmOptions, DialogOptions } from './services/dialog'
import { ToastOptions } from './services/toast'
import { LoadingOptions } from './services/loading'

export interface NutshellOptions {
  theme?: string,
  vendor?: string,
}

export type DollarNutshell = {
  dialog?: (options: DialogOptions) => void,
  confirm?: (message: string, onOk: () => void, options?: ConfirmOptions) => void
  toast?: (message: string, options: ToastOptions) => void
  loading?: (options: LoadingOptions) => void
}

export const NutshellSymbol: InjectionKey<DollarNutshell>
  = Symbol.for('nutshell:nutshell')

/**
 * 返回 $n 供应用程序使用
 */
export function useNutshell () {
  const $n = inject(NutshellSymbol)
  return $n
}

export function Nutshell ({
  theme = 'default', 
  vendor = 'nutui',
}: NutshellOptions = {}) {

  const theVendor = createVendor(vendor)
  const theming = createTheme('default')
  const bus = createBus()
  const platform = createPlatform()

  // for app.use()
  const install = (app: App) => {
    const $n: DollarNutshell = {}
    app.config.globalProperties.$n = $n
    app.provide(VendorSymbol, theVendor)
    app.provide(NutshellSymbol, $n)
    app.provide(PlatformSymbol, platform)
    app.provide(BusSymbol, bus)
    prepareVendor(app, theVendor)
    for (const service of services) {
      service.install(app, $n)
    }
    for (const directive of directives) {
      directive.install(app, $n)
    }
    // for (const key in components) {
    //   // app.component(key, components[key])
    // }
  }

  return {
    install,
    theme
  }
}

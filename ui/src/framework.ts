import { App, Component, InjectionKey, inject } from 'vue'
import Toast from 'vue-toastification'
import { createTheme } from './composables/theme'
import { VendorSymbol } from './shared/symbols'
import { createVendor, prepareVendor } from './shared/vendor'
import { BusSymbol, PlatformSymbol, createBus, createPlatform } from './composables'
import directives from './directives'
import services from './services'
import { ConfirmOptions, DialogOptions } from './services/dialog'
import { PreviewOptions } from './services/drawer'
import { ToastOptions } from './services/toast'
import { LoadingOptions } from './services/loading'
import { AppSymbol, IconFormat } from './components'
import { DrawerOptions } from './services/drawer'
import { SheetOptions } from './services/sheet'
import { Media } from './types'

/**
 * Nulshell framework options holding by app
 */
export interface NutshellOptions {
  theme?: string,
  vendor?: string,
  icon?: IconFormat
}

export type PreviewMediaParam = string | Media | string[] | Media[]

export type DollarNutshell = {
  dialog: (options: DialogOptions) => void,
  confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => void,
  preview: (media: PreviewMediaParam, options?: PreviewOptions) => void,
  toast: (message: string, options?: ToastOptions) => void,
  notice: (message: string, options?: ToastOptions) => void,
  sheet: (options: SheetOptions) => void,
  drawer: (options: DrawerOptions) => void,
  loading: (options?: LoadingOptions) => void,
  options: NutshellOptions
}

export const NutshellSymbol: InjectionKey<DollarNutshell>
  = Symbol.for('nutshell:nutshell')

/**
 * 返回 $n 供应用程序使用
 */
export function useNutshell () {
  const $n = inject(NutshellSymbol)!
  return $n
}

export function Nutshell ({
  theme = 'default',
  vendor = 'nutui',
  icon = 'sprite'
}: NutshellOptions = {}) {

  const theVendor = createVendor(vendor)
  const theming = createTheme('default')
  const bus = createBus()
  const platform = createPlatform()

  // for app.use()
  const install = (app: App) => {
    const $n: DollarNutshell = {
      dialog: (options: DialogOptions) => {},
      confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => {},
      preview: (media: PreviewMediaParam, options?: PreviewOptions) => {},
      toast: (message: string, options?: ToastOptions) => {},
      notice: (message: string, options?: ToastOptions) => {},
      sheet: (options: SheetOptions) => {},
      drawer: (options: DrawerOptions) => {},
      loading: (options?: LoadingOptions) => {},
      options: {
        theme,
        vendor,
        icon
      }
    }
    app.config.globalProperties.$n = $n
    app.provide(VendorSymbol, theVendor)
    app.provide(NutshellSymbol, $n)
    app.provide(AppSymbol, {})
    app.provide(PlatformSymbol, platform)
    app.provide(BusSymbol, bus)
    for (const service of services) {
      service.install(app, $n)
    }
    for (const directive of directives) {
      directive.install(app, $n)
    }
    prepareVendor(app, theVendor)
    app.use(Toast, {
      containerClassName: 'toast',
      position: 'top-center',
      transition: 'fade',
      timeout: 5000,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: false,
      icon: false,
    })
    // for (const key in components) {
    //   // app.component(key, components[key])
    // }
  }

  return {
    install,
    theme
  }
}

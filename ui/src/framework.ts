import { App } from 'vue'
import Toast from 'vue-toastification'
import { createTheme } from './composables/theme'
import { VendorSymbol } from './shared/symbols'
import { BusSymbol, PlatformSymbol, createBus, createPlatform } from './composables'
import directives from './directives'
import services from './services'
import { ConfirmOptions, DialogOptions, DollarNutshell, DrawerOptions, LoadingOptions, NutshellOptions, NutshellSymbol, PreviewMediaParam, PreviewOptions, SheetOptions, ToastOptions } from './types'
import { AppSymbol } from './components'
import { prepareVendor } from './shared/vendor'
import { getVendor } from './vendors'
import { CoreVendor } from './shared'


export const createVendor = (name: string): CoreVendor | Promise<CoreVendor> => {
  const vendor = getVendor(name)
  return vendor
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

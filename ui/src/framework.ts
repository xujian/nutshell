import { App, ComponentPublicInstance, InjectionKey, reactive, inject } from 'vue'
import { createTheme } from './composables/theme'
import { ProviderSymbol, createProvider, prepareProvider } from './shared'
import { BusSymbol, PlatformSymbol, createBus, createPlatform } from './composables'
import services from './services'

export interface NutshellOptions {
  theme?: string,
  provider?: string,
}

export type DollarNutshell = {
  [key: string]: any
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
  provider = 'nutui',
}: NutshellOptions = {}) {

  const theProvider = createProvider(provider)
  const theming = createTheme('default')
  const bus = createBus()
  const platform = createPlatform()

  // for app.use()
  const install = (app: App) => {
    const $n: DollarNutshell = {}
    app.config.globalProperties.$n = $n
    app.provide(ProviderSymbol, theProvider)
    app.provide(NutshellSymbol, $n)
    app.provide(PlatformSymbol, platform)
    app.provide(BusSymbol, bus)
    prepareProvider(app, theProvider)
    for (const service of services) {
      service.install($n, app)
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

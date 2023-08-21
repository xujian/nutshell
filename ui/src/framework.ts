import { App, ComponentPublicInstance, InjectionKey, reactive, inject as _inject } from 'vue'
import { createTheme } from './composables/theme'
import { ProviderSymbol, createProvider, prepareProvider } from './shared'
import { BusSymbol, PlatformSymbol, createBus, createPlatform } from './composables'

export interface NutshellOptions {
  theme?: string,
  provider?: string,
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
    app.provide('provider', provider)
    app.provide(PlatformSymbol, platform)
    app.provide(BusSymbol, bus)
    app.provide(ProviderSymbol, theProvider)
    prepareProvider(app, theProvider)
    // for (const key in components) {
    //   // app.component(key, components[key])
    // }
  }

  return {
    install,
    theme
  }
}

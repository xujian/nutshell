import { App } from 'vue'
import { ProviderSymbol } from '../shared'
import { DollarNutshell } from '../framework'

export type LoadingOptions = {
}

/**
 * Toast Service
 * Dynamically create a toast
 * Usage:
 *  $n.dialog(options: ToastOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.loading = (options: LoadingOptions) => {
      const provider = app._context.provides[ProviderSymbol as symbol]
      Promise.resolve(provider).then(p => {
        p.loading(options)
      })
    }
  }
}

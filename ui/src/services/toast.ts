import { App } from 'vue'
import { ProviderSymbol } from '../shared'
import { DollarNutshell } from '../framework'

export type ToastOptions = {
  title: string,
  message: string,
}

/**
 * Toast Service
 * Dynamically create a toast
 * Usage:
 *  $n.dialog(options: ToastOptions)
 */
export default {
  install ($n: DollarNutshell, app: App) {
    const provider = app._context.provides[ProviderSymbol as symbol]
    $n.toast = (message: string, options: ToastOptions) => {
      Promise.resolve(provider).then(p => {
        p.toast(message, options)
      })
    }
  }
}

import { App } from 'vue'
import { ProviderSymbol } from '../shared'
import { DollarNutshell } from '../framework'

export const DEAULT_TOAST_DURATION: number = 4
export type ToastType = 'info' | 'success' | 'error' | 'warning'

export type ToastOptions = {
  /**
   * Toast 形式 'success' | 'error' | 'warning'
   */
  type?: string,
  /**
   * 停留时间
   */
  duration?: number,
}

/**
 * Toast Service
 * Dynamically create a toast
 * Usage:
 *  $n.dialog(options: ToastOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    const provider = app._context.provides[ProviderSymbol as symbol]
    $n.toast = (message: string, options: ToastOptions) => {
      Promise.resolve(provider).then(p => {
        p.toast(message, options)
      })
    }
  }
}

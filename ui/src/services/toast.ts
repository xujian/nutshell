import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell, ToastOptions } from '../types'

export const DEAULT_TOAST_DURATION: number = 4
export type ToastType = 'info' | 'success' | 'error' | 'warning'

/**
 * Toast Service
 * Dynamically create a toast
 * Usage:
 *  $n.dialog(options: ToastOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    const vendor = app._context.provides[VendorSymbol as symbol]
    $n.toast = (message: string, options?: ToastOptions) => {
      Promise.resolve(vendor).then(p => {
        p.toast(message, options)
      })
    }
  }
}

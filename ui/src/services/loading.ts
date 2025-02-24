import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell, LoadingOptions } from '../types'

/**
 * Loading Service
 * Dynamically create a loging
 * Usage:
 *  $n.dialog(options: LoadingOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.loading = (options?: LoadingOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.loading(options)
      })
    }
  }
}

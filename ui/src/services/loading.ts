import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'

export type LoadingOptions = {
}

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

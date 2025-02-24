import { App, Component } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../types'

/**
 * Sheet Service
 * Dynamically create a toast
 * Usage: $n.sheet(component?: Component, pros?: any)
 *  $n.\
 */
export default {
  install (app: App, $n: DollarNutshell) {
    const vendor = app._context.provides[VendorSymbol as symbol]
    $n.sheet = (component?: Component, pros?: any) => {
      Promise.resolve(vendor).then(p => {
        p.sheet(component, pros)
      })
    }
  }
}

import { h, inject, ref, App } from 'vue'
import { VendorSymbol } from '../shared'
import { DollarNutshell } from '../framework'

export type DialogOptions = {
  title: string,
  message: string,
}

export type DialogInstance = {
  hide: () => void,
  destory: () => void
}

/**
 * Dialog Service
 * Dynamically create a dialog
 * Usage:
 *  $n.dialog(options: DialogOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.dialog = (options: DialogOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.dialog(options)
      })
    }
  }
}

import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell, DrawerOptions, PreviewMediaParam, PreviewOptions } from '../types'
import { Media } from '../types'

export type DrawerInstance = {
  hide: () => void,
  destory: () => void
}

/**
 * Drawer Service
 * Dynamically create a dialog
 * Usage:
 *  $n.dialog(options: DrawerOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.drawer = (options: DrawerOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.drawer(options)
      })
    }
    $n.preview = (media: PreviewMediaParam, options?: PreviewOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.preview(media, options)
      })
    }
  }
}

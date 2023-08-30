import { h, inject, ref, App } from 'vue'
import { ProviderSymbol } from '../shared'

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
  install ($n: any, app: App) {
    $n.dialog = (options: DialogOptions) => {
      const provider = app._context.provides[ProviderSymbol as symbol]
      Promise.resolve(provider).then(p => {
        p.dialog(options)
      })
    }
  }
}

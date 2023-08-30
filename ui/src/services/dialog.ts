import { h, inject, ref } from 'vue'
import { ProviderSymbol } from '../shared'
import { createApp } from 'vue'
import { NsDialog } from '../components'
import { App } from 'vue'

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
  install ($n, app) {
    const provider = inject(ProviderSymbol)
    $n.dialog = (options: DialogOptions) => {
      const instance = createDialog(options, app)
      const hide = () => {
        },
        destory = () => {
        }
      return {
        hide, destory
      }
    }
  }
}
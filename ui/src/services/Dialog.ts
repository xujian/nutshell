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

function createDialog (options: DialogOptions, app: App) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const { title, message } = options
  const visible = ref(true)
  const dialog = createApp({
    name: 'NsDynamicDialog',
    setup: () => () => h(NsDialog, {
      title,
      modelValue: visible.value,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      onClose: () => {
        visible.value = false
      }
    }, {
      default: () => h('div', {
        class: 'dialog-content',
      }, message)
    })
  })
  dialog.config.globalProperties = app.config.globalProperties
  Object.assign(dialog._context, app._context)
  const vm = dialog.mount(container)

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
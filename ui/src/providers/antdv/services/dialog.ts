import { h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'


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


function dialog (options: DialogOptions) {
  const instance = createDialog(options, this.app)
  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default dialog
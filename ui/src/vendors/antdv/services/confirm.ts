import { h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { ConfirmOptions, DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'
import { CoreVendor } from 'src/shared'



function confirm (this: CoreVendor, message: string, onOk: () => void, options?: ConfirmOptions) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const visible = ref(true)
  const dialog = createApp({
    name: 'NsDynamicDialog',
    setup: () => () => h(NsDialog, {
      title: options?.title || '确认',
      okText: options?.okText || '确定',
      okColor: options?.okColor || 'negtive',
      cancelText: options?.cancelText || '取消',
      modelValue: visible.value,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      onOk: () => {
        onOk()
        visible.value = false
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
  if (this.app) {
    dialog.config.globalProperties = this.app.config.globalProperties
    Object.assign(dialog._context, this.app._context)
  }
  const vm = dialog.mount(container)

  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default confirm
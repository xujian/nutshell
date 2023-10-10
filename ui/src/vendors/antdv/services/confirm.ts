import { h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'

function confirm (message: string, onOk: () => void) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const visible = ref(true)
  const dialog = createApp({
    name: 'NsDynamicDialog',
    setup: () => () => h(NsDialog, {
      title: '确认',
      okText: '确定',
      cancelText: '取消',
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
  dialog.config.globalProperties = this.app.config.globalProperties
  Object.assign(dialog._context, this.app._context)
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
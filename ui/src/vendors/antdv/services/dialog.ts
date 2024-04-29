import { defineAsyncComponent, h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'
import { CoreVendor } from '../../../shared/vendor'
import type { AsyncComponentLoader } from 'vue'


function createDialog (options: DialogOptions, app: App) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const { title, message, component, props } = options

  let completeResult: any = null

  const onComplete = (result: any) => {
    completeResult = result
  }

  const contentRef = ref<any>(null)

  // 定义 body
  // component 优先级高于 message
  const body = component
    ? typeof component === 'function'
      ? () => h(defineAsyncComponent(component as AsyncComponentLoader), { ...props, onComplete })
      : () => h(component, {
          ...props,
          ref: contentRef,
          onComplete
        })
    : () => message

  const onOk = () => {
    if (options.onOk) {
      visible.value = options.onOk(completeResult) === false
    } else if (typeof options.component !== 'function') {
        Promise.resolve(contentRef.value.couldClose()).then((couldClose: boolean) => {
          visible.value = !(couldClose === true)
        })
    } else {
      visible.value = false
    }
    return true
  }

  const visible = ref(true)
  const dialog = createApp({
    name: 'NsDynamicDialog',
    setup: () => () => h(NsDialog, {
      title,
      width: options.width,
      centered: options.centered,
      modelValue: visible.value,
      fill: options.fill,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      okText: options.okText,
      footer: options.footer ?? true,
      onOk,
      onClose: () => {
        visible.value = false
        options.onCancel?.()
      }
    }, {
      default: () => h('div', {
        class: 'dialog-content',
      }, body())
    })
  })
  dialog.config.globalProperties = app.config.globalProperties
  Object.assign(dialog._context, app._context)
  const vm = dialog.mount(container)

}


function dialog (this: CoreVendor, options: DialogOptions) {
  const instance = createDialog(options, this.app!)
  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default dialog

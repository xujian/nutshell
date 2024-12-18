import { defineAsyncComponent, h, ref, createApp, App } from 'vue'
import type { AsyncComponentLoader } from 'vue'
import { DialogOptions } from '../../../services/dialog'
import { NsDialog } from '../../../components'
import { CoreVendor } from '../../../shared/models/CoreVendor'


function createDialog (options: DialogOptions, app: App) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const { title, message, component, props } = options

  let completeResult: any = null
  const visible = ref(true)

  const onComplete = (result: boolean) => {
    console.log('===dialog onComplete', result)
    visible.value = false
    completeResult = result
  }

  const contentRef = ref<any>(null)

  // 定义 body
  // $n.dialog() component/message 都定义了对话框内容, 是两个互斥属性
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
    const callback = options.onComplete || options.onOk
    if (callback) {
      Promise.resolve(callback(completeResult)).then(result => {
        visible.value = result === false
      })
    } else if (options.component && typeof options.component !== 'function') {
      // 内嵌组件 可阻止弹窗关闭
      Promise.resolve(contentRef.value.couldComplete?.()).then((could: boolean) => {
        visible.value = !(could === true)
      })
    } else {
      visible.value = false
    }
    return true
  }

  const onClose = () => {
    if (options.onCancel) {
      options.onCancel()
      visible.value = false
    }
    Promise.resolve(contentRef.value.couldClose?.()).then((couldClose: boolean) => {
      visible.value = !(couldClose === true)
      options.onCancel?.()
    })
  }

  const dialog = createApp({
    name: 'NsDynamicDialog',
    setup: () => () => h(NsDialog, {
      title,
      width: options.width || 540,
      closable: options.closable === false ? false : true,
      centered: options.centered,
      modelValue: visible.value,
      fill: options.fill,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      class: options.classes,
      okText: options.okText,
      okColor: options.okColor,
      cancelText: options.cancelText,
      destroyOnClose: options.destroyOnClose ?? true,
      mask: options.mask ?? true,
      footer: options.footer ?? true,
      onOk,
      onClose
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

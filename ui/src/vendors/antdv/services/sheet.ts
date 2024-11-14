import { defineAsyncComponent, h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { SheetOptions } from '../../../services/sheet'
import { NsSheet } from '../../../components'
import { CoreVendor } from '../../../shared/models/CoreVendor'
import type { AsyncComponentLoader } from 'vue'


function createSheet (options: SheetOptions, app: App) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const { title, component, props } = options

  let completeResult: any = null
  const visible = ref(true)

  const onComplete = (result: boolean) => {
    console.log('===sheet onComplete', result)
    visible.value = false
    completeResult = result
  }

  const contentRef = ref<any>(null)

  const body = typeof component === 'function'
    ? () => h(defineAsyncComponent(component as AsyncComponentLoader), { ...props, onComplete })
    : () => h(component, {
        ...props,
        ref: contentRef,
        onComplete
      })

  const onOk = () => {
    if (options.onComplete) {
      visible.value = options.onComplete(completeResult) === false
    } else if (typeof options.component !== 'function') {
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
    // 内嵌组件 可阻止弹窗取消
    if (!contentRef.value.couldClose) {
      visible.value = false
      return true
    }
    Promise.resolve(contentRef.value.couldClose?.()).then((couldClose: boolean) => {
      visible.value = !(couldClose === true)
      options.onCancel?.()
    })
  }

  const sheet = createApp({
    name: 'NsDynamicSheet',
    setup: () => () => h(NsSheet, {
      title,
      width: options.width || 540,
      closable: options.closable === false ? false : true,
      modelValue: visible.value,
      fill: options.fill,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      okText: options.okText,
      destroyOnClose: options.destroyOnClose ?? true,
      mask: options.mask ?? true,
      footer: options.footer ?? true,
      onOk,
      onClose
    }, {
      default: () => h('div', {
        class: 'sheet-content',
      }, body())
    })
  })
  sheet.config.globalProperties = app.config.globalProperties
  Object.assign(sheet._context, app._context)
  const vm = sheet.mount(container)

}


function sheet (this: CoreVendor, options: SheetOptions) {
  const instance = createSheet(options, this.app!)
  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default sheet

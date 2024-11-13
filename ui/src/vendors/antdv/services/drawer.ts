import { defineAsyncComponent, h, ref } from 'vue'
import { createApp } from 'vue'
import { App } from 'vue'
import { DrawerOptions } from '../../../services/drawer'
import { NsDrawer } from '../../../components'
import { CoreVendor } from '../../../shared/models/CoreVendor'
import type { AsyncComponentLoader } from 'vue'


function createDrawer (options: DrawerOptions, app: App) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const { title, component, props } = options

  let completeResult: any = null
  const visible = ref(true)

  const onComplete = (result: boolean) => {
    console.log('===drawer onComplete', result)
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

  const drawer = createApp({
    name: 'NsDynamicDrawer',
    setup: () => () => h(NsDrawer, {
      title,
      width: options.width || 480,
      closable: options.closable === false ? false : true,
      modelValue: visible.value,
      fill: options.fill,
      'onUpdate:modelValue': (value: boolean) => {
        visible.value = value
      },
      destroyOnClose: options.destroyOnClose ?? true,
      mask: options.mask ?? true,
      onOk,
      onClose
    }, {
      default: () => h('div', {
        class: 'drawer-content',
      }, body())
    })
  })
  drawer.config.globalProperties = app.config.globalProperties
  Object.assign(drawer._context, app._context)
  const vm = drawer.mount(container)

}


function drawer (this: CoreVendor, options: DrawerOptions) {
  const instance = createDrawer(options, this.app!)
  const hide = () => {
    },
    destory = () => {
    }
  return {
    hide, destory
  }
}

export default drawer

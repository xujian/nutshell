import { getCurrentInstance, h, App, inject, Component } from 'vue'
import { CoreVendor } from '../../shared'
// import { dialog, toast, loading, notice, drawer, sheet } from './services'
import components from './components'
import { ConfirmOptions, DialogOptions } from '../../services/dialog'
import { BusSymbol } from '../../composables'
import { ToastOptions } from '../../services/toast'
import { LoadingOptions } from '../../services/loading'

const makeDummy = (name: string) => {
  return () => dummy(name.toUpperCase())
}

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

const nutuiVendor: CoreVendor = {
  app: null,
  prepare (app: App) {
    this.app = app
    // app.use(ConfigProvider)
    const $bus = app.runWithContext(() => inject(BusSymbol))!
    this.dialog = (options: DialogOptions) => {
      $bus.emit('dialog', options)
      return void 0
    }
    this.toast = (message: string, options: ToastOptions) => {
      $bus.emit('toast', {message, options})
    }
    this.loading = (options: LoadingOptions) => {
      $bus.emit('loading', options)
    }
    this.drawer = (component?: Component, props?: any) => {
      $bus.emit('drawer', { component, props })
    }
    this.sheet = (component?: Component, props?: any) => {
      $bus.emit('sheet', { component, props })
    }
    this.notice = (message: string) => {
      $bus.emit('notice', { message })
    }
    this.confirm = (message: string, onOk: () => void, options?: ConfirmOptions) => {
      $bus.emit('confirm', {
        message,
        options: {
          ...options,
          onOk
        }
      })
    }
  },
  render (props, ctx) {
    const { parent } = getCurrentInstance()!
    const name = parent?.type?.name?.slice(2)! //.toLowerCase() // NsButton -> Button
    const component = components[name] || makeDummy(name)
    const { slots } = ctx
    return h(component, props, slots)
  },
  dialog: (options: DialogOptions) => {return undefined},
  toast: (message: string, options: ToastOptions) => {},
  loading: (options: LoadingOptions) => {},
  drawer: (component?: Component, props?: any) => {},
  sheet: (component?: Component, props?: any) => {},
  notice: (message: string) => {},
  confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => {}
}

export default nutuiVendor

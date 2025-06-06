import { getCurrentInstance, h, App, inject, FunctionalComponent } from 'vue'
import { CoreVendor } from '../../shared/models/CoreVendor'
import components from './components'
import { ConfirmOptions, DialogOptions, NutshellSymbol, PreviewMediaParam } from '../../types'
import { PreviewOptions } from '../../types'
import { BusSymbol } from '../../composables'
import type { ToastOptions, NoticeOptions, LoadingOptions, DrawerOptions, SheetOptions } from '../../types'
import { Media } from '../../types'
import { NsPreview } from '../../components/preview'

const makeDummy = (name: string) => {
  return () => dummy(name.toUpperCase())
}

// fallback for component not implemented
const dummy = (name: string) => {
  return h('div', {
    class: 'dummy'
  }, `NS-${name} 尚未实现`)
}

export default function getNutuiVendor (): CoreVendor {
  return {
    app: null,
    prepare (app: App) {
      this.app = app
      // app.use(ConfigProvider)
      const $bus = app.runWithContext(() => inject(BusSymbol))!,
        $n =  app.runWithContext(() => inject(NutshellSymbol))!
      this.dialog = (options: DialogOptions) => {
        $bus.emit('dialog', options)
      }
      this.toast = (message: string, options: ToastOptions) => {
        $bus.emit('toast', {message, options})
      }
      this.loading = (options: LoadingOptions) => {
        $bus.emit('loading', options)
      }
      this.drawer = (options: DrawerOptions) => {
        $bus.emit('drawer', options)
      }
      this.sheet = (options: SheetOptions) => {
        $bus.emit('sheet', options)
      }
      this.notice = (message: string, options?: NoticeOptions) => {
        $bus.emit('notice', { message, options })
      }
      this.confirm = (message: string, onOk: () => void, options?: ConfirmOptions) => {
        $bus.emit('confirm', {
          ...options,
          message,
          onOk
        })
      }
      this.preview = (media: string | Media, options?: PreviewOptions) => {
        const m = typeof media === 'string' ? { url: media } : media
        $bus.emit('drawer', {
          width: '100vw',
          round: false,
          backable: true,
          component: NsPreview,
          props: { media: m },
          ...options,
        })
      }
    },
    render (props: any, ctx) {
      const vm = getCurrentInstance()
      const name = vm?.type?.name?.slice(2)! //.toLowerCase() // NsButton -> Button
      const component = components[name] || makeDummy(name) as FunctionalComponent
      const { slots } = ctx
      return h(component, props, slots)
    },
    dialog: (options: DialogOptions) => {},
    toast: (message: string, options: ToastOptions) => {},
    loading: (options: LoadingOptions) => {},
    drawer: (options: DrawerOptions) => {},
    sheet: (options: SheetOptions) => {},
    notice: (message: string) => {},
    confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => {},
    preview: (media: PreviewMediaParam, options?: PreviewOptions) => {},
  }
}

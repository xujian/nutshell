import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell, PreviewMediaParam } from '../framework'
import { Color } from '../composables'
import { Media } from '../types'
import { PopupChildComponent } from './types'
import { PreviewMode } from '../components'

export type DrawerOptions = {
  title?: string,
  /**
   * 嵌入子组件
   */
  component?: PopupChildComponent,
  /**
   * 透传给子组件的属性
   */
  props?: any,
  closable?: boolean,
  width?: number,
  fill?: Color,
  mask?: boolean,
  destroyOnClose?: boolean,
  round?: boolean,
}

export type DrawerInstance = {
  hide: () => void,
  destory: () => void
}

export type PreviewInstance = {
  update (value: Media[]): void
}

export type PreviewButtonClickCallback = {
  description: string;
  (this: PreviewInstance): void;
}


export type PreviewOptions = {
  fill?: Color,
  mode?: PreviewMode,
  button?: string,
  onButtonClick (this: PreviewInstance): void
}

/**
 * Drawer Service
 * Dynamically create a dialog
 * Usage:
 *  $n.dialog(options: DrawerOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.drawer = (options: DrawerOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.drawer(options)
      })
    }
    $n.preview = (media: PreviewMediaParam, options?: PreviewOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.preview(media, options)
      })
    }
  }
}

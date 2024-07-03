import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'
import { Color } from '../composables'
import type { Component, ComputedOptions, MethodOptions } from 'vue'

export type DrawerOptions = {
  title?: string,
  /**
   * 嵌入子组件
   */
  component?: Component,
  /**
   * 透传给子组件的属性
   */
  props?: any,
  closable?: boolean,
  width?: number,
  fill?: Color,
  mask?: boolean,
  destroyOnClose?: boolean,
}

export type DrawerInstance = {
  hide: () => void,
  destory: () => void
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
        p.dialog(options)
      })
    }
  }
}

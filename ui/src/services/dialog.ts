import { h, inject, ref, App, VueElement } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'
import { Color } from '../composables'
import {  } from 'vue'
import { VueElementConstructor } from 'vue'

export type DialogOptions = {
  title?: string,
  message?: string,
  /**
   * 嵌入子组件
   */
  component?: any,
  /**
   * 透传给子组件的属性
   */
  props?: any,
  width?: number,
  height?: number,
  fill?: Color,
  okText?: string,
  cancelText?: string,
  okColor?: Color,
  footer?: boolean,
  onOk?: (result?: any) => void
  onCancel?: () => void
  centered?: boolean
}

export type ConfirmOptions = {
  title?: string,
  message?: string,
  okText?: string,
  cancelText?: string,
  okColor?: Color
}

export type DialogInstance = {
  hide: () => void,
  destory: () => void
}

/**
 * Dialog Service
 * Dynamically create a dialog
 * Usage:
 *  $n.dialog(options: DialogOptions)
 */
export default {
  install (app: App, $n: DollarNutshell) {
    $n.dialog = (options: DialogOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.dialog(options)
      })
    }
    $n.confirm = (message: string, onOk: () => void, options?: ConfirmOptions) => {
      const vendor = app._context.provides[VendorSymbol as symbol]
      Promise.resolve(vendor).then(p => {
        p.confirm(message, onOk, options)
      })
    }
  }
}

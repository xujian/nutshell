import { App } from 'vue'
import { VendorSymbol } from '../shared/symbols'
import { DollarNutshell } from '../framework'
import { Color } from '../composables'
import type { Component, ComputedOptions, MethodOptions } from 'vue'

/**
 * 对话框内嵌组件需要实现的方法
 */
export type DialogChildComponentMethods = {
  couldComplete: () => boolean | Promise<boolean>
  couldClose: () => boolean | Promise<boolean>
}

/**
 * 对话框内嵌组件
 */
export type DialogChildComponent = Component<
  any,any, any, ComputedOptions,
  DialogChildComponentMethods
>

export type DialogOptions = {
  title?: string,
  message?: string,
  /**
   * 嵌入子组件
   */
  component?: DialogChildComponent,
  /**
   * 透传给子组件的属性
   */
  props?: any,
  closable?: boolean,
  width?: number,
  height?: number,
  fill?: Color,
  okText?: string,
  cancelText?: string,
  okColor?: Color,
  footer?: boolean,
  mask?: boolean,
  destroyOnClose?: boolean,
  classes?: string[],
  onOk?: (result?: any) => boolean | undefined
  onCancel?: () => boolean | undefined
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

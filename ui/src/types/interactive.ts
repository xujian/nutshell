
import type { Component, ComputedOptions, VNode } from 'vue'
import { Color } from '../composables'
import { Dimension } from './css'
import { PreviewMode } from '../components'
import { NutshellOptions } from './core'
import { PreviewInstance } from '../composables/preview'
import { Media } from './media'

/**
 * 对话框内嵌组件需要实现的方法
 */
export type PopupChildComponentMethods = {
  couldComplete: () => boolean | Promise<boolean>
  couldClose: () => boolean | Promise<boolean>
}

/**
 * 对话框内嵌组件
 */
export type PopupChildComponent = Component<
  any,any, any, ComputedOptions,
  PopupChildComponentMethods
>


export type DialogOptions = {
  title?: string,
  message?: string | string[],
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
  height?: number,
  fill?: Color,
  okText?: string,
  cancelText?: string,
  okColor?: Color,
  cancelColor?: Color,
  footer?: boolean,
  mask?: boolean,
  destroyOnClose?: boolean,
  classes?: string[],
  onOk?: (result?: any) => boolean | undefined,
  onComplete?: (result?: any) => boolean | undefined | Promise<boolean | undefined>,
  onCancel?: () => boolean | undefined,
  centered?: boolean,
  fullScreen?: boolean,
}

export type ConfirmOptions = {
  title?: string,
  message?: string | string[],
  okText?: string,
  cancelText?: string,
  okColor?: Color,
  cancelColor?: Color,
  onOk?: (result?: any) => boolean | undefined
  onCancel?: () => boolean | undefined,
  classes?: string[],
  centered?: boolean,
}

export type DialogInstance = {
  hide: () => void,
  destory: () => void
}

export type PreviewMediaParam = string | Media | string[] | Media[]


/**
 * Service interface for dialog functionality
 */
export interface DialogService {
  alert(options: DialogOptions): Promise<void>
  confirm(options: DialogOptions): Promise<boolean>
  info(options: DialogOptions): void
  success(options: DialogOptions): void
  warning(options: DialogOptions): void
  error(options: DialogOptions): void
}

/**
 * Function type for vendor-specific component rendering
 */
export type VendorRenderFunction = (props: any) => VNode | null

/**
 * Configuration for component styling
 */
export interface VendorComponentStyle {
  name: string
  css: string
}

export type ToastOptions = {
  /**
   * Toast 形式 'success' | 'error' | 'warning'
   */
  type?: string,
  /**
   * 停留时间
   */
  duration?: number,
}

export type SheetOptions = {
  title?: string,
  /**
   * 嵌入子组件
   */
  component: PopupChildComponent,
  width: Dimension,
  /**
   * 透传给子组件的属性
   */
  fill: Color,
  props?: any,
  closable?: boolean,
  height?: number,
  mask?: boolean,
  destroyOnClose?: boolean,
  onComplete?: (result?: any) => boolean | undefined | Promise<boolean | undefined>,
  onOk?: (result?: any) => boolean | undefined
  okText: string,
  onCancel?: () => boolean | undefined
  footer: boolean,
}

export type PreviewOptions = {
  fill?: Color,
  mode?: PreviewMode,
  button?: string,
  hasCloseButton?: boolean,
  hasHeader?: boolean,
  onButtonClick (this: PreviewInstance): void
}

export type DrawerOptions = {
  title?: string,
  /**
   * 嵌入子组件
   */
  component: PopupChildComponent,
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
  onComplete?: (result?: any) => boolean | undefined | Promise<boolean | undefined>,
  onCancel?: () => boolean | undefined
}

export type LoadingOptions = {
}

export type NoticeType = 'info' | 'success' | 'error' | 'warning'

export type NoticeOptions = {
  /**
   * Notice 形式 'success' | 'error' | 'warning'
   */
  type?: string,
  /**
   * 停留时间
   */
  duration?: number,
}

export type DollarNutshell = {
  dialog: (options: DialogOptions) => void,
  confirm: (message: string, onOk: () => void, options?: ConfirmOptions) => void,
  preview: (media: PreviewMediaParam, options?: PreviewOptions) => void,
  toast: (message: string, options?: ToastOptions) => void,
  notice: (message: string, options?: ToastOptions) => void,
  sheet: (options: SheetOptions) => void,
  drawer: (options: DrawerOptions) => void,
  loading: (options?: LoadingOptions) => void,
  options: NutshellOptions
}


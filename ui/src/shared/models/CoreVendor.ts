import { App } from 'vue'
import { VendorRenderFunction } from '..'
import type { ConfirmOptions, DialogOptions, DrawerOptions, LoadingOptions, Media,
  PreviewOptions,
  SheetOptions, ToastOptions } from '../../types'

/**
 * Nutshell Core Vendor
 *
 */
export interface CoreVendor {
  app: App | null,
  prepare: (app: App) => void,
  render: VendorRenderFunction,
  dialog: (options: DialogOptions) => void,
  notice: (message: string, options?: ToastOptions) => void,
  sheet: (options: SheetOptions) => void,
  drawer: (options: DrawerOptions) => void,
  preview: (media: string | Media, options: PreviewOptions) => void,
  confirm (message: string, onOk: () => void, options: ConfirmOptions): void,
  toast (message: string, options: ToastOptions): void,
  loading (options: LoadingOptions): void,
  /**
   * 降级到 Prime Vendor
   */
  fallback?: CoreVendor
}

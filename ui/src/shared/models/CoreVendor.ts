import { App } from 'vue'
import { ToastOptions } from '../../services/toast'
import { ConfirmOptions, DialogInstance, DialogOptions } from '../../services/dialog'
import { SheetOptions } from '../../services/sheet'
import { DrawerOptions } from '../../services/drawer'
import { LoadingOptions } from '../../services/loading'
import { VendorRenderFunction } from '..'

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
  confirm (message: string, onOk: () => void, options: ConfirmOptions): void,
  toast (message: string, options: ToastOptions): void,
  loading (options: LoadingOptions): void,
  /**
   * 降级到 Prime Vendor
   */
  fallback?: CoreVendor
}

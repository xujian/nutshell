import { App } from 'vue'
import dialog, { type DialogOptions } from './dialog'
import toast, { type ToastOptions } from './toast'
import loading, { type LoadingOptions } from './loading'
import sheet, { type SheetOptions } from './sheet'
import drawer, { type DrawerOptions } from './drawer'
import notice, { type NoticeOptions, type NoticeType } from './notice'
import { DollarNutshell } from '../framework'

export type Service = {
  install (app: App, $n: DollarNutshell): void
}

export * from './types'

export {
  DialogOptions,
  SheetOptions,
  ToastOptions,
  NoticeOptions,
  DrawerOptions,
  LoadingOptions,
  NoticeType,
}

const services: Service[] = [
  drawer,
  dialog,
  toast,
  loading,
  sheet,
  notice,
]

export default services

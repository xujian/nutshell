import { App } from 'vue'
import dialog, { type DialogOptions } from './dialog'
import toast, { type ToastOptions } from './toast'
import loading from './loading'
import sheet, { type SheetOptions } from './sheet'
import { DollarNutshell } from '../framework'

export type Service = {
  install (app: App, $n: DollarNutshell): void
}

export * from './types'

export {
  DialogOptions,
  SheetOptions,
  ToastOptions
}

const services: Service[] = [
  dialog,
  toast,
  loading,
  sheet
]

export default services

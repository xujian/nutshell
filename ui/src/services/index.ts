import { App } from 'vue'
import dialog from './dialog'
import type { DialogChildComponent, DialogChildComponentMethods } from './dialog'
import toast from './toast'
import loading from './loading'
import sheet from './sheet'
import { DollarNutshell } from '../framework'

export type Service = {
  install (app: App, $n: DollarNutshell): void
}

export {
  DialogChildComponent, DialogChildComponentMethods
}

const services: Service[] = [
  dialog,
  toast,
  loading,
  sheet
]

export default services

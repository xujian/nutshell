import { App } from 'vue'
import dialog from './dialog'
import toast from './toast'
import loading from './loading'
import sheet from './sheet'
import drawer from './drawer'
import notice  from './notice'
import { DollarNutshell } from '../types'

export type Service = {
  install (app: App, $n: DollarNutshell): void
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

import { App } from 'vue'
import dialog from './dialog'
import toast from './toast'
import loading from './loading'
import { DollarNutshell } from '../framework'

export type Service = {
  install (app: App, $n: DollarNutshell)
}

const services: Service[] = [
  dialog,
  toast,
  loading
]

export default services
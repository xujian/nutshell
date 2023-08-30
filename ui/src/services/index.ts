import { App } from 'vue'
import dialog from './dialog'
import toast from './toast'
import loading from './loading'

export type Service = {
  install ($n: any, app: App)
}

const services: Service[] = [
  dialog,
  toast,
  loading
]

export default services
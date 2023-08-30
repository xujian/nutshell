import { App } from 'vue'
import dialog from './dialog'

export type Service = {
  install ($n: any, app: App)
}

const services: Service[] = [
  dialog
]

export default services
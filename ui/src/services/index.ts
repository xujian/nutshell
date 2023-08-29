import { App } from 'vue'
import Dialog from './Dialog'

export type Service = {
  install ($n: any, app: App)
}

const services: Service[] = [
  Dialog
]

export default services
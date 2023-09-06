import { message as antdvMessage } from 'ant-design-vue'
import { DEAULT_TOAST_DURATION, ToastOptions } from '../../../services/toast'

function toast (message: string, options: ToastOptions = {}) {
  const {type = 'info', duration = DEAULT_TOAST_DURATION} = options
  antdvMessage[type](message, duration)
}

export default toast
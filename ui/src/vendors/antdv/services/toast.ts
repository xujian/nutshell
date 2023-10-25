import { message as antdvMessage } from 'ant-design-vue'
import { DEAULT_TOAST_DURATION, ToastOptions } from '../../../services/toast'
import { MessageApi } from 'ant-design-vue/es/message'

type MesageType = 'info' | 'success'

function toast (message: string, options: ToastOptions = {}) {
  const {type = 'info', duration = DEAULT_TOAST_DURATION} = options
  const call = antdvMessage[type as MesageType]
  call?.(message, options.duration)
}

export default toast
import { message as antdvMessage } from 'ant-design-vue'
import { DEAULT_TOAST_DURATION } from '../../../services/toast'
import { ToastOptions } from '../../../types'

type MesageType = 'info' | 'success'

function toast (message: string, options: ToastOptions = {}) {
  const {type = 'info', duration = DEAULT_TOAST_DURATION} = options
  const call = antdvMessage[type as MesageType]
  call?.({
    content: message,
    duration,
    class: 'ns-toast'
  })
}

export default toast

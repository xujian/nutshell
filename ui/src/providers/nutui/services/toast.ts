import { DEAULT_TOAST_DURATION, ToastOptions, ToastType } from '../../../services/toast'

const iconMapping: Record<ToastType, string> = {
  info: 'none',
  success: 'success',
  error: 'error',
  warning: 'error',
}

function toast (message: string, options: ToastOptions = {}) {
  const { duration = DEAULT_TOAST_DURATION, type = 'info'} = options
  Taro['showToast']?.({
    title: message,
    duration: duration * 1000,
    icon: iconMapping[type]
  })
}

export default toast
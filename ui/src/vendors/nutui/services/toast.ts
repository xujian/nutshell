import { DEAULT_TOAST_DURATION, ToastOptions, ToastType } from '../../../services/toast'

type NutuiToastType = 'success' | 'error' | 'none' | 'loading' | undefined

const iconMapping: Record<ToastType, NutuiToastType> = {
  info: 'none',
  success: 'success',
  error: 'error',
  warning: 'error',
}

function toast (message: string, options: ToastOptions = {}) {
  const { duration = DEAULT_TOAST_DURATION, type = 'info'} = options
  wx['showToast']?.({
    title: message,
    duration: duration * 1000,
    icon: iconMapping[type as ToastType]
  })
}

export default toast

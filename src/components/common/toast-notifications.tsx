import { toast } from './toast-provider'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastOptions {
  title: string
  description?: string
  duration?: number
}

export const showToast = (type: ToastType, options: ToastOptions) => {
  const toastOptions = {
    duration: options.duration || 4000
  }

  switch (type) {
    case 'success':
      toast.success(options.title, {
        description: options.description,
        ...toastOptions
      })
      break
    case 'error':
      toast.error(options.title, {
        description: options.description,
        ...toastOptions
      })
      break
    case 'warning':
      toast.warning(options.title, {
        description: options.description,
        ...toastOptions
      })
      break
    case 'info':
    default:
      toast.info(options.title, {
        description: options.description,
        ...toastOptions
      })
      break
  }
}
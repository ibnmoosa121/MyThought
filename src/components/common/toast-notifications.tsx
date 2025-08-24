import React from 'react'
import { toast } from './toast-provider'
import { CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react'
import { Button } from '../ui/button'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastOptions {
  title: string
  description?: string
  duration?: number
}

const TOAST_ICONS = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info
}

export const showToast = (type: ToastType, options: ToastOptions) => {
  const Icon = TOAST_ICONS[type]
  
  const toastContent = (
    <div className="flex items-start gap-3">
      <Icon size={20} className={`mt-0.5 ${
        type === 'success' ? 'text-green-600' :
        type === 'error' ? 'text-red-600' :
        type === 'warning' ? 'text-yellow-600' :
        'text-blue-600'
      }`} />
      <div className="flex-1">
        <div className="font-medium">{options.title}</div>
        {options.description && (
          <div className="text-sm text-muted-foreground mt-1">
            {options.description}
          </div>
        )}
      </div>
    </div>
  )

  switch (type) {
    case 'success':
      toast.success(toastContent, { duration: options.duration })
      break
    case 'error':
      toast.error(toastContent, { duration: options.duration })
      break
    case 'warning':
      toast.warning(toastContent, { duration: options.duration })
      break
    case 'info':
    default:
      toast.info(toastContent, { duration: options.duration })
      break
  }
}

export const ToastDemo = () => {
  const handleToast = (type: ToastType) => {
    const messages = {
      success: {
        title: 'Success!',
        description: 'Your action was completed successfully.'
      },
      error: {
        title: 'Error occurred',
        description: 'Something went wrong. Please try again.'
      },
      warning: {
        title: 'Warning',
        description: 'Please check your input and try again.'
      },
      info: {
        title: 'Information',
        description: 'Here is some useful information for you.'
      }
    }

    showToast(type, messages[type])
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => handleToast('success')}
        className="text-green-600 border-green-500 hover:bg-green-500/10"
      >
        Success Toast
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => handleToast('error')}
        className="text-destructive border-destructive hover:bg-destructive/10"
      >
        Error Toast
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => handleToast('warning')}
        className="text-yellow-600 border-yellow-500 hover:bg-yellow-500/10"
      >
        Warning Toast
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => handleToast('info')}
        className="text-primary border-primary hover:bg-primary/10"
      >
        Info Toast
      </Button>
    </div>
  )
}

export default ToastDemo
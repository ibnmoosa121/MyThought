import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useAppStore } from '../../stores/app-store'

const ToastNotification = ({ notification, onRemove }: { 
  notification: any
  onRemove: (id: string) => void 
}) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-error" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-warning" />
      case 'info':
      default:
        return <Info className="w-5 h-5 text-info" />
    }
  }

  const getAlertClass = () => {
    switch (notification.type) {
      case 'success':
        return 'alert-success'
      case 'error':
        return 'alert-error'
      case 'warning':
        return 'alert-warning'
      case 'info':
      default:
        return 'alert-info'
    }
  }



  return (
    <div className={`alert ${getAlertClass()} shadow-lg mb-2 animate-in slide-in-from-right duration-300`}>
      {getIcon()}
      <div className="flex-1">
        <div className="font-medium">{notification.title}</div>
        {notification.message && (
          <div className="text-sm opacity-80">{notification.message}</div>
        )}
      </div>
      <button
        className="btn btn-ghost btn-sm btn-circle"
        onClick={() => onRemove(notification.id)}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export const ToastContainer = () => {
  const { notifications, removeNotification } = useAppStore()

  if (notifications.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-w-sm space-y-2">
      {notifications.map((notification) => (
        <ToastNotification
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  )
}

export default ToastContainer
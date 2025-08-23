import React from 'react'
import { X, Info, CheckCircle, AlertTriangle, XCircle, Bell } from 'lucide-react'
import { useAppStore, type Notification } from '../../stores/app-store'

// Notification icon mapping
const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  const iconProps = { size: 20, className: 'flex-shrink-0' }
  
  switch (type) {
    case 'success':
      return <CheckCircle {...iconProps} className="text-success flex-shrink-0" />
    case 'warning':
      return <AlertTriangle {...iconProps} className="text-warning flex-shrink-0" />
    case 'error':
      return <XCircle {...iconProps} className="text-error flex-shrink-0" />
    case 'info':
    default:
      return <Info {...iconProps} className="text-info flex-shrink-0" />
  }
}

// Individual notification item
const NotificationItem = ({ notification }: { notification: Notification }) => {
  const { removeNotification } = useAppStore()
  
  const alertClass = {
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
    info: 'alert-info'
  }[notification.type]
  
  return (
    <div className={`alert ${alertClass} shadow-lg animate-in slide-in-from-right duration-300`}>
      <NotificationIcon type={notification.type} />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm">{notification.title}</h4>
        {notification.message && (
          <p className="text-xs opacity-80 mt-1">{notification.message}</p>
        )}
      </div>
      <button
        onClick={() => removeNotification(notification.id)}
        className="btn btn-ghost btn-xs btn-square ml-2 flex-shrink-0"
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </div>
  )
}

// Main notification display component
export const NotificationDisplay = () => {
  const { notifications } = useAppStore()
  
  if (notifications.length === 0) {
    return null
  }
  
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full sm:max-w-md">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  )
}

// Mobile notification display (alternative positioning)
export const MobileNotificationDisplay = () => {
  const { notifications } = useAppStore()
  
  if (notifications.length === 0) {
    return null
  }
  
  return (
    <div className="fixed top-16 left-4 right-4 z-50 space-y-2 sm:hidden">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  )
}

// Notification badge for header
export const NotificationBadge = () => {
  const { notifications, removeNotification, clearNotifications } = useAppStore()
  const count = notifications.length
  
  return (
    <div className="dropdown dropdown-end">
      <div className="indicator">
        {count > 0 && (
          <span className="indicator-item badge badge-primary badge-sm">
            {count > 9 ? '9+' : count}
          </span>
        )}
        <div
          tabIndex={0}
          role="button"
          className={`btn btn-ghost btn-circle hover:bg-base-200 ${
            count === 0 ? 'opacity-50' : ''
          }`}
          title={count > 0 ? `${count} notification${count !== 1 ? 's' : ''}` : 'No notifications'}
        >
          <Bell size={20} />
        </div>
      </div>
      
      {count > 0 && (
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card card-compact w-80 p-2 shadow-lg bg-base-100 border border-base-300"
        >
          <div className="card-body">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">Notifications ({count})</h3>
              <button
                onClick={clearNotifications}
                className="btn btn-ghost btn-xs"
                title="Clear all notifications"
              >
                Clear All
              </button>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {notifications.map((notification) => (
                <div key={notification.id} className={`alert alert-${notification.type} p-2`}>
                  <NotificationIcon type={notification.type} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs">{notification.title}</h4>
                    {notification.message && (
                      <p className="text-xs opacity-80">{notification.message}</p>
                    )}
                  </div>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="btn btn-ghost btn-xs btn-square"
                    aria-label="Dismiss notification"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationDisplay
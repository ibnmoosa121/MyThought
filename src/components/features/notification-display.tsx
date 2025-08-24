import React from 'react'
import { Bell, X } from 'lucide-react'
import { useAppStore } from '../../stores/app-store'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { cn } from '../../lib/utils'

const NOTIFICATION_STYLES = {
  info: 'border-primary bg-primary/10 text-primary',
  success: 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400',
  warning: 'border-yellow-500 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
  error: 'border-destructive bg-destructive/10 text-destructive'
}

export const NotificationBadge = () => {
  const { notifications } = useAppStore()
  const unreadCount = notifications.length

  if (unreadCount === 0) {
    return (
      <Button variant="ghost" size="icon" className="h-8 w-8 relative">
        <Bell size={16} className="text-muted-foreground" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 relative">
          <Bell size={16} />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 p-0 bg-popover/95 backdrop-blur supports-[backdrop-filter]:bg-popover/60 text-popover-foreground border-border shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        sideOffset={4}
      >
        <NotificationList />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const NotificationList = () => {
  const { notifications, removeNotification, clearNotifications } = useAppStore()

  if (notifications.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground bg-card">
        <Bell size={24} className="mx-auto mb-2 opacity-50" />
        <p className="text-sm font-medium">No notifications</p>
        <p className="text-xs mt-1 opacity-75">You're all caught up!</p>
      </div>
    )
  }

  return (
    <div className="max-h-96 overflow-y-auto backdrop-popover">
      <div className="flex items-center justify-between p-4 border-b border-border backdrop-card">
        <h3 className="font-semibold text-sm text-foreground">Notifications</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearNotifications}
          className="h-7 px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Clear all
        </Button>
      </div>
      <div className="divide-y divide-border">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "p-4 border-l-4 relative bg-card hover:bg-accent/50 transition-colors group",
              NOTIFICATION_STYLES[notification.type]
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeNotification(notification.id)}
              className="absolute top-3 right-3 h-6 w-6 opacity-0 group-hover:opacity-100 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              <X size={12} />
            </Button>
            <div className="pr-10">
              <h4 className="font-medium text-sm mb-1 text-foreground">{notification.title}</h4>
              {notification.message && (
                <p className="text-xs text-muted-foreground leading-relaxed">{notification.message}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationBadge
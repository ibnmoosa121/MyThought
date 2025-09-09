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
            className="absolute -top-1.5 -right-1.5 h-4 w-4 flex items-center justify-center p-0 text-[10px] font-medium transition-all duration-200 hover:scale-110 border border-background shadow-sm"
          >
            {unreadCount > 99 ? '99+' : unreadCount}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 sm:w-96 p-0 bg-popover/95 backdrop-blur supports-[backdrop-filter]:bg-popover/60 text-popover-foreground border-border shadow-lg"
        sideOffset={6}
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
    <div className="max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-sm text-foreground">Notifications</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearNotifications}
          className="h-7 px-2 sm:px-3 text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-200"
        >
          Clear all
        </Button>
      </div>
      <div className="divide-y divide-border">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "p-3 sm:p-4 border-l-4 relative bg-card hover:bg-accent/30 focus-within:bg-accent/40 transition-all duration-200 group cursor-pointer",
              "hover:shadow-sm focus-within:shadow-sm hover:scale-[1.01] focus-within:scale-[1.01]",
              "border-r border-r-transparent hover:border-r-border focus-within:border-r-border",
              NOTIFICATION_STYLES[notification.type]
            )}
            tabIndex={0}
            role="button"
            aria-label={`Notification: ${notification.title}`}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeNotification(notification.id)}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 h-6 w-6 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-destructive/20 hover:text-destructive focus:bg-destructive/20 focus:text-destructive transition-all duration-200"
              aria-label="Remove notification"
            >
              <X size={12} />
            </Button>
            <div className="pr-8 sm:pr-10">
              <h4 className="font-medium text-sm mb-1 text-foreground group-hover:text-accent-foreground transition-all duration-200">{notification.title}</h4>
              {notification.message && (
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-all duration-200">{notification.message}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotificationBadge
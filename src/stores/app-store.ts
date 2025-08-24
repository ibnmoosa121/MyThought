import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { showToast } from '../components/common/toast-notifications'

// Shadcn/UI theme types
export type Theme = 'light' | 'dark'

// All available themes array
export const ALL_THEMES: Theme[] = [
  'light', 'dark'
]

// Notification types
export interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message?: string
  duration?: number
}

// Counter statistics
export interface CounterStats {
  totalClicks: number
  maxValue: number
  minValue: number
  currentValue: number
}

// App state interface
interface AppState {
  // Theme management
  theme: Theme
  setTheme: (theme: Theme) => void
  setRandomTheme: () => void
  
  // Counter management
  counter: number
  stats: CounterStats
  incrementCounter: () => void
  decrementCounter: () => void
  resetCounter: () => void
  
  // Notification management
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

// Create the store with persistence
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme state
      theme: 'dark',
      setTheme: (theme: Theme) => {
        set({ theme })
        // Apply theme to document by updating class
        const root = document.documentElement
        
        if (theme === 'dark') {
          root.classList.add('dark')
          root.classList.remove('light')
        } else {
          root.classList.add('light')
          root.classList.remove('dark')
        }
        
        // Add theme change notification
        get().addNotification({
          type: 'info',
          title: 'Theme Changed',
          message: `Switched to ${theme} theme`,
          duration: 2000
        })
      },
      
      setRandomTheme: () => {
        const currentTheme = get().theme
        const availableThemes = ALL_THEMES.filter(theme => theme !== currentTheme)
        const randomTheme = availableThemes[Math.floor(Math.random() * availableThemes.length)]
        get().setTheme(randomTheme)
      },
      
      // Counter state
      counter: 0,
      stats: {
        totalClicks: 0,
        maxValue: 0,
        minValue: 0,
        currentValue: 0
      },
      
      incrementCounter: () => {
        const currentCounter = get().counter
        const newValue = currentCounter + 1
        const currentStats = get().stats
        
        set({
          counter: newValue,
          stats: {
            ...currentStats,
            totalClicks: currentStats.totalClicks + 1,
            maxValue: Math.max(currentStats.maxValue, newValue),
            currentValue: newValue
          }
        })
        
        // Add milestone notifications
        if (newValue % 10 === 0) {
          get().addNotification({
            type: 'success',
            title: 'Milestone Reached!',
            message: `Counter reached ${newValue}`,
            duration: 3000
          })
        } else if (newValue === 1) {
          get().addNotification({
            type: 'info',
            title: 'Counter Started',
            message: 'First increment!',
            duration: 2000
          })
        }
      },
      
      decrementCounter: () => {
        const currentCounter = get().counter
        
        if (currentCounter <= 0) {
          get().addNotification({
            type: 'warning',
            title: 'Cannot Decrease',
            message: 'Counter cannot go below 0',
            duration: 2000
          })
          return
        }
        
        const newValue = currentCounter - 1
        const currentStats = get().stats
        
        set({
          counter: newValue,
          stats: {
            ...currentStats,
            totalClicks: currentStats.totalClicks + 1,
            minValue: Math.min(currentStats.minValue, newValue),
            currentValue: newValue
          }
        })
        
        if (newValue === 0) {
          get().addNotification({
            type: 'info',
            title: 'Counter Reset',
            message: 'Back to zero!',
            duration: 2000
          })
        }
      },
      
      resetCounter: () => {
        const currentStats = get().stats
        
        set({
          counter: 0,
          stats: {
            ...currentStats,
            currentValue: 0
          }
        })
        
        get().addNotification({
          type: 'success',
          title: 'Counter Reset',
          message: 'Counter has been reset to 0',
          duration: 2000
        })
      },
      
      // Notification state
      notifications: [],
      
      addNotification: (notification: Omit<Notification, 'id'>) => {
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)
        const newNotification: Notification = {
          ...notification,
          id,
          duration: notification.duration || 4000
        }
        
        // Add to notification dropdown
        set(state => ({
          notifications: [...state.notifications, newNotification]
        }))
        
        // Also show as toast message
        showToast(newNotification.type, {
          title: newNotification.title,
          description: newNotification.message,
          duration: newNotification.duration
        })
        
        // Auto-remove notification after duration
        setTimeout(() => {
          get().removeNotification(id)
        }, newNotification.duration)
      },
      
      removeNotification: (id: string) => {
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }))
      },
      
      clearNotifications: () => {
        set({ notifications: [] })
      }
    }),
    {
      name: 'shadcnui-template-storage',
      partialize: (state) => ({
        theme: state.theme,
        counter: state.counter,
        stats: state.stats,
        notifications: state.notifications
      })
    }
  )
)

// Initialize store function
export const initializeStore = () => {
  if (typeof window !== 'undefined') {
    const state = useAppStore.getState()
    const root = document.documentElement
    
    if (state.theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }
}
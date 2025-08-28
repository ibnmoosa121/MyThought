import { useEffect } from 'react'
import { Header } from './components/layout/header'
import { MainContent } from './components/layout/main-content'
import { ToastProvider } from './components/common/toast-provider'
import { useAppStore, initializeStore } from './stores/app-store'

// Main App component
const App = () => {
  const { theme } = useAppStore()
  
  // Initialize store and apply theme on mount
  useEffect(() => {
    initializeStore()
  }, [])
  
  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [theme])
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <MainContent />
      
      {/* Toast Provider for notifications */}
      <ToastProvider />
    </div>
  )
}

export default App
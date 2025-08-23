import React, { useEffect } from 'react'
import { Header } from './components/layout/header'
import { MainContent } from './components/layout/main-content'

import { ToastContainer } from './components/ui/toast-notifications'
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
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <MainContent />
      
      {/* Toast notifications */}
      <ToastContainer />
    </div>
  )
}

export default App
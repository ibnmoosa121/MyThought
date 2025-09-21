import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/layout/header'
import { MainContent } from './components/layout/main-content'
import { ToastContainer } from './components/ui/toast-notifications'
import { useAppStore, initializeStore } from './stores/app-store'

// Import page components
import SoftwareTechPage from './pages/software-tech'
import BusinessConsultancyPage from './pages/business-consultancy'
import DesignCreativityPage from './pages/design-creativity'
import AboutUsPage from './pages/about-us'
import ContactUsPage from './pages/contact-us'
import BlogPage from './pages/blog'
import VenturesPage from './pages/ventures'

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
    <BrowserRouter>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* Header */}
        <Header />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/software-tech" element={<SoftwareTechPage />} />
          <Route path="/business-consultancy" element={<BusinessConsultancyPage />} />
          <Route path="/design-creativity" element={<DesignCreativityPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Toast notifications */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
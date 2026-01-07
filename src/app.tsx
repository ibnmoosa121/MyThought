import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { MainContent } from './components/layout/main-content'
import { SmoothScroll } from './components/layout/smooth-scroll'
import { initializeStore } from './stores/app-store'

// Import page components
import SoftwarePage from './pages/software'
import ConsultancyPage from './pages/consultancy'
import TalentPage from './pages/talent'
import DesignPage from './pages/design'
import VenturesPage from './pages/ventures'
import FintechPage from './pages/fintech'
import AboutUsPage from './pages/about-us'
import ContactUsPage from './pages/contact-us'
import BlogPage from './pages/blog'

// ScrollToTop component to handle navigation
const ScrollToTop = () => {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}

// Main App component
const App = () => {
  // Initialize store and apply theme on mount
  useEffect(() => {
    initializeStore()
  }, [])

  return (
    <HashRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen bg-base-100 text-base-content">
          {/* Header */}
          <Header />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/consultancy" element={<ConsultancyPage />} />
            <Route path="/talent" element={<TalentPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/ventures" element={<VenturesPage />} />
            <Route path="/fintech" element={<FintechPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  )
}

export default App

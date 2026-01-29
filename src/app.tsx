import { Suspense, lazy, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { SmoothScroll } from './components/layout/smooth-scroll'
import { initializeStore } from './stores/app-store'
import { Preloader } from './components/ui/preloader'

// Lazy load page components
const MainContent = lazy(() => import('./components/layout/main-content'))
const SoftwarePage = lazy(() => import('./pages/software'))
const ConsultancyPage = lazy(() => import('./pages/consultancy'))
const TalentPage = lazy(() => import('./pages/talent'))
const DesignPage = lazy(() => import('./pages/design'))
const VenturesPage = lazy(() => import('./pages/ventures'))
const FintechPage = lazy(() => import('./pages/fintech'))
const AboutUsPage = lazy(() => import('./pages/about-us'))
const BlogPage = lazy(() => import('./pages/blog'))
const ContactPage = lazy(() => import('./pages/contact'))
const AIAnalyticsPage = lazy(() => import('./pages/ai-analytics'))

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
        <div className="min-h-screen bg-base-100 text-base-content dark flex flex-col">
          <Preloader />
          {/* Header */}
          <Header />

          {/* Routes wrapped in Suspense for lazy loading */}
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/software" element={<SoftwarePage />} />
              <Route path="/consultancy" element={<ConsultancyPage />} />
              <Route path="/talent" element={<TalentPage />} />
              <Route path="/design" element={<DesignPage />} />
              <Route path="/ventures" element={<VenturesPage />} />
              <Route path="/fintech" element={<FintechPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  )
}

export default App

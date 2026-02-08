import { Suspense, lazy, useEffect, useState } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { SmoothScroll } from './components/layout/smooth-scroll'
import { initializeStore } from './stores/app-store'
import { Preloader } from './components/ui/preloader'
import { cn } from './lib/utils'

// Deployment Trigger: 2026-02-08-01

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

const App = () => {
  const [isReady, setIsReady] = useState(false)

  // Initialize store and apply theme on mount
  useEffect(() => {
    initializeStore()
    // Small delay to ensure everything is mounted before revealing
    const timer = setTimeout(() => setIsReady(true), 100)

    // Background prefetching of other routes for "instant" feel
    const prefetchRoutes = () => {
      // Small delay to not interfere with initial critical rendering
      setTimeout(() => {
        import('./pages/software')
        import('./pages/consultancy')
        import('./pages/talent')
        import('./pages/design')
        import('./pages/ventures')
        import('./pages/fintech')
        import('./pages/about-us')
        import('./pages/blog')
        import('./pages/contact')
        import('./pages/ai-analytics')
      }, 3000)
    }

    prefetchRoutes()

    return () => clearTimeout(timer)
  }, [])

  return (
    <HashRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className={cn(
          "min-h-screen bg-base-100 text-base-content dark flex flex-col transition-opacity duration-500",
          isReady ? "opacity-100" : "opacity-0"
        )}>
          <Preloader />
          {/* Header */}
          <Header />

          {/* Routes wrapped in Suspense for lazy loading */}
          <Suspense fallback={<div className="flex-1 bg-black" />}>
            <div className="flex-1 flex flex-col relative">
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

              {/* Footer moved inside Suspense with an additional presence check */}
              <div className="relative z-10">
                <Footer />
              </div>
            </div>
          </Suspense>
        </div>
      </SmoothScroll>
    </HashRouter>
  )
}

export default App

import { Flower2 } from 'lucide-react'
import { NotificationBadge } from '../ui/notification-display'
import { CompactThemeSelector } from '../ui/theme-selector'

// App logo/brand component
const AppBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-content">
        <Flower2 size={24} className="text-primary-content" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold leading-tight">
          DaisyUI React Template
        </h1>
        <p className="text-xs opacity-70 hidden sm:block">
          Modern • TypeScript • Zustand
        </p>
      </div>
    </div>
  )
}

// Mobile app brand (simplified)
const MobileAppBrand = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-content">
        <Flower2 size={18} className="text-primary-content" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-bold leading-tight">
          DaisyUI React
        </h1>
        <p className="text-xs opacity-70 leading-tight">
          Template
        </p>
      </div>
    </div>
  )
}

// Header actions (notifications + theme)
const HeaderActions = () => {
  return (
    <div className="flex items-center gap-2">
      <NotificationBadge />
      <div className="divider divider-horizontal mx-0"></div>
      <CompactThemeSelector />
    </div>
  )
}

// Main header component
export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-base-300 bg-base-100/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop brand */}
          <div className="hidden sm:block">
            <AppBrand />
          </div>
          
          {/* Mobile brand */}
          <div className="block sm:hidden">
            <MobileAppBrand />
          </div>
          
          {/* Header actions */}
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

// Alternative header with navigation (for future expansion)
export const HeaderWithNav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-base-300 bg-base-100/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="hidden sm:block">
            <AppBrand />
          </div>
          <div className="block sm:hidden">
            <MobileAppBrand />
          </div>
          
          {/* Navigation (placeholder for future) */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
              Docs
            </a>
          </nav>
          
          {/* Actions */}
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

// Minimal header variant
export const MinimalHeader = () => {
  return (
    <header className="w-full border-b border-base-300 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Flower2 size={20} className="text-primary" />
            <span className="font-semibold text-lg">DaisyUI Template</span>
          </div>
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

export default Header
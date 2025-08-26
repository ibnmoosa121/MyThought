import React from 'react'
import { Flower2 } from 'lucide-react'
import { NotificationBadge } from '../features/notification-display'
import { CompactThemeSelector } from '../features/theme-selector'

// App logo/brand component
const AppBrand = () => {
  return (
    <div className="mr-4 flex">
      <a className="mr-6 flex items-center space-x-2 transition-colors hover:text-foreground/80" href="/">
        <div className="h-10 w-10 rounded-md bg-primary shadow-sm flex items-center justify-center">
          <Flower2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-foreground text-base">
            ShadcnUI React Template
          </span>
          <span className="text-xs text-muted-foreground">
            Modern • TypeScript • Zustand
          </span>
        </div>
      </a>
    </div>
  )
}

// Mobile app brand (simplified)
const MobileAppBrand = () => {
  return (
    <div className="mr-4 flex md:hidden">
      <a className="mr-6 flex items-center space-x-2 transition-colors hover:text-foreground/80" href="/">
        <div className="h-8 w-8 rounded-md bg-primary shadow-sm flex items-center justify-center">
          <Flower2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col">
        <span className="font-bold text-foreground">ShadcnUI React</span>
        <span className="text-xs text-muted-foreground">Template</span>
        </div>
      </a>
    </div>
  )
}

// Header actions (notifications + theme)
const HeaderActions = () => {
  return (
    <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
      <div className="w-full flex-1 md:w-auto md:flex-none">
        {/* Search or other content can go here */}
      </div>
      <nav className="flex items-center gap-1 sm:gap-2">
        <NotificationBadge />
        <CompactThemeSelector />
      </nav>
    </div>
  )
}

// Main header component
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-12 sm:h-14 max-w-screen-2xl items-center px-3 sm:px-4 md:px-6 lg:px-8 gap-2 sm:gap-4">
        {/* Desktop brand */}
        <div className="hidden sm:block flex-shrink-0">
          <AppBrand />
        </div>
        
        {/* Mobile brand */}
        <div className="block sm:hidden flex-shrink-0">
          <MobileAppBrand />
        </div>
        
        {/* Header actions */}
        <HeaderActions />
      </div>
    </header>
  )
}

// Alternative header with navigation (for future expansion)
export const HeaderWithNav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-muted backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
          {/* Brand */}
          <div className="hidden sm:block flex-shrink-0">
            <AppBrand />
          </div>
          <div className="block sm:hidden flex-shrink-0">
            <MobileAppBrand />
          </div>
          
          {/* Navigation (placeholder for future) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#demo" className="text-sm font-medium hover:text-primary transition-smooth">
              Demo
            </a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-smooth">
              Docs
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex-shrink-0">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  )
}

// Minimal header variant
export const MinimalHeader = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14 gap-2 sm:gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Flower2 size={18} className="text-primary sm:size-5" />
            <span className="font-semibold text-base sm:text-lg truncate">Shadcn/UI Template</span>
          </div>
          <div className="flex-shrink-0">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
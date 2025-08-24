import React from 'react'
import { Flower2 } from 'lucide-react'
import { NotificationBadge } from '../features/notification-display'
import { CompactThemeSelector } from '../features/theme-selector'

// App logo/brand component
const AppBrand = () => {
  return (
    <div className="mr-4 hidden md:flex">
      <a className="mr-6 flex items-center space-x-2 transition-colors hover:text-foreground/80" href="/">
        <div className="h-6 w-6 rounded-md bg-primary shadow-sm" />
        <span className="hidden font-bold text-foreground sm:inline-block">
          ShadcnUI Template
        </span>
      </a>
    </div>
  )
}

// Mobile app brand (simplified)
const MobileAppBrand = () => {
  return (
    <div className="mr-4 flex md:hidden">
      <a className="mr-6 flex items-center space-x-2 transition-colors hover:text-foreground/80" href="/">
        <div className="h-6 w-6 rounded-md bg-primary shadow-sm" />
        <span className="font-bold text-foreground">Template</span>
      </a>
    </div>
  )
}

// Header actions (notifications + theme)
const HeaderActions = () => {
  return (
    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
      <div className="w-full flex-1 md:w-auto md:flex-none">
        {/* Search or other content can go here */}
      </div>
      <nav className="flex items-center gap-2">
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
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
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
    </header>
  )
}

// Alternative header with navigation (for future expansion)
export const HeaderWithNav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-muted backdrop-blur-md">
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
    <header className="w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Flower2 size={20} className="text-primary" />
            <span className="font-semibold text-lg">Shadcn/UI Template</span>
          </div>
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

export default Header
import { Lightbulb, Menu, X, BrainCircuit } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '../../lib/utils'

// App logo/brand component
const AppBrand = () => {
  return (
    <motion.div 
      className="flex items-center cursor-pointer" 
      onClick={() => window.location.hash = '#/'}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex flex-col">
        <h1 className="text-lg font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          MyThought
        </h1>
        <p className="text-xs opacity-70 leading-tight">Development Studio</p>
      </div>
    </motion.div>
  )
}

// Mobile app brand (simplified)
const MobileAppBrand = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-content">
        <BrainCircuit size={18} className="text-primary-content" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          MyThought
        </h1>
        <p className="text-xs opacity-70 leading-tight">
          Development Studio
        </p>
      </div>
    </motion.div>
  )
}

// Header actions (empty now that theme selector is removed)
const HeaderActions = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Theme selector removed */}
    </div>
  )
}

// List item component for navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Main header component
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop brand */}
          <div className="hidden sm:block">
            <AppBrand />
          </div>
          
          {/* Mobile brand */}
          <div className="block sm:hidden">
            <MobileAppBrand />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="#/software-tech" title="Software and Technology">
                        Custom software solutions for your business needs
                      </ListItem>
                      <ListItem href="#/business-consultancy" title="Business Consultancy">
                        Expert advice to grow your business
                      </ListItem>
                      <ListItem href="#/design-creativity" title="Design and Creativity">
                        Creative design solutions for your brand
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    href="#/about-us"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    href="#/contact-us"
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    href="#/blog"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    href="#/ventures"
                  >
                    Ventures
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden btn btn-ghost btn-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Header actions */}
          <div className="hidden md:block">
            <HeaderActions />
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-base-300 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-3">
              {/* Mobile Services Dropdown */}
              <div className="collapse collapse-arrow">
                <input type="checkbox" className="min-h-0" /> 
                <div className="collapse-title text-sm font-medium hover:text-primary transition-colors px-2 py-1 min-h-0 flex items-center">
                  Services
                </div>
                <div className="collapse-content px-2 pt-0">
                  <div className="flex flex-col space-y-2 mt-2 ml-2">
                    <a href="#/software-tech" className="text-sm hover:text-primary transition-colors">
                      Software and Technology
                    </a>
                    <a href="#/business-consultancy" className="text-sm hover:text-primary transition-colors">
                      Business Consultancy
                    </a>
                    <a href="#/design-creativity" className="text-sm hover:text-primary transition-colors">
                      Design and Creativity
                    </a>
                  </div>
                </div>
              </div>
              
              <a href="#/about-us" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
                About Us
              </a>
              <a href="#/contact-us" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
                Contact Us
              </a>
              <a href="#/blog" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
                Blog
              </a>
              <a href="#/ventures" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">
                Ventures
              </a>
              <div className="pt-2 border-t border-base-200">
                <HeaderActions />
              </div>
            </nav>
          </div>
        )}
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
            <Lightbulb size={20} className="text-primary" />
            <span className="font-semibold text-lg">DaisyUI Template</span>
          </div>
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

export default Header
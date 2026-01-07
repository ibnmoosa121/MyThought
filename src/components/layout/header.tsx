import { 
  Lightbulb, 
  Menu, 
  X, 
  Code, 
  Briefcase, 
  Palette, 
  Landmark, 
  ChevronRight,
  ArrowRight,
  Users,
  Rocket
} from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { LogoIcon } from '../ui/logo-icon'
import { services } from '../../data/services'
import { useLocation } from 'react-router-dom'

// Service Icons Mapping
const serviceIcons = {
  software: Code,
  consultancy: Briefcase,
  talent: Users,
  design: Palette,
  ventures: Rocket,
  fintech: Landmark,
}

// Service Links Mapping
const serviceLinks = {
  software: '#/software',
  consultancy: '#/consultancy',
  talent: '#/talent',
  design: '#/design',
  ventures: '#/ventures',
  fintech: '#/fintech',
}

// App logo/brand component
const AppBrand = () => {
  const { pathname } = useLocation()
  
  const getSubtitle = () => {
    if (pathname.includes('software')) return 'Software'
    if (pathname.includes('consultancy')) return 'Consultancy'
    if (pathname.includes('talent')) return 'Talent'
    if (pathname.includes('design')) return 'Design'
    if (pathname.includes('ventures')) return 'Ventures'
    if (pathname.includes('fintech')) return 'FinTech'
    return 'Development Studio'
  }

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
        <p className="text-xs opacity-70 leading-tight">{getSubtitle()}</p>
      </div>
    </motion.div>
  )
}

// Mobile app brand (simplified)
const MobileAppBrand = () => {
  const { pathname } = useLocation()
  
  const getSubtitle = () => {
    if (pathname.includes('software')) return 'Software'
    if (pathname.includes('consultancy')) return 'Consultancy'
    if (pathname.includes('talent')) return 'Talent'
    if (pathname.includes('design')) return 'Design'
    if (pathname.includes('ventures')) return 'Ventures'
    if (pathname.includes('fintech')) return 'FinTech'
    return 'Development Studio'
  }

  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center justify-center w-10 h-10">
        <LogoIcon size={32} className="text-primary" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-base font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          MyThought
        </h1>
        <p className="text-xs opacity-70 leading-tight">
          {getSubtitle()}
        </p>
      </div>
    </motion.div>
  )
}

// Header actions
const HeaderActions = () => {
  return (
    <div className="flex items-center gap-2">
      <a 
        href="#/contact-us" 
        className="btn btn-primary btn-sm hidden lg:flex"
      >
        Get Started
      </a>
    </div>
  )
}

// Main header component
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
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
                  <NavigationMenuTrigger className="bg-transparent hover:bg-base-200 text-base font-medium">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[800px] gap-0 bg-base-100 p-0 overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
                      {/* Featured Side */}
                      <div className="w-1/3 bg-gradient-to-br from-primary/10 to-base-200 p-6 flex flex-col justify-between relative overflow-hidden group">
                         <div className="relative z-10">
                           <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                             Our Expertise <ArrowRight size={16} />
                           </h3>
                           <p className="text-sm text-base-content/70 mb-4">
                             Comprehensive solutions tailored to drive your business forward in the digital age.
                           </p>
                         </div>
                         
                         {/* Abstract Decoration */}
                         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
                         
                         <a 
                           href="#/contact-us"
                           className="relative z-10 text-xs font-semibold uppercase tracking-wider text-primary hover:underline mt-auto flex items-center gap-1"
                         >
                           Schedule a Consultation <ChevronRight size={14} />
                         </a>
                      </div>

                      {/* Grid Side */}
                      <ul className="w-2/3 grid grid-cols-2 gap-2 p-4 bg-base-100">
                        {Object.values(services).map((service) => {
                          const Icon = serviceIcons[service.key as keyof typeof serviceIcons] || Lightbulb
                          return (
                            <li key={service.key}>
                              <NavigationMenuLink asChild>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={serviceLinks[service.key as keyof typeof serviceLinks] || '#'}
                                  className="group flex gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-base-200 focus:bg-base-200"
                                >
                                  <div className={`flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary ${service.theme.hoverBg} group-hover:text-white transition-all duration-300 shrink-0 shadow-sm`}>
                                    <Icon size={20} />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className={`text-sm font-semibold text-base-content ${service.theme.hoverText} transition-colors flex items-center gap-1`}>
                                      {service.title}
                                    </div>
                                    <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1 group-hover:text-base-content/80">
                                      {service.subtitle}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-base-200 hover:text-primary focus:bg-base-200 focus:outline-none"
                    href="#/about-us"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-base-200 hover:text-primary focus:bg-base-200 focus:outline-none"
                    href="#/blog"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-base-200 hover:text-primary focus:bg-base-200 focus:outline-none"
                    href="#/contact-us"
                  >
                    Contact
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
          <div className="md:hidden py-4 border-t border-base-200 bg-base-100 animate-in slide-in-from-top duration-300 shadow-inner">
            <nav className="flex flex-col space-y-1">
              {/* Mobile Services Dropdown */}
              <div className="collapse collapse-arrow rounded-none">
                <input type="checkbox" className="min-h-0" />
                <div className="collapse-title text-sm font-medium hover:bg-base-200 transition-colors px-4 py-3 min-h-0 flex items-center">
                  Services
                </div>
                <div className="collapse-content px-0">
                  <div className="flex flex-col">
                    {Object.values(services).map((service) => {
                       const Icon = serviceIcons[service.key as keyof typeof serviceIcons] || Lightbulb
                       return (
                        <a 
                          key={service.key}
                          href={serviceLinks[service.key as keyof typeof serviceLinks] || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-base-200 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                        >
                          <Icon size={16} className="text-muted-foreground" />
                          <span>{service.title}</span>
                        </a>
                       )
                    })}
                  </div>
                </div>
              </div>

              <a href="#/about-us" className="text-sm font-medium hover:bg-base-200 hover:text-primary transition-colors px-4 py-3">
                About Us
              </a>
              <a href="#/blog" className="text-sm font-medium hover:bg-base-200 hover:text-primary transition-colors px-4 py-3">
                Blog
              </a>
              <a href="#/contact-us" className="text-sm font-medium hover:bg-base-200 hover:text-primary transition-colors px-4 py-3">
                Contact Us
              </a>
              <div className="p-4 mt-2">
                <a href="#/contact-us" className="btn btn-primary btn-block btn-sm">
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Minimal header variant
export const MinimalHeader = () => {
  return (
    <header className="w-full border-b border-base-300 bg-base-100 text-base-content">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Lightbulb size={20} className="text-primary" />
            <span className="font-semibold text-lg">MyThought</span>
          </div>
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}

export default Header

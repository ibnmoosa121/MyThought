import {
  Lightbulb,
  Code,
  Briefcase,
  Palette,
  Landmark,
  ChevronRight,
  ArrowRight,
  Users,
  Rocket,
  Brain,
  Ship
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { StebupWordmark } from '@/components/ui/stebup-logo'
import { services } from '../../data/services'
import { useLocation } from 'react-router-dom'
import { prefetchPage } from '../../lib/prefetch'
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton
} from "@/components/ui/resizable-navbar"

// Service Icons Mapping
const serviceIcons = {
  software: Code,
  consultancy: Briefcase,
  talent: Users,
  design: Palette,
  ventures: Rocket,
  fintech: Landmark,
  'ai-analytics': Brain,
  logistics: Ship,
}

// Service Links Mapping
const serviceLinks = {
  software: '#/software',
  consultancy: '#/consultancy',
  talent: '#/talent',
  design: '#/design',
  ventures: '#/ventures',
  fintech: '#/fintech',
  'ai-analytics': '#/ai-analytics',
  logistics: '#/logistics',
}

// App logo/brand component
const AppBrand = ({ className = "" }: { className?: string }) => {
  const { pathname } = useLocation()

  const currentService = Object.values(services).find(s => pathname.includes(s.key))

  const getSubtitle = () => {
    if (currentService) return currentService.title.split(' ')[0]
    return 'Digital Studio'
  }

  const getSubtitleColor = () => {
    return currentService ? currentService.theme.text : 'text-zinc-400'
  }

  // The designed stepped "E" takes the respective page's accent color
  const accentColor = currentService ? currentService.theme.plasmaColor : '#A1A1AA'

  // Sync the browser tab favicon's designed "E" to the active page color
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!link) return
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none"><rect width="128" height="128" rx="28" fill="#0B0B0E"/><g transform="translate(-85, 16) scale(0.82)"><path fill-rule="evenodd" clip-rule="evenodd" d="M148 28 H177 A3 3 0 0 1 180 31 V37 A3 3 0 0 1 177 40 H148 A3 3 0 0 1 145 37 V31 A3 3 0 0 1 148 28 Z M151 31.8 A2.2 2.2 0 1 0 151 36.2 A2.2 2.2 0 1 0 151 31.8 Z M136 54 H177 A3 3 0 0 1 180 57 V63 A3 3 0 0 1 177 66 H136 A3 3 0 0 1 133 63 V57 A3 3 0 0 1 136 54 Z M139 57.8 A2.2 2.2 0 1 0 139 62.2 A2.2 2.2 0 1 0 139 57.8 Z M124 80 H177 A3 3 0 0 1 180 83 V89 A3 3 0 0 1 177 92 H124 A3 3 0 0 1 121 89 V83 A3 3 0 0 1 124 80 Z M127 83.8 A2.2 2.2 0 1 0 127 88.2 A2.2 2.2 0 1 0 127 83.8 Z" fill="${accentColor}"/><path d="M127 80 V60 H133 M139 54 V34 H145" fill="none" stroke="${accentColor}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="127" cy="60" r="2.1" fill="${accentColor}"/><circle cx="139" cy="34" r="2.1" fill="${accentColor}"/><path d="M188 28 H215 C228.5 28 237 34 237 43.5 C237 50.5 232.5 55.8 224.5 58.8 C234 61.8 239 67.8 239 76 C239 85.8 229.5 92 215 92 H188 C186.9 92 186 91.1 186 90 V82 C186 80.9 186.9 80 188 80 H213.5 C220.5 80 224 77.5 224 73 C224 68.5 220.5 66 213.5 66 H188 C186.9 66 186 65.1 186 64 V56 C186 54.9 186.9 54 188 54 H212.5 C219 54 222.5 51.5 222.5 47 C222.5 42.8 219 40 212.5 40 H188 C186.9 40 186 39.1 186 38 V30 C186 28.9 186.9 28 188 28 Z" fill="#F4F4F6"/></g></svg>`
    link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`
  }, [accentColor])

  return (
    <motion.div
      className={`group flex flex-col items-start cursor-pointer ${className}`}
      onClick={() => window.location.hash = '#/'}
      whileHover={{ opacity: 0.92 }}
      transition={{ duration: 0.15 }}
    >
      <StebupWordmark
        accentColor={accentColor}
        primaryColor="#F4F4F6"
        className="h-[15px] w-[66px] sm:h-[16px] sm:w-[70px]"
      />
      <p className={`text-[8px] font-mono uppercase tracking-[0.2em] font-medium leading-none mt-1 transition-colors duration-300 ${getSubtitleColor()}`}>
        {getSubtitle()}
      </p>
    </motion.div>
  )
}


// Services Megamenu Content
const ServicesContent = () => {
  return (
    <div className="flex w-[800px] gap-0 bg-base-100 p-0 overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5">
      {/* Featured Side */}
      <div className="w-1/3 bg-gradient-to-br from-primary/10 to-base-200 p-6 flex flex-col justify-between relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
            Our Expertise <ArrowRight size={16} />
          </h3>
          <p className="text-sm text-white/70 mb-4">
            Comprehensive solutions tailored to drive your business forward in the digital age.
          </p>
        </div>

        {/* Abstract Decoration */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />

        <a
          href="#/contact"
          className="relative z-10 text-xs font-semibold uppercase tracking-wider text-white hover:underline mt-auto flex items-center gap-1"
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
                  onMouseEnter={() => prefetchPage(service.key)}
                  className="group flex gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-base-200 focus:bg-base-200"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary ${service.theme.hoverBg} group-hover:text-white transition-all duration-300 shrink-0 shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className={`text-sm font-semibold text-white transition-colors flex items-center gap-1`}>
                      {service.title}
                    </div>
                    <p className="line-clamp-1 text-xs leading-snug text-white/60 mt-1 group-hover:text-white/80">
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
  )
}

// Main header component
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsHeaderVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-40 w-full pointer-events-none"
        >
          <Navbar className="top-4 pointer-events-auto">
            {/* Desktop View */}
            <NavBody className="bg-base-100/80 backdrop-blur-md border border-base-content/10 items-center">
              {/* Left: Brand */}
              <div className="flex-1 flex items-center justify-start">
                <AppBrand />
              </div>

              {/* Center: Navigation Menu */}
              <div className="flex-none flex justify-center">
                <NavigationMenu delayDuration={0}>
                  <NavigationMenuList className="flex gap-2">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-base-content/10 font-bold text-white cursor-pointer">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ServicesContent />
                      </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="px-4 py-2 font-bold hover:bg-base-content/10 rounded-md transition-colors text-white"
                        href="#/about-us"
                        onMouseEnter={() => prefetchPage('about-us')}
                      >
                        About Us
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="px-4 py-2 font-bold hover:bg-base-content/10 rounded-md transition-colors text-white"
                        href="#/blog"
                        onMouseEnter={() => prefetchPage('blog')}
                      >
                        Blog
                      </NavigationMenuLink>
                    </NavigationMenuItem>


                  </NavigationMenuList >
                </NavigationMenu >
              </div >

              {/* Right: Actions */}
              < div className="flex-1 flex items-center justify-end" >
                <NavbarButton href="#/contact" variant="primary" className="rounded-full bg-white text-black hover:bg-white/90" onMouseEnter={() => prefetchPage('contact')}>
                  Get Started
                </NavbarButton>
              </div >
            </NavBody >

            {/* Mobile View */}
            < MobileNav className="bg-base-100/95 backdrop-blur-md border border-base-content/10" >
              <MobileNavHeader className="px-4 py-2">
                <AppBrand />
                <MobileNavToggle isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
              </MobileNavHeader>

              <MobileNavMenu isOpen={mobileMenuOpen}>
                <div className="flex flex-col w-full gap-2 p-4">
                  {/* Mobile Services Dropdown */}
                  <div className="collapse collapse-arrow bg-base-200/50 rounded-xl">
                    <input type="checkbox" />
                    <div className="collapse-title text-sm font-bold flex items-center text-white">
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
                              onMouseEnter={() => prefetchPage(service.key)}
                              className="flex items-center gap-3 px-6 py-3 text-sm hover:bg-base-200 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                            >
                              <Icon size={16} className="text-white/60" />
                              <span className="text-white">{service.title}</span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <a href="#/about-us" onMouseEnter={() => prefetchPage('about-us')} className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
                    About Us
                  </a>
                  <a href="#/blog" onMouseEnter={() => prefetchPage('blog')} className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
                    Blog
                  </a>

                  <a href="#/contact" onMouseEnter={() => prefetchPage('contact')} className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
                    Contact
                  </a>

                  <div className="mt-4">
                    <NavbarButton href="#/contact" onMouseEnter={() => prefetchPage('contact')} className="w-full rounded-xl bg-primary text-primary-content">
                      Get Started
                    </NavbarButton>
                  </div>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </motion.div>
      )}
    </AnimatePresence>
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
            <span className="font-black text-lg tracking-tight flex items-baseline"><span className="text-white">Steb</span><span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">up</span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

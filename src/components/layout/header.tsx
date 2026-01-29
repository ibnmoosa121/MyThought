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
  Brain
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
import { LogoIcon } from '@/components/ui/logo-icon'
import { services } from '../../data/services'
import { useLocation } from 'react-router-dom'
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
}

// App logo/brand component
const AppBrand = ({ className = "" }: { className?: string }) => {
  const { pathname } = useLocation()

  const getSubtitle = () => {
    if (pathname.includes('software')) return 'Software'
    if (pathname.includes('consultancy')) return 'Consultancy'
    if (pathname.includes('talent')) return 'Talent'
    if (pathname.includes('design')) return 'Design'
    if (pathname.includes('ventures')) return 'Ventures'
    if (pathname.includes('fintech')) return 'FinTech'
    if (pathname.includes('ai-analytics')) return 'AI & Analytics'
    return 'Development Studio'
  }

  return (
    <motion.div
      className={`flex items-center cursor-pointer gap-2 ${className}`}
      onClick={() => window.location.hash = '#/'}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <LogoIcon size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold leading-tight text-white drop-shadow-md">
          MyThought
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold leading-tight">
          {getSubtitle()}
        </p>
      </div>
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
          href="#/contact-us"
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

  return (
    <Navbar className="top-4">
      {/* Desktop View */}
      <NavBody className="bg-base-100/80 backdrop-blur-md border border-base-content/10 items-center">
        {/* Left: Brand */}
        <div className="flex-1 flex items-center justify-start">
          <AppBrand />
        </div>

        {/* Center: Navigation Menu */}
        <div className="flex-none flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-base-content/10 font-bold text-white">
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
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="px-4 py-2 font-bold hover:bg-base-content/10 rounded-md transition-colors text-white"
                  href="#/blog"
                >
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList >
          </NavigationMenu >
        </div >

        {/* Right: Actions */}
        < div className="flex-1 flex items-center justify-end" >
          <NavbarButton href="#/contact-us" variant="primary" className="rounded-full bg-white text-black hover:bg-white/90">
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

            <a href="#/about-us" className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
              About Us
            </a>
            <a href="#/blog" className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
              Blog
            </a>
            <a href="#/contact-us" className="px-4 py-3 text-sm font-bold text-white hover:bg-base-200 rounded-xl transition-colors">
              Contact
            </a>

            <div className="mt-4">
              <NavbarButton href="#/contact-us" className="w-full rounded-xl bg-primary text-primary-content">
                Get Started
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
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
        </div>
      </div>
    </header>
  )
}

export default Header

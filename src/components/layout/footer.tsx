import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '@/components/ui/logo-icon'
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'
import { services } from '../../data/services'
import { useLocation } from 'react-router-dom'

export const Footer: React.FC = () => {
  const { pathname } = useLocation()
  const currentService = Object.values(services).find(s => pathname.includes(s.key))
  const themeColor = currentService ? currentService.theme.plasmaColor : '#FFFFFF'

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <LogoIcon
                size={38}
                color={themeColor}
                className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(217,70,239,0.25)]"
              />
              <div className="flex items-baseline">
                <span
                  className="text-[22px] font-black tracking-tight leading-none transition-all duration-500 flex items-baseline"
                  style={{
                    textShadow: currentService
                      ? `0 0 18px ${currentService.theme.plasmaColor}55`
                      : '0 0 18px rgba(168, 85, 247, 0.25)'
                  }}
                >
                  <span className="bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent">
                    Steb
                  </span>
                  <span
                    className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500"
                    style={
                      currentService
                        ? {
                            backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${currentService.theme.plasmaColor} 100%)`
                          }
                        : undefined
                    }
                  >
                    up
                  </span>
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full ml-0.5 mb-0.5 transition-all duration-500 group-hover:scale-125"
                  style={{
                    backgroundColor: currentService ? currentService.theme.plasmaColor : '#06b6d4',
                    boxShadow: `0 0 8px ${currentService ? currentService.theme.plasmaColor : '#06b6d4'}`
                  }}
                />
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-xs">
              Pioneering the future of technology, business, and design. We turn visionary ideas into reality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/software" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Software & Technology
                </Link>
              </li>
              <li>
                <Link to="/consultancy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Consultancy & Strategy
                </Link>
              </li>
              <li>
                <Link to="/talent" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Talent & Staffing
                </Link>
              </li>
              <li>
                <Link to="/design" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Design & Creative
                </Link>
              </li>
              <li>
                <Link to="/ventures" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Ventures & Innovation
                </Link>
              </li>
              <li>
                <Link to="/fintech" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  FinTech & Banking
                </Link>
              </li>
              <li>
                <Link to="/ai-analytics" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  AI & Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/logistics" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Logistics & Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Jeddah Headquarters,<br />
                  Jeddah, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@stebup.com" className="hover:text-primary transition-colors text-white/80">
                  hello@stebup.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+966564008986" className="hover:text-primary transition-colors text-white/80">
                  +966 564008986
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Stebup. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors text-white/70">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors text-white/70">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

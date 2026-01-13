import React from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '@/components/ui/logo-icon'
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <LogoIcon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold tracking-tight">MyThought</span>
            </Link>
            <p className="text-base-content/70 leading-relaxed max-w-xs">
              Pioneering the future of technology, business, and design. We turn visionary ideas into reality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition-all duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/software" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Software & Tech
                </Link>
              </li>
              <li>
                <Link to="/consultancy" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Consultancy
                </Link>
              </li>
              <li>
                <Link to="/talent" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Talent & Staffing
                </Link>
              </li>
              <li>
                <Link to="/design" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Design & Creativity
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/fintech" className="text-base-content/70 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">
                  FinTech
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base-content/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Innovation Blvd,<br />
                  Tech City, TC 90210
                </span>
              </li>
              <li className="flex items-center gap-3 text-base-content/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@mythought.com" className="hover:text-primary transition-colors">
                  hello@mythought.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-base-content/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
          <p>© {currentYear} MyThought. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

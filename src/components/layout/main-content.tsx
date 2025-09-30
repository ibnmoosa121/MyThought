/**
 * Main Content Component
 * 
 * This file contains the main landing page sections including:
 * - Hero Section: Main banner with animated background
 * - Services Section: Showcases company services with interactive cards
 * - Case Studies Section: Displays project examples and success stories
 * 
 * The page uses Framer Motion for animations and Tailwind CSS with DaisyUI for styling.
 */

import React, { useState, useEffect, useRef } from 'react' // Core React imports
import type { ButtonHTMLAttributes } from 'react' // Type definitions for button props
import { motion, useScroll, useTransform, MotionValue } from "framer-motion" // Animation library for smooth transitions
import { TextGenerateEffect } from "../ui/text-generate-effect" // Text generation effect
import { SectionNavigation } from "../ui/section-navigation" // Section navigation
import { SectionContainer } from "../ui/section-container" // Section container
import { StickyScroll } from "../ui/sticky-scroll-reveal" // Sticky scroll reveal component
import {  
  // Lucide icon imports for various UI elements
  Rocket, 
  BrainCircuit, 
  BarChart3, 
  Globe, 
  Shield, 
  Code, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  MessageSquare
} from 'lucide-react'
import { cn } from '../../lib/utils' // Utility for conditional class names

// LiquidButton component based on shadcn.io's liquid button
/**
 * LiquidButton Component
 * 
 * A custom button with liquid animation effects on hover.
 * Supports multiple variants (default, outline, secondary) and sizes.
 * Uses Tailwind CSS for styling and custom animations.
 */
interface LiquidButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children: React.ReactNode
}

export const LiquidButton = ({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: LiquidButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const variants = {
    default: 'bg-primary text-white border-transparent relative overflow-hidden transition-all duration-500',
    outline: 'bg-transparent border border-primary text-primary hover:text-white relative overflow-hidden transition-all duration-500',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20 border-transparent relative overflow-hidden transition-all duration-500',
  }
  
  const sizes = {
    default: 'h-10 py-2 px-6',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-12 px-8 text-lg',
    icon: 'h-10 w-10',
  }
  
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {variant === 'outline' && (
        <span 
          className={cn(
            'absolute inset-0 bg-primary/90 translate-x-[-101%] transition-transform duration-500 ease-out',
            isHovered ? 'translate-x-0' : 'translate-x-[-101%]'
          )}
        />
      )}
      {variant === 'default' && (
        <span 
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-primary-focus to-primary translate-x-[-101%] transition-transform duration-500 ease-out',
            isHovered ? 'translate-x-0' : 'translate-x-[-101%]'
          )}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}

// Tech solutions icons with modern styling
// const TechSolutions = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
//   const solutions = [
//     { 
//       name: 'AI Integration', 
//       icon: <BrainCircuit size={28} />, 
//       description: 'Smart Solutions',
//       color: 'from-blue-500/20 to-indigo-500/20',
//       hoverColor: 'group-hover:text-blue-500',
//       details: 'Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantage'
//     },
//     { 
//       name: 'Data Analytics', 
//       icon: <BarChart3 size={28} />, 
//       description: 'Actionable Insights',
//       color: 'from-emerald-500/20 to-green-500/20',
//       hoverColor: 'group-hover:text-emerald-500',
//       details: 'Transform raw data into strategic business insights with advanced analytics and visualization'
//     },
//     { 
//       name: 'Cloud Services', 
//       icon: <Globe size={28} />, 
//       description: 'Global Reach',
//       color: 'from-sky-500/20 to-cyan-500/20',
//       hoverColor: 'group-hover:text-sky-500',
//       details: 'Scale your infrastructure seamlessly with enterprise-grade cloud solutions and global availability'
//     },
//     { 
//       name: 'Cybersecurity', 
//       icon: <Shield size={28} />, 
//       description: 'Enterprise Protection',
//       color: 'from-red-500/20 to-rose-500/20',
//       hoverColor: 'group-hover:text-red-500',
//       details: 'Protect your digital assets with multi-layered security protocols and continuous monitoring'
//     },
//     { 
//       name: 'Custom Software', 
//       icon: <Code size={28} />, 
//       description: 'Tailored Development',
//       color: 'from-violet-500/20 to-purple-500/20',
//       hoverColor: 'group-hover:text-violet-500',
//       details: 'Build bespoke software solutions designed specifically for your unique business challenges'
//     },
//     { 
//       name: 'Business Intelligence', 
//       icon: <LineChart size={28} />, 
//       description: 'Strategic Growth',
//       color: 'from-amber-500/20 to-yellow-500/20',
//       hoverColor: 'group-hover:text-amber-500',
//       details: 'Make data-driven decisions with comprehensive business intelligence tools and dashboards'
//     }
//   ]
  
//   return (
//     <div className="relative w-full mb-12">
//       {/* Scroll indicators */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
//         <div className="w-8 h-8 flex items-center justify-center rounded-full bg-base-300/80 backdrop-blur-sm cursor-pointer hover:bg-base-300 transition-colors">
//           <ChevronRight className="w-5 h-5 rotate-180" />
//         </div>
//       </div>
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
//         <div className="w-8 h-8 flex items-center justify-center rounded-full bg-base-300/80 backdrop-blur-sm cursor-pointer hover:bg-base-300 transition-colors">
//           <ChevronRight className="w-5 h-5" />
//         </div>
//       </div>
      
//       {/* Horizontal scroll container */}
//       <motion.div 
//         className="flex overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
//         style={{ scrollBehavior: 'smooth' }}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             className={`group relative flex-shrink-0 snap-center flex flex-col items-center gap-3 p-6 mx-3 rounded-xl bg-gradient-to-br ${solution.color} backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 cursor-pointer min-w-[260px] md:min-w-[280px] shadow-lg hover:shadow-xl perspective-1000 transform-gpu`}
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             whileHover={{ 
//               rotateX: 5,
//               rotateY: 10,
//               scale: 1.05
//             }}
//             onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//           >
//             <div className={`text-primary text-opacity-80 transition-all duration-300 ${solution.hoverColor} p-3 bg-white/10 rounded-full`}>
//               <motion.div
//                 animate={{ 
//                   rotate: activeIndex === index ? [0, 15, -15, 0] : 0,
//                   scale: activeIndex === index ? [1, 1.2, 1] : 1
//                 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {solution.icon}
//               </motion.div>
//             </div>
//             <span className="text-base font-semibold">{solution.name}</span>
//             <span className="text-sm opacity-80">{solution.description}</span>
            
//             {/* Expanded details */}
//             <motion.div 
//               className="w-full overflow-hidden"
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ 
//                 height: activeIndex === index ? 'auto' : 0,
//                 opacity: activeIndex === index ? 1 : 0
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-xs mt-2 text-center">{solution.details}</p>
//               <div className="flex justify-center mt-3">
//                 <button className="text-xs flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
//                   Learn more <ChevronRight size={14} />
//                 </button>
//               </div>
//             </motion.div>
            
//             {/* Decorative elements */}
//             <div className="absolute -inset-0.5 bg-gradient-to-br from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
//             <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-70"></div>
//           </motion.div>
//         ))}
//       </motion.div>
      
//       {/* Scroll indicators (dots) */}
//       <div className="flex justify-center gap-2 mt-4">
//         {solutions.map((_, index) => (
//           <div 
//             key={index} 
//             className={`w-2 h-2 rounded-full transition-colors ${index === 0 ? 'bg-primary' : 'bg-base-300'}`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }

// Animated counter for statistics
const AnimatedCounter = ({ value, label, prefix = '', suffix = '' }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0
    
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(value * progress)
      
      setCount(currentCount)
      
      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
    
    return () => clearInterval(counter)
  }, [value])
  
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  )
}

// Hero section with compelling value proposition
/**
 * HeroSection Component
 * 
 * The main landing section that appears at the top of the page.
 * Features:
 * - Animated gradient background with smooth motion
 * - Animated heading with word-by-word reveal
 * - Trust indicators showing company strengths
 * - Google Gemini effect for visual appeal
 */
const HeroSection = () => {
  // Ref for the section
  const ref = useRef<HTMLElement>(null);
  
  // Setup scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  
  return (
    <section 
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-0 -mt-16 w-full max-w-full"
    >
      {/* Hero section with only content up to the button */}
      <div className="h-screen flex items-center justify-center pt-24 pb-16 md:py-24 relative w-full">
        <motion.div 
          className="w-full max-w-full px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2 sm:px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Split text into words for individual animation */}
              {["Transform", "Your", "Business", "With", "Technology"].map((word, index) => (
                <motion.span
                  key={index}
                  className="mr-2 sm:mr-3 md:mr-4 inline-block text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all duration-300 font-sans"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    delay: 0.4 + (index * 0.2) // Stagger effect
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [-1, 1, -1, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <TextGenerateEffect 
              words="Leverage cutting-edge AI solutions and digital transformation to drive growth."
              className="text-lg sm:text-xl md:text-2xl opacity-60 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6"
              duration={0.8}
            />
            
            <motion.button
              className="relative overflow-hidden bg-transparent text-white font-medium py-3 px-8 rounded-full group hover:bg-primary/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Electric border effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 rounded-full border-2 border-transparent" 
                  style={{ 
                    background: "linear-gradient(to right, transparent, transparent), linear-gradient(to right, #4F46E5, #EC4899, #06B6D4, #4F46E5)",
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "padding-box, border-box",
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 w-full h-full"
                    animate={{ 
                      background: [
                        "linear-gradient(90deg, #4F46E5, #EC4899, #06B6D4, #4F46E5)",
                        "linear-gradient(180deg, #4F46E5, #EC4899, #06B6D4, #4F46E5)",
                        "linear-gradient(270deg, #4F46E5, #EC4899, #06B6D4, #4F46E5)",
                        "linear-gradient(360deg, #4F46E5, #EC4899, #06B6D4, #4F46E5)",
                        "linear-gradient(90deg, #4F46E5, #EC4899, #06B6D4, #4F46E5)"
                      ],
                      backgroundSize: ["200% 200%", "200% 200%", "200% 200%", "200% 200%", "200% 200%"],
                      backgroundPosition: ["0% 0%", "100% 0%", "100% 100%", "0% 100%", "0% 0%"]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 8,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
              
              {/* Button content */}
              <span className="relative z-10 px-1">Build Your Future With Us</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Service card component
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits,
  primaryColor = "bg-primary/10"
}: {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  primaryColor?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className={`card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all ${isHovered ? 'translate-y-[-8px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-lg ${primaryColor}`}>
            <Icon size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="opacity-80 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-sm btn-ghost text-primary">
            Learn more <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

// Services section
/**
 * ServicesSection Component
 * 
 * Displays the company's service offerings in an interactive grid layout.
 * Features:
 * - Service cards with hover effects
 * - Icons representing each service category
 * - Benefit lists for each service
 * - Learn more action buttons
 */
const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const services = [
    {
      icon: BrainCircuit,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain competitive insights.',
      benefits: [
        'Predictive analytics for business forecasting',
        'Automated customer service solutions',
        'Intelligent data processing and pattern recognition',
        'Custom AI models tailored to your industry'
      ],
      primaryColor: 'bg-primary/10'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Reimagine your business processes with comprehensive digital solutions that drive efficiency.',
      benefits: [
        'End-to-end business process digitization',
        'Legacy system modernization',
        'Cloud migration and infrastructure optimization',
        'Digital workflow automation and integration'
      ],
      primaryColor: 'bg-secondary/10'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business assets with enterprise-grade security solutions and continuous monitoring.',
      benefits: [
        'Threat detection and prevention systems',
        'Security audits and vulnerability assessments',
        'Compliance with industry regulations',
        'Employee security awareness training'
      ],
      primaryColor: 'bg-accent/10'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that address your unique business challenges and opportunities.',
      benefits: [
        'Enterprise application development',
        'Mobile app development for iOS and Android',
        'Web application development with modern frameworks',
        'API development and system integration'
      ],
      primaryColor: 'bg-primary/10'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business intelligence to drive strategic decision-making.',
      benefits: [
        'Big data processing and visualization',
        'Business intelligence dashboards',
        'Customer behavior analysis',
        'Performance metrics and KPI tracking'
      ],
      primaryColor: 'bg-secondary/10'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Stay ahead of the curve with strategic technology consulting and innovation roadmapping.',
      benefits: [
        'Technology trend analysis and forecasting',
        'Digital innovation workshops',
        'Competitive technology benchmarking',
        'R&D partnership and incubation programs'
      ],
      primaryColor: 'bg-accent/10'
    }
  ]
  
  // Transform services data for StickyScroll component
  const stickyScrollContent = services.map(service => ({
    title: service.title,
    description: service.description,
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full p-4">
        <div className="text-4xl mb-4">
          {React.createElement(service.icon)}
        </div>
        <div className="text-white text-center">
          <h3 className="font-bold mb-2">{service.title}</h3>
          <ul className="text-xs space-y-1">
            {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
              <li key={idx} className="flex items-center gap-1">
                <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }));

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto px-2">
            We offer a comprehensive suite of technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="w-full mt-16 sm:mt-20 md:mt-24">
        <StickyScroll 
          content={stickyScrollContent}
          contentClassName="h-64 sm:h-72 md:h-80 w-full"
        />
      </div>
    </section>
  )
}

// Case study component
const CaseStudy = ({
  company,
  industry,
  challenge,
  solution,
  results,
  image
}: {
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-lg overflow-hidden">
      <figure className="h-48 sm:h-56 lg:h-auto lg:w-2/5 bg-primary/5 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-5xl sm:text-6xl">{image}</div>
      </figure>
      <div className="card-body p-4 sm:p-6 lg:w-3/5">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="card-title text-lg sm:text-xl">{company}</h3>
          <div className="badge badge-outline">{industry}</div>
        </div>
        
        <div className="mb-2 sm:mb-3">
          <p className="font-medium text-xs sm:text-sm opacity-70">Challenge:</p>
          <p className="text-xs sm:text-sm">{challenge}</p>
        </div>
        
        <div className="mb-2 sm:mb-3">
          <p className="font-medium text-xs sm:text-sm opacity-70">Solution:</p>
          <p className="text-xs sm:text-sm">{solution}</p>
        </div>
        
        <div>
          <p className="font-medium text-xs sm:text-sm opacity-70 mb-1">Results:</p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-1 sm:gap-2 text-xs sm:text-sm">
                <CheckCircle2 size={12} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card-actions justify-end mt-3 sm:mt-4">
          <button className="btn btn-xs sm:btn-sm btn-primary">View Full Case Study</button>
        </div>
      </div>
    </div>
  )
}

// Case studies section
/**
 * CaseStudiesSection Component
 * 
 * Showcases successful client projects and case studies.
 * Features:
 * - Interactive case study cards with hover effects
 * - Results metrics for each project
 * - Industry categorization
 */
const CaseStudiesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const caseStudies = [
    {
      company: "Global Retail Corp",
      industry: "Retail",
      challenge: "Struggling with inventory management across 500+ locations and declining sales due to inefficient customer targeting.",
      solution: "Implemented AI-powered inventory forecasting system and customer behavior analytics platform.",
      results: [
        "42% reduction in stockouts",
        "28% increase in sales conversion",
        "Annual savings of $2.4M in operational costs"
      ],
      image: "🏪"
    },
    {
      company: "MediTech Solutions",
      industry: "Healthcare",
      challenge: "Legacy systems causing data silos, compliance risks, and inefficient patient care coordination.",
      solution: "Complete digital transformation with integrated healthcare platform and secure cloud migration.",
      results: [
        "99.9% system uptime",
        "65% faster patient data retrieval",
        "Full HIPAA compliance with zero breaches"
      ],
      image: "🏥"
    }
  ]
  
  return (
    <section id="case-studies" ref={ref} className="py-12 sm:py-16 md:py-20 bg-base-200/30 w-full max-w-full">
      <div className="w-full max-w-full px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Success Stories</h2>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto px-2">
            See how we've helped businesses across industries achieve remarkable results through technology
          </p>
        </div>
        
        <div className="flex flex-col gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CaseStudy {...study} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive demo section
const InteractiveDemo = () => {
  const ref = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const demoTabs = [
    { name: "AI Assistant", icon: <BrainCircuit size={18} /> },
    { name: "Data Visualization", icon: <BarChart3 size={18} /> },
    { name: "Security Scanner", icon: <Shield size={18} /> }
  ]
  
  const handleTabClick = (index: number) => {
    setIsAnimating(true)
    setActiveTab(index)
    
    // Simulate loading
    setTimeout(() => {
      setIsAnimating(false)
      
      // Notification removed
      console.log(`${demoTabs[index].name} Demo loaded successfully`)
    }, 800)
  }
  
  return (
    <section id="demo" ref={ref} className="py-12 sm:py-14 md:py-16 w-full max-w-full">
      <div className="text-center mb-6 sm:mb-8 px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Interactive Technology Demo</h2>
        <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto">
          Experience our solutions firsthand with these interactive demonstrations
        </p>
      </div>
      
      <div className="card bg-base-100 shadow-lg max-w-3xl mx-auto overflow-hidden">
        <div className="tabs tabs-boxed bg-base-200 rounded-none p-1 flex flex-wrap sm:flex-nowrap">
          {demoTabs.map((tab, index) => (
            <button
              key={index}
              className={`tab gap-1 sm:gap-2 text-xs sm:text-sm flex-1 ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              <span className="hidden xs:inline">{tab.name}</span>
            </button>
          ))}
        </div>
        
        <div className="p-6 min-h-[300px] flex items-center justify-center">
          {isAnimating ? (
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p>Loading demo...</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">
                {activeTab === 0 && "🤖"}
                {activeTab === 1 && "📊"}
                {activeTab === 2 && "🔒"}
              </div>
              <h3 className="text-xl font-bold mb-2">{demoTabs[activeTab].name}</h3>
              <p className="opacity-80 max-w-md mx-auto">
                {activeTab === 0 && "Experience our conversational AI assistant that can analyze data, answer questions, and automate tasks."}
                {activeTab === 1 && "Interactive data visualization tools that transform complex data into actionable insights."}
                {activeTab === 2 && "See how our security systems detect and prevent threats in real-time."}
              </p>
              <LiquidButton 
                variant="default"
                className="mt-6"
              >
                Try Full Demo
              </LiquidButton>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Call to action section
const CallToAction = () => {
  const ref = useRef<HTMLElement>(null);
  
  const handleContactRequest = () => {
    // Notification removed
    console.log('Contact request submitted')
  }
  
  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-primary/20 to-secondary/20 w-full max-w-full">
      <div className="w-full max-w-full px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] transform-gpu font-mono px-2">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg opacity-80 mb-6 sm:mb-8 max-w-xl mx-auto px-4 sm:px-6">
            Join hundreds of forward-thinking companies that are leveraging our technology solutions to drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiquidButton
              onClick={handleContactRequest}
              variant="default"
              size="lg"
              className="font-medium w-full sm:w-auto"
            >
              <MessageSquare size={20} className="hidden sm:inline mr-1" />
              Contact Us Today
            </LiquidButton>
            <LiquidButton 
              variant="outline"
              size="lg"
              className="font-medium w-full sm:w-auto"
            >
              <Rocket size={20} className="hidden sm:inline mr-1" />
              Schedule Demo
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main content component
export const MainContent = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAnimating, setIsAnimating] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'demo', label: 'Demo' },
    { id: 'contact', label: 'Contact' }
  ];
  
  // Handle wheel events for section navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Skip if animation is in progress
      if (isAnimating) return;
      
      const currentIndex = sections.findIndex(section => section.id === activeSection);
      let nextIndex = currentIndex;
      
      // Determine scroll direction
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // Scrolling down
        nextIndex = currentIndex + 1;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        nextIndex = currentIndex - 1;
      }
      
      // Only proceed if we're changing sections
      if (nextIndex !== currentIndex) {
        setIsAnimating(true);
        setActiveSection(sections[nextIndex].id);
        
        // Reset animation flag after transition completes
        setTimeout(() => {
          setIsAnimating(false);
        }, 800); // Match this with the fade transition duration
      }
    };
    
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('wheel', handleWheel);
    }
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeSection, isAnimating, sections]);
  
  const handleSectionChange = (sectionId: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSection(sectionId);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Match this with the fade transition duration
  };
  
  return (
    <main ref={mainRef} className="flex-1 w-full max-w-full relative h-screen overflow-hidden">
      <SectionNavigation 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        position="right"
      />
      
      {/* Removed SectionObserver as we're no longer using scroll detection */}
      
      <div className="w-full h-full relative">
        <SectionContainer id="hero" isActive={activeSection === 'hero'} className="overflow-hidden">
          <HeroSection />
        </SectionContainer>
        
        <SectionContainer id="services" isActive={activeSection === 'services'}>
          <ServicesSection />
        </SectionContainer>
        
        <SectionContainer id="case-studies" isActive={activeSection === 'case-studies'}>
          <CaseStudiesSection />
        </SectionContainer>
        
        <SectionContainer id="demo" isActive={activeSection === 'demo'}>
          <InteractiveDemo />
        </SectionContainer>
        
        <SectionContainer id="contact" isActive={activeSection === 'contact'}>
          <div className="w-full max-w-full px-4 sm:px-6">
            <CallToAction />
          </div>
        </SectionContainer>
      </div>
    </main>
  )
}

// Alternative layout with sections
export const SectionedMainContent = () => {
  return (
    <main className="flex-1">
      {/* Hero section with full width background */}
      <section className="bg-gradient-to-br from-base-200 to-base-300">
        <div className="container mx-auto px-4">
{HeroSection()}
        </div>
      </section>
      
      {/* Services section */}
      <section className="bg-base-100">
        <div className="container mx-auto px-4">
          <ServicesSection />
        </div>
      </section>
      
      {/* Case studies section */}
      <CaseStudiesSection />
      
      {/* Interactive demo section */}
      <section className="bg-base-100">
        <div className="container mx-auto px-4">
          <InteractiveDemo />
        </div>
      </section>
      
      {/* Call to action section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <CallToAction />
        </div>
      </section>
    </main>
  )
}

export default MainContent
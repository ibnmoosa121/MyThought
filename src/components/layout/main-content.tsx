import React, { useState, useEffect } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { 
  Zap, 
  Rocket, 
  BrainCircuit, 
  BarChart3, 
  Globe, 
  Shield, 
  Code, 
  LineChart, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  MessageSquare
} from 'lucide-react'
import { useAppStore } from '../../stores/app-store'
import { cn } from '../../lib/utils'

// LiquidButton component based on shadcn.io's liquid button
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
const TechSolutions = () => {
  const solutions = [
    { name: 'AI Integration', icon: <BrainCircuit size={28} />, description: 'Smart Solutions' },
    { name: 'Data Analytics', icon: <BarChart3 size={28} />, description: 'Actionable Insights' },
    { name: 'Cloud Services', icon: <Globe size={28} />, description: 'Global Reach' },
    { name: 'Cybersecurity', icon: <Shield size={28} />, description: 'Enterprise Protection' },
    { name: 'Custom Software', icon: <Code size={28} />, description: 'Tailored Development' },
    { name: 'Business Intelligence', icon: <LineChart size={28} />, description: 'Strategic Growth' }
  ]
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-all hover:scale-105 cursor-pointer min-w-[120px] shadow-sm"
        >
          <div className="text-primary">{solution.icon}</div>
          <span className="text-sm font-medium">{solution.name}</span>
          <span className="text-xs opacity-70">{solution.description}</span>
        </div>
      ))}
    </div>
  )
}

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
      <div className="text-sm opacity-80">{label}</div>
    </div>
  )
}

// Hero section with compelling value proposition
const HeroSection = () => {
  const { addNotification } = useAppStore()
  
  const handleConsultation = () => {
    addNotification({
      type: 'success',
      title: 'Request Received!',
      message: 'Our team will contact you shortly for a free consultation',
      duration: 5000
    })
  }
  
  const handleDemoRequest = () => {
    addNotification({
      type: 'info',
      title: 'Demo Request',
      message: 'Thank you for your interest! Demo access details will be sent to your email',
      duration: 5000
    })
  }
  
  return (
    <section className="py-12 md:py-20">
      {/* Main heading with gradient */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
            Transform Your Business With Technology
          </h1>
          
          <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
            Leverage cutting-edge AI solutions and digital transformation to drive growth, 
            efficiency, and competitive advantage in today's rapidly evolving market.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <LiquidButton
              onClick={handleConsultation}
              variant="default"
              size="lg"
              className="font-medium"
            >
              <MessageSquare size={20} />
              Free Consultation
            </LiquidButton>
            <LiquidButton 
              variant="outline"
              size="lg"
              className="font-medium"
              onClick={handleDemoRequest}
            >
              <Rocket size={20} />
              Request Demo
            </LiquidButton>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">Enterprise Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-primary" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Hero image/illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-base-100 flex items-center justify-center">
              <div className="text-8xl">🚀</div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-12 left-0 w-16 h-16 bg-secondary/30 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Tech solutions showcase */}
      <TechSolutions />
      
      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 my-8 border-y border-base-300">
        <AnimatedCounter value={500} label="Clients Worldwide" suffix="+" />
        <AnimatedCounter value={98} label="Client Retention" suffix="%" />
        <AnimatedCounter value={150} label="Tech Experts" suffix="+" />
        <AnimatedCounter value={10} label="Years Experience" suffix="+" />
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
const ServicesSection = () => {
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
  
  return (
    <section className="py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Solutions</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Comprehensive technology services designed to transform your business operations and drive sustainable growth
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
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
      <figure className="lg:w-2/5 bg-primary/5 p-6 flex items-center justify-center">
        <div className="text-6xl">{image}</div>
      </figure>
      <div className="card-body lg:w-3/5">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="card-title text-xl">{company}</h3>
          <div className="badge badge-outline">{industry}</div>
        </div>
        
        <div className="mb-3">
          <p className="font-medium text-sm opacity-70">Challenge:</p>
          <p className="text-sm">{challenge}</p>
        </div>
        
        <div className="mb-3">
          <p className="font-medium text-sm opacity-70">Solution:</p>
          <p className="text-sm">{solution}</p>
        </div>
        
        <div>
          <p className="font-medium text-sm opacity-70 mb-1">Results:</p>
          <ul className="space-y-1">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={14} className="text-primary mt-1 flex-shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-primary">View Full Case Study</button>
        </div>
      </div>
    </div>
  )
}

// Case studies section
const CaseStudiesSection = () => {
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
    <section className="py-12 md:py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            See how we've helped businesses across industries achieve remarkable results through technology
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Interactive demo section
const InteractiveDemo = () => {
  const { addNotification } = useAppStore()
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
      
      // Show notification based on selected demo
      addNotification({
        type: 'info',
        title: `${demoTabs[index].name} Demo`,
        message: `Interactive ${demoTabs[index].name.toLowerCase()} demo loaded successfully`,
        duration: 3000
      })
    }, 800)
  }
  
  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Interactive Technology Demo</h2>
        <p className="opacity-80 max-w-xl mx-auto">
          Experience our solutions firsthand with these interactive demonstrations
        </p>
      </div>
      
      <div className="card bg-base-100 shadow-lg max-w-3xl mx-auto overflow-hidden">
        <div className="tabs tabs-boxed bg-base-200 rounded-none p-1">
          {demoTabs.map((tab, index) => (
            <button
              key={index}
              className={`tab gap-2 ${activeTab === index ? 'tab-active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon}
              {tab.name}
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
  const { addNotification } = useAppStore()
  
  const handleContactRequest = () => {
    addNotification({
      type: 'success',
      title: 'Message Received',
      message: 'Thank you for reaching out! Our team will contact you shortly.',
      duration: 4000
    })
  }
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Join hundreds of forward-thinking companies that are leveraging our technology solutions to drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LiquidButton
              onClick={handleContactRequest}
              variant="default"
              size="lg"
              className="font-medium"
            >
              <MessageSquare size={20} />
              Contact Us Today
            </LiquidButton>
            <LiquidButton 
              variant="outline"
              size="lg"
              className="font-medium"
            >
              <Rocket size={20} />
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
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4">
        <HeroSection />
        <ServicesSection />
        <InteractiveDemo />
      </div>
      <CaseStudiesSection />
      <div className="container mx-auto px-4">
        <CallToAction />
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
          <HeroSection />
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
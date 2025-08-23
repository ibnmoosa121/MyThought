import React from 'react'
import { Zap, Palette, Shield, Rocket, Heart, Sparkles } from 'lucide-react'
import { InteractiveCounter } from '../features/interactive-counter'
import { useAppStore } from '../../stores/app-store'

// Technology icons with emojis
const TechStack = () => {
  const technologies = [
    { name: 'React', emoji: '⚛️', description: 'React 19' },
    { name: 'TypeScript', emoji: '🔷', description: 'Type Safety' },
    { name: 'Vite', emoji: '⚡', description: 'Fast Build' },
    { name: 'DaisyUI', emoji: '🌼', description: 'UI Components' },
    { name: 'Tailwind', emoji: '🎨', description: 'Utility CSS' },
    { name: 'Zustand', emoji: '🐻', description: 'State Management' }
  ]
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1 p-3 rounded-lg bg-base-200 hover:bg-base-300 transition-colors min-w-[80px]"
        >
          <span className="text-2xl">{tech.emoji}</span>
          <span className="text-xs font-medium">{tech.name}</span>
          <span className="text-xs opacity-60">{tech.description}</span>
        </div>
      ))}
    </div>
  )
}

// Hero section
const HeroSection = () => {
  const { addNotification } = useAppStore()
  
  const handleGetStarted = () => {
    addNotification({
      type: 'success',
      title: 'Welcome!',
      message: 'Ready to build amazing React applications',
      duration: 3000
    })
  }
  
  const handleTestNotifications = () => {
    // Add multiple notifications to test the system
    addNotification({
      type: 'info',
      title: 'Info Notification',
      message: 'This is an informational message',
      duration: 4000
    })
    
    setTimeout(() => {
      addNotification({
        type: 'warning',
        title: 'Warning',
        message: 'This is a warning message',
        duration: 4000
      })
    }, 500)
    
    setTimeout(() => {
      addNotification({
        type: 'error',
        title: 'Error',
        message: 'This is an error message',
        duration: 4000
      })
    }, 1000)
  }
  
  return (
    <section className="text-center py-12 md:py-20">
      {/* Tech stack */}
      <TechStack />
      
      {/* Main heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        DaisyUI React Template
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed">
        A modern React template with DaisyUI, TypeScript, and Zustand.
        Everything you need to build beautiful, responsive applications.
      </p>
      
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          onClick={handleGetStarted}
          className="btn btn-primary btn-lg gap-2"
        >
          <Rocket size={20} />
          Get Started
        </button>
        <button 
          className="btn btn-secondary btn-lg gap-2"
          onClick={handleTestNotifications}
        >
          <Sparkles size={20} />
          Test Notifications
        </button>
        <button className="btn btn-outline btn-lg gap-2">
          <Heart size={20} />
          View on GitHub
        </button>
      </div>
      
      {/* Interactive counter showcase */}
      <div className="mt-12">
        <InteractiveCounter />
      </div>
    </section>
  )
}

// Feature card component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  highlights 
}: {
  icon: React.ElementType
  title: string
  description: string
  highlights: string[]
}) => {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-shadow">
      <div className="card-body p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon size={24} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="opacity-80 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Features section
const FeaturesSection = () => {
  const features = [
    {
      icon: Palette,
      title: 'Dynamic Theming',
      description: 'Switch between 30+ beautiful DaisyUI themes with localStorage persistence.',
      highlights: [
        'Light and dark theme categories',
        'Real-time theme switching',
        'Persistent user preferences',
        'Semantic color system'
      ]
    },
    {
      icon: Zap,
      title: 'Smart Notifications',
      description: 'Toast notifications with auto-removal, positioning, and state management.',
      highlights: [
        'Multiple notification types',
        'Auto-removal with custom duration',
        'Responsive positioning',
        'Queue management'
      ]
    },
    {
      icon: Shield,
      title: 'TypeScript Ready',
      description: 'Fully typed components with strict TypeScript configuration.',
      highlights: [
        'Strict type checking',
        'IntelliSense support',
        'Type-safe state management',
        'Better developer experience'
      ]
    },
    {
      icon: Rocket,
      title: 'Zustand State',
      description: 'Lightweight state management with persistence and devtools.',
      highlights: [
        'Minimal boilerplate',
        'Built-in persistence',
        'DevTools integration',
        'TypeScript support'
      ]
    },
    {
      icon: Zap,
      title: 'Vite Powered',
      description: 'Lightning-fast development with hot module replacement.',
      highlights: [
        'Instant server start',
        'Hot module replacement',
        'Optimized builds',
        'Modern ES modules'
      ]
    },
    {
      icon: Sparkles,
      title: 'Best Practices',
      description: 'Modern React patterns, hooks, and component architecture.',
      highlights: [
        'Component composition',
        'Custom hooks',
        'Responsive design',
        'Accessibility features'
      ]
    }
  ]
  
  return (
    <section className="py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Everything you need to build modern React applications with style and performance
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
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
        <FeaturesSection />
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
      
      {/* Features section */}
      <section className="bg-base-100">
        <div className="container mx-auto px-4">
          <FeaturesSection />
        </div>
      </section>
    </main>
  )
}

export default MainContent
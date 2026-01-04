import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Building2, ShoppingBag, HeartPulse, Home, Truck, GraduationCap, ArrowRight, MousePointer2 } from 'lucide-react'
import { cn } from '../../../lib/utils'

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const industries = [
  {
    id: 'fintech',
    title: 'Fintech & Banking',
    subtitle: 'The Future of Finance',
    desc: 'Empowering financial institutions with secure, high-frequency trading platforms and blockchain-enabled infrastructure that processes millions of transactions with zero latency.',
    stats: [
      { label: 'Efficiency', value: '+40%' },
      { label: 'Security', value: '100%' }
    ],
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 'retail',
    title: 'E-Commerce & Retail',
    subtitle: 'Omnichannel Excellence',
    desc: 'Creating unified shopping experiences that merge physical and digital worlds. Our AI-driven personalization engines increase conversion rates and customer loyalty.',
    stats: [
      { label: 'Conversion', value: '3x' },
      { label: 'Retention', value: '+25%' }
    ],
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Digital Care Revolution',
    desc: 'Transforming patient care with telemedicine platforms and AI-assisted diagnostics. We ensure data interoperability while maintaining the highest standards of HIPAA compliance.',
    stats: [
      { label: 'Access', value: '24/7' },
      { label: 'Accuracy', value: '99.9%' }
    ],
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    subtitle: 'Virtual & Smart Living',
    desc: 'Revolutionizing property management with immersive VR tours and IoT-enabled smart building systems that optimize energy consumption and tenant experience.',
    stats: [
      { label: 'Sales Speed', value: '+50%' },
      { label: 'Energy', value: '-30%' }
    ],
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    subtitle: 'Intelligent Supply Chain',
    desc: 'Optimizing global fleets with real-time tracking and predictive maintenance. Our algorithms reduce fuel consumption and ensure on-time delivery across complex networks.',
    stats: [
      { label: 'Costs', value: '-20%' },
      { label: 'On-Time', value: '98%' }
    ],
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Global Learning Access',
    desc: 'Breaking down barriers with scalable learning management systems and virtual classrooms that connect students and educators worldwide.',
    stats: [
      { label: 'Reach', value: 'Global' },
      { label: 'Engagement', value: '+60%' }
    ],
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop'
  }
]

const ItCompanySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [progress, setProgress] = useState(0)

  // Configuration for scroll behavior
  const SCROLL_DURATION_PER_SLIDE = 1000 
  const totalScrollDistance = industries.length * SCROLL_DURATION_PER_SLIDE

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const totalSlides = industries.length
      
      // Continuous background movement for "alive" feel
      gsap.to('.bg-layer', {
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Main ScrollTrigger
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: `+=${totalScrollDistance}`, 
        pin: true,
        scrub: 1, 
        onUpdate: (self) => {
          setProgress(self.progress)
          
          const segmentSize = 1 / totalSlides
          const idx = Math.min(
            Math.floor(self.progress / segmentSize),
            totalSlides - 1
          )
          setActiveIdx(idx)
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [totalScrollDistance])

  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return
    const trigger = ScrollTrigger.getAll().find(st => st.trigger === containerRef.current)
    if (trigger) {
      const start = trigger.start
      const end = trigger.end
      const segmentSize = (end - start) / industries.length
      const targetScroll = start + (segmentSize * index) + (segmentSize * 0.1) 
      
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 1.5,
        ease: 'power3.inOut'
      })
    }
  }

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Dynamic Background Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 bg-layer">
        {industries.map((item, idx) => (
          <div
            key={`bg-${item.id}`}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out",
              idx === activeIdx ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
            )}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          </div>
        ))}
      </div>

      {/* Content Layer - Centered Storytelling */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center items-center">
          
          <div className="w-full max-w-5xl relative min-h-[60vh] flex items-center justify-center">
            {industries.map((item, idx) => (
               <div 
                 key={`text-${item.id}`}
                 className={cn(
                   "transition-all duration-1000 ease-out absolute inset-0 flex flex-col items-center justify-center text-center",
                   idx === activeIdx 
                     ? "opacity-100 translate-y-0 scale-100 pointer-events-auto delay-200" 
                     : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                 )}
               >
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <item.icon className="w-5 h-5 text-primary" />
                   <span className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</span>
                 </div>

                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl">
                   {item.subtitle}
                 </h2>

                 <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-12 drop-shadow-lg">
                   {item.desc}
                 </p>

                 <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-12">
                   {item.stats.map((stat, i) => (
                     <div key={i} className="flex flex-col items-center p-4 min-w-[120px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</span>
                       <span className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-4">
                   <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-primary/50">
                     Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </a>
                 </div>
               </div>
            ))}
          </div>

        </div>
      </div>

      {/* Progress Indicators (Bottom Center) */}
      <div className="absolute bottom-12 left-0 w-full z-50 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {industries.map((item, idx) => (
            <button
              key={`dot-${item.id}`}
              onClick={() => scrollToSlide(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                idx === activeIdx ? "w-12 bg-primary" : "w-2 bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mt-2">
           <MousePointer2 className="w-3 h-3 animate-bounce" />
           <span>Scroll to explore</span>
        </div>
      </div>

      {/* Mobile Progress Bar (Top) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 lg:hidden z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((activeIdx + 1) / industries.length) * 100}%` }}
        />
      </div>
    </section>
  )
}

export default ItCompanySection

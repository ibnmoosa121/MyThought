import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../../../data/services'
import { cn } from '../../../lib/utils'
import { Banknote, Briefcase, ArrowRight, TrendingUp, MapPin, CheckCircle2, Code2, Rocket, Palette } from 'lucide-react'

// Register plugin once
gsap.registerPlugin(ScrollTrigger)

const iconForKey = (key: string) => {
  switch (key) {
    case 'softwareTech':
      return <Code2 className="w-5 h-5" />
    case 'businessConsultancy':
      return <Briefcase className="w-5 h-5" />
    case 'fintech':
      return <Banknote className="w-5 h-5" />
    case 'designCreative':
      return <Palette className="w-5 h-5" />
    case 'ventures':
      return <Rocket className="w-5 h-5" />
    default:
      return null
  }
}

const PortfolioShowcase: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  
  const slides = useMemo(() => [
    services.softwareTech,
    services.businessConsultancy,
    services.fintech,
    services.designCreative,
    services.ventures,
  ], [])

  useLayoutEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const slideElements = gsap.utils.toArray('.portfolio-slide') as HTMLElement[]
      const bgElements = gsap.utils.toArray('.portfolio-bg') as HTMLElement[]
      const totalSlides = slides.length
      
      // Constants for timing
      const HOLD_DURATION = 1
      const TRANSITION_DURATION = 1
      const TOTAL_DURATION = (totalSlides * HOLD_DURATION) + ((totalSlides - 1) * TRANSITION_DURATION)

      // Initial states
      gsap.set(slideElements, { autoAlpha: 0, y: 50, scale: 0.95, zIndex: 0 })
      gsap.set(bgElements, { opacity: 0, scale: 1.1 })
      
      // Set first slide active initially
      gsap.set(slideElements[0], { autoAlpha: 1, y: 0, scale: 1, zIndex: 1 })
      gsap.set(bgElements[0], { opacity: 0.4, scale: 1 })

      // Create a master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: `+=${totalSlides * 100}vh`, // 100vh per slide scrub
          pin: true,
          scrub: 1, // Smooth scrubbing
          onUpdate: (self) => {
            // Calculate active index based on timeline structure
            // Total timeline duration is TOTAL_DURATION (relative units)
            // Current time = self.progress * TOTAL_DURATION
            //
            // Structure:
            // [Hold 0: 0-1] [Trans 0->1: 1-2] [Hold 1: 2-3] [Trans 1->2: 3-4] ...
            //
            // Index switch points should be in middle of transition:
            // Trans 0->1 midpoint = 1.5
            // Trans 1->2 midpoint = 3.5
            // ...
            // Formula: Math.floor((t + 0.5) / 2)
            
            const t = self.progress * TOTAL_DURATION
            const idx = Math.min(Math.floor((t + 0.5) / 2), totalSlides - 1)
            setActiveIdx(idx)
          }
        }
      })

      // Build the timeline sequentially
      slides.forEach((_, i) => {
        // Hold current slide
        tl.to({}, { duration: HOLD_DURATION })
        
        // If not the last slide, transition to next
        if (i < totalSlides - 1) {
          const nextI = i + 1
          
          // Next slide enter
          tl.to(slideElements[nextI], {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            zIndex: 1,
            duration: TRANSITION_DURATION,
            ease: 'power2.inOut'
          }, ">") // Start after hold
          
          // Current slide exit
          tl.to(slideElements[i], {
            autoAlpha: 0,
            y: -50,
            scale: 0.95,
            zIndex: 0,
            duration: TRANSITION_DURATION,
            ease: 'power2.inOut'
          }, "<") // Start with next slide enter
          
          // Background transition
          tl.to(bgElements[nextI], {
            opacity: 0.4,
            scale: 1,
            duration: TRANSITION_DURATION,
            ease: 'power2.inOut'
          }, "<")
          
          tl.to(bgElements[i], {
            opacity: 0,
            scale: 1.1,
            duration: TRANSITION_DURATION,
            ease: 'power2.inOut'
          }, "<")
        }
      })

    }, wrapperRef)

    return () => ctx.revert()
  }, [slides])

  return (
    <section id="portfolio" className="relative bg-black text-white overflow-hidden">
      <div ref={wrapperRef} className="relative h-screen w-full">
        
        {/* Backgrounds Container */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide) => (
            <div
              key={`bg-${slide.key}`}
              className="portfolio-bg absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
               <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>
          ))}
        </div>

        {/* Navigation Tabs - Visual only now, mapped to scroll progress */}
        <div className="absolute top-8 left-0 right-0 z-50 flex justify-center px-4">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            {slides.map((slide, i) => (
              <div
                key={slide.key}
                className={cn(
                  'relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-default',
                  i === activeIdx ? 'text-black bg-white shadow-lg' : 'text-white/70'
                )}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {iconForKey(slide.key)}
                  {slide.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full">
          {slides.map((slide) => (
            <div 
              key={slide.key}
              className="portfolio-slide absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 xl:px-32 w-full h-full"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center max-w-[1920px] mx-auto w-full">
                {/* Left Column: Text Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                      {slide.title}
                    </h2>
                    <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {slide.bullets.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-lg text-white/90 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a 
                      href="#contact" 
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]"
                    >
                      {slide.cta}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Card */}
                <div className="relative hidden lg:block">
                  <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-white/5">
                          {iconForKey(slide.key)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Performance Metrics</h3>
                          <p className="text-sm text-white/50">Real-time analysis</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                          <MapPin size={18} />
                          <span className="text-sm font-medium text-white/60">Focus Region</span>
                        </div>
                        <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">
                          {slide.key === 'businessConsultancy' ? 'MENA Region' : 'Global'}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                        <div className="flex items-center gap-2 mb-2 text-success">
                          <TrendingUp size={18} />
                          <span className="text-sm font-medium text-white/60">Growth Rate</span>
                        </div>
                        <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform origin-left">
                          +127%
                        </div>
                      </div>

                      <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent border border-white/5">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm text-white/60 mb-1">Active Projects</p>
                            <p className="text-4xl font-bold text-white">24</p>
                          </div>
                          <div className="h-10 flex items-end gap-1">
                            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                              <div
                                key={i}
                                className="w-2 bg-primary/50 rounded-t-sm"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10 mix-blend-screen" />
                  <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-50">
           <div 
             className="h-full bg-primary transition-all duration-100 ease-out"
             style={{ width: `${((activeIdx + 1) / slides.length) * 100}%` }}
           />
        </div>
      </div>
    </section>
  )
}

export default PortfolioShowcase

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Layers } from 'lucide-react'

// Register plugin
gsap.registerPlugin(ScrollTrigger)

const CtaSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(bgRef.current, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // Content reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      })

      tl.from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })

      // Continuous particle/glow animation
      gsap.to('.cta-glow', {
        scale: 1.2,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 -top-[30%] h-[160%] w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 blur-sm mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        {/* Animated Glow Orbs */}
        <div className="cta-glow absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="cta-glow absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div ref={contentRef} className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">Innovate With Us</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            Let's Shape the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              Future Together
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with our cutting-edge technology and strategic expertise. The future isn't just coming—it's being built right now.
          </p>

          <div ref={buttonsRef} className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-primary/50"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-0" />
            </a>
            
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Layers className="w-5 h-5" />
              <span>View Our Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

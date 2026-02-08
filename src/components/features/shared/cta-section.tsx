import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Layers } from 'lucide-react'
import { ScrollVelocity } from '../../ui/scroll-velocity'

// Register plugin
gsap.registerPlugin(ScrollTrigger)

const CtaSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  // Create an array for neural dots animation
  const dots = Array.from({ length: 20 })

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {

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
    <section ref={containerRef} className="relative py-40 md:py-60 overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Futuristic AI-Themed Grid Overlay */}
        <div className="absolute inset-0 design-grid opacity-[0.08] z-10" />

        {/* Global Gradient Mesh Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.15),transparent_70%)]" />

        {/* Standardized Immersive Branding Glows */}
        <div className="theme-glow absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-white/5" />
        <div className="theme-glow absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-white/5 delay-700" />

        {/* Neural Network / Data Nodes Animation */}
        <div className="absolute inset-0 z-10">
          {dots.map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Vertical Scanning Laser Line */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
            height: '100px',
            width: '100%',
            top: '-10%',
            animation: 'scan 10s linear infinite'
          }}
        />

        {/* Dark Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div ref={contentRef} className="max-w-6xl mx-auto space-y-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium tracking-wider uppercase text-white">Innovate With Us</span>
          </div>

          <div className="space-y-0 py-16 -mx-[10vw] w-[120vw]">
            <ScrollVelocity
              text="Let's Shape the Future Together •"
              velocity={-0.4}
              className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
            <ScrollVelocity
              text="Innovation • AI Systems • Scalability •"
              velocity={0.4}
              className="text-primary/50"
            />
          </div>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with our cutting-edge technology and strategic expertise. The future isn't just coming—it's being built right now.
          </p>

          <div ref={buttonsRef} className="pt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="#/contact-us"
              className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-black text-xl hover:bg-white hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />

              {/* Outer Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10 scale-125" />
            </a>

            <a
              href="#/portfolio"
              className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-bold text-xl hover:bg-white hover:text-black transition-all duration-500 hover:scale-105"
            >
              <Layers className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
              <span>Explore Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

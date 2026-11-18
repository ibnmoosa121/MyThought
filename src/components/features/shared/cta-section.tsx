import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollVelocity } from '../../ui/scroll-velocity'

interface CtaSectionProps {
  from?: string;
}

// Register plugin
gsap.registerPlugin(ScrollTrigger)

const CtaSection: React.FC<CtaSectionProps> = ({ from = 'default' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Content reveal animation
      gsap.from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 md:py-36 overflow-hidden bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <div className="absolute inset-0 design-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-2">
            <span>ENGAGEMENT</span>
            <span className="text-zinc-600">//</span>
            <span>REGIONAL PARTNERSHIPS</span>
          </div>

          <div className="space-y-2 py-8 -mx-[5vw] w-[110vw] overflow-hidden">
            <ScrollVelocity
              text="Engineering Digital Advantage •"
              velocity={-0.3}
              className="text-white text-3xl md:text-5xl font-semibold tracking-tight"
            />
            <ScrollVelocity
              text="Software Platforms • Data Infrastructure • GCC Operations •"
              velocity={0.3}
              className="text-zinc-500 text-2xl md:text-4xl font-normal tracking-tight"
            />
          </div>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Partner with Stebup to architect, engineer, and scale custom digital operations across Saudi Arabia and the broader Gulf.
          </p>

          <div ref={buttonsRef} className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              state={{ from }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors duration-150"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 bg-white/5 text-zinc-300 font-medium text-sm hover:bg-white/10 hover:text-white transition-colors duration-150"
            >
              <Layers className="w-4 h-4" />
              <span>View Client Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

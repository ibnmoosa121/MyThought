import React, { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../../../data/services'
import { cn } from '../../../lib/utils'
import { Banknote, Globe, Megaphone, Briefcase } from 'lucide-react'

// Register plugin once
gsap.registerPlugin(ScrollTrigger)

const iconForKey = (key: string) => {
  switch (key) {
    case 'fintech':
      return <Banknote className="w-4 h-4" />
    case 'hajjUmrah':
      return <Globe className="w-4 h-4" />
    case 'digitalMarketing':
      return <Megaphone className="w-4 h-4" />
    case 'businessConsultancy':
      return <Briefcase className="w-4 h-4" />
    default:
      return null
  }
}

const PortfolioShowcase: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const slides = useMemo(() => [
    services.fintech,
    services.hajjUmrah,
    services.digitalMarketing,
    services.businessConsultancy,
  ], [])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const reduceMotion = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Create a pinned ScrollTrigger with snapping between slides
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: `+=${slides.length * 800}`,
      pin: true,
      scrub: reduceMotion ? false : 0.5,
      anticipatePin: 1,
      snap: reduceMotion ? undefined : {
        snapTo: (value: number) => {
          const idx = Math.round(value * (slides.length - 1))
          return idx / (slides.length - 1)
        },
        duration: 0.2,
        ease: 'power1.inOut',
      },
      onUpdate: (self) => {
        const idx = Math.round(self.progress * (slides.length - 1))
        setActiveIdx(idx)
      },
    })

    stRef.current = st
    return () => {
      st.kill()
      stRef.current = null
    }
  }, [slides.length])

  const handleTabClick = (idx: number) => {
    setActiveIdx(idx)
    const st = stRef.current
    if (!st) return
    const start = st.start || 0
    const end = st.end || start + 1
    const targetY = start + ((end - start) * (idx / (slides.length - 1)))
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  const handleTabsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      handleTabClick(Math.min(activeIdx + 1, slides.length - 1))
    } else if (e.key === 'ArrowLeft') {
      handleTabClick(Math.max(activeIdx - 1, 0))
    }
  }

  return (
    <section id="portfolio" className="relative">
      <div ref={wrapperRef} className="relative min-h-[70vh] flex items-center justify-center py-12 md:py-16">
        {/* Background layers with crossfade */}
        <div className="absolute inset-0 -z-10">
          {slides.map((slide, i) => (
            <div
              key={`bg-${slide.key}`}
              className={cn(
                'absolute inset-0 bg-center bg-cover transition-opacity duration-500',
                i === activeIdx ? 'opacity-100' : 'opacity-0'
              )}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-base-300/60 via-base-100/50 to-base-100/80" />
        </div>

        {/* Sticky tabs */}
        <div
          className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-20"
          onKeyDown={handleTabsKeyDown}
          tabIndex={0}
          aria-label="Portfolio navigation"
          role="tablist"
        >
          <div className="tabs tabs-boxed bg-base-200/80 backdrop-blur max-w-fit">
            {slides.map((slide, i) => (
              <button
                key={slide.key}
                role="tab"
                aria-selected={i === activeIdx}
                className={cn('tab flex items-center gap-2', i === activeIdx ? 'tab-active text-primary' : '')}
                onClick={() => handleTabClick(i)}
              >
                {iconForKey(slide.key)}
                <span>{slide.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slides */}
        <div className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8">
          {slides.map((slide, i) => (
            <div
              key={slide.key}
              className={cn(
                'portfolio-slide absolute inset-0 transition-opacity duration-300',
                i === activeIdx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{slide.title}</h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg opacity-80 max-w-prose">{slide.subtitle}</p>
                  <ul className="mt-6 md:mt-8 space-y-2 md:space-y-3">
                    {(slide.bullets.slice(0, 3)).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {iconForKey(slide.key)}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a href="#contact" className="btn btn-primary transition-transform hover:scale-105">{slide.cta}</a>
                  </div>
                </div>
                <div>
                  <div className="card bg-base-200/70 backdrop-blur rounded-xl p-5 md:p-6 transition-transform hover:translate-y-1">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                      <div className="stat">
                        <div className="stat-title">Region</div>
                        <div className="stat-value">{slide.key === 'businessConsultancy' ? 'Dubai/KSA' : slide.title}</div>
                        <div className="stat-desc">Focus area</div>
                      </div>
                      <div className="stat">
                        <div className="stat-title">Momentum</div>
                        <div className="stat-value text-accent">High</div>
                        <div className="stat-desc">Active engagements</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, i) => (
            <div key={i} className={cn('h-1 w-10 rounded bg-base-300', i <= activeIdx ? 'bg-primary' : 'bg-base-300')} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioShowcase

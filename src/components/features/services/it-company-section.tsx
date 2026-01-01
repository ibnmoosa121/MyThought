import React, { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../../../data/services'
import { Server, Brain, Smartphone, Shield } from 'lucide-react'
import { cn } from '../../../lib/utils'

// Register plugin once
gsap.registerPlugin(ScrollTrigger)

const features = [
  { key: 'cloud', title: 'Cloud & DevOps', icon: Server, desc: 'CI/CD, IaC, scaling and observability' },
  { key: 'ai', title: 'AI & Data', icon: Brain, desc: 'Pipelines, models, and analytics at scale' },
  { key: 'apps', title: 'Web & Mobile', icon: Smartphone, desc: 'Reliable product engineering across platforms' },
  { key: 'security', title: 'Security & Compliance', icon: Shield, desc: 'Zero-trust, audits, and governance' },
]

const ItCompanySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
  const [active, setActive] = useState('cloud')

  const data = useMemo(() => services.itCompany, [])

  useEffect(() => {
    const reduceMotion = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      // Background gentle parallax
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          y: reduceMotion ? 0 : -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: reduceMotion ? false : true,
          },
        })
      }

      // Stagger cards reveal
      // Stagger cards reveal
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(card, { opacity: 0, y: 32 }, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="it-company" className="relative">
      <div ref={sectionRef} className="relative py-16 md:py-24">
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.bgImage})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-base-300/60 via-base-100/50 to-base-100/80" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{data.title}</h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg opacity-80 max-w-prose mx-auto">{data.subtitle}</p>

            {/* Feature toggles */}
            <div className="mt-8 md:mt-10 flex justify-center">
              <div className="btn-group">
                {features.map((f) => (
                  <button
                    key={f.key}
                    className={cn('btn btn-sm md:btn-md', active === f.key ? 'btn-primary' : 'btn-ghost')}
                    onClick={() => setActive(f.key)}
                    aria-pressed={active === f.key}
                  >
                    <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="ml-2 hidden sm:inline">{f.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((f, idx) => (
              <div
                key={f.key}
                ref={(el) => { cardsRef.current[idx] = el }}
                className={cn('card bg-base-200/70 backdrop-blur rounded-xl p-5 md:p-6 transition-transform hover:-translate-y-1',
                  active === f.key ? 'ring-1 ring-primary/50' : '')}
              >
                <div className="flex items-center gap-3">
                  <f.icon className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-lg md:text-xl font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-xs md:text-sm opacity-80">{f.desc}</p>
                <div className="mt-4">
                  <button className="btn btn-sm md:btn-md btn-primary" onClick={() => setActive(f.key)}>Explore</button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 text-center">
            <a href="#contact" className="btn btn-primary transition-transform hover:scale-105">{data.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItCompanySection

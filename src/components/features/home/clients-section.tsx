import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoLoop from '../../ui/logo-loop'
import { ScrollRevealText } from '../../ui/scroll-reveal-text'

// Register plugin
gsap.registerPlugin(ScrollTrigger)

// Client Data - Using placeholder logos for demonstration
const clients = [
  { id: 1, name: 'Abdul Latif Jameel', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=ALJ' },
  { id: 2, name: 'Bank AlJazira', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=BAJ' },
  { id: 3, name: 'Pepsi', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Pepsi' },
  { id: 4, name: 'Bupa Arabia', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Bupa' },
  { id: 5, name: 'Saudi Aramco', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Aramco' },
  { id: 6, name: 'STC', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=stc' },
  { id: 7, name: 'Al Rajhi Bank', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Al+Rajhi' },
  { id: 8, name: 'SABIC', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=SABIC' },
  { id: 9, name: 'Almarai', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Almarai' },
  { id: 10, name: 'Jarir', logo: 'https://placehold.co/200x80/1a1a1a/ffffff?text=Jarir' },
]

const ClientsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const loopRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      })

      // Loop Reveal Animation
      gsap.from(loopRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: loopRef.current,
          start: 'top 90%',
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 design-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-4 tracking-wide">
            <span>CLIENT NETWORK</span>
            <span className="text-zinc-600">//</span>
            <span>REGIONAL SECTOR LEADERS</span>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <ScrollRevealText
              text="Selected client engagements"
              className="text-3xl md:text-5xl font-semibold text-white tracking-tight"
            />
          </div>
          <ScrollRevealText
            text="Institutions, conglomerates, and high-growth ventures we support across Saudi Arabia and the GCC."
            className="text-base text-zinc-400 leading-relaxed"
            delay={0.2}
          />
        </div>

        {/* Logo Loop */}
        <div ref={loopRef} className="w-full">
          <LogoLoop
            logos={clients}
            speed={40}
            gap={24}
            logoHeight={48}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="#000000"
            renderItem={(item) => (
              <div className="flex items-center justify-center px-2">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors duration-150">
                  <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-zinc-400">
                    {item.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-zinc-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default ClientsSection

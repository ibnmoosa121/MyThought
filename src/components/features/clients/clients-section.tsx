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
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Standardized Animated Grid */}
        <div className="absolute inset-0 design-grid opacity-[0.08]" />

        {/* Standardized Glow Orbs */}
        <div className="theme-glow absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-white/5" />
        <div className="theme-glow absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-6 tracking-widest uppercase">
            Trusted Partners
          </span>
          <div className="flex flex-col items-center justify-center mb-8">
            <ScrollRevealText
              text="Fueling Growth for"
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            />
            <ScrollRevealText
              text="Market Leaders"
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
              delay={0.2}
            />
          </div>
          <ScrollRevealText
            text="We are proud to partner with visionary organizations across the Kingdom and beyond, delivering scalable technology solutions that drive real impact."
            className="text-lg md:text-xl text-white/60 leading-relaxed"
            delay={0.4}
          />
        </div>

        {/* Logo Loop */}
        <div ref={loopRef} className="w-full">
          <LogoLoop
            logos={clients}
            speed={50} // Slightly slower for readability
            gap={60}
            logoHeight={60} // Adjusted for better visibility
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="#000000" // Match black background
            renderItem={(item) => (
              <div className="flex items-center justify-center px-4">
                <div className="group relative">
                  {/* Outer Orbit / Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                  {/* The Capsule Container */}
                  <div className="relative flex items-center gap-6 px-12 py-5 rounded-full bg-zinc-950/40 border border-white/5 backdrop-blur-2xl transition-all duration-700 group-hover:bg-zinc-900/60 group-hover:border-white/20 group-hover:scale-105 group-hover:-translate-y-1 shadow-2xl">

                    {/* Icon Circle */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse transition-all group-hover:scale-110"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full border border-white/10 flex items-center justify-center text-white font-black text-xl shadow-lg transform transition-transform group-hover:rotate-12">
                        {item.name.charAt(0)}
                      </div>
                    </div>

                    {/* Brand Name */}
                    <div className="flex flex-col">
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors duration-500">Partner</span>
                      <span className="text-xl font-black italic uppercase tracking-tighter text-white/50 group-hover:text-white transition-all duration-500 whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>

                    {/* Interactive Scan Line Effect */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
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

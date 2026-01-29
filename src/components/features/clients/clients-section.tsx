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
                <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300 group hover:bg-white/[0.07] hover:border-white/30 hover:scale-105 active:scale-95 shadow-2xl">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-black text-xl border border-white/5 shadow-inner group-hover:bg-white/20 transition-all">
                    {item.name.charAt(0)}
                  </div>
                  <span className="text-xl font-bold whitespace-nowrap text-white/80 group-hover:text-white transition-colors tracking-tight">
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

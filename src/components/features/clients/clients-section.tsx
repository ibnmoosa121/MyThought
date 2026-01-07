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
    <section ref={sectionRef} className="py-24 md:py-32 bg-base-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
            Trusted Partners
          </span>
          <div className="flex flex-col items-center justify-center mb-6">
            <ScrollRevealText 
              text="Fueling Growth for" 
              className="text-4xl md:text-5xl font-bold"
            />
            <ScrollRevealText 
              text="Market Leaders" 
              className="text-4xl md:text-5xl font-bold text-primary"
              delay={0.2}
            />
          </div>
          <ScrollRevealText 
            text="We are proud to partner with visionary organizations across the Kingdom and beyond, delivering scalable technology solutions that drive real impact."
            className="text-lg text-base-content/70"
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
            fadeOutColor="hsl(var(--b1))" // Match base-100 color
            renderItem={(item) => (
              <div className="flex items-center justify-center px-4 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                {/* 
                   Ideally use actual SVGs/images. 
                   Using a placeholder container with text for now that looks like a logo 
                */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <span className="text-xl font-bold whitespace-nowrap">{item.name}</span>
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

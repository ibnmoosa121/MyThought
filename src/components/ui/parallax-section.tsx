import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../lib/utils'

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

interface ParallaxSectionProps {
  id?: string
  bgImage?: string
  bgOverlayClass?: string
  className?: string
  children: React.ReactNode
}

// Primitive wrapper around a section with a parallax background and content container
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  bgImage,
  bgOverlayClass = 'bg-base-100/30',
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const bg = el.querySelector('.parallax-bg') as HTMLElement | null
    if (!bg) return

    // Subtle parallax on background for depth
    gsap.to(bg, {
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn('relative min-h-[80vh] flex items-center py-16', className)}
      data-theme="light"
    >
      {bgImage && (
        <div
          className="parallax-bg absolute inset-0 -z-10 bg-center bg-cover bg-fixed opacity-90"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className={cn('absolute inset-0 -z-10', bgOverlayClass)} />
      <div className="container mx-auto px-4 w-full">
        {children}
      </div>
    </section>
  )
}

export default ParallaxSection
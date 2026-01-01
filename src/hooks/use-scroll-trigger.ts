import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger)

export interface RevealOptions {
  root?: HTMLElement | null
  selector?: string
  stagger?: number
  once?: boolean
}

// Hook: Adds scroll-triggered reveal animations for elements matching selector inside root
export const useScrollReveal = (options: RevealOptions = {}) => {
  const { root, selector = '.gsap-reveal', stagger = 0.08, once = true } = options

  useEffect(() => {
    const scope = root ?? document.body
    const ctx = gsap.context(() => {
      const elements = Array.from(scope.querySelectorAll(selector)) as HTMLElement[]
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              once,
            },
            delay: i * stagger,
          }
        )
      })
    }, scope)

    return () => {
      ctx.revert()
    }
    // Re-run when root changes (mounted)
  }, [root, selector, stagger, once])
}
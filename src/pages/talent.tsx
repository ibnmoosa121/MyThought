import { TalentHero } from '../components/features/talent/talent-hero'
import { TalentPortfolio } from '../components/features/talent/talent-portfolio'
import { TalentProcess } from '../components/features/talent/talent-process'
import { TalentRegionSwitcher } from '../components/features/talent/talent-region-switcher'
import { TalentFooter } from '../components/features/talent/talent-footer'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HERO_BG_VIDEO = '/videos/Talent%20and%20Staffing%20hero%20bg.mp4'
// Smooth slow-motion rate that keeps walking fluid without mutating per-frame
const SCROLL_PLAYBACK_RATE = 0.65

const ArchitecturalDivider = () => (
  <div className="relative z-20 container mx-auto px-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-900/15 to-transparent" />
  </div>
)

const TalentPage = () => {
  const mainRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 3-Stage Choreography:
  // 1. Video loads first (isVideoLoaded)
  // 2. Hero text smoothly fades in (showHeroText)
  // 3. Scrolling sections & scroll-driven video playback activate (showScrollContent)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showHeroText, setShowHeroText] = useState(false)
  const [showScrollContent, setShowScrollContent] = useState(false)

  useEffect(() => {
    document.title = 'Talent & Staffing | Stebup'
    window.scrollTo(0, 0)
  }, [])

  // Stage 1 -> Stage 2 -> Stage 3 Sequencer
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let heroTimer: ReturnType<typeof setTimeout> | null = null
    let scrollTimer: ReturnType<typeof setTimeout> | null = null
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null
    let triggered = false

    const triggerSequence = () => {
      if (triggered) return
      triggered = true

      video.pause()
      video.defaultPlaybackRate = SCROLL_PLAYBACK_RATE
      video.playbackRate = SCROLL_PLAYBACK_RATE

      // Step 1: Reveal video background first
      setIsVideoLoaded(true)

      // Step 2: Fade in hero text smoothly after video has settled on screen
      heroTimer = setTimeout(() => {
        setShowHeroText(true)
      }, 550)

      // Step 3: Unlock & reveal scrolling sections after hero text entrance completes
      scrollTimer = setTimeout(() => {
        setShowScrollContent(true)
        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }, 1750)
    }

    // If video is already buffered in cache, start sequence immediately
    if (video.readyState >= 2) {
      triggerSequence()
    } else {
      video.addEventListener('loadeddata', triggerSequence, { once: true })
      video.addEventListener('canplay', triggerSequence, { once: true })
      // Safety fallback in case network stalls
      fallbackTimer = setTimeout(triggerSequence, 2500)
    }

    return () => {
      video.removeEventListener('loadeddata', triggerSequence)
      video.removeEventListener('canplay', triggerSequence)
      if (heroTimer) clearTimeout(heroTimer)
      if (scrollTimer) clearTimeout(scrollTimer)
      if (fallbackTimer) clearTimeout(fallbackTimer)
    }
  }, [])

  // Scroll-controlled video playback (active once Stage 3 is ready)
  useEffect(() => {
    if (!showScrollContent) return

    const video = videoRef.current
    const mainEl = mainRef.current
    if (!video || !mainEl) return

    video.pause()
    video.defaultPlaybackRate = SCROLL_PLAYBACK_RATE
    video.playbackRate = SCROLL_PLAYBACK_RATE

    let pauseTimer: ReturnType<typeof setTimeout> | null = null
    let isPlaying = false

    const startVideo = () => {
      if (!isPlaying || video.paused) {
        if (video.playbackRate !== SCROLL_PLAYBACK_RATE) {
          video.playbackRate = SCROLL_PLAYBACK_RATE
        }
        isPlaying = true
        video.play().catch(() => {
          isPlaying = false
        })
      }

      if (pauseTimer) {
        clearTimeout(pauseTimer)
      }

      // Tight 75ms cutoff so the video stops immediately when physical scrolling stops,
      // ignoring Lenis's 1.2s sub-pixel deceleration tail.
      pauseTimer = setTimeout(() => {
        video.pause()
        isPlaying = false
      }, 75)
    }

    const stopVideoImmediately = () => {
      if (pauseTimer) {
        clearTimeout(pauseTimer)
        pauseTimer = null
      }
      if (!video.paused) {
        video.pause()
      }
      isPlaying = false
    }

    // Listen directly to physical wheel/touch input for instant start/stop sync
    const handleWheel = () => startVideo()
    const handleTouchMove = () => startVideo()
    const handleTouchEnd = () => stopVideoImmediately()

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    const trigger = ScrollTrigger.create({
      trigger: mainEl,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity())
        if (velocity > 85) {
          startVideo()
        } else if (isPlaying && velocity < 40) {
          stopVideoImmediately()
        }
      }
    })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      if (pauseTimer) clearTimeout(pauseTimer)
      trigger.kill()
      video.pause()
    }
  }, [showScrollContent])

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen bg-[#ECECE8] text-zinc-950 selection:bg-zinc-950 selection:text-white"
    >
      {/* Stage 1: Full-Page Fixed Scroll-Controlled Background Video (Loads & Fades in First) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={HERO_BG_VIDEO}
          muted
          playsInline
          loop
          preload="auto"
          className={`w-full h-full object-cover scale-[1.02] will-change-transform transform-gpu transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Soft architectural alabaster veil so silhouettes & cast shadows shine through while keeping typography razor-sharp */}
        <div className="absolute inset-0 bg-[#F4F4F0]/35" />
        {/* Top gradient canopy so the global navigation bar stays crisp & legible */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-zinc-950/75 via-zinc-950/25 to-transparent" />
        {/* Subtle edge vignette matching cast shadow slate tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(244,244,240,0.1) 0%, rgba(212,212,206,0.45) 100%)'
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Stage 2: Hero Text Fades in Smoothly After Video Loads */}
        <TalentHero isVisible={showHeroText} />

        {/* Stage 3: Scrolling Content & Sections Fade in After Hero Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={showScrollContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={showScrollContent ? 'pointer-events-auto' : 'pointer-events-none'}
        >
          <ArchitecturalDivider />
          <TalentPortfolio />

          <ArchitecturalDivider />
          <TalentProcess />

          <ArchitecturalDivider />
          <TalentRegionSwitcher />

          <TalentFooter />
        </motion.div>
      </div>
    </main>
  )
}

export default TalentPage

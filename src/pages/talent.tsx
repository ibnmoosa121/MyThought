import { TalentHero } from '../components/features/talent/talent-hero'
import { TalentPortfolio } from '../components/features/talent/talent-portfolio'
import { TalentProcess } from '../components/features/talent/talent-process'
import { TalentRegionSwitcher } from '../components/features/talent/talent-region-switcher'
import { TalentFooter } from '../components/features/talent/talent-footer'
import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    document.title = 'Talent & Staffing | Stebup'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
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

    const handleLoadedMetadata = () => {
      video.defaultPlaybackRate = SCROLL_PLAYBACK_RATE
      video.playbackRate = SCROLL_PLAYBACK_RATE
    }

    // Listen directly to physical wheel/touch input for instant start/stop sync
    const handleWheel = () => startVideo()
    const handleTouchMove = () => startVideo()
    const handleTouchEnd = () => stopVideoImmediately()

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    // Also hook GSAP ScrollTrigger for scrollbar dragging / keyboard scrolling,
    // but ignore Lenis's low-velocity tail (< 85px/s) so the video doesn't keep playing
    // for 1.2 seconds after the user stops scrolling.
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
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      if (pauseTimer) clearTimeout(pauseTimer)
      trigger.kill()
      video.pause()
    }
  }, [])

  return (
    <main
      ref={mainRef}
      className="relative min-h-screen bg-[#ECECE8] text-zinc-950 selection:bg-zinc-950 selection:text-white"
    >
      {/* Full-Page Fixed Scroll-Controlled Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src={HERO_BG_VIDEO}
          muted
          playsInline
          loop
          preload="auto"
          className="w-full h-full object-cover scale-[1.02] will-change-transform transform-gpu"
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

      {/* Scrolling Foreground Content */}
      <div className="relative z-10">
        <TalentHero />

        <ArchitecturalDivider />
        <TalentPortfolio />

        <ArchitecturalDivider />
        <TalentProcess />

        <ArchitecturalDivider />
        <TalentRegionSwitcher />

        <TalentFooter />
      </div>
    </main>
  )
}

export default TalentPage

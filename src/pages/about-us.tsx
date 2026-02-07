import { useEffect } from 'react'
import { AboutHero } from '../components/features/about/about-hero'
import { AboutContent } from '../components/features/about/about-content'
import { SectionDivider } from '../components/ui/section-divider'

const AboutUsPage = () => {
  useEffect(() => {
    document.title = "About Us | MyThought"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-black relative overflow-x-hidden">
      <AboutHero />

      <div className="relative z-10">
        <SectionDivider type="glow" direction="bottom" color="from-white/20" />
        <AboutContent />
      </div>
    </main>
  )
}

export default AboutUsPage
import { ConsultancyHero } from '../components/features/consultancy/consultancy-hero'
import { ConsultancyDetails } from '../components/features/consultancy/consultancy-details'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'
import CtaSection from '../components/features/cta/cta-section'

const ConsultancyPage = () => {
  useEffect(() => {
    document.title = "Consultancy | MyThought"
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <ConsultancyHero />
      <div className="relative z-10">
        <ConsultancyDetails />
      </div>
      <SectionDivider type="glow" direction="top" />
      <CtaSection />
    </main>
  )
}

export default ConsultancyPage


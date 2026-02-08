import { services } from '../data/services'
import { ConsultancyHero } from '../components/features/consultancy/consultancy-hero'
import { GatewayNavigator } from '../components/features/consultancy/gateway-navigator'
import { ConsultancyDetails } from '../components/features/consultancy/consultancy-details'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'
import CtaSection from '../components/features/shared/cta-section'

const ConsultancyPage = () => {
  const service = services.consultancy;

  useEffect(() => {
    document.title = "Consultancy | MyThought"
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <ConsultancyHero />
      <div className="relative z-10">
        <GatewayNavigator />
        <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
        <ConsultancyDetails />
      </div>
      <SectionDivider type="glow" direction="top" color={service.theme.plasmaColor} />
      <CtaSection />
    </main>
  )
}

export default ConsultancyPage


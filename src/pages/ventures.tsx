import { services } from '../data/services'
import { VenturesHero } from '../components/features/ventures/ventures-hero'
import { VenturesPortfolio } from '../components/features/ventures/ventures-portfolio'
import { VenturesMethodology } from '../components/features/ventures/ventures-methodology'
import { VenturesFooter } from '../components/features/ventures/ventures-footer'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'

const VenturesPage = () => {
  const service = services.ventures;

  useEffect(() => {
    document.title = "Ventures | MyThought"
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <VenturesHero />

      <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
      <VenturesPortfolio />

      <SectionDivider type="glow" direction="top" color={service.theme.plasmaColor} />
      <VenturesMethodology />

      <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
      <VenturesFooter />
    </main>
  )
}

export default VenturesPage

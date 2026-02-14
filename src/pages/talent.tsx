import { services } from '../data/services'
import { TalentHero } from '../components/features/talent/talent-hero'
import { TalentPortfolio } from '../components/features/talent/talent-portfolio'
import { TalentProcess } from '../components/features/talent/talent-process'
import { TalentRegionSwitcher } from '../components/features/talent/talent-region-switcher'
import { TalentFooter } from '../components/features/talent/talent-footer'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'

const TalentPage = () => {
  const service = services.talent;

  useEffect(() => {
    document.title = "Talent & Staffing | MyThought"
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <TalentHero />

      <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
      <TalentPortfolio />

      <SectionDivider type="glow" direction="top" color={service.theme.plasmaColor} />
      <TalentProcess />

      <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
      <TalentRegionSwitcher />

      <SectionDivider type="glow" direction="top" color={service.theme.plasmaColor} />
      <TalentFooter />
    </main>
  )
}

export default TalentPage

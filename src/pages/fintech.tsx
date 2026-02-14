import { services } from '../data/services'
import { FintechHero } from '../components/features/fintech/fintech-hero'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'

import { FintechTestimonials } from '../components/features/fintech/fintech-testimonials'
import { FintechDetails } from '../components/features/fintech/fintech-details'
import { FintechFloatingOrders } from '../components/features/fintech/fintech-floating-orders'

const FintechPage = () => {
  const service = services.fintech;

  useEffect(() => {
    document.title = "FinTech Solutions | MyThought"
    window.scrollTo(0, 0);
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <FintechFloatingOrders />
      <FintechHero />
      <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />

      <FintechDetails />

      <FintechTestimonials />

      <SectionDivider type="glow" direction="top" color={service.theme.plasmaColor} />
    </main>
  )
}

export default FintechPage

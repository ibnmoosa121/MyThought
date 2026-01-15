import { ConsultancyHero } from '../components/features/consultancy/consultancy-hero'
import { useEffect } from 'react'

const ConsultancyPage = () => {
  useEffect(() => {
    document.title = "Consultancy | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <ConsultancyHero />
    </main>
  )
}

export default ConsultancyPage

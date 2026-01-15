import { TalentHero } from '../components/features/talent/talent-hero'
import { useEffect } from 'react'

const TalentPage = () => {
  useEffect(() => {
    document.title = "Talent & Staffing | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <TalentHero />
    </main>
  )
}

export default TalentPage

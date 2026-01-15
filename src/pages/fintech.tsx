import { FintechHero } from '../components/features/fintech/fintech-hero'
import { useEffect } from 'react'

const FintechPage = () => {
  useEffect(() => {
    document.title = "FinTech Solutions | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <FintechHero />
    </main>
  )
}

export default FintechPage

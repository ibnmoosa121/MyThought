import { VenturesHero } from '../components/features/ventures/ventures-hero'
import { useEffect } from 'react'

const VenturesPage = () => {
  useEffect(() => {
    document.title = "Ventures | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <VenturesHero />
    </main>
  )
}

export default VenturesPage

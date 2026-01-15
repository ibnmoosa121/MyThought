import { SoftwareHero } from '../components/features/software/software-hero'
import { useEffect } from 'react'

const SoftwarePage = () => {
  useEffect(() => {
    document.title = "Software Development | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <SoftwareHero />
      {/* Additional sections can be added here later */}
    </main>
  )
}

export default SoftwarePage

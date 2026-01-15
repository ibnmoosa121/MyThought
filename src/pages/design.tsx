import { DesignHero } from '../components/features/design/design-hero'
import { useEffect } from 'react'

const DesignPage = () => {
  useEffect(() => {
    document.title = "Design & Creative | MyThought"
  }, [])

  return (
    <main className="min-h-screen bg-black">
      <DesignHero />
    </main>
  )
}

export default DesignPage

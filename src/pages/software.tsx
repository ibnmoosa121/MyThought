"use client";

import { useEffect } from 'react'
import { SoftwareHero } from '../components/features/software/software-hero'
import { SoftwareServices } from '../components/features/software/software-services'
import { SoftwareTechStack } from '@/components/features/software/software-tech-stack'
import { SoftwareMethodology } from '../components/features/software/software-methodology'
import { SoftwareCaseStudies } from '../components/features/software/software-case-studies'
import { WavyBackground } from '../components/ui/wavy-background'
import { SectionDivider } from '../components/ui/section-divider'

const SoftwarePage = () => {
  useEffect(() => {
    document.title = "Software & Technology | MyThought"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-black relative">
      <SoftwareHero />

      <div className="relative z-10 space-y-0">
        <div className="relative">
          <WavyBackground color="#06B6D4" className="opacity-15" />
          <SoftwareTechStack />
        </div>

        <SectionDivider />

        <div className="relative">
          <SoftwareServices />
        </div>

        <SectionDivider />

        <div className="relative">
          <WavyBackground color="#4F46E5" className="opacity-20" />
          <SoftwareMethodology />
        </div>

        <SectionDivider />

        <div className="relative">
          <WavyBackground color="#3B82F6" className="opacity-25" />
          <SoftwareCaseStudies />
        </div>
      </div>
    </main>
  )
}

export default SoftwarePage

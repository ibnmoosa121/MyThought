"use client";

import { useEffect } from 'react'
import { SoftwareHero } from '../components/features/software/software-hero'
import { SoftwareServices } from '../components/features/software/software-services'
import { SoftwareMethodology } from '../components/features/software/software-methodology'
import { SoftwareCaseStudies } from '../components/features/software/software-case-studies'
import { WavyBackground } from '../components/ui/wavy-background'
import { SectionDivider } from '../components/ui/section-divider'
import DeliveryProcess from '../components/features/delivery/delivery-process'

import { services } from '../data/services'

const SoftwarePage = () => {
  const service = services.software;

  useEffect(() => {
    document.title = "Software & Technology | MyThought"
    window.scrollTo(0, 0)

    // Hide scrollbar on this page
    const html = document.documentElement;
    html.classList.add('scrollbar-hide');

    return () => {
      html.classList.remove('scrollbar-hide');
    };
  }, [])

  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden scrollbar-hide">
      <SoftwareHero />

      <div className="relative z-10 space-y-0">
        <div className="relative bg-black">
          <DeliveryProcess />
          <SectionDivider type="glow" direction="bottom" color={service.theme.plasmaColor} />
        </div>

        <SectionDivider />

        <div className="relative">
          <SoftwareServices />
        </div>

        <SectionDivider />

        <div className="relative">
          <WavyBackground color={service.theme.plasmaColor} className="opacity-20" />
          <SoftwareMethodology />
        </div>

        <SectionDivider />

        <div className="relative">
          <WavyBackground color={service.theme.plasmaColor} className="opacity-25" />
          <SoftwareCaseStudies />
        </div>
      </div>
    </main>
  )
}

export default SoftwarePage

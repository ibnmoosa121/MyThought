import React, { useRef } from 'react'
import { ParallaxSection } from '../../ui/parallax-section'
import { services } from '../../../data/services'
import { Briefcase, MapPin } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/use-scroll-trigger'

const BusinessConsultancySection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal({ root: ref.current })
  const content = services.businessConsultancy

  return (
    <ParallaxSection id="business-consultancy" bgImage={content.bgImage} className="text-base-content">
      <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gsap-reveal">{content.title}</h2>
          <p className="mt-3 text-base md:text-lg opacity-80 gsap-reveal">{content.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {content.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 gsap-reveal">
                <Briefcase className="text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 gsap-reveal">
            <a href="#contact" className="btn btn-primary">{content.cta}</a>
          </div>
        </div>
        <div className="gsap-reveal">
          <div className="card bg-base-200/70 backdrop-blur rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="stat">
                <div className="stat-figure text-primary"><MapPin /></div>
                <div className="stat-title">Regions</div>
                <div className="stat-value text-primary">Dubai/KSA</div>
                <div className="stat-desc">Local insight</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary"><Briefcase /></div>
                <div className="stat-title">Projects</div>
                <div className="stat-value text-secondary">120+</div>
                <div className="stat-desc">Across industries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default BusinessConsultancySection

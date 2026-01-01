import React, { useRef } from 'react'
import { ParallaxSection } from '../../ui/parallax-section'
import { services } from '../../../data/services'
import { Megaphone, BarChart3 } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/use-scroll-trigger'

const DigitalMarketingSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal({ root: ref.current })
  const content = services.digitalMarketing

  return (
    <ParallaxSection id="digital-marketing" bgImage={content.bgImage} className="text-base-content">
      <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gsap-reveal">{content.title}</h2>
          <p className="mt-3 text-base md:text-lg opacity-80 gsap-reveal">{content.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {content.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 gsap-reveal">
                <Megaphone className="text-primary" />
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
                <div className="stat-figure text-primary"><BarChart3 /></div>
                <div className="stat-title">CTR</div>
                <div className="stat-value text-primary">+24%</div>
                <div className="stat-desc">A/B tested</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary"><Megaphone /></div>
                <div className="stat-title">Platforms</div>
                <div className="stat-value text-secondary">6</div>
                <div className="stat-desc">Cross-channel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default DigitalMarketingSection

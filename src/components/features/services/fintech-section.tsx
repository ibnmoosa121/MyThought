import React, { useRef } from 'react'
import { ParallaxSection } from '../../ui/parallax-section'
import { services } from '../../../data/services'
import { Banknote, ShieldCheck, LineChart } from 'lucide-react'
import { useScrollReveal } from '../../../hooks/use-scroll-trigger'

const FintechSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScrollReveal({ root: ref.current })

  const content = services.fintech

  return (
    <ParallaxSection id="fintech" bgImage={content.bgImage} className="text-base-content">
      <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold gsap-reveal">{content.title}</h2>
          <p className="mt-3 text-base md:text-lg opacity-80 gsap-reveal">{content.subtitle}</p>
          <ul className="mt-6 space-y-3">
            {content.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 gsap-reveal">
                <Banknote className="text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 gsap-reveal">
            <a href="#contact" className="btn btn-primary">{content.cta}</a>
          </div>
        </div>

        {/* Right: animated card */}
        <div className="gsap-reveal">
          <div className="card bg-base-200/70 backdrop-blur rounded-xl p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="stat">
                <div className="stat-figure text-primary"><ShieldCheck /></div>
                <div className="stat-title">Compliance</div>
                <div className="stat-value text-primary">PCI/AML</div>
                <div className="stat-desc">Standards aligned</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-accent"><LineChart /></div>
                <div className="stat-title">Uptime</div>
                <div className="stat-value text-accent">99.95%</div>
                <div className="stat-desc">Highly available</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary"><Banknote /></div>
                <div className="stat-title">Transactions</div>
                <div className="stat-value text-secondary">1M+/mo</div>
                <div className="stat-desc">Scaled processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

export default FintechSection

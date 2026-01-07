import React, { useRef, useState } from 'react'
import { Building2, ShoppingBag, HeartPulse, Home, Truck, GraduationCap, ArrowRight } from 'lucide-react'
import { cn } from '../../../lib/utils'

const industries = [
  {
    id: 'fintech',
    title: 'Fintech & Banking',
    subtitle: 'The Future of Finance',
    desc: 'Empowering financial institutions with secure, high-frequency trading platforms and blockchain-enabled infrastructure that processes millions of transactions with zero latency.',
    stats: [
      { label: 'Efficiency', value: '+40%' },
      { label: 'Security', value: '100%' }
    ],
    icon: Building2,
    video: 'https://cdn.coverr.co/videos/coverr-saudi-arabia-flag-waving-5244/1080p.mp4', // Placeholder: Saudi Flag
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 'retail',
    title: 'E-Commerce & Retail',
    subtitle: 'Omnichannel Excellence',
    desc: 'Creating unified shopping experiences that merge physical and digital worlds. Our AI-driven personalization engines increase conversion rates and customer loyalty.',
    stats: [
      { label: 'Conversion', value: '3x' },
      { label: 'Retention', value: '+25%' }
    ],
    icon: ShoppingBag,
    video: 'https://cdn.coverr.co/videos/coverr-people-walking-in-a-mall-4545/1080p.mp4', // Placeholder: Shopping Mall
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Digital Care Revolution',
    desc: 'Transforming patient care with telemedicine platforms and AI-assisted diagnostics. We ensure data interoperability while maintaining the highest standards of HIPAA compliance.',
    stats: [
      { label: 'Access', value: '24/7' },
      { label: 'Accuracy', value: '99.9%' }
    ],
    icon: HeartPulse,
    video: 'https://cdn.coverr.co/videos/coverr-doctors-walking-in-hospital-corridor-4549/1080p.mp4', // Placeholder: Healthcare
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    subtitle: 'Virtual & Smart Living',
    desc: 'Revolutionizing property management with immersive VR tours and IoT-enabled smart building systems that optimize energy consumption and tenant experience.',
    stats: [
      { label: 'Sales Speed', value: '+50%' },
      { label: 'Energy', value: '-30%' }
    ],
    icon: Home,
    video: 'https://cdn.coverr.co/videos/coverr-modern-buildings-in-city-center-5248/1080p.mp4', // Placeholder: Modern City/Real Estate
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    subtitle: 'Intelligent Supply Chain',
    desc: 'Optimizing global fleets with real-time tracking and predictive maintenance. Our algorithms reduce fuel consumption and ensure on-time delivery across complex networks.',
    stats: [
      { label: 'Costs', value: '-20%' },
      { label: 'On-Time', value: '98%' }
    ],
    icon: Truck,
    video: 'https://cdn.coverr.co/videos/coverr-container-ship-at-sea-5252/1080p.mp4', // Placeholder: Logistics/Shipping
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Global Learning Access',
    desc: 'Breaking down barriers with scalable learning management systems and virtual classrooms that connect students and educators worldwide.',
    stats: [
      { label: 'Reach', value: 'Global' },
      { label: 'Engagement', value: '+60%' }
    ],
    icon: GraduationCap,
    video: 'https://cdn.coverr.co/videos/coverr-students-working-in-library-5255/1080p.mp4', // Placeholder: Education/Library
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop'
  }
]

const ItCompanySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  // const [progress, setProgress] = useState(0)

  // Configuration for scroll behavior
  
  React.useLayoutEffect(() => {
    // Legacy GSAP code removed to fix reference error and switch to auto-play
  }, [])

  // Auto-play logic
  React.useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % industries.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 bg-layer">
        {industries.map((item, idx) => (
          <div
            key={`bg-${item.id}`}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out",
              idx === activeIdx ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
            )}
          >
             {/* Video Background */}
             <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster={item.image}
              >
                <source src={item.video} type="video/mp4" />
              </video>

            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Tabs (Top) */}
      <div className="relative z-50 px-4 pt-24 md:pt-32 pb-8">
        <div className="flex justify-center items-center gap-2 md:gap-4 max-w-6xl mx-auto flex-wrap">
          {industries.map((item, idx) => (
            <button
              key={`nav-${item.id}`}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border backdrop-blur-md",
                idx === activeIdx 
                  ? "bg-white text-black border-white scale-105 shadow-lg shadow-white/25" 
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium hidden md:inline">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Layer - Centered Storytelling */}
      <div className="relative z-10 flex-1 w-full flex items-start justify-center pt-8 md:pt-16 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-start items-center">
          
          <div className="w-full max-w-5xl relative min-h-[50vh] flex items-start justify-center">
            {industries.map((item, idx) => (
               <div 
                 key={`text-${item.id}`}
                 className={cn(
                   "transition-all duration-1000 ease-out absolute inset-0 flex flex-col items-center justify-start text-center",
                   idx === activeIdx 
                     ? "opacity-100 translate-y-0 scale-100 pointer-events-auto delay-200" 
                     : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                 )}
               >
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                   <item.icon className="w-5 h-5 text-primary" />
                   <span className="text-sm font-bold uppercase tracking-widest text-primary">{item.title}</span>
                 </div>

                 <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl">
                   {item.subtitle}
                 </h2>

                 <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mb-8 drop-shadow-lg">
                   {item.desc}
                 </p>

                 <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-8">
                   {item.stats.map((stat, i) => (
                     <div key={i} className="flex flex-col items-center p-4 min-w-[120px] rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                       <span className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</span>
                       <span className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-2">
                   <a href="#contact" className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-primary/50">
                     Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </a>
                 </div>
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ItCompanySection

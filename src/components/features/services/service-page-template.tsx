import { services, type ServiceKey } from '../../../data/services'
// import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ScrollRevealText } from '../../ui/scroll-reveal-text'
import { useEffect } from 'react'

interface ServicePageTemplateProps {
  serviceKey: ServiceKey
}

export const ServicePageTemplate = ({ serviceKey }: ServicePageTemplateProps) => {
  const service = services[serviceKey]

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | MyThought`
    }
  }, [service])

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollRevealText 
            text={service.title}
            className={`text-5xl md:text-7xl font-bold mb-6 ${service.theme.text}`}
          />
          <ScrollRevealText 
            text={service.subtitle}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
            delay={0.2}
          />
        </div>
      </div>

      {/* Content Section - Commented out for now
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Offer</h2>
            <div className="space-y-6">
              {service.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-base-200/50 hover:bg-base-200 transition-colors">
                  <div className={`mt-1 p-2 rounded-full ${service.theme.bg} bg-opacity-10 text-opacity-100`}>
                    <CheckCircle2 className={`w-5 h-5 ${service.theme.text}`} />
                  </div>
                  <p className="text-lg">{bullet}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a 
                href="#/contact-us" 
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full ${service.theme.bg} text-white font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-xl`}
              >
                {service.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={service.bgImage} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/80">{service.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  )
}

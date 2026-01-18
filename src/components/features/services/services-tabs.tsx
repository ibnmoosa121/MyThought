import { useState } from "react";
import { PinContainer } from "../../ui/3d-pin";
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, RefreshCw, Settings, Users, Lightbulb, Rocket, Monitor, Briefcase, Box, Landmark, BarChart3, Wallet } from 'lucide-react'
import { ScrollRevealText } from "../../ui/scroll-reveal-text";
import { WavyBackground } from "../../ui/wavy-background";

const services = [
  {
    id: 'software',
    label: 'Software & Technology',
    description: 'We drive digital transformation with innovative software solutions, empowering organizations with cutting-edge technology and seamless integration. From concept to implementation, we develop efficient software that unlocks new opportunities and unleashes your business\'s full potential.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    theme: {
      text: 'text-blue-500',
      bg: 'bg-blue-500',
      gradient: 'from-[#4F46E5] via-[#0EA5E9] to-[#22D3EE]',
      waveColor: 'rgba(59, 130, 246, 0.3)',
      plasmaColor: '#3B82F6'
    },
    href: '#/software',
    cards: [
      {
        icon: Code2,
        title: 'New Project Development',
        text: 'Develop a new software product or service. Anything from mobile app to a complex cloud-based service.'
      },
      {
        icon: RefreshCw,
        title: 'Legacy System Overhaul',
        text: 'Modernize outdated legacy systems that are inefficient, costly, and don\'t meet current business requirements.'
      },
      {
        icon: Settings,
        title: 'System Optimization',
        text: 'Develop integrations and APIs, bridging the gap between multiple disjointed systems for a more efficient operation.'
      }
    ]
  },
  {
    id: 'consultancy',
    label: 'Consultancy & Strategy',
    description: 'Our expert consultants provide strategic guidance to navigate complex business challenges. We analyze your current operations and provide actionable insights to optimize performance and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    theme: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500',
      gradient: 'from-[#059669] via-[#10B981] to-[#34D399]',
      waveColor: 'rgba(16, 185, 129, 0.3)',
      plasmaColor: '#10B981'
    },
    href: '#/consultancy',
    cards: [
      {
        icon: Lightbulb,
        title: 'Strategic Planning',
        text: 'Define your long-term vision and roadmap. We help you identify opportunities and align your resources for success.'
      },
      {
        icon: Users,
        title: 'Process Optimization',
        text: 'Streamline your operations to reduce costs and improve efficiency. We identify bottlenecks and implement lean methodologies.'
      },
      {
        icon: Briefcase,
        title: 'Digital Transformation',
        text: 'Guide your organization through the adoption of digital technologies to fundamentally change how you operate and deliver value.'
      }
    ]
  },
  {
    id: 'talent',
    label: 'Talent & Staffing',
    description: 'We connect you with top-tier talent to build high-performing teams. Whether you need temporary staffing or permanent placements, we find the right people with the right skills to fit your culture.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    theme: {
      text: 'text-purple-500',
      bg: 'bg-purple-500',
      gradient: 'from-[#7C3AED] via-[#A855F7] to-[#C084FC]',
      waveColor: 'rgba(168, 85, 247, 0.3)',
      plasmaColor: '#A855F7'
    },
    href: '#/talent',
    cards: [
      {
        icon: Users,
        title: 'Executive Search',
        text: 'Find visionary leaders to drive your company forward. We specialize in identifying and attracting C-suite executives.'
      },
      {
        icon: Briefcase,
        title: 'Team Augmentation',
        text: 'Scale your team quickly with skilled professionals. We provide flexible staffing solutions to meet your project demands.'
      },
      {
        icon: Monitor,
        title: 'Technical Recruiting',
        text: 'Source specialized technical talent. From developers to data scientists, we find the experts you need to innovate.'
      }
    ]
  },
  {
    id: 'design',
    label: 'Design & Creative',
    description: 'We craft compelling visual experiences that resonate with your audience. Our design team combines creativity with user-centric principles to build brands that stand out and products that people love.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    theme: {
      text: 'text-pink-500',
      bg: 'bg-pink-500',
      gradient: 'from-[#6366F1] via-[#D946EF] via-[#F43F5E] to-[#F59E0B]',
      waveColor: 'rgba(217, 70, 239, 0.3)',
      plasmaColor: '#EC4899'
    },
    href: '#/design',
    cards: [
      {
        icon: Monitor,
        title: 'UI/UX Design',
        text: 'Create intuitive and engaging user interfaces. We focus on user research and testing to ensure a seamless experience.'
      },
      {
        icon: Lightbulb,
        title: 'Brand Identity',
        text: 'Build a strong and memorable brand. We develop logos, color palettes, and brand guidelines that reflect your values.'
      },
      {
        icon: Rocket,
        title: 'Visual Storytelling',
        text: 'Communicate your message effectively through visuals. We create graphics, illustrations, and videos that captivate.'
      }
    ]
  },
  {
    id: 'ventures',
    label: 'Ventures & Innovation',
    description: 'We partner with visionary founders to build the next generation of industry-leading companies. Our venture arm provides capital, mentorship, and operational support to turn bold ideas into reality.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    theme: {
      text: 'text-amber-500',
      bg: 'bg-amber-500',
      gradient: 'from-[#F59E0B] via-[#F97316] to-[#FACC15]',
      waveColor: 'rgba(245, 158, 11, 0.3)',
      plasmaColor: '#F59E0B'
    },
    href: '#/ventures',
    cards: [
      {
        icon: Rocket,
        title: 'Startup Incubation',
        text: 'Nurture early-stage startups. We provide the resources and guidance needed to validate ideas and build a MVP.'
      },
      {
        icon: Users,
        title: 'Growth Acceleration',
        text: 'Scale your business rapidly. We offer strategic support and access to our network of partners and investors.'
      },
      {
        icon: Box,
        title: 'Corporate Innovation',
        text: 'Drive innovation within established enterprises. We help you create internal startups and explore new business models.'
      }
    ]
  },
  {
    id: 'fintech',
    label: 'FinTech & Banking',
    description: 'We build secure and scalable financial technology solutions. From payment gateways to blockchain applications, we help you navigate the future of finance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    theme: {
      text: 'text-teal-500',
      bg: 'bg-teal-500',
      gradient: 'from-[#0D9488] via-[#06B6D4] to-[#10B981]',
      waveColor: 'rgba(13, 148, 136, 0.3)',
      plasmaColor: '#14B8A6'
    },
    href: '#/fintech',
    cards: [
      {
        icon: Landmark,
        title: 'Digital Payments',
        text: 'Seamless payment integration and processing solutions.'
      },
      {
        icon: Wallet,
        title: 'Blockchain Solutions',
        text: 'Decentralized applications and smart contracts.'
      },
      {
        icon: BarChart3,
        title: 'Financial Analytics',
        text: 'Real-time data visualization and risk assessment.'
      }
    ]
  }
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden min-h-[800px]">
      {/* Wavy Background based on active service */}
      <WavyBackground color={activeService.theme.plasmaColor} className="opacity-40" />

      {/* Background Gradients (Standardized) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 design-grid opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3 text-center lg:text-left">Expertise</h2>
          <div className="flex justify-center lg:justify-start">
            <ScrollRevealText
              text="Explore our range of services"
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Tabs */}
          <div className="lg:w-1/4 flex flex-wrap lg:flex-col gap-4 justify-center lg:justify-start">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left text-lg md:text-xl font-bold transition-all duration-300 relative pl-6 py-2 group ${activeTab === service.id
                  ? 'text-white'
                  : 'text-white/30 hover:text-white/60'
                  }`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-full ${service.theme.bg} rounded-full shadow-[0_0_15px_rgba(var(--p),0.5)]`}
                  />
                )}
                <span className={`relative z-10 inline-block ${activeTab === service.id ? `bg-gradient-to-r ${service.theme.gradient} bg-clip-text text-transparent` : ''}`}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-12"
                  >
                    <div className="flex items-center justify-center w-full mb-4">
                      <PinContainer
                        title={service.label}
                        href={service.href}
                        containerClassName="h-[22rem] md:h-[32rem] w-full"
                        className="w-full"
                      >
                        <div className="relative h-60 md:h-[26rem] w-[20rem] md:w-[54rem] rounded-3xl overflow-hidden group border border-white/5 bg-zinc-900/20 backdrop-blur-md">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                          <img
                            src={service.image}
                            alt={service.label}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-70"
                          />
                          <div className="absolute bottom-0 left-0 p-8 md:p-14 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-700 text-center lg:text-left">
                            <h3 className={`text-3xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl uppercase bg-gradient-to-r ${service.theme.gradient} bg-clip-text text-transparent`}>
                              {service.label}
                            </h3>
                            <div className={`h-2 w-32 ${service.theme.bg} rounded-full shadow-[0_0_25px_rgba(255,255,255,0.2)] mx-auto lg:mx-0`} />
                          </div>
                        </div>
                      </PinContainer>
                    </div>

                    <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
                      <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-4">
                      {service.cards.map((card, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                          className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                            <card.icon className="w-24 h-24" />
                          </div>
                          <div className="mb-8 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl ${service.theme.bg}/20 flex items-center justify-center border border-white/5`}>
                              <card.icon className={`w-7 h-7 ${service.theme.text}`} />
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold mb-5 text-white tracking-tight relative z-10">{card.title}</h4>
                          <p className="text-white/40 leading-relaxed text-lg relative z-10">
                            {card.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}


import { useState } from "react";
import TiltedCard from "../../ui/tilted-card";
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, RefreshCw, Settings, Users, Lightbulb, Rocket, Monitor, Briefcase, Box, Landmark, BarChart3, Wallet, Brain, Database, Cpu, Truck } from 'lucide-react'
import { ScrollRevealText } from "../../ui/scroll-reveal-text";
import { WavyBackground } from "../../ui/wavy-background";
import { prefetchPage } from "../../../lib/prefetch";

const services = [
  {
    id: 'software',
    tagline: 'Engineering Scalable Solutions',
    label: 'Software & Technology',
    description: 'We drive digital transformation with innovative software solutions, empowering organizations with cutting-edge technology and seamless integration. From concept to implementation, we develop efficient software that unlocks new opportunities and unleashes your business\'s full potential.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-blue-500',
      bg: 'bg-blue-500',
      gradient: 'from-[#4F46E5] via-[#0EA5E9] to-[#22D3EE]',
      waveColor: 'rgba(59, 130, 246, 0.3)',
      plasmaColor: '#3B82F6'
    },
    href: '#/software',
    video: '/videos/software.mp4',
    cards: [
      {
        icon: Code2,
        title: 'New Project Development',
        text: 'Develop a new software product or service, ranging from mobile apps to complex cloud-based systems.'
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
    tagline: 'Driving Strategic Growth',
    label: 'Consultancy & Strategy',
    description: 'Our expert consultants provide strategic guidance to navigate complex business challenges. We analyze your current operations and provide actionable insights to optimize performance and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500',
      gradient: 'from-[#059669] via-[#10B981] to-[#34D399]',
      waveColor: 'rgba(16, 185, 129, 0.3)',
      plasmaColor: '#10B981'
    },
    href: '#/consultancy',
    video: '/videos/consultancy.mp4',
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
    tagline: 'Connecting Top Talent',
    label: 'Talent & Staffing',
    description: 'We connect you with top-tier talent to build high-performing teams. Whether you need temporary staffing or permanent placements, we find the right people with the right skills to fit your culture.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-purple-500',
      bg: 'bg-purple-500',
      gradient: 'from-[#7C3AED] via-[#A855F7] to-[#C084FC]',
      waveColor: 'rgba(168, 85, 247, 0.3)',
      plasmaColor: '#A855F7'
    },
    href: '#/talent',
    video: '/videos/talent.mp4',
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
    tagline: 'Crafting Visual Impact',
    label: 'Design & Creative',
    description: 'We craft compelling visual experiences that resonate with your audience. Our design team combines creativity with user-centric principles to build brands that stand out and products that people love.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-pink-500',
      bg: 'bg-pink-500',
      gradient: 'from-[#6366F1] via-[#D946EF] via-[#F43F5E] to-[#F59E0B]',
      waveColor: 'rgba(217, 70, 239, 0.3)',
      plasmaColor: '#EC4899'
    },
    href: '#/design',
    video: '/videos/design.mp4',
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
    tagline: 'Building Future Leaders',
    label: 'Ventures & Innovation',
    description: 'We partner with visionary founders to build the next generation of industry-leading companies. Our venture arm provides capital, mentorship, and operational support to turn bold ideas into reality.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-amber-500',
      bg: 'bg-amber-500',
      gradient: 'from-[#F59E0B] via-[#F97316] to-[#FACC15]',
      waveColor: 'rgba(245, 158, 11, 0.3)',
      plasmaColor: '#F59E0B'
    },
    href: '#/ventures',
    video: '/videos/ventures.mp4',
    cards: [
      {
        icon: Rocket,
        title: 'Startup Incubation',
        text: 'Nurture early-stage startups. We provide the resources and guidance needed to validate ideas and build an MVP.'
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
    tagline: 'Innovating Financial Systems',
    label: 'FinTech & Banking',
    description: 'We build secure and scalable financial technology solutions. From payment gateways to blockchain applications, we help you navigate the future of finance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-teal-500',
      bg: 'bg-teal-500',
      gradient: 'from-[#0D9488] via-[#06B6D4] to-[#10B981]',
      waveColor: 'rgba(13, 148, 136, 0.3)',
      plasmaColor: '#14B8A6'
    },
    href: '#/fintech',
    video: '/videos/fintech.mp4',
    cards: [
      {
        icon: Landmark,
        title: 'Digital Payments',
        text: 'Integrate seamless payment orchestrations and secure transaction gateways.'
      },
      {
        icon: Wallet,
        title: 'Blockchain Solutions',
        text: 'Architect decentralized applications and automated smart contracts.'
      },
      {
        icon: BarChart3,
        title: 'Financial Analytics',
        text: 'Build real-time visualization dashboards and ML-powered risk assessments.'
      }
    ]
  },
  {
    id: 'ai-analytics',
    tagline: 'Powering Intelligent Decisions',
    label: 'AI & Data Analytics',
    description: 'We harness the power of artificial intelligence and advanced analytics to transform raw data into intelligent outcomes. Our solutions enable predictive insights, process automation, and data-driven strategies that keep your business ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-indigo-500',
      bg: 'bg-indigo-500',
      gradient: 'from-[#4F46E5] via-[#6366F1] to-[#818CF8]',
      waveColor: 'rgba(79, 70, 229, 0.3)',
      plasmaColor: '#6366F1'
    },
    href: '#/ai-analytics',
    video: '/videos/ai.mp4',
    cards: [
      {
        icon: Brain,
        title: 'Machine Learning',
        text: 'Deploy custom ML models for prediction, classification, and automation tailored to your unique business needs.'
      },
      {
        icon: Database,
        title: 'Data Engineering',
        text: 'Build robust data pipelines and lakehouses that scale, ensuring your data is clean, accessible, and ready for analysis.'
      },
      {
        icon: Cpu,
        title: 'Applied AI',
        text: 'Integrate Large Language Models and computer vision into your existing workflows to enhance productivity and user experience.'
      }
    ]
  },
  {
    id: 'logistics',
    tagline: 'Precision Logistics & Fleet',
    label: 'Logistics & Fleet',
    description: 'We orchestrate complex supply chains with absolute precision. From international freight forwarding to last-mile delivery, our logistics solutions are engineered for speed, reliability, and full transparency.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=75&w=800&auto=format&fit=crop',
    theme: {
      text: 'text-cyan-500',
      bg: 'bg-cyan-500',
      gradient: 'from-[#06B6D4] via-[#22D3EE] to-[#0891B2]',
      waveColor: 'rgba(6, 182, 212, 0.3)',
      plasmaColor: '#06B6D4'
    },
    href: '#/logistics',
    video: '/videos/logistics.mp4',
    cards: [
      {
        icon: Truck,
        title: 'Freight Forwarding',
        text: 'Streamline international shipping via air, sea, and land with integrated customs clearance and real-time tracking.'
      },
      {
        icon: Box,
        title: 'Last-Mile Delivery',
        text: 'Deploy high-speed local fulfillment and fleet management systems optimized for the Middle East market.'
      },
      {
        icon: Settings,
        title: 'Supply Chain Optimization',
        text: 'Engineer advanced analytics and automated workflows to reduce lead times and operational overhead.'
      }
    ]
  }
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const activeService = services.find(s => s.id === activeTab) || services[0]

  return (
    <section className="py-12 md:py-24 bg-black text-white relative overflow-hidden min-h-0 md:min-h-[800px]">
      {/* Wavy Background - Dynamic color based on active service */}
      <WavyBackground color={activeService.theme.plasmaColor} className="opacity-20" />

      {/* Background Gradients (Standardized) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 design-grid opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-[0.3em] text-white/50 uppercase mb-3 text-center lg:text-left">Expertise</h2>
          <div className="flex justify-center lg:justify-start">
            <ScrollRevealText
              text="Explore our range of services"
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Tabs */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 lg:gap-6 justify-start scrollbar-none snap-x snap-mandatory mask-horizontal-scroll lg:[mask-image:none] lg:[-webkit-mask-image:none] relative z-20">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                onMouseEnter={() => prefetchPage(service.id)}
                className={`text-left text-base lg:text-xl font-bold transition-all duration-300 relative pl-0 lg:pl-6 py-3 px-4 lg:px-0 lg:py-2 group shrink-0 snap-align-start`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className={`absolute left-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 h-0.5 w-full lg:h-full lg:w-1.5 ${service.theme.bg} rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                    style={{ backgroundColor: service.theme.plasmaColor }}
                  />
                )}
                <span
                  className={`relative z-10 inline-block transition-colors duration-300 ${activeTab === service.id ? '' : 'text-white/30 group-hover:text-white/60'
                    }`}
                  style={{ color: activeTab === service.id ? service.theme.plasmaColor : undefined }}
                >
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
                    <div className="flex items-center justify-center w-full mb-16 px-4 md:px-0 relative group/card-area">
                      {/* Ambient Thematic Glow */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        key={`glow-${service.id}`}
                        className="absolute w-[80%] h-[80%] blur-[120px] rounded-full pointer-events-none opacity-20 transition-colors duration-1000"
                        style={{ backgroundColor: service.theme.plasmaColor }}
                      />

                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => prefetchPage(service.id)}
                        className="relative w-full max-w-4xl transition-transform duration-500 hover:scale-[1.02] block cursor-pointer group/card-link"
                      >
                        <TiltedCard
                          imageSrc={service.video ? undefined : service.image}
                          videoSrc={service.video}
                          altText={service.label}
                          captionText={service.tagline}
                          containerHeight="auto"
                          containerWidth="100%"
                          imageHeight="auto"
                          imageWidth="100%"
                          rotateAmplitude={10}
                          scaleOnHover={1.05}
                          showTooltip={true}
                          displayOverlayContent={true}
                          mediaClassName={service.id === 'talent' ? 'scale-[1.5]' : ''}
                          overlayContent={
                            <div className="relative w-full aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden group pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full flex flex-col items-center lg:items-start">
                                <motion.span
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-2"
                                >
                                  Service Excellence
                                </motion.span>
                                <motion.h3
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter drop-shadow-2xl uppercase text-white italic"
                                >
                                  {service.label}
                                </motion.h3>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "80px" }}
                                  className="h-1.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                                  style={{ backgroundColor: service.theme.plasmaColor }}
                                />
                              </div>
                            </div>
                          }
                        />

                        {/* Creative Corner Accents */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-2xl pointer-events-none transition-colors group-hover/card-link:border-white/40" />
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-2xl pointer-events-none transition-colors group-hover/card-link:border-white/40" />
                      </a>
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
                          className="bg-white/[0.04] border p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 group relative overflow-hidden"
                          style={{
                            boxShadow: `0 10px 30px -15px ${service.theme.plasmaColor}4d`,
                            borderColor: `${service.theme.plasmaColor}22`,
                          }}
                          whileHover={{
                            y: -5,
                            boxShadow: `0 20px 50px -15px ${service.theme.plasmaColor}66`,
                            borderColor: `${service.theme.plasmaColor}66`,
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                          }}
                        >
                          {/* Constant Background Glow with Pulse Effect */}
                          <motion.div
                            className="absolute -right-16 -top-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none z-0"
                            style={{ backgroundColor: service.theme.plasmaColor }}
                            animate={{
                              opacity: [0.15, 0.3, 0.15],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />

                          {/* Secondary Glow for Depth */}
                          <div
                            className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full blur-[60px] opacity-10 pointer-events-none z-0"
                            style={{ backgroundColor: service.theme.plasmaColor }}
                          />

                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                            <card.icon className="w-20 h-20 md:w-24 md:h-24" />
                          </div>

                          <div className="mb-6 md:mb-8 relative z-10">
                            <div
                              className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                              style={{
                                backgroundColor: `${service.theme.plasmaColor}22`,
                                borderColor: `${service.theme.plasmaColor}44`,
                                boxShadow: `0 0 20px ${service.theme.plasmaColor}33`,
                              }}
                            >
                              <card.icon
                                className="w-6 h-6 md:w-7 md:h-7 transition-colors duration-500"
                                style={{ color: service.theme.plasmaColor }}
                              />
                            </div>
                          </div>

                          <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 tracking-tight relative z-10 text-white transition-colors duration-300">
                            {card.title}
                          </h4>
                          <p className="text-white/50 leading-relaxed text-sm md:text-lg relative z-10 group-hover:text-white/80 transition-colors duration-500">
                            {card.text}
                          </p>

                          {/* Persistent Accent Line */}
                          <div
                            className="absolute bottom-0 left-0 h-[2px] w-full"
                            style={{
                              background: `linear-gradient(to right, ${service.theme.plasmaColor}, transparent)`,
                              opacity: 0.5,
                            }}
                          />

                          {/* Animated Hover Line Overlay */}
                          <div
                            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r transition-all duration-700 w-0 group-hover:w-full z-20"
                            style={{ backgroundImage: `linear-gradient(to right, ${service.theme.plasmaColor}, #fff, transparent)` }}
                          />
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


import { useState, useEffect } from "react";
import TiltedCard from "../../ui/tilted-card";
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, RefreshCw, Settings, Users, Lightbulb, Rocket, Monitor, Briefcase, Box, Landmark, BarChart3, Wallet, Brain, Database, Cpu, Truck } from 'lucide-react'
import { ScrollRevealText } from "../../ui/scroll-reveal-text";
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
      text: 'text-zinc-300',
      bg: 'bg-zinc-400',
      gradient: 'from-[#F4F4F5] via-[#A1A1AA] to-[#52525B]',
      waveColor: 'rgba(212, 212, 216, 0.3)',
      plasmaColor: '#D4D4D8'
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
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden min-h-0 md:min-h-[800px]">
      {/* Background Gradients (Standardized) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 design-grid opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-3 tracking-wide">
            <span>CORE CAPABILITIES</span>
          </div>
          <div className="flex justify-center lg:justify-start">
            <ScrollRevealText
              text="Specialized service practices"
              className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column: Tabs */}
          <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 lg:gap-3 justify-start scrollbar-none snap-x snap-mandatory relative z-20">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                onMouseEnter={() => prefetchPage(service.id)}
                className={`text-left text-sm lg:text-base font-medium transition-colors duration-200 relative pl-0 lg:pl-4 py-2.5 px-3 lg:px-0 group shrink-0 snap-align-start`}
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 h-0.5 w-full lg:h-5 lg:w-1 bg-white rounded-full"
                  />
                )}
                <span
                  className={`relative z-10 inline-block transition-colors duration-200 ${activeTab === service.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                >
                  {service.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-10"
                  >
                    <div className="flex items-center justify-start w-full mb-8 relative group/card-area">
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => prefetchPage(service.id)}
                        className="relative w-full block cursor-pointer group/card-link"
                      >
                        <TiltedCard
                          imageSrc={isMobile || !service.video ? service.image : undefined}
                          videoSrc={isMobile ? undefined : service.video}
                          altText={service.label}
                          captionText={service.tagline}
                          containerHeight="auto"
                          containerWidth="100%"
                          imageHeight="auto"
                          imageWidth="100%"
                          rotateAmplitude={4}
                          scaleOnHover={1.01}
                          showTooltip={false}
                          displayOverlayContent={true}
                          mediaClassName={service.id === 'talent' ? 'scale-[1.2]' : ''}
                          overlayContent={
                            <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden group pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                              <div className="absolute bottom-0 left-0 p-6 md:p-10 z-20 w-full flex flex-col items-start">
                                <span className="text-xs font-mono text-zinc-400 mb-2">
                                  {service.tagline}
                                </span>
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tight text-white">
                                  {service.label}
                                </h3>
                                <div className="h-0.5 w-12 bg-white/40 rounded-full" />
                              </div>
                            </div>
                          }
                        />
                      </a>
                    </div>

                    <div className="max-w-3xl text-left space-y-4">
                      <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                      {service.cards.map((card, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 + 0.2 }}
                          className="bg-zinc-950 border border-white/10 p-6 md:p-8 rounded-xl transition-colors duration-200 group relative overflow-hidden hover:border-white/20"
                        >
                          <div className="mb-6 relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                              <card.icon className="w-5 h-5" />
                            </div>
                          </div>

                          <h4 className="text-lg font-medium mb-2 tracking-tight relative z-10 text-white">
                            {card.title}
                          </h4>
                          <p className="text-zinc-400 leading-relaxed text-sm relative z-10">
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


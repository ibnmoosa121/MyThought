import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, RefreshCw, Settings, Users, Lightbulb, Rocket, Monitor, Briefcase, Box, Landmark, BarChart3, Wallet } from 'lucide-react'
import { ScrollRevealText } from "../../ui/scroll-reveal-text";

const services = [
  {
    id: 'software',
    label: 'Software & Technology',
    description: 'We drive digital transformation with innovative software solutions, empowering organizations with cutting-edge technology and seamless integration. From concept to implementation, we develop efficient software that unlocks new opportunities and unleashes your business\'s full potential.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    theme: { text: 'text-blue-500', bg: 'bg-blue-500' },
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
    label: 'Consultancy',
    description: 'Our expert consultants provide strategic guidance to navigate complex business challenges. We analyze your current operations and provide actionable insights to optimize performance and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    theme: { text: 'text-emerald-500', bg: 'bg-emerald-500' },
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
    theme: { text: 'text-purple-500', bg: 'bg-purple-500' },
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
    theme: { text: 'text-pink-500', bg: 'bg-pink-500' },
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
    label: 'Ventures',
    description: 'We partner with visionary founders to build the next generation of industry-leading companies. Our venture arm provides capital, mentorship, and operational support to turn bold ideas into reality.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    theme: { text: 'text-amber-500', bg: 'bg-amber-500' },
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
    label: 'FinTech',
    description: 'We build secure and scalable financial technology solutions. From payment gateways to blockchain applications, we help you navigate the future of finance.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    theme: { text: 'text-teal-500', bg: 'bg-teal-500' },
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

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background Gradients (Same as Hero) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Service</h2>
          <ScrollRevealText 
            text="Explore our range of services" 
            className="text-4xl md:text-5xl font-bold" 
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Tabs */}
          <div className="lg:w-1/4 flex flex-col gap-6">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left text-lg md:text-xl font-medium transition-all duration-300 relative pl-4 ${
                  activeTab === service.id
                    ? `${service.theme.text} scale-105 origin-left`
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === service.id && (
                    <motion.div 
                        layoutId="activeTabIndicator"
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 ${service.theme.bg} rounded-full`}
                    />
                )}
                {service.label}
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <img 
                            src={service.image} 
                            alt={service.label} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-3xl font-bold text-white mb-2">{service.label}</h3>
                            <div className={`h-1 w-20 ${service.theme.bg} rounded-full`} />
                        </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      {service.cards.map((card, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/50 transition-colors group"
                        >
                          <div className="mb-6">
                            <card.icon className={`w-10 h-10 ${service.theme.text} group-hover:scale-110 transition-transform`} />
                          </div>
                          <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                          <p className="text-gray-400 leading-relaxed">
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

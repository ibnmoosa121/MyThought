export type ServiceKey = 'software' | 'consultancy' | 'talent' | 'design' | 'ventures' | 'fintech'

export interface ServiceContent {
  key: ServiceKey
  title: string
  subtitle: string
  bullets: string[]
  bgImage: string
  cta: string
  theme: {
    text: string
    bg: string
    hoverBg: string
    hoverText: string
    gradient: string
    waveColor: string
    plasmaColor: string
  }
}

export const services: Record<ServiceKey, ServiceContent> = {
  software: {
    key: 'software',
    title: 'Software & Technology',
    subtitle: 'Custom development, Cloud & DevOps, and AI solutions',
    bullets: [
      'Web & Mobile product engineering',
      'Cloud & DevOps automation (CI/CD, IaC)',
      'AI/ML pipelines and data platforms',
      'Security, compliance, and observability',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1518770660431-4633f4f9de7b?q=80&w=2069&auto=format&fit=crop',
    cta: 'Build With Us',
    theme: {
      text: 'text-blue-500',
      bg: 'bg-blue-500',
      hoverBg: 'group-hover:bg-blue-500',
      hoverText: 'group-hover:text-blue-500',
      gradient: 'from-[#4F46E5] via-[#0EA5E9] to-[#22D3EE]',
      waveColor: 'rgba(59, 130, 246, 0.3)',
      plasmaColor: '#3B82F6',
    }
  },
  consultancy: {
    key: 'consultancy',
    title: 'Consultancy',
    subtitle: 'Dubai & KSA expansion, market entry, and operations',
    bullets: [
      'Market intelligence and strategy workshops',
      'Entity setup and compliance guidance',
      'Operations optimization and automation',
      'Partnership and ecosystem mapping',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2069&auto=format&fit=crop',
    cta: 'Consult With Us',
    theme: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500',
      hoverBg: 'group-hover:bg-emerald-500',
      hoverText: 'group-hover:text-emerald-500',
      gradient: 'from-[#059669] via-[#10B981] to-[#34D399]',
      waveColor: 'rgba(16, 185, 129, 0.3)',
      plasmaColor: '#10B981',
    }
  },
  talent: {
    key: 'talent',
    title: 'Talent & Staffing',
    subtitle: 'Connecting you with top-tier talent to build high-performing teams',
    bullets: [
      'Executive Search',
      'Team Augmentation',
      'Technical Recruiting',
      'Culture fit assessment',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    cta: 'Find Talent',
    theme: {
      text: 'text-purple-500',
      bg: 'bg-purple-500',
      hoverBg: 'group-hover:bg-purple-500',
      hoverText: 'group-hover:text-purple-500',
      gradient: 'from-[#7C3AED] via-[#A855F7] to-[#C084FC]',
      waveColor: 'rgba(168, 85, 247, 0.3)',
      plasmaColor: '#A855F7',
    }
  },
  design: {
    key: 'design',
    title: 'Design & Creative',
    subtitle: 'Growth campaigns, branding, and digital experiences',
    bullets: [
      'UI/UX design and prototyping',
      'Brand identity and visual systems',
      'Creative content production pipelines',
      'Performance marketing and analytics',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    cta: 'Create With Us',
    theme: {
      text: 'text-pink-500',
      bg: 'bg-pink-500',
      hoverBg: 'group-hover:bg-pink-500',
      hoverText: 'group-hover:text-pink-500',
      gradient: 'from-[#6366F1] via-[#D946EF] via-[#F43F5E] to-[#F59E0B]',
      waveColor: 'rgba(217, 70, 239, 0.3)',
      plasmaColor: '#EC4899',
    }
  },
  ventures: {
    key: 'ventures',
    title: 'Ventures',
    subtitle: 'Investing in and building the next generation of startups',
    bullets: [
      'Early-stage capital and strategic support',
      'Technical co-founder and product incubation',
      'Access to global network of partners',
      'Go-to-market acceleration',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1626013261137-ee9872e2fb00?q=80&w=2069&auto=format&fit=crop',
    cta: 'Partner With Us',
    theme: {
      text: 'text-amber-500',
      bg: 'bg-amber-500',
      hoverBg: 'group-hover:bg-amber-500',
      hoverText: 'group-hover:text-amber-500',
      gradient: 'from-[#F59E0B] via-[#F97316] to-[#FACC15]',
      waveColor: 'rgba(245, 158, 11, 0.3)',
      plasmaColor: '#F59E0B',
    }
  },
  fintech: {
    key: 'fintech',
    title: 'FinTech',
    subtitle: 'RegTech, Payments, and AI-driven financial products',
    bullets: [
      'Payment orchestration and compliance (PCI, AML)',
      'Ledger and reconciliation systems',
      'Risk scoring and fraud detection with ML',
      'Real-time dashboards and analytics',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    cta: 'Explore FinTech',
    theme: {
      text: 'text-teal-500',
      bg: 'bg-teal-500',
      hoverBg: 'group-hover:bg-teal-500',
      hoverText: 'group-hover:text-teal-500',
      gradient: 'from-[#0D9488] via-[#06B6D4] to-[#10B981]',
      waveColor: 'rgba(13, 148, 136, 0.3)',
      plasmaColor: '#14B8A6',
    }
  },
}

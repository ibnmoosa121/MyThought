export type ServiceKey = 'fintech' | 'hajjUmrah' | 'digitalMarketing' | 'businessConsultancy' | 'itCompany'

export interface ServiceContent {
  key: ServiceKey
  title: string
  subtitle: string
  bullets: string[]
  bgImage: string
  cta: string
}

export const services: Record<ServiceKey, ServiceContent> = {
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
  },
  hajjUmrah: {
    key: 'hajjUmrah',
    title: 'Hajj & Umrah',
    subtitle: 'Pilgrim services, logistics, and guided experiences',
    bullets: [
      'Booking flows with capacity management',
      'Itinerary planning and live updates',
      'Group coordination and communication tools',
      'Multi-language support and accessibility',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1626013261137-ee9872e2fb00?q=80&w=2069&auto=format&fit=crop',
    cta: 'Plan Your Journey',
  },
  digitalMarketing: {
    key: 'digitalMarketing',
    title: 'Digital Marketing',
    subtitle: 'Growth campaigns, content strategy, and analytics',
    bullets: [
      'Cross-platform campaign management',
      'SEO/SEM optimization with reporting',
      'Creative content production pipelines',
      'Performance tracking and A/B testing',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
    cta: 'Boost Your Growth',
  },
  businessConsultancy: {
    key: 'businessConsultancy',
    title: 'Business Consultancy',
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
  },
  itCompany: {
    key: 'itCompany',
    title: 'IT Solutions',
    subtitle: 'Cloud, AI, Mobile engineering and secure platforms',
    bullets: [
      'Cloud & DevOps automation (CI/CD, IaC)',
      'AI/ML pipelines and data platforms',
      'Web & Mobile product engineering',
      'Security, compliance, and observability',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1518770660431-4633f4f9de7b?q=80&w=2069&auto=format&fit=crop',
    cta: 'Build With Us',
  },
}
export type ServiceKey = 'softwareTech' | 'businessConsultancy' | 'fintech' | 'designCreative' | 'ventures' | 'digitalMarketing'

export interface ServiceContent {
  key: ServiceKey
  title: string
  subtitle: string
  bullets: string[]
  bgImage: string
  cta: string
}

export const services: Record<ServiceKey, ServiceContent> = {
  softwareTech: {
    key: 'softwareTech',
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
  designCreative: {
    key: 'designCreative',
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
  },
  digitalMarketing: {
    key: 'digitalMarketing',
    title: 'Digital Marketing',
    subtitle: 'Data-driven growth strategies and multi-channel campaigns',
    bullets: [
      'SEO & Content Strategy',
      'Social Media Management',
      'PPC & Performance Marketing',
      'Analytics & Conversion Optimization',
    ],
    bgImage:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2076&auto=format&fit=crop',
    cta: 'Grow With Us',
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
  },
}
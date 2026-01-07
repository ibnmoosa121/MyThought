/**
 * Main Content Component
 * 
 * This file contains the hero section with parallax effect
 */

// React import needed for JSX
import { HeroParallax } from "../ui/hero-parallax" // Hero parallax effect
import ContactForm from "../features/contact/contact-form"
import ClientsSection from "../features/clients/clients-section"
import CtaSection from "../features/cta/cta-section"


// Product data for the hero parallax
const products = [
  {
    title: "AI-Powered Solutions",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1976&auto=format&fit=crop"
  },
  {
    title: "Digital Transformation",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1972&auto=format&fit=crop"
  },
  {
    title: "Data Analytics",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Custom Software",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cybersecurity",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud Services",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mobile Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "UI/UX Design",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Blockchain Solutions",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop"
  },
  {
    title: "IoT Integration",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "DevOps Services",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AR/VR Experiences",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Enterprise Solutions",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "API Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    title: "Machine Learning",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
  }
];

// Main content component with hero section only
export const MainContent = () => {
  return (
    <main className="flex-1 text-white">
      <HeroParallax products={products} />
      <PortfolioShowcase />
      <ItCompanySection />
      <CtaSection />
      <ClientsSection />
      <ContactForm />
    </main>
  )
}

export default MainContent
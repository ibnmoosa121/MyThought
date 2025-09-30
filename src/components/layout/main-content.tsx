/**
 * Main Content Component
 * 
 * This file contains the hero section with parallax effect and MacbookScroll section
 */

// React import removed as it's not used in this file
import { HeroParallax } from "../ui/hero-parallax" // Hero parallax effect
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"
import { Zap, Target, Rocket, Users, Award, Globe } from "lucide-react"


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

// Timeline data for the radial orbital timeline
const timelineData = [
  {
    id: 1,
    title: "Project Discovery",
    date: "Week 1-2",
    content: "Understanding your business needs, goals, and technical requirements through comprehensive analysis.",
    category: "Planning",
    icon: Target,
    relatedIds: [2],
    status: "completed" as const,
    energy: 85
  },
  {
    id: 2,
    title: "Solution Design",
    date: "Week 3-4",
    content: "Creating detailed technical architecture and user experience designs tailored to your vision.",
    category: "Design",
    icon: Zap,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90
  },
  {
    id: 3,
    title: "Development Sprint",
    date: "Week 5-8",
    content: "Agile development process with regular updates and iterative improvements.",
    category: "Development",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 95
  },
  {
    id: 4,
    title: "Quality Assurance",
    date: "Week 9-10",
    content: "Comprehensive testing, performance optimization, and security validation.",
    category: "Testing",
    icon: Award,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 80
  },
  {
    id: 5,
    title: "Deployment & Launch",
    date: "Week 11-12",
    content: "Seamless deployment to production with monitoring and support setup.",
    category: "Launch",
    icon: Globe,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 88
  },
  {
    id: 6,
    title: "Ongoing Support",
    date: "Ongoing",
    content: "Continuous maintenance, updates, and feature enhancements as your business grows.",
    category: "Support",
    icon: Users,
    relatedIds: [5],
    status: "pending" as const,
    energy: 75
  }
];

// Main content component with hero section and MacbookScroll
export const MainContent = () => {
  return (
    <main className="flex-1">
      <HeroParallax products={products} />
      
      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From concept to launch, we follow a proven methodology that ensures your project's success at every stage.
            </p>
          </div>
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </section>
      
    </main>
  )
}

export default MainContent
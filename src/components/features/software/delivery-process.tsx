import { useState, useEffect } from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollRevealText } from "../../ui/scroll-reveal-text";

const steps = [
  {
    title: "Discovery",
    desc: "Requirements & Strategy",
    color: "bg-blue-500",
    tech: ["AI Consultation", "System Architecture", "OpenAI", "LangChain", "LLMs"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=75&w=1200&auto=format&fit=crop"
  },
  {
    title: "Design",
    desc: "UI/UX & Prototyping",
    color: "bg-purple-500",
    tech: ["Framer Motion", "GSAP", "Tailwind v4", "Interactive Prototypes"],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=75&w=1200&auto=format&fit=crop"
  },
  {
    title: "Development",
    desc: "Coding & Integration",
    color: "bg-indigo-500",
    tech: ["React 19", "Next.js", "Typescript", "Node.js", "Prisma", "GraphQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=1200&auto=format&fit=crop"
  },
  {
    title: "Testing",
    desc: "QA & Security Checks",
    tech: ["Automated QA", "PostgreSQL", "Redis", "VectorDB", "Load Testing"],
    color: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=75&w=1200&auto=format&fit=crop"
  },
  {
    title: "Launch",
    desc: "Deployment & Scale",
    color: "bg-emerald-500",
    tech: ["AWS", "Docker", "Kubernetes", "Vercel", "Terraform", "CI/CD"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop"
  },
];

export default function DeliveryProcess() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Slower interval to let the image be seen (2s is okay, maybe 2.5s)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden relative">
      {/* Background with Moving Grid and Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black">
        {/* Standardized Animated Grid */}
        <div className="absolute inset-0 design-grid opacity-[0.1]" />

        {/* Standardized Glow Orbs */}
        <div className="theme-glow absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10" />
        <div className="theme-glow absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 delay-700" />
      </div>

      <div className="container mx-auto px-4 pt-20 md:pt-32 text-center max-w-4xl relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Our Process</span>
        </div>
        <ScrollRevealText
          text="Transforming Concepts into Reality"
          className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight"
        />
        <ScrollRevealText
          text="We engineer success through a proven five-step methodology, bridging the gap between complex challenges and elegant, scalable solutions."
          className="text-lg md:text-2xl text-white/70 leading-relaxed mx-auto max-w-3xl"
          delay={0.2}
        />
      </div>
      <ContainerScroll
        titleComponent={null}
      >
        <div className="flex flex-col h-full w-full bg-base-100 p-4 rounded-2xl overflow-hidden">
          {/* Mock Dashboard Header */}
          <div className="flex items-center justify-between border-b border-base-300 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div className="w-3 h-3 rounded-full bg-success"></div>
            </div>
            <div className="text-sm font-medium text-base-content/60">Project Status: On Track</div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Left: Timeline List */}
            <div className="col-span-1 bg-base-200/50 rounded-xl p-6 overflow-hidden flex flex-col relative order-2 md:order-1">
              <h3 className="font-semibold mb-6 flex items-center gap-2 z-10">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Live Project Tracker
              </h3>

              <div className="flex-1 relative flex flex-col justify-center space-y-4 z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0.4,
                      x: activeStep === index ? 10 : 0,
                      scale: activeStep === index ? 1.05 : 1,
                      backgroundColor: activeStep === index ? "var(--bg-base-100)" : "transparent"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-300 ${activeStep === index ? "bg-base-100 shadow-md border-l-4 border-primary" : "bg-transparent"
                      }`}
                  >
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${activeStep >= index ? step.color : "bg-gray-300"}`} />
                      {index < steps.length - 1 && (
                        <div className={`absolute top-3 left-1.5 w-0.5 h-full -mb-3 ${activeStep > index ? "bg-gray-400" : "bg-gray-200"}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold ${activeStep === index ? "text-primary" : "text-base-content"}`}>{step.title}</h4>
                      <p className="text-xs text-base-content/70">{step.desc}</p>
                    </div>
                    {activeStep === index && (
                      <motion.div
                        layoutId="active-arrow"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-1 w-full bg-base-300 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Right: Active Stage Preview (Image) */}
            <div className="col-span-1 md:col-span-2 relative rounded-xl overflow-hidden shadow-2xl order-1 md:order-2 bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${steps[activeStep].color}`}>
                        Step {activeStep + 1}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {steps[activeStep].title}
                      </h2>
                      <p className="text-white/80 text-lg max-w-lg mb-6">
                        {steps[activeStep].desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {steps[activeStep].tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-md text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

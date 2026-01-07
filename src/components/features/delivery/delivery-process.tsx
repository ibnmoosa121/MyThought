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
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Design", 
    desc: "UI/UX & Prototyping", 
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Development", 
    desc: "Coding & Integration", 
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Testing", 
    desc: "QA & Security Checks", 
    color: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Launch", 
    desc: "Deployment & Scale", 
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
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
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 pt-10 md:pt-20 text-center max-w-4xl relative z-10">
        <ScrollRevealText
          text="Transforming Concepts into Reality"
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mx-auto"
        />
        <ScrollRevealText
          text="We don't just build software; we engineer success. Our proven methodology ensures that every line of code contributes to your business goals, bridging the gap between complex challenges and elegant solutions."
          className="text-lg md:text-xl text-base-content/80 leading-relaxed mx-auto"
          delay={0.2}
        />
      </div>
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
             <ScrollRevealText
               text="Deliver Results with"
               className="text-4xl font-semibold text-black dark:text-white"
             />
             <ScrollRevealText
               text="Precision & Speed"
               className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black dark:text-white"
               delay={0.3}
             />
          </div>
        }
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
                    className={`flex items-center gap-4 p-3 rounded-lg transition-colors duration-300 ${
                      activeStep === index ? "bg-base-100 shadow-md border-l-4 border-primary" : "bg-transparent"
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
                        <p className="text-white/80 text-lg max-w-lg">
                            {steps[activeStep].desc}
                        </p>
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

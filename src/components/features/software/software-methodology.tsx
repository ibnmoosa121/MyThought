"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We begin with deep market analysis and technical feasibility studies to align your vision with scalable architecture."
    },
    {
        number: "02",
        title: "User-Centric Design",
        description: "Creating intuitive UI/UX prototypes that map the user journey and ensure seamless interaction."
    },
    {
        number: "03",
        title: "Agile Engineering",
        description: "Iterative development sprints with bi-weekly deliverables, ensuring transparency and adaptability."
    },
    {
        number: "04",
        title: "Rigorous QA Testing",
        description: "Comprehensive automated and manual testing cycles to guarantee performance, security, and bug-free code."
    },
    {
        number: "05",
        title: "DevOps Deployment",
        description: "Automated CI/CD pipelines for zero-downtime releases and robust cloud infrastructure setup."
    },
    {
        number: "06",
        title: "Evolution & Support",
        description: "Continuous monitoring, feature enhancements, and proactive maintenance to scale with your growth."
    }
];

export const SoftwareMethodology = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Methodology
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white uppercase italic tracking-tighter"
                    >
                        From vision to reality
                    </motion.h2>
                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
                        Innovative strategic approach that transforms your business through technology,
                        high-quality solutions, and continuous support. We follow a detailed roadmap
                        from concept to implementation.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800/50 transform md:-translate-x-1/2">
                        <motion.div
                            className="absolute top-0 bottom-0 w-full bg-primary origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            style={{ scaleY }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Step Point */}
                                <div className="absolute left-[10px] md:left-1/2 top-0 md:top-auto w-5 h-5 rounded-full bg-zinc-900 border-2 border-primary transform md:-translate-x-1/2 z-20" />

                                {/* Number - Large and Bold */}
                                <div className={`absolute left-[-40px] md:left-1/2 top-[-10px] md:top-1/2 text-8xl font-black text-white/5 transform md:-translate-x-1/2 md:-translate-y-1/2 z-0 pointer-events-none select-none`}>
                                    {step.number}
                                </div>

                                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-left md:mr-[55%]" : "md:text-right md:ml-[55%]"}`}>
                                    <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs mb-3 uppercase tracking-widest`}>
                                        {step.title}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

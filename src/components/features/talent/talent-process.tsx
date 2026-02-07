"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, UserPlus, Filter, Rocket, Activity, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Needs Assessment",
        desc: "Deep dive into your operational requirements, sector challenges, and team culture to identify the perfect profile.",
        icon: Search
    },
    {
        title: "Omni-Sector Sourcing",
        desc: "Leveraging our 25-year network to find vetted talent across tech, logistics, and retail who deliver results.",
        icon: UserPlus
    },
    {
        title: "Rigorous Vetting",
        desc: "Multi-stage assessments and background checks tailored to each sector to ensure 100% compliance and skill match.",
        icon: Filter
    },
    {
        title: "Rapid Onboarding",
        desc: "Handling logistics, visas, and legal integration to get your new team members productive from day one.",
        icon: Rocket
    },
    {
        title: "Performance Management",
        desc: "Ongoing support and performance tracking to ensure continued excellence across your entire workforce.",
        icon: Activity
    },
    {
        title: "Workforce Secured",
        desc: "Your operation scaled with precision. Vision and execution bridged perfectly across all sectors.",
        icon: CheckCircle2
    }
];

export const TalentProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!pathRef.current || !containerRef.current) return;

        const path = pathRef.current;
        const length = path.getTotalLength();

        // Initialize path
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        // Animate path on scroll
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "bottom 80%",
                scrub: 1,
            }
        });

        // Animate steps
        stepsRef.current.forEach((step) => {
            if (!step) return;

            gsap.fromTo(step,
                { opacity: 0, x: 50, rotateY: 45 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden min-h-screen">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-12">

                {/* Sticky Left Content */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-20 md:mb-0">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Success Blueprint
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.8]">
                        Seamless <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">Workforce</span> <br />
                        Integration
                    </h2>
                    <p className="mt-8 text-zinc-500 max-w-sm text-lg font-medium">
                        Our six-step methodology ensures zero friction between hiring and execution. Engineered for the Gulf market.
                    </p>
                </div>

                {/* Vertical Scroll Steps */}
                <div className="md:w-2/3 relative pl-8 md:pl-20 py-10">
                    {/* Glowing SVG Connector Path */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 h-full flex justify-center py-20">
                        <svg
                            ref={svgRef}
                            width="2"
                            height="100%"
                            viewBox="0 0 2 1000"
                            fill="none"
                            className="h-full overflow-visible"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M1 0V1000"
                                stroke="#1F2937"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                ref={pathRef}
                                d="M1 0V1000"
                                stroke="#A855F7"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                            />
                        </svg>
                    </div>

                    <div className="space-y-32">
                        {PROCESS_STEPS.map((step, i) => (
                            <div
                                key={step.title}
                                ref={el => { stepsRef.current[i] = el; }}
                                className="relative perspective-1000"
                            >
                                {/* Connector Dot */}
                                <div className="absolute -left-8 md:-left-20 top-4 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 z-10 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)]"
                                    />
                                </div>

                                <div className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-purple-500/20 transition-colors group backdrop-blur-3xl">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-purple-500 group-hover:text-black transition-all duration-500">
                                            <step.icon size={32} />
                                        </div>
                                        <div className="text-zinc-500 font-black text-4xl italic opacity-20">0{i + 1}</div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-4 group-hover:text-purple-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

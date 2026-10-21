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

        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const pathTween = gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 20%",
                end: "bottom 80%",
                scrub: 1,
            }
        });

        const stepTweens = stepsRef.current.map((step) => {
            if (!step) return null;

            return gsap.fromTo(step,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        return () => {
            pathTween.scrollTrigger?.kill();
            pathTween.kill();
            stepTweens.forEach(t => {
                t?.scrollTrigger?.kill();
                t?.kill();
            });
        };
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 bg-transparent overflow-hidden min-h-screen">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-12">

                {/* Sticky Left Content */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-20 md:mb-0">
                    <div className="p-8 rounded-[2rem] bg-white/75 backdrop-blur-md border border-zinc-900/10 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-zinc-500 font-mono font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
                        >
                            02 // Success Blueprint
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-zinc-950 italic uppercase tracking-tighter leading-[0.85]">
                            Seamless <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">
                                Workforce
                            </span>{" "}
                            <br />
                            Integration
                        </h2>
                        <p className="mt-6 text-zinc-600 text-base md:text-lg font-medium leading-relaxed">
                            Our six-step methodology ensures zero friction between hiring and execution. Engineered for the Gulf market.
                        </p>
                    </div>
                </div>

                {/* Vertical Scroll Steps */}
                <div className="md:w-2/3 relative pl-8 md:pl-20 py-10">
                    {/* Architectural Ink Connector Path */}
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
                                stroke="rgba(9,9,11,0.14)"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                ref={pathRef}
                                d="M1 0V1000"
                                stroke="#09090B"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_8px_rgba(9,9,11,0.25)]"
                            />
                        </svg>
                    </div>

                    <div className="space-y-24">
                        {PROCESS_STEPS.map((step, i) => (
                            <div
                                key={step.title}
                                ref={el => { stepsRef.current[i] = el; }}
                                className="relative"
                            >
                                {/* Connector Dot */}
                                <div className="absolute -left-8 md:-left-20 top-8 w-4 h-4 rounded-full bg-[#ECECE8] border-2 border-zinc-900 z-10 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        className="w-1.5 h-1.5 rounded-full bg-zinc-950"
                                    />
                                </div>

                                <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/80 hover:bg-zinc-950 border border-zinc-900/10 hover:border-zinc-900 transition-all duration-500 group backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
                                    <div className="flex items-center justify-between gap-6 mb-6">
                                        <div className="p-4 rounded-2xl bg-zinc-950 text-white group-hover:bg-white group-hover:text-zinc-950 transition-all duration-500 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                                            <step.icon size={30} />
                                        </div>
                                        <div className="text-zinc-900/15 group-hover:text-white/15 font-black text-5xl italic transition-colors">
                                            0{i + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-zinc-950 group-hover:text-white italic uppercase tracking-tighter mb-3 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-600 group-hover:text-zinc-300 text-lg leading-relaxed transition-colors">
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

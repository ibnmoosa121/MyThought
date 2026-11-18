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
        desc: "We align on your operational requirements, headcount targets, and site timelines to define the exact candidate profile.",
        icon: Search
    },
    {
        title: "Cross-Sector Sourcing",
        desc: "Drawing on our 25-year network to source vetted talent across logistics, engineering, and retail.",
        icon: UserPlus
    },
    {
        title: "Rigorous Vetting",
        desc: "Role-specific assessments, document verification, and background checks to ensure readiness and regulatory compliance.",
        icon: Filter
    },
    {
        title: "Rapid Onboarding",
        desc: "Managing mobilization, visas, and contracts so your new hires are productive from day one.",
        icon: Rocket
    },
    {
        title: "Performance Management",
        desc: "Ongoing attendance, payroll, and field supervision to keep retention and output steady.",
        icon: Activity
    },
    {
        title: "Ongoing Operations",
        desc: "Dedicated account support and capacity scaling as your regional operations expand.",
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
        <section ref={containerRef} className="relative py-24 md:py-32 bg-transparent overflow-hidden min-h-screen">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row gap-12">

                {/* Sticky Left Content */}
                <div className="md:w-1/3 md:sticky md:top-32 h-fit mb-12 md:mb-0">
                    <div className="p-6 md:p-8 rounded-2xl bg-white/45 backdrop-blur-md border border-zinc-900/10">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-zinc-500 font-mono text-xs mb-3 block"
                        >
                            02 // Deployment flow
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-zinc-950 tracking-tight leading-tight">
                            Workforce{" "}
                            <span className="text-zinc-600">
                                integration
                            </span>
                        </h2>
                        <p className="mt-4 text-zinc-600 text-base leading-relaxed">
                            Six structured stages from role intake to compliant on-site deployment across the Gulf.
                        </p>
                    </div>
                </div>

                {/* Vertical Scroll Steps */}
                <div className="md:w-2/3 relative pl-8 md:pl-16 py-6">
                    {/* Architectural Ink Connector Path */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 h-full flex justify-center py-16">
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
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="space-y-12">
                        {PROCESS_STEPS.map((step, i) => (
                            <div
                                key={step.title}
                                ref={el => { stepsRef.current[i] = el; }}
                                className="relative"
                            >
                                {/* Connector Dot */}
                                <div className="absolute -left-8 md:-left-16 top-7 w-3.5 h-3.5 rounded-full bg-[#ECECE8] border-2 border-zinc-900 z-10 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                                </div>

                                <div className="p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/45 hover:bg-zinc-950/85 border border-zinc-900/10 hover:border-zinc-900 transition-colors duration-200 group backdrop-blur-md">
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-zinc-950 text-white group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-200">
                                            <step.icon size={22} strokeWidth={1.75} />
                                        </div>
                                        <div className="text-zinc-900/20 group-hover:text-white/20 font-mono text-2xl tabular-nums transition-colors">
                                            0{i + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-950 group-hover:text-white tracking-tight mb-2 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-600 group-hover:text-zinc-300 text-sm md:text-base leading-relaxed transition-colors">
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

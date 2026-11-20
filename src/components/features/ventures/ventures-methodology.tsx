"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Target, PieChart, Users2, Box, MessageSquare, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const METHODOLOGY_STEPS = [
    {
        title: "Thesis & Discovery",
        desc: "Evaluate the core problem, market timing, and unit economics before committing build resources.",
        icon: Compass
    },
    {
        title: "Strategic Alignment",
        desc: "Define equity structure, operational scope, and how Stebup's engineering and regional network accelerate execution.",
        icon: Target
    },
    {
        title: "Investment Evaluation",
        desc: "Review capital requirements, milestone triggers, and commercial feasibility against syndicate criteria.",
        icon: PieChart
    },
    {
        title: "Operator Pairing",
        desc: "Match founders with domain advisors and technical leads who have shipped in regional markets.",
        icon: Users2
    },
    {
        title: "Resource Mobilization",
        desc: "Deploy capital, embedded engineering teams, and initial commercial introductions across the GCC.",
        icon: Box
    },
    {
        title: "Active Governance",
        desc: "Structured monthly reviews, customer pipeline support, and follow-on fundraising preparation.",
        icon: MessageSquare
    },
    {
        title: "Scale & Iteration",
        desc: "Refine product-market fit using live customer telemetry and prepare the venture for Series A readiness.",
        icon: Repeat
    }
];

export const VenturesMethodology = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            stepsRef.current.forEach((step) => {
                if (!step) return;
                gsap.fromTo(
                    step,
                    { opacity: 0, y: 24 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                            once: true
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <span className="text-amber-500 font-mono text-xs mb-3 block">
                        02 // Venture lifecycle
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                        From concept to{" "}
                        <span className="text-amber-500">operating asset</span>
                    </h2>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                        A seven-stage process designed to de-risk early execution and shorten the path to regional market traction.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    <div className="space-y-8 md:space-y-0">
                        {METHODOLOGY_STEPS.map((step, i) => (
                            <div
                                key={step.title}
                                ref={el => { stepsRef.current[i] = el; }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-0 md:mb-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Step Number Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border border-amber-500/40 flex items-center justify-center z-10 hidden md:flex">
                                    <span className="text-amber-500 font-mono text-xs tabular-nums">0{i + 1}</span>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div
                                        className={`p-6 md:p-8 rounded-xl bg-black border border-white/10 hover:border-amber-500/30 transition-colors duration-200 group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                    >
                                        <div className={`flex items-center gap-4 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center shrink-0">
                                                <step.icon size={17} strokeWidth={1.75} />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Spacer for Grid feel */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

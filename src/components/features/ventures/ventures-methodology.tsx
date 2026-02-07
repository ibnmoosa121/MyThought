"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Target, PieChart, Users2, Box, MessageSquare, Repeat } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const METHODOLOGY_STEPS = [
    {
        title: "Vision Exploration",
        desc: "Delve into your startup's core, understanding its mission, goals, and unique selling points.",
        icon: Compass
    },
    {
        title: "Strategic Alignment",
        desc: "Identify how our expertise can complement your venture's trajectory, ensuring mutual growth and benefit.",
        icon: Target
    },
    {
        title: "Investment Evaluation",
        desc: "Assess the stability, potential ROI, and alignment of your startup with our investment goals and criteria.",
        icon: PieChart
    },
    {
        title: "Mentor Matchmaking",
        desc: "Pair you up with the right mentors from our network, ensuring relevant support and industry insights.",
        icon: Users2
    },
    {
        title: "Resource Mobilization",
        desc: "Streamline the access to resources required, be it financial backing, technology tools, or network alliances.",
        icon: Box
    },
    {
        title: "Continuous Engagement",
        desc: "Stay connected through our knowledge-sharing sessions, networking events, and periodic reviews to ensure aligned growth.",
        icon: MessageSquare
    },
    {
        title: "Feedback & Iteration",
        desc: "Encourage a loop of feedback and iteration, refining strategies and adapting to the dynamic market landscape.",
        icon: Repeat
    }
];

export const VenturesMethodology = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        stepsRef.current.forEach((step, i) => {
            if (!step) return;
            gsap.fromTo(step,
                { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Our Methodology
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight mb-8">
                        From <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Ideas</span> to Operational Assets
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl font-medium">
                        Nurturing ideas into scalable ventures, guiding innovators every step of the way.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-orange-500/50 to-transparent hidden md:block" />

                    <div className="space-y-24 md:space-y-0">
                        {METHODOLOGY_STEPS.map((step, i) => (
                            <div
                                key={step.title}
                                ref={el => { stepsRef.current[i] = el; }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-0 md:mb-32 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Step Number/Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border-2 border-amber-500/30 flex items-center justify-center z-10 hidden md:flex">
                                    <span className="text-amber-500 font-black italic">0{i + 1}</span>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className={`p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl hover:border-amber-500/30 transition-all duration-500 group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                    >
                                        <div className={`flex items-center gap-6 mb-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                                <step.icon size={28} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{step.title}</h3>
                                        </div>
                                        <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-200 transition-colors">
                                            {step.desc}
                                        </p>
                                    </motion.div>
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

"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Search, CheckCircle2, Zap, Truck, ShoppingBag, Coffee } from "lucide-react";
import gsap from "gsap";
import { services } from "../../../data/services";
import { WavyBackground } from "../../ui/wavy-background";

const SKILLS = [
    { icon: Cpu, label: "Tech & AI", color: "text-[#A855F7]" },
    { icon: Truck, label: "Logistics", color: "text-[#EF4444]" },
    { icon: ShoppingBag, label: "Retail", color: "text-[#F59E0B]" },
    { icon: Coffee, label: "Hospitality", color: "text-[#10B981]" },
];

const METRICS = [
    { label: "Talent Network", value: "50k+" },
    { label: "Sectors Served", value: "12+" },
    { label: "Deployment Speed", value: "7 Days" },
];

export const TalentHero = () => {
    const service = services.talent;
    const coreRef = useRef<HTMLDivElement>(null);
    const streamRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Core Pulsing & Rotation
        gsap.to(coreRef.current, {
            rotate: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
        });

        // Continuous Talent Stream Animation
        const nodes = streamRef.current?.querySelectorAll(".talent-node");
        nodes?.forEach((node, i) => {
            gsap.set(node, { x: -200, opacity: 0, scale: 0.5 });

            gsap.to(node, {
                x: 800,
                duration: 4,
                delay: i * 1,
                repeat: -1,
                ease: "none",
                onStart: () => { gsap.set(node, { opacity: 0 }); },
                onUpdate: function () {
                    const progress = this.progress();
                    // Fade in/out logic
                    if (progress < 0.2) gsap.set(node, { opacity: progress * 5, scale: 0.5 + (progress * 2.5) });
                    else if (progress > 0.8) gsap.set(node, { opacity: (1 - progress) * 5 });
                    else gsap.set(node, { opacity: 1, scale: 1 });
                }
            });
        });

        // Metrics stagger
        gsap.fromTo(metricsRef.current?.children || [],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, delay: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <WavyBackground color={service.theme.plasmaColor} className="opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 blur-[150px] rounded-full animate-pulse" />
            </div>

            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">

                {/* Visual Centerpiece: The Talent DNA / Core */}
                <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] mb-12 flex items-center justify-center">

                    {/* Artistic Core */}
                    <div ref={coreRef} className="relative w-48 h-48 md:w-72 md:h-72">
                        <div className="absolute inset-0 border-2 border-purple-500/30 rounded-[3rem] animate-ping" />
                        <div className="absolute inset-4 border-2 border-fuchsia-500/50 rounded-[2.5rem] rotate-45" />
                        <div className="absolute inset-8 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-full blur-2xl opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Zap size={64} className="text-white animate-pulse" />
                        </div>
                    </div>

                    {/* Kinetic Stream (Nodes flying from left to center) */}
                    <div ref={streamRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...SKILLS, ...SKILLS].map((skill, i) => (
                            <div
                                key={i}
                                className="talent-node absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md flex items-center gap-3"
                            >
                                <skill.icon size={20} className={skill.color} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">{skill.label}</span>
                                <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
                            </div>
                        ))}
                    </div>

                    {/* Floating HUD Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-10 right-10 md:right-40 p-4 border border-white/5 bg-white/5 backdrop-blur-xl rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Search size={14} className="text-purple-400" />
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400">Global Scan Active</span>
                        </div>
                        <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="h-full w-1/2 bg-purple-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute bottom-10 left-10 md:left-40 p-4 border border-white/5 bg-white/5 backdrop-blur-xl rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400">Vetting Complete</span>
                        </div>
                        <p className="text-sm font-black text-white italic">MATCH FOUND</p>
                    </motion.div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-6 block"
                    >
                        Bridging Vision & Execution
                    </motion.span>

                    <h1 className="text-6xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-8">
                        Elite <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">Talent</span> Stream
                    </h1>

                    <p className="text-zinc-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-16">
                        {service.subtitle}. From specialized tech squads to high-volume operational teams. <br />
                        <span className="text-white italic">Source. Deploy. Scale.</span>
                    </p>

                    {/* Auto-Updating Metrics Bar */}
                    <div ref={metricsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
                        {METRICS.map((metric) => (
                            <div key={metric.label} className="flex flex-col items-center">
                                <span className="text-4xl md:text-6xl font-black italic text-white mb-2 leading-none">{metric.value}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
};

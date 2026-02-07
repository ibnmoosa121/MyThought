"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const consultants = [
    {
        id: "cap",
        name: "Human Capital",
        specialty: "TALENT ORCHESTRATION",
        image: "/assets/images/gulf-human-capital.png",
        color: "#10B981", // Islamic Emerald
        keyword: "STRATEGY"
    },
    {
        id: "ops",
        name: "Sovereign Ops",
        specialty: "STRATEGIC ADVISORY",
        image: "/assets/images/gulf-sovereign-ops.png",
        color: "#004D40", // Islamic Emerald
        keyword: "INSIGHT"
    },
    {
        id: "reg",
        name: "Institutional Reg",
        specialty: "GOVERNANCE & RISK",
        image: "/assets/images/gulf-institutional-reg.png",
        color: "#34D399", // Light Emerald
        keyword: "COMPLY"
    },
    {
        id: "dig",
        name: "Digital Frontier",
        specialty: "TRANSFORMATION",
        image: "/assets/images/gulf-digital-frontier.png",
        color: "#14B8A6", // Teal
        keyword: "EVOLVE"
    },
    {
        id: "exp",
        name: "Regional Growth",
        specialty: "MARKET ASCENSION",
        image: "/assets/images/gulf-regional-growth.png",
        color: "#059669",
        keyword: "EXPAND"
    }
];

export const ConsultancyHero = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(`${id}-details`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col pt-24">
            {/* Background Texture & Pattern */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black" />
                <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                {/* Subtle Arabesque Pattern Mask */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] scale-50" />

                {/* Main Hero Image with Gradient Mask */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src="/assets/images/gulf-hero-new.png"
                        alt="Gulf Professionalism"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black pointer-events-none" />
            </div>

            {/* Floating Title (Large low-opacity background text) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: hoveredId ? 0.08 : 0.04,
                        scale: hoveredId ? 1.05 : 1,
                        y: hoveredId ? -20 : 0
                    }}
                    className="text-[25vw] font-black italic uppercase leading-none tracking-tighter text-[#10B981] whitespace-nowrap blur-[2px] opacity-20"
                >
                    {hoveredId ? consultants.find(c => c.id === hoveredId)?.keyword : "CONSULT"}
                </motion.h2>
            </div>

            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-between py-12">
                <div className="max-w-4xl mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#10B981]/30 text-[#10B981] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm`}
                    >
                        Regional Advisory
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-7xl md:text-[9rem] font-black text-white italic uppercase leading-[0.8] md:leading-[0.75] tracking-tighter mb-4"
                    >
                        Gulf <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399] animate-gradient-x bg-[length:200%_auto]">Advisory</span>
                    </motion.h1>
                </div>

                {/* The Grid of Shadows */}
                <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-8 mb-12 md:mb-0">
                    {consultants.map((consultant, idx) => (
                        <motion.div
                            key={consultant.id}
                            onMouseEnter={() => setHoveredId(consultant.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => scrollToSection(consultant.id)}
                            className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 transition-colors bg-zinc-950/50 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Inner Glow when hovered */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl pointer-events-none"
                                style={{ backgroundColor: consultant.color }}
                            />

                            {/* The Image (Shadow by default) */}
                            <div className="absolute inset-0 w-full h-full">
                                <motion.img
                                    src={consultant.image}
                                    alt={consultant.name}
                                    className="w-full h-full object-cover grayscale brightness-0 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                            </div>

                            {/* The Essence Text */}
                            <div className="absolute bottom-6 left-6 right-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <motion.span
                                    className="block text-[10px] font-black uppercase tracking-[0.4em] mb-1"
                                    style={{ color: consultant.color }}
                                >
                                    {consultant.specialty}
                                </motion.span>
                                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">
                                    {consultant.name}
                                </h3>
                            </div>

                            {/* Parallax Depth Keyword */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <span className="text-8xl font-black text-white/5 uppercase tracking-tighter scale-150 rotate-[-10deg]">
                                    {consultant.keyword}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
        </section>
    );
};


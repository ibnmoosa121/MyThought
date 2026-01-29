"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const consultants = [
    {
        id: "hr",
        name: "Human Capital",
        specialty: "HR STRATEGY",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
        color: "#3b82f6",
        keyword: "RECRUIT"
    },
    {
        id: "finance",
        name: "Financial Ops",
        specialty: "GLOBAL FINANCE",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
        color: "#10b981",
        keyword: "PROFIT"
    },
    {
        id: "legal",
        name: "Legal Arch",
        specialty: "COMPLIANCE",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
        color: "#f59e0b",
        keyword: "COMPLY"
    },
    {
        id: "tech",
        name: "Digital Strategy",
        specialty: "TRANSFORMATION",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200&auto=format&fit=crop",
        color: "#6366f1",
        keyword: "EVOLVE"
    },
    {
        id: "market",
        name: "Global Growth",
        specialty: "EXPANSION",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
        color: "#f43f5e",
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
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,34,34,1)_0%,rgba(0,0,0,1)_100%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-30" />
            </div>

            {/* Floating Title (Large low-opacity background text) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: hoveredId ? 0.05 : 0.02,
                        scale: hoveredId ? 1.1 : 1,
                        y: hoveredId ? -20 : 0
                    }}
                    className="text-[30vw] font-black italic uppercase leading-none tracking-tighter text-white whitespace-nowrap"
                >
                    {hoveredId ? consultants.find(c => c.id === hoveredId)?.keyword : "shadows"}
                </motion.h2>
            </div>

            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-between py-12">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-4`}
                    >
                        Wall of Shadows
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.85] tracking-tighter mb-4"
                    >
                        Expertise <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">In Contrast</span>
                    </motion.h1>
                </div>

                {/* The Grid of Shadows */}
                <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                    {consultants.map((consultant) => (
                        <motion.div
                            key={consultant.id}
                            onMouseEnter={() => setHoveredId(consultant.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => scrollToSection(consultant.id)}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 hover:border-white/20 transition-colors bg-zinc-950/50"
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


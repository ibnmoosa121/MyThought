"use client";

import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { services } from "../../../data/services";
import { Globe, Lock, BarChart3, Database, Cpu, Layers, ArrowRight } from "lucide-react";

export const FintechHero = () => {
    const service = services.fintech;

    const backgroundIcons = [
        { Icon: Globe, size: 80, x: "10%", y: "15%", duration: 25 },
        { Icon: Lock, size: 60, x: "85%", y: "20%", duration: 18 },
        { Icon: BarChart3, size: 90, x: "15%", y: "70%", duration: 28 },
        { Icon: Database, size: 70, x: "80%", y: "75%", duration: 22 },
        { Icon: Cpu, size: 50, x: "50%", y: "10%", duration: 15 },
        { Icon: Layers, size: 100, x: "40%", y: "85%", duration: 32 },
    ];

    const brands = [
        { name: "AlJazira", logo: "AlJazira" },
        { name: "SAMA", logo: "SAMA" },
        { name: "StcPay", logo: "stc pay" },
        { name: "NeoBank", logo: "NeoBank" },
        { name: "Swift", logo: "SWIFT" },
        { name: "Visa", logo: "VISA" },
    ];

    return (
        <section
            className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black font-['Inter']"
            role="banner"
            aria-label="Fintech Hero section"
        >
            {/* Digital Grid Background - Minimal & Fintech */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(${service.theme.plasmaColor}11 1px, transparent 1px), linear-gradient(90deg, ${service.theme.plasmaColor}11 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Moving Background Icons - Always Engaged */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10" aria-hidden="true">
                {backgroundIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-teal-500"
                        style={{ left: item.x, top: item.y }}
                        animate={{
                            x: [0, 60, -60, 0],
                            y: [0, -60, 60, 0],
                            rotate: [0, 360],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <item.Icon size={item.size} strokeWidth={0.5} />
                    </motion.div>
                ))}
            </div>

            {/* Creative Data Streams / Scanning Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px w-full bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
                        initial={{ top: `${i * 25}%`, left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                        }}
                    />
                ))}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`v-${i}`}
                        className="absolute w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent"
                        initial={{ left: `${i * 20 + 10}%`, top: "-100%" }}
                        animate={{ top: "100%" }}
                        transition={{
                            duration: 8 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.5
                        }}
                    />
                ))}

                {/* Glowing Nodes (Fixed position, pulse animation) */}
                {[
                    { x: "15%", y: "25%" },
                    { x: "85%", y: "40%" },
                    { x: "20%", y: "75%" },
                    { x: "75%", y: "80%" }
                ].map((pos, i) => (
                    <motion.div
                        key={`node-${i}`}
                        className="absolute w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_15px_#14B8A6]"
                        style={{ left: pos.x, top: pos.y }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center max-w-5xl"
                >
                    {/* Badge - Minimalist Terminal Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="px-4 py-1 border border-teal-500/30 text-[10px] font-black uppercase tracking-[0.4em] text-teal-500 mb-8 flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                        Status: Web3_Ledger_Active
                    </motion.div>

                    {/* Title - Razor Sharp Minimalism */}
                    <h1 className="font-black text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] uppercase tracking-tighter">
                        Next-Gen <br />
                        <span className={cn(
                            "bg-gradient-to-r bg-clip-text text-transparent italic",
                            service.theme.gradient
                        )}>
                            Fintech
                        </span>
                    </h1>

                    {/* Subtitle - Clean & Professional */}
                    <div className="mt-12 space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="font-medium text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mx-auto border-l-2 border-teal-500/20 pl-6"
                        >
                            We build high-performance <span className="text-white">Blockchain Ledgers</span> and decentralized financial architectures with surgical precision.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-xs uppercase tracking-[0.3em] text-teal-500/60 font-black"
                        >
                            Engineered for Global Connectivity
                        </motion.p>
                    </div>

                    {/* CTA Button - High-End Animated */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <button className="group relative px-14 py-6 overflow-hidden rounded-2xl bg-teal-600 transition-all duration-500 hover:bg-teal-500 shadow-[0_0_50px_rgba(20,184,166,0.3)]">
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

                            <div className="relative z-10 flex items-center gap-5 text-black font-black uppercase tracking-[0.2em] text-sm">
                                <span>{service.cta}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </div>

                            {/* Inner Glow */}
                            <div className="absolute -inset-1 bg-teal-400 opacity-20 blur group-hover:opacity-40 transition-opacity" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Brand Slider - Removed Glass, Minimalist Integration */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="relative z-10 w-full border-t border-white/5 py-12"
            >
                <div className="relative flex items-center overflow-hidden">
                    <motion.div
                        className="flex items-center gap-24 whitespace-nowrap"
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                            >
                                <span className="text-3xl font-black uppercase tracking-tighter text-white">
                                    {brand.logo}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
                </div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
};

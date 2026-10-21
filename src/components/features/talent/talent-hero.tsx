"use client";

import { motion } from "framer-motion";

interface TalentHeroProps {
    isVisible?: boolean;
}

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Hero Section ────────────────────────────────────────────────
export const TalentHero = ({ isVisible = false }: TalentHeroProps) => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* ── Hero Text ── */}
            <div className="relative z-20 flex items-center justify-center px-6 py-24 w-full">
                <div className="text-center max-w-5xl relative">
                    {/* Soft translucent halo behind hero text — fades in with the text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: SMOOTH_EASE }}
                        className="absolute inset-0 -mx-16 -my-12 rounded-[3rem] pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(244,244,240,0.88) 0%, rgba(244,244,240,0.45) 48%, transparent 75%)"
                        }}
                    />

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                            animate={
                                isVisible
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : { opacity: 0, y: 18, filter: "blur(6px)" }
                            }
                            transition={{ duration: 0.9, delay: 0.1, ease: SMOOTH_EASE }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950 text-white text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] mb-6 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Human Capital Architecture
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                            animate={
                                isVisible
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : { opacity: 0, y: 28, filter: "blur(8px)" }
                            }
                            transition={{ duration: 1.1, delay: 0.3, ease: SMOOTH_EASE }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-950 mb-5 sm:mb-7 tracking-tighter uppercase italic leading-[0.92]"
                        >
                            The Right Talent,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">
                                Right Now
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={
                                isVisible
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : { opacity: 0, y: 20, filter: "blur(6px)" }
                            }
                            transition={{ duration: 1.0, delay: 0.55, ease: SMOOTH_EASE }}
                            className="text-zinc-700 text-base sm:text-lg md:text-xl font-medium tracking-tight mb-4 sm:mb-6 max-w-2xl mx-auto"
                        >
                            Connecting exceptional talent with forward-thinking organizations across the Gulf and beyond.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                            transition={{ duration: 1.0, delay: 0.85, ease: SMOOTH_EASE }}
                            className="text-zinc-500 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase"
                        >
                            Scroll to set our workforce in motion
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* ── Stats Panel (Obsidian Silhouette Badge) ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.9, delay: 1.0, ease: SMOOTH_EASE }}
                className="absolute bottom-6 right-4 md:bottom-10 md:right-8 z-30"
            >
                <div className="px-4 py-3 md:px-5 md:py-4 rounded-2xl font-mono text-[10px] md:text-xs space-y-1.5 bg-zinc-950/90 text-white backdrop-blur-md border border-zinc-800 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                    <div className="flex justify-between gap-6">
                        <span className="text-zinc-400 tracking-wider">ACTIVE TALENTS</span>
                        <span className="text-white font-bold">10,000+</span>
                    </div>
                    <div className="flex justify-between gap-6">
                        <span className="text-zinc-400 tracking-wider">STATUS</span>
                        <span className="text-emerald-400 font-semibold text-[9px] md:text-[10px]">● IN MOTION</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

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
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.7, ease: SMOOTH_EASE }}
                    className="text-center max-w-4xl relative"
                >
                    <p className="text-zinc-700 text-xs font-mono tracking-wide mb-4">
                        GCC &amp; Global Staffing
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-zinc-950 mb-6 tracking-tight leading-[1.06]">
                        The right talent,
                        <br />
                        <span className="text-zinc-700">
                            deployed at scale
                        </span>
                    </h1>

                    <p className="text-zinc-800 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl mx-auto">
                        Vetted logistics fleets, retail teams, and technical specialists across Saudi Arabia, the UAE, India, and Indonesia.
                    </p>

                    <p className="text-zinc-600 text-xs font-mono">
                        Scroll to explore
                    </p>
                </motion.div>
            </div>

            {/* ── Stats Panel ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.7, delay: 0.3, ease: SMOOTH_EASE }}
                className="absolute bottom-6 right-4 md:bottom-10 md:right-8 z-30"
            >
                <div className="px-4 py-3 md:px-5 md:py-4 rounded-xl font-mono text-xs space-y-1.5 bg-zinc-950 text-white border border-zinc-800 tabular-nums">
                    <div className="flex justify-between gap-6">
                        <span className="text-zinc-400">Active workforce</span>
                        <span className="text-white font-medium">10,000+</span>
                    </div>
                    <div className="flex justify-between gap-6">
                        <span className="text-zinc-400">Markets</span>
                        <span className="text-zinc-300 font-medium">KSA · UAE · IND · IDN</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

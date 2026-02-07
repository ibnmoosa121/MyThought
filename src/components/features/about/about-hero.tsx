"use client";

import { motion } from "framer-motion";
import { WavyBackground } from "../../ui/wavy-background";
import { Sparkles } from "lucide-react";

export const AboutHero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <WavyBackground color="#ffffff" className="opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] mb-12"
                    >
                        <Sparkles size={14} />
                        Our Identity
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-black text-white leading-[0.8] tracking-[-0.05em] uppercase italic mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-white">Genesis</span>
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-12">
                        Pioneering the intersection of <span className="text-white">human intuition</span> and <span className="text-white">technological evolution</span>.
                        We don't just build systems; we architect the future.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">The Story Begins</span>
            </motion.div>
        </section>
    );
};

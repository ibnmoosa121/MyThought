"use client";

import { motion } from "framer-motion";
import { services } from "../../../data/services";
import { WavyBackground } from "../../ui/wavy-background";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export const VenturesHero = () => {
    const service = services.ventures;

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <WavyBackground color={service.theme.plasmaColor} className="opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full" />
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-12"
                    >
                        <Sparkles size={14} />
                        Next-Gen Incubation
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-black text-white leading-[0.8] tracking-[-0.05em] uppercase italic mb-8">
                        Ven<span className={`bg-gradient-to-r ${service.theme.gradient} bg-clip-text text-transparent`}>tures</span>
                    </h1>

                    <p className="text-neutral-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-12">
                        {service.subtitle}. <span className="text-white italic">Nurturing entrepreneurial spirit, channeling capital, and bridging connections.</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                            <TrendingUp className="text-amber-500" size={20} />
                            <span className="text-white text-sm font-bold uppercase italic">Capital Injection</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                            <Users className="text-orange-500" size={20} />
                            <span className="text-white text-sm font-bold uppercase italic">Elite Mentorship</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Explore Ecosystem</span>
            </motion.div>
        </section>
    );
};

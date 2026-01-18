"use client";
import { motion } from "framer-motion";
import { WavyBackground } from "../../ui/wavy-background";
import { services } from "../../../data/services";

export const DesignHero = () => {
    const service = services.design;

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Wavy Background */}
            <WavyBackground color={service.theme.plasmaColor} className="opacity-40" />

            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-tight tracking-tight">
                        Digital <br />
                        <span className={`bg-gradient-to-r ${service.theme.gradient} bg-clip-text text-transparent`}>
                            {service.title}
                        </span>
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        {service.subtitle}. Elevating brands through world-class visual storytelling and product design.
                    </p>

                    <motion.div
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <button className="px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.23)] hover:-translate-y-1">
                            {service.cta}
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </div>
    );
};

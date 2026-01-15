"use client";
import { motion } from "framer-motion";

export const ConsultancyHero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                        Strategic <span className="text-emerald-500">Consultancy</span> <br />
                        for the Next Decade
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Dubai & KSA expansion, market entry, and operations optimization.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

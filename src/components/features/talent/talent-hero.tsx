"use client";
import { motion } from "framer-motion";

export const TalentHero = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                        Connecting <span className="text-purple-500">Global Talent</span> <br />
                        with Infinite Vision
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                        Top-tier staffing and team augmentation for high-performing teams.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

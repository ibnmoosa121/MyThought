"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FintechHero = () => {
    const navigate = useNavigate();

    const scrollToDetails = () => {
        const el = document.getElementById("fintech-details");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-28 pb-20"
            role="banner"
        >
            {/* Subtle Architectural Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none design-grid opacity-[0.03]" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.06] tracking-tight mb-6"
                >
                    Payment rails &amp;{" "}
                    <span className="text-teal-400">
                        financial ledgers
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mx-auto mb-10"
                >
                    Compliant payment orchestration, real-time reconciliation ledgers, and institutional risk systems built for financial operators across the Middle East.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.5 }}
                >
                    <button
                        onClick={() => navigate("/contact", { state: { from: "fintech" } })}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-medium text-sm transition-colors duration-150 cursor-pointer"
                    >
                        <span>Start integration</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                        onClick={scrollToDetails}
                        className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors duration-150 cursor-pointer"
                    >
                        <span>Explore architecture</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Coins, Globe2 } from "lucide-react";

const STUDIO_TRACKS = [
    {
        code: "01",
        title: "Studio Co-Build",
        desc: "Embedded product engineering, architecture, and design from day one.",
        stage: "0 → 1",
        icon: Layers
    },
    {
        code: "02",
        title: "Capital & Syndicate",
        desc: "Early-stage funding aligned with regional institutional co-investors.",
        stage: "Pre-Seed / Seed",
        icon: Coins
    },
    {
        code: "03",
        title: "GCC Distribution",
        desc: "Commercial partnerships, regulatory navigation, and enterprise rollout.",
        stage: "Regional Scale",
        icon: Globe2
    }
];

export const VenturesHero = () => {
    const navigate = useNavigate();

    const scrollToPortfolio = () => {
        const el = document.getElementById("ventures-portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-black pt-28 pb-20">
            {/* Subtle Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none design-grid opacity-[0.03]" />

            <div className="relative z-20 container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Editorial Copy & Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 space-y-6 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-amber-500">
                            <span>STEBUP VENTURES</span>
                            <span className="text-zinc-600">//</span>
                            <span className="text-zinc-400">STUDIO &amp; CAPITAL</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.06] tracking-tight">
                            We build and back{" "}
                            <span className="text-amber-500">regional ventures</span>
                        </h1>

                        <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
                            Partnering with founders from concept to commercial scale—combining early-stage capital, dedicated software engineering, and Middle East market distribution.
                        </p>

                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <button
                                onClick={() => navigate("/contact", { state: { from: "ventures" } })}
                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-medium text-sm transition-colors duration-150 cursor-pointer"
                            >
                                <span>Pitch a venture</span>
                                <ArrowRight size={16} />
                            </button>
                            <button
                                onClick={scrollToPortfolio}
                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors duration-150 cursor-pointer"
                            >
                                <span>Explore capabilities</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Studio Operating Dossier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5"
                    >
                        <div className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden">
                            {/* Dossier Header */}
                            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                                <span className="text-xs font-mono text-zinc-400">
                                    Operating model
                                </span>
                                <span className="text-xs font-mono text-amber-500">
                                    MENA &amp; GCC
                                </span>
                            </div>

                            {/* Tracks */}
                            <div className="divide-y divide-white/10">
                                {STUDIO_TRACKS.map((track) => (
                                    <div
                                        key={track.code}
                                        className="p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                                            <track.icon size={17} strokeWidth={1.75} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-3 mb-1">
                                                <h2 className="text-sm font-semibold text-white tracking-tight">
                                                    {track.title}
                                                </h2>
                                                <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 shrink-0 tabular-nums">
                                                    {track.stage}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-400 leading-relaxed">
                                                {track.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Sector Footer */}
                            <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                                <span>Core thesis</span>
                                <span className="text-zinc-300">FinTech · Logistics · Applied AI · SaaS</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

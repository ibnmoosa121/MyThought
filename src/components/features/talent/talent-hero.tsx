"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SkyBackground, FarSkyline, MidSkyline, StreetLayer, StreetLamps } from "./city-skyline-layers";
import { TalentCharacter, TalkingPair, StandingCharacter, generateCharacters, TALKING_PAIRS, STANDING_CHARS } from "./TalentCharacter";
import type { ComponentProps } from "react";

// ─── Character count per viewport ────────────────────────────────
function getCharacterCount(w: number): number {
    if (w < 640) return 20;
    if (w < 1024) return 32;
    return 50;
}

// ─── Foreground edges ────────────────────────────────────────────
const ForegroundElements = () => (
    <div className="absolute inset-0 z-[45] pointer-events-none overflow-hidden">
        <div className="absolute -left-6 bottom-0 w-32 opacity-[0.04]" style={{ height: "50%", background: "radial-gradient(ellipse at 30% 50%, #1e293b 0%, transparent 55%)", filter: "blur(15px)" }} />
        <div className="absolute -right-8 bottom-0 w-40 opacity-[0.035]" style={{ height: "55%", background: "radial-gradient(ellipse at 70% 50%, #1e293b 0%, transparent 55%)", filter: "blur(15px)" }} />
    </div>
);

// ─── Ambient particles ──────────────────────────────────────────
const AmbientParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2, delay: Math.random() * 10,
        duration: 8 + Math.random() * 12, opacity: 0.03 + Math.random() * 0.06,
    }));
    return (
        <div className="absolute inset-0 z-[12] pointer-events-none overflow-hidden">
            {particles.map((p) => (
                <motion.div key={p.id} className="absolute rounded-full" style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: `rgba(168,85,247,${p.opacity})` }}
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
                    transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
};

// ─── Hero Section ────────────────────────────────────────────────
export const TalentHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setContainerWidth] = useState(1200);
    const [characterConfigs, setCharacterConfigs] = useState<ComponentProps<typeof TalentCharacter>[]>([]);

    const updateWidth = useCallback(() => {
        if (containerRef.current) {
            const w = containerRef.current.getBoundingClientRect().width;
            setContainerWidth(w);
            setCharacterConfigs(generateCharacters(getCharacterCount(w), w));
        }
    }, []);

    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [updateWidth]);

    return (
        <section className="relative w-full overflow-hidden">
            <div ref={containerRef} className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px]">
                {/* ── Static Night Sky ── */}
                <SkyBackground />

                {/* ── Far Skyline ── */}
                <FarSkyline />

                {/* ── Mid Skyline (Backdrop) ── */}
                <MidSkyline />

                {/* ── Street Surface ── */}
                <StreetLayer />

                {/* ── Street Lamps ── */}
                <StreetLamps />

                {/* ── Ambient Particles ── */}
                <AmbientParticles />

                {/* ── Hero Text ── */}
                <div className="absolute top-0 left-0 right-0 bottom-[30%] flex items-center justify-center pointer-events-none z-[20]">
                    <div className="text-center px-6 max-w-4xl relative">
                        <div className="absolute inset-0 -mx-12 -my-8 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, rgba(7,11,20,0.75) 0%, transparent 65%)" }} />
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]"
                                style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8), 0 0 80px rgba(168,85,247,0.1)" }}>
                                The Right Talent,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">Right Now</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-white/70 text-sm sm:text-base md:text-lg font-light tracking-wide mb-3 sm:mb-5 max-w-2xl mx-auto"
                                style={{ textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}>
                                Connecting exceptional talent with forward-thinking organizations
                            </motion.p>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.0 }}
                                className="text-purple-300/40 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
                                Hover a silhouette to discover their expertise
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Character Street Layer ── */}
                <div className="absolute bottom-0 left-0 right-0 h-[38%] z-[25] overflow-hidden">
                    {characterConfigs.map((c) => <TalentCharacter key={c.id} {...c} />)}
                    {TALKING_PAIRS.map((p) => <TalkingPair key={p.id} {...p} />)}
                    {STANDING_CHARS.map((s) => <StandingCharacter key={s.id} {...s} />)}
                </div>

                {/* ── Foreground ── */}
                <ForegroundElements />

                {/* ── Vignette ── */}
                <div className="absolute inset-0 z-[48] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(7,11,20,0.5) 100%)" }} />

                {/* ── Stats Panel ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-[50]">
                    <div className="px-4 py-3 md:px-5 md:py-4 rounded-xl font-mono text-[10px] md:text-xs space-y-1.5" style={{ background: "rgba(12,18,32,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(168,85,247,0.12)", boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>
                        <div className="flex justify-between gap-6">
                            <span className="text-white/30 tracking-wider">ACTIVE TALENTS</span>
                            <span className="text-purple-400 font-semibold">{characterConfigs.length + TALKING_PAIRS.length * 2 + STANDING_CHARS.length}</span>
                        </div>
                        <div className="flex justify-between gap-6">
                            <span className="text-white/30 tracking-wider">STATUS</span>
                            <span className="text-emerald-400/80 font-semibold text-[9px] md:text-[10px]">● LIVE</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-[50] pointer-events-none" />
        </section>
    );
};

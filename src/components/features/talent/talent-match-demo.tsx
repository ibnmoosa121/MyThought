"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cloud, Database, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";

const SKILLS = [
    { id: "react", icon: Code2, label: "React", color: "#61DAFB" },
    { id: "aws", icon: Cloud, label: "AWS", color: "#FF9900" },
    { id: "node", icon: Database, label: "Node.js", color: "#339933" },
    { id: "ai", icon: Cpu, label: "AI/ML", color: "#A855F7" },
];

export const TalentMatchDemo = () => {
    const [isMatched, setIsMatched] = useState(false);
    const explosionContainerRef = useRef<HTMLDivElement>(null);

    const createExplosion = () => {
        if (!explosionContainerRef.current) return;

        const colors = ["#A855F7", "#D8B4FE", "#FFFFFF", "#7C3AED"];
        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "absolute w-2 h-2 rounded-full pointer-events-none";
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            explosionContainerRef.current.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const velocity = 50 + Math.random() * 150;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            gsap.fromTo(particle,
                { x: 0, y: 0, opacity: 1, scale: 1 },
                {
                    x: tx,
                    y: ty,
                    opacity: 0,
                    scale: 0,
                    duration: 1 + Math.random(),
                    ease: "power2.out",
                    onComplete: () => particle.remove()
                }
            );
        }
    };

    const handleDragEnd = (_: any, info: any) => {
        // Check if drop is roughly in the middle
        // Values are relative to the viewport/container
        const dropZone = document.getElementById("matching-zone");
        if (dropZone) {
            const rect = dropZone.getBoundingClientRect();
            const pointX = info.point.x;
            const pointY = info.point.y;

            if (
                pointX >= rect.left &&
                pointX <= rect.right &&
                pointY >= rect.top &&
                pointY <= rect.bottom
            ) {
                setIsMatched(true);
                createExplosion();
            }
        }
    };

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-500 font-bold uppercase tracking-[0.3em] text-sm"
                    >
                        Interactive Demo
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mt-4">
                        The Perfect Match
                    </h2>
                    <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
                        Drag a skill into the connection zone to see how we bridge the gap.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-between px-4 md:px-12 bg-zinc-900/30 border border-white/5 rounded-[3rem] backdrop-blur-xl">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                    {/* Left Slot: Startup */}
                    <div className="flex flex-col items-center gap-6 z-10">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl border-2 border-dashed border-white/10 flex items-center justify-center bg-black/40 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Code2 size={48} className="text-white/20 group-hover:text-purple-500/40 transition-colors" />
                            <div className="absolute inset-x-0 bottom-4 text-center">
                                <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Requester</span>
                            </div>
                        </div>
                        <h3 className="text-white font-black italic uppercase text-lg tracking-tight">High-Growth Startup</h3>
                    </div>

                    {/* Middle: Connection Zone */}
                    <div className="relative flex-1 flex flex-col items-center justify-center h-full">
                        <div
                            id="matching-zone"
                            className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 transition-all duration-700 flex items-center justify-center
                ${isMatched ? 'border-purple-500 bg-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.3)]' : 'border-white/5 bg-white/5'}
              `}
                        >
                            <div ref={explosionContainerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {!isMatched ? (
                                    <motion.div
                                        key="waiting"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center text-white/20"
                                    >
                                        <Sparkles size={32} className="animate-pulse mb-2" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Match Zone</span>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="matched"
                                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        className="flex flex-col items-center text-center px-4"
                                    >
                                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                            <CheckCircle2 size={32} className="text-white" />
                                        </div>
                                        <p className="text-white font-black italic uppercase text-sm md:text-base leading-none tracking-tight">
                                            Success!
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Connecting Lines */}
                            <div className="absolute left-0 top-1/2 -translate-x-full w-24 h-px bg-gradient-to-r from-transparent to-white/10" />
                            <div className="absolute right-0 top-1/2 translate-x-full w-24 h-px bg-gradient-to-l from-transparent to-white/10" />
                        </div>

                        {/* Payoff Message */}
                        <AnimatePresence>
                            {isMatched && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-12 text-center"
                                >
                                    <p className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white italic uppercase tracking-tighter">
                                        We bridge this gap <br /> in under 14 days
                                    </p>
                                    <button
                                        onClick={() => setIsMatched(false)}
                                        className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-purple-500 transition-colors"
                                    >
                                        Reset Demo
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Slot: Architect */}
                    <div className="flex flex-col items-center gap-6 z-10">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl border-2 border-dashed border-white/10 flex items-center justify-center bg-black/40 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Cloud size={48} className="text-white/20 group-hover:text-purple-500/40 transition-colors" />
                            <div className="absolute inset-x-0 bottom-4 text-center">
                                <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Candidate</span>
                            </div>
                        </div>
                        <h3 className="text-white font-black italic uppercase text-lg tracking-tight">Expert Cloud Architect</h3>
                    </div>
                </div>

                {/* Draggable Skills */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    <AnimatePresence>
                        {!isMatched && SKILLS.map((skill) => (
                            <motion.div
                                key={skill.id}
                                drag
                                dragSnapToOrigin
                                onDragEnd={handleDragEnd}
                                whileHover={{ scale: 1.1 }}
                                whileDrag={{ scale: 1.2, zIndex: 50 }}
                                className="cursor-grab active:cursor-grabbing flex flex-col items-center"
                            >
                                <div
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-900 border border-white/10 flex flex-col items-center justify-center gap-2 group transition-all hover:border-purple-500/50"
                                    style={{ boxShadow: `0 0 20px rgba(0,0,0,0.5)` }}
                                >
                                    <skill.icon size={28} className="text-white/70 group-hover:text-purple-400 transition-colors" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{skill.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Decorative Arabesque */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />
        </section>
    );
};

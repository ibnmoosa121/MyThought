"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Trophy, Landmark, Users2, Building2 } from "lucide-react";

const REGIONS = [
    {
        id: "ksa",
        name: "Saudi Arabia",
        label: "KSA",
        tagline: "Vision 2030 Catalyst",
        highlight: {
            title: "National Transformation",
            desc: "Rapid deployment of 500+ delivery riders and retail staff for the Kingdom's largest quick-commerce and luxury retail rollouts.",
            stat: "800+ Placements",
            icon: Landmark
        },
        services: ["Q-Commerce Fleet", "Retail Teams", "FinTech Hubs"]
    },
    {
        id: "dubai",
        name: "Dubai / GCC",
        label: "UAE",
        tagline: "Regional Powerhouse",
        highlight: {
            title: "Last-Mile Excellence",
            desc: "Optimizing the workforce for major logistics hubs in JAFZA and scaling hospitality teams for Dubai's ultra-luxury hotel sector.",
            stat: "Elite Workforce",
            icon: Building2
        },
        services: ["Logistics Ops", "Hospitality Elite", "Tech Squads"]
    },
    {
        id: "india",
        name: "India",
        label: "IND",
        tagline: "Global Talent Pool",
        highlight: {
            title: "Scale & Quality",
            desc: "Managing high-volume recruitment pipelines for remote customer support and specialized engineering centers serving the Middle East.",
            stat: "25yr Deep Supply",
            icon: Users2
        },
        services: ["Support Hubs", "Remote Engineering", "Back-Office Ops"]
    },
    {
        id: "indonesia",
        name: "Indonesia",
        label: "IDN",
        tagline: "SE Asia Gateway",
        highlight: {
            title: "Emerging Sector Bridge",
            desc: "Connecting high-potential talent in logistics, fintech, and digital commerce with global infrastructure projects.",
            stat: "Strategic Bridge",
            icon: Trophy
        },
        services: ["Digital Fleet", "Tech Devs", "Ops Leadership"]
    }
];

export const TalentRegionSwitcher = () => {
    const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center mb-20"
                >
                    <span className="text-zinc-500 font-mono font-bold uppercase tracking-[0.4em] text-xs mb-4">
                        03 // Global Footprint
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black text-zinc-950 italic uppercase tracking-tighter leading-tight text-center">
                        Market-Specific <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">
                            Leadership
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch h-full md:h-[500px]"
                >
                    {/* Region Selector */}
                    <div className="flex flex-row md:flex-col gap-3 md:w-1/4">
                        {REGIONS.map((region) => {
                            const isSelected = activeRegion.id === region.id;
                            return (
                                <button
                                    key={region.id}
                                    onClick={() => setActiveRegion(region)}
                                    className={`flex-1 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 rounded-3xl md:rounded-[2rem] border transition-all duration-500 text-left group backdrop-blur-md
                                        ${isSelected
                                            ? 'bg-zinc-950 text-white border-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.22)]'
                                            : 'bg-white/75 text-zinc-950 border-zinc-900/10 hover:bg-white/95 hover:border-zinc-900/25 shadow-[0_12px_30px_rgba(0,0,0,0.05)]'}
                                    `}
                                >
                                    <div className="flex flex-col">
                                        <span
                                            className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-1 transition-colors ${
                                                isSelected ? 'text-zinc-400' : 'text-zinc-500'
                                            }`}
                                        >
                                            {region.label}
                                        </span>
                                        <span
                                            className={`text-sm font-black uppercase italic tracking-tighter hidden md:block ${
                                                isSelected ? 'text-white' : 'text-zinc-950'
                                            }`}
                                        >
                                            {region.name}
                                        </span>
                                    </div>
                                    <MapPin
                                        size={20}
                                        className={`transition-colors hidden md:block ${
                                            isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-950'
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Display (Obsidian Architectural Stage) */}
                    <div className="flex-1 relative rounded-[3rem] bg-zinc-950/90 text-white backdrop-blur-md border border-zinc-800 p-8 md:p-16 overflow-hidden flex flex-col justify-end shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.45 }}
                                className="relative z-10 w-full"
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3.5 rounded-2xl bg-white text-zinc-950">
                                                <activeRegion.highlight.icon size={30} />
                                            </div>
                                            <div>
                                                <p className="text-zinc-400 font-mono font-bold uppercase tracking-[0.3em] text-[10px] mb-1">
                                                    {activeRegion.tagline}
                                                </p>
                                                <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
                                                    {activeRegion.highlight.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-xl">
                                            {activeRegion.highlight.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {activeRegion.services.map(s => (
                                                <span
                                                    key={s}
                                                    className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-zinc-200 text-xs font-black uppercase italic tracking-widest"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-center">
                                        <div className="p-8 rounded-[2.5rem] bg-white text-zinc-950 flex flex-col items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500 min-w-[200px]">
                                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 text-zinc-500">
                                                Legacy Success
                                            </span>
                                            <span className="text-3xl font-black italic uppercase leading-none">
                                                {activeRegion.highlight.stat}
                                            </span>
                                            <ArrowUpRight className="mt-4" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

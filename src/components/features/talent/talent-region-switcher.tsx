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
        <section className="relative py-32 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-4"
                    >
                        Global Footprint
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight text-center">
                        Market-Specific <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">Leadership</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch h-full md:h-[500px]">
                    {/* Region Selector */}
                    <div className="flex flex-row md:flex-col gap-2 md:w-1/4">
                        {REGIONS.map((region) => (
                            <button
                                key={region.id}
                                onClick={() => setActiveRegion(region)}
                                className={`flex-1 flex flex-col md:flex-row items-center justify-between p-4 md:p-8 rounded-3xl md:rounded-[2rem] border transition-all duration-500 text-left group
                                    ${activeRegion.id === region.id
                                        ? 'bg-purple-600/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]'
                                        : 'bg-zinc-950 border-white/5 hover:border-white/20 hover:bg-zinc-900'}
                                `}
                            >
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-black uppercase tracking-widest mb-1 transition-colors ${activeRegion.id === region.id ? 'text-purple-400' : 'text-zinc-600'}`}>
                                        {region.label}
                                    </span>
                                    <span className="text-sm font-black text-white uppercase italic tracking-tighter hidden md:block">{region.name}</span>
                                </div>
                                <MapPin size={20} className={`transition-colors hidden md:block ${activeRegion.id === region.id ? 'text-purple-400' : 'text-zinc-800'}`} />
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="flex-1 relative rounded-[3rem] bg-zinc-950 border border-white/5 p-8 md:p-16 overflow-hidden flex flex-col justify-end">
                        {/* Background Map Faded */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center -translate-y-10">
                            <div className="w-[150%] aspect-video bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center grayscale scale-110" />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative z-10 w-full"
                            >
                                <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500">
                                                <activeRegion.highlight.icon size={32} />
                                            </div>
                                            <div>
                                                <p className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px]">{activeRegion.tagline}</p>
                                                <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter">{activeRegion.highlight.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
                                            {activeRegion.highlight.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {activeRegion.services.map(s => (
                                                <span key={s} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-black uppercase italic tracking-widest">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-center">
                                        <div className="p-8 rounded-[2.5rem] bg-purple-500 text-black flex flex-col items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-500 min-w-[200px]">
                                            <span className="text-[10px] font-black uppercase tracking-widest mb-1 text-black/60">Legacy Success</span>
                                            <span className="text-3xl font-black italic uppercase leading-none">{activeRegion.highlight.stat}</span>
                                            <ArrowUpRight className="mt-4" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

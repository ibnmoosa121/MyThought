"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Trophy, Landmark, Users2, Building2 } from "lucide-react";

const REGIONS = [
    {
        id: "ksa",
        name: "Saudi Arabia",
        label: "KSA",
        tagline: "Kingdom Operations",
        highlight: {
            title: "National Scale",
            desc: "Rapid deployment of 500+ delivery riders and retail staff for the Kingdom's largest quick-commerce and retail rollouts.",
            stat: "800+ Placements",
            icon: Landmark
        },
        services: ["Q-Commerce Fleet", "Retail Teams", "FinTech Hubs"]
    },
    {
        id: "dubai",
        name: "Dubai / GCC",
        label: "UAE",
        tagline: "GCC Logistics & Hospitality",
        highlight: {
            title: "Last-Mile Excellence",
            desc: "Staffing major logistics hubs in JAFZA and scaling hospitality teams for Dubai's premier hotel and retail operators.",
            stat: "GCC Hub",
            icon: Building2
        },
        services: ["Logistics Ops", "Hospitality Teams", "Tech Squads"]
    },
    {
        id: "india",
        name: "India",
        label: "IND",
        tagline: "Engineering & Ops Supply",
        highlight: {
            title: "Scale & Quality",
            desc: "Managing high-volume recruitment pipelines for customer support and dedicated engineering centers serving the Middle East.",
            stat: "25yr Network",
            icon: Users2
        },
        services: ["Support Hubs", "Remote Engineering", "Back-Office Ops"]
    },
    {
        id: "indonesia",
        name: "Indonesia",
        label: "IDN",
        tagline: "SE Asia Expansion",
        highlight: {
            title: "Regional Talent Bridge",
            desc: "Connecting specialists in logistics, fintech, and digital commerce with cross-border infrastructure projects.",
            stat: "SE Asia Hub",
            icon: Trophy
        },
        services: ["Digital Fleet", "Software Devs", "Ops Leadership"]
    }
];

export const TalentRegionSwitcher = () => {
    const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-14"
                >
                    <span className="text-zinc-500 font-mono text-xs mb-3">
                        03 // Regional presence
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-zinc-950 tracking-tight leading-tight text-center">
                        Regional{" "}
                        <span className="text-zinc-600">
                            operations
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-stretch h-full md:min-h-[420px]"
                >
                    {/* Region Selector */}
                    <div className="flex flex-row md:flex-col gap-3 md:w-1/4">
                        {REGIONS.map((region) => {
                            const isSelected = activeRegion.id === region.id;
                            return (
                                <button
                                    key={region.id}
                                    onClick={() => setActiveRegion(region)}
                                    className={`flex-1 flex flex-col md:flex-row items-center justify-between p-4 md:p-5 rounded-xl border transition-colors duration-200 text-left group backdrop-blur-md
                                        ${isSelected
                                            ? 'bg-zinc-950/85 text-white border-zinc-950'
                                            : 'bg-white/45 text-zinc-950 border-zinc-900/10 hover:bg-white/65 hover:border-zinc-900/20'}
                                    `}
                                >
                                    <div className="flex flex-col">
                                        <span
                                            className={`text-xs font-mono mb-0.5 transition-colors ${
                                                isSelected ? 'text-zinc-400' : 'text-zinc-500'
                                            }`}
                                        >
                                            {region.label}
                                        </span>
                                        <span
                                            className={`text-sm font-medium hidden md:block ${
                                                isSelected ? 'text-white' : 'text-zinc-950'
                                            }`}
                                        >
                                            {region.name}
                                        </span>
                                    </div>
                                    <MapPin
                                        size={18}
                                        strokeWidth={1.75}
                                        className={`transition-colors hidden md:block ${
                                            isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-950'
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Display */}
                    <div className="flex-1 relative rounded-2xl bg-zinc-950/85 text-white backdrop-blur-md border border-zinc-800 p-8 md:p-12 overflow-hidden flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 w-full"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="p-3 rounded-lg bg-white text-zinc-950">
                                                <activeRegion.highlight.icon size={24} strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <p className="text-zinc-400 font-mono text-xs mb-0.5">
                                                    {activeRegion.tagline}
                                                </p>
                                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                                    {activeRegion.highlight.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-zinc-300 text-base leading-relaxed mb-6 max-w-xl">
                                            {activeRegion.highlight.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {activeRegion.services.map(s => (
                                                <span
                                                    key={s}
                                                    className="px-3 py-1 rounded-md bg-white/10 border border-white/15 text-zinc-200 text-xs font-medium"
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto flex flex-col items-center md:items-end justify-center">
                                        <div className="p-6 rounded-xl bg-white text-zinc-950 flex flex-col items-center justify-center min-w-[180px]">
                                            <span className="text-xs font-mono mb-1.5 text-zinc-500">
                                                Footprint
                                            </span>
                                            <span className="text-2xl font-semibold tabular-nums leading-none text-center">
                                                {activeRegion.highlight.stat}
                                            </span>
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

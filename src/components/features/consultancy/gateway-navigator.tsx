"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
    TrendingUp,
    ShieldCheck,
    ArrowUpRight,
    Zap,
    Building2,
    BarChart3,
    Activity,
    Globe2
} from "lucide-react";

const Counter = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const prevValueRef = useRef(0);

    useEffect(() => {
        const obj = { val: prevValueRef.current };
        const tween = gsap.to(obj, {
            val: value,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => {
                setDisplayValue(Math.floor(obj.val));
            },
            onComplete: () => {
                prevValueRef.current = value;
            }
        });

        return () => {
            tween.kill();
        };
    }, [value]);

    return <span className="text-4xl md:text-5xl font-semibold text-white tabular-nums leading-none">{displayValue}</span>;
};

export interface RegionData {
    id: string;
    name: string;
    fullName: string;
    color: string;
    accent: string;
    location: { lat: number; lng: number };
    cameraTarget: { phi: number; theta: number }; // Exact visual calibration
    sectors: string[];
    opportunitySlot: {
        title: string;
        desc: string;
        icon: any;
    };
    compliance: number;
    legacy: number;
    synergy: string;
    connections: string[];
}

const regions: RegionData[] = [
    {
        id: "ksa",
        name: "KSA",
        fullName: "Kingdom of Saudi Arabia",
        color: "from-emerald-500/20 to-emerald-900/40",
        accent: "#10B981",
        location: { lat: 24.7136, lng: 46.6753 }, // Riyadh
        cameraTarget: { phi: 224.98, theta: 18.69 },
        sectors: ["Vision 2030", "Giga Projects", "FinTech", "Energy"],
        opportunitySlot: {
            title: "Infrastructure & Tech",
            desc: "Enterprise procurement and Vision 2030 infrastructure buildouts across the Kingdom.",
            icon: Building2
        },
        compliance: 92,
        legacy: 18,
        synergy: "Paired with engineering delivery hubs in India.",
        connections: ["india"]
    },
    {
        id: "dubai",
        name: "Dubai / UAE",
        fullName: "United Arab Emirates",
        color: "from-emerald-400/20 to-emerald-800/40",
        accent: "#34D399",
        location: { lat: 25.2048, lng: 55.2708 }, // Dubai
        cameraTarget: { phi: 216.67, theta: 26.06 },
        sectors: ["Real Estate", "FinTech", "Logistics", "Hospitality"],
        opportunitySlot: {
            title: "Financial & Trade Hubs",
            desc: "DIFC and free-zone structuring for institutional capital and cross-border commerce.",
            icon: BarChart3
        },
        compliance: 98,
        legacy: 25,
        synergy: "Connected to Southeast Asia for regional logistics expansion.",
        connections: ["indonesia"]
    },
    {
        id: "india",
        name: "India",
        fullName: "Engineering & Ops Hub",
        color: "from-teal-600/20 to-teal-950/40",
        accent: "#0D9488",
        location: { lat: 28.6139, lng: 77.2090 }, // Delhi
        cameraTarget: { phi: 192.32, theta: 20.98 },
        sectors: ["SaaS", "Engineering", "Manufacturing", "Mobility"],
        opportunitySlot: {
            title: "Capability Centers",
            desc: "Dedicated technical delivery teams supporting enterprise software and GCC expansion.",
            icon: Zap
        },
        compliance: 85,
        legacy: 15,
        synergy: "Supplying KSA and UAE programs with vetted technical specialists.",
        connections: ["ksa"]
    },
    {
        id: "indonesia",
        name: "Jakarta",
        fullName: "SEA Digital Powerhouse",
        color: "from-emerald-700/20 to-emerald-950/40",
        accent: "#059669",
        location: { lat: -6.2088, lng: 106.8456 }, // Jakarta
        cameraTarget: { phi: 155.08, theta: -1.72 },
        sectors: ["E-commerce", "Agri-Tech", "Maritime", "Natural Resources"],
        opportunitySlot: {
            title: "Digital Economy",
            desc: "Jakarta is the fastest growing unicorn hub in SE Asia.",
            icon: TrendingUp
        },
        compliance: 88,
        legacy: 12,
        synergy: "Expanding Dubai brands into Southeast Asian retail.",
        connections: ["dubai"]
    }
];

export const GatewayNavigator = () => {
    const [activeRegion, setActiveRegion] = useState(regions[1]);

    // Auto-rotation for mobile
    useEffect(() => {
        if (window.innerWidth >= 768) return;

        let currentIndex = regions.findIndex(r => r.id === activeRegion.id);
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % regions.length;
            setActiveRegion(regions[currentIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeRegion.id]);

    return (
        <section className="relative bg-black py-16 md:py-24 overflow-hidden">
            {/* Background Transitions */}
            <div className={`absolute inset-0 transition-all duration-1000 opacity-20 bg-gradient-to-b ${activeRegion.color} pointer-events-none`} />
            
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14 space-y-3">
                    <motion.span
                        key={activeRegion.id + "-label"}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono text-zinc-400 block"
                    >
                        Regional Coverage
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        Gateway{" "}
                        <span className="text-zinc-400">Navigator</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
                    {/* Left Column: Region Selector (col-span-3) */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                        {regions.map((region) => {
                            const isActive = activeRegion.id === region.id;
                            return (
                                <button
                                    key={region.id}
                                    onClick={() => setActiveRegion(region)}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 rounded-xl text-left transition-colors duration-200 whitespace-nowrap min-w-[140px] lg:min-w-0 ${
                                        isActive 
                                            ? "bg-white/10 border-white/25" 
                                            : "bg-white/5 border-white/10 hover:bg-white/10 opacity-75 hover:opacity-100"
                                    } border backdrop-blur-md`}
                                >
                                    <div className="flex flex-col">
                                        <span className={`text-xs font-mono mb-0.5 transition-colors ${isActive ? 'text-zinc-300' : 'text-zinc-500'}`}>
                                            {region.fullName.split(' ')[0]}
                                        </span>
                                        <span className={`text-lg font-semibold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                                            {region.name}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <motion.div layoutId="activeRegionIndicator" className="hidden md:block w-2 h-2 rounded-full mt-2 md:mt-0" style={{ backgroundColor: region.accent }} />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Bento Box Grid (col-span-9) */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                            >
                                {/* Main Identity Card (Row 1, Col 1-2) */}
                                <div className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-white/10 relative overflow-hidden group">
                                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-2.5 mb-3">
                                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeRegion.accent }} />
                                                    <span className="text-xs font-mono text-zinc-400">Active Corridor</span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-none mb-2">
                                                    {activeRegion.name}
                                                </h3>
                                                <p className="text-zinc-400 text-sm font-medium">
                                                    {activeRegion.fullName}
                                                </p>
                                            </div>
                                            <div className="hidden md:flex w-10 h-10 rounded-lg bg-white/5 border border-white/10 items-center justify-center text-white/50 group-hover:text-white transition-colors">
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {activeRegion.sectors.map((sector) => (
                                                <span key={sector} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
                                                    {sector}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Prime Opportunity Card (Row 1-2, Col 3) */}
                                <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 p-6 md:p-8 rounded-2xl bg-zinc-900 border border-white/10 relative overflow-hidden flex flex-col justify-between group">
                                    <div className="relative z-10 mb-6">
                                        <div className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center" style={{ backgroundColor: `${activeRegion.accent}20`, color: activeRegion.accent }}>
                                            <TrendingUp size={18} />
                                        </div>
                                        <h4 className="text-xs font-mono text-zinc-400 mb-2">Primary Focus</h4>
                                        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug mb-3">
                                            {activeRegion.opportunitySlot.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {activeRegion.opportunitySlot.desc}
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-auto">
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                className="h-full" 
                                                style={{ backgroundColor: activeRegion.accent }} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics Card 1: Compliance */}
                                <div className="p-6 rounded-2xl bg-zinc-950/90 border border-white/10 flex flex-col justify-between gap-4">
                                    <div className="flex items-center gap-2.5 text-zinc-400">
                                        <ShieldCheck size={16} />
                                        <span className="text-xs font-mono">Compliance Index</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <Counter value={activeRegion.compliance} />
                                        <span className="text-lg font-medium text-zinc-400">%</span>
                                    </div>
                                </div>

                                {/* Metrics Card 2: Growth / Legacy */}
                                <div className="p-6 rounded-2xl bg-zinc-950/90 border border-white/10 flex flex-col justify-between gap-4">
                                    <div className="flex items-center gap-2.5 text-zinc-400">
                                        <Activity size={16} />
                                        <span className="text-xs font-mono">Growth Index</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-medium text-zinc-400">+</span>
                                        <Counter value={activeRegion.legacy} />
                                        <span className="text-sm font-medium text-zinc-400 ml-1">pts</span>
                                    </div>
                                </div>

                                {/* Synergy & Connections Card (Row 3, Col 1-3) */}
                                <div className="md:col-span-2 lg:col-span-3 p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden bg-zinc-950/90">
                                    <div className="relative z-10 flex-1">
                                        <div className="flex items-center gap-2.5 text-zinc-400 mb-2">
                                            <Globe2 size={16} />
                                            <span className="text-xs font-mono">Cross-Border Synergy</span>
                                        </div>
                                        <p className="text-base md:text-lg text-white font-medium leading-snug max-w-3xl">
                                            {activeRegion.synergy}
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex flex-wrap gap-2.5 w-full md:w-auto">
                                        {activeRegion.connections.map(connId => {
                                            const conn = regions.find(r => r.id === connId);
                                            return conn ? (
                                                <div key={conn.id} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conn.accent }} />
                                                    <span className="text-xs font-medium text-white">{conn.name}</span>
                                                </div>
                                            ) : null;
                                        })}
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

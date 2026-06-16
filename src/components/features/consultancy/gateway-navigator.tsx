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
    Globe2,
    Network
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

    return <span className="text-6xl font-black text-white italic leading-none">{displayValue}</span>;
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
            title: "Smart Infrastructure",
            desc: "NEOM and Red Sea development contracts are peaking.",
            icon: Building2
        },
        compliance: 92,
        legacy: 18,
        synergy: "Connects with India for Tech Talent Export.",
        connections: ["india"]
    },
    {
        id: "dubai",
        name: "Dubai/GCC",
        fullName: "United Arab Emirates",
        color: "from-emerald-400/20 to-emerald-800/40",
        accent: "#34D399",
        location: { lat: 25.2048, lng: 55.2708 }, // Dubai
        cameraTarget: { phi: 216.67, theta: 26.06 },
        sectors: ["Real Estate", "Web3", "Logistics", "Hospitality"],
        opportunitySlot: {
            title: "Secondary Markets",
            desc: "DIFC is seeing record-breaking hedge fund entries.",
            icon: BarChart3
        },
        compliance: 98,
        legacy: 25,
        synergy: "Nodes back to Indonesia for Logistics Scaling.",
        connections: ["indonesia"]
    },
    {
        id: "india",
        name: "India",
        fullName: "Global Workforce Hub",
        color: "from-teal-600/20 to-teal-950/40",
        accent: "#0D9488",
        location: { lat: 28.6139, lng: 77.2090 }, // Delhi
        cameraTarget: { phi: 192.32, theta: 20.98 },
        sectors: ["SaaS", "DeepTech", "Manufacturing", "EV"],
        opportunitySlot: {
            title: "Global Capability Centers",
            desc: "Bangalore expansion for Fortune 500 tech stacks.",
            icon: Zap
        },
        compliance: 85,
        legacy: 15,
        synergy: "Feeding KSA with scalable implementation teams.",
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
                <div className="text-center mb-10 md:mb-14 space-y-4">
                    <motion.span
                        key={activeRegion.id + "-label"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/40 block"
                    >
                        Market Intelligence Dashboard
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.85] md:leading-none">
                        Gateway{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Navigator</span>
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
                                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 rounded-2xl text-left transition-all duration-500 whitespace-nowrap min-w-[140px] lg:min-w-0 ${
                                        isActive 
                                            ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-[1.02]" 
                                            : "bg-white/5 border-white/5 hover:bg-white/10 opacity-60 hover:opacity-100"
                                    } border backdrop-blur-md`}
                                >
                                    <div className="flex flex-col">
                                        <span className={`text-[10px] font-black uppercase tracking-widest mb-1 transition-colors ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                                            {region.fullName.split(' ')[0]}
                                        </span>
                                        <span className={`text-xl font-black italic uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                                            {region.name}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <motion.div layoutId="activeRegionIndicator" className="hidden md:block w-1.5 h-1.5 rounded-full mt-2 md:mt-0" style={{ backgroundColor: region.accent }} />
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
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {/* Main Identity Card (Row 1, Col 1-2) */}
                                <div className="md:col-span-2 p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br transition-all duration-1000 group-hover:opacity-40" style={{ backgroundImage: `linear-gradient(to bottom right, transparent, ${activeRegion.accent})` }} />
                                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeRegion.accent }} />
                                                    <span className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em]">Active Node</span>
                                                </div>
                                                <h3 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none mb-2">
                                                    {activeRegion.name}
                                                </h3>
                                                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">
                                                    {activeRegion.fullName}
                                                </p>
                                            </div>
                                            <div className="hidden md:flex w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-white/50 group-hover:text-white transition-colors">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {activeRegion.sectors.map((sector) => (
                                                <span key={sector} className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-black/50 border border-white/10 text-[9px] md:text-[10px] text-white/80 font-black uppercase tracking-widest backdrop-blur-md">
                                                    {sector}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Prime Opportunity Card (Row 1-2, Col 3) */}
                                <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 p-8 rounded-[2rem] bg-zinc-900 border border-white/10 relative overflow-hidden flex flex-col justify-between group">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                                        <activeRegion.opportunitySlot.icon size={180} />
                                    </div>
                                    <div className="relative z-10 mb-8 md:mb-12">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl mb-6 md:mb-8 flex items-center justify-center" style={{ backgroundColor: `${activeRegion.accent}20`, color: activeRegion.accent }}>
                                            <TrendingUp size={20} />
                                        </div>
                                        <h4 className="text-[9px] md:text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em] mb-3 md:mb-4">Prime Sector</h4>
                                        <h3 className="text-2xl md:text-3xl font-black italic text-white uppercase leading-none tracking-tighter mb-3 md:mb-4">
                                            {activeRegion.opportunitySlot.title}
                                        </h3>
                                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                                            {activeRegion.opportunitySlot.desc}
                                        </p>
                                    </div>
                                    <div className="relative z-10 mt-auto">
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full" 
                                                style={{ backgroundColor: activeRegion.accent }} 
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics Card 1: Compliance */}
                                <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between gap-6">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <ShieldCheck size={18} />
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Compliance</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <Counter value={activeRegion.compliance} />
                                        <span className="text-xl md:text-2xl font-black text-white/50 italic mb-1">%</span>
                                    </div>
                                </div>

                                {/* Metrics Card 2: Growth / Legacy */}
                                <div className="p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between gap-6">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <Activity size={18} />
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Growth Index</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-xl md:text-2xl font-black text-white/50 italic mb-1">+</span>
                                        <Counter value={activeRegion.legacy} />
                                        <span className="text-lg md:text-xl font-black text-white/50 italic mb-1">pts</span>
                                    </div>
                                </div>

                                {/* Synergy & Connections Card (Row 3, Col 1-3) */}
                                <div className="md:col-span-2 lg:col-span-3 p-6 md:p-8 rounded-[2rem] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 relative overflow-hidden" style={{ backgroundColor: `${activeRegion.accent}15` }}>
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                        <Network size={200} />
                                    </div>
                                    <div className="relative z-10 flex-1">
                                        <div className="flex items-center gap-3 text-white/60 mb-3 md:mb-4">
                                            <Globe2 size={18} />
                                            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Cross-Border Synergy</span>
                                        </div>
                                        <p className="text-lg md:text-2xl text-white font-bold italic leading-tight max-w-3xl">
                                            &ldquo;{activeRegion.synergy}&rdquo;
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex flex-wrap gap-3 w-full md:w-auto">
                                        {activeRegion.connections.map(connId => {
                                            const conn = regions.find(r => r.id === connId);
                                            return conn ? (
                                                <div key={conn.id} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: conn.accent }} />
                                                    <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">{conn.name}</span>
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

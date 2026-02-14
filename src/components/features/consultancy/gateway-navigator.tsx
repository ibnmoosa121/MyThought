"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
    Users,
    TrendingUp,
    ShieldCheck,
    History,
    ArrowUpRight,
    Zap,
    Building2,
    BarChart3
} from "lucide-react";
import { World } from "@/components/ui/globe";

const Counter = ({ value }: { value: number }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const obj = { val: displayValue };
        gsap.to(obj, {
            val: value,
            duration: 1,
            ease: "power2.out",
            onUpdate: () => setDisplayValue(Math.floor(obj.val))
        });
    }, [value, displayValue]);

    return <span ref={nodeRef} className="text-6xl font-black text-white italic leading-none">{displayValue}</span>;
};

interface RegionData {
    id: string;
    name: string;
    fullName: string;
    color: string;
    accent: string;
    location: { lat: number; lng: number };
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
        location: { lat: 23.8859, lng: 45.0792 },
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
        location: { lat: 25.2048, lng: 55.2708 },
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
        location: { lat: 20.5937, lng: 78.9629 },
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
        name: "Indonesia",
        fullName: "SEA Digital Powerhouse",
        color: "from-emerald-700/20 to-emerald-950/40",
        accent: "#059669",
        location: { lat: -0.7893, lng: 113.9213 },
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

    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 25.2048, lng: 55.2708 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const arcs = regions.flatMap(region =>
        region.connections.map(connId => {
            const target = regions.find(r => r.id === connId);
            if (!target) return null;
            return {
                order: 1,
                startLat: region.location.lat,
                startLng: region.location.lng,
                endLat: target.location.lat,
                endLng: target.location.lng,
                arcAlt: 0.2,
                color: region.accent,
            };
        }).filter(Boolean)
    ) as any[];

    return (
        <section className="relative bg-black py-16 md:py-24 overflow-hidden">
            {/* Background Transitions */}
            <div className={`absolute inset-0 transition-all duration-1000 opacity-20 bg-gradient-to-b ${activeRegion.color} pointer-events-none`} />

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

                {/* === DESKTOP: 3-Column Layout with Globe in Center === */}
                <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 xl:gap-10 items-center">

                    {/* LEFT COLUMN — Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRegion.id + "-left"}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col gap-5"
                        >
                            {/* Main Stats Card */}
                            <div className="p-8 rounded-[2rem] bg-white text-black space-y-6 overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <activeRegion.opportunitySlot.icon size={160} />
                                </div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="space-y-1">
                                        <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-none">
                                            {activeRegion.name}
                                        </h3>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                                            {activeRegion.fullName}
                                        </p>
                                    </div>
                                    <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {activeRegion.sectors.map((sector) => (
                                        <span key={sector} className="px-3 py-1.5 rounded-full border border-black/10 text-[9px] font-black uppercase tracking-widest">
                                            {sector}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Lucrative Opportunity */}
                            <div className="p-7 rounded-[2rem] bg-zinc-900 border border-white/10 space-y-5">
                                <div className="flex items-center gap-3 text-emerald-500">
                                    <TrendingUp size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Prime Sector</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black text-white italic uppercase">{activeRegion.opportunitySlot.title}</h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">{activeRegion.opportunitySlot.desc}</p>
                                </div>
                            </div>

                            {/* Service Synergy */}
                            <div className={`p-7 rounded-[2rem] bg-gradient-to-br border border-white/10 space-y-4 flex flex-col justify-between ${activeRegion.color.replace('opacity-20', 'opacity-40')}`}>
                                <div className="flex items-center gap-3 text-white">
                                    <Users size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Cross-Border Synergy</span>
                                </div>
                                <p className="text-white text-base font-bold italic leading-tight">
                                    &ldquo;{activeRegion.synergy}&rdquo;
                                </p>
                                <div className="pt-1 flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest">
                                    <span>Scale Strategy</span>
                                    <div className="h-px flex-1 bg-white/20" />
                                    <span>Expand Now</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* CENTER — Globe + Region Selector */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-[420px] xl:w-[480px] aspect-square">
                            <World
                                globeConfig={globeConfig}
                                data={arcs}
                            />
                            {/* Decorative rings */}
                            <div className="absolute -inset-5 border border-white/5 rounded-full pointer-events-none animate-[spin_30s_linear_infinite]" />
                            <div className="absolute -inset-10 border border-white/[0.03] rounded-full pointer-events-none animate-[spin_45s_linear_infinite_reverse]" />
                        </div>

                        {/* Region Selector */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {regions.map((region) => (
                                <motion.button
                                    key={region.id}
                                    onClick={() => setActiveRegion(region)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-500 backdrop-blur-xl
                                        ${activeRegion.id === region.id
                                            ? "bg-white border-white text-black shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                                            : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                        }`}
                                >
                                    {region.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRegion.id + "-right"}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col gap-5"
                        >
                            {/* Compliance Meter */}
                            <div className="p-7 rounded-[2rem] bg-zinc-900 border border-white/10 space-y-5">
                                <div className="flex items-center gap-3 text-blue-500">
                                    <ShieldCheck size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Regulatory Health</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <span className="text-4xl font-black text-white italic leading-none">{activeRegion.compliance}%</span>
                                        <span className="text-[9px] font-bold uppercase text-zinc-500">Compliance</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${activeRegion.compliance}%` }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="h-full bg-blue-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Legacy Stat */}
                            <div className="p-7 rounded-[2rem] bg-zinc-900 border border-white/10 space-y-5">
                                <div className="flex items-center gap-3 text-amber-500">
                                    <History size={18} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Global Legacy</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-baseline gap-2">
                                        <Counter value={activeRegion.legacy} />
                                        <span className="text-lg font-bold text-white uppercase italic">Years</span>
                                    </div>
                                    <p className="text-zinc-500 text-xs leading-relaxed">Dedicated boots on the ground in ecosystem.</p>
                                </div>
                            </div>

                            {/* Connected Regions */}
                            <div className="p-7 rounded-[2rem] bg-zinc-900/60 border border-white/10 space-y-4">
                                <div className="flex items-center gap-3 text-white/60">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Active Connections</span>
                                </div>
                                <div className="space-y-2">
                                    {activeRegion.connections.map(connId => {
                                        const connected = regions.find(r => r.id === connId);
                                        if (!connected) return null;
                                        return (
                                            <motion.button
                                                key={connId}
                                                onClick={() => setActiveRegion(connected)}
                                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: connected.accent }} />
                                                    <span className="text-xs font-black text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">{connected.name}</span>
                                                </div>
                                                <ArrowUpRight size={14} className="text-white/30 group-hover:text-white transition-colors" />
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* === MOBILE: Stacked Layout === */}
                <div className="lg:hidden space-y-8">
                    {/* Globe */}
                    <div className="relative w-full max-w-[320px] mx-auto aspect-square">
                        <World
                            globeConfig={globeConfig}
                            data={arcs}
                        />
                    </div>

                    {/* Region Selector */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {regions.map((region) => (
                            <motion.button
                                key={region.id}
                                onClick={() => setActiveRegion(region)}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2.5 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all duration-500
                                    ${activeRegion.id === region.id
                                        ? "bg-white border-white text-black"
                                        : "bg-white/5 border-white/10 text-white/50"
                                    }`}
                            >
                                {region.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Data Cards */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRegion.id + "-mobile"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-4"
                        >
                            {/* Main Stats */}
                            <div className="p-6 rounded-[1.5rem] bg-white text-black space-y-5 overflow-hidden relative">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">{activeRegion.name}</h3>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">{activeRegion.fullName}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {activeRegion.sectors.map((sector) => (
                                        <span key={sector} className="px-3 py-1 rounded-full border border-black/10 text-[8px] font-black uppercase tracking-widest">{sector}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* Compliance */}
                                <div className="p-5 rounded-[1.5rem] bg-zinc-900 border border-white/10 space-y-3">
                                    <div className="flex items-center gap-2 text-blue-500">
                                        <ShieldCheck size={16} />
                                        <span className="text-[8px] font-black uppercase tracking-widest">Health</span>
                                    </div>
                                    <span className="text-2xl font-black text-white italic block">{activeRegion.compliance}%</span>
                                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${activeRegion.compliance}%` }} className="h-full bg-blue-500 rounded-full" />
                                    </div>
                                </div>

                                {/* Legacy */}
                                <div className="p-5 rounded-[1.5rem] bg-zinc-900 border border-white/10 space-y-3">
                                    <div className="flex items-center gap-2 text-amber-500">
                                        <History size={16} />
                                        <span className="text-[8px] font-black uppercase tracking-widest">Legacy</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black text-white italic">{activeRegion.legacy}</span>
                                        <span className="text-xs font-bold text-white/50 uppercase italic">Yrs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Opportunity */}
                            <div className="p-5 rounded-[1.5rem] bg-zinc-900 border border-white/10 space-y-3">
                                <div className="flex items-center gap-2 text-emerald-500">
                                    <TrendingUp size={16} />
                                    <span className="text-[8px] font-black uppercase tracking-widest">Prime Sector</span>
                                </div>
                                <h4 className="text-lg font-black text-white italic uppercase">{activeRegion.opportunitySlot.title}</h4>
                                <p className="text-zinc-500 text-xs leading-relaxed">{activeRegion.opportunitySlot.desc}</p>
                            </div>

                            {/* Synergy */}
                            <div className={`p-5 rounded-[1.5rem] bg-gradient-to-br border border-white/10 space-y-3 ${activeRegion.color.replace('opacity-20', 'opacity-40')}`}>
                                <div className="flex items-center gap-2 text-white">
                                    <Users size={16} />
                                    <span className="text-[8px] font-black uppercase tracking-widest">Synergy</span>
                                </div>
                                <p className="text-white text-sm font-bold italic leading-tight">&ldquo;{activeRegion.synergy}&rdquo;</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

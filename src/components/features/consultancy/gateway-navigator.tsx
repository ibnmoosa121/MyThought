"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
    Users,
    TrendingUp,
    ShieldCheck,
    History,
    Globe,
    ArrowUpRight,
    Zap,
    Building2,
    BarChart3
} from "lucide-react";

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
    rotation: number;
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
        rotation: 45,
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
        rotation: 0,
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
        rotation: 120,
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
        rotation: 180,
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
    const globeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (globeRef.current) {
            gsap.to(globeRef.current, {
                rotateY: activeRegion.rotation,
                duration: 1.5,
                ease: "power3.inOut"
            });
        }
    }, [activeRegion]);

    const [dimensions, setDimensions] = useState({ radius: 280, view: 400 });

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setDimensions({
                radius: isMobile ? 140 : 280,
                view: isMobile ? 250 : 400
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-[120vh] bg-black py-20 md:py-32 overflow-hidden flex flex-col items-center">
            {/* Background Transitions */}
            <div className={`absolute inset-0 transition-all duration-1000 opacity-20 bg-gradient-to-b ${activeRegion.color} pointer-events-none`} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.span
                        key={activeRegion.id + "-label"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-black uppercase tracking-[0.4em] text-white/40"
                    >
                        Market Intelligence Dashboard
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.9] md:leading-none">
                        Gateway <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Navigator</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left: Interactive Globe Interface */}
                    <div className="relative flex items-center justify-center py-10 md:py-20 min-h-[400px] md:min-h-[600px] order-2 lg:order-1">
                        {/* Connection Lines SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                            viewBox={`-${dimensions.view} -${dimensions.view} ${dimensions.view * 2} ${dimensions.view * 2}`}>
                            {regions.map((region, idx) => {
                                const angle = (idx * (360 / regions.length)) * (Math.PI / 180);
                                const start = {
                                    x: Math.cos(angle) * dimensions.radius,
                                    y: Math.sin(angle) * dimensions.radius
                                };
                                return region.connections.map(connId => {
                                    const connIdx = regions.findIndex(r => r.id === connId);
                                    if (connIdx === -1) return null;
                                    const connAngle = (connIdx * (360 / regions.length)) * (Math.PI / 180);
                                    const end = {
                                        x: Math.cos(connAngle) * dimensions.radius,
                                        y: Math.sin(connAngle) * dimensions.radius
                                    };

                                    const isActive = activeRegion.id === region.id || activeRegion.id === connId;

                                    return (
                                        <motion.path
                                            key={`${region.id}-${connId}`}
                                            d={`M ${start.x} ${start.y} Q 0 0 ${end.x} ${end.y}`}
                                            stroke={isActive ? activeRegion.accent : "white"}
                                            strokeWidth={isActive ? 2 : 0.5}
                                            fill="none"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{
                                                pathLength: isActive ? 1 : 0.5,
                                                opacity: isActive ? 0.6 : 0.1,
                                                stroke: isActive ? activeRegion.accent : "rgba(255,255,255,0.2)"
                                            }}
                                            transition={{ duration: 1 }}
                                        />
                                    );
                                });
                            })}
                        </svg>

                        {/* Satellites */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {regions.map((region, idx) => {
                                const angle = (idx * (360 / regions.length)) * (Math.PI / 180);
                                const x = Math.cos(angle) * dimensions.radius;
                                const y = Math.sin(angle) * dimensions.radius;

                                return (
                                    <motion.button
                                        key={region.id}
                                        onClick={() => setActiveRegion(region)}
                                        className={`absolute w-20 h-20 md:w-32 md:h-32 rounded-full border flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-500 backdrop-blur-xl group z-20
                                            ${activeRegion.id === region.id
                                                ? "bg-white border-white text-black scale-110 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                                                : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                            }`}
                                        style={{ x, y }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                                            {region.id === 'ksa' && (
                                                <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                                    <motion.path d="M12 2L12 22 M7 7L17 17 M17 7L7 17" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                                                    <motion.circle cx="12" cy="12" r="3" fill="currentColor" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                                                </motion.svg>
                                            )}
                                            {region.id === 'dubai' && (
                                                <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                                    <motion.path d="M4 21V9l8-6 8 6v12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                                                    <motion.path d="M9 21V12h6v9" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                                                </motion.svg>
                                            )}
                                            {region.id === 'india' && (
                                                <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                                    <motion.path d="M7 8l-4 4 4 4 M17 8l4 4-4 4 M13 4l-2 16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                                                    <motion.circle cx="12" cy="12" r="2" fill="currentColor" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
                                                </motion.svg>
                                            )}
                                            {region.id === 'indonesia' && (
                                                <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                                    <motion.circle cx="12" cy="12" r="10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
                                                    <motion.path d="M2 12h20 M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20" strokeWidth="1" />
                                                    <motion.circle cx="12" cy="12" r="2" fill="currentColor" animate={{ scale: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                                                </motion.svg>
                                            )}
                                        </div>
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{region.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Central Globe */}
                        <div className="relative w-40 h-40 md:w-80 md:h-80 perspective-1000">
                            <div
                                ref={globeRef}
                                className="w-full h-full rounded-full border border-white/20 relative preserve-3d group cursor-pointer shadow-[0_0_100px_rgba(255,255,255,0.1)] overflow-hidden"
                            >
                                {/* Globe Texture Simulation */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black rounded-full" />
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-full" />
                                <div className="absolute inset-x-0 h-px top-1/2 bg-white/20" />
                                <div className="absolute inset-y-0 w-px left-1/2 bg-white/20" />

                                {/* Inner Core Glow */}
                                <div className={`absolute inset-0 blur-3xl opacity-30 transition-colors duration-700`}
                                    style={{ backgroundColor: activeRegion.accent }}
                                />

                                {/* Mock Continents */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Globe size={240} strokeWidth={0.5} className="text-white opacity-10 animate-pulse" />
                                </div>
                            </div>

                            {/* Outer Rings */}
                            <div className="absolute -inset-10 border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
                            <div className="absolute -inset-20 border border-white/5 rounded-full animate-reverse-spin pointer-events-none" />
                        </div>
                    </div>

                    {/* Right: Data Cards */}
                    <div className="relative min-h-[500px] md:min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                            >
                                {/* Main Stats Card */}
                                <div className="md:col-span-2 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white text-black space-y-6 md:space-y-8 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-10 opacity-5 hidden md:block">
                                        <activeRegion.opportunitySlot.icon size={200} />
                                    </div>
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="space-y-1 md:space-y-2">
                                            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                                                {activeRegion.name}
                                            </h3>
                                            <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] opacity-40">
                                                {activeRegion.fullName}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                                        {activeRegion.sectors.map((sector) => (
                                            <span key={sector} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-black/10 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                                                {sector}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Lucrative Opportunity */}
                                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 border border-white/10 space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4 text-emerald-500">
                                        <TrendingUp size={20} />
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Prime Sector</span>
                                    </div>
                                    <div className="space-y-1 md:space-y-2">
                                        <h4 className="text-xl md:text-2xl font-black text-white italic uppercase">{activeRegion.opportunitySlot.title}</h4>
                                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{activeRegion.opportunitySlot.desc}</p>
                                    </div>
                                </div>

                                {/* Compliance Meter */}
                                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 border border-white/10 space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4 text-blue-500">
                                        <ShieldCheck size={20} />
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Regulatory Health</span>
                                    </div>
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-3xl md:text-4xl font-black text-white italic leading-none">{activeRegion.compliance}%</span>
                                            <span className="text-[8px] md:text-xs font-bold uppercase text-zinc-500">Compliance score</span>
                                        </div>
                                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${activeRegion.compliance}%` }}
                                                className="h-full bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Legacy Stat */}
                                <div className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900 border border-white/10 space-y-4 md:space-y-6">
                                    <div className="flex items-center gap-3 md:gap-4 text-amber-500">
                                        <History size={20} />
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Global Legacy</span>
                                    </div>
                                    <div className="space-y-1 md:space-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <Counter value={activeRegion.legacy} />
                                            <span className="text-lg md:text-xl font-bold text-white uppercase italic">Years</span>
                                        </div>
                                        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">Dedicated boots on the ground in ecosystem.</p>
                                    </div>
                                </div>

                                {/* Service Synergy */}
                                <div className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br border border-white/10 space-y-4 md:space-y-6 flex flex-col justify-between ${activeRegion.color.replace('opacity-20', 'opacity-40')}`}>
                                    <div className="flex items-center gap-3 md:gap-4 text-white">
                                        <Users size={20} />
                                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Cross-Border Synergy</span>
                                    </div>
                                    <p className="text-white text-base md:text-lg font-bold italic leading-tight">
                                        "{activeRegion.synergy}"
                                    </p>
                                    <div className="pt-2 flex items-center gap-2 text-white/40 text-[8px] font-black uppercase tracking-widest">
                                        <span>Scale Strategy</span>
                                        <div className="h-px flex-1 bg-white/20" />
                                        <span>Expand Now</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Decorative CSS for spinning */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes reverse-spin {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-reverse-spin {
                    animation: reverse-spin 25s linear infinite;
                }
            `}} />
        </section>
    );
};

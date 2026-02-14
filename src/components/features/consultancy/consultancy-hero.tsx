"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const consultants = [
    {
        id: "cap",
        name: "Human Capital",
        specialty: "TALENT ORCHESTRATION",
        image: "/assets/images/gulf-human-capital.png",
        color: "#10B981", // Islamic Emerald
        keyword: "STRATEGY"
    },
    {
        id: "ops",
        name: "Sovereign Ops",
        specialty: "STRATEGIC ADVISORY",
        image: "/assets/images/gulf-sovereign-ops.png",
        color: "#004D40", // Islamic Emerald
        keyword: "INSIGHT"
    },
    {
        id: "reg",
        name: "Institutional Reg",
        specialty: "GOVERNANCE & RISK",
        image: "/assets/images/gulf-institutional-reg.png",
        color: "#34D399", // Light Emerald
        keyword: "COMPLY"
    },
    {
        id: "dig",
        name: "Digital Frontier",
        specialty: "TRANSFORMATION",
        image: "/assets/images/gulf-digital-frontier.png",
        color: "#14B8A6", // Teal
        keyword: "EVOLVE"
    },
    {
        id: "exp",
        name: "Regional Growth",
        specialty: "MARKET ASCENSION",
        image: "/assets/images/gulf-regional-growth.png",
        color: "#059669",
        keyword: "EXPAND"
    }
];

const INITIAL_CITIES = [
    { id: 'riyadh', label: 'Riyadh', img: "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 'delhi', label: 'Delhi', img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop" },
    { id: 'jakarta', label: 'Jakarta', img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop" },
    { id: 'dubai', label: 'Dubai', img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop" },
    { id: 'muscat', label: 'Muscat', img: "https://plus.unsplash.com/premium_photo-1674156433236-2338418ec4d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 'doha', label: 'Doha', img: "https://plus.unsplash.com/premium_photo-1697730101992-44eb50ae2d64?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const ShuffleColumn = ({ img, label }: { img: string, label: string }) => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
                src={img}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-0 right-0 z-20 text-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white/80 text-[10px] font-mono uppercase tracking-[0.4em] rotate-180 writing-mode-vertical">
                    {label}
                </span>
            </div>
        </div>
    );
};

export const ConsultancyHero = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [cities, setCities] = useState(INITIAL_CITIES);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-hover sequence for mobile
    useEffect(() => {
        if (window.innerWidth >= 768) return;

        let currentIndex = -1;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % consultants.length;
            setHoveredId(consultants[currentIndex].id);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Shuffle cities effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCities(prev => {
                const newOrder = [...prev];
                // Swap only 2 random columns for subtle movement
                const index1 = Math.floor(Math.random() * newOrder.length);
                let index2 = Math.floor(Math.random() * newOrder.length);
                // Ensure we don't swap with self (though harmless, looks static)
                while (index1 === index2) {
                    index2 = Math.floor(Math.random() * newOrder.length);
                }

                [newOrder[index1], newOrder[index2]] = [newOrder[index2], newOrder[index1]];
                return newOrder;
            });
        }, 5000); // Wait 5s between swaps
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(`${id}-details`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col pt-16 md:pt-24">
            {/* 6-Column City Background */}
            <div className="absolute inset-0 z-0 flex pointer-events-none">
                {cities.map((city) => (
                    <motion.div
                        layout
                        key={city.id}
                        transition={{ duration: 2.5, ease: "easeInOut" }} // Slower, smoother transition
                        className="relative h-full flex-1 overflow-hidden group border-r border-white/5 last:border-r-0"
                    >
                        <ShuffleColumn img={city.img} label={city.label} />
                    </motion.div>
                ))}

                {/* Global Overlays */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            </div>

            {/* Floating Title (Large low-opacity background text) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: hoveredId ? 0.08 : 0.04,
                        scale: hoveredId ? 1.05 : 1,
                        y: hoveredId ? -20 : 0
                    }}
                    className="text-[25vw] font-black italic uppercase leading-none tracking-tighter text-[#10B981] whitespace-nowrap blur-[2px]"
                >
                    {hoveredId ? consultants.find(c => c.id === hoveredId)?.keyword : "CONSULT"}
                </motion.h2>
            </div>

            <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-between py-12">
                <div className="max-w-4xl mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#10B981]/30 text-[#10B981] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm`}
                    >
                        Regional Advisory
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-7xl md:text-[9rem] font-black text-white italic uppercase leading-[0.85] md:leading-[0.75] tracking-tighter mb-4"
                    >
                        Gulf <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399] animate-gradient-x bg-[length:200%_auto]">Advisory</span>
                    </motion.h1>
                </div>

                {/* The Grid of Shadows */}
                <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 mt-8 mb-12 md:mb-0">
                    {consultants.map((consultant, idx) => {
                        const isActive = hoveredId === consultant.id;
                        return (
                            <motion.div
                                key={consultant.id}
                                onMouseEnter={() => setHoveredId(consultant.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => scrollToSection(consultant.id)}
                                className={`relative group cursor-pointer overflow-hidden rounded-2xl border transition-colors bg-zinc-950/50 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''} ${isActive ? 'border-white/20' : 'border-white/5'}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Inner Glow when hovered */}
                                <motion.div
                                    className="absolute inset-0 blur-3xl pointer-events-none transition-opacity duration-700"
                                    style={{
                                        backgroundColor: consultant.color,
                                        opacity: isActive ? 0.2 : 0
                                    }}
                                />

                                {/* The Image (Shadow by default) */}
                                <div className="absolute inset-0 w-full h-full">
                                    <motion.img
                                        src={consultant.image}
                                        alt={consultant.name}
                                        className={`w-full h-full object-cover transition-all duration-700 ease-out ${isActive ? 'brightness-100 grayscale-0' : 'brightness-0 grayscale'}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${isActive ? 'from-black/80 via-black/40' : 'from-black via-black/20 to-transparent'}`} />
                                </div>

                                {/* The Essence Text */}
                                <div className={`absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-30 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                    <motion.span
                                        className="block text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-1"
                                        style={{ color: consultant.color }}
                                    >
                                        {consultant.specialty}
                                    </motion.span>
                                    <h3 className="text-lg md:text-xl font-black text-white italic uppercase tracking-tighter leading-none">
                                        {consultant.name}
                                    </h3>
                                </div>

                                {/* Parallax Depth Keyword */}
                                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter scale-150 rotate-[-10deg]">
                                        {consultant.keyword}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
        </section>
    );
};


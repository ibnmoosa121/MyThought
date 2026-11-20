"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const consultants = [
    {
        id: "cap",
        name: "Human Capital",
        specialty: "Workforce Strategy",
        image: "/assets/images/gulf-human-capital.webp",
        color: "#10B981",
        keyword: "STRATEGY"
    },
    {
        id: "ops",
        name: "Institutional Ops",
        specialty: "Operational Advisory",
        image: "/assets/images/gulf-sovereign-ops.webp",
        color: "#10B981",
        keyword: "INSIGHT"
    },
    {
        id: "reg",
        name: "Governance & Risk",
        specialty: "Regulatory Compliance",
        image: "/assets/images/gulf-institutional-reg.webp",
        color: "#34D399",
        keyword: "COMPLY"
    },
    {
        id: "dig",
        name: "Digital Systems",
        specialty: "Enterprise Transformation",
        image: "/assets/images/gulf-digital-frontier.webp",
        color: "#14B8A6",
        keyword: "SYSTEMS"
    },
    {
        id: "exp",
        name: "Regional Growth",
        specialty: "Market Entry",
        image: "/assets/images/gulf-regional-growth.webp",
        color: "#059669",
        keyword: "EXPAND"
    }
];

const INITIAL_CITIES = [
    { id: 'riyadh', label: 'Riyadh', img: "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?q=75&w=600&auto=format&fit=crop" },
    { id: 'delhi', label: 'Delhi', img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=75&w=600&auto=format&fit=crop" },
    { id: 'jakarta', label: 'Jakarta', img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=75&w=600&auto=format&fit=crop" },
    { id: 'dubai', label: 'Dubai', img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=75&w=600&auto=format&fit=crop" },
    { id: 'muscat', label: 'Muscat', img: "https://plus.unsplash.com/premium_photo-1674156433236-2338418ec4d9?q=75&w=600&auto=format&fit=crop" },
    { id: 'doha', label: 'Doha', img: "https://plus.unsplash.com/premium_photo-1697730101992-44eb50ae2d64?q=75&w=600&auto=format&fit=crop" }
];

const ShuffleColumn = ({ img, label }: { img: string, label: string }) => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img
                src={img}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                decoding="async"
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

            <div className="relative z-20 container mx-auto px-4 md:px-6 h-full flex flex-col justify-between py-12">
                <div className="max-w-4xl mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-[#10B981]/30 text-[#10B981] text-xs font-mono mb-5 backdrop-blur-sm"
                    >
                        Regional Advisory
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-4"
                    >
                        Gulf{" "}
                        <span className="text-[#10B981]">Advisory</span>
                    </motion.h1>
                    <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
                        Market entry, regulatory alignment, and operational execution across Saudi Arabia, the UAE, and South/Southeast Asia.
                    </p>
                </div>

                {/* The Grid */}
                <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-8 mb-12 md:mb-0">
                    {consultants.map((consultant, idx) => {
                        const isActive = hoveredId === consultant.id;
                        return (
                            <motion.div
                                key={consultant.id}
                                onMouseEnter={() => setHoveredId(consultant.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => scrollToSection(consultant.id)}
                                className={`relative group cursor-pointer overflow-hidden rounded-xl border transition-colors duration-200 bg-zinc-950/60 backdrop-blur-sm ${idx === 4 ? 'col-span-2 md:col-span-1' : ''} ${isActive ? 'border-white/30 bg-zinc-900/80' : 'border-white/10 hover:border-white/20'}`}
                            >
                                {/* The Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <img
                                        src={consultant.image}
                                        alt={consultant.name}
                                        className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'brightness-100 grayscale-0 opacity-90' : 'brightness-50 grayscale opacity-25'}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-200 ${isActive ? 'from-black/85 via-black/40 to-transparent' : 'from-black/75 via-transparent to-transparent'}`} />
                                </div>

                                {/* The Essence Text */}
                                <div className={`absolute bottom-5 md:bottom-6 left-5 md:left-6 right-5 md:right-6 z-30 transition-all duration-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'}`}>
                                    <span
                                        className="block text-xs font-mono mb-1"
                                        style={{ color: consultant.color }}
                                    >
                                        {consultant.specialty}
                                    </span>
                                    <h3 className="text-base md:text-lg font-semibold text-white tracking-tight leading-snug">
                                        {consultant.name}
                                    </h3>
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


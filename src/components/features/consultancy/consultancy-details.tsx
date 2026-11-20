"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Custom Animated Icons ---

const AnimatedHumanCapital = ({ color }: { color: string }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 ${color}`}>
            <motion.circle
                cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M20 85 C20 65, 80 65, 80 85" fill="none" stroke="currentColor" strokeWidth="4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            {[1, 2, 3].map((i) => (
                <motion.circle
                    key={i} cx={30 + i * 10} cy="50" r="2" fill="currentColor"
                    animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
            ))}
        </motion.svg>
    </div>
);

const AnimatedSovereignOps = ({ color }: { color: string }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 ${color}`}>
            <motion.rect
                x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="4"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
                cx="50" cy="50" r="10" fill="currentColor"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M10 50 H90 M50 10 V90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </motion.svg>
    </div>
);

const AnimatedReg = ({ color }: { color: string }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 ${color}`}>
            <motion.path
                d="M20 20 H80 V80 H20 Z" fill="none" stroke="currentColor" strokeWidth="4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.line
                x1="35" y1="40" x2="65" y2="40" stroke="currentColor" strokeWidth="4"
                animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.line
                x1="45" y1="55" x2="75" y2="55" stroke="currentColor" strokeWidth="4"
                animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.rect
                x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"
                animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.svg>
    </div>
);

const AnimatedFrontier = ({ color }: { color: string }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 ${color}`}>
            <motion.path
                d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="4"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
                cx="50" cy="50" r="5" fill="currentColor"
                animate={{ scale: [1, 2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            />
            {[0, 90, 180, 270].map((angle) => (
                <motion.line
                    key={angle} x1="50" y1="50" x2="50" y2="0" stroke="currentColor" strokeWidth="2"
                    transform={`rotate(${angle} 50 50)`}
                    animate={{ y2: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }}
                />
            ))}
        </motion.svg>
    </div>
);

const AnimatedGrowth = ({ color }: { color: string }) => (
    <div className="relative w-full h-full flex items-center justify-center">
        <motion.svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 ${color}`}>
            <motion.path
                d="M20 70 L40 50 L60 60 L85 30"
                fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M75 30 H85 V40"
                fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, repeat: Infinity }}
            />
            <motion.circle
                cx="85" cy="30" r="4" fill="currentColor"
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            />
        </motion.svg>
    </div>
);

const details = [
    {
        id: "cap",
        name: "Human Capital",
        title: "Workforce Strategy & Culture",
        desc: "Localized leadership development, nationalization planning, and organizational alignment for global teams entering the Gulf market.",
        icon: AnimatedHumanCapital,
        color: "text-[#10B981]",
        bg: "bg-[#10B981]/10",
        video: "https://player.vimeo.com/external/370331493.sd.mp4?s=34d73507153997171d3396f2a89990a2f4da8e8a&profile_id=139&oauth2_token_id=57447761",
        features: ["Nationalization Strategy", "Executive Placement", "Performance Frameworks", "Culture Alignment"]
    },
    {
        id: "ops",
        name: "Institutional Ops",
        title: "Institutional & Operational Advisory",
        desc: "Operational and financial advisory tailored to the regulatory and fiscal frameworks of Saudi Arabia and the UAE.",
        icon: AnimatedSovereignOps,
        color: "text-[#10B981]",
        bg: "bg-[#10B981]/10",
        video: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1638290f6534571f1118a8008a09904990d18d4&profile_id=139&oauth2_token_id=57447761",
        features: ["Capital Structuring", "Operational Efficiency", "Regional Risk Models", "Resource Allocation"]
    },
    {
        id: "reg",
        name: "Governance & Risk",
        title: "Governance & Regulatory Compliance",
        desc: "Cross-border legal structuring, contract governance, and regulatory alignment across GCC jurisdictions.",
        icon: AnimatedReg,
        color: "text-[#34D399]",
        bg: "bg-[#34D399]/10",
        video: "https://player.vimeo.com/external/449171784.sd.mp4?s=74f7d4323c3164996417387cc6b7a26c4f74d47c&profile_id=139&oauth2_token_id=57447761",
        features: ["Cross-Border Strategy", "Contract Governance", "Jurisdictional Setup", "IP Protection"]
    },
    {
        id: "dig",
        name: "Digital Systems",
        title: "Enterprise Tech & AI Strategy",
        desc: "Applied AI strategy, workflow automation, and enterprise systems integration for regional operations.",
        icon: AnimatedFrontier,
        color: "text-[#14B8A6]",
        bg: "bg-[#14B8A6]/10",
        video: "https://player.vimeo.com/external/517090025.sd.mp4?s=d009214D1f6e1f062B72C76C87C3C5831BE0C675&profile_id=139&oauth2_token_id=57447761",
        features: ["AI Adoption Roadmaps", "Workflow Automation", "Systems Integration", "Cyber Resilience"]
    },
    {
        id: "exp",
        name: "Regional Growth",
        title: "Market Entry & Scaling",
        desc: "Territory analysis, commercial partnerships, and market-entry execution across Saudi Arabia, the UAE, and neighboring GCC markets.",
        icon: AnimatedGrowth,
        color: "text-[#059669]",
        bg: "bg-[#059669]/10",
        video: "https://player.vimeo.com/external/462102174.sd.mp4?s=69f33ae1f79F1f162B72C76C87C3C5831BE0C675&profile_id=139&oauth2_token_id=57447761",
        features: ["GCC Territory Analysis", "Market Positioning", "Strategic Partnerships", "Operations Scaling"]
    }
];

export const ConsultancyDetails = () => {
    const [detailsState, setDetailsState] = useState(details.map(d => ({ ...d, status: null as null | 'email' | 'success' })));
    const [activePulse, setActivePulse] = useState<number | null>(null);

    // Auto-pulse hover effect for mobile
    useEffect(() => {
        if (window.innerWidth >= 768) return;

        let currentIndex = -1;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % details.length;
            setActivePulse(currentIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-16 md:space-y-24">
                    {detailsState.map((detail, idx) => {
                        const isPulsing = activePulse === idx;
                        return (
                            <section
                                key={detail.id}
                                id={`${detail.id}-details`}
                                className="relative scroll-mt-32 p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 bg-zinc-950/60 group"
                            >
                                <div className="relative z-10 flex flex-col lg:flex-row gap-10 md:gap-12 items-center">
                                    {/* Visual Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex-1 w-full"
                                    >
                                        <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden border border-white/10 group bg-zinc-900">
                                            {detail.video && (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPulsing ? 'opacity-60' : 'opacity-40 group-hover:opacity-60'}`}
                                                >
                                                    <source src={detail.video} type="video/mp4" />
                                                </video>
                                            )}
                                            <div className={`absolute inset-0 ${detail.bg} transition-opacity duration-500 ${isPulsing ? 'opacity-40' : 'opacity-20 group-hover:opacity-40'}`} />
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-28 h-28 md:w-40 md:h-40">
                                                    <detail.icon color={detail.color} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Content Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`flex-1 space-y-6 ${idx % 2 === 0 ? 'lg:order-first' : ''}`}
                                    >
                                        <div>
                                            <span className={`text-xs font-mono ${detail.color} mb-3 block`}>
                                                {detail.name}
                                            </span>
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
                                                {detail.title}
                                            </h2>
                                            <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                                                {detail.desc}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {detail.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-2.5 text-zinc-300">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${detail.bg} border border-current ${detail.color}`} />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Dynamic Inquiry Flow */}
                                        <div className="relative min-h-[48px] pt-2">
                                            <AnimatePresence mode="wait">
                                                {!detail.status ? (
                                                    <motion.button
                                                        key="btn"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        onClick={() => {
                                                            setDetailsState(prev => prev.map((item, i) => 
                                                                i === idx ? { ...item, status: 'email' } : item
                                                            ));
                                                        }}
                                                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors duration-150 cursor-pointer"
                                                    >
                                                        <span>Request briefing</span>
                                                        <ArrowRight size={16} />
                                                    </motion.button>
                                                ) : detail.status === 'email' ? (
                                                    <motion.div
                                                        key="input"
                                                        initial={{ opacity: 0, y: 6 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        className="flex items-center gap-2 w-full max-w-md bg-white/5 border border-white/15 rounded-lg p-1 pl-3"
                                                    >
                                                        <input 
                                                            autoFocus
                                                            type="email"
                                                            placeholder="Work email"
                                                            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-zinc-500"
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    setDetailsState(prev => prev.map((item, i) => 
                                                                        i === idx ? { ...item, status: 'success' } : item
                                                                    ));
                                                                }
                                                            }}
                                                        />
                                                        <button 
                                                            onClick={() => {
                                                                setDetailsState(prev => prev.map((item, i) => 
                                                                    i === idx ? { ...item, status: 'success' } : item
                                                                ));
                                                            }}
                                                            className="bg-white text-black px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors shrink-0"
                                                        >
                                                            Submit
                                                        </button>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="success"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="flex items-center gap-2.5 text-zinc-200"
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                                        <span className="text-sm font-medium">
                                                            Request received. Our advisory team will reach out shortly.
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


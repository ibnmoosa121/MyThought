"use client";

import { motion } from "framer-motion";
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
        title: "Talent Orchestration & Culture",
        desc: "Building a workforce for the next century. We specialize in localized leadership development and cultural alignment for global organizations entering the Gulf market.",
        icon: AnimatedHumanCapital,
        color: "text-[#10B981]",
        bg: "bg-[#10B981]/10",
        video: "https://player.vimeo.com/external/370331493.sd.mp4?s=34d73507153997171d3396f2a89990a2f4da8e8a&profile_id=139&oauth2_token_id=57447761",
        features: ["Nationalization Strategy", "Executive Placement", "Performance Architecture", "Culture Mapping"]
    },
    {
        id: "ops",
        name: "Sovereign Ops",
        title: "Sovereign & Institutional Advisory",
        desc: "Institutional-grade financial advice for the region's largest entities. We navigate the unique fiscal landscape of KSA and UAE with precision-built sovereign wealth frameworks.",
        icon: AnimatedSovereignOps,
        color: "text-[#004D40]",
        bg: "bg-[#004D40]/10",
        video: "https://player.vimeo.com/external/434045526.sd.mp4?s=c1638290f6534571f1118a8008a09904990d18d4&profile_id=139&oauth2_token_id=57447761",
        features: ["Wealth Engineering", "Operational Excellence", "Regional Risk Models", "Capital Optimization"]
    },
    {
        id: "reg",
        name: "Institutional Reg",
        title: "Governance & Strategic Compliance",
        desc: "Ironclad legal security for complex regional operations. We harmonize international standards with local jurisdictional requirements to protect your regional legacy.",
        icon: AnimatedReg,
        color: "text-[#34D399]",
        bg: "bg-[#34D399]/10",
        video: "https://player.vimeo.com/external/449171784.sd.mp4?s=74f7d4323c3164996417387cc6b7a26c4f74d47c&profile_id=139&oauth2_token_id=57447761",
        features: ["Cross-Border Strategy", "Contract Engineering", "Jurisdictional Nav", "IP Fortressing"]
    },
    {
        id: "dig",
        name: "Digital Frontier",
        title: "Frontier tech & AI Strategy",
        desc: "Integrating artificial intelligence into the heart of regional enterprise. We build the digital infrastructure that powers the Gulf's futuristic vision of connected cities.",
        icon: AnimatedFrontier,
        color: "text-[#14B8A6]",
        bg: "bg-[#14B8A6]/10",
        video: "https://player.vimeo.com/external/517090025.sd.mp4?s=d009214D1f6e1f062B72C76C87C3C5831BE0C675&profile_id=139&oauth2_token_id=57447761",
        features: ["Vision 2030 AI Roadmap", "Workflow Automation", "Smart City Integration", "Cyber Resilience"]
    },
    {
        id: "exp",
        name: "Regional Growth",
        title: "Market Ascension & Scaling",
        desc: "Dominate the region. Our expansion specialists provide the local networking and intelligence needed to scale from Riyadh to Muscat and beyond.",
        icon: AnimatedGrowth,
        color: "text-[#059669]",
        bg: "bg-[#059669]/10",
        video: "https://player.vimeo.com/external/462102174.sd.mp4?s=69f33ae1f79F1f162B72C76C87C3C5831BE0C675&profile_id=139&oauth2_token_id=57447761",
        features: ["GCC Territory Analysis", "Localized Branding", "Strategic Partnerships", "Scale Orchestration"]
    }
];

export const ConsultancyDetails = () => {
    return (
        <div className="bg-black py-24">
            <div className="container mx-auto px-6">
                <div className="space-y-32">
                    {details.map((detail, idx) => (
                        <section
                            key={detail.id}
                            id={`${detail.id}-details`}
                            className="relative scroll-mt-32 p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] group"
                        >
                            {/* Section Specific Arabesque Background */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] rounded-[2.5rem] md:rounded-[4rem] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700" />
                            <div className={`absolute inset-0 ${detail.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.5rem] md:rounded-[4rem] blur-2xl z-0`} />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative aspect-square md:aspect-video rounded-[2rem] md:rounded-3xl overflow-hidden border border-white/10 group bg-zinc-900">
                                        {detail.video && (
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                                            >
                                                <source src={detail.video} type="video/mp4" />
                                            </video>
                                        )}
                                        <div className={`absolute inset-0 ${detail.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-32 h-32 md:w-48 md:h-48">
                                                <detail.icon color={detail.color} />
                                            </div>
                                        </div>

                                        {/* Floating Elements - Hidden on mobile for cleaner look */}
                                        <div className="absolute top-10 right-10 hidden md:flex gap-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className={`w-2 h-2 rounded-full ${detail.bg} animate-pulse`} style={{ animationDelay: `${i * 0.5}s` }} />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex-1 space-y-8 ${idx % 2 === 0 ? 'lg:order-first' : ''}`}
                                >
                                    <div>
                                        <span className={`text-sm font-black uppercase tracking-[0.3em] ${detail.color} mb-4 block`}>
                                            {detail.name}
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-[0.9] md:leading-none mb-6">
                                            {detail.title}
                                        </h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                            {detail.desc}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {detail.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-white/70 group">
                                                <div className={`w-1.5 h-1.5 rounded-full ${detail.bg} group-hover:scale-150 transition-transform`} />
                                                <span className="text-sm font-medium tracking-tight uppercase group-hover:text-white transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 text-white font-black uppercase italic text-xs tracking-[0.2em] transition-all group overflow-hidden relative`}
                                    >
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <span className="relative z-10 group-hover:text-black transition-colors">Inquire Section</span>
                                        <ArrowRight size={18} className="relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all" />
                                    </button>
                                </motion.div>
                            </div>

                            {/* Decorative line */}
                            {idx < details.length - 1 && (
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};


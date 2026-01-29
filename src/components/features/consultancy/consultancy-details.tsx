"use client";

import { motion } from "framer-motion";
import { Brain, Database, Shield, Zap, TrendingUp, ArrowRight } from "lucide-react";

const details = [
    {
        id: "hr",
        name: "Human Capital",
        title: "Strategic HR & Talent Acquisition",
        desc: "We don't just find employees; we build high-performance cultures. Our methodology combines behavioral science with market intelligence to secure the top 1% of global talent.",
        icon: Brain,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        features: ["Culture Engineering", "Executive Search", "Performance Systems", "Remote Scale Strategy"]
    },
    {
        id: "finance",
        name: "Financial Ops",
        title: "Global Financial Intelligence",
        desc: "Navigating complex fiscal landscapes in Dubai and KSA requires precision. We provide institutional-grade financial modeling and operational oversight to maximize your bottom line.",
        icon: Database,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        features: ["Fiscal Architecture", "Operational Audit", "Risk Mitigation", "Capital Optimization"]
    },
    {
        id: "legal",
        name: "Legal Arch",
        title: "Corporate Law & Compliance",
        desc: "Build your business on a foundation of ironclad compliance. We architect legal frameworks that protect your assets while enabling maximum operational flexibility in emerging markets.",
        icon: Shield,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        features: ["Jurisdictional Strategy", "Contract Engineering", "IP Protection", "Regulatory Nav"]
    },
    {
        id: "tech",
        name: "Digital Strategy",
        title: "Digital Transformation & AI",
        desc: "Future-proof your enterprise with cutting-edge digital blueprints. We integrate AI and autonomous systems into your core workflow to drive exponential efficiency.",
        icon: Zap,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        features: ["AI Integration", "Workflow Automation", "Legacy Modernization", "Cyber Resilience"]
    },
    {
        id: "market",
        name: "Market Expansion",
        title: "Global growth & Scaling",
        desc: "Scale without friction. Our expansion consultants provide the local intelligence and networking power to establish your brand as a dominant force in new territories.",
        icon: TrendingUp,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        features: ["Territory Analysis", "Political Networking", "Brand Adaptation", "Scale Orchestration"]
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
                            className="relative scroll-mt-32"
                        >
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                {/* Visual Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                                        <div className={`absolute inset-0 ${detail.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <detail.icon size={120} className={`${detail.color} opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700`} />
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute top-10 right-10 flex gap-2">
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
                                        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
                                            {detail.title}
                                        </h2>
                                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                            {detail.desc}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {detail.features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-3 text-white/70 group">
                                                <div className={`w-1.5 h-1.5 rounded-full ${detail.bg} group-hover:scale-150 transition-transform`} />
                                                <span className="text-sm font-medium tracking-tight uppercase group-hover:text-white transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase italic text-sm hover:bg-white hover:text-black transition-all group`}>
                                        Inquire Section <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

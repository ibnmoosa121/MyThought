"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Coins, Rocket, Handshake, CalendarRange, ArrowUpRight } from "lucide-react";

const VENTURES_SERVICES = [
    {
        title: "Venture Building",
        desc: "Drawing from extensive hands-on experience in crafting innovative solutions, we're here to turn your entrepreneurial dreams into fully operational businesses.",
        icon: Building2,
        color: "from-amber-400 to-orange-600"
    },
    {
        title: "Mentorship & Sharing",
        desc: "Engage in enlightening sessions tailored to guide, challenge, and inspire, sharing our wealth of knowledge to foster your growth.",
        icon: GraduationCap,
        color: "from-orange-400 to-red-600"
    },
    {
        title: "Investment Syndicate",
        desc: "Join our consortium of investors, collaborating to identify potential and back game-changing innovations.",
        icon: Coins,
        color: "from-yellow-400 to-amber-600"
    },
    {
        title: "Early-Stage Investment",
        desc: "Fueling the future by investing in promising startups at their foundational stages, fostering growth and innovation.",
        icon: Rocket,
        color: "from-amber-500 to-orange-700"
    },
    {
        title: "Ventures Partnership",
        desc: "Collaborate with us for strategic alignment, resource pooling, and mutual growth in the ever-evolving tech landscape.",
        icon: Handshake,
        color: "from-orange-500 to-amber-700"
    },
    {
        title: "Networking Events",
        desc: "Connect, converse, and collaborate at our curated events, bridging the gap between entrepreneurs and industry leaders.",
        icon: CalendarRange,
        color: "from-amber-300 to-yellow-500"
    }
];

export const VenturesPortfolio = () => {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-amber-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Success Engine
                    </motion.span>
                    <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-[ - 0.05em] leading-[0.8]">
                        Strategic <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500">Service</span> Portfolio
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {VENTURES_SERVICES.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/20 transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                                        <service.icon size={32} />
                                    </div>
                                    <ArrowUpRight className="text-white/20 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                </div>

                                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4 group-hover:text-amber-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 group-hover:text-amber-500 transition-colors">
                                        Phase: Scale Ready
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

"use client";

import { motion } from "framer-motion";
import { Users, Award, Briefcase, Zap, Globe, Target } from 'lucide-react';

const stats = [
    { label: "Elite Members", value: "50+", icon: Users, sub: "Global Experts" },
    { label: "Success Stories", value: "200+", icon: Briefcase, sub: "Worldwide Projects" },
    { label: "Global Accolades", value: "15+", icon: Award, sub: "Innovation Awards" },
];

const values = [
    {
        title: "Innovation",
        desc: "We live at the edge of what's possible, constantly redefining technical boundaries.",
        icon: Zap,
        color: "from-blue-500/20 to-blue-900/40"
    },
    {
        title: "Collaboration",
        desc: "Deep integration with our clients turns partnerships into shared breakthroughs.",
        icon: Globe,
        color: "from-emerald-500/20 to-emerald-900/40"
    },
    {
        title: "Excellence",
        desc: "Precision isn't just a goal; it's our baseline for every line of code and every pixel.",
        icon: Target,
        color: "from-zinc-500/20 to-zinc-900/40"
    }
];

export const AboutContent = () => {
    return (
        <div className="bg-black relative py-24 md:py-44">
            <div className="container mx-auto px-6">

                {/* Our Story - High End Typography */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-44">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Trajectory</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            <p>
                                Founded in 2020, MyThought emerged from a singular vision: <span className="text-white">to dismantle the status quo</span> of digital delivery. We noticed a void where high-level strategy and technical mastery should intersect.
                            </p>
                            <p>
                                Today, we operate as a multi-disciplinary hub of innovation, bridging the gap between <span className="text-white">ambitious ideas</span> and <span className="text-white">market-dominating reality</span>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid - Minimalist but Premium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/10 relative overflow-hidden group ${i === 0 ? "md:col-span-2" : ""}`}
                            >
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <stat.icon size={120} />
                                </div>
                                <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                                    <span className="text-6xl md:text-8xl font-black text-white italic mb-2">{stat.value}</span>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                                    <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-1">{stat.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="space-y-24">
                    <div className="text-center space-y-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">The Core Principles</span>
                        <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.9]">
                            Foundational <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Philosophy</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                <div className="relative p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/10 backdrop-blur-xl h-full flex flex-col gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <value.icon size={32} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-white italic uppercase">{value.title}</h3>
                                        <p className="text-zinc-500 leading-relaxed text-sm">
                                            {value.desc}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-6 flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest">
                                        <span>Standard Unit</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Placeholder Replaces */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-44 p-20 rounded-[4rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter">The Human Engine</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed">
                            A curated collective of architects, engineers, and visionaries. Our team defines the DNA of MyThought.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-12 py-5 rounded-full bg-white text-black font-black uppercase italic tracking-widest hover:scale-105 transition-transform">
                            Coming Soon
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

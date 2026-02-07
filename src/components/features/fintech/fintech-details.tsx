"use client";

import { motion } from "framer-motion";
import { Zap, ChartPie, ShieldCheck, Coins, ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "../../../lib/utils";

const FEATURES = [
    {
        title: "Global Liquidity Rails",
        desc: "Instant settlement across 150+ countries with zero-latency protocols.",
        icon: Zap,
        color: "text-teal-500",
    },
    {
        title: "Yield Optimizers",
        desc: "Web3 investment portals designed for maximum capital efficiency.",
        icon: Coins,
        color: "text-cyan-500",
    },
    {
        title: "Neural Analytics",
        desc: "AI-driven budgeting and predictive modeling for institutions.",
        icon: ChartPie,
        color: "text-emerald-500",
    }
];

const BENEFITS = [
    {
        label: "Maximized Value",
        title: "Keep More of What You Earn",
        desc: "We replace expensive bank overhead with direct blockchain settlement, reducing costs by up to 80% per transaction.",
        icon: MousePointer2
    },
    {
        label: "Ironclad Trust",
        title: "Sleep Better, Stay Secured",
        desc: "Your assets are protected by multi-sig governance and military-grade encryption that major banks only dream of.",
        icon: ShieldCheck
    }
];

const STEPS = [
    { number: "01", title: "Architect Protocol", text: "We design a custom ledger tailored to your regulatory and scale requirements." },
    { number: "02", title: "Smart Integration", text: "Our API-first approach connects your legacy systems to the new-age financial rails." },
    { number: "03", title: "Mission Launch", text: "Go live with a redundant, high-availability infra that never sleeps." }
];

export const FintechDetails = () => {
    return (
        <div className="relative bg-black text-white font-['Inter']">
            {/* 1. Core Features Section */}
            <section className="py-32 px-6 border-b border-white/5">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-teal-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                        >
                            Capabilities
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                            High-Performance <br />
                            <span className="text-zinc-600">Financial Engines</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FEATURES.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 border border-white/5 hover:border-teal-500/30 transition-all duration-500"
                            >
                                <f.icon className={cn("w-10 h-10 mb-6 group-hover:scale-110 transition-transform", f.color)} />
                                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">{f.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section className="py-32 px-6 bg-zinc-950/30">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {BENEFITS.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex flex-col items-start"
                            >
                                <span className="px-3 py-1 bg-teal-500/10 text-teal-500 text-[10px] font-black uppercase tracking-widest mb-6">
                                    {b.label}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                                    {b.title}
                                </h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
                                    {b.desc}
                                </p>
                                <hr className="w-12 border-teal-500/30" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. How It Works Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10 hidden lg:block" />

                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl font-black uppercase tracking-widest text-zinc-600 italic">Evolutionary Roadmap</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {STEPS.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative bg-black p-8 text-center"
                            >
                                <div className="text-6xl font-black text-teal-500/10 absolute -top-10 left-1/2 -translate-x-1/2 select-none italic">
                                    {s.number}
                                </div>
                                <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4 relative z-10">{s.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{s.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-32 text-center"
                    >
                        <div className="inline-flex flex-col items-center gap-8">
                            <p className="text-zinc-400 font-medium text-lg italic max-w-sm">
                                "Solving the world's hardest financial problems requires a new kind of architecture."
                            </p>
                            <a
                                href="#contact"
                                className="group flex items-center gap-4 text-white text-xl font-black uppercase italic tracking-tighter border-b-2 border-teal-500 pb-2 hover:text-teal-500 transition-colors"
                            >
                                Contact Our Project Architects
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

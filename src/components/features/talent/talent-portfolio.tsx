"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, ArrowRight, Plus, Truck, ShoppingBag } from "lucide-react";

const TALENT_SERVICES = [
    {
        id: "blue-collar",
        title: "Last-Mile & Logistics",
        desc: "High-volume recruitment for delivery riders, fleet, and warehouse teams.",
        longDesc: "From food delivery riders to warehouse management, we provide rapid-scale staffing for the Gulf's leading quick-commerce and logistics giants.",
        icon: Truck,
        stats: "10k+ Riders Deployed",
        color: "bg-purple-600"
    },
    {
        id: "tech-squads",
        title: "Professional & Tech",
        desc: "Elite technical, AI, and project management augmentation.",
        longDesc: "Access highly vetted software engineers, AI researchers, and PMO specialists who integrate into your tech stack within 14 days.",
        icon: Cpu,
        stats: "140+ Experts",
        color: "bg-purple-500"
    },
    {
        id: "retail-hospitality",
        title: "Retail & Hospitality",
        desc: "Premium workforce for global brands and luxury hospitality.",
        longDesc: "We staff world-class retail outlets and hotels with trained professionals, ensuring consistent brand standards across all customer touchpoints.",
        icon: ShoppingBag,
        stats: "Global Brand focus",
        color: "bg-fuchsia-500"
    },
    {
        id: "compliance",
        title: "Full-Scale Compliance",
        desc: "Navigating regional labor laws across all sectors.",
        longDesc: "Handling visas, payroll, and 100% legal compliance for high-volume blue-collar teams to specialized C-suite executives.",
        icon: ShieldCheck,
        stats: "100% Secured",
        color: "bg-fuchsia-600"
    }
];

export const TalentPortfolio = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="relative py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Success Engine
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.8]">
                        Strategic <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600">Talent</span> Portfolio
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {TALENT_SERVICES.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                                className={`w-full text-left relative overflow-hidden rounded-[2rem] md:rounded-[3rem] transition-all duration-700 border border-white/5 
                                    ${openId === service.id ? 'bg-zinc-900 border-purple-500/30' : 'bg-zinc-950 hover:bg-zinc-900'}
                                `}
                            >
                                <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                    <div className="flex items-center gap-6 md:gap-10">
                                        <div className={`p-4 md:p-6 rounded-2xl md:rounded-3xl ${service.color} text-black group-hover:scale-110 transition-transform duration-500`}>
                                            <service.icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-2 group-hover:text-purple-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-zinc-500 text-sm md:text-lg font-medium group-hover:text-zinc-400 transition-colors">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-8">
                                        <div className="hidden lg:block text-right">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">Impact</p>
                                            <p className="text-xl font-black text-white italic lowercase">{service.stats}</p>
                                        </div>
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500
                                            ${openId === service.id ? 'rotate-45 bg-purple-500 text-black border-transparent' : 'bg-transparent text-white group-hover:border-purple-500/50'}
                                        `}>
                                            <Plus size={24} />
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openId === service.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden bg-gradient-to-b from-transparent to-purple-500/5"
                                        >
                                            <div className="px-8 md:px-12 pb-12 pt-0 flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
                                                <div className="max-w-2xl">
                                                    <div className="h-px w-full bg-white/5 mb-8" />
                                                    <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-light mb-8">
                                                        {service.longDesc}
                                                    </p>
                                                    <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform active:scale-95">
                                                        Request Experts <ArrowRight size={18} />
                                                    </button>
                                                </div>
                                                <div className="hidden lg:block">
                                                    <div className="text-[10rem] font-black text-white/5 italic leading-none select-none">
                                                        0{i + 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

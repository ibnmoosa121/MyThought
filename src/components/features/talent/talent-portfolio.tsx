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
        stats: "10k+ Riders Deployed"
    },
    {
        id: "tech-squads",
        title: "Professional & Tech",
        desc: "Elite technical, AI, and project management augmentation.",
        longDesc: "Access highly vetted software engineers, AI researchers, and PMO specialists who integrate into your tech stack within 14 days.",
        icon: Cpu,
        stats: "140+ Experts"
    },
    {
        id: "retail-hospitality",
        title: "Retail & Hospitality",
        desc: "Premium workforce for global brands and luxury hospitality.",
        longDesc: "We staff world-class retail outlets and hotels with trained professionals, ensuring consistent brand standards across all customer touchpoints.",
        icon: ShoppingBag,
        stats: "Global Brand Focus"
    },
    {
        id: "compliance",
        title: "Full-Scale Compliance",
        desc: "Navigating regional labor laws across all sectors.",
        longDesc: "Handling visas, payroll, and 100% legal compliance for high-volume blue-collar teams to specialized C-suite executives.",
        icon: ShieldCheck,
        stats: "100% Secured"
    }
];

export const TalentPortfolio = () => {
    const [talentState, setTalentState] = useState(TALENT_SERVICES.map(s => ({ ...s, status: null as null | 'email' | 'success' })));
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="relative py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mb-20"
                >
                    <span className="text-zinc-500 font-mono font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
                        01 // Success Engine
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black text-zinc-950 italic uppercase tracking-tighter leading-[0.85]">
                        Strategic <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">
                            Talent
                        </span>{" "}
                        Portfolio
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-5">
                    {talentState.map((service, i) => {
                        const isOpen = openId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="group"
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : service.id)}
                                    className={`w-full text-left relative overflow-hidden rounded-[2rem] md:rounded-[3rem] transition-all duration-500 border backdrop-blur-md
                                        ${isOpen
                                            ? 'bg-zinc-950 text-white border-zinc-900 shadow-[0_30px_70px_rgba(0,0,0,0.28)]'
                                            : 'bg-white/75 text-zinc-950 border-zinc-900/10 hover:bg-white/90 hover:border-zinc-900/25 shadow-[0_18px_45px_rgba(0,0,0,0.06)]'}
                                    `}
                                >
                                    <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex items-center gap-6 md:gap-10">
                                            <div
                                                className={`p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 group-hover:scale-105 ${
                                                    isOpen
                                                        ? 'bg-white text-zinc-950'
                                                        : 'bg-zinc-950 text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)]'
                                                }`}
                                            >
                                                <service.icon size={32} />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-2xl md:text-5xl font-black italic uppercase tracking-tighter mb-2 transition-colors ${
                                                        isOpen ? 'text-white' : 'text-zinc-950 group-hover:text-zinc-700'
                                                    }`}
                                                >
                                                    {service.title}
                                                </h3>
                                                <p
                                                    className={`text-sm md:text-lg font-medium transition-colors ${
                                                        isOpen ? 'text-zinc-400' : 'text-zinc-600'
                                                    }`}
                                                >
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between md:justify-end gap-8">
                                            <div className="hidden lg:block text-right">
                                                <p
                                                    className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-1 ${
                                                        isOpen ? 'text-zinc-500' : 'text-zinc-400'
                                                    }`}
                                                >
                                                    Impact
                                                </p>
                                                <p
                                                    className={`text-xl font-black italic lowercase ${
                                                        isOpen ? 'text-white' : 'text-zinc-950'
                                                    }`}
                                                >
                                                    {service.stats}
                                                </p>
                                            </div>
                                            <div
                                                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                                    isOpen
                                                        ? 'rotate-45 bg-white text-zinc-950 border-transparent'
                                                        : 'bg-transparent text-zinc-950 border-zinc-900/15 group-hover:bg-zinc-950 group-hover:text-white'
                                                }`}
                                            >
                                                <Plus size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                                className="overflow-hidden bg-gradient-to-b from-transparent to-white/[0.03]"
                                            >
                                                <div className="px-8 md:px-12 pb-12 pt-0 flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
                                                    <div className="max-w-2xl">
                                                        <div className="h-px w-full bg-white/10 mb-8" />
                                                        <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed font-light mb-8">
                                                            {service.longDesc}
                                                        </p>
                                                        {/* Dynamic Inquiry Flow */}
                                                        <div className="relative h-14 mt-4">
                                                            <AnimatePresence mode="wait">
                                                                {!service.status ? (
                                                                    <motion.button
                                                                        key="btn"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        exit={{ opacity: 0, y: -10 }}
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setTalentState(prev =>
                                                                                prev.map((item, idx) =>
                                                                                    idx === i ? { ...item, status: 'email' } : item
                                                                                )
                                                                            );
                                                                        }}
                                                                        className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform active:scale-95"
                                                                    >
                                                                        Enquire Experts <ArrowRight size={18} />
                                                                    </motion.button>
                                                                ) : service.status === 'email' ? (
                                                                    <motion.div
                                                                        key="input"
                                                                        initial={{ opacity: 0, y: 10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                                        className="flex items-center gap-2 w-full max-w-md bg-white/10 border border-white/20 rounded-full p-1 pl-6"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <input
                                                                            autoFocus
                                                                            type="email"
                                                                            placeholder="ENTER YOUR EMAIL"
                                                                            className="bg-transparent border-none outline-none text-white text-[10px] uppercase font-bold w-full placeholder:text-white/40"
                                                                            onKeyDown={(e) => {
                                                                                if (e.key === 'Enter') {
                                                                                    setTalentState(prev =>
                                                                                        prev.map((item, idx) =>
                                                                                            idx === i ? { ...item, status: 'success' } : item
                                                                                        )
                                                                                    );
                                                                                }
                                                                            }}
                                                                        />
                                                                        <button
                                                                            onClick={() => {
                                                                                setTalentState(prev =>
                                                                                    prev.map((item, idx) =>
                                                                                        idx === i ? { ...item, status: 'success' } : item
                                                                                    )
                                                                                );
                                                                            }}
                                                                            className="bg-white text-zinc-950 px-6 py-3 rounded-full text-[10px] font-black uppercase italic hover:scale-105 transition-transform"
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </motion.div>
                                                                ) : (
                                                                    <motion.div
                                                                        key="success"
                                                                        initial={{ opacity: 0, x: 20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        className="flex items-center gap-3 text-white"
                                                                    >
                                                                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                                                        <span className="text-[10px] md:text-xs font-black uppercase italic tracking-widest leading-relaxed">
                                                                            We will get in touch with you personally on this.
                                                                        </span>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:block">
                                                        <div className="text-[10rem] font-black text-white/10 italic leading-none select-none">
                                                            0{i + 1}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

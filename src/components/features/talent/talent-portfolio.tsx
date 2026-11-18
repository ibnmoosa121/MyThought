"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, ArrowRight, Plus, Truck, ShoppingBag } from "lucide-react";

const TALENT_SERVICES = [
    {
        id: "blue-collar",
        title: "Last-Mile & Logistics",
        desc: "High-volume recruitment for delivery riders, fleet, and warehouse teams.",
        longDesc: "From delivery riders to warehouse supervisors, we manage rapid-scale staffing for quick-commerce and logistics operators across the Gulf.",
        icon: Truck,
        stats: "10k+ Riders Placed"
    },
    {
        id: "tech-squads",
        title: "Professional & Tech",
        desc: "Vetted software, data, and project management specialists.",
        longDesc: "Add experienced software engineers, AI practitioners, and PMO leads who integrate directly into your engineering workflows within 14 days.",
        icon: Cpu,
        stats: "140+ Specialists"
    },
    {
        id: "retail-hospitality",
        title: "Retail & Hospitality",
        desc: "Trained frontline staff for retail brands and hospitality venues.",
        longDesc: "We staff flagship retail outlets and hotels with trained frontline professionals who uphold your service standards across every location.",
        icon: ShoppingBag,
        stats: "GCC & Global Brands"
    },
    {
        id: "compliance",
        title: "Full-Scale Compliance",
        desc: "End-to-end visas, payroll, and regional labor law compliance.",
        longDesc: "We handle sponsorships, visas, payroll administration, and local labor compliance—from high-volume field teams to senior executives.",
        icon: ShieldCheck,
        stats: "End-to-End Managed"
    }
];

export const TalentPortfolio = () => {
    const [talentState, setTalentState] = useState(
        TALENT_SERVICES.map(s => ({ ...s, status: null as null | 'email' | 'success', email: '' }))
    );
    const [openId, setOpenId] = useState<string | null>(null);

    const submitEmail = (idx: number) => {
        setTalentState(prev =>
            prev.map((item, i) =>
                i === idx && item.email.trim().includes('@') ? { ...item, status: 'success' } : item
            )
        );
    };

    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mb-14"
                >
                    <span className="text-zinc-500 font-mono text-xs mb-3 block">
                        01 // Core practices
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-zinc-950 tracking-tight leading-tight">
                        Strategic{" "}
                        <span className="text-zinc-600">
                            talent
                        </span>{" "}
                        portfolio
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {talentState.map((service, i) => {
                        const isOpen = openId === service.id;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group"
                            >
                                <div
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenId(isOpen ? null : service.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setOpenId(isOpen ? null : service.id);
                                        }
                                    }}
                                    className={`w-full text-left relative overflow-hidden rounded-xl md:rounded-2xl transition-colors duration-200 border backdrop-blur-md cursor-pointer
                                        ${isOpen
                                            ? 'bg-zinc-950/85 text-white border-zinc-900'
                                            : 'bg-white/45 text-zinc-950 border-zinc-900/10 hover:bg-white/65 hover:border-zinc-900/20'}
                                    `}
                                >
                                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-5 md:gap-6">
                                            <div
                                                className={`p-3.5 rounded-lg transition-colors duration-200 ${
                                                    isOpen
                                                        ? 'bg-white text-zinc-950'
                                                        : 'bg-zinc-950 text-white'
                                                }`}
                                            >
                                                <service.icon size={24} strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl md:text-2xl font-semibold tracking-tight mb-1 transition-colors ${
                                                        isOpen ? 'text-white' : 'text-zinc-950'
                                                    }`}
                                                >
                                                    {service.title}
                                                </h3>
                                                <p
                                                    className={`text-sm md:text-base transition-colors ${
                                                        isOpen ? 'text-zinc-400' : 'text-zinc-600'
                                                    }`}
                                                >
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between md:justify-end gap-6">
                                            <div className="hidden lg:block text-right">
                                                <p
                                                    className={`text-xs font-mono mb-0.5 ${
                                                        isOpen ? 'text-zinc-500' : 'text-zinc-500'
                                                    }`}
                                                >
                                                    Scale
                                                </p>
                                                <p
                                                    className={`text-sm font-medium tabular-nums ${
                                                        isOpen ? 'text-white' : 'text-zinc-950'
                                                    }`}
                                                >
                                                    {service.stats}
                                                </p>
                                            </div>
                                            <div
                                                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                                                    isOpen
                                                        ? 'rotate-45 bg-white text-zinc-950 border-transparent'
                                                        : 'bg-transparent text-zinc-950 border-zinc-900/15 group-hover:bg-zinc-950 group-hover:text-white'
                                                }`}
                                            >
                                                <Plus size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 md:px-8 pb-8 pt-0 flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
                                                    <div className="max-w-2xl">
                                                        <div className="h-px w-full bg-white/10 mb-6" />
                                                        <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-normal mb-6">
                                                            {service.longDesc}
                                                        </p>
                                                        {/* Dynamic Inquiry Flow */}
                                                        <div className="relative min-h-[44px]">
                                                            <AnimatePresence mode="wait">
                                                                {!service.status ? (
                                                                    <motion.button
                                                                        key="btn"
                                                                        type="button"
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        exit={{ opacity: 0 }}
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setTalentState(prev =>
                                                                                prev.map((item, idx) =>
                                                                                    idx === i ? { ...item, status: 'email' } : item
                                                                                )
                                                                            );
                                                                        }}
                                                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
                                                                    >
                                                                        Request talent <ArrowRight size={16} />
                                                                    </motion.button>
                                                                ) : service.status === 'email' ? (
                                                                    <motion.div
                                                                        key="input"
                                                                        initial={{ opacity: 0, y: 6 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0 }}
                                                                        className="flex items-center gap-2 w-full max-w-md bg-white/10 border border-white/20 rounded-lg p-1 pl-3"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <input
                                                                            autoFocus
                                                                            type="email"
                                                                            value={service.email}
                                                                            onChange={(e) => {
                                                                                const val = e.target.value;
                                                                                setTalentState(prev =>
                                                                                    prev.map((item, idx) =>
                                                                                        idx === i ? { ...item, email: val } : item
                                                                                    )
                                                                                );
                                                                            }}
                                                                            placeholder="Work email"
                                                                            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-zinc-400"
                                                                            onKeyDown={(e) => {
                                                                                if (e.key === 'Enter') {
                                                                                    submitEmail(i);
                                                                                }
                                                                            }}
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => submitEmail(i)}
                                                                            className="bg-white text-zinc-950 px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors shrink-0"
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
                                                                            Request received. Our team will reach out shortly.
                                                                        </span>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    </div>
                                                    <div className="hidden lg:block">
                                                        <div className="text-5xl font-mono text-white/10 leading-none select-none tabular-nums">
                                                            0{i + 1}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

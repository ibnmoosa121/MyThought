"use client";

import React, { useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown, Loader2, Mail, Phone, MapPin, Sparkles, AlertCircle, User } from 'lucide-react';
import { cn } from '../../../lib/utils';

type ServiceOption = 'Software & Technology' | 'Consultancy & Strategy' | 'Talent & Staffing' | 'Design & Creative' | 'Ventures & Innovation' | 'FinTech & Banking' | 'AI & Data Analytics' | 'Global Logistics & Supply Chain';

interface FormData {
    name: string;
    email: string;
    service: ServiceOption;
    message: string;
}

const THEMES = {
    logistics: {
        primary: 'text-cyan-400',
        accent: 'from-cyan-400 via-cyan-100 to-cyan-400',
        buttonGradient: 'from-cyan-800 via-white to-cyan-800',
        glow: 'rgba(34,211,238,0.4)',
        bgGlow: 'bg-cyan-500/5',
        label: 'text-cyan-500/50'
    },
    software: {
        primary: 'text-indigo-400',
        accent: 'from-indigo-400 via-indigo-100 to-indigo-400',
        buttonGradient: 'from-indigo-800 via-white to-indigo-800',
        glow: 'rgba(99,102,241,0.4)',
        bgGlow: 'bg-indigo-500/5',
        label: 'text-indigo-500/50'
    },
    design: {
        primary: 'text-pink-400',
        accent: 'from-pink-400 via-pink-100 to-pink-400',
        buttonGradient: 'from-pink-800 via-white to-pink-800',
        glow: 'rgba(236,72,153,0.4)',
        bgGlow: 'bg-pink-500/5',
        label: 'text-pink-500/50'
    },
    consultancy: {
        primary: 'text-amber-400',
        accent: 'from-amber-400 via-amber-100 to-amber-400',
        buttonGradient: 'from-amber-800 via-white to-amber-800',
        glow: 'rgba(251,191,36,0.4)',
        bgGlow: 'bg-amber-500/5',
        label: 'text-amber-500/50'
    },
    talent: {
        primary: 'text-purple-400',
        accent: 'from-purple-400 via-purple-100 to-purple-400',
        buttonGradient: 'from-purple-800 via-white to-purple-800',
        glow: 'rgba(168,85,247,0.4)',
        bgGlow: 'bg-purple-500/5',
        label: 'text-purple-500/50'
    },
    default: {
        primary: 'text-zinc-400',
        accent: 'from-zinc-200 via-zinc-500 to-zinc-200',
        buttonGradient: 'from-zinc-800 via-white to-zinc-800',
        glow: 'rgba(255,255,255,0.3)',
        bgGlow: 'bg-white/5',
        label: 'text-zinc-500'
    }
};

const initialForm: FormData = {
    name: '',
    email: '',
    service: 'Software & Technology',
    message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
    const location = useLocation();
    const referrer = (location.state as { from?: keyof typeof THEMES })?.from || 'default';
    const theme = THEMES[referrer] || THEMES.default;

    const [form, setForm] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const buttonRef = useRef<HTMLButtonElement>(null);

    const validate = useCallback(() => {
        const nextErrors: Record<string, string> = {};
        if (!form.name.trim()) nextErrors.name = 'Identity required';
        if (!emailRegex.test(form.email)) nextErrors.email = 'Secure link invalid';
        if (!form.message || form.message.trim().length < 10) nextErrors.message = 'Encryption depth too shallow';

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }, [form]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        validate();
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        setSubmitting(true);
        try {
            await new Promise(res => setTimeout(res, 2000));
            setSuccess(true);
            setForm(initialForm);
            setTouched({});
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center py-20 px-4 md:px-0">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
                <div className={cn("absolute top-1/4 left-1/4 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none transition-colors duration-1000", theme.bgGlow)} />
                <div className={cn("absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none transition-colors duration-1000", theme.bgGlow)} />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Header Side */}
                    <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                                <Sparkles size={12} />
                                Establish Contact
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black text-white italic leading-[0.8] tracking-tighter uppercase">
                                Initiate <br />
                                <span className={cn("text-transparent bg-clip-text bg-gradient-to-r", theme.accent)}>Sync</span>
                            </h1>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                Secure your slot in our development cycle. We translate complex vision into <span className="text-white italic font-black uppercase">Functional Reality</span>.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: "Neural Link", val: "hello@mythought.com" },
                                { icon: Phone, label: "Direct Line", val: "+1 (555) 000-1234" },
                                { icon: MapPin, label: "Station HQ", val: "Jeddah, Saudi Arabia" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-white/10 transition-all">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-0.5">{item.label}</p>
                                        <p className="text-sm font-bold text-white/80">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-8 md:p-16 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-2xl relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {success ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="py-20 text-center space-y-8"
                                    >
                                        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto border border-white/10 animate-pulse">
                                            <CheckCircle2 className="w-12 h-12 text-white" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter">Handshake Confirmed</h3>
                                            <p className="text-zinc-500 max-w-sm mx-auto text-lg leading-relaxed">
                                                Packet received. Our operators are analyzing your request. Connection will be established within 24 hours.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="px-10 py-4 rounded-full bg-white text-black font-black uppercase italic tracking-widest hover:scale-105 transition-transform"
                                        >
                                            Reset Portal
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name Input */}
                                            <div className="space-y-2 group relative">
                                                <label className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors ml-1", theme.label, "group-focus-within:text-white")}>
                                                    Full Name
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
                                                        <User size={18} />
                                                    </div>
                                                    <input
                                                        name="name"
                                                        value={form.name}
                                                        onChange={onChange}
                                                        onBlur={() => handleBlur('name')}
                                                        placeholder="John Doe"
                                                        className={cn(
                                                            "w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-zinc-600 shadow-inner",
                                                            touched.name && errors.name && "border-red-500/50 focus:ring-red-500/20"
                                                        )}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {touched.name && errors.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="absolute -bottom-5 left-1 text-[10px] font-bold text-red-400 flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.name}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-2 group relative">
                                                <label className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors ml-1", theme.label, "group-focus-within:text-white")}>
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
                                                        <Mail size={18} />
                                                    </div>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        value={form.email}
                                                        onChange={onChange}
                                                        onBlur={() => handleBlur('email')}
                                                        placeholder="john@company.com"
                                                        className={cn(
                                                            "w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-zinc-600 shadow-inner",
                                                            touched.email && errors.email && "border-red-500/50 focus:ring-red-500/20"
                                                        )}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {touched.email && errors.email && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="absolute -bottom-5 left-1 text-[10px] font-bold text-red-400 flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.email}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Service Select */}
                                            <div className="md:col-span-2 space-y-2 group">
                                                <label className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors ml-1", theme.label, "group-focus-within:text-white")}>
                                                    Required Service
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
                                                        <Sparkles size={18} />
                                                    </div>
                                                    <select
                                                        name="service"
                                                        value={form.service}
                                                        onChange={onChange}
                                                        className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all appearance-none cursor-pointer shadow-inner"
                                                    >
                                                        <option value="Software & Technology" className="bg-zinc-900 text-white">Software & Technology</option>
                                                        <option value="Consultancy & Strategy" className="bg-zinc-900 text-white">Consultancy & Strategy</option>
                                                        <option value="Talent & Staffing" className="bg-zinc-900 text-white">Talent & Staffing</option>
                                                        <option value="Design & Creative" className="bg-zinc-900 text-white">Design & Creative</option>
                                                        <option value="Ventures & Innovation" className="bg-zinc-900 text-white">Ventures & Innovation</option>
                                                        <option value="FinTech & Banking" className="bg-zinc-900 text-white">FinTech & Banking</option>
                                                        <option value="AI & Data Analytics" className="bg-zinc-900 text-white">AI & Data Analytics</option>
                                                        <option value="Global Logistics & Supply Chain" className="bg-zinc-900 text-white">Global Logistics & Supply Chain</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={20} />
                                                </div>
                                            </div>

                                            {/* Message Area */}
                                            <div className="md:col-span-2 space-y-2 group relative">
                                                <label className={cn("text-[10px] font-black uppercase tracking-[0.2em] transition-colors ml-1", theme.label, "group-focus-within:text-white")}>
                                                    Project Details
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={onChange}
                                                    onBlur={() => handleBlur('message')}
                                                    placeholder="Tell us about your project or objective..."
                                                    className={cn(
                                                        "w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-3xl p-6 h-40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder:text-zinc-600 resize-none shadow-inner",
                                                        touched.message && errors.message && "border-red-500/50 focus:ring-red-500/20"
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {touched.message && errors.message && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="absolute -bottom-5 left-2 text-[10px] font-bold text-red-400 flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.message}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div className="relative h-16 mt-6">
                                            <motion.button
                                                ref={buttonRef}
                                                type="submit"
                                                disabled={submitting}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="absolute inset-0 group rounded-full overflow-hidden flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 transition-all border border-white/20"
                                                style={{ 
                                                    boxShadow: `0 0 40px -10px ${theme.glow}`
                                                }}
                                            >
                                                {/* Animated Gradient Background */}
                                                <div className={cn("absolute inset-0 bg-gradient-to-r bg-[length:200%_auto] animate-gradient group-hover:bg-[position:right_center] transition-all duration-500", theme.buttonGradient)} />
                                                
                                                <span className="relative z-10 font-black text-black text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                                                    {submitting ? (
                                                        <Loader2 className="animate-spin text-black" />
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </>
                                                    )}
                                                </span>
                                            </motion.button>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Tech Accents */}
            <div className="absolute bottom-10 left-10 text-[8px] font-sans font-black uppercase tracking-[0.5em] text-white/10 hidden md:block">
                Secure Transmission Node // 0x44A2
            </div>
            <div className="absolute bottom-10 right-10 flex gap-2 hidden md:flex">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />)}
            </div>
        </section>
    );
};

export default ContactForm;

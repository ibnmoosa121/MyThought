"use client";

import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown, Loader2, Mail, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';

type ServiceOption = 'Engineering' | 'Intelligence' | 'Capital' | 'Expansions' | 'Design' | 'Talent';

interface FormData {
    name: string;
    email: string;
    service: ServiceOption;
    message: string;
}

const initialForm: FormData = {
    name: '',
    email: '',
    service: 'Engineering',
    message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
    const [form, setForm] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    // Button Runaway State
    const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const validate = useCallback(() => {
        const nextErrors: Record<string, string> = {};
        if (!form.name.trim()) nextErrors.name = 'Identity required';
        if (!emailRegex.test(form.email)) nextErrors.email = 'Secure link invalid';
        if (!form.message || form.message.trim().length < 10) nextErrors.message = 'Encryption depth too shallow';

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    }, [form]);

    const handleHoverButton = () => {
        const isValid = validate();
        if (!isValid) {
            // Run away!
            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 100;
            setBtnOffset({ x, y });
        } else {
            setBtnOffset({ x: 0, y: 0 });
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // Reset offset when typing
        setBtnOffset({ x: 0, y: 0 });
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        validate();
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            handleHoverButton();
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
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200">Sync</span>
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
                                    <form onSubmit={onSubmit} className="space-y-10 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                                            {/* Name Input */}
                                            <div className="space-y-2 group relative">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-white transition-colors">Identity Path</label>
                                                <input
                                                    name="name"
                                                    value={form.name}
                                                    onChange={onChange}
                                                    onBlur={() => handleBlur('name')}
                                                    placeholder="FULL NAME"
                                                    className={cn(
                                                        "w-full bg-transparent border-b-2 border-white/5 py-4 text-xl font-black text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-800 uppercase italic",
                                                        touched.name && errors.name && "border-red-500/50 text-red-500 placeholder:text-red-900/30"
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {touched.name && errors.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className="absolute -bottom-6 left-0 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.name}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-2 group relative">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-white transition-colors">Communication Link</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={onChange}
                                                    onBlur={() => handleBlur('email')}
                                                    placeholder="ENCRYPTED@MAIL.COM"
                                                    className={cn(
                                                        "w-full bg-transparent border-b-2 border-white/5 py-4 text-xl font-black text-white focus:outline-none focus:border-white transition-all placeholder:text-zinc-800 uppercase italic",
                                                        touched.email && errors.email && "border-red-500/50 text-red-500 placeholder:text-red-900/30"
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {touched.email && errors.email && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className="absolute -bottom-6 left-0 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.email}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Service Select - Custom Styling */}
                                            <div className="md:col-span-2 space-y-2 group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Specialization Sector</label>
                                                <div className="relative border-b-2 border-white/5 group-focus-within:border-white transition-colors">
                                                    <select
                                                        name="service"
                                                        value={form.service}
                                                        onChange={onChange}
                                                        className="w-full bg-transparent py-4 text-xl font-black text-white/50 focus:outline-none appearance-none cursor-pointer uppercase italic"
                                                    >
                                                        <option value="Engineering" className="bg-black">Tech Engineering</option>
                                                        <option value="Intelligence" className="bg-black">AI & Intelligence</option>
                                                        <option value="Capital" className="bg-black">Venture Capital</option>
                                                        <option value="Expansions" className="bg-black">Market Expansion</option>
                                                        <option value="Design" className="bg-black">Visual Systems</option>
                                                        <option value="Talent" className="bg-black">Elite Talent</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={20} />
                                                </div>
                                            </div>

                                            {/* Message Area */}
                                            <div className="md:col-span-2 space-y-2 group relative">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-focus-within:text-white transition-colors">Vision Blueprint</label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={onChange}
                                                    onBlur={() => handleBlur('message')}
                                                    placeholder="DESCRIBE THE OBJECTIVE..."
                                                    className={cn(
                                                        "w-full bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] h-48 text-lg font-bold text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-zinc-800 uppercase italic resize-none",
                                                        touched.message && errors.message && "border-red-500/50 bg-red-500/5 text-red-500 placeholder:text-red-900/30"
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {touched.message && errors.message && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className="absolute -bottom-6 left-8 text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-1"
                                                        >
                                                            <AlertCircle size={10} /> {errors.message}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div className="relative h-20">
                                            <motion.button
                                                ref={buttonRef}
                                                type="submit"
                                                disabled={submitting}
                                                onMouseEnter={handleHoverButton}
                                                animate={{ x: btnOffset.x, y: btnOffset.y }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                className="absolute inset-0 group bg-white rounded-full overflow-hidden flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-zinc-200"
                                                    initial={false}
                                                    whileHover={{ x: ["0%", "100%"], transition: { duration: 0.5 } }}
                                                />
                                                <span className="relative z-10 font-black text-black text-lg uppercase italic tracking-widest flex items-center gap-3">
                                                    {submitting ? (
                                                        <Loader2 className="animate-spin" />
                                                    ) : (
                                                        <>
                                                            Execute Protocol
                                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

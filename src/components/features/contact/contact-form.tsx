"use client";

import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown, Loader2, Mail, Phone, MapPin, AlertCircle, User } from 'lucide-react';
import { cn } from '../../../lib/utils';

type ServiceOption = 'Software & Technology' | 'Consultancy & Strategy' | 'Talent & Staffing' | 'Design & Creative' | 'Ventures & Innovation' | 'FinTech & Banking' | 'AI & Data Analytics' | 'Logistics & Fleet';

interface FormData {
    name: string;
    email: string;
    service: ServiceOption;
    message: string;
}

const initialForm: FormData = {
    name: '',
    email: '',
    service: 'Software & Technology',
    message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
    const [form, setForm] = useState<FormData>(initialForm);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const buttonRef = useRef<HTMLButtonElement>(null);

    const validate = useCallback(() => {
        const nextErrors: Record<string, string> = {};
        if (!form.name.trim()) nextErrors.name = 'Name is required';
        if (!emailRegex.test(form.email)) nextErrors.email = 'Valid email is required';
        if (!form.message || form.message.trim().length < 10) nextErrors.message = 'Please provide at least 10 characters';

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
        <section className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center py-24 px-4 md:px-0">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 design-grid opacity-[0.03]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Header Side */}
                    <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                                <span>CONSULTATION</span>
                                <span className="text-zinc-600">//</span>
                                <span>INQUIRY FORM</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                                Start a conversation
                            </h2>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                                Discuss an upcoming software initiative, technical advisory need, or operational requirement with our team.
                            </p>
                        </motion.div>

                        <div className="space-y-4 pt-2">
                            {[
                                { icon: Mail, label: "Direct Email", val: "hello@stebup.com" },
                                { icon: Phone, label: "Direct Phone", val: "+966 (12) 000-1234" },
                                { icon: MapPin, label: "Regional Presence", val: "Middle East & GCC" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-colors">
                                        <item.icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-zinc-500">{item.label}</p>
                                        <p className="text-sm font-medium text-zinc-200">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-8 md:p-12 rounded-xl bg-zinc-950 border border-white/10 relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {success ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="py-16 text-center space-y-6"
                                    >
                                        <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mx-auto border border-white/10">
                                            <CheckCircle2 className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-semibold text-white tracking-tight">Inquiry Received</h3>
                                            <p className="text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                                                Thank you for reaching out. A partner will review your inquiry and respond within 24 hours.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="px-6 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
                                        >
                                            Send another inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-5 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            {/* Name Input */}
                                            <div className="space-y-1.5 group relative">
                                                <label className="text-xs font-medium text-zinc-400">
                                                    Full Name
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                                                        <User size={16} />
                                                    </div>
                                                    <input
                                                        name="name"
                                                        value={form.name}
                                                        onChange={onChange}
                                                        onBlur={() => handleBlur('name')}
                                                        placeholder="Sarah Al-Ghamdi"
                                                        className={cn(
                                                            "w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 pl-10 pr-3.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600",
                                                            touched.name && errors.name && "border-red-500/50"
                                                        )}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {touched.name && errors.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -4 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-xs text-red-400 flex items-center gap-1 mt-1"
                                                        >
                                                            <AlertCircle size={11} /> {errors.name}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Email Input */}
                                            <div className="space-y-1.5 group relative">
                                                <label className="text-xs font-medium text-zinc-400">
                                                    Business Email
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                                                        <Mail size={16} />
                                                    </div>
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        value={form.email}
                                                        onChange={onChange}
                                                        onBlur={() => handleBlur('email')}
                                                        placeholder="sarah@enterprise.com"
                                                        className={cn(
                                                            "w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 pl-10 pr-3.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600",
                                                            touched.email && errors.email && "border-red-500/50"
                                                        )}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {touched.email && errors.email && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -4 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-xs text-red-400 flex items-center gap-1 mt-1"
                                                        >
                                                            <AlertCircle size={11} /> {errors.email}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Service Select */}
                                            <div className="md:col-span-2 space-y-1.5 group">
                                                <label className="text-xs font-medium text-zinc-400">
                                                    Service Area
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        name="service"
                                                        value={form.service}
                                                        onChange={onChange}
                                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                                                    >
                                                        <option value="Software & Technology" className="bg-zinc-900 text-white">Software & Technology</option>
                                                        <option value="Consultancy & Strategy" className="bg-zinc-900 text-white">Consultancy & Strategy</option>
                                                        <option value="Talent & Staffing" className="bg-zinc-900 text-white">Talent & Staffing</option>
                                                        <option value="Design & Creative" className="bg-zinc-900 text-white">Design & Creative</option>
                                                        <option value="Ventures & Innovation" className="bg-zinc-900 text-white">Ventures & Innovation</option>
                                                        <option value="FinTech & Banking" className="bg-zinc-900 text-white">FinTech & Banking</option>
                                                        <option value="AI & Data Analytics" className="bg-zinc-900 text-white">AI & Data Analytics</option>
                                                        <option value="Logistics & Fleet" className="bg-zinc-900 text-white">Logistics & Fleet</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={16} />
                                                </div>
                                            </div>

                                            {/* Message Area */}
                                            <div className="md:col-span-2 space-y-1.5 group relative">
                                                <label className="text-xs font-medium text-zinc-400">
                                                    Project Details
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={onChange}
                                                    onBlur={() => handleBlur('message')}
                                                    placeholder="Brief overview of goals, scope, and timeline..."
                                                    className={cn(
                                                        "w-full bg-zinc-900 border border-white/10 rounded-lg p-3.5 h-32 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 resize-none",
                                                        touched.message && errors.message && "border-red-500/50"
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {touched.message && errors.message && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -4 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="text-xs text-red-400 flex items-center gap-1 mt-1"
                                                        >
                                                            <AlertCircle size={11} /> {errors.message}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                ref={buttonRef}
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 disabled:opacity-50 transition-colors cursor-pointer"
                                            >
                                                {submitting ? (
                                                    <Loader2 className="animate-spin text-black" size={16} />
                                                ) : (
                                                    <>
                                                        <span>Submit Inquiry</span>
                                                        <Send size={14} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

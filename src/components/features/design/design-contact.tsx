"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const DesignContact = () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitting(false);
        setSuccess(true);
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center space-y-4"
            >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase italic">Message Sent</h3>
                <p className="text-zinc-400">We'll get back to you shortly.</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="text-emerald-500 font-bold uppercase tracking-widest text-sm hover:underline"
                >
                    Send Another
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Name</label>
                <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors uppercase italic font-bold"
                />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Email</label>
                <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors uppercase italic font-bold"
                />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Concept</label>
                <textarea
                    required
                    placeholder="What are we creating?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-zinc-500 transition-colors uppercase italic font-bold min-h-[120px] resize-none"
                />
            </div>
            <button
                disabled={submitting}
                className="w-full bg-white text-black font-black uppercase italic tracking-widest py-4 rounded-full flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
                {submitting ? (
                    <Loader2 className="animate-spin" size={20} />
                ) : (
                    <>
                        Send Message
                        <Send size={18} />
                    </>
                )}
            </button>
        </form>
    );
};

export default DesignContact;

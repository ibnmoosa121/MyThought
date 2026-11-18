"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export const TalentFooter = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="p-8 md:p-14 rounded-2xl bg-white/45 backdrop-blur-md border border-zinc-900/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left: Branding & CTA */}
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-3xl md:text-5xl font-semibold text-zinc-950 tracking-tight leading-tight"
                            >
                                Build your{" "}
                                <span className="text-zinc-600">
                                    team
                                </span>
                            </motion.h2>

                            <p className="text-zinc-600 text-base max-w-md leading-relaxed">
                                Need vetted riders, technical specialists, or full operational teams? Tell us what you're hiring for.
                            </p>

                            <div>
                                <button
                                    onClick={() => navigate('/contact', { state: { from: 'talent' } })}
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition-colors cursor-pointer"
                                >
                                    <span>Request staffing quote</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            <div className="space-y-8">
                                <div>
                                    <span className="text-zinc-500 font-mono text-xs block mb-4">
                                        Direct contact
                                    </span>
                                    <div className="space-y-4">
                                        <a href="mailto:hello@stebup.com" className="group block">
                                            <p className="text-zinc-500 text-xs font-mono mb-0.5">
                                                Email
                                            </p>
                                            <p className="text-lg text-zinc-950 font-medium group-hover:text-zinc-600 transition-colors">
                                                hello@stebup.com
                                            </p>
                                        </a>
                                        <a href="tel:+966564008986" className="group block">
                                            <p className="text-zinc-500 text-xs font-mono mb-0.5">
                                                Phone
                                            </p>
                                            <p className="text-lg text-zinc-950 font-medium tabular-nums group-hover:text-zinc-600 transition-colors">
                                                +966 564008986
                                            </p>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-zinc-500 font-mono text-xs block mb-4">
                                        Offices
                                    </span>
                                    <div className="space-y-4 text-zinc-700">
                                        <div className="flex gap-3">
                                            <MapPin size={18} className="text-zinc-950 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-zinc-950">Jeddah Hub, KSA</p>
                                                <p className="text-zinc-500 text-xs font-mono">Headquarters</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <MapPin size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-zinc-950">DIFC, Dubai, UAE</p>
                                                <p className="text-zinc-500 text-xs font-mono">Regional Hub</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-8">
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        aria-label="LinkedIn"
                                        className="p-2.5 rounded-lg bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors duration-150"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Twitter"
                                        className="p-2.5 rounded-lg bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors duration-150"
                                    >
                                        <Twitter size={18} />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Instagram"
                                        className="p-2.5 rounded-lg bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors duration-150"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                </div>

                                <div>
                                    <p className="text-zinc-500 text-xs font-mono leading-relaxed">
                                        © 2026 <span className="text-zinc-950 font-medium">Stebup</span>.<br />
                                        All rights reserved.<br />
                                        Talent &amp; Staffing.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

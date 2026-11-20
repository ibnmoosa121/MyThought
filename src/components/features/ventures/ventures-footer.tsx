"use client";

import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Globe } from "lucide-react";

export const VenturesFooter = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 bg-zinc-950 border border-white/10 p-8 md:p-14 rounded-2xl">
                    <div className="max-w-xl space-y-4">
                        <span className="text-xs font-mono text-amber-500 block">
                            03 // Partner with us
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                            Building a venture for the{" "}
                            <span className="text-amber-500">regional market</span>
                        </h2>
                        <p className="text-zinc-400 text-base leading-relaxed">
                            Share your deck, product concept, or co-build inquiry. Our venture team reviews new proposals weekly.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <button
                            onClick={() => navigate("/contact", { state: { from: "ventures" } })}
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-medium text-sm transition-colors duration-150 cursor-pointer"
                        >
                            <span>Submit venture inquiry</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-amber-500">
                            <Globe size={16} />
                            <span className="text-xs font-mono">Regional presence</span>
                        </div>
                        <div className="space-y-2.5 text-zinc-400 text-sm">
                            <p className="flex items-center gap-2.5">
                                <MapPin size={15} className="text-amber-500 shrink-0" />
                                <span>Middle East &amp; GCC</span>
                            </p>
                            <p className="flex items-center gap-2.5">
                                <MapPin size={15} className="text-zinc-500 shrink-0" />
                                <span>UAE &amp; Saudi Operations</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs font-mono text-zinc-500 block">Direct channels</span>
                        <div className="space-y-3">
                            <a href="mailto:hello@stebup.com" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors">
                                    <Mail size={15} />
                                </div>
                                <span className="text-zinc-300 group-hover:text-white transition-colors text-sm font-medium">
                                    hello@stebup.com
                                </span>
                            </a>
                            <a href="tel:+966564008986" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors">
                                    <Phone size={15} />
                                </div>
                                <span className="text-zinc-300 group-hover:text-white transition-colors text-sm font-medium tabular-nums">
                                    +966 564008986
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end md:items-end">
                        <p className="text-zinc-500 text-xs font-mono leading-relaxed md:text-right">
                            © 2026 <span className="text-zinc-300 font-medium">Stebup</span> Ventures.<br />
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

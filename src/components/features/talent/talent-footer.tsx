"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export const TalentFooter = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < 300) {
                gsap.to(button, {
                    x: distanceX * 0.3,
                    y: distanceY * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative py-32 bg-zinc-950 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Branding & CTA */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-[ - 0.05em] leading-[0.85] mb-12"
                        >
                            Unlock Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">Potential</span>
                        </motion.h2>

                        <div className="flex items-center gap-8">
                            <button
                                ref={buttonRef}
                                className="relative h-40 w-40 md:h-56 md:w-56 rounded-full bg-purple-500 text-black flex flex-col items-center justify-center group transition-transform duration-500 hover:scale-105 active:scale-95"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Start Here</span>
                                <span className="text-2xl font-black italic uppercase tracking-tighter">Get Quote</span>
                                <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={32} />

                                {/* Orbiting ring */}
                                <div className="absolute inset-0 border border-purple-500 rounded-full scale-125 opacity-20 group-hover:scale-110 transition-transform duration-700" />
                            </button>

                            <div className="hidden md:block">
                                <p className="text-zinc-500 text-lg max-w-xs leading-tight font-medium">
                                    Ready to bridge the gap with elite talent? Let's engineer your success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Details with Glitch Effect */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-12">
                            <div>
                                <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px] block mb-6">Contact Us</span>
                                <div className="space-y-6">
                                    <a href="mailto:hello@antigravity.me" className="group block">
                                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1 group-hover:text-purple-400 transition-colors">Email Address</p>
                                        <p className="text-2xl text-white font-black italic uppercase tracking-tighter group-hover:text-purple-200 transition-colors group-hover:translate-x-2 duration-300">
                                            hello@antigravity.me
                                        </p>
                                    </a>
                                    <a href="tel:+966000000000" className="group block">
                                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1 group-hover:text-purple-400 transition-colors">Call Experts</p>
                                        <p className="text-2xl text-white font-black italic uppercase tracking-tighter group-hover:text-purple-200 transition-colors group-hover:translate-x-2 duration-300">
                                            +966 50 123 4567
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px] block mb-6">Global Offices</span>
                                <div className="space-y-6 text-zinc-400">
                                    <div className="flex gap-3">
                                        <MapPin size={18} className="text-purple-500 shrink-0" />
                                        <p className="text-sm font-medium">Jeddah Hub, KSA <br /> <span className="text-zinc-600 text-[10px] font-black uppercase">Headquarters</span></p>
                                    </div>
                                    <div className="flex gap-3">
                                        <MapPin size={18} className="text-zinc-500 shrink-0" />
                                        <p className="text-sm font-medium">DIFC, Dubai, UAE <br /> <span className="text-zinc-600 text-[10px] font-black uppercase">Regional Hub</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div className="flex gap-4">
                                <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-purple-500 hover:text-black transition-all duration-300">
                                    <Linkedin size={24} />
                                </a>
                                <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-purple-500 hover:text-black transition-all duration-300">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-purple-500 hover:text-black transition-all duration-300">
                                    <Instagram size={24} />
                                </a>
                            </div>

                            <div className="mt-20 md:mt-0">
                                <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed">
                                    © 2026 Antigravity. <br />
                                    All Rights Reserved. <br />
                                    Engineering Success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

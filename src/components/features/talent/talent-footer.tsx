"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export const TalentFooter = () => {
    const navigate = useNavigate();
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
        <section className="relative py-32 bg-transparent overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="p-10 md:p-20 rounded-[3rem] bg-white/80 backdrop-blur-md border border-zinc-900/10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Branding & CTA */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="text-5xl md:text-8xl font-black text-zinc-950 italic uppercase tracking-[-0.05em] leading-[0.85] mb-12"
                            >
                                Unlock Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">
                                    Potential
                                </span>
                            </motion.h2>

                            <div className="flex items-center gap-8">
                                <button
                                    ref={buttonRef}
                                    onClick={() => navigate('/contact', { state: { from: 'talent' } })}
                                    className="relative h-40 w-40 md:h-52 md:w-52 rounded-full bg-zinc-950 text-white flex flex-col items-center justify-center group transition-transform duration-500 hover:scale-105 active:scale-95 shadow-[0_25px_60px_rgba(0,0,0,0.28)]"
                                >
                                    <span className="text-[10px] font-mono uppercase tracking-widest mb-1 text-zinc-400">
                                        Start Here
                                    </span>
                                    <span className="text-2xl font-black italic uppercase tracking-tighter">
                                        Get Quote
                                    </span>
                                    <ArrowRight className="mt-4 group-hover:translate-x-2 transition-transform" size={32} />

                                    {/* Orbiting ring */}
                                    <div className="absolute inset-0 border border-zinc-950/30 rounded-full scale-115 group-hover:scale-105 transition-transform duration-700" />
                                </button>

                                <div className="hidden md:block">
                                    <p className="text-zinc-600 text-lg max-w-xs leading-snug font-medium">
                                        Ready to bridge the gap with elite talent? Let's engineer your success.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            <div className="space-y-12">
                                <div>
                                    <span className="text-zinc-500 font-mono font-bold uppercase tracking-[0.3em] text-[10px] block mb-6">
                                        Contact Us
                                    </span>
                                    <div className="space-y-6">
                                        <a href="mailto:hello@stebup.com" className="group block">
                                            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-1 group-hover:text-zinc-950 transition-colors">
                                                Email Address
                                            </p>
                                            <p className="text-2xl text-zinc-950 font-black italic uppercase tracking-tighter group-hover:text-zinc-600 transition-colors group-hover:translate-x-2 duration-300">
                                                hello@stebup.com
                                            </p>
                                        </a>
                                        <a href="tel:+966564008986" className="group block">
                                            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-1 group-hover:text-zinc-950 transition-colors">
                                                Call Experts
                                            </p>
                                            <p className="text-2xl text-zinc-950 font-black italic uppercase tracking-tighter group-hover:text-zinc-600 transition-colors group-hover:translate-x-2 duration-300">
                                                +966 564008986
                                            </p>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <span className="text-zinc-500 font-mono font-bold uppercase tracking-[0.3em] text-[10px] block mb-6">
                                        Global Offices
                                    </span>
                                    <div className="space-y-6 text-zinc-700">
                                        <div className="flex gap-3">
                                            <MapPin size={18} className="text-zinc-950 shrink-0" />
                                            <p className="text-sm font-semibold">
                                                Jeddah Hub, KSA <br />{" "}
                                                <span className="text-zinc-500 text-[10px] font-mono uppercase">
                                                    Headquarters
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <MapPin size={18} className="text-zinc-500 shrink-0" />
                                            <p className="text-sm font-semibold">
                                                DIFC, Dubai, UAE <br />{" "}
                                                <span className="text-zinc-500 text-[10px] font-mono uppercase">
                                                    Regional Hub
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="p-4 rounded-2xl bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin size={24} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-4 rounded-2xl bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300"
                                    >
                                        <Twitter size={24} />
                                    </a>
                                    <a
                                        href="#"
                                        className="p-4 rounded-2xl bg-zinc-950/5 border border-zinc-900/10 text-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                </div>

                                <div className="mt-20 md:mt-0">
                                    <p className="text-zinc-500 text-[10px] font-mono font-bold uppercase tracking-[0.4em] leading-relaxed">
                                        © 2026 <span className="normal-case tracking-tight text-zinc-950 font-black">Stebup</span>. <br />
                                        All Rights Reserved. <br />
                                        Engineering Success.
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

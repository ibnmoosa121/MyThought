"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { services } from "../../../data/services";
import { ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// FloatingTransaction component moved to fintech-floating-orders.tsx

export const FintechHero = () => {
    const service = services.fintech;
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: false // Don't pin to ensure smooth scroll flow, just parallax
                }
            });

            // Storytelling: As user scrolls, the "Central Node" expands
            tl.to(nodeRef.current, {
                scale: 1.5,
                opacity: 0,
                duration: 1
            }, 0);

            tl.to(textRef.current, {
                y: -100,
                opacity: 0.5,
                duration: 1
            }, 0);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black font-['Inter'] perspective-1000"
            role="banner"
        >
            {/* Digital Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(${service.theme.plasmaColor}11 1px, transparent 1px), linear-gradient(90deg, ${service.theme.plasmaColor}11 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
            </div>

            {/* Visual Storytelling Background */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
                {/* Central Processing Node */}
                <div ref={nodeRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[80px] opacity-100" />
            </div>

            <div ref={textRef} className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-4 py-1.5 rounded-full bg-teal-500/5 border border-teal-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-teal-400 mb-8 flex items-center gap-2 backdrop-blur-md"
                >
                    <div className="relative w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-75" />
                        <span className="absolute inset-0 rounded-full bg-teal-500" />
                    </div>
                    Live Transaction Feed
                </motion.div>

                {/* Title */}
                <h1 className="font-black text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] uppercase tracking-tighter mb-8">
                    Next-Gen <br />
                    <span className={cn(
                        "bg-gradient-to-r bg-clip-text text-transparent italic",
                        service.theme.gradient
                    )}>
                        Fintech
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-medium text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mx-auto mb-12"
                >
                    Processing over <span className="text-white">$50B+</span> in secure decentralized volume.
                    <br className="hidden md:block" />
                    The architecture for the future of finance.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <button className="group relative px-10 py-4 overflow-hidden rounded-xl bg-teal-500 transition-all duration-300 hover:bg-teal-400 hover:scale-105 shadow-[0_0_40px_rgba(20,184,166,0.3)]">
                        <div className="relative z-10 flex items-center gap-3 text-black font-black uppercase tracking-widest text-xs">
                            <span>Start Integration</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>

                    <button className="group px-10 py-4 rounded-xl border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300">
                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs">
                            <ShieldCheck className="w-4 h-4 text-teal-500" />
                            <span>View Security Audit</span>
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
};

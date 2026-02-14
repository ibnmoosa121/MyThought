"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingTransaction = ({
    amount,
    status,
    x,
    y,
    delay,
    scale = 1
}: {
    amount: string,
    status: string,
    x: string,
    y: string,
    delay: number,
    scale?: number
}) => (
    <motion.div
        className="absolute z-50 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-teal-500/30 flex items-center gap-3 shadow-[0_0_30px_rgba(20,184,166,0.15)]"
        style={{ left: x, top: y }}
        initial={{ opacity: 0, scale: 0, y: 50 }}
        animate={{
            opacity: [0, 1, 1, 0],
            y: [50, 0, -50, -100],
            scale: [0, scale, scale, 0]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
        }}
    >
        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
            <Zap size={14} className="text-teal-400 fill-teal-400" />
        </div>
        <div className="flex flex-col">
            <span className="text-xs font-black text-white tracking-wider">{amount}</span>
            <span className="text-[9px] font-mono text-teal-400 uppercase">{status}</span>
        </div>
    </motion.div>
);

export const FintechFloatingOrders = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure ScrollTrigger is registered
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const triggerEl = document.getElementById("fintech-velocity-title");

            if (triggerEl) {
                gsap.fromTo(containerRef.current,
                    { opacity: 1 },
                    {
                        opacity: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: triggerEl,
                            start: "top 60%",
                            end: "top 10%",
                            scrub: 1,
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            } else {
                // Fallback: If trigger not found, just keep it visible (or use a backup trigger)
                gsap.set(containerRef.current, { opacity: 1 });
            }
        }, containerRef);

        // Force a refresh to ensure positions are calculated after all rendering
        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    const transactions = [
        { amount: "+ $12,450", status: "Received", x: "15%", y: "60%", delay: 0 },
        { amount: "+ $8,920", status: "Verified", x: "75%", y: "25%", delay: 2 },
        { amount: "+ $45,000", status: "Secured", x: "80%", y: "70%", delay: 4 },
        { amount: "+ $2,100", status: "Processing", x: "10%", y: "30%", delay: 1.5 },
        { amount: "+ $9,500", status: "Validated", x: "60%", y: "15%", delay: 5.5 },
        { amount: "+ $33,200", status: "Complete", x: "25%", y: "80%", delay: 3 }
    ];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {/* Incoming Orders Animation */}
            {transactions.map((tx, i) => (
                <FloatingTransaction key={i} {...tx} />
            ))}
        </div>
    );
};

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface DesignBubbleProps {
    children: React.ReactNode;
    footerContent: React.ReactNode;
}

export const DesignBubble = ({ children, footerContent }: DesignBubbleProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Spring physics for organic movement
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Bubble expansion transforms - grows early and fast
    const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 0.9, 1], [1, 5, 20, 40, 100]);
    const opacity = useTransform(smoothProgress, [0.95, 0.98], [1, 0]);
    const borderRadius = useTransform(smoothProgress, [0, 0.3], ["100%", "5%"]);

    // Content parallax inside bubble - vertical movement mapped to scroll
    const contentY = useTransform(smoothProgress, [0.05, 0.9], ["20vh", "-250vh"]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.05, 0.9, 0.95], [0, 1, 1, 0]);

    // Background content transforms (behind the bubble)
    const bgScale = useTransform(smoothProgress, [0, 0.5], [0.8, 1]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.2]);

    return (
        <div ref={containerRef} className="relative h-[600vh] bg-black">
            {/* Sticky Container for the Animation */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Visionary Layer (Behind the bubble) */}
                <motion.div
                    style={{ scale: bgScale, opacity: bgOpacity }}
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </motion.div>

                {/* The Growing Idea Bubble / Lens */}
                <motion.div
                    style={{
                        scale,
                        borderRadius,
                        opacity,
                    }}
                    className={cn(
                        "relative z-10 w-80 h-80 flex items-center justify-center",
                        "bg-zinc-950/40 backdrop-blur-3xl border border-white/20 shadow-[0_0_150px_rgba(56,189,248,0.1)] overflow-hidden",
                        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/10 before:via-transparent before:to-cyan-500/10 before:-z-10"
                    )}
                >
                    {/* Inner Content - Moves as user scrolls */}
                    <motion.div
                        style={{ y: contentY, opacity: contentOpacity }}
                        className="absolute w-full flex flex-col items-center gap-60 px-6"
                    >
                        {children}
                    </motion.div>
                </motion.div>

                {/* The "Boom" Footer Reveal */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.96, 0.99], [0, 1]),
                        scale: useTransform(smoothProgress, [0.96, 0.99], [0.9, 1]),
                    }}
                    className="absolute inset-0 z-30"
                >
                    {footerContent}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs italic uppercase tracking-[0.3em] z-40 animate-bounce pointer-events-none"
            >
                Scroll to hatch the idea
            </motion.div>
        </div>
    );
};

"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
    Cpu,
    Code2,
    Smartphone,
    Globe,
    Settings,
    Cloud,
    Terminal,
    Zap
} from "lucide-react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
    {
        title: "System Integration",
        description: "Seamlessly connecting your software ecosystems for maximum efficiency and data flow.",
        icon: Cpu,
        color: "#3B82F6",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Custom Software",
        description: "Tailored solutions built from the ground up to address your unique business challenges.",
        icon: Code2,
        color: "#10B981",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Mobile Apps",
        description: "Scalable and intuitive mobile experiences developed for both iOS and Android platforms.",
        icon: Smartphone,
        color: "#F59E0B",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Web Platforms",
        description: "Modern, responsive, and high-performance web applications built with the latest technologies.",
        icon: Globe,
        color: "#EF4444",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Managed Support",
        description: "Comprehensive end-to-end technical management to ensure your systems perform at their peak.",
        icon: Settings,
        color: "#8B5CF6",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Cloud Logic",
        description: "Enhancing your cloud infrastructure for better performance, security, and cost-efficiency.",
        icon: Cloud,
        color: "#06B6D4",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "DevOps Core",
        description: "Automating your software delivery pipeline for faster, more reliable releases.",
        icon: Terminal,
        color: "#EC4899",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2000&auto=format&fit=crop"
    }
];

const ElectricPath = ({ index, isHovered, color }: { index: number, isHovered: boolean, color: string }) => {
    return (
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: -1 }}>
            <motion.path
                d={index % 2 === 0
                    ? "M 50 150 Q 50 50, 100 0"
                    : "M 50 -50 Q 50 50, 100 100"}
                stroke={isHovered ? color : "rgba(255,255,255,0.05)"}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0.2, opacity: 0.3 }}
                animate={{
                    pathLength: isHovered ? 1 : 0.2,
                    opacity: isHovered ? 1 : 0.3,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {isHovered && (
                <motion.path
                    d={index % 2 === 0
                        ? "M 50 150 Q 50 50, 100 0"
                        : "M 50 -50 Q 50 50, 100 100"}
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="blur-sm"
                />
            )}
        </svg>
    );
};

export const SoftwareServices = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    useGSAP(() => {
        if (!horizontalRef.current || !sectionRef.current) return;

        const container = horizontalRef.current;
        const totalWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        if (scrollDistance <= 0) return;

        // Create the horizontal scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                onRefresh: () => {
                    // Force refresh internal values if needed
                }
            }
        });

        tl.to(container, {
            x: -scrollDistance,
            ease: "none",
        });

        // Robust refresh strategy
        const refresh = () => ScrollTrigger.refresh();

        window.addEventListener('load', refresh);
        window.addEventListener('resize', refresh);

        const timer = setTimeout(refresh, 500);
        const timer2 = setTimeout(refresh, 2000);

        return () => {
            window.removeEventListener('load', refresh);
            window.removeEventListener('resize', refresh);
            clearTimeout(timer);
            clearTimeout(timer2);
            tl.kill();
        };

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="bg-black relative overflow-hidden"
        >
            <div className="h-screen w-full flex flex-col justify-center overflow-hidden relative">

                {/* Dynamic Background Image Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <AnimatePresence mode="wait">
                        {hoveredIdx !== null ? (
                            <motion.div
                                key={`bg-${hoveredIdx}`}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 0.35, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={services[hoveredIdx].image}
                                    alt=""
                                    className="h-full w-full object-cover grayscale brightness-75"
                                />
                                <div className="absolute inset-0 bg-black/30" />
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>

                <div className="container mx-auto px-6 relative z-10 w-full mb-12">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="relative">
                                <Zap className="w-12 h-12 text-primary animate-pulse" />
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                            </div>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none"
                        >
                            The Neural <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/50">Infrastructure</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Horizontal Neural Track */}
                <div className="relative w-full z-10">
                    <div
                        ref={horizontalRef}
                        className="flex px-[15vw] gap-40 min-w-max relative items-center h-[500px]"
                    >
                        {/* Horizontal Bus Bar */}
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center justify-center w-[300px] h-full ${index % 2 === 0 ? "pt-32" : "pb-32"
                                    }`}
                                onMouseEnter={() => setHoveredIdx(index)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {/* Icon Node */}
                                <div className={`relative w-24 h-24 flex items-center justify-center z-20`}>
                                    <ElectricPath index={index} isHovered={hoveredIdx === index} color={service.color} />

                                    <motion.div
                                        className={`relative z-20 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${hoveredIdx === index
                                            ? "bg-white shadow-[0_0_50px_rgba(255,255,255,0.5)] scale-125"
                                            : "bg-zinc-900 border border-white/10 hover:border-white/30"
                                            }`}
                                        style={{
                                            backgroundColor: hoveredIdx === index ? service.color : undefined,
                                            boxShadow: hoveredIdx === index ? `0 0 40px ${service.color}` : undefined
                                        }}
                                    >
                                        <service.icon
                                            className={`w-8 h-8 transition-all duration-500 ${hoveredIdx === index ? "text-white rotate-12" : "text-zinc-600"
                                                }`}
                                        />
                                    </motion.div>

                                    {/* Pulse Rings */}
                                    {hoveredIdx === index && (
                                        <>
                                            <motion.div
                                                className="absolute inset-0 rounded-full border border-white/50"
                                                initial={{ scale: 1, opacity: 1 }}
                                                animate={{ scale: 2, opacity: 0 }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 rounded-full border border-white/30"
                                                initial={{ scale: 1, opacity: 1 }}
                                                animate={{ scale: 2.5, opacity: 0 }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                                            />
                                        </>
                                    )}
                                </div>

                                {/* Service Content */}
                                <motion.div
                                    className={`mt-10 text-center w-full ${index % 2 === 0 ? "mb-auto" : "mt-auto"
                                        }`}
                                    animate={{
                                        opacity: hoveredIdx === index ? 1 : 0.3,
                                        y: hoveredIdx === index ? 0 : (index % 2 === 0 ? 10 : -10)
                                    }}
                                >
                                    <h3
                                        className="text-3xl font-black uppercase italic tracking-tighter"
                                        style={{ color: hoveredIdx === index ? service.color : "#ffffff" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className={`mt-4 text-zinc-300 text-sm max-w-[250px] mx-auto leading-relaxed transition-all duration-500 ${hoveredIdx === index ? "opacity-100 block translate-y-0" : "opacity-0 invisible translate-y-4"
                                        }`}>
                                        {service.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Aesthetic Glow Follower */}
            <motion.div
                className="fixed w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"
                style={{
                    left: 0,
                    top: 0,
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />
        </section>
    );
};

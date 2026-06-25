import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { DesignPalette } from "../../../../data/design-palettes";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "Deep diving into project goals and market landscape."
    },
    {
        num: "02",
        title: "Strategy",
        desc: "Transforming insights into actionable design plans."
    },
    {
        num: "03",
        title: "Execution",
        desc: "Bringing concepts to life through iterative design."
    },
    {
        num: "04",
        title: "Launch",
        desc: "Flawless implementation across all digital platforms."
    }
];

const MethodologyStep = ({ 
    step, 
    idx, 
    palette 
}: { 
    step: typeof steps[0]; 
    idx: number; 
    palette: DesignPalette; 
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const stepColor = palette.colors[idx % palette.colors.length];

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="methodology-step relative flex flex-col justify-between min-h-[200px] p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 backdrop-blur-xl transition-all duration-500 group cursor-pointer overflow-hidden w-full max-w-md mx-auto sm:max-w-none"
            style={{
                borderColor: isHovered ? `${stepColor}33` : "rgba(255, 255, 255, 0.05)",
                backgroundColor: isHovered ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0.02)",
                boxShadow: isHovered ? `0 15px 30px -15px ${stepColor}33` : "none"
            }}
        >
            {/* Radial glow background on hover */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 80% 80%, ${stepColor}15, transparent 65%)`
                }}
            />

            {/* Top decorative accent line */}
            <div 
                className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${stepColor}, transparent)`
                }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    {/* Phase number pill */}
                    <span 
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-500"
                        style={{
                            borderColor: isHovered ? `${stepColor}40` : "rgba(255, 255, 255, 0.1)",
                            color: isHovered ? stepColor : "#a1a1aa",
                            backgroundColor: isHovered ? `${stepColor}0d` : "transparent"
                        }}
                    >
                        Phase {step.num}
                    </span>
                </div>

                <div className="mt-8">
                    <h3 
                        className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter transition-all duration-500 group-hover:translate-x-2"
                        style={{
                            textShadow: isHovered ? `0 0 15px ${stepColor}40` : "none"
                        }}
                    >
                        {step.title}
                    </h3>
                    <p 
                        className="text-zinc-500 mt-2 text-sm leading-relaxed max-w-[280px] group-hover:text-zinc-300 transition-colors duration-500"
                    >
                        {step.desc}
                    </p>
                </div>
            </div>

            {/* Giant watermark step number with GSAP parallax class */}
            <span 
                style={{
                    color: isHovered ? `${stepColor}15` : "rgba(255, 255, 255, 0.02)",
                    textShadow: isHovered ? `0 0 20px ${stepColor}10` : "none"
                }}
                className="step-num-bg absolute right-4 bottom-2 text-8xl md:text-9xl font-black leading-none transition-all duration-700 select-none pointer-events-none italic"
            >
                {step.num}
            </span>
        </div>
    );
};

export const DesignMethodologyFrame = ({ palette }: { palette: DesignPalette }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textSideRef = useRef<HTMLDivElement>(null);
    const stepsGridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Text side entrance: Move in/out
            gsap.fromTo(textSideRef.current,
                { x: -100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: textSideRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "expo.out"
                }
            );

            // Steps reveal: Move in/out
            gsap.fromTo(".methodology-step",
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: stepsGridRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "expo.out"
                }
            );

            // Background numbers parallax
            gsap.fromTo(".step-num-bg",
                { y: 40 },
                {
                    scrollTrigger: {
                        trigger: stepsGridRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    },
                    y: -40,
                    ease: "none"
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen py-16 md:py-32 flex items-center justify-center bg-transparent overflow-hidden px-6 lg:px-20">

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    <div ref={textSideRef} className="flex flex-col justify-center max-w-2xl relative z-10 text-center lg:text-left">
                        <h2 className="text-[clamp(4.5rem,12vw,9rem)] font-black text-white italic uppercase leading-[0.8] tracking-tighter mb-8">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#F43F5E] to-[#D946EF]">Process</span>
                        </h2>
                        <p className="text-zinc-400 text-[clamp(1rem,2vw,1.5rem)] leading-relaxed mb-8 md:mb-12 font-medium max-w-xl mx-auto lg:mx-0 tracking-tight">
                            A systematic approach from vision to reality, ensuring quality and consistency at every stage of the creative journey.
                        </p>
                        <div className="w-24 h-2 bg-gradient-to-r from-[#F59E0B] to-[#F43F5E] rounded-full mx-auto lg:mx-0" />
                    </div>

                    <div ref={stepsGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full lg:flex-1">
                        {steps.map((step, idx) => (
                            <MethodologyStep key={idx} step={step} idx={idx} palette={palette} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};




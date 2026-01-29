import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const MethodologyStep = ({ step }: { step: typeof steps[0] }) => {
    const numRef = useRef<HTMLSpanElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    const onMouseEnter = () => {
        gsap.to(numRef.current, { color: "rgba(34, 211, 238, 0.1)", duration: 0.5 });
        gsap.to(titleRef.current, { x: 8, duration: 0.5, ease: "power2.out" });
        gsap.to(descRef.current, { color: "#d4d4d8", duration: 0.5 });
    };

    const onMouseLeave = () => {
        gsap.to(numRef.current, { color: "rgba(255, 255, 255, 0.05)", duration: 0.5 });
        gsap.to(titleRef.current, { x: 0, duration: 0.5, ease: "power2.inOut" });
        gsap.to(descRef.current, { color: "#71717a", duration: 0.5 });
    };

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="methodology-step relative flex flex-col gap-4 group cursor-pointer"
        >
            <span ref={numRef} className="step-num-bg text-8xl md:text-[10rem] font-black text-white/5 leading-none transition-colors">
                {step.num}
            </span>
            <div className="absolute top-1/2 -translate-y-1/4 left-8 md:left-12">
                <h3 ref={titleRef} className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-2">
                    {step.title}
                </h3>
                <p ref={descRef} className="text-zinc-500 max-w-[220px] leading-relaxed text-base md:text-sm lg:text-base transition-colors">
                    {step.desc}
                </p>
            </div>
        </div>
    );
};

export const DesignMethodologyFrame = () => {
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

                    <div ref={stepsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 w-full lg:flex-1">
                        {steps.map((step, idx) => (
                            <MethodologyStep key={idx} step={step} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};




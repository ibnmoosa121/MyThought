import { useLayoutEffect, useRef } from "react";
import { Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedChar = ({ char, index, slideIndex }: { char: string, index: number, slideIndex: number }) => {
    const charRef = useRef<HTMLSpanElement>(null);
    const colors = ["#6366F1", "#D946EF", "#F43F5E", "#F59E0B", "#22D3EE"];
    const defaultColor = colors[(index + slideIndex) % colors.length];

    const onMouseEnter = () => {
        const effects = [
            { rotationY: 360, duration: 0.8 },
            { rotationX: 360, duration: 0.8 },
            { y: -20, scale: 1.5, duration: 0.6 },
            { skewX: 20, scale: 0.8, duration: 0.4 },
            { rotation: 15, scale: 1.2, duration: 0.5 }
        ];
        const effect = effects[index % effects.length];
        gsap.to(charRef.current, { ...effect, color: "#ffffff", ease: "back.out(1.7)", overwrite: "auto" });
    };

    const onMouseLeave = () => {
        gsap.to(charRef.current, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            scale: 1,
            color: defaultColor,
            skewX: 0,
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
    };

    return (
        <span
            ref={charRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`showcase-char-${slideIndex} inline-block cursor-default`}
            style={{ perspective: "1000px", color: defaultColor }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    );
};

const SvgShape = ({ type, color }: { type: 'circle' | 'square' | 'triangle', color: string }) => {
    const shapeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.to(shapeRef.current, {
            rotation: 360,
            duration: 10 + Math.random() * 10,
            repeat: -1,
            ease: "none"
        });
    }, []);

    return (
        <div ref={shapeRef} className="inline-block mx-2 align-middle">
            <svg width="30" height="30" viewBox="0 0 40 40" className="opacity-80">
                {type === 'circle' && <circle cx="20" cy="20" r="15" fill={color} />}
                {type === 'square' && <rect x="5" y="5" width="30" height="30" fill={color} rx="4" />}
                {type === 'triangle' && <path d="M20 5 L35 35 L5 35 Z" fill={color} />}
            </svg>
        </div>
    );
};


export const DesignShowcaseFrame = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Master container reveal
            gsap.fromTo(containerRef.current,
                { opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                    opacity: 1,
                    ease: "none"
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=3000",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    snap: {
                        snapTo: [0, 0.5, 1],
                        duration: { min: 0.2, max: 0.5 },
                        delay: 0,
                        ease: "power2.inOut"
                    }
                },
            });

            // The Scroll: Move horizontally in two steps to sync with reveals
            tl.to(sectionRef.current, {
                x: "-100vw",
                duration: 1,
                ease: "none",
            });

            tl.to(sectionRef.current, {
                x: "-200vw",
                duration: 1,
                ease: "none",
            });

            // Text reveal animations synced to slide positions
            // Slide 1 text reveal: Starts immediately
            tl.from(".showcase-char-0", {
                y: 50,
                opacity: 0,
                rotateX: -90,
                stagger: 0.02,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, 0);

            tl.from(".showcase-content-0", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out"
            }, 0.2);

            // Slide 2 text reveal: Starts at 0.7s (Slide 2 coming in)
            tl.from(".showcase-char-1", {
                y: 50,
                opacity: 0,
                rotateY: 90,
                stagger: 0.02,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, 0.7);

            tl.from(".showcase-content-1", {
                scale: 0.8,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, 1.2);

            // Slide 3 text reveal: Starts at 1.7s (Slide 3 coming in)
            tl.from(".showcase-char-2", {
                y: 50,
                opacity: 0,
                scale: 0,
                stagger: 0.02,
                duration: 0.4,
                ease: "back.out(1.7)"
            }, 1.7);

            tl.from(".showcase-content-2", {
                x: -50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "expo.out"
            }, 2.2);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const s1Line1 = "Brand Identity".split("");
    const s1Line2 = "Creative Visuals".split("");

    const s2Line1 = "User Centric".split("");
    const s2Line2 = "Experiences".split("");

    const s3Line1 = "Liquid Interfaces".split("");
    const s3Line2 = "Motion Mastery".split("");

    return (
        <section ref={containerRef} className="overflow-hidden bg-black relative">
            <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative will-change-transform gpu-accelerated">

                {/* Slide 1: Brand Identity */}
                <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative px-20">
                    <div className="max-w-6xl relative z-10 text-left w-full">
                        <div className="flex flex-col mb-8 w-full">
                            <div className="showcase-content-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D946EF] text-xs font-bold tracking-[0.2em] uppercase mb-12 w-fit">
                                <Target size={14} />
                                <span>Core Offerings</span>
                            </div>

                            <div className="showcase-content-0 flex w-full gap-4 mb-4">
                                <div className="flex-1 px-8 py-4 rounded-2xl font-black text-black bg-[#D946EF] text-2xl uppercase italic tracking-tighter shadow-2xl shadow-[#D946EF]/20 flex items-center justify-center -rotate-1">
                                    Brand Strategy
                                </div>
                                <div className="flex-1 px-8 py-4 rounded-2xl font-black text-black bg-[#F59E0B] text-2xl uppercase italic tracking-tighter shadow-2xl shadow-[#F59E0B]/20 flex items-center justify-center rotate-1">
                                    Visual Storytelling
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.8] tracking-tighter uppercase mb-6 flex flex-col">
                            <div className="flex items-center gap-4">
                                {s1Line1.map((char, i) => <AnimatedChar key={i} char={char} index={i} slideIndex={0} />)}
                                <SvgShape type="circle" color="#6366F1" />
                            </div>
                            <div className="flex items-center mt-2 gap-4">
                                <SvgShape type="square" color="#D946EF" />
                                {s1Line2.map((char, i) => <AnimatedChar key={i} char={char} index={i + 20} slideIndex={0} />)}
                            </div>
                        </h2>
                        <p className="showcase-content-0 text-zinc-500 text-2xl font-medium max-w-2xl mt-12 leading-relaxed">
                            Crafting identities that resonate and endure in a crowded digital landscape.
                        </p>
                    </div>

                    {/* Abstract Shapes Slide 1 with Tilt */}
                    <div
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            gsap.to(e.currentTarget, { rotateY: x * 30, rotateX: -y * 30, duration: 0.5 });
                        }}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.8 })}
                        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] perspective-1000 transform-preserve-3d pointer-events-none opacity-40 xl:opacity-100"
                    >
                        <div className="relative w-full h-full transform-preserve-3d">
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full border-[20px] border-cyan-400 opacity-50 blur-[2px] animate-pulse translate-z-10" />
                            <div className="absolute bottom-0 left-0 w-80 h-40 bg-gradient-to-t from-emerald-400 to-cyan-500 rounded-t-full opacity-80 translate-z-20" />
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500 rounded-2xl rotate-45 blur-xl opacity-40 translate-z-30" />
                            <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90 translate-z-40" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
                        </div>
                    </div>
                </div>

                {/* Slide 2: UI/UX Design */}
                <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative bg-transparent">
                    <div className="max-w-7xl px-10 relative z-10 w-full flex flex-col items-center">
                        <div className="flex flex-col items-center gap-0">
                            <h2 className="text-[clamp(4rem,12vw,11rem)] font-black text-white italic uppercase tracking-tighter leading-none whitespace-nowrap flex items-center justify-center">
                                {s2Line1.map((char, i) => <AnimatedChar key={i} char={char} index={i} slideIndex={1} />)}
                                <div className="mx-8">
                                    <SvgShape type="triangle" color="#F59E0B" />
                                </div>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    {s2Line2.map((char, i) => <AnimatedChar key={i} char={char} index={i + 20} slideIndex={1} />)}
                                </span>
                            </h2>
                        </div>

                        <div className="mt-20 flex gap-12 items-center">
                            <div className="showcase-content-1 px-10 py-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-4 group hover:border-[#818CF8]/50 transition-colors">
                                <div className="w-3 h-3 rounded-full bg-[#818CF8] animate-pulse" />
                                <span className="text-white font-bold text-xl uppercase italic tracking-wider">UX Research</span>
                            </div>
                            <div className="showcase-content-1 px-10 py-5 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-4 group hover:border-[#FB923C]/50 transition-colors">
                                <div className="w-3 h-3 rounded-full bg-[#FB923C] animate-pulse" />
                                <span className="text-white font-bold text-xl uppercase italic tracking-wider">UI Design</span>
                            </div>
                        </div>

                        {/* Visual element for Slide 2 with Tilt */}
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                gsap.to(e.currentTarget, { rotateY: x * 40, rotateX: -y * 40, duration: 0.5 });
                            }}
                            onMouseLeave={(e) => gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.8 })}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] perspective-1000 transform-preserve-3d pointer-events-none opacity-20 -z-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-[120px] rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Slide 3: Web & Motion */}
                <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center relative px-20">
                    <div className="text-left relative z-10">
                        <h3 className="text-[clamp(3rem,8vw,7rem)] font-black text-white leading-[0.9] tracking-tighter italic uppercase flex flex-col">
                            <div className="flex items-center gap-4">
                                <span>{s3Line1.map((char, i) => <AnimatedChar key={i} char={char} index={i} slideIndex={2} />)}</span>
                                <span className="showcase-content-2 px-10 py-4 bg-emerald-500 text-black rounded-lg -rotate-3 text-7xl inline-block">Liquid</span>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <span className="showcase-content-2 px-8 py-3 bg-pink-300 text-black rounded-lg rotate-2 text-5xl inline-block">Design</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 text-6xl">
                                    {s3Line2.map((char, i) => <AnimatedChar key={i} char={char} index={i + 20} slideIndex={2} />)}
                                </span>
                            </div>
                        </h3>
                        <div className="showcase-content-2 mt-12 flex gap-4">
                            <SvgShape type="square" color="#6366F1" />
                            <SvgShape type="circle" color="#F43F5E" />
                            <SvgShape type="triangle" color="#F59E0B" />
                        </div>
                    </div>

                    {/* Layout Visualization with Tilt */}
                    <div
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            gsap.to(e.currentTarget, { rotateY: x * 30, rotateX: -y * 30, duration: 0.5 });
                        }}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.8 })}
                        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[300px] flex items-center justify-center perspective-1000 transform-preserve-3d"
                    >
                        <div className="relative w-full h-full border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm p-4 transform-preserve-3d shadow-2xl">
                            <div className="w-full h-8 bg-white/10 rounded-full mb-4 translate-z-10" />
                            <div className="grid grid-cols-2 gap-4 h-[calc(100%-48px)] transform-preserve-3d">
                                <div className="bg-gradient-to-br from-[#6366F1]/20 to-[#D946EF]/20 rounded-xl translate-z-20" />
                                <div className="flex flex-col gap-4 transform-preserve-3d">
                                    <div className="h-1/2 bg-white/5 rounded-xl border border-white/10 translate-z-10" />
                                    <div className="h-1/2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 translate-z-30 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import type { DesignPalette } from "../../../../data/design-palettes";

const AnimatedChar = ({ char, index, palette }: { char: string, index: number, palette: DesignPalette }) => {
    const charRef = useRef<HTMLSpanElement>(null);
    const colors = palette.colors;
    const defaultColor = colors[index % colors.length];

    const triggerEffect = () => {
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

    const resetEffect = () => {
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

    // Animate once on load
    useEffect(() => {
        const timer = setTimeout(() => {
            triggerEffect();
            setTimeout(resetEffect, 800);
        }, 1500 + index * 50); // Start after entrance animation

        return () => clearTimeout(timer);
    }, [palette]); // Re-run when palette changes for a cool swap effect

    return (
        <span
            ref={charRef}
            onMouseEnter={triggerEffect}
            onMouseLeave={resetEffect}
            className="inline-block cursor-default"
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
        <div ref={shapeRef} className="inline-block mx-4 align-middle">
            <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-80">
                {type === 'circle' && <circle cx="20" cy="20" r="15" fill={color} />}
                {type === 'square' && <rect x="5" y="5" width="30" height="30" fill={color} rx="4" />}
                {type === 'triangle' && <path d="M20 5 L35 35 L5 35 Z" fill={color} />}
            </svg>
        </div>
    );
};

export const DesignHeroFrame = ({ palette }: { palette: DesignPalette }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const titleLine1 = "Design".split("");
    const titleLine2 = "& Creative".split("");

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // High-end entrance for all characters
            gsap.from(".char-entrance", {
                y: 150,
                rotateX: -90,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "expo.out",
                delay: 0.2
            });

            // Gentle fade in for paragraph
            gsap.from(textRef.current, {
                opacity: 0,
                y: 30,
                duration: 1.2,
                delay: 1.5,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-16 md:pt-32 md:pb-20">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0 opacity-30"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <img
                    src="https://images.unsplash.com/photo-1634942537034-2231730040e6?q=80&w=2000&auto=format&fit=crop"
                    alt="Creative Design"
                    className="w-full h-full object-cover grayscale opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </motion.div>

            {/* Glowing Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ backgroundColor: palette.bgGlow[0] + "1a" }}
                    className="absolute top-1/4 -left-20 w-[60vw] md:w-[45vw] h-[60vw] md:h-[45vw] rounded-full blur-[80px] md:blur-[120px] transition-colors duration-1000"
                />
                <motion.div
                    animate={{ backgroundColor: (palette.bgGlow[1] || palette.bgGlow[0]) + "1a" }}
                    className="absolute bottom-1/4 -right-20 w-[60vw] md:w-[45vw] h-[60vw] md:h-[45vw] rounded-full blur-[80px] md:blur-[120px] transition-colors duration-1000"
                />
            </div>

            <div className="relative z-10 text-center px-6 w-full">
                <div className="overflow-visible inline-block">
                    <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-black text-white italic leading-[0.8] tracking-tighter uppercase mb-6 flex flex-col items-center">
                        <div className="flex items-center">
                            {titleLine1.map((char, i) => (
                                <span key={i} className="char-entrance inline-block">
                                    <AnimatedChar char={char} index={i} palette={palette} />
                                </span>
                            ))}
                            <SvgShape type="square" color={palette.colors[0]} />
                        </div>
                        <div className="flex items-center mt-4">
                            <SvgShape type="circle" color={palette.colors[2 % palette.colors.length]} />
                            {titleLine2.map((char, i) => (
                                <span key={i} className="char-entrance inline-block">
                                    <AnimatedChar char={char} index={i + titleLine1.length} palette={palette} />
                                </span>
                            ))}
                            <SvgShape type="triangle" color={palette.colors[3 % palette.colors.length]} />
                        </div>
                    </h1>
                </div>

                <p
                    ref={textRef}
                    className="mt-8 md:mt-12 text-[clamp(1rem,2.5vw,1.75rem)] text-zinc-400 max-w-3xl mx-auto font-medium tracking-tight leading-relaxed px-2 md:px-6"
                >
                    Crafting distinctive brand identities and user-centric digital experiences that redefine industry standards and elevate business potential.
                </p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute right-20 bottom-20 flex items-center gap-4 hidden md:flex"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-white text-xs uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
                <div className="w-12 h-px bg-white/50" />
            </motion.div>
        </section>
    );
};



import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DesignContact } from "../design-contact";

gsap.registerPlugin(ScrollTrigger);

export const DesignContactFrame = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Content entrance: Move in/out
            gsap.fromTo(contentRef.current,
                { x: -100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: contentRef.current,
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

            // Form entrance: Move in/out
            gsap.fromTo(formRef.current,
                { x: 100, opacity: 0, rotateY: -10 },
                {
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse",
                    },
                    x: 0,
                    opacity: 1,
                    rotateY: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen py-16 md:py-32 flex items-center justify-center bg-transparent overflow-hidden px-6 lg:px-20">

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div ref={contentRef}>
                    <h2 className="text-[clamp(4.5rem,12vw,9.5rem)] font-black text-white italic uppercase leading-[0.8] tracking-tighter mb-8">
                        Let's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#D946EF] via-[#F43F5E] to-[#F59E0B] animate-gradient-x bg-[length:200%_auto]">
                            Create
                        </span> <br />
                        Together
                    </h2>
                    <p className="text-zinc-300 text-[clamp(1rem,2vw,1.75rem)] font-medium max-w-xl leading-relaxed tracking-tight">
                        Have a vision? We have the expertise to bring it to life with precision and creative flair.
                    </p>
                </div>

                <div ref={formRef} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#F59E0B] rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-1 rounded-[3.5rem] bg-zinc-900/50 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                        <div className="bg-black/40 p-6 md:p-12 rounded-[3.4rem]">
                            <DesignContact />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

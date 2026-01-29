import { Users, Layout, Target, Box } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "uiux",
        title: "UX/UI Design",
        desc: "High-fidelity prototypes and precision interfaces.",
        icon: Users,
        color: "from-[#6366F1]",
        shadow: "shadow-[#6366F1]/20",
        border: "group-hover:border-[#6366F1]/50",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "web",
        title: "Web Design",
        desc: "Performance-first digital architecture.",
        icon: Layout,
        color: "from-[#22D3EE]",
        shadow: "shadow-[#22D3EE]/20",
        border: "group-hover:border-[#22D3EE]/50",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "brand",
        title: "Brand Identity",
        desc: "Iconic visual systems and storytelling.",
        icon: Target,
        color: "from-[#D946EF]",
        shadow: "shadow-[#D946EF]/20",
        border: "group-hover:border-[#D946EF]/50",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "motion",
        title: "Motion Graphics",
        desc: "Fluid aesthetics and interactive flows.",
        icon: Box,
        color: "from-[#F43F5E]",
        shadow: "shadow-[#F43F5E]/20",
        border: "group-hover:border-[#F43F5E]/50",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
    }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !innerRef.current || !spotlightRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        gsap.to(innerRef.current, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(spotlightRef.current, {
            left: x,
            top: y,
            opacity: 1,
            duration: 0.2
        });
    };

    const onMouseEnter = () => {
        gsap.to(imgRef.current, { scale: 1.2, filter: "grayscale(0%) brightness(0.7)", duration: 0.8, ease: "power2.out" });
        gsap.to(descRef.current, { opacity: 1, y: 0, height: "auto", marginTop: 8, duration: 0.4, ease: "back.out(1.2)" });
        gsap.to(overlayRef.current, { opacity: 0.4, duration: 0.5 });
        gsap.to(cardRef.current, { zIndex: 50, duration: 0.1 });
        gsap.to(contentRef.current, { y: 0, duration: 0.5, ease: "power2.out" });
    };

    const onMouseLeave = () => {
        gsap.to(imgRef.current, { scale: 1, filter: "grayscale(100%) brightness(0.4)", duration: 0.8, ease: "power2.inOut" });
        gsap.to(descRef.current, { opacity: 0, y: 10, height: 0, marginTop: 0, duration: 0.3, ease: "power2.in" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
        gsap.to(cardRef.current, { zIndex: 1, duration: 0.1 });
        gsap.to(innerRef.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        gsap.to(contentRef.current, { y: 12, duration: 0.5, ease: "power2.inOut" });
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.5 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="service-card relative aspect-[3/4] perspective-1000 group cursor-pointer"
        >
            <div
                ref={innerRef}
                className={`relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/5 transition-all duration-500 bg-zinc-950/80 backdrop-blur-md transform-preserve-3d shadow-xl ${service.shadow} ${service.border}`}
            >
                {/* Spotlight */}
                <div
                    ref={spotlightRef}
                    className="absolute w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-[60px] rounded-full pointer-events-none opacity-0 z-30"
                />

                <img
                    ref={imgRef}
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />
                <div ref={overlayRef} className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 mix-blend-overlay`} />

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <div ref={contentRef} className="transform translate-y-3">
                        <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                            <service.icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-none mb-1">
                            {service.title}
                        </h3>

                        <p ref={descRef} className="text-zinc-400 text-xs leading-relaxed max-w-[180px] opacity-0 h-0 overflow-hidden">
                            {service.desc}
                        </p>
                    </div>
                </div>

                {/* Animated colored glow at the bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
        </div>
    );
};

export const DesignServicesFrame = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 95%",
                        toggleActions: "play reverse play reverse",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".service-card-wrapper",
                { scale: 0.9, opacity: 0, y: 50 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse",
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.4)"
                }
            );

            gsap.to(".bg-text-offerings", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                x: -100,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-24 flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 lg:px-20">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none overflow-hidden">
                <h2 className="bg-text-offerings text-[30vw] font-black italic uppercase tracking-tighter text-white whitespace-nowrap">
                    Core Solutions
                </h2>
            </div>

            <div className="container mx-auto relative z-10 w-full max-w-6xl">
                <div ref={headerRef} className="flex flex-col items-start mb-16 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                        <Target size={12} className="text-[#D946EF]" />
                        <span>Our Offerings</span>
                    </div>
                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white italic uppercase leading-[0.8] tracking-tighter mb-4">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#F43F5E]">Core</span>
                    </h2>
                    <p className="text-zinc-500 text-sm font-medium tracking-tight border-l border-white/10 pl-4">
                        Precise design execution meeting strategic business objectives.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
                    {services.map((service, i) => (
                        <div key={i} className="service-card-wrapper h-full">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};




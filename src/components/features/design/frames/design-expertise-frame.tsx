import { Layout, Search, Users, Smartphone, Zap, Megaphone } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseItem = ({ item }: { item: { title: string, icon: any, desc: string } }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    const onMouseEnter = () => {
        gsap.to(itemRef.current, { backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(168, 85, 247, 0.5)", duration: 0.3 });
        gsap.to(iconContainerRef.current, { backgroundColor: "#a855f7", color: "#ffffff", scale: 1.1, duration: 0.5, ease: "power2.out" });
        gsap.to(descRef.current, { opacity: 1, height: "auto", marginTop: 8, duration: 0.4, ease: "power2.out" });
    };

    const onMouseLeave = () => {
        gsap.to(itemRef.current, { backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.1)", duration: 0.3 });
        gsap.to(iconContainerRef.current, { backgroundColor: "rgba(168, 85, 247, 0.1)", color: "#a855f7", scale: 1, duration: 0.5, ease: "power2.inOut" });
        gsap.to(descRef.current, { opacity: 0, height: 0, marginTop: 0, duration: 0.3, ease: "power2.in" });
    };

    return (
        <div
            ref={itemRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="expertise-item p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-start gap-4 transition-colors cursor-pointer"
        >
            <div ref={iconContainerRef} className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <item.icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-xl font-bold text-white uppercase italic tracking-tight">{item.title}</h4>
                <p ref={descRef} className="text-zinc-500 text-sm leading-tight opacity-0 h-0 overflow-hidden">{item.desc}</p>
            </div>
        </div>
    );
};

export const DesignExpertiseFrame = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const expertise = [
        { title: "Design Systems", icon: Layout, desc: "Scalable visual languages" },
        { title: "User Research", icon: Search, desc: "Data-driven insights" },
        { title: "User-Centered", icon: Users, desc: "Human-first approach" },
        { title: "Mobile-First", icon: Smartphone, desc: "Optimal cross-device experience" },
        { title: "DesignOps", icon: Zap, desc: "Streamlined workflows" },
        { title: "Brand Voice", icon: Megaphone, desc: "Compelling narratives" }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title reveal: Move in/out
            gsap.fromTo(titleRef.current,
                { x: -50, opacity: 0, skewX: 10 },
                {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse",
                    },
                    x: 0,
                    opacity: 1,
                    skewX: 0,
                    duration: 1.2,
                    ease: "expo.out"
                }
            );

            // Grid items staggered: Move in/out
            gsap.fromTo(".expertise-item",
                { scale: 0.8, opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play reverse play reverse",
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: {
                        grid: [3, 2],
                        from: "center",
                        amount: 0.4
                    },
                    ease: "back.out(1.2)"
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen py-32 flex items-center justify-center bg-transparent overflow-hidden px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full max-w-7xl relative z-10">
                <div className="flex flex-col">
                    <h2 ref={titleRef} className="text-[clamp(4.5rem,12vw,9rem)] font-black text-white italic leading-[0.8] tracking-tighter uppercase mb-12">
                        Deep <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#F43F5E]">Expertise</span>
                    </h2>
                    <p className="text-zinc-200 text-[clamp(1.125rem,2vw,1.5rem)] max-w-xl leading-relaxed font-medium tracking-tight">
                        Our specialized knowledge ensures consistent and scalable design solutions from simple prototypes to complex enterprise ecosystems.
                    </p>
                </div>

                <div ref={gridRef} className="grid grid-cols-2 gap-6">
                    {expertise.map((item, idx) => (
                        <ExpertiseItem key={idx} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};



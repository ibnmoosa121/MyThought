"use client";

import { Marquee } from "../../ui/marquee";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        name: "Farhan Shaikh",
        username: "@farhan_riyadh",
        body: "Building our decentralized remittance app on their blockchain infra was a massive success. Best SAR to INR throughput we've seen!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan",
        location: "🇸🇦 Riyadh, KSA",
    },
    {
        name: "Siti Aminah",
        username: "@siti_jakarta",
        body: "Their smart contract solutions for IDR-SAR conversion are revolutionary. Our Makkah business transfers are now immutable and instant.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti",
        location: "🇮🇩 Jakarta, IDN",
    },
    {
        name: "Rahul Nair",
        username: "@rahul_dxb",
        body: "Dubai's first blockchain-led Indian corridor. They engineered a private ledger for our NRI investment fund that parents can trust.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
        location: "🇦🇪 Dubai, UAE",
    },
    {
        name: "Budi Santoso",
        username: "@budi_surabaya",
        body: "Zero-knowledge proofs for pilgrimage privacy. They built an automated blockchain solution that changed the game for Indonesian Hajj groups.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
        location: "🇮🇩 Surabaya, IDN",
    },
    {
        name: "Aman Preet",
        username: "@aman_ad",
        body: "We needed a blockchain-based ledger for cross-border auditing. Their engineering team delivered a high-availability dApp in weeks.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
        location: "🇦🇪 Abu Dhabi, UAE",
    },
    {
        name: "Yousuf Al-Farsi",
        username: "@yousuf_chain",
        body: "Expertise in creating secure blockchain applications for Gulf finance. They bridged our traditional systems with the future of Web3.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yousuf",
        location: "🇸🇦 Jeddah, KSA",
    }
];

function TestimonialCard({ img, name, username, body, location }: (typeof TESTIMONIALS)[number]) {
    return (
        <Card className="w-[300px] md:w-[350px] bg-zinc-900/60 border-white/5 backdrop-blur-3xl hover:border-teal-500/30 transition-all hover:scale-[1.02]">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-10 w-10 border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                        <AvatarImage src={img} alt={name} />
                        <AvatarFallback className="bg-teal-500/10 text-teal-500">{name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-black text-white italic uppercase tracking-tighter flex items-center gap-2">
                            {name} <span className="text-[10px] opacity-60 not-italic font-normal">{location}</span>
                        </span>
                        <span className="text-[10px] font-medium text-zinc-500">{username}</span>
                    </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-zinc-300 italic font-medium">
                    "{body}"
                </blockquote>
            </CardContent>
        </Card>
    );
}

export const FintechTestimonials = () => {
    return (
        <section className="relative py-40 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-24 relative z-20">
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-teal-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
                    >
                        Web3 & Ledger Trust
                    </motion.span>
                    <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-tight">
                        Securing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-600">Blockchain </span>
                        Ledgers
                    </h2>
                </div>
            </div>

            {/* 3D Perspective Wrapper */}
            <div className="relative h-[600px] w-full flex items-center justify-center [perspective:1200px] perspective-1200">
                <div
                    className="flex flex-row items-center justify-center gap-8 w-max"
                    style={{
                        transform: "rotateX(20deg) rotateY(-5deg) rotateZ(5deg) scale(1.1)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div className="flex flex-col gap-8">
                        {/* First Row - Left to Right */}
                        <Marquee pauseOnHover className="[--duration:50s] [--gap:2rem]" repeat={3}>
                            {TESTIMONIALS.slice(0, 3).map((t) => (
                                <TestimonialCard key={t.username} {...t} />
                            ))}
                        </Marquee>

                        {/* Second Row - Right to Left */}
                        <Marquee pauseOnHover reverse className="[--duration:60s] [--gap:2rem]" repeat={3}>
                            {TESTIMONIALS.slice(3, 6).map((t) => (
                                <TestimonialCard key={t.username} {...t} />
                            ))}
                        </Marquee>

                        {/* Third Row - Left to Right */}
                        <Marquee pauseOnHover className="[--duration:70s] [--gap:2rem]" repeat={3}>
                            {[...TESTIMONIALS].reverse().slice(0, 3).map((t, i) => (
                                <TestimonialCard key={`${t.username}-3d-${i}`} {...t} />
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* All blocking overlays removed to ensure clear view of cards */}
            </div>

            <div className="mt-24 text-center relative z-20">
                <p className="text-zinc-500 text-sm font-black uppercase tracking-[0.5em] italic">
                    Engineering Custom Blockchain Solutions for the Gulf & Asia
                </p>
            </div>
        </section>
    );
};

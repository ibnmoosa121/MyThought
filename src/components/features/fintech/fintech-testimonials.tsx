"use client";

import { Marquee } from "../../ui/marquee";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PAYMENT_SLIPS = [
    {
        amount: "$12,450.00",
        recipient: "Sarah Jenkins",
        id: "TXN-8942-XJ",
        status: "Success",
        time: "10:42 AM",
        method: "USDT Transfer",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        location: "New York, USA"
    },
    {
        amount: "AED 45,200.00",
        recipient: "Al-Rajhi Corp",
        id: "TXN-7721-BC",
        status: "Success",
        time: "10:44 AM",
        method: "Direct Deposit",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajhi",
        location: "Riyadh, KSA"
    },
    {
        amount: "€ 8,900.50",
        recipient: "TechFlow Ltd",
        id: "TXN-3390-EU",
        status: "Success",
        time: "10:45 AM",
        method: "SEPA Instant",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechFlow",
        location: "Berlin, DE"
    },
    {
        amount: "$150,000.00",
        recipient: "Venture Partners",
        id: "TXN-9912-VP",
        status: "Success",
        time: "10:48 AM",
        method: "Wire Transfer",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Venture",
        location: "Singapore, SG"
    },
    {
        amount: "SAR 22,150.00",
        recipient: "Omar Al-Fayed",
        id: "TXN-5561-SA",
        status: "Success",
        time: "10:51 AM",
        method: "Local Transfer",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
        location: "Jeddah, KSA"
    },
    {
        amount: "IDR 15.5M",
        recipient: "GoJek Merchant",
        id: "TXN-1120-ID",
        status: "Success",
        time: "10:55 AM",
        method: "QR Payment",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gojek",
        location: "Jakarta, IDN"
    }
];

function PaymentSlip({ amount, recipient, id, time, method, img, location }: (typeof PAYMENT_SLIPS)[number]) {
    return (
        <Card className="w-[320px] bg-zinc-950 border border-teal-500/20 shadow-[0_0_30px_rgba(20,184,166,0.1)] backdrop-blur-xl group hover:border-teal-500/50 transition-all duration-300">
            <CardContent className="p-5">
                {/* Header: Success Status */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2 text-teal-500">
                        <CheckCircle2 size={16} className="fill-teal-500/20" />
                        <span className="text-xs font-bold uppercase tracking-wider">Payment success</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">{time}</span>
                </div>

                {/* Body: Amount & Recipient */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-400 mb-1">Total Amount</span>
                        <span className="text-2xl font-black text-white tracking-tight">{amount}</span>
                    </div>
                    <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                        <ArrowUpRight size={20} className="text-teal-500" />
                    </div>
                </div>

                {/* Footer: Details */}
                <div className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border border-white/10">
                            <AvatarImage src={img} alt={recipient} />
                            <AvatarFallback>{recipient[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-zinc-200">{recipient}</span>
                            <span className="text-[10px] text-zinc-500">{location}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] mobile-font font-mono text-teal-400">{method}</span>
                        <span className="text-[9px] font-mono text-zinc-600">{id}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export const FintechTestimonials = () => {
    return (
        <section id="fintech-testimonials" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-20 relative z-20">
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-2 text-teal-500 font-black uppercase tracking-[0.4em] text-xs mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        Live Ledger Feed
                    </motion.span>
                    <h2 id="fintech-velocity-title" className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight">
                        Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-600">
                            Transaction Velocity
                        </span>
                    </h2>
                </div>
            </div>

            {/* 3D Perspective Wrapper - Angled Upwards like a rising stream */}
            <div className="relative h-[600px] w-full flex items-center justify-center [perspective:1000px]">
                <div
                    className="flex flex-row items-center justify-center gap-6 w-max"
                    style={{
                        transform: "rotateX(10deg) rotateY(0deg) rotateZ(-5deg) scale(1)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div className="flex flex-col gap-6">
                        {/* Stream 1 */}
                        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]" repeat={4}>
                            {PAYMENT_SLIPS.map((t, i) => (
                                <PaymentSlip key={i} {...t} />
                            ))}
                        </Marquee>

                        {/* Stream 2 - Reverse */}
                        <Marquee pauseOnHover reverse className="[--duration:50s] [--gap:1.5rem]" repeat={4}>
                            {[...PAYMENT_SLIPS].reverse().map((t, i) => (
                                <PaymentSlip key={i} {...t} />
                            ))}
                        </Marquee>

                        {/* Stream 3 */}
                        <Marquee pauseOnHover className="[--duration:45s] [--gap:1.5rem]" repeat={4}>
                            {[...PAYMENT_SLIPS.slice(2), ...PAYMENT_SLIPS.slice(0, 2)].map((t, i) => (
                                <PaymentSlip key={i} {...t} />
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Gradient Fades for depth */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>

            <div className="mt-16 text-center relative z-20">
                <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.5em]">
                    Real-time Settlement via Antigravity Nodes
                </p>
            </div>
        </section>
    );
};

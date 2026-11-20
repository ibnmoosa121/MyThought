"use client";

import { Marquee } from "../../ui/marquee";
import { Card, CardContent } from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

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
        location: "Riyadh, KSA"
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
        <Card className="w-[320px] bg-zinc-950 border border-white/10 group hover:border-teal-500/40 transition-colors duration-200">
            <CardContent className="p-5">
                {/* Header: Success Status */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-teal-400">
                        <CheckCircle2 size={15} />
                        <span className="text-xs font-medium">Settled</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 tabular-nums">{time}</span>
                </div>

                {/* Body: Amount & Recipient */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500 mb-1">Amount</span>
                        <span className="text-2xl font-semibold text-white tracking-tight tabular-nums">{amount}</span>
                    </div>
                    <div className="p-2 bg-teal-500/10 rounded-lg">
                        <ArrowUpRight size={18} className="text-teal-400" />
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
                            <span className="text-xs font-medium text-zinc-200">{recipient}</span>
                            <span className="text-[11px] text-zinc-500">{location}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[11px] font-mono text-teal-400">{method}</span>
                        <span className="text-[10px] font-mono text-zinc-500">{id}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export const FintechTestimonials = () => {
    return (
        <section id="fintech-testimonials" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 max-w-6xl mb-16 relative z-20">
                <div className="max-w-3xl">
                    <span className="flex items-center gap-2 text-teal-400 font-mono text-xs mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        03 // Settlement architecture
                    </span>
                    <h2 id="fintech-velocity-title" className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        Multi-currency{" "}
                        <span className="text-teal-400">
                            settlement stream
                        </span>
                    </h2>
                </div>
            </div>

            {/* 3D Perspective Wrapper */}
            <div className="relative h-[560px] w-full flex items-center justify-center [perspective:1000px]">
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

            <div className="mt-12 text-center relative z-20">
                <p className="text-zinc-500 text-xs font-mono">
                    Illustrative multi-currency ledger preview · Stebup FinTech
                </p>
            </div>
        </section>
    );
};

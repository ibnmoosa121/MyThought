"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Coins, Rocket, Handshake, CalendarRange, ArrowUpRight } from "lucide-react";

const VENTURES_SERVICES = [
    {
        code: "TRK-01",
        title: "Venture Building",
        desc: "Hands-on product engineering, architecture, and go-to-market execution to take early concepts into operating companies.",
        icon: Building2
    },
    {
        code: "TRK-02",
        title: "Founder Advisory",
        desc: "Direct operational guidance from technical and commercial leads across product roadmap, hiring, and governance.",
        icon: GraduationCap
    },
    {
        code: "TRK-03",
        title: "Investment Syndicate",
        desc: "Co-investing alongside regional family offices and institutional partners in high-conviction technology startups.",
        icon: Coins
    },
    {
        code: "TRK-04",
        title: "Early-Stage Capital",
        desc: "Pre-seed and seed capital backing technical teams solving enterprise, fintech, and logistics bottlenecks.",
        icon: Rocket
    },
    {
        code: "TRK-05",
        title: "Corporate Partnerships",
        desc: "Structuring joint ventures, pilot deployments, and commercial distribution with established GCC enterprises.",
        icon: Handshake
    },
    {
        code: "TRK-06",
        title: "Founder Network",
        desc: "Curated roundtables and operator forums connecting founders with enterprise buyers, regulators, and co-investors.",
        icon: CalendarRange
    }
];

export const VenturesPortfolio = () => {
    return (
        <section id="ventures-portfolio" className="relative py-24 md:py-32 bg-black overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-3xl mb-14 md:mb-16">
                    <span className="text-amber-500 font-mono text-xs mb-3 block">
                        01 // Venture capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        Studio &amp; investment{" "}
                        <span className="text-zinc-400">capabilities</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {VENTURES_SERVICES.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group relative p-6 md:p-8 rounded-xl bg-zinc-950 border border-white/10 hover:border-amber-500/40 transition-colors duration-200 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 flex items-center justify-center transition-colors duration-200">
                                    <service.icon size={18} strokeWidth={1.75} />
                                </div>
                                <ArrowUpRight className="text-zinc-600 group-hover:text-amber-500 transition-colors" size={18} />
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2.5">
                                {service.title}
                            </h3>

                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-500">
                                    {service.code}
                                </span>
                                <span className="text-xs font-mono text-zinc-400 group-hover:text-amber-500 transition-colors">
                                    Active
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

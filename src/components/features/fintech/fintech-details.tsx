"use client";

import { motion } from "framer-motion";
import { Zap, ChartPie, Coins, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";

const FEATURES = [
    {
        title: "Payment Orchestration",
        desc: "Multi-gateway routing, automated failover, and multi-currency settlement across regional and international rails.",
        icon: Zap,
        color: "text-teal-400",
    },
    {
        title: "Ledger & Reconciliation",
        desc: "Double-entry accounting engines with automated settlement reconciliation and full auditability.",
        icon: Coins,
        color: "text-teal-400",
    },
    {
        title: "Risk & Compliance Analytics",
        desc: "Transaction monitoring, AML screening workflows, and predictive risk scoring built for regulated entities.",
        icon: ChartPie,
        color: "text-teal-400",
    }
];

const BENEFITS = [
    {
        label: "Operational Efficiency",
        title: "Lower settlement overhead",
        desc: "Consolidate fragmented payment gateways and automate reconciliation workflows to reduce manual treasury operations and settlement friction.",
    },
    {
        label: "Security & Governance",
        title: "Compliance built into the stack",
        desc: "Architected around PCI-DSS standards, role-based approval controls, and end-to-end encryption to satisfy regional banking audits.",
    }
];

const STEPS = [
    { number: "01", title: "Architecture & Compliance", text: "Define ledger schemas, settlement flows, and regulatory controls aligned with your target jurisdictions." },
    { number: "02", title: "API & Core Integration", text: "Connect existing banking cores, payment gateways, and KYC providers through clean, documented APIs." },
    { number: "03", title: "Production Rollout", text: "Deploy with automated failover, observability dashboards, and SLA-backed operational support." }
];

export const FintechDetails = () => {
    return (
        <div id="fintech-details" className="relative bg-black text-white">
            {/* 1. Core Features Section */}
            <section className="py-24 px-6 border-b border-white/10">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-3xl mb-14">
                        <span className="text-teal-400 font-mono text-xs mb-3 block">
                            01 // Core capabilities
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                            Financial systems{" "}
                            <span className="text-zinc-400">built for scale</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {FEATURES.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06, duration: 0.4 }}
                                className="group p-6 md:p-8 rounded-xl bg-zinc-950 border border-white/10 hover:border-teal-500/30 transition-colors duration-200"
                            >
                                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6">
                                    <f.icon className={cn("w-5 h-5", f.color)} strokeWidth={1.75} />
                                </div>
                                <h3 className="text-lg font-semibold tracking-tight mb-2.5">{f.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section className="py-24 px-6 bg-zinc-950/50 border-b border-white/10">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {BENEFITS.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex flex-col items-start"
                            >
                                <span className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
                                    {b.label}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                                    {b.title}
                                </h3>
                                <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                                    {b.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. How It Works Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-teal-400 font-mono text-xs mb-3 block">
                            02 // Implementation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                            Delivery roadmap
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STEPS.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="relative p-6 md:p-8 rounded-xl bg-zinc-950 border border-white/10 text-left"
                            >
                                <div className="text-xs font-mono text-teal-400 mb-3 tabular-nums">
                                    Phase {s.number}
                                </div>
                                <h4 className="text-lg font-semibold tracking-tight mb-2.5 text-white">{s.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{s.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-20 text-center">
                        <div className="inline-flex flex-col items-center gap-6">
                            <p className="text-zinc-400 text-base max-w-md">
                                Planning a payment gateway integration, custom ledger, or compliance platform?
                            </p>
                            <a
                                href="#/contact"
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-black font-medium text-sm transition-colors duration-150"
                            >
                                <span>Speak with our architects</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

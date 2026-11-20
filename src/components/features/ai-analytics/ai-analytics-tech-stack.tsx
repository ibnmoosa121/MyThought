"use client";

import { motion } from "framer-motion";
import { Database, Box, Brain, Zap, Terminal } from "lucide-react";

export const AIAnalyticsTechStack = () => {
    const items = [
        {
            title: "Applied ML & LLMs",
            desc: "Custom language models, RAG knowledge bases, and classification pipelines deployed over private enterprise data.",
            icon: <Brain className="w-5 h-5" strokeWidth={1.75} />,
            id: "01",
            tag: "Language & Vision",
            colSpan: "md:col-span-7"
        },
        {
            title: "Data Engineering",
            desc: "Governed ETL pipelines, cloud data warehouses, and lakehouse architectures built for reliability and auditability.",
            icon: <Database className="w-5 h-5" strokeWidth={1.75} />,
            id: "02",
            tag: "Pipelines & Storage",
            colSpan: "md:col-span-5"
        },
        {
            title: "Workflow Automation",
            desc: "Task-specific operational agents integrated into existing ERP, CRM, and document review processes.",
            icon: <Box className="w-5 h-5" strokeWidth={1.75} />,
            id: "03",
            tag: "Process Agents",
            colSpan: "md:col-span-5"
        },
        {
            title: "Enterprise Analytics",
            desc: "Executive KPI dashboards, anomaly detection, and forecasting models tailored to regional operations.",
            icon: <Zap className="w-5 h-5" strokeWidth={1.75} />,
            id: "04",
            tag: "BI & Forecasting",
            colSpan: "md:col-span-7"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center justify-center gap-2 text-indigo-400 mb-3">
                        <Terminal size={14} />
                        <span className="text-xs font-mono">
                            01 // System architecture
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                        Applied AI &amp;{" "}
                        <span className="text-indigo-400">
                            data engineering
                        </span>
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Production machine learning pipelines, enterprise data platforms, and workflow automation built for measurable operational outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.4 }}
                            className={`${item.colSpan} flex`}
                        >
                            <div className="flex-1 p-6 md:p-8 rounded-xl bg-zinc-950 border border-white/10 hover:border-indigo-500/40 transition-colors duration-200 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-mono text-zinc-500 tabular-nums">
                                            {item.id}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-2.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-xs font-mono text-zinc-500">Module</span>
                                    <span className="text-xs font-mono text-indigo-400">{item.tag}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

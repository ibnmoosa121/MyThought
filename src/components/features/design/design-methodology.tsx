"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "1",
        title: "Discovery & Research",
        desc: "Gather insights on project goals, target audience, and market landscape to lay the foundation."
    },
    {
        num: "2",
        title: "Strategy & Planning",
        desc: "Transform information into actionable strategy, aligning user needs with business objectives."
    },
    {
        num: "3",
        title: "Design Execution",
        desc: "Create tangible designs in iterative cycles from concepts to production-ready designs."
    },
    {
        num: "4",
        title: "Implementation",
        desc: "Bring designs to life across platforms, ensuring quality, consistency, and feedback."
    }
];

export const DesignMethodology = () => {
    return (
        <div className="mt-40 w-full max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
                Our <span className="text-purple-500">Methodology</span>
            </h2>
            <p className="text-zinc-400 mb-16">From vision to reality</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="relative group">
                        <div className="text-[10rem] font-black text-white/5 absolute -top-20 left-0 -z-10 group-hover:text-purple-500/10 transition-colors">
                            {step.num}
                        </div>
                        <div className="pt-10 text-left">
                            <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-tight">{step.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

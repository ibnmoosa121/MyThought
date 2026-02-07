"use client";

import { motion } from "framer-motion";
import { Database, Box, Brain, Zap, Terminal, Activity } from "lucide-react";
import DecryptedText from "@/components/ui/decrypted-text";

const NeuralBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal Data Streams */}
        <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={`h-${i}`}
                    initial={{ scaleX: 0, x: "-100%" }}
                    animate={{ scaleX: [0, 1, 0], x: ["100%", "200%"] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                    className="absolute h-px w-full bg-indigo-500 top-[10%] mt-[100px]"
                    style={{ top: `${i * 10}%` }}
                />
            ))}
        </div>

        {/* Pulsing Nodes */}
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={`p-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1, 0.5] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                }}
                className="absolute w-1 h-1 bg-indigo-400 rounded-full blur-[2px]"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                }}
            />
        ))}
    </div>
);

export const AIAnalyticsTechStack = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <NeuralBackground />

            {/* Industrial Frame Accents */}
            <div className="absolute top-0 left-10 w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent" />
            <div className="absolute top-0 right-10 w-px h-20 bg-gradient-to-b from-indigo-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-indigo-500/5 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        <Terminal size={14} className="animate-pulse" />
                        <DecryptedText text="System Core Architecture" speed={80} />
                    </motion.div>

                    <div className="relative inline-block">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-6"
                        >
                            The AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-blue-500">
                                Powered Forge
                            </span>
                        </motion.h2>
                        {/* Title Underline Accent */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1.5 bg-indigo-600/30 rounded-full mt-4"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
                    >
                        Experience the interface of tomorrow. Our <span className="text-white">Autonomous Robotics</span> and deep learning models process complex data patterns in real-time.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12">
                    {[
                        {
                            title: "Cognitive Processing",
                            desc: "Advanced neural networks that simulate human-like decision making.",
                            icon: <Brain className="w-6 h-6" />,
                            color: "text-indigo-400",
                            bg: "bg-indigo-500/10",
                            id: "01",
                            load: 85,
                            status: "Syncing"
                        },
                        {
                            title: "Data Orchestration",
                            desc: "High-velocity data pipelines that feed our predictive engines.",
                            icon: <Database className="w-6 h-6" />,
                            color: "text-blue-400",
                            bg: "bg-blue-500/10",
                            id: "02",
                            load: 72,
                            status: "Optimized"
                        },
                        {
                            title: "Autonomous Agents",
                            desc: "Self-learning agents that automate complex organizational tasks.",
                            icon: <Box className="w-6 h-6" />,
                            color: "text-purple-400",
                            bg: "bg-purple-500/10",
                            id: "03",
                            load: 94,
                            status: "Learning"
                        },
                        {
                            title: "Instant Insights",
                            desc: "Real-time pattern recognition across massive multi-modal datasets.",
                            icon: <Zap className="w-6 h-6" />,
                            color: "text-amber-400",
                            bg: "bg-amber-500/10",
                            id: "04",
                            load: 65,
                            status: "Real-time"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            {/* Industrial Bracket Accents */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-white/10 group-hover:border-indigo-500 transition-colors" />

                            <div className="p-10 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl group relative overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:bg-zinc-900/60 h-full">
                                {/* Metadata Watermark */}
                                <div className="absolute top-6 right-8 opacity-10 font-mono text-4xl font-black italic text-zinc-500 group-hover:opacity-20 transition-opacity">
                                    {item.id}
                                </div>

                                {/* Diagonal Scanning Line */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/5 to-transparent skew-x-12 translate-x-[-200%]"
                                    animate={{ translateX: ["200%", "-200%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                                />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`p-4 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.2)] transition-all duration-500`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter">Status</span>
                                            <span className={`text-[10px] font-mono ${item.color} italic uppercase`}>{item.status}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4 group-hover:text-indigo-400 transition-colors">
                                        <DecryptedText text={item.title} animateOn="view" />
                                    </h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-300 transition-colors mb-10">
                                        {item.desc}
                                    </p>

                                    {/* System Load Indicator */}
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                                                <Activity size={12} className="text-indigo-500" />
                                                Processing Load
                                            </div>
                                            <span className="text-[10px] font-mono text-indigo-400">{item.load}%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.load}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                                                className={`h-full bg-gradient-to-r from-transparent to-indigo-500`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

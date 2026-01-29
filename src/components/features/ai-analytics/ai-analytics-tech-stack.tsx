"use client";

import { motion } from "framer-motion";
import { Database, Box, Brain, Zap } from "lucide-react";

const NeuralBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: Math.random() * 1000 }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    y: [Math.random() * 1000, -100],
                    x: Math.random() * 100 + "%"
                }}
                transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 10
                }}
                className="absolute w-[1px] h-[50px] bg-gradient-to-b from-indigo-500/50 to-transparent"
            />
        ))}
    </div>
);

export const AIAnalyticsTechStack = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <NeuralBackground />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
                    >
                        <Brain className="w-4 h-4 animate-pulse" />
                        Next-Gen Neural Architecture
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none"
                        >
                            The AI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-600">
                                Powered Core
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Experience the interface of tomorrow. Our <span className="text-white font-bold">Autonomous Robotics</span> and deep learning models process complex data patterns in real-time.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-12">
                    {/* Left Side: Capabilities */}
                    <div className="space-y-6">
                        {[
                            {
                                title: "Cognitive Processing",
                                desc: "Advanced neural networks that simulate human-like decision making.",
                                icon: <Brain className="w-6 h-6" />,
                                color: "text-indigo-500",
                                bg: "bg-indigo-500/10",
                                delay: 0.1
                            },
                            {
                                title: "Data Orchestration",
                                desc: "High-velocity data pipelines that feed our predictive engines.",
                                icon: <Database className="w-6 h-6" />,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10",
                                delay: 0.2
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.6 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:bg-white/10 h-full flex flex-col justify-center"
                            >
                                {/* Scanning line animation */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full"
                                    animate={{ x: ["100%", "-100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />

                                <div className="relative z-10">
                                    <div className={`p-4 rounded-xl ${item.bg} ${item.color} w-fit mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side: Capabilities */}
                    <div className="space-y-6">
                        {[
                            {
                                title: "Autonomous Agents",
                                desc: "Self-learning agents that automate complex organizational tasks.",
                                icon: <Box className="w-6 h-6" />,
                                color: "text-purple-500",
                                bg: "bg-purple-500/10",
                                delay: 0.3
                            },
                            {
                                title: "Instant Insights",
                                desc: "Real-time pattern recognition across massive multi-modal datasets.",
                                icon: <Zap className="w-6 h-6" />,
                                color: "text-amber-500",
                                bg: "bg-amber-500/10",
                                delay: 0.4
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.6 }}
                                whileHover={{ scale: 1.02, x: -5 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:bg-white/10 h-full flex flex-col justify-center"
                            >
                                {/* Scanning line animation */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full"
                                    animate={{ x: ["100%", "-100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                />

                                <div className="relative z-10">
                                    <div className={`p-4 rounded-xl ${item.bg} ${item.color} w-fit mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

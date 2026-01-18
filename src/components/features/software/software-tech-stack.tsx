"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Box, Sparkles } from "lucide-react";

export const SoftwareTechStack = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        Next-Gen Tech
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                        Our Technology <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                            Ecosystem
                        </span>
                    </h2>
                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
                        We leverage cutting-edge tools to build software that's not just functional, but future-proof.
                    </p>
                </div>

                <Card className="w-full h-[600px] bg-black/60 border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(59, 130, 246, 0.5)"
                    />

                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left Column: Frontend & Backend */}
                        <div className="flex-1 p-8 relative z-20 flex flex-col justify-around">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React 19', 'Next.js', 'Typescript', 'Tailwind v4', 'Framer Motion', 'GSAP'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-md text-sm hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'PostgreSQL', 'Redis', 'Python', 'GraphQL', 'Prisma'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-md text-sm hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-400 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Middle: Robot */}
                        <div className="flex-[1.2] relative h-[400px] md:h-full order-first md:order-none">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Right Column: Infrastructure & AI */}
                        <div className="flex-1 p-8 relative z-20 flex flex-col justify-around">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                        <Box className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Infrastructure</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Vercel'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-md text-sm hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">AI Core</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['OpenAI', 'PyTorch', 'LangChain', 'TensorFlow', 'LLMs', 'VectorDB'].map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-md text-sm hover:bg-amber-500/20 hover:border-amber-500/30 hover:text-amber-400 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

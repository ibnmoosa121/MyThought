import { motion } from 'framer-motion'
import { Brain, Database, BarChart3, Cpu } from 'lucide-react'
import { SplineScene } from '@/components/ui/splite'

export const AIAnalyticsHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-40 pb-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8"
                        >
                            <Brain size={16} />
                            <span className="text-sm font-medium tracking-wider uppercase">Intelligence Redefined</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400"
                        >
                            AI & Data Analytics
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-2xl"
                        >
                            Transforming raw data into actionable intelligence. We build custom AI solutions and data architectures that drive innovation and scale.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4 mb-12 max-w-md">
                            {[
                                { icon: Brain, label: 'Neural Networks' },
                                { icon: Database, label: 'Data Lakehouse' },
                                { icon: BarChart3, label: 'Predictive BI' },
                                { icon: Cpu, label: 'Edge AI' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center gap-3 backdrop-blur-sm hover:border-indigo-500/50 transition-colors group"
                                >
                                    <item.icon className="text-indigo-400 group-hover:scale-110 transition-transform" size={24} />
                                    <span className="text-sm text-zinc-400">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                        >
                            Start Your AI Journey
                        </motion.button>
                    </div>

                    <div className="flex-1 w-full h-[500px] lg:h-[600px] relative">
                        {/* Connecting Aura Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute w-64 h-64 rounded-full border border-indigo-500/20"
                            />
                            <motion.div
                                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.2, 0.05] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute w-96 h-96 rounded-full border border-indigo-500/10"
                            />
                        </div>

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.25)_0%,transparent_70%)] pointer-events-none animate-pulse" />
                        <div className="w-full h-full relative overflow-hidden">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


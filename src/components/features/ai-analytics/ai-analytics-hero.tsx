import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { RobotGreeting } from './robot-greeting'

// AIServiceNode optimized for mobile and performance
const AIServiceNode = ({
    label,
    position,
    index,
    onHover,
    onLeave
}: {
    label: string,
    position: string,
    index: number,
    onHover: () => void,
    onLeave: () => void
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            className={`absolute ${position} z-20 group`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={(e) => { e.stopPropagation(); onHover(); }} // For mobile tap interaction
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-crosshair transform-gpu"
            >
                {/* The "Eye Offering Light" Spotlight Effect */}
                <div className="absolute inset-[-80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(79,70,229,0.25)_0%,transparent_70%)]" />
                    {/* Focussed Center Light */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(79,70,229,0.4)_0%,transparent_60%)] animate-pulse" />

                    {/* Simulated Light Ray from center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-indigo-500/10 blur-[2px] opacity-50 rotate-[45deg]" />
                </div>

                <div className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-zinc-950/90 border border-indigo-500/20 backdrop-blur-md flex items-center justify-center group-hover:border-indigo-400/50 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all duration-300 relative z-10 overflow-hidden">
                    {/* Neural Scan Line */}
                    <div className="absolute inset-x-0 h-[1.5px] bg-indigo-500/40 blur-[0.5px] top-[-100%] group-hover:top-[200%] transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(79,70,229,0.8)]" />

                    <span className="relative z-10 text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-indigo-400 group-hover:text-white transition-colors italic whitespace-nowrap">
                        {label}
                    </span>
                </div>

                {/* Tech Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-indigo-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-indigo-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
            </motion.div>
        </motion.div>
    )
}

// AmbientInsight optimized for performance (simplified animation)
const AmbientInsight = ({ text, delay }: { text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: [0, 0.3, 0.3, 0],
            y: [10, -10]
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            delay: delay,
            times: [0, 0.2, 0.8, 1],
            ease: "linear"
        }}
        className="absolute pointer-events-none transform-gpu"
        style={{
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 70 + 15}%`,
        }}
    >
        <p className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-700 italic whitespace-nowrap">
            {text}
        </p>
    </motion.div>
)

export const AIAnalyticsHero = () => {
    const [activeService, setActiveService] = useState<any>(null);

    // Services positions optimized for a tight viewport (Single Viewport)
    const services = [
        // Top Row
        {
            label: 'Video Gen',
            position: 'top-[15%] left-[5%] md:left-[15%]',
            data: {
                tag: 'Visual Synth',
                title: 'Video Generation',
                sub: 'Generative Stream',
                details: 'Rendering 8k fluid dynamics.'
            }
        },
        {
            label: 'Neural Ops',
            position: 'top-[15%] right-[5%] md:right-[15%]',
            data: {
                tag: 'Auto-Scaling',
                title: 'Neural Operations',
                sub: 'Self-Healing',
                details: 'Autonomous system maintenance.'
            }
        },
        // Middle Row
        {
            label: 'Vision AI',
            position: 'top-[45%] left-[2%] md:left-[8%]',
            data: {
                tag: 'Optical Grid',
                title: 'Computer Vision',
                sub: 'Object Detection',
                details: '99.9% accuracy in real-time.'
            }
        },
        {
            label: 'Real-time BI',
            position: 'top-[45%] right-[2%] md:right-[8%]',
            data: {
                tag: 'Data Stream',
                title: 'Business Intel',
                sub: 'Live Analytics',
                details: 'Processing 1M+ rows/sec.'
            }
        },
        // Bottom Row
        {
            label: 'NLP Core',
            position: 'bottom-[15%] left-[5%] md:left-[18%]',
            data: {
                tag: 'Lang Model',
                title: 'Natural Language',
                sub: 'Semantic Core',
                details: 'Contextual understanding active.'
            }
        },
        {
            label: 'Edge Core',
            position: 'bottom-[15%] right-[5%] md:right-[18%]',
            data: {
                tag: 'Edge Compute',
                title: 'Edge Processing',
                sub: 'Local Inference',
                details: 'Zero-latency execution.'
            }
        },
    ]

    const insights = [
        "Data Stream Active",
        "Neural Path Sync",
        "Visual Synth Load",
        "Pattern Match",
        "Predictive Run",
        "Autonomous Link"
    ]

    return (
        <section
            className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
            onClick={() => setActiveService(null)}
        >
            {/* Optimized Background Layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />

                {/* Simplified Ambient Insights */}
                {insights.map((text, i) => (
                    <AmbientInsight key={i} text={text} delay={i * 4} />
                ))}

                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            {/* Main Content Container */}
            <div className="w-full max-w-5xl px-0 md:px-6 relative z-10 h-full flex flex-col items-center justify-center">

                {/* Optimized Robot Hub Section to fit 100vh */}
                <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-square max-h-[85vh] flex items-center justify-center overflow-visible">

                    {/* Simplified Background Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                        <div className="absolute w-[120%] h-[120%] md:w-[70%] md:h-[70%] rounded-full border border-indigo-500/5" />
                        <div className="absolute w-[100%] h-[100%] md:w-[50%] md:h-[50%] rounded-full border border-indigo-500/10 border-dashed animate-[spin_60s_linear_infinite]" />
                    </div>

                    {/* Service Nodes (Compact for 100vh) */}
                    {services.map((service, idx) => (
                        <AIServiceNode
                            key={idx}
                            label={service.label}
                            position={service.position}
                            index={idx}
                            onHover={() => setActiveService(service)}
                            onLeave={() => setActiveService(null)}
                        />
                    ))}

                    {/* Scaled Robot Scene */}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                        {/* Eye Source Glow */}
                        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-20 h-10 bg-indigo-600/10 blur-[25px] rounded-full pointer-events-none z-20 mix-blend-screen animate-pulse" />

                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full transform scale-100 md:scale-90 lg:scale-100"
                        />
                        {/* Robot HUD - Now placed at 'Neural Mesh' location and enabled for mobile */}
                        <RobotGreeting overrideMessage={activeService?.data} />
                    </div>
                </div>

                {/* Status Indicator (Compact) */}
                <div className="absolute bottom-6 flex items-center gap-3 text-[8px] md:text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600/50" />
                    Neural Link: Active
                </div>
            </div>
        </section>
    )
}

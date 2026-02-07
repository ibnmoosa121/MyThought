import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { RobotGreeting } from './robot-greeting'

// AIServiceNode optimized for mobile and performance
const AIServiceNode = ({ label, position, index }: { label: string, position: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            className={`absolute ${position} z-20 group`}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
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
    // Services positions optimized for a tight viewport (Single Viewport)
    const services = [
        // Top Row
        { label: 'Video Gen', position: 'top-[15%] left-[5%] md:left-[15%]' },
        { label: 'Neural Mesh', position: 'top-[15%] right-[5%] md:right-[15%]' },
        // Middle Row
        { label: 'Vision AI', position: 'top-[45%] left-[2%] md:left-[8%]' },
        { label: 'Real-time BI', position: 'top-[45%] right-[2%] md:right-[8%]' },
        // Bottom Row
        { label: 'NLP Core', position: 'bottom-[15%] left-[5%] md:left-[18%]' },
        { label: 'Edge Core', position: 'bottom-[15%] right-[5%] md:right-[18%]' },
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
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
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
            <div className="w-full max-w-5xl px-6 relative z-10 h-full flex flex-col items-center justify-center">

                {/* Optimized Robot Hub Section to fit 100vh */}
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-h-[80vh] flex items-center justify-center">

                    {/* Simplified Background Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute w-[90%] h-[90%] md:w-[70%] md:h-[70%] rounded-full border border-indigo-500/5" />
                        <div className="absolute w-[70%] h-[70%] md:w-[50%] md:h-[50%] rounded-full border border-indigo-500/10 border-dashed animate-[spin_60s_linear_infinite]" />
                    </div>

                    {/* Service Nodes (Compact for 100vh) */}
                    {services.map((service, idx) => (
                        <AIServiceNode
                            key={idx}
                            {...service}
                            index={idx}
                        />
                    ))}

                    {/* Scaled Robot Scene */}
                    <div className="relative w-[140%] h-[140%] md:w-[100%] md:h-[100%] flex items-center justify-center z-10">
                        {/* Eye Source Glow */}
                        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-20 h-10 bg-indigo-600/10 blur-[25px] rounded-full pointer-events-none z-20 mix-blend-screen animate-pulse" />

                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full transform scale-75 md:scale-90 lg:scale-100"
                        />
                        {/* Robot HUD - Hidden on small mobile to improve performance/space */}
                        <div className="hidden sm:block">
                            <RobotGreeting />
                        </div>
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

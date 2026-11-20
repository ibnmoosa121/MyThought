import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { RobotGreeting } from './robot-greeting'

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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
            className={`absolute ${position} z-20 group`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={(e) => { e.stopPropagation(); onHover(); }}
        >
            <div className="px-3.5 py-2 md:px-4 md:py-2 rounded-lg bg-zinc-950/90 border border-white/15 backdrop-blur-md flex items-center justify-center group-hover:border-indigo-400/60 group-hover:bg-zinc-900 transition-colors duration-150 cursor-pointer">
                <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
                    {label}
                </span>
            </div>
        </motion.div>
    )
}

export const AIAnalyticsHero = () => {
    const [activeService, setActiveService] = useState<any>(null);

    const services = [
        // Top Row
        {
            label: 'Document AI',
            position: 'top-[15%] left-[5%] md:left-[15%]',
            data: {
                tag: 'Extraction',
                title: 'Document Intelligence',
                sub: 'OCR & Parsing',
                details: 'Structured extraction for Arabic & English documents.'
            }
        },
        {
            label: 'MLOps',
            position: 'top-[15%] right-[5%] md:right-[15%]',
            data: {
                tag: 'Infrastructure',
                title: 'MLOps Pipelines',
                sub: 'Model Lifecycle',
                details: 'Automated evaluation, deployment, and drift monitoring.'
            }
        },
        // Middle Row
        {
            label: 'Computer Vision',
            position: 'top-[45%] left-[2%] md:left-[8%]',
            data: {
                tag: 'Inspection',
                title: 'Computer Vision',
                sub: 'Visual Analytics',
                details: 'Quality inspection and site monitoring models.'
            }
        },
        {
            label: 'Enterprise BI',
            position: 'top-[45%] right-[2%] md:right-[8%]',
            data: {
                tag: 'Analytics',
                title: 'Business Intelligence',
                sub: 'Live Reporting',
                details: 'Unified executive dashboards and KPI telemetry.'
            }
        },
        // Bottom Row
        {
            label: 'RAG & LLMs',
            position: 'bottom-[15%] left-[5%] md:left-[18%]',
            data: {
                tag: 'Language',
                title: 'Enterprise RAG',
                sub: 'Knowledge Search',
                details: 'Grounded retrieval over internal enterprise data.'
            }
        },
        {
            label: 'Data Lakehouse',
            position: 'bottom-[15%] right-[5%] md:right-[18%]',
            data: {
                tag: 'Data Core',
                title: 'Data Engineering',
                sub: 'ETL & Warehousing',
                details: 'Clean, governed pipelines for analytics and ML.'
            }
        },
    ]

    return (
        <section
            className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
            onClick={() => setActiveService(null)}
        >
            {/* Subtle Architectural Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none design-grid opacity-[0.03]" />

            {/* Main Content Container */}
            <div className="w-full max-w-5xl px-0 md:px-6 relative z-10 h-full flex flex-col items-center justify-center">
                <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-square max-h-[85vh] flex items-center justify-center overflow-visible">
                    {/* Subtle Static Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                        <div className="absolute w-[120%] h-[120%] md:w-[70%] md:h-[70%] rounded-full border border-white/5" />
                        <div className="absolute w-[100%] h-[100%] md:w-[50%] md:h-[50%] rounded-full border border-white/10" />
                    </div>

                    {/* Service Nodes */}
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

                    {/* Interactive 3D Scene */}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full transform scale-100 md:scale-90 lg:scale-100"
                        />
                        <RobotGreeting overrideMessage={activeService?.data} />
                    </div>
                </div>

                {/* Quiet Hint */}
                <div className="absolute bottom-6 flex items-center gap-2.5 text-xs font-mono text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Select a capability node to inspect</span>
                </div>
            </div>
        </section>
    )
}

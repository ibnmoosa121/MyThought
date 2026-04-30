import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Truck, ShieldCheck, CheckCircle2, MapPin, Package } from 'lucide-react';

const STAGES = [
    {
        id: 'pickup',
        title: 'Warehouse Pickup',
        icon: <MapPin className="w-6 h-6" />,
        description: 'Your shipment is safely picked up and scanned at the origin warehouse, initiating the digital tracking journey.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'sorting',
        title: 'Global Hub Sorting',
        icon: <Truck className="w-6 h-6" />,
        description: 'Advanced automated sorting systems categorize your parcel for the fastest international route across our global network.',
        color: 'from-cyan-500 to-teal-500'
    },
    {
        id: 'customs',
        title: 'Customs Clearance',
        icon: <ShieldCheck className="w-6 h-6" />,
        description: 'Expert documentation handling and digital clearance processes ensure your goods pass through borders without delay.',
        color: 'from-teal-500 to-emerald-500'
    },
    {
        id: 'delivery',
        title: 'Final Destination',
        icon: <CheckCircle2 className="w-6 h-6" />,
        description: 'The final mile delivery is completed with real-time proof of delivery and doorstep notification.',
        color: 'from-emerald-500 to-green-500'
    }
];

export const InteractiveDeliveryPath = () => {
    const [activeStage, setActiveStage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const constraintsRef = useRef<HTMLDivElement>(null);
    const boxX = useMotionValue(0);
    
    // Determine which stage the box is currently over
    useEffect(() => {
        const unsubscribe = boxX.on('change', (v) => {
            if (!containerRef.current) return;
            const width = containerRef.current.offsetWidth;
            // Subtract approximate box width to get usable path range
            const usableWidth = width - 80; 
            const progress = v / usableWidth;
            const stageIndex = Math.min(Math.max(Math.round(progress * (STAGES.length - 1)), 0), STAGES.length - 1);
            
            if (stageIndex !== activeStage) {
                setActiveStage(stageIndex);
            }
        });
        return () => unsubscribe();
    }, [boxX, activeStage]);

    return (
        <div className="py-24 px-4 md:px-8 relative z-10 bg-slate-950/50 border-y border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Interactive Experience
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-400">
                        Track the Journey
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Drag the courier box along the path to witness how we handle your shipment at every critical milestone.
                    </p>
                </div>

                {/* Path Container */}
                <div className="relative mb-24 h-40 flex items-center" ref={containerRef}>
                    <div className="absolute inset-0 flex items-center pointer-events-none" ref={constraintsRef}>
                        {/* Background Path Line */}
                        <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                                animate={{ width: `${(activeStage / (STAGES.length - 1)) * 100}%` }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            />
                        </div>
                    </div>

                    {/* Stages Dots */}
                    <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                        {STAGES.map((stage, index) => (
                            <div key={stage.id} className="relative flex flex-col items-center">
                                <motion.div 
                                    className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border-2 backdrop-blur-xl transition-all duration-700 ${
                                        index <= activeStage 
                                            ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400' 
                                            : 'bg-white/5 border-white/10 text-white/20'
                                    }`}
                                    animate={{
                                        scale: index === activeStage ? 1.15 : 1,
                                        rotate: index === activeStage ? [0, -5, 5, 0] : 0,
                                        boxShadow: index === activeStage ? '0 0 30px rgba(34,211,238,0.3)' : 'none'
                                    }}
                                    transition={{
                                        rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                                    }}
                                >
                                    <div className="relative z-10">
                                        {stage.icon}
                                    </div>
                                    {index <= activeStage && (
                                        <motion.div 
                                            layoutId="activeGlow"
                                            className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-lg"
                                        />
                                    )}
                                </motion.div>
                                <motion.span 
                                    animate={{
                                        opacity: index <= activeStage ? 1 : 0.4,
                                        y: index === activeStage ? 5 : 0
                                    }}
                                    className={`absolute -bottom-10 whitespace-nowrap text-xs md:text-sm font-bold uppercase tracking-widest ${
                                        index <= activeStage ? 'text-white' : 'text-white/40'
                                    }`}
                                >
                                    {stage.title}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Draggable Courier Box */}
                    <motion.div
                        drag="x"
                        dragConstraints={containerRef}
                        dragElastic={0.1}
                        dragMomentum={false}
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                        style={{ x: boxX, touchAction: 'none' }}
                        className="absolute left-0 z-50 cursor-grab active:cursor-grabbing group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative">
                            <motion.div 
                                animate={{ 
                                    y: [0, -8, 0],
                                    rotate: [-2, 2, -2]
                                }}
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: 3, 
                                    ease: "easeInOut" 
                                }}
                            >
                                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-sm">
                                    <Package size={32} className="text-cyan-400" />
                                </div>
                            </motion.div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/40 blur-md rounded-full" />
                            
                            {/* Instruction Tag */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg pointer-events-none"
                            >
                                DRAG ME
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stage Information Card */}
                <div className="perspective-1000">
                    <motion.div
                        key={activeStage}
                        initial={{ opacity: 0, rotateX: -10, y: 30 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="max-w-3xl mx-auto p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl relative shadow-2xl overflow-hidden"
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${STAGES[activeStage].color}`} />
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`w-24 h-24 flex-shrink-0 rounded-3xl bg-gradient-to-br ${STAGES[activeStage].color} flex items-center justify-center text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]`}
                            >
                                {stageIcons[activeStage]}
                            </motion.div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-extrabold mb-4 text-white tracking-tight">
                                    {STAGES[activeStage].title}
                                </h3>
                                <p className="text-white/60 text-xl leading-relaxed font-medium">
                                    {STAGES[activeStage].description}
                                </p>
                                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-widest">
                                        Scan Verified
                                    </span>
                                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-widest">
                                        Active Tracking
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const stageIcons = STAGES.map(s => s.icon);


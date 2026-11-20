import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollNarrative } from '../components/logistics/ScrollVideoNarrative';
import { InteractiveDeliveryPath } from '../components/logistics/InteractiveDeliveryPath';
import RotatingEarth from '../components/ui/wireframe-dotted-globe';

const LogisticsPage = () => {
    const [parcelHandedOff, setParcelHandedOff] = useState(false);

    useEffect(() => {
        document.title = "Logistics & Fleet | Stebup";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white overflow-hidden font-sans">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
                <div className="absolute inset-0 pointer-events-none design-grid opacity-[0.03]" />

                {/* Header Content */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto z-10 text-center mb-10"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-5 tracking-tight text-white leading-[1.06]">
                        Logistics &amp;{" "}
                        <span className="text-cyan-400">Fleet</span>
                    </h1>
                    <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
                        International freight forwarding, customs clearance, and last-mile fleet distribution across Middle East and global trade corridors.
                    </p>
                </motion.div>

                {/* Centered Globe Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="relative w-full max-w-4xl mx-auto z-10 flex items-center justify-center mb-14"
                >
                    <RotatingEarth className="w-full max-w-[560px] mx-auto z-20 cursor-grab active:cursor-grabbing" width={560} height={560} />
                </motion.div>

                {/* Core Capabilities Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                >
                    <div className="bg-zinc-950 border border-white/10 p-6 md:p-8 rounded-xl transition-colors duration-200 hover:border-cyan-400/30">
                        <h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">International Freight</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Coordinated air, sea, and land freight forwarding structured for predictable transit times and controlled corridor costs.
                        </p>
                    </div>
                    <div className="bg-zinc-950 border border-white/10 p-6 md:p-8 rounded-xl transition-colors duration-200 hover:border-cyan-400/30">
                        <h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">Customs Brokerage</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Managed documentation, tariff classification, and regulatory clearance to keep cross-border cargo moving without port delays.
                        </p>
                    </div>
                    <div className="bg-zinc-950 border border-white/10 p-6 md:p-8 rounded-xl transition-colors duration-200 hover:border-cyan-400/30">
                        <h3 className="text-lg font-semibold text-white mb-2.5 tracking-tight">Fleet &amp; Visibility</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Live shipment telemetry, hub-level inventory tracking, and dedicated last-mile dispatch across regional distribution networks.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Narrative Component */}
            <ScrollNarrative onParcelFadeComplete={setParcelHandedOff} />

            {/* Interactive Delivery Path */}
            <InteractiveDeliveryPath isVisible={parcelHandedOff} />

            {/* CTA Section */}
            <div className="py-24 md:py-32 text-center px-6 relative z-10 bg-zinc-950 border-t border-white/10">
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
                    Ready to streamline your supply chain
                </h2>
                <p className="text-base md:text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                    Share your corridor, volume, and timeline to receive a tailored logistics plan within 24 hours.
                </p>
                <Link
                    to="/contact"
                    state={{ from: 'logistics' }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-medium text-sm transition-colors duration-150"
                >
                    Request a logistics plan
                </Link>
            </div>
        </div>
    );
};

export default LogisticsPage;

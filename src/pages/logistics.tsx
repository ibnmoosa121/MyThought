import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollNarrative } from '../components/logistics/ScrollVideoNarrative';
import { InteractiveDeliveryPath } from '../components/logistics/InteractiveDeliveryPath';
import RotatingEarth from '../components/ui/wireframe-dotted-globe';

const LogisticsPage = () => {
    useEffect(() => {
        document.title = "Logistics & Fleet | MyThought";
    }, []);

    return (
        <div className="bg-base-100 min-h-screen text-white overflow-hidden font-sans">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-base-100 to-base-100 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
                </div>

                {/* SEO Optimized Header Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto z-10 text-center mb-8 lg:mb-12"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
                        Logistics & Fleet
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto">
                        Empowering global trade with intelligent supply chain optimization, secure worldwide freight forwarding, and seamless international customs brokerage. We deliver end-to-end logistics solutions designed for modern enterprises.
                    </p>
                </motion.div>

                {/* Centered Globe Component */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative w-full max-w-4xl mx-auto z-10 flex items-center justify-center mb-12"
                >
                     <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                     <RotatingEarth className="w-full max-w-[600px] mx-auto z-20 cursor-grab active:cursor-grabbing" width={600} height={600} />
                </motion.div>

                {/* SEO Informative Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                >
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/10">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">Worldwide Freight Shipping</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Comprehensive international freight forwarding via air, ocean, and land networks. Optimizing transit times and reducing shipping costs for global businesses.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/10">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">Automated Customs Brokerage</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Streamline your international trade with our expert customs clearance services. Navigating complex global regulations to prevent border delays and ensure compliance.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/10">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">Supply Chain Visibility</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Real-time tracking and advanced data analytics. Gain complete control over your distribution network and inventory management across borders.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 flex flex-col items-center animate-bounce z-10"
                >
                    <span className="text-sm text-cyan-400 font-semibold tracking-widest uppercase mb-2">Scroll to explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                </motion.div>
            </div>

            {/* Scroll Narrative Component */}
            <ScrollNarrative />

            {/* Interactive Delivery Path */}
            <InteractiveDeliveryPath />

            {/* CTA Section */}
            <div className="py-32 text-center px-4 relative z-10 bg-slate-900 border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 to-transparent pointer-events-none"></div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to optimize your supply chain?</h2>
                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Get a customized logistics plan tailored to your enterprise requirements within 24 hours.</p>
                <Link to="/contact" state={{ from: 'logistics' }}>
                    <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]">
                        Start Your Shipment
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LogisticsPage;

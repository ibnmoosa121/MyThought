import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    useEffect(() => {
        document.title = "Portfolio | MyThought";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
            </div>

            {/* Hero Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10 py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8 max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-4">
                        <Construction size={12} className="text-amber-500" />
                        Under Construction
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black italic leading-[0.8] tracking-tighter uppercase">
                        Curating <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200">Vision</span>
                    </h1>

                    <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
                        We are collecting all our projects to display here. Our team is hand-picking the most impactful engineering, design, and strategic case studies to showcase our standard of excellence.
                    </p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pt-12"
                    >
                        <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Return to HQ
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Tech Accents */}
            <div className="absolute bottom-10 left-10 text-[8px] font-sans font-black uppercase tracking-[0.5em] text-white/10 hidden md:block">
                Portfolio Node // Pending Sync
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)] pointer-events-none" />
        </main>
    );
};

export default PortfolioPage;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Logo placeholder */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl font-bold tracking-[0.2em] text-white">
                                MYTHOUGHT
                            </h1>
                        </motion.div>

                        {/* Progress bar container */}
                        <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        </div>

                        <motion.span
                            className="mt-4 text-xs font-mono text-white/40 tracking-widest uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Initializing Experience {Math.round(progress)}%
                        </motion.span>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

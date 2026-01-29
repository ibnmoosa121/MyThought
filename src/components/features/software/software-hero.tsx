import { ThreeDMarquee } from "./3d-marquee";
import { motion } from "framer-motion";
import { WavyBackground } from "../../ui/wavy-background";
import { services } from "../../../data/services";
import { useNavigate } from "react-router-dom";

const images = [
    "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=70&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=70&w=800&auto=format&fit=crop",
];

export const SoftwareHero = () => {
    const service = services.software;
    const navigate = useNavigate();

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-20">
            {/* Wavy Background */}
            <WavyBackground color={service.theme.plasmaColor} className="opacity-50" />

            {/* Background 3D Marquee */}
            <div className="absolute inset-0 z-0 opacity-40">
                <ThreeDMarquee images={images} className="h-full w-full" />
            </div>

            {/* Radial Gradient Overlay for depth */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-tight tracking-tight uppercase">
                        Software & <br />
                        <span className={`bg-gradient-to-r ${service.theme.gradient} bg-clip-text text-transparent`}>
                            Technology
                        </span>
                    </h1>

                    <motion.p
                        className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        From idea to implementation, we develop cutting-edge software solutions that unlock new opportunities and maximize your business's full potential.
                    </motion.p>

                    <motion.div
                        className="mt-12 flex flex-col sm:flex-row items-center gap-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className={`px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1`}
                        >
                            {service.cta}
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-10 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-white font-bold rounded-xl border border-neutral-800 transition-all hover:-translate-y-1"
                        >
                            Get Started
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />
        </div>
    );
};



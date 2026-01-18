"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
    {
        brand: "Stripe",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
        title: "Next-Gen Payment Infrastructure",
        description: "Scaling financial operations with modular architecture and high-availability systems to support millions of transactions per second.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        themeColor: "#635bff"
    }
];

export const SoftwareCaseStudies = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Success Stories
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white uppercase italic tracking-tighter"
                    >
                        Success stories unveiled
                    </motion.h2>
                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
                        Discover how we've helped businesses unlock their full potential and achieve their strategic goals through technology.
                    </p>
                </div>

                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-md"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={study.image}
                                    alt={study.brand}
                                    className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                            </div>

                            <div className="relative z-10 h-full p-8 md:p-16 flex flex-col justify-center max-w-3xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <img
                                        src={study.logo}
                                        alt={study.brand}
                                        className="h-10 md:h-14 w-auto object-contain brightness-0 invert"
                                    />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter"
                                >
                                    {study.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-xl"
                                >
                                    {study.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
                                        style={{ backgroundColor: study.themeColor }}
                                    >
                                        Get in touch <ArrowRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            </div>

                            {/* Decorative element like in image */}
                            <div className="absolute bottom-0 right-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-primary" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

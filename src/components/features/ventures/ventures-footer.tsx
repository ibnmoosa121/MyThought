"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Globe } from "lucide-react";

export const VenturesFooter = () => {
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Glows */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-zinc-900/30 border border-white/5 p-12 md:p-24 rounded-[4rem] backdrop-blur-3xl">
                    <div className="max-w-2xl text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-[ - 0.05em] leading-[0.8] mb-8"
                        >
                            Ready to Build <br />
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Next Big</span> Thing?
                        </motion.h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:ml-0">
                            Contact us today for personalized venture services designed to help you succeed. Let's engineer your growth together.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-amber-500 text-black flex flex-col items-center justify-center group transition-all shadow-[0_20px_60px_rgba(245,158,11,0.2)]"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Kickstart</span>
                            <span className="text-3xl font-black italic uppercase tracking-tighter">Get Quote</span>
                            <ArrowRight className="mt-4 group-hover:translate-x-3 transition-transform duration-500" size={32} />
                        </motion.button>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-amber-500 mb-6">
                            <Globe size={20} />
                            <span className="text-xs font-black uppercase tracking-widest">Global Reach</span>
                        </div>
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-xl">Operational Hubs</h4>
                        <div className="space-y-2 text-zinc-500 font-medium">
                            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                                <MapPin size={14} className="text-amber-500" /> Jeddah, Saudi Arabia
                            </p>
                            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                                <MapPin size={14} className="text-zinc-700" /> DIFC, Dubai, UAE
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-xl mt-12 mb-6">Direct Channels</h4>
                        <div className="space-y-4">
                            <a href="mailto:info@mythought.com" className="flex items-center gap-3 group">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-500 group-hover:text-amber-500 transition-colors">
                                    <Mail size={16} />
                                </div>
                                <span className="text-zinc-500 group-hover:text-white transition-colors font-bold uppercase italic text-sm">info@mythought.com</span>
                            </a>
                            <a href="tel:+96612345678" className="flex items-center gap-3 group">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-500 group-hover:text-orange-500 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span className="text-zinc-500 group-hover:text-white transition-colors font-bold uppercase italic text-sm">+966 50 123 4567</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
                        <div className="text-[14rem] font-black text-white/5 leading-none select-none italic uppercase tracking-tighter mb-8">
                            BUILD
                        </div>
                        <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[1em] text-center lg:text-right">
                            © 2026 MyThought Ventures. <br />
                            Nurturing Innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

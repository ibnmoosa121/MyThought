"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DesignContact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center py-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 justify-center text-cyan-400">
                            <MessageSquare size={24} />
                            <span className="uppercase tracking-[0.3em] font-bold text-sm">Get in touch</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                Start?
                            </span>
                        </h3>
                    </div>

                    <p className="text-lg text-zinc-400">
                        Your vision is just one conversation away from becoming a reality. Let's build something extraordinary.
                    </p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-black uppercase italic rounded-full hover:bg-cyan-400 transition-all border-none"
                        >
                            Start Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <button className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white font-black uppercase italic rounded-full hover:bg-zinc-800 transition-all border border-white/10">
                            Email Us <Mail size={20} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

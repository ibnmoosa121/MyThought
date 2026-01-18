"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DesignContact = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center p-12 bg-black h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-4xl"
            >
                <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none mb-10">
                    Let's <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Create
                    </span>
                </h2>
                <p className="text-2xl text-zinc-400 mb-12">
                    Your vision is just one conversation away from becoming a reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        onClick={() => navigate('/contact')}
                        className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase italic rounded-full hover:bg-cyan-400 transition-all text-xl"
                    >
                        Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>

                    <button className="flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white font-black uppercase italic rounded-full hover:bg-zinc-800 transition-all text-xl border border-white/10">
                        Email Us <Mail />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

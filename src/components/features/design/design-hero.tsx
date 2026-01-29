"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Layout, Megaphone, PenTool, Box, Zap, Search, Users, Smartphone, Target } from "lucide-react";

export const DesignHero = () => {
    return (
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Initial Bubble State Text */}
            <motion.div
                initial={{ opacity: 1 }}
                className="mb-8"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium backdrop-blur-sm shadow-2xl"
                >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Have a Design Idea?
                </motion.div>
            </motion.div>

            <motion.h1
                className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6"
            >
                Design & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600">
                    Creative
                </span>
            </motion.h1>

            <motion.p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Crafting distinctive brand identities, user-friendly interfaces, captivating motion-graphics, and effective digital marketing strategies.
            </motion.p>

            <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    All Our Services
                </button>
            </div>
        </div>
    );
};

export const DesignServicesGrid = () => {
    const services = [
        {
            title: "UX/UI Design",
            desc: "Blend user-centric design principles with creative excellence for intuitive and visually appealing interfaces.",
            icon: Users
        },
        {
            title: "Web Design",
            desc: "Crafting visually stunning and highly functional websites that leave a lasting impression and convert visitors.",
            icon: Layout
        },
        {
            title: "Graphic Design",
            desc: "We master the art of visual storytelling through captivating graphic design.",
            icon: Palette
        },
        {
            title: "Creative Copywriting",
            desc: "Creating compelling narratives that touch hearts and inspire action.",
            icon: PenTool
        },
        {
            title: "Brand Identity",
            desc: "From logos to color palettes and typography guidelines, we’ll turn your brand into a masterpiece.",
            icon: Target
        },
        {
            title: "Motion Graphics",
            desc: "Bring your brand to life with captivating motion graphics and animations.",
            icon: Box
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 w-full max-w-7xl mx-auto px-6">
            {services.map((service, idx) => (
                <div key={idx} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all backdrop-blur-md text-left">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 italic uppercase tracking-tight">{service.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
            ))}
        </div>
    );
};

export const DesignExpertise = () => {
    const expertise = [
        { title: "Design Systems", icon: Layout },
        { title: "User Research", icon: Search },
        { title: "User-Centered Design", icon: Users },
        { title: "Mobile-First", icon: Smartphone },
        { title: "DesignOps", icon: Zap },
        { title: "Brand Voice", icon: Megaphone }
    ];

    return (
        <div className="mt-32 w-full max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-12 text-center">
                Our <span className="text-cyan-400">Expertise</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {expertise.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <item.icon className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-bold uppercase tracking-tight text-sm md:text-base">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

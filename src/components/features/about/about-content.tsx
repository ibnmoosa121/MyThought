"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, Globe, Target, MapPin, Layers, Building2 } from "lucide-react";
import { ScrollRevealText } from "../../ui/scroll-reveal-text";
import TiltedCard from "../../ui/tilted-card";
import DecryptedText from "../../ui/decrypted-text";
import InteractiveOrbitalHub from "../../ui/interactive-orbital-hub";

const stats = [
    { label: "Regional HQ", value: "Jeddah", icon: MapPin, sub: "Heart of the Gulf" },
    { label: "Expert Divisions", value: "7+", icon: Layers, sub: "Comprehensive Solutions" },
    { label: "Vision Alignment", value: "2030", icon: Target, sub: "Thriving Innovations" },
];

const values = [
    {
        title: "Digital Transformation",
        desc: "Empowering businesses across the Gulf with cutting-edge software, AI, and fintech solutions.",
        icon: Zap,
        color: "from-blue-500/20 to-blue-900/40"
    },
    {
        title: "Strategic Consultancy",
        desc: "Guiding organizations through complex challenges to align with the Kingdom's ambitious growth.",
        icon: Briefcase,
        color: "from-emerald-500/20 to-emerald-900/40"
    },
    {
        title: "Ventures & Innovation",
        desc: "Pioneering the future by investing in AI, analytics, and transformative design experiences.",
        icon: Globe,
        color: "from-purple-500/20 to-purple-900/40"
    }
];

const sections = [
    { 
        name: "Software & AI", 
        role: "Digital Engineering", 
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=800&auto=format&fit=crop", // Code Editor
        caption: "Building Robust Systems"
    },
    { 
        name: "Fintech & Ventures", 
        role: "Financial Innovation", 
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=75&w=800&auto=format&fit=crop", // Fintech Chart
        caption: "Empowering Economies"
    },
    { 
        name: "Consultancy & Design", 
        role: "Strategic Execution", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=75&w=800&auto=format&fit=crop", // Strategy workspace
        caption: "Crafting Experiences"
    }
];

export const AboutContent = () => {
    return (
        <div className="bg-black relative py-24 md:py-44 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Our Story */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-44">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <ScrollRevealText 
                            text="Our Trajectory" 
                            className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none"
                        />
                        <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            <p>
                                Based in the thriving hub of <span className="text-white">Jeddah, Saudi Arabia</span>, MyThought emerged from a singular vision: to dismantle the status quo of digital delivery across the Gulf region.
                            </p>
                            <p>
                                Today, we operate as a multi-disciplinary powerhouse covering <span className="text-white">software development, AI analytics, fintech, design,</span> and <span className="text-white">strategic consultancy</span>. We thrive on bridging the gap between ambitious regional goals—like <span className="text-white">Vision 2030</span>—and market-dominating reality.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className={`p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group ${i === 0 ? "md:col-span-2" : ""} hover:border-white/20 hover:bg-zinc-900/70 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.03)]`}
                            >
                                <div className="absolute -top-10 -right-10 p-10 opacity-5 group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700">
                                    <stat.icon size={180} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                                    <span className="text-5xl md:text-7xl font-black text-white italic mb-2 tracking-tighter">{stat.value}</span>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
                                    <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">{stat.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="space-y-24 mb-44">
                    <div className="text-center space-y-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Our Thrust</span>
                        <ScrollRevealText
                            text="What We Thrive To Do"
                            className="text-4xl md:text-6xl lg:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.9]"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-[50px] opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`} />
                                <div className="relative px-8 py-12 md:p-12 rounded-[3.5rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl h-full flex flex-col gap-8 hover:border-white/20 transition-colors duration-500">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500">
                                        <value.icon size={36} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl lg:text-3xl font-black text-white italic uppercase tracking-tight">
                                            <DecryptedText
                                                text={value.title}
                                                animateOn="hover"
                                                speed={40}
                                                maxIterations={8}
                                                className="text-2xl lg:text-3xl font-black text-white italic uppercase tracking-tight"
                                                encryptedClassName="text-zinc-500 font-mono"
                                            />
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed text-base font-medium">
                                            {value.desc}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-8 flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-widest">
                                        <span>Gulf Wide</span>
                                        <div className="h-px flex-1 bg-white/10 group-hover:bg-white/30 transition-colors" />
                                        <span className="group-hover:text-white transition-colors duration-300">Verified</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sections Overview with Tilted Cards */}
                <div className="space-y-24 mb-44">
                    <div className="text-center space-y-4">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Our Ecosystem</span>
                        <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                            Comprehensive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Solutions</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 lg:gap-8 px-4 md:px-0">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <div className="w-full aspect-[3/4] max-w-[350px]">
                                    <TiltedCard
                                        imageSrc={section.image}
                                        altText={section.name}
                                        captionText={section.caption}
                                        containerHeight="100%"
                                        containerWidth="100%"
                                        imageHeight="100%"
                                        imageWidth="100%"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.05}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        aspectRatioClassName="aspect-[3/4]"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-black text-white italic uppercase tracking-tight">
                                        <DecryptedText
                                            text={section.name}
                                            animateOn="hover"
                                            speed={40}
                                            maxIterations={8}
                                            className="text-xl font-black text-white italic uppercase tracking-tight"
                                            encryptedClassName="text-zinc-500 font-mono"
                                        />
                                    </h3>
                                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">{section.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* HQ Address Details */}
                <div className="relative rounded-[3.5rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl p-10 md:p-20 overflow-hidden mb-24">
                    <div className="absolute -bottom-20 -right-20 p-10 opacity-5 pointer-events-none">
                        <Building2 size={300} />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-8 text-left">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 mb-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                <MapPin size={28} />
                            </div>
                            <div className="space-y-4">
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Our Hub</span>
                                <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
                                    Jeddah <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Headquarters</span>
                                </h2>
                            </div>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                                Positioned in the commercial capital of Saudi Arabia, our headquarters connects global talent with local insights. We operate at the vibrant intersection of culture and technology to deliver transformative digital solutions across the Gulf.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                                    Saudi Arabia
                                </span>
                                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                                    Jeddah Hub
                                </span>
                                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                                    Gulf Coverage
                                </span>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-center items-center">
                            <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center p-6 group transition-all duration-500">
                                <InteractiveOrbitalHub width={340} height={340} className="w-full h-full scale-[1.3] opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-grab active:cursor-grabbing" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

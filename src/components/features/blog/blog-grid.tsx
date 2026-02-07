"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of AI in Business',
        excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
        date: 'June 15, 2023',
        author: 'Jane Smith',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Sustainable Design Practices',
        excerpt: 'How implementing eco-friendly design principles can benefit both your brand and the environment.',
        date: 'May 22, 2023',
        author: 'Mark Johnson',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2000&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Effective Business Strategies for 2023',
        excerpt: 'Key insights and approaches to help your business thrive in the current economic landscape.',
        date: 'April 10, 2023',
        author: 'Sarah Williams',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
    }
];

export const BlogGrid = () => {
    return (
        <section className="bg-black py-24 md:py-32">
            <div className="container mx-auto px-6">

                {/* Featured Post Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative mb-24 rounded-[3.5rem] overflow-hidden bg-zinc-900/50 border border-white/10"
                >
                    <div className="grid lg:grid-cols-2">
                        <div className="h-[400px] lg:h-[600px] relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
                                alt="Featured"
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden lg:block" />
                        </div>
                        <div className="p-12 md:p-20 flex flex-col justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest">Featured</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Market Transformation</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
                                Digital Transformation <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">In 2024</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                A comprehensive blueprint for navigating the volatile digital landscape and implementing high-impact evolution strategies.
                            </p>
                            <div className="flex items-center gap-10">
                                <div className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest">
                                    <Calendar size={14} className="text-white/50" />
                                    <span>July 3, 2024</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-white/30 uppercase tracking-widest">
                                    <User size={14} className="text-white/50" />
                                    <span>Alex Johnson</span>
                                </div>
                            </div>
                            <div>
                                <button className="inline-flex items-center gap-3 text-white font-black uppercase italic tracking-[0.2em] group/btn">
                                    Read Analysis
                                    <ArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sub-grid of posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col gap-6"
                        >
                            <div className="h-[300px] rounded-[2.5rem] overflow-hidden border border-white/10">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="px-4 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Tag size={12} className="text-white/40" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{post.category}</span>
                                </div>
                                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter hover:text-zinc-400 transition-colors cursor-pointer">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 flex items-center justify-between">
                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                                        {post.date}
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter - Minimalist but Impactful */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-44 p-16 md:p-24 rounded-[4rem] bg-zinc-900 border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter">Join the Collective</h2>
                            <p className="text-zinc-500 text-lg md:text-xl">
                                Get our curated briefings delivered to your encryption layer.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 items-center max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="ACCESS@ENCRYPTION.COM"
                                className="w-full bg-black/50 border border-white/10 px-8 py-5 rounded-full text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-all text-xs font-black uppercase tracking-widest"
                            />
                            <button className="w-full md:w-auto px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest rounded-full hover:scale-105 transition-transform">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

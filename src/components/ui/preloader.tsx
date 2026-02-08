"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { services } from "../../data/services";
import { criticalImages, homePageImages, serviceImages } from "../../lib/asset-loader";

export const Preloader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [pageName, setPageName] = useState("");
    const [themeColor, setThemeColor] = useState("#ffffff");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Determine page name and theme color
        const path = location.pathname.split("/").filter(Boolean)[0] || "Home";
        const formattedName = path === "Home" ? "MyThought" : path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

        // Comprehensive color mapping
        const colorMap: Record<string, string> = {
            'Home': '#ffffff',
            'software': services.software.theme.plasmaColor,
            'consultancy': services.consultancy.theme.plasmaColor,
            'talent': services.talent.theme.plasmaColor,
            'design': services.design.theme.plasmaColor,
            'ventures': services.ventures.theme.plasmaColor,
            'fintech': services.fintech.theme.plasmaColor,
            'ai-analytics': services['ai-analytics'].theme.plasmaColor,
            'about-us': '#ffffff',
            'blog': '#ffffff',
            'contact': '#ffffff'
        };

        const color = colorMap[path] || '#ffffff';
        setPageName(formattedName);
        setThemeColor(color);
        setLoading(true);
        setProgress(0);

        // Actual loading logic
        const startTime = Date.now();
        const minLoadingTime = 1500; // Minimum duration for aesthetics

        const handleLoad = async () => {
            try {
                // Preload critical assets for the current page
                const assetsToLoad = path === "Home"
                    ? [...criticalImages, ...homePageImages, ...serviceImages]
                    : criticalImages;

                // Track progress roughly
                let loadedCount = 0;
                const totalAssets = assetsToLoad.length;

                await Promise.all(assetsToLoad.map(async (src) => {
                    try {
                        const img = new Image();
                        img.src = src;
                        await new Promise((resolve) => {
                            img.onload = resolve;
                            img.onerror = resolve; // Continue even if one fails
                        });
                        loadedCount++;
                        setProgress(Math.round((loadedCount / totalAssets) * 100));
                    } catch (e) {
                        loadedCount++;
                    }
                }));

                const endTime = Date.now();
                const elapsed = endTime - startTime;
                const remaining = Math.max(0, minLoadingTime - elapsed);

                setTimeout(() => {
                    setLoading(false);
                }, remaining);
            } catch (error) {
                console.error("Preloading failed", error);
                setLoading(false);
            }
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, [location.pathname, mounted]);

    return (
        <AnimatePresence mode="wait">
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    <div className="flex flex-col items-center space-y-12 relative z-10">
                        {/* Page Name with Staggered Letters Effect if we wanted, but keeping it simple as requested */}
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="text-white text-3xl md:text-5xl font-black tracking-[0.4em] uppercase"
                            >
                                {pageName}
                            </motion.h2>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full origin-left"
                                style={{
                                    backgroundColor: themeColor,
                                    width: "100%"
                                }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: progress / 100 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>

                        {/* Progress Percentage */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/40 text-xs font-mono tracking-widest uppercase"
                        >
                            Loading {progress}%
                        </motion.div>

                        {/* Animated Loading Dots */}
                        <div className="flex space-x-3 mt-4">
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: themeColor }}
                                    animate={{
                                        scale: [1, 1.8, 1],
                                        opacity: [0.2, 1, 0.2],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Background Dynamic Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.15 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[120px]"
                            style={{ backgroundColor: themeColor }}
                        />

                        {/* Scanning Line Effect */}
                        <motion.div
                            animate={{
                                top: ["-10%", "110%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute left-0 right-0 h-[10vh] bg-gradient-to-b from-transparent via-white/5 to-transparent z-0"
                        />
                    </div>

                    {/* Corner Labels (Modern aesthetic) */}
                    <div className="absolute bottom-10 left-10 text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium hidden md:block">
                        System Initialization
                    </div>
                    <div className="absolute bottom-10 right-10 text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium hidden md:block">
                        v2.0.8 // 2026
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


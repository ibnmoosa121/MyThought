"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { criticalImages, homePageImages, serviceImages } from "../../lib/asset-loader";

export const Preloader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
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

        const colorMap: Record<string, string> = {
            'Home': '#ffffff',
            'software': '#3B82F6',
            'consultancy': '#10B981',
            'talent': '#A855F7',
            'design': '#EC4899',
            'ventures': '#F59E0B',
            'fintech': '#14B8A6',
            'ai-analytics': '#6366F1'
        };

        const color = colorMap[path] || '#ffffff';
        setPageName(formattedName);
        setThemeColor(color);
        setLoading(true);

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
                await Promise.all(assetsToLoad.map(async (src) => {
                    try {
                        const img = new Image();
                        img.src = src;
                        await new Promise((resolve) => {
                            img.onload = resolve;
                            img.onerror = resolve; // Continue even if one fails
                        });
                    } catch (e) {
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
                    <div className="flex flex-col items-center space-y-8 relative z-10">
                        {/* Page Name - Simple Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-xl md:text-2xl font-black tracking-[0.4em] uppercase"
                        >
                            {pageName}
                        </motion.div>

                        {/* Centered Themed Pulse Dots */}
                        <div className="flex space-x-4">
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{
                                        backgroundColor: themeColor,
                                        boxShadow: `0 0 15px ${themeColor}33` // Subtle color-matched glow
                                    }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 1.2,
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[100px]"
                            style={{ backgroundColor: themeColor }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


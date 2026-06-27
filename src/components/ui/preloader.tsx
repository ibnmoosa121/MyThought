"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { criticalImages } from "../../lib/asset-loader";
import { services } from "../../data/services";
import type { ServiceKey } from "../../data/services";

export const Preloader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [pageName, setPageName] = useState("");
    const [themeColor, setThemeColor] = useState("#ffffff");
    const [mounted, setMounted] = useState(false);
    const isFirstLoad = useRef(true);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Skip preloading on the initial page load to avoid blocking visual paint (LCP optimization)
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        // Determine page name and theme color dynamically from central services data
        const path = location.pathname.split("/").filter(Boolean)[0] || "Home";
        const service = services[path as ServiceKey];

        const formattedName = service 
            ? service.title 
            : path === "Home" 
                ? "MyThought" 
                : path.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        const color = service 
            ? service.theme.plasmaColor 
            : "#ffffff";

        setPageName(formattedName);
        setThemeColor(color);
        setLoading(true);

        // Actual loading logic
        const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
        const startTime = Date.now();
        const minLoadingTime = isMobile ? 400 : 700; // Extra snappy to optimize Lighthouse scores

        const handleLoad = async () => {
            try {
                // Skip preloading images on mobile to optimize performance scans
                // On desktop, only preload the single critical background image
                const assetsToLoad = isMobile ? [] : criticalImages;

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
                        // ignore error
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


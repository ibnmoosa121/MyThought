"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { services } from "../../data/services";

export const Preloader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
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
            'about-us': '#ffffff', // Default for now
            'blog': '#ffffff',     // Default for now
            'contact': '#ffffff'   // Default for now
        };

        const color = colorMap[path] || '#ffffff';

        setPageName(formattedName);
        setThemeColor(color);
        setLoading(true);

        // Auto-hide loader after a set duration
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
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
                        transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <div className="flex flex-col items-center space-y-6">
                        {/* Page Name with Fade In */}
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-2xl font-bold tracking-[0.3em] uppercase"
                        >
                            {pageName}
                        </motion.h2>

                        {/* Animated Loading Dots */}
                        <div className="flex space-x-2">
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: themeColor }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Background Soft Glow */}
                    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-10"
                            style={{ backgroundColor: themeColor }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RobotGreetingProps {
    overrideMessage?: {
        title: string;
        sub: string;
        details: string;
        tag: string;
    } | null;
}

export const RobotGreeting = ({ overrideMessage }: RobotGreetingProps) => {
    const [phase, setPhase] = useState(0);
    const [internalVisible, setInternalVisible] = useState(false);
    const [visitorData, setVisitorData] = useState({
        name: "entity",
        os: "Unknown System",
        resolution: "0x0",
        timezone: "UTC",
        lang: "EN",
        browser: "Web Environment",
        ip: "000.000.0.0",
        referrer: "Direct Link",
        device: "Calculating..."
    });

    useEffect(() => {
        // 1. Fetch IP Address (Invasive Vibe)
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => setVisitorData(prev => ({ ...prev, ip: data.ip })))
            .catch(() => { });

        // 2. Gather Visitor Technical Data
        const userAgent = window.navigator.userAgent.toLowerCase();
        let os = "Desktop";
        if (userAgent.includes("win")) os = "Windows Platform";
        if (userAgent.includes("mac")) os = "macOS Workstation";
        if (userAgent.includes("linux")) os = "Linux Machine";
        if (userAgent.includes("android")) os = "Android Terminal";
        if (userAgent.includes("iphone") || userAgent.includes("ipad")) os = "iOS Terminal";

        let browser = "Chromium Engine";
        if (userAgent.includes("firefox")) browser = "Firefox Core";
        if (userAgent.includes("safari") && !userAgent.includes("chrome")) browser = "Safari Engine";
        if (userAgent.includes("edg")) browser = "Edge Interface";

        let device = "Multi-Core System";
        if (/mobile/i.test(userAgent)) device = "Mobile Handheld";
        if (/tablet/i.test(userAgent)) device = "Tablet Device";

        setVisitorData(prev => ({
            ...prev,
            name: localStorage.getItem("user_name") || "Visitor",
            os: os,
            resolution: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1] || "Global",
            lang: (window.navigator.language || "en").toUpperCase(),
            browser: browser,
            referrer: document.referrer === "" ? "Direct Access" : new URL(document.referrer).hostname,
            device: device
        }));

        // 3. Multi-Phase Greeting Logic with Infinite Loop
        const cycleLength = 6000; // Increased cycle for reading
        const timers: NodeJS.Timeout[] = [];

        const initialTimer = setTimeout(() => setInternalVisible(true), 2000);
        timers.push(initialTimer);

        const phaseInterval = setInterval(() => {
            // Only cycle internal visibility if not overridden
            if (!overrideMessage) {
                setInternalVisible(false);
                setTimeout(() => {
                    setPhase(p => (p + 1) % 5); // Increased to 5 phases
                    setInternalVisible(true);
                }, 800);
            } else {
                // Keep phase updating in background so it's fresh when hover ends
                setPhase(p => (p + 1) % 5);
            }

        }, cycleLength);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(phaseInterval);
        };
    }, []); // Removed overrideMessage dependency to prevent interval reset

    const messages = [
        {
            tag: "Network Trace",
            title: `Your IP Address is:`,
            sub: visitorData.ip,
            details: `Origin: ${visitorData.referrer}`
        },
        {
            tag: "Hardware Scan",
            title: `Your Device is:`,
            sub: visitorData.device,
            details: `Resolution: ${visitorData.resolution}`
        },
        {
            tag: "System Audit",
            title: `Your OS is:`,
            sub: visitorData.os,
            details: `Engine: ${visitorData.browser}`
        },
        {
            tag: "Geo-Mapping",
            title: `Your Location is:`,
            sub: `${visitorData.timezone} Hub`,
            details: `Dialect: ${visitorData.lang}`
        },
        {
            tag: "Identity Scan",
            title: `Your Name is:`,
            sub: visitorData.name,
            details: "Pattern recognition finalized."
        }
    ];

    const activeMsg = overrideMessage || messages[phase];
    // If overridden, always visible. Else use internal timer.
    const isVisible = !!overrideMessage || internalVisible;

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={phase}
                    initial={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="absolute top-[58%] left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                >
                    <div className="relative group">
                        {/* Surprise: Proximity Alert Glow */}
                        <div className="absolute -inset-4 bg-red-500/5 blur-[30px] rounded-full animate-pulse pointer-events-none" />

                        {/* High-Fidelity HUD Container */}
                        <div className="relative px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl bg-black/80 backdrop-blur-3xl border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col gap-0.5 overflow-hidden min-w-[150px] md:min-w-[180px]">
                            {/* Animated Glitch Background */}
                            <motion.div
                                animate={{
                                    opacity: [0.03, 0.08, 0.03],
                                    backgroundPosition: ["0% 0%", "100% 100%"]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 opacity-5"
                            />

                            {/* Decorative Corner Brackets */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500/40" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500/40" />

                            <div className="relative z-10 flex items-center justify-between mb-0.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full bg-red-600 animate-ping" />
                                    <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-red-500">{activeMsg.tag}</span>
                                </div>
                                <div className="flex flex-col items-end scale-75 origin-right">
                                    <span className="text-[6px] font-mono text-zinc-500 italic leading-none">THREAT_LVL: LOW</span>
                                </div>
                            </div>

                            <h4 className="relative z-10 text-[10px] md:text-sm font-black text-white italic uppercase tracking-tight leading-tight">
                                {activeMsg.title}
                            </h4>

                            <div className="relative z-10 flex items-baseline gap-1.5">
                                <p className="text-[9px] md:text-[11px] text-red-500 font-bold uppercase tracking-tighter">
                                    {activeMsg.sub}
                                </p>
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="w-0.5 h-2.5 bg-red-500/50"
                                />
                            </div>

                            <div className="mt-1 pt-1 border-t border-white/5 relative z-10 flex justify-between items-end">
                                <p className="text-[7px] md:text-[8px] text-zinc-500 font-mono italic max-w-[120px]">
                                    {activeMsg.details}
                                </p>
                            </div>

                            {/* Scanning Progress Bar */}
                            <div className="absolute bottom-0 left-0 h-[1px] bg-red-500/10 w-full overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                                    className="h-full w-full bg-red-500 shadow-[0_0_10px_#ef4444]"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

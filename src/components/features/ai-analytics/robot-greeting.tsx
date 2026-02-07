"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RobotGreeting = () => {
    const [phase, setPhase] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
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

        const initialTimer = setTimeout(() => setIsVisible(true), 2000);
        timers.push(initialTimer);

        const phaseInterval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setPhase(p => (p + 1) % 5); // Increased to 5 phases
                setIsVisible(true);
            }, 800);

        }, cycleLength);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(phaseInterval);
        };
    }, []);

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

    const activeMsg = messages[phase];

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={phase}
                    initial={{ opacity: 0, x: 20, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -10, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="absolute top-[30%] right-[15%] z-50 pointer-events-none"
                >
                    <div className="relative group">
                        {/* High-Fidelity HUD Container */}
                        <div className="relative px-5 py-4 rounded-2xl bg-black/80 backdrop-blur-2xl border border-red-500/40 shadow-[0_0_40px_rgba(239,68,68,0.2)] flex flex-col gap-1 overflow-hidden min-w-[240px]">
                            {/* Animated Background Pulse */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent z-0" />

                            {/* Decorative Corner Brackets */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500/50" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500/50" />

                            <div className="relative z-10 flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-500">{activeMsg.tag}</span>
                                </div>
                                <span className="text-[7px] font-mono text-zinc-500 italic">TRACE_ID: 0x{phase + 1}F</span>
                            </div>

                            <h4 className="relative z-10 text-base md:text-lg font-black text-white italic uppercase tracking-tight">
                                {activeMsg.title}
                            </h4>

                            <p className="relative z-10 text-[11px] text-red-400 font-bold uppercase tracking-tighter">
                                {activeMsg.sub}
                            </p>

                            <div className="mt-2 pt-2 border-t border-white/5 relative z-10">
                                <p className="text-[9px] text-zinc-500 font-mono italic">
                                    {activeMsg.details}
                                </p>
                            </div>

                            {/* Scanning Progress Bar */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-red-500/30 w-full overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 6, ease: "linear" }}
                                    className="h-full w-full bg-red-500 shadow-[0_0_10px_#ef4444]"
                                />
                            </div>
                        </div>

                        {/* Connection Line to Robot */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-red-500/60" />
                        <div className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-red-500/30 bg-red-500/10 blur-[2px]" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

// ─── Sky Background (Static Night) ───────────────────────────────
const STARS = Array.from({ length: 35 }, (_, i) => ({
    x: Math.abs(Math.sin(i * 1234.5) * 96) + 2,
    y: Math.abs(Math.cos(i * 5678.9) * 42) + 2,
    s: 0.6 + Math.abs(Math.sin(i * 999)) * 1.4,
    o: 0.25 + Math.abs(Math.sin(i * 777)) * 0.55,
    d: (i * 0.3) % 5,
}));

export const SkyBackground = () => (
    <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(180deg, #020617 0%, #0f172a 40%, #1e293b 100%)",
    }}>
        {/* Moon Glow helper */}
        <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
            style={{
                background: "rgba(100, 116, 139, 0.15)",
                top: "-250px", right: "20%",
            }}
        />
        {STARS.map((s, i) => (
            <div key={i} className="absolute rounded-full" style={{
                left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s,
                background: "#e2e8f0", opacity: s.o,
                animation: `twinkle ${2 + s.d}s ease-in-out ${s.d}s infinite`,
            }} />
        ))}
    </div>
);

// ─── Far Skyline ─────────────────────────────────────────────────
export const FarSkyline = () => (
    <div className="absolute top-0 left-0 right-0 bottom-[40%] z-[1] overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1920 300" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 w-full h-full opacity-[0.12]" fill="none">
            <path d="M0 300 L0 220 Q60 170 130 200 Q180 140 260 190 Q320 110 420 170 Q480 100 560 160 Q630 80 720 140 Q800 60 900 120 Q980 50 1060 110 Q1140 70 1220 130 Q1300 90 1380 150 Q1440 110 1520 160 Q1580 120 1660 170 Q1740 140 1820 190 Q1870 160 1920 200 L1920 300Z" fill="url(#fg1)" />
            {[[280, 160, 18, 140], [580, 140, 20, 160], [900, 120, 22, 180], [1200, 130, 20, 170], [1500, 150, 18, 150], [1700, 165, 16, 135]].map(([x, y, w, h], i) =>
                <rect key={i} x={x} y={y} width={w} height={h} rx={2} fill="#1e293b" opacity={0.35} />
            )}
            <defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0f172a" stopOpacity="0.6" /><stop offset="100%" stopColor="#0c1220" /></linearGradient></defs>
        </svg>
    </div>
);

// ─── Window helper ───────────────────────────────────────────────
const hash = (i: number) => Math.abs(Math.sin(i * 12345.6789));

// ─── Mid Skyline ─────────────────────────────────────────────────
export const MidSkyline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

    const buildings = useMemo(() => [
        { x: 40, y: 180, w: 50, h: 270, wins: 9, wx: 48, wy: 195, cols: 3, sp: 14, vsp: 50 },
        { x: 100, y: 140, w: 60, h: 310, wins: 12, wx: 108, wy: 155, cols: 4, sp: 12, vsp: 45, antenna: [128, 110, 130, 108] },
        { x: 340, y: 100, w: 75, h: 350, wins: 16, wx: 348, wy: 115, cols: 5, sp: 13, vsp: 48, antenna: [375, 65, 377, 63] },
        { x: 425, y: 160, w: 50, h: 290, wins: 8, wx: 433, wy: 175, cols: 3, sp: 14, vsp: 50 },
        { x: 620, y: 60, w: 85, h: 390, wins: 20, wx: 630, wy: 78, cols: 6, sp: 12, vsp: 50, antenna: [661, 25, 663, 23] },
        { x: 940, y: 80, w: 70, h: 370, wins: 16, wx: 948, wy: 95, cols: 5, sp: 12, vsp: 50, antenna: [973, 50, 0, 0] },
        { x: 1260, y: 110, w: 65, h: 340, wins: 12, wx: 1268, wy: 128, cols: 4, sp: 14, vsp: 50 },
        { x: 1520, y: 130, w: 60, h: 320, wins: 10, wx: 1528, wy: 148, cols: 4, sp: 13, vsp: 48 },
        { x: 1780, y: 160, w: 55, h: 290, wins: 8, wx: 1788, wy: 178, cols: 3, sp: 14, vsp: 50 },
    ], []);

    return (
        <motion.div ref={ref} style={{ y }} className="absolute top-0 left-0 right-0 bottom-[30%] z-[5] overflow-hidden pointer-events-none">
            <svg viewBox="0 0 1920 450" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 w-full h-full opacity-[0.35]" fill="none">
                {buildings.map((b, bi) => (
                    <g key={bi}>
                        <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={2} fill={bi % 2 === 0 ? "#111827" : "#0f172a"} />
                        <rect x={b.x + 2} y={b.y + 2} width={b.w - 4} height={2} fill="#1e293b" />
                        {b.antenna && b.antenna[2] > 0 && <>
                            <rect x={b.antenna[0]} y={b.antenna[1]} width={4} height={30} fill="#1e293b" />
                            <circle cx={b.antenna[2]} cy={b.antenna[3]} r={3} fill="#a855f7" opacity={0.5}>
                                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </>}
                        {Array.from({ length: b.wins }, (_, wi) => {
                            const seed = hash(bi * 100 + wi);
                            const isLit = seed > 0.2; // 80% chance of being "Night" lite
                            if (!isLit) return null;

                            const wx = b.wx + (wi % b.cols) * b.sp;
                            const wy = b.wy + Math.floor(wi / b.cols) * b.vsp;
                            const opacity = 0.12 + seed * 0.25;
                            const color = "#fbbf24"; // Warm night light
                            return <rect key={wi} x={wx} y={wy} width={5} height={9} rx={1} fill={color} opacity={opacity} />;
                        })}
                    </g>
                ))}
                {[[170, 200, 40, 250], [715, 130, 55, 320], [780, 180, 40, 270], [1020, 140, 55, 310], [1085, 190, 40, 260], [1335, 165, 50, 285], [1590, 175, 45, 275], [1645, 210, 38, 240], [1845, 195, 40, 255], [1895, 220, 30, 230]].map(([x, y, w, h], i) =>
                    <rect key={`f${i}`} x={x} y={y} width={w} height={h} rx={2} fill={i % 2 === 0 ? "#1e293b" : "#111827"} opacity={0.5} />
                )}
            </svg>
        </motion.div>
    );
};

// ─── Street Layer ────────────────────────────────────────────────
export const StreetLayer = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[38%] z-[8] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(12,18,32,0.6) 40%, rgba(10,15,28,0.95) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[75%]" style={{ background: "linear-gradient(180deg, #0b1020 0%, #0a0e1b 40%, #090d18 100%)" }} />
        <div className="absolute left-0 right-0 h-[1px]" style={{ top: "30%", background: "linear-gradient(90deg, transparent 5%, rgba(168,85,247,0.06) 20%, rgba(255,255,255,0.04) 50%, rgba(168,85,247,0.06) 80%, transparent 95%)" }} />
        <div className="absolute left-[15%] right-[15%] h-[1px]" style={{ bottom: "25%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.025) 50%, rgba(255,255,255,0.02) 70%, transparent)" }} />
    </div>
);

// ─── Street Lamps ────────────────────────────────────────────────
export const StreetLamps = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[38%] z-[35] pointer-events-none">
        {[{ p: "8%", h: 100 }, { p: "35%", h: 90, md: true }, { p: "65%", h: 95, md: true }, { p: "92%", h: 85 }].map((l, i) => (
            <div key={i} className={`absolute bottom-[10%] ${l.md ? "hidden md:block" : ""}`} style={{ left: l.p }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px]" style={{ height: l.h, background: "linear-gradient(to top, rgba(30,41,59,0.5), rgba(30,41,59,0.15))" }} />
                <div className="absolute -top-[2px] left-1/2 -translate-x-1/2" style={{ width: 8, height: 4, borderRadius: "50%", background: "rgba(255,200,80,0.3)" }} />
                <div className="absolute top-1 left-1/2 -translate-x-1/2" style={{ width: 40, height: 55, background: "radial-gradient(ellipse at top, rgba(255,200,80,0.08) 0%, transparent 70%)", filter: "blur(4px)" }} />
            </div>
        ))}
    </div>
);

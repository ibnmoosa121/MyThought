"use client";

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────
interface TalentCharacterProps {
    id: number; speed: number; delay: number; startY: number;
    scale: number; direction: 1 | -1; tooltipText: string; containerWidth: number;
}

interface PoseData {
    leftArmAngle: number; rightArmAngle: number;
    leftLegAngle: number; rightLegAngle: number;
    bodyOffsetY: number;
}

// ─── Poses ───────────────────────────────────────────────────────
function getWalkPose(phase: number): PoseData {
    const t = phase * Math.PI * 2;
    return { leftArmAngle: Math.sin(t) * 25, rightArmAngle: -Math.sin(t) * 25, leftLegAngle: -Math.sin(t) * 30, rightLegAngle: Math.sin(t) * 30, bodyOffsetY: Math.abs(Math.sin(t * 2)) * -2 };
}
function getWavePose(phase: number): PoseData {
    return { leftArmAngle: 5, rightArmAngle: -140 + Math.sin(phase * Math.PI * 6) * 15, leftLegAngle: 0, rightLegAngle: 0, bodyOffsetY: 0 };
}
function getTalkPose(phase: number, speaking: boolean): PoseData {
    if (speaking) return { leftArmAngle: 8, rightArmAngle: -45 + Math.sin(phase * Math.PI * 4) * 25, leftLegAngle: 0, rightLegAngle: 0, bodyOffsetY: Math.sin(phase * Math.PI * 3) * -1 };
    return { leftArmAngle: 5, rightArmAngle: 5, leftLegAngle: 0, rightLegAngle: 0, bodyOffsetY: Math.sin(phase * Math.PI * 2) * -0.5 };
}
function getStandPose(phase: number): PoseData {
    return { leftArmAngle: 8, rightArmAngle: -55 + Math.sin(phase * Math.PI) * 3, leftLegAngle: 2, rightLegAngle: -2, bodyOffsetY: 0 };
}

// ─── SVG Silhouette ──────────────────────────────────────────────
interface SilhouetteProps { pose: PoseData; color: string; variant: number; }

const BODY = [
    { hR: 7.5, sW: 20, tH: 28, hW: 16, lL: 36, aL: 30 },
    { hR: 7, sW: 22, tH: 30, hW: 18, lL: 34, aL: 32 },
    { hR: 7.2, sW: 19, tH: 26, hW: 15, lL: 38, aL: 28 },
    { hR: 7.8, sW: 21, tH: 29, hW: 17, lL: 35, aL: 31 },
    { hR: 7.3, sW: 20, tH: 27, hW: 16, lL: 37, aL: 29 },
];

const SilhouetteFigure = memo(({ pose, color, variant }: SilhouetteProps) => {
    const v = BODY[variant % 5];
    const cx = 30, headY = 12, neckY = headY + v.hR + 2, shY = neckY + 4, hipY = shY + v.tH;

    return (
        <svg viewBox="0 0 60 120" width="60" height="120" style={{ overflow: "visible", display: "block" }}>
            <g transform={`translate(0,${pose.bodyOffsetY})`}>
                {/* Legs */}
                {[[-5, pose.leftLegAngle], [5, pose.rightLegAngle]].map(([ox, angle], i) => (
                    <g key={i} transform={`translate(${cx + ox},${hipY})`}><g transform={`rotate(${angle})`}>
                        <rect x={-3} y={0} width={6} height={v.lL} rx={3} fill={color} opacity={0.85} />
                        <ellipse cx={1} cy={v.lL + 1} rx={4.5} ry={3} fill={color} opacity={0.9} />
                    </g></g>
                ))}
                {/* Torso */}
                <path d={`M${cx - v.sW / 2} ${shY} Q${cx - v.sW / 2 - 1} ${shY + v.tH * 0.4} ${cx - v.hW / 2} ${hipY} L${cx + v.hW / 2} ${hipY} Q${cx + v.sW / 2 + 1} ${shY + v.tH * 0.4} ${cx + v.sW / 2} ${shY} Z`} fill={color} />
                {/* Neck + Head */}
                <rect x={cx - 3} y={neckY} width={6} height={shY - neckY + 2} rx={3} fill={color} />
                <circle cx={cx} cy={headY} r={v.hR} fill={color} />
                {/* Arms */}
                {[[cx - v.sW / 2 + 1, pose.leftArmAngle], [cx + v.sW / 2 - 1, pose.rightArmAngle]].map(([ax, angle], i) => (
                    <g key={`a${i}`} transform={`translate(${ax},${shY + 2})`}><g transform={`rotate(${angle})`}>
                        <rect x={-2.5} y={0} width={5} height={v.aL} rx={2.5} fill={color} opacity={0.9} />
                        <circle cx={0} cy={v.aL + 2} r={3} fill={color} opacity={0.9} />
                    </g></g>
                ))}
                {variant % 3 === 0 && Math.abs(pose.rightArmAngle) < 40 && (
                    <g transform={`translate(${cx + v.sW / 2 - 1},${shY + 2}) rotate(${pose.rightArmAngle})`}>
                        <rect x={-6} y={v.aL + 3} width={12} height={9} rx={1.5} fill={color} opacity={0.85} />
                    </g>
                )}
            </g>
        </svg>
    );
});
SilhouetteFigure.displayName = "SilhouetteFigure";

// ─── Colors & Tooltips ──────────────────────────────────────────
const SHADES = ["#1a1f35", "#1e2340", "#16192e", "#1c2038", "#14182c", "#20243a", "#181c32"];
const TIPS = ["Hire Me", "AI/ML Expert", "Full-Stack Dev", "Cloud Architect", "Data Scientist", "DevOps Lead", "Product Manager", "UX Designer", "ML Engineer", "Backend Dev", "Mobile Dev", "QA Lead", "Scrum Master", "Security Analyst", "Tech Lead", "Solutions Architect"];

// ─── Walker Character ────────────────────────────────────────────
export const TalentCharacter: React.FC<TalentCharacterProps> = memo(({
    id, speed, delay, startY, scale, direction, tooltipText, containerWidth,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [walkPhase, setWalkPhase] = useState(0);
    const animRef = useRef<number>(0);
    const x = useMotionValue(direction === 1 ? -100 : containerWidth + 100);
    const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
    const color = SHADES[id % SHADES.length];
    const variant = id % 5;
    const zIndex = Math.floor(startY * 50) + 15;

    useEffect(() => {
        let last = performance.now();
        const spd = 0.0015 + (id % 4) * 0.0003;
        const tick = (now: number) => {
            setWalkPhase(p => { const n = p + spd * (now - last); last = now; return n >= 1 ? n - 1 : n; });
            animRef.current = requestAnimationFrame(tick);
        };
        animRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animRef.current);
    }, [id]);

    const startWalking = useCallback(() => {
        controlsRef.current?.stop();
        const s = direction === 1 ? -100 : containerWidth + 100;
        const e = direction === 1 ? containerWidth + 100 : -100;
        const rem = Math.abs(e - x.get()) / Math.abs(e - s);
        controlsRef.current = animate(x, e, { duration: Math.max(rem * speed, 3), ease: "linear", onComplete: () => { x.set(s); startWalking(); } });
    }, [x, direction, containerWidth, speed]);

    useEffect(() => {
        x.set(direction === 1 ? -100 : containerWidth + 100);
        const t = setTimeout(startWalking, delay * 1000);
        return () => { clearTimeout(t); controlsRef.current?.stop(); };
    }, [delay, direction, containerWidth, startWalking, x]);

    const onIn = useCallback(() => { setIsHovered(true); controlsRef.current?.stop(); }, []);
    const onOut = useCallback(() => { setIsHovered(false); startWalking(); }, [startWalking]);
    const pose = isHovered ? getWavePose(walkPhase) : getWalkPose(walkPhase);
    const cw = 60 * scale, ch = 120 * scale;

    return (
        <motion.div style={{ x, top: `${startY * 100}%`, zIndex, width: cw, height: ch }} className="absolute cursor-pointer" onHoverStart={onIn} onHoverEnd={onOut} onTapStart={onIn}>
            <div style={{ width: cw, height: ch, transform: direction === -1 ? "scaleX(-1)" : undefined, transition: "filter 0.3s", filter: isHovered ? "drop-shadow(0 0 12px rgba(168,85,247,0.4))" : "none" }}>
                <SilhouetteFigure pose={pose} color={color} variant={variant} />
            </div>
            <AnimatePresence>{isHovered && (
                <motion.div initial={{ opacity: 0, y: 6, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.2 }}
                    className="absolute -top-9 left-1/2 whitespace-nowrap z-50" style={{ transform: `translateX(-50%)${direction === -1 ? " scaleX(-1)" : ""}` }}>
                    <div className="px-3 py-1.5 rounded-lg text-[10px] font-semibold tracking-wide uppercase" style={{ background: "rgba(12,18,32,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(168,85,247,0.35)", color: "#c4b5fd", boxShadow: "0 4px 24px rgba(168,85,247,0.12)" }}>
                        {tooltipText}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-[10px] h-[10px] rotate-45" style={{ background: "rgba(12,18,32,0.85)", borderRight: "1px solid rgba(168,85,247,0.35)", borderBottom: "1px solid rgba(168,85,247,0.35)" }} />
                </motion.div>
            )}</AnimatePresence>
            <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: -2, width: cw * 0.5, height: 4, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(0,0,0,0.3),transparent 80%)", filter: "blur(2px)", opacity: isHovered ? 0.6 : 0.35 }} />
        </motion.div>
    );
});
TalentCharacter.displayName = "TalentCharacter";

// ─── Talking Pair ────────────────────────────────────────────────
interface TalkingPairProps {
    id: number; leftX: number; streetY: number; scale: number;
}

export const TalkingPair: React.FC<TalkingPairProps> = memo(({ id, leftX, streetY, scale }) => {
    const [phase, setPhase] = useState(0);
    const animRef = useRef<number>(0);
    const colorA = SHADES[id % SHADES.length];
    const colorB = SHADES[(id + 3) % SHADES.length];
    const varA = id % 5, varB = (id + 2) % 5;
    const zIndex = Math.floor(streetY * 50) + 15;

    useEffect(() => {
        let last = performance.now();
        const tick = (now: number) => {
            setPhase(p => { const n = p + 0.001 * (now - last); last = now; return n >= 1 ? n - 1 : n; });
            animRef.current = requestAnimationFrame(tick);
        };
        animRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    const speakerIsA = phase < 0.5;
    const poseA = getTalkPose(phase, speakerIsA);
    const poseB = getTalkPose(phase, !speakerIsA);
    const cw = 60 * scale, ch = 120 * scale;
    const gap = 15 * scale;

    return (
        <div className="absolute" style={{ left: `${leftX}%`, top: `${streetY * 100}%`, zIndex, display: "flex", gap }}>
            <div style={{ width: cw, height: ch }}><SilhouetteFigure pose={poseA} color={colorA} variant={varA} /></div>
            <div style={{ width: cw, height: ch, transform: "scaleX(-1)" }}><SilhouetteFigure pose={poseB} color={colorB} variant={varB} /></div>
            {/* Subtle conversation indicator */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2" style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(168,85,247,0.15)", animation: `pulse 2s ease-in-out ${speakerIsA ? "0s" : "1s"} infinite`, filter: "blur(2px)" }} />
        </div>
    );
});
TalkingPair.displayName = "TalkingPair";

// ─── Standing Character (phone) ──────────────────────────────────
export const StandingCharacter: React.FC<{ id: number; leftX: number; streetY: number; scale: number }> = memo(({ id, leftX, streetY, scale }) => {
    const [phase, setPhase] = useState(0);
    const animRef = useRef<number>(0);
    const color = SHADES[(id + 1) % SHADES.length];
    const variant = (id + 1) % 5;
    const zIndex = Math.floor(streetY * 50) + 15;

    useEffect(() => {
        let last = performance.now();
        const tick = (now: number) => { setPhase(p => { const n = p + 0.0005 * (now - last); last = now; return n >= 1 ? n - 1 : n; }); animRef.current = requestAnimationFrame(tick); };
        animRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    const cw = 60 * scale, ch = 120 * scale;
    return (
        <div className="absolute" style={{ left: `${leftX}%`, top: `${streetY * 100}%`, zIndex, width: cw, height: ch }}>
            <SilhouetteFigure pose={getStandPose(phase)} color={color} variant={variant} />
        </div>
    );
});
StandingCharacter.displayName = "StandingCharacter";

// ─── Generators ──────────────────────────────────────────────────
export function generateCharacters(count: number, containerWidth: number): TalentCharacterProps[] {
    const chars: TalentCharacterProps[] = [];
    for (let i = 0; i < count; i++) {
        const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
        const sy = 0.10 + Math.random() * 0.55;
        const depthScale = 0.55 + sy * 0.85;

        chars.push({
            id: i,
            speed: 18 + Math.random() * 22,
            delay: Math.random() * 6,
            startY: sy,
            scale: Math.min(depthScale, 1.35),
            direction: dir,
            tooltipText: TIPS[i % TIPS.length],
            containerWidth
        });
    }
    chars.sort((a, b) => a.startY - b.startY);
    return chars;
}

export const TALKING_PAIRS = [
    { id: 200, leftX: 15, streetY: 0.45, scale: 0.9 },
    { id: 201, leftX: 50, streetY: 0.55, scale: 1.0 },
    { id: 202, leftX: 78, streetY: 0.35, scale: 0.82 },
];

export const STANDING_CHARS = [
    { id: 300, leftX: 30, streetY: 0.5, scale: 0.95 },
    { id: 301, leftX: 68, streetY: 0.42, scale: 0.85 },
];

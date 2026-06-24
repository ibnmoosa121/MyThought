import React from 'react';
import { motion } from 'framer-motion';

interface LogoIconProps {
    size?: number;
    className?: string;
    color?: string;
    showGradient?: boolean;
    animated?: boolean;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
    size = 32, 
    className = "", 
    color,
    showGradient = true,
    animated = true
}) => {
    // Determine the color or gradient reference
    const strokeColor = showGradient ? "url(#circuitBrainGradient)" : (color || "currentColor");
    const terminalColor = showGradient ? "url(#circuitBrainGradient)" : (color || "currentColor");

    // Exact grid coordinates tracing the brain circuit PNG logo
    // Paths are defined on a 100x100 viewBox
    const circuitPaths = [
        // 1. Topmost left-to-center-right trace
        { id: "trace-1", d: "M 33 22 H 41 L 46 17 H 56", delay: 0.1 },
        // 2. Upper right outer trace
        { id: "trace-2", d: "M 45 27 H 51 L 56 22 H 70", delay: 0.2 },
        // 3. Upper left to middle right trace
        { id: "trace-3", d: "M 32 32 H 42 L 47 27 H 52 L 60 35 H 74 L 79 30 H 84", delay: 0.3 },
        // 4. Upper left outer to upper right outer
        { id: "trace-4", d: "M 26 32 H 36 L 42 38 H 56 L 62 32 H 79", delay: 0.4 },
        // 5. Middle left to middle right
        { id: "trace-5", d: "M 20 42 H 28 L 34 48 H 40 L 46 42 H 68 L 74 48 H 84", delay: 0.5 },
        // 6. Middle-lower left outer
        { id: "trace-6", d: "M 19 50 H 25 L 30 55 H 36", delay: 0.6 },
        // 7. Middle left inner to center
        { id: "trace-7", d: "M 32 42 H 36 L 42 48 H 48", delay: 0.7 },
        // 8. Center to middle right outer
        { id: "trace-8", d: "M 42 42 H 46 L 52 48 H 56 L 60 52 H 70 L 74 48 H 84", delay: 0.8 },
        // 9. Middle right to middle left
        { id: "trace-9", d: "M 84 41 H 78 L 73 46 H 66 L 62 50 H 54 L 48 56 H 38", delay: 0.9 },
        // 10. Lower left outer winding to lower right outer
        { id: "trace-10", d: "M 37 63 H 43 L 49 69 H 56 L 62 63 H 68 L 74 57 H 84", delay: 1.0 },
        // 11. Lower left outer
        { id: "trace-11", d: "M 19 50 H 25 L 33 58 H 39", delay: 1.1 },
        // 12. Bottom stem trace (cerebellum/spine)
        { id: "trace-12", d: "M 66 85 V 77 L 60 71 H 52", delay: 1.2 },
        // 13. Bottom left inner branch
        { id: "trace-13", d: "M 52 71 L 46 65 H 40", delay: 1.3 },
        // 14. Bottom right inner branch
        { id: "trace-14", d: "M 60 71 L 66 65 H 70 L 74 61 H 79", delay: 1.4 }
    ];

    // Terminals (dots) at the ends of the circuit paths
    const terminals = [
        { cx: 33, cy: 22, r: 2.2, delay: 0.8 },
        { cx: 56, cy: 17, r: 2.2, delay: 0.9 },
        { cx: 45, cy: 27, r: 2.2, delay: 1.0 },
        { cx: 70, cy: 22, r: 2.2, delay: 1.1 },
        { cx: 32, cy: 32, r: 2.2, delay: 1.2 },
        { cx: 84, cy: 30, r: 2.2, delay: 1.3 },
        { cx: 26, cy: 32, r: 2.2, delay: 0.9 },
        { cx: 79, cy: 32, r: 2.2, delay: 1.4 },
        { cx: 20, cy: 42, r: 2.2, delay: 0.7 },
        { cx: 84, cy: 48, r: 2.2, delay: 1.5 },
        { cx: 19, cy: 50, r: 2.2, delay: 0.6 },
        { cx: 36, cy: 55, r: 2.2, delay: 1.2 },
        { cx: 32, cy: 42, r: 2.2, delay: 1.1 },
        { cx: 48, cy: 48, r: 2.2, delay: 1.4 },
        { cx: 42, cy: 42, r: 2.2, delay: 1.3 },
        { cx: 38, cy: 54, r: 2.2, delay: 1.6 },
        { cx: 37, cy: 63, r: 2.2, delay: 1.5 },
        { cx: 84, cy: 57, r: 2.2, delay: 1.7 },
        { cx: 39, cy: 58, r: 2.2, delay: 1.6 },
        { cx: 66, cy: 85, r: 2.5, delay: 1.8 }, // Main stem terminal
        { cx: 40, cy: 65, r: 2.2, delay: 1.7 },
        { cx: 79, cy: 61, r: 2.2, delay: 1.9 }
    ];

    return (
        <div className={`relative ${className}`} style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                <defs>
                    {/* Pink-Purple-Cyan Gradient from PNG */}
                    <linearGradient id="circuitBrainGradient" x1="0%" y1="40%" x2="100%" y2="60%">
                        <stop offset="0%" stopColor="#d946ef" /> {/* Pink/Fuchsia */}
                        <stop offset="35%" stopColor="#a855f7" /> {/* Purple */}
                        <stop offset="70%" stopColor="#3b82f6" /> {/* Blue */}
                        <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
                    </linearGradient>

                    {/* Glowing effect for the neon strokes */}
                    <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Circuit Traces */}
                <g filter="url(#circuitGlow)">
                    {circuitPaths.map((path) => (
                        <motion.path
                            key={path.id}
                            d={path.d}
                            stroke={strokeColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={animated ? { pathLength: 0, opacity: 0.3 } : { pathLength: 1, opacity: 1 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={
                                animated 
                                    ? { 
                                        pathLength: { duration: 1.8, ease: "easeInOut", delay: path.delay },
                                        opacity: { duration: 0.5, delay: path.delay }
                                    } 
                                    : undefined
                            }
                        />
                    ))}
                </g>

                {/* Circuit Terminals (Dots) */}
                <g>
                    {terminals.map((dot, index) => (
                        <motion.circle
                            key={index}
                            cx={dot.cx}
                            cy={dot.cy}
                            r={dot.r}
                            fill={terminalColor}
                            initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={
                                animated 
                                    ? { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 15, 
                                        delay: dot.delay 
                                    } 
                                    : undefined
                            }
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default LogoIcon;

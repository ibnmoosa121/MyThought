import React from 'react';
import { motion } from 'framer-motion';

interface LogoIconProps {
    size?: number;
    className?: string;
    color?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ size = 32, className = "", color }) => {
    const iconColor = color || "currentColor";

    return (
        <div className={className} style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                {/* Glow Effect */}
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Rotating Outer Ring */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={iconColor}
                    strokeWidth="1.5"
                    strokeDasharray="10 20"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.3 }}
                />

                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={iconColor}
                    strokeWidth="1"
                    strokeDasharray="5 15"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.2 }}
                />

                {/* Main brain/thought shape */}
                <motion.path
                    d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z"
                    stroke={iconColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />

                {/* Pulsing Inner Neural Network */}
                <motion.path
                    d="M35 50L45 40L55 60L65 50"
                    stroke={iconColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        opacity: [0.4, 1, 0.4],
                        strokeWidth: [3, 5, 3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.path
                    d="M40 35L50 45L60 35"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.6 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <motion.path
                    d="M40 65L50 55L60 65"
                    stroke={iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.6 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />

                {/* Center Thinking Spark */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="6"
                    fill={iconColor}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ filter: "blur(2px)" }}
                />

                {/* Floating Orbiting Particles */}
                {[0, 120, 240].map((angle, i) => (
                    <motion.circle
                        key={i}
                        r="2"
                        fill={iconColor}
                        animate={{
                            cx: [50 + 30 * Math.cos(angle * Math.PI / 180), 50 + 30 * Math.cos((angle + 360) * Math.PI / 180)],
                            cy: [50 + 30 * Math.sin(angle * Math.PI / 180), 50 + 30 * Math.sin((angle + 360) * Math.PI / 180)],
                            opacity: [0.2, 1, 0.2],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Rising Thought Particles */}
                <motion.circle
                    cx="35"
                    cy="40"
                    r="2"
                    fill={iconColor}
                    animate={{
                        y: [0, -20, -40],
                        x: [0, 5, -5],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                />
                <motion.circle
                    cx="65"
                    cy="40"
                    r="1.5"
                    fill={iconColor}
                    animate={{
                        y: [0, -25, -50],
                        x: [0, -8, 8],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0.5]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                />
            </svg>
        </div>
    );
};

export default LogoIcon;


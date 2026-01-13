import React from 'react';
import { motion } from 'framer-motion';

interface LogoIconProps {
    size?: number;
    className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ size = 32, className = "" }) => {
    return (
        <div className={className} style={{ width: size, height: size }}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Main brain/thought shape */}
                <motion.path
                    d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Inner neural network connections */}
                <motion.path
                    d="M35 50L45 40L55 60L65 50"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />

                {/* Thinking spark */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        strokeWidth: [1, 2, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating thought particles */}
                <motion.circle
                    cx="30"
                    cy="35"
                    r="3"
                    fill="currentColor"
                    animate={{
                        y: [0, -5, 0],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                />
                <motion.circle
                    cx="70"
                    cy="35"
                    r="2"
                    fill="currentColor"
                    animate={{
                        y: [0, -8, 0],
                        opacity: [0.1, 0.6, 0.1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.circle
                    cx="50"
                    cy="25"
                    r="2.5"
                    fill="currentColor"
                    animate={{
                        y: [0, -6, 0],
                        opacity: [0.3, 0.9, 0.3]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                />
            </svg>
        </div>
    );
};

export default LogoIcon;

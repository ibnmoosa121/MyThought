"use client";

import { motion } from "framer-motion";
import { designPalettes } from "../../../data/design-palettes";
import type { DesignPalette } from "../../../data/design-palettes";

interface PaletteSwitcherProps {
    activePalette: DesignPalette;
    onPaletteChange: (palette: DesignPalette) => void;
}

export const PaletteSwitcher = ({ activePalette, onPaletteChange }: PaletteSwitcherProps) => {
    return (
        <div className="fixed top-24 right-4 md:right-10 z-[100] flex flex-col items-end gap-2">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.8, ease: "circOut" }}
                className="bg-black/40 backdrop-blur-md border border-white/10 p-1.5 md:p-2 rounded-2xl flex items-center gap-2 shadow-xl"
            >
                <div className="flex gap-1.5 p-1">
                    {designPalettes.map((palette) => (
                        <button
                            key={palette.name}
                            onClick={() => onPaletteChange(palette)}
                            className={`group relative w-6 h-6 md:w-7 md:h-7 rounded-full border transition-all duration-300 ${activePalette.name === palette.name
                                ? "border-white scale-110 shadow-lg"
                                : "border-transparent hover:scale-105 opacity-60 hover:opacity-100"
                                }`}
                            title={palette.name}
                        >
                            <div className="absolute inset-0 rounded-full overflow-hidden flex transform -rotate-45">
                                <div className="w-1/2 h-full" style={{ backgroundColor: palette.colors[0] }} />
                                <div className="w-1/2 h-full" style={{ backgroundColor: palette.colors[1] }} />
                            </div>
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Hint for interaction - Minimal version */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="flex items-center gap-1.5 pr-2 pointer-events-none"
            >
                <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
                <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-white/20 italic">Aesthetic Shift</span>
            </motion.div>
        </div>
    );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogoIcon } from '../components/ui/logo-icon';
import { ArrowLeft, Upload, RefreshCw, Layers, Sliders, Play, Eye, Code, Ship, UserCheck, HelpCircle } from 'lucide-react';

export const LogoSandbox: React.FC = () => {
    const [pngImage, setPngImage] = useState<string | null>(null);
    const [opacity, setOpacity] = useState<number>(0.5);
    const [size, setSize] = useState<number>(300);
    const [showGradient, setShowGradient] = useState<boolean>(true);
    const [strokeWidth, setStrokeWidth] = useState<number>(2);
    const [activeService, setActiveService] = useState<'brain' | 'software' | 'logistics' | 'recruiting'>('brain');
    const [overlayMode, setOverlayMode] = useState<boolean>(true);
    const [animationTrigger, setAnimationTrigger] = useState<number>(0);

    // Handle drag and drop of PNG logo
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setPngImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPngImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Paths definitions for Morphing Simulation (Approach C)
    // All service shapes use exactly 14 paths, just like the brain, to allow smooth morphing.
    const servicePaths = {
        brain: [
            "M 33 22 H 41 L 46 17 H 56",
            "M 45 27 H 51 L 56 22 H 70",
            "M 32 32 H 42 L 47 27 H 52 L 60 35 H 74 L 79 30 H 84",
            "M 26 32 H 36 L 42 38 H 56 L 62 32 H 79",
            "M 20 42 H 28 L 34 48 H 40 L 46 42 H 68 L 74 48 H 84",
            "M 19 50 H 25 L 30 55 H 36",
            "M 32 42 H 36 L 42 48 H 48",
            "M 42 42 H 46 L 52 48 H 56 L 60 52 H 70 L 74 48 H 84",
            "M 84 41 H 78 L 73 46 H 66 L 62 50 H 54 L 48 56 H 38",
            "M 37 63 H 43 L 49 69 H 56 L 62 63 H 68 L 74 57 H 84",
            "M 19 50 H 25 L 33 58 H 39",
            "M 66 85 V 77 L 60 71 H 52",
            "M 52 71 L 46 65 H 40",
            "M 60 71 L 66 65 H 70 L 74 61 H 79"
        ],
        software: [
            // Left Bracket <
            "M 35 25 L 20 50 L 35 75 H 35",
            // Right Bracket >
            "M 65 25 L 80 50 L 65 75 H 65",
            // Center Slash / (Two overlapping paths to make it bold)
            "M 55 20 L 45 80",
            "M 55 20 L 45 80",
            // Collapsed paths - hidden inside the slash and brackets
            "M 20 50 H 20",
            "M 80 50 H 80",
            "M 45 80 H 45",
            "M 45 80 H 45",
            "M 55 20 H 55",
            "M 35 25 H 35",
            "M 65 25 H 65",
            "M 20 50 V 50",
            "M 80 50 V 80",
            "M 50 50 H 50"
        ],
        logistics: [
            // Cargo Ship Hull (Horizontal and angled lines)
            "M 15 55 H 85", // Deck line
            "M 15 55 L 25 75 H 75 L 85 55", // Bottom hull
            "M 25 75 H 75", // Flat bottom
            // Ship Cabin / Mast
            "M 65 55 V 40 H 80 V 55", // Cabin structures
            "M 45 55 V 25 H 55 V 55", // Middle tower
            // Containers stacked on deck
            "M 30 55 V 45 H 40 V 55", // Box 1
            "M 42 55 V 45 H 52 V 55", // Box 2
            "M 32 45 V 35 H 48 V 45", // Box 3 (stacked)
            // Water waves below
            "M 10 82 Q 25 78 40 82 T 70 82 T 90 82",
            "M 15 88 Q 30 85 45 88 T 75 88 T 85 88",
            // Collapsed paths
            "M 50 25 H 50",
            "M 50 25 H 50",
            "M 50 25 H 50",
            "M 50 25 H 50"
        ],
        recruiting: [
            // Tie Knot (Triangle/Trapezoid)
            "M 45 35 H 55 L 53 42 H 47 Z",
            // Tie Body (Long hanging shape)
            "M 47 42 L 44 68 L 50 78 L 56 68 L 53 42 Z",
            // Shirt Collar Left
            "M 32 25 L 45 35 H 32",
            // Shirt Collar Right
            "M 68 25 L 55 35 H 68",
            // Hanger / Shoulder Silhouette
            "M 20 50 L 35 35",
            "M 80 50 L 65 35",
            "M 20 50 H 80",
            // Suit Lapel Left
            "M 30 35 L 40 60 L 45 60",
            // Suit Lapel Right
            "M 70 35 L 60 60 L 55 60",
            // Collapsed/Decorative paths
            "M 50 78 H 50",
            "M 50 78 H 50",
            "M 50 78 H 50",
            "M 50 78 H 50",
            "M 50 78 H 50"
        ]
    };

    // Helper to trigger logo drawing animation
    const replayAnimation = () => {
        setAnimationTrigger(prev => prev + 1);
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white pt-24 pb-12 px-6 flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-6xl flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                    <a
                        href="#/"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all"
                    >
                        <ArrowLeft size={20} />
                    </a>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight">SVG Logo Accuracy Sandbox</h1>
                        <p className="text-sm text-white/50">Verify coordinates and preview Approach C morphing live</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={replayAnimation}
                        className="btn btn-outline btn-sm gap-2 border-white/10 text-white hover:bg-white/5"
                    >
                        <RefreshCw size={14} /> Replay Draw Animation
                    </button>
                </div>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Control Panel (4 Columns) */}
                <div className="lg:col-span-4 flex flex-col gap-6 bg-white/5 rounded-2xl p-6 border border-white/10 h-fit">
                    <div className="flex items-center gap-2 font-bold text-primary border-b border-white/5 pb-3">
                        <Sliders size={18} />
                        <h2>Comparison Settings</h2>
                    </div>

                    {/* PNG Drag and Drop */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60">1. Original PNG Reference</label>
                        <div
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                                pngImage ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                            }`}
                        >
                            <input
                                type="file"
                                id="png-upload"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="png-upload" className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                                <Upload size={24} className="text-white/60 mb-1" />
                                {pngImage ? (
                                    <span className="text-xs text-primary font-bold">Image loaded successfully!</span>
                                ) : (
                                    <>
                                        <span className="text-xs font-bold text-white">Drag & drop your PNG logo here</span>
                                        <span className="text-[10px] text-white/40 mt-1">or click to browse local files</span>
                                    </>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Overlay Opacity Slider */}
                    {pngImage && (
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold uppercase tracking-wider text-white/60">2. Overlay Opacity</label>
                                <span className="text-xs font-mono bg-white/10 px-1.5 py-0.5 rounded">{Math.round(opacity * 100)}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={opacity}
                                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                                className="range range-xs range-primary"
                            />
                            <div className="flex justify-between text-[10px] text-white/40">
                                <span>PNG only</span>
                                <span>SVG only</span>
                            </div>
                        </div>
                    )}

                    {/* Rendering Preferences */}
                    <div className="flex flex-col gap-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60">3. SVG Parameters</label>
                        
                        {/* Size slider */}
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/80">Sizing Scale</span>
                            <span className="font-mono text-white/60">{size}px</span>
                        </div>
                        <input
                            type="range"
                            min="100"
                            max="500"
                            value={size}
                            onChange={(e) => setSize(parseInt(e.target.value))}
                            className="range range-xs"
                        />

                        {/* Stroke Width Slider */}
                        <div className="flex justify-between items-center text-xs mt-2">
                            <span className="text-white/80">Stroke Width</span>
                            <span className="font-mono text-white/60">{strokeWidth}px</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="4"
                            step="0.5"
                            value={strokeWidth}
                            onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                            className="range range-xs"
                        />

                        {/* Color Toggles */}
                        <div className="flex items-center justify-between mt-3 bg-white/5 p-3 rounded-xl border border-white/5">
                            <span className="text-xs text-white/80">Render Gradient</span>
                            <input
                                type="checkbox"
                                checked={showGradient}
                                onChange={(e) => setShowGradient(e.target.checked)}
                                className="toggle toggle-primary toggle-sm"
                            />
                        </div>
                    </div>

                    {/* Visual Mode Selector */}
                    {pngImage && (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-white/60">4. Comparison Mode</label>
                            <div className="grid grid-cols-2 gap-2 bg-neutral-900 p-1 rounded-xl">
                                <button
                                    onClick={() => setOverlayMode(true)}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                        overlayMode ? 'bg-primary text-white shadow' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Layers size={12} /> Overlay
                                </button>
                                <button
                                    onClick={() => setOverlayMode(false)}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                        !overlayMode ? 'bg-primary text-white shadow' : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Eye size={12} /> Side-by-Side
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Visualizer Workspace (8 Columns) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Mode Overlay/Side-by-Side Visuals */}
                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden min-h-[450px]">
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px]" />
                        
                        {!pngImage ? (
                            // Welcome/No PNG State
                            <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 shadow-inner">
                                    <LogoIcon size={36} showGradient={true} animated={false} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Recreated SVG Vector</h3>
                                <p className="text-sm text-white/50 mb-6">
                                    Below is our hand-crafted vector. To check its accuracy, upload your original PNG on the left panel to overlay them directly!
                                </p>
                                <div className="flex items-center justify-center p-4 bg-black/40 rounded-2xl border border-white/5">
                                    <LogoIcon 
                                        key={animationTrigger} 
                                        size={220} 
                                        showGradient={showGradient} 
                                        color="#ffffff"
                                        animated={true} 
                                    />
                                </div>
                            </div>
                        ) : overlayMode ? (
                            // Overlay View Mode
                            <div className="relative z-10 flex flex-col items-center">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">Overlay Accuracy Tester</h3>
                                <div 
                                    className="relative bg-black/50 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
                                    style={{ width: size + 40, height: size + 40 }}
                                >
                                    {/* Original PNG behind */}
                                    <img
                                        src={pngImage}
                                        alt="Original Logo Reference"
                                        className="absolute pointer-events-none select-none transition-all duration-300"
                                        style={{ 
                                            width: size, 
                                            height: size, 
                                            opacity: 1 - opacity,
                                            filter: 'brightness(1.2) contrast(1.1)' 
                                        }}
                                    />
                                    {/* Recreated SVG on top */}
                                    <div 
                                        className="absolute transition-all duration-300 flex items-center justify-center"
                                        style={{ 
                                            width: size, 
                                            height: size, 
                                            opacity: opacity 
                                        }}
                                    >
                                        <LogoIcon 
                                            key={animationTrigger}
                                            size={size} 
                                            showGradient={showGradient} 
                                            color="#ffffff"
                                            animated={false} 
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-white/40 mt-4 text-center">
                                    Adjust the slider on the left. Verify that the bends align perfectly with the original logo.
                                </p>
                            </div>
                        ) : (
                            // Side-by-Side Mode
                            <div className="relative z-10 w-full flex flex-col items-center">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">Side-by-Side Comparison</h3>
                                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                                    <div className="flex flex-col items-center gap-3">
                                        <span className="text-xs font-bold text-white/60">Your PNG File</span>
                                        <div className="w-full aspect-square bg-black/30 rounded-xl border border-white/5 flex items-center justify-center p-6">
                                            <img src={pngImage} alt="Original PNG" className="max-w-full max-h-full object-contain" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-3">
                                        <span className="text-xs font-bold text-white/60">Our Hand-Crafted SVG</span>
                                        <div className="w-full aspect-square bg-black/30 rounded-xl border border-white/5 flex items-center justify-center p-6">
                                            <LogoIcon 
                                                key={animationTrigger} 
                                                size={160} 
                                                showGradient={showGradient} 
                                                color="#ffffff"
                                                animated={true} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Morphing Simulator (Approach C Demonstration) */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                            <div>
                                <h3 className="font-bold text-lg">Approach C: Framer Motion Morphing Simulator</h3>
                                <p className="text-xs text-white/50">Simulating the brain circuit morphing into services</p>
                            </div>
                            <span className="badge badge-primary font-bold">Interactive Demo</span>
                        </div>

                        {/* Interactive Buttons */}
                        <div className="grid grid-cols-4 gap-2 mb-6">
                            <button
                                onClick={() => setActiveService('brain')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                                    activeService === 'brain' 
                                        ? 'bg-primary border-primary text-white shadow' 
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70'
                                }`}
                            >
                                <Play size={12} className="rotate-90" /> Brain Logo
                            </button>
                            <button
                                onClick={() => setActiveService('software')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                                    activeService === 'software' 
                                        ? 'bg-blue-600 border-blue-600 text-white shadow' 
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70'
                                }`}
                            >
                                <Code size={12} /> Software
                            </button>
                            <button
                                onClick={() => setActiveService('logistics')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                                    activeService === 'logistics' 
                                        ? 'bg-cyan-600 border-cyan-600 text-white shadow' 
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70'
                                }`}
                            >
                                <Ship size={12} /> Logistics
                            </button>
                            <button
                                onClick={() => setActiveService('recruiting')}
                                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                                    activeService === 'recruiting' 
                                        ? 'bg-purple-600 border-purple-600 text-white shadow' 
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-white/70'
                                }`}
                            >
                                <UserCheck size={12} /> Recruiting
                            </button>
                        </div>

                        {/* The Morphing Canvas */}
                        <div className="w-full bg-neutral-900 rounded-xl border border-white/5 p-8 flex flex-col items-center justify-center min-h-[300px]">
                            <div className="w-[200px] h-[200px] relative">
                                <svg
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full overflow-visible"
                                >
                                    <defs>
                                        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#d946ef" />
                                            <stop offset="50%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#06b6d4" />
                                        </linearGradient>
                                        <filter id="morphGlow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="2" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>

                                    {/* Morphing paths using exactly 14 nodes */}
                                    <g stroke="url(#morphGradient)" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" filter="url(#morphGlow)">
                                        {servicePaths[activeService].map((pathD, idx) => (
                                            <motion.path
                                                key={idx}
                                                d={pathD}
                                                initial={false}
                                                animate={{ d: pathD }}
                                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                            />
                                        ))}
                                    </g>
                                </svg>
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mt-4">
                                Current shape: {activeService.toUpperCase()}
                            </span>
                        </div>

                        {/* Explanatory text */}
                        <div className="flex gap-3 mt-4 bg-white/5 p-4 rounded-xl text-xs text-white/70 border border-white/5">
                            <HelpCircle size={16} className="text-primary shrink-0 mt-0.5" />
                            <p>
                                <strong>How this morph works:</strong> Both the brain and the service shapes contain exactly 14 vector paths. When you switch states, Framer Motion automatically interpolates the coordinate arrays. Paths that aren't needed for the target icons collapse gracefully into the borders or invisible points. This creates a completely seamless shape-shift without loading heavy external libraries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoSandbox;

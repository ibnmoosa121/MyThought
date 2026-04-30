/* globe.tsx - Interactive 3D Globe using cobe */
"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe, { type COBEOptions } from "cobe";

// Re-export for external usage
export interface GlobeConfig {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: { lat: number; lng: number };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
}

export interface Position {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
}

interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
    center?: [number, number]; // [lat, lng] (fallback)
    targetAngles?: { phi: number; theta: number }; // Precise override
}

function hexToRgb(hex: string): [number, number, number] {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex.split("").map((c) => c + c).join("");
    }
    const num = parseInt(hex, 16);
    return [
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255,
    ];
}

export function World({ globeConfig, center, targetAngles }: WorldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
    const pointerInteractionMovement = useRef({ x: 0, y: 0 });
    
    // Refs for live debug text updates
    const phiTextRef = useRef<HTMLSpanElement>(null);
    const thetaTextRef = useRef<HTMLSpanElement>(null);

    const focusRef = useRef(
        globeConfig.initialPosition
            ? [
                (globeConfig.initialPosition.lat * Math.PI) / 180,
                ((globeConfig.initialPosition.lng - 90) * Math.PI) / 180,
            ]
            : [0, 0]
    );

    const targetPhi = useRef(globeConfig.initialPosition ? ((globeConfig.initialPosition.lng - 90) * Math.PI) / 180 : 0);
    const targetTheta = useRef(globeConfig.initialPosition ? (globeConfig.initialPosition.lat * Math.PI) / 180 : 0);

    // Update target phi/theta when center or targetAngles changes
    useEffect(() => {
        if (targetAngles) {
            targetPhi.current = (targetAngles.phi * Math.PI) / 180;
            targetTheta.current = (targetAngles.theta * Math.PI) / 180;
        } else if (center) {
            const lat = center[0];
            const lng = center[1];
            targetPhi.current = ((lng - 90) * Math.PI) / 180;
            targetTheta.current = (lat * Math.PI) / 180;
        }
    }, [targetAngles, center ? center[0] : null, center ? center[1] : null]);

    const phiRef = useRef(
        globeConfig.initialPosition
            ? ((globeConfig.initialPosition.lng - 90) * Math.PI) / 180
            : 0
    );

    const onResize = useCallback(() => {
        if (canvasRef.current) {
            canvasRef.current.width = canvasRef.current.offsetWidth * 2;
            canvasRef.current.height = canvasRef.current.offsetHeight * 2;
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globeColorRgb = hexToRgb(globeConfig.globeColor || "#062056");
        const atmosphereColorRgb = hexToRgb(
            globeConfig.atmosphereColor || "#ffffff"
        );

        const cobeConfig: COBEOptions = {
            width: canvasRef.current?.offsetWidth ? canvasRef.current.offsetWidth * 2 : 800,
            height: canvasRef.current?.offsetHeight ? canvasRef.current.offsetHeight * 2 : 800,
            onRender: (state) => {
                // Automatic rotation or Target rotation
                if (!pointerInteracting.current) {
                    if (targetAngles || center) {
                        let currentPhi = phiRef.current;
                        let targetPhiVal = targetPhi.current;

                        const PI2 = Math.PI * 2;
                        while (targetPhiVal - currentPhi > Math.PI) targetPhiVal -= PI2;
                        while (targetPhiVal - currentPhi < -Math.PI) targetPhiVal += PI2;

                        const distPhi = targetPhiVal - currentPhi;
                        phiRef.current += distPhi * 0.08; 

                        let currentTheta = focusRef.current[0];
                        let targetThetaVal = targetTheta.current;
                        const distTheta = targetThetaVal - currentTheta;
                        focusRef.current[0] += distTheta * 0.08; 
                    } else {
                        phiRef.current += (globeConfig.autoRotateSpeed || 0.5) * 0.005;
                    }
                }

                state.phi = phiRef.current + pointerInteractionMovement.current.x;
                state.theta = focusRef.current[0] + pointerInteractionMovement.current.y;
                state.width = canvasRef.current?.offsetWidth ? canvasRef.current.offsetWidth * 2 : 800;
                state.height = canvasRef.current?.offsetHeight ? canvasRef.current.offsetHeight * 2 : 800;

                // Update debug overlay directly for performance
                if (phiTextRef.current) phiTextRef.current.innerText = (state.phi * 180 / Math.PI).toFixed(2);
                if (thetaTextRef.current) thetaTextRef.current.innerText = (state.theta * 180 / Math.PI).toFixed(2);
            },
            devicePixelRatio: 2,
            phi: focusRef.current[1],
            theta: focusRef.current[0],
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: globeColorRgb,
            markerColor: [0.1, 0.8, 0.4] as [number, number, number],
            glowColor: atmosphereColorRgb,
            markers: [],
            opacity: 0.85,
            scale: 1,
        };

        let globe: ReturnType<typeof createGlobe> | undefined;

        if (canvasRef.current) {
            globe = createGlobe(canvasRef.current, cobeConfig);
            setTimeout(() => {
                if (canvasRef.current) canvasRef.current.style.opacity = "1";
            });
        }

        return () => {
            window.removeEventListener("resize", onResize);
            globe?.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [center ? center[1] : null, targetAngles]);

    return (
        <div
            className="w-full h-full relative"
            style={{ width: "100%", height: "100%", cursor: "grab" }}
            onPointerDown={(e) => {
                pointerInteracting.current = {
                    x: e.clientX - pointerInteractionMovement.current.x * 200,
                    y: e.clientY - pointerInteractionMovement.current.y * 200
                };
                if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
            }}
            onPointerUp={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = "grab";
            }}
            onPointerOut={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = "grab";
            }}
            onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                    const deltaX = e.clientX - pointerInteracting.current.x;
                    const deltaY = e.clientY - pointerInteracting.current.y;
                    pointerInteractionMovement.current = { x: deltaX / 200, y: deltaY / 200 };
                }
            }}
            onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                    const deltaX = e.touches[0].clientX - pointerInteracting.current.x;
                    const deltaY = e.touches[0].clientY - pointerInteracting.current.y;
                    pointerInteractionMovement.current = { x: deltaX / 200, y: deltaY / 200 };
                }
            }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full select-none"
                style={{
                    contain: "layout paint size",
                    opacity: 0,
                    transition: "opacity 1s ease",
                }}
            />
            {/* Atmosphere glow effect */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${globeConfig.atmosphereColor || '#ffffff'}08, transparent 70%)`,
                }}
            />
        </div>
    );
}

export default World;

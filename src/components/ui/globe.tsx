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
    markers?: { location: [number, number]; size: number }[];
    center?: [number, number]; // [lat, lng]
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

export function World({ globeConfig, data, markers: propsMarkers, center }: WorldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const phiRef = useRef(0);
    const targetPhi = useRef(0);
    const targetTheta = useRef(0);

    // Update target phi/theta when center changes
    useEffect(() => {
        if (center) {
            // center is [lat, lng]
            const lat = center[0];
            const lng = center[1];

            // Phi is Longitude (radians)
            targetPhi.current = (lng * Math.PI) / 180;

            // Theta is Latitude (radians from North Pole, 0 to PI)
            // If lat is 90 (North), theta is 0. If lat is -90 (South), theta is PI.
            // If lat is 0 (Equator), theta is PI/2.
            // Formula: theta = (90 - lat) * (Math.PI / 180)
            targetTheta.current = (80 - lat) * (Math.PI / 180); // Using 80 instead of 90 for slightly better viewing angle
        }
    }, [center ? center[0] : null, center ? center[1] : null]);

    const focusRef = useRef(
        globeConfig.initialPosition
            ? [
                (globeConfig.initialPosition.lat * Math.PI) / 180,
                (globeConfig.initialPosition.lng * Math.PI) / 180,
            ]
            : [0, 0]
    );

    // Convert arc data into marker pairs for visualization
    const arcMarkers = data.flatMap((arc) => [
        { location: [arc.startLat, arc.startLng] as [number, number], size: 0.06 },
        { location: [arc.endLat, arc.endLng] as [number, number], size: 0.06 },
    ]);

    // Combine props markers (priority) and arc markers
    const allMarkers = [...(propsMarkers || []), ...arcMarkers];

    // Deduplicate markers by location
    const uniqueMarkers = allMarkers.filter(
        (marker, index, self) =>
            index ===
            self.findIndex(
                (m) =>
                    m.location[0] === marker.location[0] &&
                    m.location[1] === marker.location[1]
            )
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
                    if (center) {
                        // Smoothly interpolate towards targetPhi (Longitude)
                        let currentPhi = phiRef.current;
                        let targetPhiVal = targetPhi.current;

                        const PI2 = Math.PI * 2;
                        while (targetPhiVal - currentPhi > Math.PI) targetPhiVal -= PI2;
                        while (targetPhiVal - currentPhi < -Math.PI) targetPhiVal += PI2;

                        const distPhi = targetPhiVal - currentPhi;
                        phiRef.current += distPhi * 0.05;

                        // Smoothly interpolate towards targetTheta (Latitude)
                        let currentTheta = focusRef.current[0];
                        let targetThetaVal = targetTheta.current;
                        const distTheta = targetThetaVal - currentTheta;
                        focusRef.current[0] += distTheta * 0.05;
                    } else {
                        phiRef.current += (globeConfig.autoRotateSpeed || 0.5) * 0.005;
                    }
                }

                state.phi = phiRef.current + pointerInteractionMovement.current;
                state.theta = focusRef.current[0];
                state.width = canvasRef.current?.offsetWidth ? canvasRef.current.offsetWidth * 2 : 800;
                state.height = canvasRef.current?.offsetHeight ? canvasRef.current.offsetHeight * 2 : 800;
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
            markers: uniqueMarkers,
            opacity: 0.85,
            scale: 1,
        };

        let globe: ReturnType<typeof createGlobe> | undefined;

        if (canvasRef.current) {
            globe = createGlobe(canvasRef.current, cobeConfig);
        }

        return () => {
            window.removeEventListener("resize", onResize);
            globe?.destroy();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(uniqueMarkers), center ? center[1] : null]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = "grabbing");
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = "grab");
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = "grab");
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 200;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 100;
                    }
                }}
                className="w-full h-full cursor-grab"
                style={{
                    contain: "layout paint size",
                    maxWidth: "100%",
                    aspectRatio: "1",
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

"use client";

interface WavyBackgroundProps {
    color?: string;
    className?: string;
}

export const WavyBackground = ({
    color = "#4f46e5",
    className = "",
}: WavyBackgroundProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none bg-black ${className}`}>
            {/* Aurora / Plasma Glow Layer - Recreating the look from the reference image */}
            <div className="absolute inset-0 z-0">
                {/* Large Main Glow - Drifting right to left */}
                <div
                    className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] rounded-full blur-[180px] mix-blend-screen animate-aurora-glow opacity-40 shrink-0"
                    style={{
                        background: `radial-gradient(circle at center, ${color}44 0%, ${color}22 30%, transparent 70%)`
                    }}
                />

                {/* Secondary Accent Glow - Drifting left to right */}
                <div
                    className="absolute bottom-[-10%] right-[-20%] w-[100%] h-[120%] rounded-full blur-[200px] mix-blend-screen animate-aurora-drift opacity-30 shrink-0"
                    style={{
                        background: `radial-gradient(circle at center, ${color}33 0%, transparent 60%)`
                    }}
                />

                {/* Static defined shape glow similar to the image's left curve */}
                <div
                    className="absolute top-[10%] left-[-30%] w-[80%] h-[80%] rounded-full blur-[150px] mix-blend-screen opacity-50 shrink-0"
                    style={{
                        background: `radial-gradient(circle at center, ${color}55 0%, transparent 60%)`,
                        transform: 'translateX(20%)'
                    }}
                />
            </div>

            {/* SVG Waves - Fluid motion overlay */}
            <div className="absolute inset-0 z-10 opacity-30">
                <svg
                    className="absolute bottom-0 w-full h-[60%] opacity-50"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path fill={color}>
                        <animate
                            attributeName="d"
                            dur="20s"
                            repeatCount="indefinite"
                            values="
                                M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L80,320L0,320Z;
                                M0,160L80,176C160,192,320,224,480,213.3C640,203,800,160,960,138.7C1120,117,1280,107,1360,112L1440,128L1440,320L1360,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L80,320L0,320Z;
                                M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L80,320L0,320Z
                            "
                        />
                    </path>
                </svg>
            </div>
        </div>
    );
};

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, type SpringOptions } from 'framer-motion';

interface TiltedCardProps {
    imageSrc?: string;
    videoSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    imageHeight?: React.CSSProperties['height'];
    imageWidth?: React.CSSProperties['width'];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
    mediaClassName?: string;
}

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedCard({
    imageSrc,
    videoSrc,
    altText = 'Tilted card content',
    captionText = '',
    containerHeight = '100%',
    containerWidth = '100%',
    imageHeight = 'auto',
    imageWidth = '100%',
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    mediaClassName = ''
}: TiltedCardProps) {
    const ref = useRef<HTMLElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1
    });

    const [lastY, setLastY] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && videoSrc) {
            videoRef.current.load();
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay was prevented
                    console.log("Autoplay prevented, waiting for interaction");
                });
            }
        }
    }, [videoSrc]);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:1200px] flex flex-col items-center justify-center overflow-visible"
            style={{
                height: containerHeight,
                width: containerWidth
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="relative [transform-style:preserve-3d] w-full"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale
                }}
            >
                <div className="relative w-full aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden will-change-transform [transform:translateZ(0)] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-white/40 transition-colors duration-500 bg-zinc-950">
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10" />

                    {videoSrc ? (
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full h-full object-cover ${mediaClassName}`}
                        />
                    ) : imageSrc ? (
                        <motion.img
                            src={imageSrc}
                            alt={altText}
                            className={`w-full h-full object-cover ${mediaClassName}`}
                        />
                    ) : (
                        <div className="w-full h-full bg-zinc-900" />
                    )}

                    {/* Inner Shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
                </div>

                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute top-0 left-0 z-[2] w-full h-full will-change-transform [transform:translateZ(30px)] pointer-events-none">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block shadow-xl"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}


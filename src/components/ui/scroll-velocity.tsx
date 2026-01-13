"use client";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";

interface ScrollVelocityProps {
    text: string;
    velocity?: number;
    className?: string;
}

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const ScrollVelocity = ({
    text,
    velocity = 100,
    className = "",
}: ScrollVelocityProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 15], {
        clamp: false,
    });

    /**
     * Wrapping between 0 and -25% assumes 4 repeats are visible.
     * With 8 repeats, this ensures a very smooth transition.
     */
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    const directionFactor = useRef<number>(velocity > 0 ? 1 : -1);
    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * Math.abs(velocity) * (delta / 1000);

        /**
         * This ensures the scroll responsiveness follows the row's direction.
         * Rows will move 'vice versa' both in base movement and scroll reaction.
         */
        const deltaVelocity = Math.abs(velocityFactor.get());
        moveBy += directionFactor.current * deltaVelocity * 0.08;

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
        >
            <motion.div
                className="flex whitespace-nowrap flex-nowrap text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[ -0.05em] uppercase italic leading-[1.2]"
                style={{ x }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="block pr-12 md:pr-20">{text}</span>
                ))}
            </motion.div>
        </div>
    );
};

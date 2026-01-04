import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "../../lib/utils";

interface LogoItem {
  id: number | string;
  name: string;
  logo: string | ReactNode;
}

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number | string;
  gap?: number;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, index: number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  fadeOutColor = "white",
  scaleOnHover = false,
  renderItem,
  ariaLabel = "Partner logos",
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentSize, setContentSize] = useState(0);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos to ensure seamless loop
  // We need enough duplicates to fill the screen + buffer
  // For simplicity, we'll just triple the list which is usually enough for standard widths
  const displayLogos = [...logos, ...logos, ...logos];

  const isHorizontal = direction === "left" || direction === "right";
  const isReverse = direction === "right" || direction === "down";

  useEffect(() => {
    if (!containerRef.current) return;

    const measureContent = () => {
      if (!containerRef.current) return;
      // Measure one set of logos including gap
      // const singleSetWidth = (logos.length * ((typeof logoHeight === 'number' ? 100 : 100) + gap)); 
      // Better approach: Measure the scroll width of the inner container
      const scrollSize = isHorizontal 
        ? containerRef.current.scrollWidth / 3 
        : containerRef.current.scrollHeight / 3;
      
      setContentSize(scrollSize);
    };

    // Initial measurement
    // We need a slight delay to allow rendering
    const timer = setTimeout(measureContent, 100);
    return () => clearTimeout(timer);
  }, [logos, gap, isHorizontal, logoHeight]);

  useEffect(() => {
    if (contentSize === 0) return;

    const currentSpeed = isHovered && hoverSpeed !== undefined ? hoverSpeed : speed;
    if (currentSpeed === 0) {
      controls.stop();
      return;
    }

    const duration = contentSize / currentSpeed;

    const start = isReverse ? -contentSize : 0;
    const end = isReverse ? 0 : -contentSize;

    controls.start({
      x: isHorizontal ? [start, end] : 0,
      y: !isHorizontal ? [start, end] : 0,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: duration,
      },
    });
  }, [contentSize, speed, direction, isHorizontal, isReverse, controls, isHovered, hoverSpeed]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width,
        height: isHorizontal ? "auto" : "100%",
        ...style,
      }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {fadeOut && (
        <>
          <div
            className="absolute top-0 left-0 z-10 h-full w-20 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute top-0 right-0 z-10 h-full w-20 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <motion.div
        ref={containerRef}
        animate={controls}
        className={cn(
          "flex",
          isHorizontal ? "flex-row" : "flex-col"
        )}
        style={{
          gap: `${gap}px`,
          width: isHorizontal ? "max-content" : "100%",
        }}
      >
        {displayLogos.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={cn(
              "flex items-center justify-center shrink-0",
              scaleOnHover && "transition-transform duration-300 hover:scale-110"
            )}
            style={{
              height: typeof logoHeight === 'number' ? `${logoHeight}px` : logoHeight,
            }}
          >
            {renderItem ? (
              renderItem(item, index)
            ) : (
              typeof item.logo === "string" ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-auto object-contain"
                  style={{ pointerEvents: "none" }}
                />
              ) : (
                item.logo
              )
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;

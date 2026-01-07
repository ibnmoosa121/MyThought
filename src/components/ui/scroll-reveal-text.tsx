import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, useMemo } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const ScrollRevealText = ({ text, className = "", delay = 0, tag: Tag = 'h2' }: ScrollRevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      },
    },
  };

  const words = text.split(" ");
  
  // Memoize the component creation to prevent re-renders
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = useMemo(() => motion(Tag as any), [Tag]);

  return (
    <Component
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-[0.2em]">
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

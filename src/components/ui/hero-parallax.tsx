"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const firstRow = isMobile ? products.slice(0, 3) : products.slice(0, 7);
  const secondRow = isMobile ? products.slice(3, 6) : products.slice(7, 14);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 20, bounce: 0 };

  const translateRangeX = isMobile ? 250 : 1000;
  const rotateXVal = isMobile ? 8 : 15;
  const rotateZVal = isMobile ? 10 : 20;
  const translateYRange = isMobile ? [-40, 20] : [-100, 50];

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, translateRangeX]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -translateRangeX]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [rotateXVal, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [rotateZVal, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], translateYRange),
    springConfig
  );

  // Background Parallax Effects
  const bgTranslateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 100 : 300]),
    springConfig
  );

  const bgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 15 : 45]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="flex min-h-[700px] h-[95vh] md:h-[130vh] lg:h-[150vh] pt-12 pb-2 md:py-20 overflow-hidden antialiased relative flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
    >
      <Header />

      <motion.div
        style={{
          y: bgTranslateY,
          rotate: bgRotate,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute inset-0 design-grid opacity-[0.03]" />
      </motion.div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-12 md:space-x-20 mb-6 sm:mb-10">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx}
              isCritical={idx < 3}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-16 md:mb-20 space-x-6 sm:space-x-12 md:space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              index={idx + (mounted && isMobile ? 3 : 7)}
              isCritical={false}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

import { ScrollRevealText } from "./scroll-reveal-text";

export const Header = () => {
  return (
    <div className="max-w-xl md:max-w-7xl relative mx-auto pt-32 pb-6 md:pt-40 md:pb-24 px-6 md:px-4 w-full left-0 top-0 z-20 flex flex-col items-start text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-6 tracking-wide">
        <span>GCC STUDIO</span>
        <span className="text-zinc-600">//</span>
        <span>ENGINEERING & ADVISORY</span>
      </div>
      <ScrollRevealText
        text="Digital systems and"
        className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight w-full text-left"
        delay={0.2}
        animateOnMount={true}
      />
      <ScrollRevealText
        text="strategic engineering"
        className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-300 tracking-tight w-full text-left"
        delay={0.3}
        animateOnMount={true}
      />
      <ScrollRevealText
        text="Stebup develops custom software architectures, analytics infrastructure, and specialized operational capability for growth-stage companies and institutions across the Gulf."
        className="max-w-2xl text-base md:text-lg mt-6 text-zinc-400 font-normal tracking-normal leading-relaxed text-left"
        delay={0.5}
        animateOnMount={true}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  index,
  isCritical = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  index: number;
  isCritical?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      initial={{
        y: 50,
        opacity: 0,
        scale: 0.9,
      }}
      animate={isCritical ? {
        y: 0,
        opacity: 1,
        scale: 1,
      } : undefined}
      whileInView={!isCritical ? {
        y: 0,
        opacity: 1,
        scale: 1,
      } : undefined}
      viewport={!isCritical ? { once: true, margin: "-20px" } : undefined}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      key={product.title}
      className="group/product h-48 w-[16rem] sm:h-56 sm:w-[18rem] md:h-64 md:w-[20rem] relative shrink-0 rounded-xl overflow-hidden border border-white/10 [transform-style:preserve-3d] will-change-transform bg-zinc-950"
    >
      <motion.div
        className="h-full w-full will-change-transform"
      >
        <a
          href={product.link}
          className="block h-full w-full"
        >
          <img
            src={product.thumbnail}
            height="400"
            width="400"
            className="object-cover object-center absolute h-full w-full inset-0 transition-opacity duration-300 opacity-90 group-hover/product:opacity-100"
            alt={product.title}
            loading={isCritical ? "eager" : "lazy"}
            fetchPriority={isCritical ? "high" : "auto"}
            decoding="async"
          />
        </a>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <h2 className="text-white font-medium text-sm md:text-base">
            {product.title}
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 opacity-0 group-hover/product:opacity-100 transition-opacity duration-200">
            VIEW →
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

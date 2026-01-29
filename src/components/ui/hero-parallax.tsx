"use client";
import { useRef } from "react";
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
  const firstRow = products.slice(0, 7);
  const secondRow = products.slice(7, 14);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 20, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 50]),
    springConfig
  );

  // Background Parallax Effects
  const bgTranslateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );

  const bgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 45]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-auto md:h-[130vh] lg:h-[150vh] py-10 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* Standardized Parallax Background Layer */}
      <motion.div
        style={{
          y: bgTranslateY,
          rotate: bgRotate,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute inset-0 design-grid opacity-[0.05]" />

        {/* Standardized Glow Orbs */}
        <div className="theme-glow absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-white/5" />
        <div className="theme-glow absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-white/5 animation-delay-2000" />
        <div className="theme-glow absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-white/5 animation-delay-4000" />
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 md:space-x-20 mb-6 md:mb-10">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 md:mb-20 space-x-10 md:space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              index={idx + 7}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Section Merger */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </div>
  );
};

import { ScrollRevealText } from "./scroll-reveal-text";

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-16 pb-8 md:pt-40 md:pb-24 px-6 md:px-4 w-full left-0 top-0 z-20">
      <ScrollRevealText
        text="The Ultimate"
        className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
        delay={0.2}
      />
      <ScrollRevealText
        text="development studio"
        className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
        delay={0.3}
      />
      <ScrollRevealText
        text="We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products."
        className="max-w-2xl text-base md:text-xl mt-6 text-zinc-400 font-medium tracking-tight"
        delay={0.5}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  index,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  index: number;
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
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -15,
        scale: 1.05,
        zIndex: 50,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      whileTap={{ scale: 0.95 }}
      key={product.title}
      className="group/product h-48 w-[15rem] md:h-64 md:w-[20rem] relative shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 [transform-style:preserve-3d] will-change-transform"
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
            className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-110"
            alt={product.title}
          />
        </a>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <h2 className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white font-bold text-lg transform translate-y-2 group-hover/product:translate-y-0 transition-all duration-300">
          {product.title}
        </h2>
      </motion.div>
    </motion.div>
  );
};

"use client";
import React from "react";
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
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

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
      className="h-[150vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      {/* Parallax Background Layer */}
      <motion.div 
        style={{
            y: bgTranslateY,
            rotate: bgRotate,
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        {/* Floating Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

import { ScrollRevealText } from "./scroll-reveal-text";

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-5 md:py-5 px-4 w-full left-0 top-0 z-20">
      <ScrollRevealText
        text="The Ultimate"
        className="text-2xl md:text-7xl font-bold dark:text-white"
        delay={0.2}
      />
      <ScrollRevealText
        text="development studio"
        className="text-2xl md:text-7xl font-bold dark:text-white"
        delay={0.2}
      />
      <ScrollRevealText
        text="We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products."
        className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
        delay={0.5}
      />
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      initial={{
        y: 20,
        opacity: 0
      }}
      animate={{
        y: [0, -10, 0],
        opacity: 1
      }}
      transition={{
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5
        }
      }}
      key={product.title}
      className="group/product h-64 w-[20rem] relative shrink-0 rounded-2xl overflow-hidden shadow-lg border border-white/10"
    >
      <a
        href={product.link}
        className="block h-full w-full"
      >
        <img
          src={product.thumbnail}
          height="400"
          width="400"
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-110"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <h2 className="absolute bottom-6 left-6 opacity-0 group-hover/product:opacity-100 text-white font-bold text-lg transform translate-y-2 group-hover/product:translate-y-0 transition-all duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

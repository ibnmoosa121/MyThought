"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const backgroundColors = [
  "#0f172a", // slate-900
  "#000000", // black
  "#171717", // neutral-900
];
const linearGradients = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
];

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[50rem] w-full justify-between space-x-10 overflow-y-auto rounded-none p-4 md:p-20 scrollbar-hide"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full md:w-1/2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 md:my-40">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  color: activeCard === index ? "rgb(255, 255, 255)" : "rgb(156, 163, 175)",
                }}
                className="text-3xl md:text-5xl font-bold text-slate-100 mb-6"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-1/2 -translate-y-1/2 hidden h-[30rem] w-full md:w-1/2 overflow-hidden rounded-3xl bg-white lg:block shadow-2xl border border-white/10",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-10 md:left-20 flex items-center gap-2 text-white/50"
        animate={{
          opacity: activeCard === 0 ? 1 : 0,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 0.3 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span className="text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

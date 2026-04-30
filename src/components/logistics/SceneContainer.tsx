import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Package } from 'lucide-react';
import { DottedLine } from './SVGElements';

gsap.registerPlugin(ScrollTrigger);

interface SceneContainerProps {
  children: React.ReactNode;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parcelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the progress line height
      gsap.to('.progress-line', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // Animate the moving parcel along the screen
      gsap.to(parcelRef.current, {
        y: () => {
          // Move from top to bottom of the container
          const height = containerRef.current?.offsetHeight || 0;
          return height - 100; // 100 is offset
        },
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full pb-32">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute top-2/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute top-3/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* The Central Route Line */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 pointer-events-none z-0 hidden md:block">
        <DottedLine />
      </div>

      {/* The Moving Parcel Tracker */}
      <div 
        ref={parcelRef} 
        className="absolute left-1/2 top-0 -translate-x-1/2 -mt-6 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-base-100 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
      >
        <Package size={24} className="text-cyan-400" />
      </div>

      {/* Main Content (Steps) */}
      <div className="relative z-10 flex flex-col gap-24 md:gap-48 pt-32">
        {children}
      </div>
    </div>
  );
};

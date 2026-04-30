import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';

export interface StepSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
  className?: string;
  id: string;
}

export const StepSection: React.FC<StepSectionProps> = ({ title, description, icon, align, className, id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation (slides in from left or right)
      gsap.fromTo(contentRef.current,
        { 
          opacity: 0, 
          x: align === 'left' ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Icon animation (scale and fade)
      gsap.fromTo(iconRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [align]);

  return (
    <div ref={sectionRef} id={id} className={cn("relative min-h-[60vh] flex items-center justify-center w-full z-10", className)}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {align === 'left' ? (
          <>
            <div ref={contentRef} className="order-2 md:order-1 text-left flex flex-col justify-center items-start pl-16 md:pl-8 lg:pl-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{title}</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">{description}</p>
            </div>
            <div ref={iconRef} className="order-1 md:order-2 flex justify-center md:justify-end pl-16 md:pl-0 pr-8 lg:pr-16">
              {icon}
            </div>
          </>
        ) : (
          <>
            <div ref={iconRef} className="order-1 flex justify-center md:justify-start pl-16 md:pl-8 lg:pl-16">
              {icon}
            </div>
            <div ref={contentRef} className="order-2 text-left flex flex-col justify-center items-start pl-16 md:pl-12 lg:pr-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{title}</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FileText, Search, CheckCircle2 } from 'lucide-react';
import { IconWrapper } from './SVGElements';

export const CustomsSpecialist = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Show document
      tl.fromTo(docRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" }
      )
      // Magnifying glass inspects
      .fromTo(searchRef.current,
        { opacity: 0, x: -40, y: -40, scale: 0.8 },
        { opacity: 1, x: 20, y: 20, scale: 1, duration: 0.6, ease: "power2.out" }
      )
      .to(searchRef.current, {
        x: -20, y: 10, duration: 0.5, ease: "power1.inOut"
      })
      .to(searchRef.current, {
        x: 0, y: 0, duration: 0.5, ease: "power1.inOut"
      })
      // Magnifying glass fades
      .to(searchRef.current, {
        opacity: 0, scale: 0.8, duration: 0.3
      })
      // Stamp appears
      .fromTo(stampRef.current,
        { opacity: 0, scale: 2, rotation: -20 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: "back.out(3)" }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-64 h-64 flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      {/* Main Document */}
      <IconWrapper ref={docRef} glowColor="rgba(52, 211, 153, 0.2)" className="w-40 h-48 flex-col items-center justify-center gap-4 bg-white/10 relative z-10">
        <FileText size={48} className="text-emerald-300" strokeWidth={1} />
        <div className="w-20 h-2 bg-emerald-500/20 rounded-full"></div>
        <div className="w-16 h-2 bg-emerald-500/20 rounded-full"></div>
      </IconWrapper>

      {/* Magnifying Glass */}
      <div ref={searchRef} className="absolute z-20 -top-4 -right-4 w-20 h-20 bg-base-100/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,255,255,0.2)' }}>
        <Search size={32} className="text-cyan-400" />
      </div>

      {/* Stamp (Checkmark) */}
      <div ref={stampRef} className="absolute z-30 bottom-8 right-4 origin-center">
        <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(52,211,153,0.5)] transform -rotate-12">
          <CheckCircle2 size={32} className="text-emerald-400" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

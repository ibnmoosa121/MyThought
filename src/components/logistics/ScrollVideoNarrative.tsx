import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ShieldCheck, Globe2, Truck, PackageCheck, Zap, Package } from 'lucide-react';
import { 
  PickupVisual, 
  WarehouseVisual, 
  CustomsVisual, 
  TransitVisual, 
  LastMileVisual, 
  DeliveryVisual 
} from './NarrativeVisuals';


const steps = [
  {
    id: "pickup",
    title: "Doorstep Pickup",
    description: "Your journey begins at home. Our professional couriers arrive directly at your door to securely collect and label your shipment for the journey ahead.",
    visual: PickupVisual,
    icon: <Zap className="w-6 h-6 text-cyan-400" />
  },
  {
    id: "warehouse",
    title: "Smart Hub Sorting",
    description: "From your door to our smart hub. Advanced AI-driven sorting systems categorize your parcel, ensuring it takes the most efficient route to its destination.",
    visual: WarehouseVisual,
    icon: <PackageCheck className="w-6 h-6 text-purple-400" />
  },
  {
    id: "customs",
    title: "Global Compliance",
    description: "Crossing borders with ease. We manage all documentation and customs requirements in the background, securing rapid clearance for international shipments.",
    visual: CustomsVisual,
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
  },
  {
    id: "transit",
    title: "International Transit",
    description: "The long-haul leg. Whether by air or sea, your cargo is monitored 24/7 as it moves through our optimized global transportation network.",
    visual: TransitVisual,
    icon: <Globe2 className="w-6 h-6 text-blue-400" />
  },
  {
    id: "last-mile",
    title: "Local Distribution",
    description: "The final stretch. Arriving at the destination city, your package is loaded onto a local delivery vehicle for its final destination.",
    visual: LastMileVisual,
    icon: <Truck className="w-6 h-6 text-orange-400" />
  },
  {
    id: "delivery",
    title: "Door-to-Door Delivery",
    description: "Mission accomplished. Your parcel is delivered directly to the recipient's hands, with instant digital confirmation and proof of delivery.",
    visual: DeliveryVisual,
    icon: <CheckCircle2 className="w-6 h-6 text-green-400" />
  }
];

gsap.registerPlugin(ScrollTrigger);

import { StepSection } from './StepSection';

// Math constants for the wavy line
const WAVE_POINTS = 200;
const SVG_HEIGHT = 1000;
const SVG_WIDTH = 100;
const WAVE_AMPLITUDE = 40; 
const WAVE_CYCLES = steps.length / 2;

const wavePoints = Array.from({ length: WAVE_POINTS }).map((_, i) => {
  const progress = i / (WAVE_POINTS - 1);
  const x = (SVG_WIDTH / 2) + Math.sin(progress * Math.PI * 2 * WAVE_CYCLES) * WAVE_AMPLITUDE;
  const y = progress * SVG_HEIGHT;
  return `${x},${y}`;
}).join(' ');

export const ScrollNarrative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const parcelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial setup for the parcel
    gsap.set(parcelRef.current, { xPercent: -50, x: 0 });

    // Animate progress mask height
    gsap.to('.progress-mask-rect', {
      attr: { height: SVG_HEIGHT },
      ease: 'none',
      scrollTrigger: {
        trigger: stepsContainerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });

    const isDesktop = window.matchMedia('(min-width: 768px)');

    // Animate the parcel icon down the wavy split
    gsap.to(parcelRef.current, {
      y: () => stepsContainerRef.current?.offsetHeight || 0,
      ease: 'none',
      scrollTrigger: {
        trigger: stepsContainerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const desktop = isDesktop.matches;
          
          // Responsive constants
          const CONTAINER_WIDTH = desktop ? 192 : 48; // w-48 vs w-12
          const AMPLITUDE_PX = CONTAINER_WIDTH * (desktop ? 0.4 : 0.3);
          
          // Calculate X position matching the sine wave
          let waveX = Math.sin(progress * Math.PI * steps.length) * AMPLITUDE_PX;
          
          // Smoothly steer towards the left at the end
          if (progress > 0.92) {
            const dockProgress = (progress - 0.92) / 0.08;
            const targetX = desktop ? -450 : -20; 
            waveX = gsap.utils.interpolate(waveX, targetX, dockProgress);
            
            const opacityProgress = Math.max(0, (progress - 0.96) / 0.04);
            gsap.set(parcelRef.current, { opacity: 1 - opacityProgress });
          } else {
            gsap.set(parcelRef.current, { opacity: 1 });
          }

          // Calculate rotation derivative for lean effect
          const leanAngle = Math.cos(progress * Math.PI * steps.length) * 15;
          
          gsap.set(parcelRef.current, { 
            x: waveX,
            rotate: leanAngle
          });

          // Pan the entire container horizontally (Desktop Only)
          if (desktop) {
            let panX = -waveX;
            if (progress > 0.8) {
              const panFadeProgress = Math.min(1, (progress - 0.8) / 0.12);
              const panAtStartOfFade = -Math.sin(0.8 * Math.PI * steps.length) * AMPLITUDE_PX;
              panX = gsap.utils.interpolate(panAtStartOfFade, 0, panFadeProgress);
            }
            gsap.set(stepsContainerRef.current, { x: panX });
          }
        }
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full bg-base-100 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">The Logistics Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </div>

        <div ref={stepsContainerRef} className="relative flex flex-col gap-20 md:gap-32 pt-10" style={{ willChange: 'transform' }}>
          {/* Wavy Split Line - Responsive Position */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 md:w-48 z-30 pointer-events-none">
            <svg className="absolute left-0 top-0 h-full w-full overflow-visible" viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} preserveAspectRatio="none">
              <polyline 
                points={wavePoints} 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                vectorEffect="non-scaling-stroke"
              />
              <mask id="progress-mask">
                <rect className="progress-mask-rect" x="0" y="0" width={SVG_WIDTH} height="0" fill="white" />
              </mask>
              <polyline 
                points={wavePoints} 
                fill="none" 
                stroke="#00F0FF" 
                strokeWidth="4" 
                mask="url(#progress-mask)"
                vectorEffect="non-scaling-stroke"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.5))' }}
              />
            </svg>
          </div>

          {/* Animated Parcel Icon - Responsive Size */}
          <div 
            ref={parcelRef} 
            className="absolute left-6 md:left-1/2 top-0 -mt-6 md:-mt-10 z-40 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 pointer-events-none"
            style={{ willChange: 'transform' }}
          >
            <div className="w-10 h-10 md:w-16 md:h-16 bg-cyan-500/10 rounded-xl md:rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-sm">
                <Package className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />
            </div>
          </div>

          {steps.map((step, index) => {
            const Visual = step.visual;
            return (
              <StepSection
                key={step.id}
                id={step.id}
                title={`0${index + 1}. ${step.title}`}
                description={step.description}
                icon={
                  <div className="w-full h-[400px] flex items-center justify-center relative">
                    <Visual />
                  </div>
                }
                align={index % 2 === 0 ? 'right' : 'left'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

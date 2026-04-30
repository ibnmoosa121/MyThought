import React, { forwardRef } from 'react';
import { Package, Truck, Warehouse, FileCheck, Ship, Home } from 'lucide-react';
import { cn } from '../../lib/utils';

export const IconWrapper = forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string, glowColor?: string }>(
  ({ children, className, glowColor = 'rgba(0, 240, 255, 0.5)' }, ref) => (
  <div ref={ref} className={cn("relative flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6", className)}
       style={{ boxShadow: `0 0 40px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.05)` }}>
    {children}
  </div>
));
IconWrapper.displayName = 'IconWrapper';

export const ParcelIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-20 h-20 text-cyan-400", className)} glowColor="rgba(34, 211, 238, 0.4)">
    <Package size={40} strokeWidth={1.5} />
  </IconWrapper>
);

export const VanIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-24 h-24 text-blue-400", className)} glowColor="rgba(96, 165, 250, 0.4)">
    <Truck size={48} strokeWidth={1.5} />
  </IconWrapper>
);

export const WarehouseIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-24 h-24 text-purple-400", className)} glowColor="rgba(192, 132, 252, 0.4)">
    <Warehouse size={48} strokeWidth={1.5} />
  </IconWrapper>
);

export const CustomsIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-24 h-24 text-emerald-400", className)} glowColor="rgba(52, 211, 153, 0.4)">
    <FileCheck size={48} strokeWidth={1.5} />
  </IconWrapper>
);

export const TransitIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-24 h-24 text-sky-400", className)} glowColor="rgba(56, 189, 248, 0.4)">
    <Ship size={48} strokeWidth={1.5} />
  </IconWrapper>
);

export const HomeIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={cn("w-24 h-24 text-pink-400", className)} glowColor="rgba(244, 114, 182, 0.4)">
    <Home size={48} strokeWidth={1.5} />
  </IconWrapper>
);

export const DottedLine = () => (
  <svg className="absolute left-1/2 top-0 h-full -translate-x-1/2 w-1 pointer-events-none z-0" preserveAspectRatio="none">
    <line x1="2" y1="0" x2="2" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeDasharray="8 8" />
    <line className="progress-line" x1="2" y1="0" x2="2" y2="100%" stroke="#00F0FF" strokeWidth="4" style={{ transformOrigin: 'top', transform: 'scaleY(0)' }} />
  </svg>
);

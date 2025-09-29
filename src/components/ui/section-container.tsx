/**
 * Section Container Component
 * 
 * A container component that wraps sections and provides fade transition effects
 * when switching between sections.
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionContainerProps {
  id: string;
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  isActive,
  children,
  className,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          id={id}
          key={id}
          className={cn(
            'absolute top-0 left-0 w-full h-full',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="h-full py-8 px-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionContainer;
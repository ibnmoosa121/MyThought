/**
 * Section Navigation Component
 * 
 * A smooth navigation component that provides fluid transitions between sections
 * with animation completion detection to ensure seamless user experience.
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionNavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  position?: 'left' | 'right' | 'bottom';
  className?: string;
  animationDuration?: number;
}

export const SectionNavigation = ({
  sections,
  activeSection,
  onSectionChange,
  position = 'right',
  className,
  animationDuration = 800,
}: SectionNavigationProps) => {
  const [currentSection, setCurrentSection] = useState<string>(activeSection || sections[0]?.id || '');
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (activeSection && activeSection !== currentSection) {
      setCurrentSection(activeSection);
    }
  }, [activeSection]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    if (isAnimating || currentSection === sectionId) return;
    
    setIsAnimating(true);
    
    // No scrolling - directly update the section
    setCurrentSection(sectionId);
    
    // Notify parent component about section change
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
    
    // Reset animation state after transition completes
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const positionClasses = {
    left: 'fixed left-6 top-1/2 -translate-y-1/2 flex-col',
    right: 'fixed right-6 top-1/2 -translate-y-1/2 flex-col',
    bottom: 'fixed bottom-6 left-1/2 -translate-x-1/2 flex-row'
  };

  return (
    <motion.div 
      className={cn(
        'flex gap-6 z-50 backdrop-blur-sm bg-base-100/30 p-3 rounded-full border border-base-300/50',
        positionClasses[position],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      role="navigation"
      aria-label="Section Navigation"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => handleSectionClick(section.id)}
          className={cn(
            'relative rounded-full transition-all duration-500 ease-out',
            position === 'bottom' ? 'w-4 h-4' : 'w-4 h-4',
            currentSection === section.id 
              ? 'bg-primary scale-125 shadow-lg shadow-primary/20' 
              : 'bg-base-300 hover:bg-primary/50'
          )}
          whileHover={{ scale: 1.35 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Navigate to ${section.label}`}
          aria-current={currentSection === section.id ? 'page' : undefined}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleSectionClick(section.id);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              const nextIndex = (index + 1) % sections.length;
              handleSectionClick(sections[nextIndex].id);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
              const prevIndex = (index - 1 + sections.length) % sections.length;
              handleSectionClick(sections[prevIndex].id);
            }
          }}
        >
          <AnimatePresence>
            {currentSection === section.id && (
              <motion.span
                className="absolute -inset-2 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0.5
                }}
              />
            )}
          </AnimatePresence>
          
          <motion.span
            className={cn(
              'absolute whitespace-nowrap text-xs font-medium bg-base-100/80 px-2 py-1 rounded-md shadow-sm',
              position === 'left' ? 'left-8 top-0 -translate-y-1/2' : 
              position === 'right' ? 'right-8 top-0 -translate-y-1/2' : 
              'bottom-8 left-1/2 -translate-x-1/2'
            )}
            initial={{ opacity: 0, x: position === 'left' ? -10 : position === 'right' ? 10 : 0, y: position === 'bottom' ? 10 : 0 }}
            whileHover={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {section.label}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SectionNavigation;
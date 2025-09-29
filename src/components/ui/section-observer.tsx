/**
 * Section Observer Component
 * 
 * Uses Intersection Observer API to detect which sections are currently in view
 * and provides this information to the navigation component.
 */

import React, { useEffect, useState } from 'react';

interface SectionObserverProps {
  sectionIds: string[];
  onSectionChange: (sectionId: string) => void;
  threshold?: number;
  rootMargin?: string;
}

export const SectionObserver: React.FC<SectionObserverProps> = ({
  sectionIds,
  onSectionChange,
  threshold = 0.3,
  rootMargin = '0px',
}) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    let transitionTimeout: NodeJS.Timeout | null = null;

    // Create an observer for each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      
      if (!element) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // If section is intersecting and we're not in a transition
            if (entry.isIntersecting && !isTransitioning) {
              setActiveSection(sectionId);
              onSectionChange(sectionId);
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
      
      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup function
    return () => {
      observers.forEach((observer) => observer.disconnect());
      if (transitionTimeout) clearTimeout(transitionTimeout);
    };
  }, [sectionIds, threshold, rootMargin, onSectionChange, isTransitioning]);

  // This effect handles the transition state
  useEffect(() => {
    if (activeSection) {
      setIsTransitioning(true);
      
      // Allow time for animation to complete before detecting new sections
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Match this with your animation duration
      
      return () => clearTimeout(timeout);
    }
  }, [activeSection]);

  // This component doesn't render anything visible
  return null;
};

export default SectionObserver;
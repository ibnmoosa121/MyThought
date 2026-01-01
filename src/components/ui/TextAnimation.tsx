import { useEffect, useRef, createElement } from 'react';
import type { ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  stagger?: number;
  duration?: number;
  delay?: number;
  y?: number;
  opacity?: number;
  ease?: string;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const TextAnimation = ({
  children,
  tag = 'div',
  stagger = 0.05,
  duration = 0.8,
  delay = 0,
  y = 20,
  opacity = 0,
  ease = 'power3.out',
  className = '',
  once = true,
  threshold = 0.1,
}: TextAnimationProps) => {
  const textRef = useRef<HTMLElement>(null);
  const Component = tag as ElementType;
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    // Split text into words - safer approach
    const splitText = () => {
      // Store the original text content
      const text = element.textContent || '';
      // Clear the element safely
      element.textContent = '';
      
      // Split by spaces
      const words = text.split(' ').filter(word => word.length > 0);
      
      // Create spans for each word
      words.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block';
        wordSpan.style.overflow = 'hidden';
        
        const innerSpan = document.createElement('span');
        innerSpan.className = 'inline-block';
        innerSpan.textContent = word;
        
        wordSpan.appendChild(innerSpan);
        element.appendChild(wordSpan);
        
        // Add space after each word except the last one
        if (i < words.length - 1) {
          const space = document.createTextNode(' ');
          element.appendChild(space);
        }
      });
      
      return element.querySelectorAll('span > span');
    };
    
    const innerElements = splitText();
    
    // Initial state
    gsap.set(innerElements, { y, opacity });
    
    // Animation with ScrollTrigger
    const animation = gsap.to(innerElements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      }
    });
    
    return () => {
      animation.kill();
    };
  }, [stagger, duration, delay, y, opacity, ease, once, threshold]);
  
  return createElement(Component, { 
    ref: textRef, 
    className: `${className} relative`, // Add relative positioning
    style: { position: 'relative' } // Ensure non-static positioning
  }, children);
};

export default TextAnimation;
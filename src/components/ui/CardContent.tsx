import { useEffect, useState } from 'react';
import { useCardStore } from '../../stores/card-store';
import { cardContents } from '../../data/card-content';
import TextAnimation from './TextAnimation';
import gsap from 'gsap';

export const CardContent = () => {
  const activeCardIndex = useCardStore((state) => state.activeCardIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [content, setContent] = useState(cardContents[0]);
  
  useEffect(() => {
    // Skip initial render
    if (isAnimating) return;
    
    const updateContent = async () => {
      setIsAnimating(true);
      
      // Fade out current content
      await gsap.to('.card-content-text', {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.1
      });
      
      // Update content
      setContent(cardContents[activeCardIndex]);
      
      // Reset position for animation
      gsap.set('.card-content-text', { y: 20 });
      
      // Fade in new content
      await gsap.to('.card-content-text', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.1
      });
      
      setIsAnimating(false);
    };
    
    updateContent();
  }, [activeCardIndex]);
  
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-left mb-16 pl-4 md:pl-8">
        <div className="card-content-text">
          <TextAnimation 
            tag="h2" 
            className="text-4xl md:text-5xl font-bold text-white mb-6" 
            stagger={0.03} 
            y={30}
          >
            {content.title}
          </TextAnimation>
        </div>
        
        <div className="card-content-text">
          <TextAnimation 
            tag="p" 
            className="text-xl text-white/70 max-w-3xl" 
            delay={0.3} 
            stagger={0.02}
          >
            {content.description}
          </TextAnimation>
        </div>
        
        <div className="card-content-text mt-4">
          <span className="text-xs font-mono bg-primary/30 px-2 py-1 rounded-full">
            {content.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
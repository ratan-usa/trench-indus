"use client"
import React, { useEffect, useState, useRef } from 'react';

const HeroScrollSequence = () => {
  const startFrame = 113;
  const totalFrames = 300;
  const [frameIndex, setFrameIndex] = useState(startFrame);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload some images to prevent flickering on first scroll
    for (let i = startFrame; i <= Math.min(startFrame + 20, totalFrames); i++) {
      const img = new Image();
      img.src = `/hero-images/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled within the container
      // The container will be taller than the window to allow scrolling
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      // Ensure we're within the bounds of the container
      if (scrolled >= 0 && scrolled <= scrollableDistance) {
        const progress = scrolled / scrollableDistance;
        // Calculate the frame index based on progress (startFrame to 300)
        const frameCount = totalFrames - startFrame;
        let frame = Math.floor(progress * frameCount) + startFrame;
        
        // Clamp frame
        frame = Math.max(startFrame, Math.min(frame, totalFrames));
        setFrameIndex(frame);
      } else if (scrolled < 0) {
        setFrameIndex(startFrame);
      } else if (scrolled > scrollableDistance) {
        setFrameIndex(totalFrames);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format frame number with leading zeros
  const currentImageSrc = `/hero-images/ezgif-frame-${frameIndex.toString().padStart(3, '0')}.jpg`;

  return (
    // Container height determines how long the scroll animation lasts
    // Increased to 600vh to make the scroll slower and smoother
    <div ref={containerRef} className="relative h-[600vh] bg-[#c92526]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-[50px]">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={currentImageSrc} 
            alt="Hero Sequence" 
            className="w-full h-full object-cover"
            // Fetch priority high for the first image
            fetchPriority="high"
          />
          
          {/* Optional overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/30">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 tracking-tight drop-shadow-lg">
              Experience the Future
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl drop-shadow-md">
              Scroll to explore our revolutionary infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScrollSequence;

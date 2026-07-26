'use client';

import React, { useState, useRef } from 'react';
import { Layers, ShieldCheck, ArrowRight, Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function InfiniteRiserShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="bg-[#0F0F0F] text-white py-24 font-sans border-b border-zinc-800 relative overflow-hidden">
      
      {/* Background Red Glow Matching the Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-6 md:px-8 lg:px-12 space-y-12 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="  space-y-3">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#CC0000]" /> Exploded Assembly Sequence
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Adjustable Round Riser <br />
            <span className="text-[#CC0000]">Infinite CAD Showcase.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed">
            Continuous exploded breakdown illustrating the outer flange frame, variable adjustment ring, turnbuckle set-screws, and top grate assembly.
          </p>
        </div>

        {/* --- GRID DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: AUTOPLAY VIDEO CONTAINER WITH INTERACTIVE PLAY/PAUSE (7 Columns) */}

          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Mechanical Expansion Technology
              </h3>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                Designed to eliminate full manhole frame excavations during road overlays. The internal turnbuckle assembly bites outward directly into existing structures for a zero-shift, high-impact traffic seal.
              </p>
            </div>

            <div className="space-y-3 border-t border-b border-zinc-800 py-6">
              <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>Heavy Traffic Load Certified</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>Excavation-Free Field Deployment</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#CC0000] shrink-0" />
                <span>Custom Rises and Fits Available</span>
              </div>
            </div>

            <a href="#contact" className="block pt-2">
              <Button className="w-full h-12 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                Request Specifications <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

          </div>
          {/* RIGHT: TECHNICAL FEATURES & CALL TO ACTION (5 Columns) */}

          <div className="lg:col-span-7">
            <div 
              onClick={togglePlayPause}
              className="relative aspect-[4/3] bg-[#CC0000] rounded-sm overflow-hidden border-2 border-zinc-800 shadow-2xl cursor-pointer group select-none"
            >
              <video
                ref={videoRef}
                src="/video/GIF paving risere with frame.748.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Pause/Play Hover Indicator Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                {!isPlaying && (
                  <div className="w-16 h-16 bg-[#0F0F0F] border border-zinc-700 text-white rounded-full flex items-center justify-center shadow-2xl">
                    <Play className="w-6 h-6 fill-current text-[#CC0000] ml-1" />
                  </div>
                )}
              </div>

              {/* Control Bar Overlay */}
              <div className="absolute bottom-4 left-4 z-20">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  size="sm"
                  className="bg-[#0F0F0F]/90 hover:bg-[#CC0000] text-white border border-zinc-800 font-bold text-xs uppercase px-3 h-9 flex items-center gap-2 transition-colors rounded-sm"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#CC0000] fill-current" /> Stop Motion
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-white fill-current" /> Play Motion
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
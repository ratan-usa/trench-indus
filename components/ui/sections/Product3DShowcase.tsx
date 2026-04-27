'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  Rotate3d,
  Maximize,
  ChevronRight,
  Box,
  Layers,
  Scan
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PRODUCT_VIDEOS = [
  {
    id: 1,
    title: "360° View: Round Riser",
    description: "Full rotation showing the variable height adjustment ring mechanism.",
    duration: "0:45",
    type: "360_ROTATION",
    src: "/assets/PAVING-RISERS/paving riser 1.5213.mp4",
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5200.png"
  },
  {
    id: 2,
    title: "Exploded View: Square Riser",
    description: "Technical breakdown of the corner interlocking system and frame strength.",
    duration: "1:10",
    type: "EXPLODED_VIEW",
    src: "/assets/PAVING-RISERS/paving riser 1.5213.mp4",
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5201.png"
  },
  {
    id: 3,
    title: "Installation Demo: Valve Box",
    description: "Step-by-step 3D animation of a standard valve box riser installation.",
    duration: "2:00",
    type: "ANIMATION",
    src: "/assets/PAVING-RISERS/paving riser 1.5213.mp4",
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5203.png"
  },
  {
    id: 4,
    title: "Stress Test Simulation",
    description: "Finite Element Analysis (FEA) visualization of load distribution.",
    duration: "0:30",
    type: "SIMULATION",
    src: "/assets/PAVING-RISERS/paving riser 1.5213.mp4",
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5204.png"
  }
];

export default function Product3DShowcase() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoPlayAll, setIsAutoPlayAll] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = PRODUCT_VIDEOS[activeVideoIndex];

  // Logic: Handle video switching when "Play All" is active
  const handleVideoEnd = () => {
    if (isAutoPlayAll) {
      if (activeVideoIndex + 1 < PRODUCT_VIDEOS.length) {
        // Play next video
        setActiveVideoIndex((prev) => prev + 1);
      } else {
        // End of playlist
        setIsAutoPlayAll(false);
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  // Effect: When active video changes, ensure it plays if we are in "Playing" mode
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeVideoIndex, isPlaying]);

  const handlePlayAll = () => {
    setActiveVideoIndex(0);
    setIsPlaying(true);
    setIsAutoPlayAll(true);
  };

  return (
    <section className="bg-zinc-950 text-white py-20 border-t border-zinc-900">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rotate3d className="text-[#CC0000] w-5 h-5 animate-spin-slow" />
              <span className="text-[#CC0000] font-bold uppercase tracking-widest text-sm">
                Interactive Showroom
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              3D Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Visualization</span>
            </h2>
          </div>

          <Button
            onClick={handlePlayAll}
            className={cn(
              "gap-2 font-bold uppercase tracking-wider px-8 h-12 transition-all",
              isAutoPlayAll
                ? "bg-[#CC0000] text-white animate-pulse"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {isAutoPlayAll ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAutoPlayAll ? "Playing All..." : "Play All 3D Tours"}
          </Button>
        </div>

        {/* --- MAIN PLAYER AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: The Main Screen */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#0F0F0F] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden group">

              {/* VIDEO PLAYER LOGIC */}
              {isPlaying ? (
                <video
                  ref={videoRef}
                  key={activeVideo.src} // Key ensures react rebuilds element on change
                  className="w-full h-full object-contain bg-[#0F0F0F]"
                  controls
                  autoPlay
                  onEnded={handleVideoEnd}
                >
                  <source src={activeVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                /* THUMBNAIL / IDLE STATE */
                <div className="absolute inset-0">
                  {/* Background Image */}
                  <Image
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    fill
                    className="object-cover opacity-60"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-[#0F0F0F]/30 transition-all z-10" onClick={() => setIsPlaying(true)}>
                    <div className="w-20 h-20 bg-[#CC0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                    <p className="mt-4 font-bold uppercase tracking-wider text-sm text-white drop-shadow-md">Start Interactive Tour</p>
                  </div>
                </div>
              )}

              {/* Video Info Overlay (Only show when NOT playing so controls aren't blocked, or keep at bottom) */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                  <div className="flex items-center gap-3 mb-1">
                    <Badge variant="outline" className="text-[#CC0000] border-[#CC0000] bg-[#CC0000]">
                      {activeVideo.type.replace('_', ' ')}
                    </Badge>
                    <span className="text-xs text-gray-400 font-mono">{activeVideo.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{activeVideo.title}</h3>
                  <p className="text-gray-300 text-sm max-w-xl">{activeVideo.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Playlist */}
          <div className="lg:col-span-1 bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 h-full flex flex-col">
            <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Up Next
            </h4>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {PRODUCT_VIDEOS.map((video, idx) => (
                <div
                  key={video.id}
                  onClick={() => {
                    setActiveVideoIndex(idx);
                    setIsPlaying(true);
                    setIsAutoPlayAll(false);
                  }}
                  className={cn(
                    "flex gap-4 p-3 rounded-md cursor-pointer transition-all border group",
                    activeVideoIndex === idx
                      ? "bg-[#0F0F0F] text-white border-[#CC0000]"
                      : "bg-[#0F0F0F] border-zinc-800 hover:border-zinc-600"
                  )}
                >
                  {/* Thumbnail Placeholder */}
                  <div className="relative w-24 h-16 bg-zinc-800 rounded overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={video.thumbnail}
                      alt="thumb"
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100"
                    />

                    {activeVideoIndex === idx && isPlaying && (
                      <div className="absolute inset-0 bg-[#0F0F0F]/50 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col justify-center">
                    <h5 className={cn("font-bold text-sm leading-tight mb-1 group-hover:text-[#CC0000] transition-colors", activeVideoIndex === idx ? "text-[#CC0000]" : "text-white")}>
                      {video.title}
                    </h5>
                    <p className="text-xs text-gray-500 line-clamp-1">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
              <p className="text-xs text-gray-500 mb-3">Need 3D CAD files for your project?</p>
              <Button variant="outline" className="w-full text-xs text-[#CC0000] border-[#CC0000] hover:bg-white hover:text-black uppercase">
                Request CAD / BIM Files <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
  Infinity
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
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving-video.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Round%20No%20screw%20steel.661.png`
  },
  {
    id: 2,
    title: "Exploded View: Square Riser",
    description: "Technical breakdown of the corner interlocking system and frame strength.",
    duration: "1:10",
    type: "EXPLODED_VIEW",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving-video.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Square%20ductile%20steel.664.png`
  },
  {
    id: 3,
    title: "Installation Demo: Valve Box",
    description: "Step-by-step 3D animation of a standard valve box riser installation.",
    duration: "2:00",
    type: "ANIMATION",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving-video.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/D%20shape%20Riser%20with%20cast%20iron.636.png`
  },
  {
    id: 4,
    title: "Stress Test Simulation",
    description: "Finite Element Analysis (FEA) visualization of load distribution.",
    duration: "0:30",
    type: "SIMULATION",
    src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/video/paving-video.mp4`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Round%20Riser%20with%20screw%20Raw%20Finish.617.png`
  }
];

export default function Product3DShowcase2() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Default to true to boot up immediately
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = PRODUCT_VIDEOS[activeVideoIndex];

  // Logic: Handle automatic cyclical looping when a sequence terminates
  const handleVideoEnd = () => {
    // Cycles seamlessly to the next index, wrapping back to 0 at the end of the array
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % PRODUCT_VIDEOS.length);
  };

  // Effect: Forces live streaming pipeline reloads when target index updates
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay blocked by browser configurations until active click:", err);
        });
      }
    }
  }, [activeVideoIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-zinc-950 text-white py-4 border-t border-zinc-900">
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
            onClick={togglePlayPause}
            className={cn(
              "gap-2 font-bold uppercase tracking-wider px-8 h-12 transition-all rounded-sm shadow-md",
              isPlaying
                ? "bg-[#CC0000] text-white hover:bg-[#B30000]"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Loop Active" : "Resume Loop"}
          </Button>
        </div>

        {/* --- MAIN PLAYER AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: Main Player Aspect Screen Window */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#0F0F0F] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden group">

              {/* Viewport Dynamic Overlay Badge */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-zinc-800 rounded px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-gray-400 z-20 flex items-center gap-2 pointer-events-none">
                <Infinity className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" /> Continuous Loop Playback
              </div>

              {/* CORE LOOPED PLAYBACK WINDOW */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-[#0F0F0F]"
                controls
                autoPlay={isPlaying}
                muted // Muted parameter handles cross-browser autoplay authorization smoothly
                onEnded={handleVideoEnd}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Bottom Telemetry Metadata Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none">
                <div className="flex items-center gap-3 mb-1">
                  <Badge className="bg-[#CC0000] text-white border-none rounded-none uppercase text-[10px] font-black tracking-wider px-2 py-0.5">
                    {activeVideo.type.replace('_', ' ')}
                  </Badge>
                  <span className="text-xs text-zinc-400 font-mono font-bold tracking-wide">{activeVideo.duration}</span>
                </div>
                <h3 className="text-xl font-black uppercase text-white tracking-wide mt-1">{activeVideo.title}</h3>
                <p className="text-gray-400 text-xs font-medium max-w-xl leading-relaxed mt-0.5">{activeVideo.description}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Model Selector Sidebar Playlist */}
          <div className="lg:col-span-1 bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 h-full flex flex-col min-h-0 overflow-hidden">
            <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2 shrink-0">
              <Layers className="w-4 h-4" />
              Playlist Sequence Loop
            </h4>

            <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-grow min-h-0">
              {PRODUCT_VIDEOS.map((video, idx) => {
                const isCurrent = activeVideoIndex === idx;
                return (
                  <div
                    key={video.id}
                    onClick={() => {
                      setActiveVideoIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={cn(
                      "flex gap-4 p-3 rounded-sm cursor-pointer transition-all border group select-none",
                      isCurrent
                        ? "bg-[#0F0F0F] text-white border-[#CC0000] shadow-md"
                        : "bg-[#0F0F0F]/40 border-zinc-800/80 hover:border-zinc-700 text-zinc-400 hover:text-white"
                    )}
                  >
                    {/* Thumbnail Block */}
                    <div className="relative w-24 h-16 bg-zinc-200 rounded-sm overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800">
                      <Image
                        src={video.thumbnail}
                        alt="Video Thumbnail Preview"
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        sizes="96px"
                      />

                      {isCurrent && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                          <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-ping" />
                        </div>
                      )}
                    </div>

                    {/* Text Description fields */}
                    <div className="flex flex-col justify-center min-w-0">
                      <h5 className={cn(
                        "font-black text-xs uppercase tracking-wide truncate mb-0.5 transition-colors",
                        isCurrent ? "text-[#CC0000]" : "text-white group-hover:text-[#CC0000]"
                      )}>
                        {video.title}
                      </h5>
                      <p className="text-[11px] text-zinc-500 line-clamp-1 leading-normal font-medium">{video.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action Frame */}
            <div className="mt-4 pt-4 border-t border-zinc-800 text-center shrink-0">
              <p className="text-xs text-gray-500 mb-3 font-medium">Need 3D CAD blueprints for project layouts?</p>
              <Button variant="outline" className="w-full text-xs text-[#CC0000] border-[#CC0000] bg-transparent hover:bg-white hover:text-black uppercase tracking-wider font-black h-11 rounded-sm transition-colors">
                Request CAD / BIM Files <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
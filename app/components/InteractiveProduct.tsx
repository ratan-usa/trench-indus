'use client';

import React from 'react';
import Image from 'next/image';

// Define the shape of a single point
interface Hotspot {
  id: number;
  x: string;
  y: string;
  title: string;
  desc: string;
}

// Define the props the component will accept
interface InteractiveProductProps {
  imageSrc: string;
  altText: string;
  hotspots: Hotspot[];
}

export default function InteractiveProduct({ imageSrc, altText, hotspots }: InteractiveProductProps) {
  return (
    <div className="relative group w-full max-w-4xl mx-auto">
      {/* THE IMAGE CONTAINER */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
        <Image 
          src={imageSrc} 
          alt={altText}
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* THE POINTS MAP */}
      {hotspots.map((point) => (
        <div
          key={point.id}
          className="absolute group/point"
          style={{ top: point.y, left: point.x }}
        >
          {/* Pulsing Dot */}
          <button className="relative flex h-6 w-6 items-center justify-center -translate-x-1/2 -translate-y-1/2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CC0000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#CC0000] border-2 border-white"></span>
          </button>

          {/* Description Card (Hover) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-4 bg-white rounded-xl shadow-2xl border border-blue-50 opacity-0 scale-95 pointer-events-none group-hover/point:opacity-100 group-hover/point:scale-100 group-hover/point:pointer-events-auto transition-all duration-200 z-50">
            <h4 className="font-bold text-[#CC0000] text-sm mb-1">{point.title}</h4>
            <p className="text-xs text-slate-500 leading-tight">{point.desc}</p>
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { Box, Play, Loader2, ChevronRight, CheckCircle2, Info, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- TYPESCRIPT DECLARATION FOR MODEL-VIEWER WEB COMPONENT ---
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        'camera-controls'?: boolean;
        'shadow-intensity'?: string;
        'auto-rotate'?: boolean;
        'interaction-prompt'?: string;
        exposure?: string;
        'environment-image'?: string;
        [key: string]: any;
      };
    }
  }
}

// --- CATALOG DATA ---
// NOTE: pos and norm values should be retrieved from https://modelviewer.dev/editor/
const CATALOG_DATA = [
  {
    id: 'round-riser',
    name: 'Round Manhole Riser',
    type: 'Infrastructure',
    modelSrc: '/gib files/1 FT LEACHING GALLEY .glb',
    description: 'High-tensile ductile iron riser for municipal roadway adjustment.',
    hotspots: [
      { 
        slot: "h1", 
        pos: "0m 0.2m 0.15m", 
        norm: "0m 1m 0m", 
        title: "Expansion Joint", 
        desc: "Absorbs thermal vibration from heavy traffic." 
      },
      { 
        slot: "h2", 
        pos: "0.15m 0.05m 0m", 
        norm: "1m 0m 0m", 
        title: "Locking Lug", 
        desc: "Patented Mega-Adjust mechanical engagement." 
      }
    ]
  },
  {
    id: 'catch-basin',
    name: 'Catch Basin Frame',
    type: 'Storm Drainage',
    modelSrc: '/gib files/2 FT LEACHING GALLEY .glb',
    description: '3-sided curb-back frame designed for high-velocity runoff.',
    hotspots: [
      { 
        slot: "h1", 
        pos: "0m 0.1m 0.2m", 
        norm: "0m 1m 0m", 
        title: "Flow Channel", 
        desc: "Anti-bypass flange ensures zero seepage." 
      }
    ]
  }
];

export default function Product3DViewer() {
  const [activeProduct, setActiveProduct] = useState(CATALOG_DATA[0]);
  const [viewerLoaded, setViewerLoaded] = useState(false);

  useEffect(() => {
    // Dynamic import to handle SSR in Next.js
    import('@google/model-viewer').then(() => setViewerLoaded(true));
  }, []);

  return (
    <main className="flex h-screen w-full bg-white overflow-hidden font-sans text-black">
      
      {/* --- LEFT SIDE: 3D INTERACTION (60%) --- */}
      <section className="relative w-[60%] h-full bg-[#fbfbfb] border-r border-gray-100 flex items-center justify-center overflow-hidden">
        
        {/* Technical HUD Overlays */}
        <div className="absolute top-12 left-12 z-20 space-y-3 pointer-events-none">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 bg-[#c92526]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Technical Digital Twin
            </span>
          </div>
          <h2 className="text-5xl font-black uppercase tracking-tighter leading-none transition-all duration-700">
            {activeProduct.name}
          </h2>
          <p className="text-xs font-bold text-zinc-400 max-w-sm uppercase tracking-tight">
            {activeProduct.description}
          </p>
        </div>

        {/* 3D Engine Rendering */}
        {!viewerLoaded ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#c92526]" />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Initializing Core Engine...</p>
          </div>
        ) : (
          <model-viewer
            key={activeProduct.id} // Forces re-render on product change
            src={activeProduct.modelSrc}
            camera-controls
            shadow-intensity="2"
            auto-rotate
            interaction-prompt="none"
            exposure="1"
            environment-image="neutral"
            style={{ width: '100%', height: '100%', outline: 'none' }}
          >
            {/* SPATIALLY LOCKED DOTS */}
            {activeProduct.hotspots.map((spot) => (
              <button
                key={spot.slot}
                slot={spot.slot}
                data-position={spot.pos}
                data-normal={spot.norm}
                className="group relative w-4 h-4 bg-[#c92526] rounded-full border-2 border-white shadow-2xl cursor-pointer transition-transform hover:scale-125 focus:outline-none"
              >
                {/* TOOLTIP: Hidden by default, appears on hover */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 p-5 bg-black/95 backdrop-blur-xl border-b-4 border-[#c92526] 
                                opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:bottom-12 
                                transition-all duration-500 pointer-events-none z-50 text-left shadow-2xl">
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-3 h-3 text-[#c92526]" />
                    <h5 className="font-black text-[10px] uppercase tracking-widest text-white">
                      {spot.title}
                    </h5>
                  </div>
                  
                  <p className="text-[11px] font-bold text-zinc-400 leading-relaxed uppercase tracking-tight">
                    {spot.desc}
                  </p>

                  {/* Decorative pointer arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                                  border-l-[7px] border-l-transparent border-r-[7px] 
                                  border-r-transparent border-t-[9px] border-t-[#c92526]" />
                </div>
              </button>
            ))}
          </model-viewer>
        )}

        {/* Bottom Specs HUD */}
        <div className="absolute bottom-12 left-12 flex gap-12 border-t border-gray-100 pt-6">
           <div className="space-y-1">
             <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Load Rating</p>
             <p className="text-sm font-black uppercase">AASHTO H-20</p>
           </div>
           <div className="space-y-1 text-zinc-300">
             <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Model Format</p>
             <p className="text-sm font-black uppercase">GLB / BIM 300</p>
           </div>
           <div className="flex items-center gap-2 text-[#c92526]">
              <Maximize2 size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Rotate to Inspect</span>
           </div>
        </div>
      </section>

      {/* --- RIGHT SIDE: PRODUCT SELECTION (40%) --- */}
      <section className="w-[40%] h-full bg-white flex flex-col relative z-30">
        
        {/* Panel Header */}
        <div className="p-12 border-b border-gray-100">
           <div className="flex items-center gap-2 mb-4">
              <Box className="text-[#c92526] w-4 h-4" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Inventory Explorer</h3>
           </div>
           <p className="text-3xl font-black uppercase tracking-tighter leading-tight">
              Select Component <br /> for Analysis
           </p>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto p-12 space-y-6 custom-scrollbar">
          {CATALOG_DATA.map((product) => (
            <div 
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`group cursor-pointer p-8 border-2 transition-all duration-500 relative ${
                activeProduct.id === product.id 
                ? 'border-black bg-black text-white shadow-2xl translate-x-2' 
                : 'border-gray-100 bg-gray-50 hover:border-black'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 ${
                   activeProduct.id === product.id ? 'bg-[#c92526] text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {product.type}
                </span>
                {activeProduct.id === product.id && <CheckCircle2 className="text-[#c92526] w-5 h-5 animate-in zoom-in" />}
              </div>

              <h4 className="text-xl font-black uppercase tracking-tight mb-4">{product.name}</h4>
              
              {/* Media Preview Box */}
              <div className="relative aspect-video bg-zinc-900 mb-6 overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                 <Play className={`w-10 h-10 transition-colors ${activeProduct.id === product.id ? 'text-[#c92526]' : 'text-zinc-700'}`} />
                 <div className="absolute top-0 right-0 p-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                 </div>
                 <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">Live Field Preview</span>
                 </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <p className={`text-[10px] font-black uppercase tracking-widest ${activeProduct.id === product.id ? 'text-zinc-400' : 'text-gray-400'}`}>
                  {activeProduct.id === product.id ? 'Active Schematic' : 'Click to Initialize 3D'}
                </p>
                <ChevronRight className={activeProduct.id === product.id ? 'text-[#c92526]' : 'text-black'} size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Footer */}
        <div className="p-12 bg-gray-50 border-t border-gray-100">
           <Button className="w-full h-20 bg-[#c92526] hover:bg-black text-white font-black uppercase tracking-[0.2em] transition-all rounded-none text-xs group shadow-xl">
              Download BIM / CAD Package <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" />
           </Button>
        </div>
      </section>

      {/* Tailwind Custom Scrollbar Utility */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
        }
      `}</style>
    </main>
  );
}
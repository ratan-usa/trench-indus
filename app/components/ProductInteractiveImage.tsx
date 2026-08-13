'use client';

import React, { useState } from 'react';
import InteractiveProduct from './InteractiveProduct';
import { ShieldCheck, Crosshair, Hammer, Layers, Ruler } from 'lucide-react';

interface Hotspot {
  id: number;
  x: string;
  y: string;
  title: string;
  desc: string;
}

interface ProductDataItem {
  id: string;
  name: string;
  type: string;
  imgSrc: string;
  HOTSPOTS: Hotspot[];
}

const data: ProductDataItem[] = [
  {
    id: 'riser-15200',
    name: 'Class 30 Solid Iron Riser',
    type: 'Standard Circular Profile',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Rectangle%20Paving%20Riser%201%20Coated%20finish.621.png`,
    HOTSPOTS: [
      { id: 101, x: '37%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 102, x: '45%', y: '70%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 103, x: '68%', y: '60%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }, 
  {
    id: 'riser-15205',
    name: 'Heavy Duty Square Frame Riser',
    type: 'Catch Basin Configuration',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Sqaure%20Riser%20Raw%20Finish.610.png`,
    HOTSPOTS: [
      { id: 201, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 202, x: '65%', y: '40%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 203, x: '69%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 204, x: '34%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }, 
  {
    id: 'riser-15203',    
    name: 'Custom Rectangular Extension Ring',
    type: 'Utility Vault Profile',
    imgSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Square%20ductile%20iron.663.png`,
    HOTSPOTS: [
      { id: 301, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 302, x: '65%', y: '35%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 303, x: '69%', y: '65%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }
];

export default function ProductInteractiveImage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProduct = data[activeTab];

  return (
    <section className="py-24 bg-white font-sans text-[#0F0F0F]">
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-12">
        
        {/* --- HEADER DESK --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#CC0000]" /> Visual Blueprint Inspection
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Interactive Product <br />
            <span className="text-[#CC0000]">Feature Hotspots.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Select an infrastructure casting profile below. Hover over marked diagnostic vectors to review localized engineering design specifications.
          </p>
        </div>

        {/* --- SPLIT MATRIX TO FILL SIDE SPACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE NAVIGATION & TECHNICAL STATS (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Tab Swappers */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block px-1">
                Select Hardware Model
              </span>
              {data.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-sm border transition-all duration-200 flex flex-col gap-1 relative overflow-hidden ${
                      isActive 
                        ? 'bg-[#0F0F0F] border-[#0F0F0F] text-white pl-8 shadow-xl' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#CC0000]" />
                    )}
                    <span className="font-black uppercase tracking-wide text-sm">
                      {item.name}
                    </span>
                    <span className={`text-xs font-medium ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.type}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Paving Engineering Context Info Block */}
            <div className="border border-slate-200 rounded-sm p-6 bg-slate-50/50 space-y-4">
              <div className="flex items-center gap-2 text-[#CC0000] border-b border-slate-200 pb-3">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="text-xs font-black uppercase tracking-widest text-[#0F0F0F]">
                  Rigid Structural Metrics
                </h4>
              </div>

              <div className="space-y-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-slate-400" /> Casting Core:</span>
                  <span className="text-[#0F0F0F]">Class 30 Gray Iron</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><Ruler className="w-4 h-4 text-slate-400" /> Height Range:</span>
                  <span className="text-[#0F0F0F]">0.25" to 4.00" Rise</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><Hammer className="w-4 h-4 text-slate-400" /> Compliance:</span>
                  <span className="text-[#CC0000]">Paving Traffic Grade</span>
                </div>
              </div>
            </div>

            <p className="text-center lg:text-left text-slate-400 text-xs italic tracking-wide">
              * Hover over target hotpoints on the layout preview to open dynamic telemetry windows.
            </p>

          </div>

          {/* RIGHT COLUMN: HIGH-CONTRAST INTERACTIVE CANVAS FRAME (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-sm p-6 md:p-10 shadow-inner min-h-[500px] flex items-center justify-center relative group">
            <div className="absolute top-4 left-4 bg-[#0F0F0F] border border-zinc-800 rounded px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-slate-400 z-10 pointer-events-none">
              Viewport: active_spec_{currentProduct.id}.png
            </div>
            
            <div key={currentProduct.id} className="w-full animate-[fadeIn_0.35s_ease-out]">
              <InteractiveProduct
                imageSrc={currentProduct.imgSrc}
                altText={currentProduct.name}
                hotspots={currentProduct.HOTSPOTS}
              />
            </div>
          </div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
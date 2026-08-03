'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ChevronLeft,
  Settings,
  ShieldCheck,
  Construction,
  FileText,
  ArrowRight,
  CircleDot,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const FINISHES = [
  { name: 'Raw Finish', image: '/paving/Round Riser Raw Finish.613.png' },
  { name: 'Coated Finish', image: '/paving/Round Riser Coated Finish.612.png' },
  { name: 'Iron Finish', image: '/paving/Round Riser iron Finish.614.png' },
  { name: 'With Screw (Raw)', image: '/paving/Round Riser with screw Raw Finish.617.png' },
  { name: 'With Screw (Coated)', image: '/paving/Round Riser with screw coated Finish.618.png' },
  { name: 'With Screw (Iron)', image: '/paving/Round Riser with screw iron Finish.615.png' }
];

const MANHOLE_RISER_DATA = {
  title: 'Manhole Risers',
  headline: 'Precision Adjustment for Municipal Manholes.',
  description: 'Our Manhole Risers provide an efficient and durable solution for elevating manhole covers to grade level during paving and resurfacing operations. Fabricated from high-strength cast or ductile iron, they eliminate the need for costly digging and rebuilding, ensuring a perfect flush fit with the new asphalt surface.',
  specs: [
    { label: 'Material', value: 'Ductile Iron (65-45-12) or Cast Iron' },
    { label: 'Profile Type', value: 'Standard Round / Adjustable' },
    { label: 'Load Rating', value: 'AASHTO M306 / H-20 Heavy Traffic' },
    { label: 'Standard Diameters', value: '24", 27", 30", 36" equivalents' },
    { label: 'Rise Increments', value: '3/4" to 4" (Custom stackable available)' },
    { label: 'Certification', value: 'Buy America Act Compliant, ISO 9001:2015' },
  ],
  technicalPoints: [
    {
      title: 'Seamless Grade Adjustment',
      desc: 'Quickly raise existing utilities to the new paving grade in minutes, saving substantial labor and material costs compared to traditional masonry adjustments.'
    },
    {
      title: 'Locking Turnbuckles',
      desc: 'Available with robust screw and turnbuckle mechanisms to expand and securely lock the riser into the existing frame.'
    },
    {
      title: 'Heavy Traffic Rated',
      desc: 'Engineered with heavy-duty construction to withstand the intense pressures of highway traffic and industrial heavy loads.'
    }
  ]
};

export default function ManholeRiserPage() {
  const router = useRouter();
  const [activeFinish, setActiveFinish] = useState(FINISHES[0]); // Default to 'Raw Finish'

  const handlePrev = () => {
    const currentIndex = FINISHES.findIndex(f => f.name === activeFinish.name);
    const prevIndex = currentIndex === 0 ? FINISHES.length - 1 : currentIndex - 1;
    setActiveFinish(FINISHES[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = FINISHES.findIndex(f => f.name === activeFinish.name);
    const nextIndex = currentIndex === FINISHES.length - 1 ? 0 : currentIndex + 1;
    setActiveFinish(FINISHES[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">

      <div className="w-full px-6 md:px-8 lg:px-12 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* --- LEFT COLUMN: PRODUCT VISUAL --- */}
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-square w-full bg-gray-50 rounded-none border border-gray-100 flex items-center justify-center p-12 overflow-hidden shadow-sm group">
   
              <button 
                onClick={handlePrev}
                className="absolute left-4 z-10 bg-white text-black p-3 rounded-full hover:bg-[#CC0000] hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <Image
                key={activeFinish.name}
                src={activeFinish.image}
                alt={activeFinish.name}
                fill
                className="object-contain p-10 hover:rotate-3 transition-transform duration-700 animate-in fade-in zoom-in-95"
                priority
              />

              <button 
                onClick={handleNext}
                className="absolute right-4 z-10 bg-white text-black p-3 rounded-full hover:bg-[#CC0000] hover:text-white transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-gray-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Industrial Feature Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <ShieldCheck className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Fast Install</span>
              </div>
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <CircleDot className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Precise Fit</span>
              </div>
              <div className="bg-black text-white p-5 text-center flex flex-col items-center justify-center">
                <Construction className="mb-2 text-[#CC0000]" size={24} />
                <span className="block text-[10px] font-black uppercase tracking-tighter leading-none text-center">Heavy Traffic</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: TECHNICAL DETAILS --- */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                Manhole <br />
                <span className="text-[#CC0000]">Risers</span>
              </h1>

              <div className="inline-block bg-gray-50 text-black px-4 py-2 font-bold uppercase tracking-widest text-xs mb-8 rounded-sm border border-gray-200">
                Selected Finish: <span className="text-[#CC0000]">{activeFinish.name}</span>
              </div>

              <div className="flex gap-4 items-start border-l-4 border-black pl-6">
                <p className="text-xl font-bold text-gray-900 italic leading-relaxed">
                  "{MANHOLE_RISER_DATA.headline}"
                </p>
              </div>

              <p className="mt-8 text-gray-600 leading-relaxed text-lg font-medium">
                {MANHOLE_RISER_DATA.description}
              </p>
            </div>

            {/* Technical Spec Grid */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black">
                <FileText size={18} className="text-[#CC0000]" /> Dimension Specs
              </h3>
              <div className="grid grid-cols-1 border-t-2 border-black">
                {MANHOLE_RISER_DATA.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-100 hover:bg-gray-50 px-2 transition-colors">
                    <span className="text-[11px] font-black uppercase text-gray-400">{spec.label}</span>
                    <span className="text-sm font-black text-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance - Dark Mode Block */}
            <div className="bg-black text-white p-8 md:p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#CC0000]/10 rounded-full blur-3xl"></div>

              <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#CC0000]">
                <Settings size={18} /> Design Integrity
              </h3>
              <div className="space-y-8 relative z-10">
                {MANHOLE_RISER_DATA.technicalPoints.map((point, i) => (
                  <div key={i} className="group">
                    <h4 className="text-[#CC0000] font-black uppercase text-sm mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      {point.title}
                    </h4>
                    <p className="text-sm font-bold text-zinc-400 leading-relaxed group-hover:text-white transition-colors pl-4">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button className="w-full bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-black h-20 uppercase tracking-[0.25em] text-sm group rounded-none shadow-xl transition-colors">
                Request Municipal Pricing <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>

        </div>

        {/* --- AVAILABLE FINISHES --- */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <div className="mb-6 border-b-4 border-black pb-4 inline-block">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight pr-8">
              Available <span className="text-[#CC0000]">Finishes</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium mb-12">Explore the various material and coating options for our Manhole Risers.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {FINISHES.map((finish, i) => (
              <div 
                key={i} 
                onClick={() => {
                  setActiveFinish(finish);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group flex flex-col bg-white border-2 transition-all duration-300 shadow-sm hover:shadow-xl rounded-sm overflow-hidden cursor-pointer ${
                  activeFinish.name === finish.name ? 'border-[#CC0000] ring-1 ring-[#CC0000]' : 'border-gray-100 hover:border-[#CC0000]'
                }`}
              >
                <div className="relative w-full h-40 bg-white flex items-center justify-center border-b border-gray-50">
                  <Image 
                    src={finish.image} 
                    alt={finish.name} 
                    fill 
                    className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4 bg-gray-50 flex items-center justify-center text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black group-hover:text-[#CC0000] transition-colors leading-tight">
                    {finish.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

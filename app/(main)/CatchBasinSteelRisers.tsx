'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Settings, 
  Flag, 
  ArrowUpRight, 
  Info, 
  Layers 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CatchBasinSteelRisers() {
  return (
    <section className="bg-white py-8 border-b border-gray-100 font-sans">
      <div className="w-full px-6 md:px-8 lg:px-12  space-y-16">
        
        {/* --- MAIN SECTION INTRO HEADER --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#CC0000]" /> Heavy Drainage Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Catch Basin Risers – Steel <br />
            <span className="text-[#CC0000]">Tailored Custom Fitment.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Eliminate intensive structural rebuilds during overlays. Our high-tensile steel frame extensions are precision manufactured to match localized storm drain geometries perfectly.
          </p>
        </div>

        {/* --- DUAL GRID VIEWPORT ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CRISP ARCHITECTURAL SPECS LIST (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature 1 */}
              <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#CC0000]">
                  <Layers className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-slate-900">Form Profiles</h3>
                </div>
                <p className="text-sm font-bold text-slate-700">Square or Rectangular Configurations</p>
                <p className="text-xs text-slate-500 leading-relaxed">Available in standard and irregular orthogonal matrices to slide cleanly over existing catch basin frameworks.</p>
              </div>

              {/* Feature 2 */}
              <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#CC0000]">
                  <Settings className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-slate-900">Engineering</h3>
                </div>
                <p className="text-sm font-bold text-slate-700">Fabricated to Your Exact Specs</p>
                <p className="text-xs text-slate-500 leading-relaxed">Built per field dimensions, matching custom clearance parameters to guarantee zero movement under high-impact road loads.</p>
              </div>

              {/* Feature 3 */}
              <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#CC0000]">
                  <Flag className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-slate-900">Origin Quality</h3>
                </div>
                <p className="text-sm font-bold text-slate-700">Proudly Made in America</p>
                <p className="text-xs text-slate-500 leading-relaxed">Forged and assembled domestically using certified high-tensile steel alloys matching domestic construction mandates.</p>
              </div>

              {/* Feature 4 */}
              <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-[#CC0000]">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-xs text-slate-900">Depth Grading</h3>
                </div>
                <p className="text-sm font-bold text-slate-700">3/4" Base with 1/4" Increments</p>
                <p className="text-xs text-slate-500 leading-relaxed">Starts at a slim 3/4" rise profile for thin asphalt lifts and scales upward seamlessly in precise 1/4" increments.</p>
              </div>

            </div>

          </div>

          {/* RIGHT: MOCKED COMPONENT SCHEMATIC VIEWPORT (5 Columns Wide) */}
          <div className="lg:col-span-5 relative aspect-square bg-slate-50 border border-slate-200 rounded-sm overflow-hidden p-6 flex items-center justify-center group shadow-sm hover:border-[#CC0000] transition-colors duration-300">
            {/* Explicit image reference from 3.png */}
            <Image 
              src="/image_37b8a6.png" 
              alt="Catch Basin Riser Schematic Layout"
              fill
              className="object-contain p-8 mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
              priority
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-[#0F0F0F]/90 backdrop-blur-sm border border-zinc-800 px-3 py-2 text-[9px] uppercase font-bold tracking-wider text-zinc-400 text-center pointer-events-none">
              Asset Display: Steel Catch Basin Riser Component
            </div>
          </div>

        </div>

        {/* --- LOWER REQUIREMENTS SPECIFICATION BAR --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-5 relative z-10 max-w-3xl">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-[#CC0000] flex items-center justify-center rounded-sm shrink-0 shadow-inner mt-1">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Order Placement Dimensional Data Requirements
              </span>
              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
                Required Specifications for Production Fitment:
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed">
                Please provide: **Grate Size**, **Thickness**, **Top of Hole**, **Bottom of Hole on Seat**, and the exact **Clear ID Inside Frame** to clear production pipelines smoothly.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-auto shrink-0 relative z-10">
            <Button className="w-full xl:w-auto bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
              Submit Riser Measurements <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
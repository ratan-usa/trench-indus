    'use client';

import React from 'react';
import { 
  Layers, 
  Layers3, 
  Ruler, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- STRUCTURAL CLASSIFICATION DATA DIRECTLY FROM image_37b8a6.png ---
const MATERIAL_OPTIONS = [
  "Cast / Ductile Iron",
  "Steel",
  "Black Coated Iron",
  "Plastic"
];

const DESIGN_OPTIONS = [
  "Fixed / Solid Riser",
  "Adjustable Riser",
  "Stackable Riser"
];

export default function PavingRiserClassification() {
  return (
    <section className="bg-white py-8 border-b border-gray-100 font-sans">
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#CC0000]" /> Product Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Types of Paving Risers <br />
            <span className="text-[#CC0000]">System Classification.</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Every job site demands a specific installation blueprint. We manufacture custom solutions categorized seamlessly by exact composition materials and mechanical designs.
          </p>
        </div>

        {/* --- TWO-COLUMN BRANCHING CLASSIFICATION GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* BRANCH 1: BY MATERIAL */}
          <Card className="border-2 border-slate-100 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="w-full h-[4px] bg-[#0F0F0F] group-hover:bg-[#CC0000] transition-colors duration-300" />
            
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-sm group-hover:bg-[#0F0F0F] group-hover:text-white group-hover:border-[#0F0F0F] transition-all duration-300">
                  <Layers3 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#CC0000]">
                  Composition Matrix
                </span>
              </div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Classification By Material
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8 pt-0 flex-grow flex flex-col justify-between">
              <ul className="space-y-3">
                {MATERIAL_OPTIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* BRANCH 2: BY DESIGN */}
          <Card className="border-2 border-slate-100 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="w-full h-[4px] bg-[#0F0F0F] group-hover:bg-[#CC0000] transition-colors duration-300" />
            
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-sm group-hover:bg-[#0F0F0F] group-hover:text-white group-hover:border-[#0F0F0F] transition-all duration-300">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#CC0000]">
                  Mechanical Framework
                </span>
              </div>
              <CardTitle className="text-2xl font-black uppercase tracking-tight text-slate-900">
                Classification By Design
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8 pt-0 flex-grow flex flex-col justify-between">
              <ul className="space-y-3">
                {DESIGN_OPTIONS.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>

        {/* --- CRITICAL LOWER DATA BAR: GENERAL SIZE OPTIONS --- */}
        <div className="bg-[#0F0F0F] text-white p-6 md:p-8 rounded-sm border border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 text-[#CC0000] flex items-center justify-center rounded-sm shrink-0 shadow-inner">
              <Ruler className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Dimensional Parameters
              </span>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                General Size Option From: <span className="text-[#CC0000]">0.25 to 4 Inch</span>
              </h4>
              <p className="text-xs text-zinc-400 font-medium max-w-xl">
                Precision calibrated step depths matching precise roadway resurfacing courses and micro-surfacing layer profiles.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 relative z-10">
            <Button className="w-full md:w-auto bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2">
              Request Dimensional CAD <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
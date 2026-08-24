'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Layers,
  Zap,
  Target,
  ArrowRight,
  Play,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { cn } from "@/lib/utils";

// --- ALL NEW ARCHITECTURAL INFRASTRUCTURE TAGLINES ---
const NEW_TAGLINES = [
  {
    badge: "The Grade Master",
    primary: "True Alignment.",
    secondary: "Instant Leveling.",
    highlight: "Zero Disruption.",
    desc: "Engineered seating tolerances that bring trench covers flush to new infrastructure horizons. No digging, no masonry, no downtime.",
    statLabel: "Site Turnaround",
    statValue: "100% Excavation-Free"
  },
  {
    badge: "Continuous Impact Shield",
    primary: "Absorb the Load.",
    secondary: "Dampen the Shock.",
    highlight: "Defy Shifting.",
    desc: "Heavy structural casting matrices optimized to disperse immense vertical kinetic forces evenly across base frames, protecting surrounding pavement sections from cracking.",
    statLabel: "Deflection Limit",
    statValue: "0.00mm Structural Warp"
  },
  {
    badge: "The infrastructure Companion",
    primary: "Lay the Course.",
    secondary: "Match the Crown.",
    highlight: "Pave with Fluidity.",
    desc: "Millimeter-precise profile rings designed to match your trenching equipment layout lines precision. Drop, align, and roll infrastructure straight over the unit.",
    statLabel: "Workflow Acceleration",
    statValue: "Trenching Crew Synergy"
  }
];

export default function AppleStyletrenchingShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = NEW_TAGLINES[activeIdx];

  return (
    <section className="bg-[#000000] text-white min-h-screen py-8 px-6 sm:px-8 lg:px-12 flex items-center justify-center font-sans relative overflow-hidden">

      {/* Crisp Apple-Style Subtle Geometric Ambient Mesh using strict brand red */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#CC0000]/5 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#CC0000]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="  w-full mx-auto    relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* ========================================================================= */}
        {/* --- LEFT PANEL: BOLD HIGH-CONTRAST CRISP TEXT LAYER (5 Columns Wide) --- */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">

          {/* Main Keyframe-Animated Copy Block */}
          <div key={activeIdx} className="space-y-6 animate-[appleSlideUp_0.5s_cubic-bezier(0.16,1,0.3,1)]">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-zinc-800 text-[#CC0000] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              <Sparkles className="w-3 h-3 fill-current" /> {current.badge}
            </span>

            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] text-zinc-400">
              {current.primary} <br />
              {current.secondary} <br />
              <span className="text-white border-b-4 border-[#CC0000] pb-1">{current.highlight}</span>
            </h1>

            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed max-w-md">
              {current.desc}
            </p>

            {/* Micro Parameters HUD Footnote */}
            <div className="pt-4 border-t border-zinc-900 flex gap-8 items-center">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold block">{current.statLabel}</span>
                <span className="text-sm font-mono font-black text-white">{current.statValue}</span>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-bold uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> DOT Compliant
              </div>
            </div>
          </div>

          {/* Interactive Stepper Navigation Indicators */}
          <div className="flex items-center gap-2 pt-6 border-t border-zinc-900/60 lg:pt-0 lg:border-t-0">
            {NEW_TAGLINES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIdx === idx ? "bg-[#CC0000] w-12" : "bg-zinc-800 w-3 hover:bg-zinc-600"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* --- RIGHT PANEL: HIGH-FIDELITY APPLE 3D INFRASTRUCTURE ENVIRONMENT --- */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 w-full flex flex-col gap-6">
          <div className="relative aspect-video w-full rounded-2xl bg-[#0F0F0F] border border-zinc-800/80 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group cursor-pointer">

            {/* Viewport Top Diagnostics HUD Indicator stormwater system */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-full px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-zinc-400 z-20 flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] animate-pulse" /> Asset Renderer: Sandbox Mode
            </div>

            <button className="absolute top-4 right-4 bg-black/60 border border-zinc-800 text-zinc-400 hover:text-white rounded-full p-2 transition-colors z-20 shadow-md">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Apple Cinematic 3D Floating Geometry Simulation Area */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center p-12">
              <div className="relative w-full h-full max-w-sm aspect-square flex items-center justify-center">

                {/* 3D Core Layer 3: Top Grade Ring Accent (Floating Back Loop) */}
                <div className="absolute inset-0 border-2 border-dashed border-zinc-800 rounded-full animate-[spin_80s_linear_infinite]" />

                {/* 3D Core Layer 2: Mid Level Structural Casing Profile Ring */}
                <div className="absolute inset-8 bg-gradient-to-b from-[#CC0000]/10 to-transparent border border-zinc-700/50 rounded-full animate-[spin_40s_linear_infinite_reverse] p-4">
                  <div className="w-full h-full border border-dashed border-[#CC0000]/20 rounded-full" />
                </div>

                {/* 3D Core Layer 1: Center Machined Solid Bead (Rotational Focus Pivot) */}
                <div className="relative h-24 w-24 bg-gradient-to-tr from-[#000000] to-zinc-900 border border-zinc-700 rounded-xl shadow-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-700">
                  <Layers className="w-8 h-8 text-[#CC0000] drop-shadow-[0_0_15px_rgba(204,0,0,0.4)] animate-pulse" />
                </div>

                {/* Embedded Floating Coordinates HUD Vector crosshairs lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900/40 pointer-events-none" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900/40 pointer-events-none" />
              </div>
            </div>

            {/* Ambient Base Description Bar Footer stormwater system */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm border border-zinc-800/40 p-3 rounded-xl text-[10px] uppercase font-bold tracking-wider text-zinc-400 flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5"><Play className="w-3 h-3 text-[#CC0000] fill-current" /> Operational Blueprint Active</span>
              <span className="font-mono text-zinc-600">Scale: 1:1 Matrix</span>
            </div>
          </div>

          {/* Quick External Actions Grid Links Bar */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % NEW_TAGLINES.length)}
              className="h-14 border border-zinc-800 bg-[#0F0F0F] hover:bg-zinc-900 text-white font-bold uppercase tracking-widest text-xs transition-colors rounded-xl flex items-center justify-center gap-2 group"
            >
              Next Feature Line <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <a href="#contact" className="w-full">
              <button className="w-full h-14 bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs transition-all duration-300 rounded-xl shadow-lg">
                Request CAD Configurations
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Premium Apple Elastic Transition Keyframes Block */}
      <style jsx global>{`
        @keyframes appleSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.98); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
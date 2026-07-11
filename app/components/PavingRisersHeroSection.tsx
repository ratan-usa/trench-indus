'use client';

import React from 'react';
import { ShieldCheck, PlayCircle, Zap, Clock, Target } from 'lucide-react';

export default function PavingRisersHeroSection() {
  return (
    <section className="bg-slate-50 py-4 border-b border-slate-200 font-sans">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT PANEL: EASY, FAST, ACCURATE VALUE PROPOSITION */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> Infrastructure Engineering
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-[1.05]">
                Watch your risers <br />
                <span className="text-[#CC0000]">being built live.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-xl">
              Ditch the complex setups and mortar beds. Our specialized paving risers unlock quick installs on-site while preserving precision structural alignments under demanding municipal loads.
            </p>

            {/* THE THREE CONTRACTOR BULLET PILLARS */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Zap className="w-4 h-4 fill-current" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Easy</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">Drop-in design. No excavation.</p>
              </div>

              <div className="space-y-1 border-x border-slate-200 px-3">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Fast</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">5-Minute quick installs.</p>
              </div>

              <div className="space-y-1 pl-1">
                <div className="flex items-center gap-1.5 text-[#CC0000]">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-900">Accurate</span>
                </div>
                <p className="text-xs font-bold text-slate-500 leading-snug">Millimeter grade matching.</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: LIVE FABRICATION INDUSTRIAL LOOP FEED */}
          <div className="lg:col-span-6 w-full">
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-[#CC0000] shadow-xl border border-slate-200">

              {/* Vimeo loop streaming background configurations */}
              <iframe
                src="/video/GIF paving risere with frame.698.mp4"
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                title="Paving Risers Factory Production Footage"
              />
              <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-sm z-10" />
              <div className="absolute top-4 left-4 bg-[#0F0F0F]/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-2 pointer-events-none z-20">
                <PlayCircle className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" /> Shop Floor Feed
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
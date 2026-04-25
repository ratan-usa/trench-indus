'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  Droplets, 
  MoveDiagonal, 
  Grid, 
  ChevronRight, 
  ArrowRight,
  FileText,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  Settings2
} from 'lucide-react';

const DRAINAGE_DATA = {
  title: 'Storm',
  subtitle: 'Drainage Systems',
  heroImage: '/assets/industries/image3.jpeg',
  description: 'Precision-engineered for high-velocity runoff. Our drainage risers ensure optimal hydraulic capacity while maintaining a flush street-level profile.',
  overview: 'Effective stormwater management requires more than just an opening in the ground. It requires a perfectly seated frame that can handle the sheer force of road runoff during heavy precipitation events. Mega Paving Risers provides 3-sided and 4-sided catch basin solutions that prevent bypass and ensure every gallon of water enters the municipal system as intended.',
  stats: [
    { label: 'Hydraulic Capacity', value: '100%', icon: <Waves className="w-5 h-5" /> },
    { label: 'Slope Adjustment', value: '0 - 15%', icon: <MoveDiagonal className="w-5 h-5" /> },
    { label: 'Load Rating', value: 'H-20 Heavy', icon: <BarChart3 className="w-5 h-5" /> },
  ]
};

export default function StormDrainagePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#c92526] selection:text-white">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative h-[70vh] min-h-[600px] w-full bg-black overflow-hidden">
        <Image 
          src={DRAINAGE_DATA.heroImage} 
          alt={DRAINAGE_DATA.title} 
          fill 
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-[#c92526]" />
                <span className="text-[#c92526] font-black uppercase tracking-[0.4em] text-sm">
                  Stormwater Management
                </span>
              </div>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                {DRAINAGE_DATA.title} <br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                  {DRAINAGE_DATA.subtitle}
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 pt-8">
                <Button className="bg-[#c92526] hover:bg-white hover:text-black text-white font-black px-10 h-16 uppercase tracking-widest transition-all rounded-none border-none shadow-2xl">
                  Get Drainage Specs <ChevronRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-black px-10 h-16 uppercase tracking-widest transition-all rounded-none">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. CORE PERFORMANCE BAR                    */}
      {/* ========================================= */}
      <section className="bg-black text-white py-12 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DRAINAGE_DATA.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="h-14 w-14 bg-[#c92526] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-black tracking-tighter leading-none">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. TECHNICAL DEEP DIVE                    */}
      {/* ========================================= */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase tracking-tight text-black flex items-center gap-4">
                  <Droplets className="text-[#c92526]" /> 
                  Flow <span className="text-[#c92526]">Optimization</span>
                </h2>
                <p className="text-2xl font-bold leading-tight text-gray-900 border-l-8 border-black pl-8 italic">
                  {DRAINAGE_DATA.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {DRAINAGE_DATA.overview}
                </p>
              </div>

              {/* Engineering Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                {[
                  { title: 'Anti-Bypass Flange', desc: 'Ensures water enters the basin without seeping under the frame.' },
                  { icon: <MoveDiagonal />, title: 'Slope Tapering', desc: 'Precision-angled frames to match road crown and curb gradients.' },
                  { title: 'Debris Guard', desc: 'Integrated seating prevents sediment from entering the drainage structure.' },
                  { title: 'Galvanized Steel', desc: 'Hot-dip protection for maximum life in high-moisture environments.' }
                ].map((feat, i) => (
                  <div key={i} className="bg-gray-50 p-8 border-l-2 border-transparent hover:border-[#c92526] hover:bg-gray-100 transition-all group">
                    <h4 className="font-black uppercase text-sm mb-2 tracking-widest text-black group-hover:text-[#c92526]">{feat.title}</h4>
                    <p className="text-xs font-bold text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Data Box */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-zinc-950 text-white p-10 shadow-2xl relative border-b-8 border-[#c92526]">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c92526] mb-8 flex items-center gap-2">
                  <FileText size={14} /> Hydraulic Data Sheet
                </h3>

                <div className="space-y-6 mb-12">
                  {[
                    { label: 'Grate Compability', value: 'Standard Type R, C, & V' },
                    { label: 'Wall Thickness', value: '0.5" Reinforced Structural' },
                    { label: 'Yield Strength', value: '36,000 PSI Minimum' },
                    { label: 'Coating Standard', value: 'ASTM A123 Galvanizing' },
                    { label: 'Rise Capacity', value: 'Adjustable 1" to 8"' }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                      <span className="text-zinc-500 text-[10px] font-black uppercase">{spec.label}</span>
                      <span className="font-bold text-sm text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white/5 border border-white/10 mb-8">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldAlert className="text-[#c92526] w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Critical Bypass Prevention Technology</span>
                  </div>
                </div>

                <Button className="w-full bg-[#c92526] hover:bg-white hover:text-black text-white font-black h-16 uppercase tracking-[0.2em] text-[11px] transition-all rounded-none group">
                  Download Submittal Package <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. DRAINAGE SOLUTIONS GRID                */}
      {/* ========================================= */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
                3-Sided vs. <br /> 
                <span className="text-[#c92526]">4-Sided Solutions</span>
              </h2>
              <p className="text-zinc-400 text-lg font-bold leading-relaxed">
                Different drainage structures require different seating geometries. We offer 3-sided risers for curb-back inlets and full 4-sided frames for flat street grates.
              </p>
              <ul className="space-y-4">
                {[
                  '3-Sided: Optimized for curb abutments',
                  '4-Sided: Reinforced for open roadway grates',
                  'Sloped: Custom tapered for road crowning',
                  'D-Shape: Specialized perimeter profiles'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-black uppercase">
                    <div className="h-2 w-2 bg-[#c92526] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video bg-zinc-800 border border-zinc-700 p-8 flex items-center justify-center">
              <Settings2 className="w-48 h-48 text-[#c92526]/20 absolute animate-pulse" />
              <div className="relative z-10 text-center">
                <p className="text-xs font-black uppercase tracking-[0.5em] text-[#c92526] mb-4">Blueprints Ready</p>
                <p className="text-2xl font-black uppercase">Custom Fabrication <br /> For Any Catch Basin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. CALL TO ACTION                          */}
      {/* ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Secure Your <br /> Gutter Flow
          </h2>
          <p className="max-w-2xl mx-auto font-bold text-xl text-gray-500 mb-12 italic">
            "Preventing street flooding begins with precision at the pavement level."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-[#c92526] text-white hover:bg-black font-black px-12 h-20 text-lg uppercase transition-all rounded-none shadow-2xl">
              Get A Drainage Quote
            </Button>
            <Button variant="outline" className="border-4 border-black text-black hover:bg-black hover:text-white font-black px-12 h-20 text-lg uppercase transition-all rounded-none">
              Speak to an Engineer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
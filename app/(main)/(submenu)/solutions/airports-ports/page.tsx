'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Plane,
  Anchor,
  Weight,
  ShieldAlert,
  ChevronRight,
  ArrowRight,
  FileText,
  Lock,
  Zap,
  Activity,
  Maximize2
} from 'lucide-react';

const AIRPORT_DATA = {
  title: 'Airport &',
  subtitle: 'Heavy Port',
  heroImage: '/assets/industries/image19.jpeg',
  description: 'Engineered for 100,000+ lb wheel loads. Our Extra-Heavy-Duty (EHD) castings provide the structural integrity required for modern aviation and maritime logistics.',
  overview: 'In environments where aircraft taxi and container handlers operate, standard municipal castings are insufficient. Mega Paving Risers manufactures high-tensile ductile iron solutions specifically for FAA-regulated runways and heavy-duty port terminals. These units are cast with increased wall thickness and integrated bolt-down systems to ensure stability under extreme dynamic loads.',
  stats: [
    { label: 'Load Rating', value: '100k - 250k lbs', icon: <Weight className="w-5 h-5" /> },
    { label: 'Material', value: 'Ductile Iron', icon: <Zap className="w-5 h-5" /> },
    { label: 'Security', value: 'Bolted/Locked', icon: <Lock className="w-5 h-5" /> },
  ]
};

export default function AirportPortsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#cc2221] selection:text-white">

      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative h-[75vh] min-h-[600px] w-full bg-black overflow-hidden">
        <Image
          src={AIRPORT_DATA.heroImage}
          alt={AIRPORT_DATA.title}
          fill
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-16 bg-[#cc2221]" />
                <span className="text-[#cc2221] font-black uppercase tracking-[0.4em] text-sm">
                  Extra-Heavy Duty Division
                </span>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter text-white leading-[0.8]">
                {AIRPORT_DATA.title} <br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                  {AIRPORT_DATA.subtitle}
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 pt-12">
                <Button className="bg-[#cc2221] hover:bg-white hover:text-black text-white font-black px-12 h-20 uppercase tracking-widest transition-all rounded-none border-none shadow-2xl text-base">
                  Get Airport Specs <ChevronRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-black font-black px-12 h-20 uppercase tracking-widest transition-all rounded-none text-base">
                  FAA Certifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. EXTREME RATING BAR                      */}
      {/* ========================================= */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {AIRPORT_DATA.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-4 group">
                <div className="h-16 w-16 bg-[#cc2221] flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-4xl font-black tracking-tighter leading-none">{stat.value}</p>
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. LOGISTICS & AVIATION DEEP DIVE         */}
      {/* ========================================= */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h2 className="text-5xl font-black uppercase tracking-tight text-black flex items-center gap-6">
                  <Maximize2 className="text-[#cc2221] w-12 h-12" />
                  Terminal <span className="text-[#cc2221]">Integrity</span>
                </h2>
                <p className="text-3xl font-bold leading-tight text-gray-900 border-l-[12px] border-black pl-10">
                  {AIRPORT_DATA.description}
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {AIRPORT_DATA.overview}
                </p>
              </div>

              {/* Engineering Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                {[
                  { icon: <Lock />, title: 'Jet-Blast Security', desc: 'Recessed mechanical locking prevents riser displacement during engine thrust.' },
                  { icon: <ShieldAlert />, title: 'FAA Compliant', desc: 'Built to AC 150/5320-6G standards for runway safety areas.' },
                  { icon: <Activity />, title: 'Fatigue Resistance', desc: 'Ductile iron alloys specifically formulated to resist cold-cracking and high-impact cycles.' },
                  { icon: <Anchor />, title: 'Saltwater Shield', desc: 'Available with hot-dip galvanized or epoxy coatings for coastal port facilities.' }
                ].map((feat, i) => (
                  <div key={i} className="bg-zinc-50 p-10 border border-zinc-100 hover:border-[#cc2221] transition-all group">
                    <div className="text-[#cc2221] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feat.icon}
                    </div>
                    <h4 className="font-black uppercase text-lg mb-3 tracking-widest text-black">{feat.title}</h4>
                    <p className="text-sm font-bold text-gray-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Engineering Data */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-zinc-950 text-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#cc2221]" />

                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#cc2221] mb-12 pb-6 border-b border-white/10 flex items-center gap-3">
                  <FileText size={18} /> EHD Data Sheet
                </h3>

                <div className="space-y-8 mb-16">
                  {[
                    { label: 'Tensile Strength', value: '80,000 PSI Minimum' },
                    { label: 'Yield Strength', value: '55,000 PSI Minimum' },
                    { label: 'Elongation', value: '10% Minimum' },
                    { label: 'Load Rating', value: 'Extra-Heavy Duty (EHD)' },
                    { label: 'Compliance', value: 'FAA / NAVFAC / Port Authority' }
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col gap-2 border-b border-white/5 pb-5">
                      <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{spec.label}</span>
                      <span className="font-black text-xl text-white tracking-tight">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#cc2221] hover:bg-white hover:text-black text-white font-black h-20 uppercase tracking-[0.25em] text-xs transition-all rounded-none group">
                  Download Full EHD Catalog <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. CALL TO ACTION                          */}
      {/* ========================================= */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cc2221 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
            Secure Your <br /> <span className="text-[#cc2221]">Heavy Logistics</span>
          </h2>
          <p className="max-w-3xl mx-auto font-bold text-2xl text-zinc-400 mb-16 leading-relaxed">
            "Compromise is not an option in aviation infrastructure. We deliver the duty ratings required for the world's busiest hubs."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Button className="bg-[#cc2221] text-white hover:bg-white hover:text-black font-black px-16 h-24 text-xl uppercase transition-all rounded-none shadow-2xl">
              Consult a Specialist
            </Button>
            <Button variant="outline" className="border-4 border-white text-white hover:bg-[#cc2221] hover:border-[#cc2221] font-black px-16 h-24 text-xl uppercase transition-all rounded-none">
              Project Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trees,
  Layers,
  Grid,
  Hammer,
  Mountain,
  ArrowRight,
  Car,
  Flower2,
  Construction,
  ShieldCheck,
  Sliders,
  PlayCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SolutionItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  href: string;
  tag?: string;
  stats?: string;
}

// --- TAB SCHEMAS WITH DYNAMIC VIDEO PATHS ---
const TABS = [
  {
    id: 'terraces',
    label: 'Paved Terraces & Decks',
    count: "05",
    // Replace this ID with your Vimeo Video ID for Terraces
    // videoUrl: "/video/PR Manufacturing Video.mp4" 
    videoUrl: "/video/C24A 11 options.mp4"

  },
  {
    id: 'landscaping',
    label: 'Landscaping & Gardens',
    count: "02",
    // Replace this ID with your Vimeo Video ID for Landscaping
    videoUrl: "/video/GIF paving risere with frame.698.mp4"
  },
  {
    id: 'driveways',
    label: 'Driveways & Access Areas',
    count: "02",
    // Replace this ID with your Vimeo Video ID for Driveways/Heavy Traffic
    videoUrl: "/video/C24A 11 options.mp4"
  },
  {
    id: 'joinery',
    label: 'Structural & Custom Works',
    count: "02",
    // Replace this ID with your Vimeo Video ID for Structural Custom fabrications
    videoUrl: "/video/GIF paving risere with frame.698.mp4"
  },
];

const SOLUTIONS_DATA: Record<string, SolutionItem[]> = {
  terraces: [
    {
      title: "Adjustable Paving Risers",
      icon: <Grid className="w-6 h-6" />,
      description: "Heavy-duty millimeter-precise elevation units optimized for dimensional granite, structural porcelain, and architectural slab tiles.",
      href: "/solutions/adjustable-paving-risers",
      tag: "Top Specified",
      stats: "Max 1200mm"
    },
    {
      title: "Decking Support Risers",
      icon: <Layers className="w-6 h-6" />,
      description: "Sub-frame leveling cradles engineered to anchor joist substructures for natural timber and heavy composite decking lines.",
      href: "/solutions/decking-support-risers",
      tag: "Fast-Fit",
      stats: "Anti-Rot"
    },
    {
      title: "Self-Leveling Pedestals",
      icon: <Sliders className="w-6 h-6" />,
      description: "Integrated gimbal-head design providing automatic compensation for slope conditions up to a 5% grade slope variant.",
      href: "/solutions/self-leveling-pedestals",
      tag: "Slope Cor.",
      stats: "0% - 5% Comp"
    },
    {
      title: "Fixed Height Risers",
      icon: <Mountain className="w-6 h-6" />,
      description: "Low-profile, stackable separator rings designed for rapid-lay balcony paving configurations over structural membranes.",
      href: "/solutions/fixed-height-risers",
      tag: "Low-Clearance",
      stats: "10-15mm Base"
    },
    {
      title: "Heavy-Duty Pedestal Systems",
      icon: <Car className="w-6 h-6" />,
      description: "Reinforced commercial core profiles built to transfer immense weight matrices across public plazas and municipal squares.",
      href: "/solutions/heavy-duty-pedestals",
      tag: "High Load",
      stats: "3,000kg+ Limit"
    }
  ],
  landscaping: [
    {
      title: "Garden Paving Supports",
      icon: <Flower2 className="w-6 h-6" />,
      description: "Stable, high-density polyethylene base plates designed to raise natural stepping pathways over root systems.",
      href: "/solutions/garden-paving-supports",
      tag: "Eco-Poly",
      stats: "Permeable"
    },
    {
      title: "Raised Landscape Platforms",
      icon: <Trees className="w-6 h-6" />,
      description: "Elevated foundational assemblies designed to decouple hardscape designs from landscape planting features.",
      href: "/solutions/raised-landscape-platforms",
      tag: "Drainage-Safe",
      stats: "Root Protection"
    }
  ],
  driveways: [
    {
      title: "Vehicular Load Pedestals",
      icon: <Car className="w-6 h-6" />,
      description: "Solid-fill casting models designed specifically to bear vehicular movement patterns on structural podium slabs.",
      href: "/solutions/vehicular-load-pedestals",
      tag: "H-20 Traffic",
      stats: "Class A Rated"
    },
    {
      title: "Service & Access Decking",
      icon: <Hammer className="w-6 h-6" />,
      description: "Demountable surface supports providing instant utility vault access without structural masonry deconstruction.",
      href: "/solutions/service-access-decking",
      tag: "Vault Ready",
      stats: "Fast Access"
    }
  ],
  joinery: [
    {
      title: "Custom Pedestal Solutions",
      icon: <Construction className="w-6 h-6" />,
      description: "Bespoke height, sizing, and structural collar adaptations manufactured to clear irregular architecture prints.",
      href: "/solutions/custom-pedestal-solutions",
      tag: "Custom Fab",
      stats: "Built to Spec"
    },
    {
      title: "Industrial Support Systems",
      icon: <Layers className="w-6 h-6" />,
      description: "Corrosion-proof, fiber-reinforced risers tailored to support mechanical plant flooring layouts and rooftop utility arrays.",
      href: "/solutions/industrial-support-systems",
      tag: "Chemical-Res",
      stats: "FRP Core"
    }
  ]
};

export default function RedesignedSolutionsSection() {
  const [activeTab, setActiveTab] = useState('terraces');

  // Find the video string belonging to the active tab configuration state
  const currentVideoUrl = TABS.find((tab) => tab.id === activeTab)?.videoUrl || TABS[0].videoUrl;

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200">
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-16">

        {/* ========================================================================= */}
        {/* --- DUAL PANEL HERO SECTION: LEFT TAGLINES & RIGHT DYNAMIC VIDEO --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-200 pb-16">

          {/* LEFT PANEL: HEAVY INDUSTRY TAGLINES (5 Columns Wide) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#CC0000]" /> System Applications
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 leading-[1.1]">
                Zero Shifting. <br />
                <span className="text-[#CC0000]">Flawless Grades.</span> <br />
                Built to Last.
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-xl">
              Engineered pedestal layout lines designed to level architectural slab elevations effortlessly. Select an application category below to explore certified technical specification assets.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200">
              <div>
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">Load Compliance</h4>
                <p className="text-sm font-bold text-slate-800">3,000kg+ Structural Rating</p>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">Slope Correction</h4>
                <p className="text-sm font-bold text-slate-800">Up to 5% Grade Adjust</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: FULL SCREEN DYNAMIC VIMEO LOOP (7 Columns Wide) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative h-[500px] w-full rounded-sm overflow-hidden bg-black shadow-xl border border-slate-200">

              {/* Dynamic source updates seamlessly on tab shift clicks */}
              <iframe
                key={activeTab} // Force iframe re-mount cleanly when url toggles
                src={currentVideoUrl}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                title="Paving Risers Action Footage"
              />

              <div className="absolute inset-0 pointer-events-none border border-black/10 rounded-sm z-10" />
              <div className="absolute top-4 left-4 bg-[#0F0F0F]/80 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm flex items-center gap-2 pointer-events-none z-20">
                <PlayCircle className="w-3.5 h-3.5 text-[#CC0000] animate-pulse" /> Project Media Link
              </div>
            </div>
          </div>
        </div>
        {/* --- SECTION INTRO HEADER --- */}
        <div className=" mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] block">
            System Applications
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
            Engineered Support <br />For Every Architectural Elevation
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Select an operational layout framework below to explore our technical specification lines. From ultra-low balcony overlays to heavy vehicular traffic platforms.
          </p>
        </div>
        {/* ========================================================================= */}
        {/* --- MATRIX SYSTEM PLATFORM: CONTROLS & DYNAMIC GRID CARDS --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

          {/* CONTROL MATRIX TABS */}
          <div className="lg:col-span-1 flex flex-col gap-2 bg-white p-4 rounded-sm border border-slate-200 shadow-sm sticky top-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 mb-2 block">
              Application Matrix
            </span>
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-4 rounded-sm font-bold text-[12px] uppercase tracking-wide text-left transition-all duration-200 group border",
                    isActive
                      ? "bg-[#0F0F0F] border-[#0F0F0F] text-white pl-6"
                      : "bg-transparent border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-200"
                  )}
                >
                  <span>{tab.label}</span>
                  <span className={cn(
                    "text-xs font-mono px-2 py-0.5 rounded-sm transition-colors",
                    isActive ? "bg-[#CC0000] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700"
                  )}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* INTERACTIVE CARDS FIELD DISPLAY */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {SOLUTIONS_DATA[activeTab]?.map((item, index) => (
                <Link href={item.href} key={index} className="group block h-full">
                  <Card className="h-full bg-white border border-slate-200 shadow-sm rounded-sm group-hover:border-[#CC0000] group-hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#CC0000] group-hover:w-full transition-all duration-300" />

                    <CardContent className="p-6 flex flex-col items-start text-left h-full">
                      <div className="w-full flex items-center justify-between mb-6">
                        <div className="h-10 w-10 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-white group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] transition-all duration-300">
                          {item.icon}
                        </div>
                        {item.tag && (
                          <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-600 px-2 py-1 rounded-sm">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 flex-grow">
                        <h3 className="text-base font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {item.stats && (
                        <div className="w-full mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                          <span>Spec Param:</span>
                          <span className="text-slate-700">{item.stats}</span>
                        </div>
                      )}
                    </CardContent>

                    <div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#CC0000]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
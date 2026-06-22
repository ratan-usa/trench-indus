'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Settings,
  Timer,
  MoveDiagonal,
  Grid,
  HardHat,
  Layers,
  Wrench,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
 
const RISER_SECTIONS = [
  {
    id: "standard-municipal",
    theme: "light",
    overline: "Municipal Solutions",
    title: "Cast Iron",
    highlightText: "Paving Risers",
    description: "Maintain seamless urban traffic flow. Our heavy-duty solid risers allow for precise manhole elevation adjustment during road overlays, eliminating the need to dig up and rebuild the entire structure.",
    image: "/assets/PAVING-RISERS/paving riser 1.5201.png",
    features: [
      { icon: "ShieldCheck", title: "Load Bearing", desc: "Rated for H-20 heavy traffic loads." },
      { icon: "Truck", title: "Bulk Ready", desc: "Supplying municipal scale projects." }
    ],
    meta: [
      { label: "Material", value: "Ductile/Grey Iron ASTM A48" },
      { label: "Standard Sizes", value: "24\", 30\", and Custom Increments" }
    ],
    buttonText: "Request Specifications",
    buttonLink: "#specs"
  },
  {
    id: "expandable-risers",
    theme: "dark",
    overline: "Next-Gen Adjustment",
    title: "Mega-Adjust™",
    highlightText: "Expandable Risers",
    description: "Ditch the mortar bed. Our expandable mechanical risers feature a built-in turnbuckle linkage that locks directly into the existing manhole frame. Twist to expand, lock it in, and pave right over it.",
    image: "/assets/PAVING-RISERS/paving riser 1.5203.png",
    features: [
      { icon: "Settings", title: "Mechanical Lock", desc: "Expands outward to bite into the base frame permanently." },
      { icon: "Timer", title: "Zero Cure Time", desc: "Paving crews can lay asphalt immediately after installation." }
    ],
    meta: [],
    buttonText: "View Expandable Specs",
    buttonLink: "#expandable"
  },
  {
    id: "drainage-catch-basins",
    theme: "light",
    overline: "Drainage Infrastructure",
    title: "Catch Basin &",
    highlightText: "Curb Inlets",
    description: "Roadwork requires more than just round manhole adjustments. We fabricate heavy-duty steel and cast iron rectangular risers designed specifically to raise storm grates and curb inlets to final grade.",
    image: "/assets/PAVING-RISERS/recatangle riser.png",
    features: [
      { icon: "Grid", title: "4-Sided & 3-Sided", desc: "Fully enclosed or D-shape profiles for curb abutments." },
      { icon: "ShieldCheck", title: "Welded Steel", desc: "Engineered for flat grate elevation in highway shoulders." }
    ],
    meta: [
      { label: "Configurations", value: "Square, Rectangular, U-Shape" },
      { label: "Compatibility", value: "Matches DOT curb profiles" }
    ],
    buttonText: "Explore Drainage Risers",
    buttonLink: "#drainage"
  },
  {
    id: "sloped-tapered",
    theme: "light",
    overline: "Road Crowning Solutions",
    title: "Sloped &",
    highlightText: "Tapered Risers",
    description: "Roads are rarely perfectly flat. When resurfacing requires accommodating road crown or grade changes, standard flat risers cause manhole covers to sit unevenly. Our custom-tapered rings ensure a perfectly flush fit.",
    image: "/assets/PAVING-RISERS/paving riser 1.5205.png",
    isComingSoon: true, // Added flag for the badge
    features: [
      { icon: "MoveDiagonal", title: "Precision Angles", desc: "Custom sloped from 1% to 15%+ grades." },
      { icon: "ShieldCheck", title: "Snowplow Safe", desc: "Ensures covers sit flush, preventing plow blade snags." }
    ],
    meta: [],
    buttonText: "Request Custom Fab",
    buttonLink: "#custom"
  }
];

 
const ADVANTAGES = [
  { icon: "Timer", title: "Quick Installation", desc: "Drop in, adjust, and pave. Reduce labor costs on every single utility hole." },
  { icon: "Layers", title: "Stackable Design", desc: "Need 3 inches? Stack a 2\" and a 1\" riser securely for exact elevation matching." },
  { icon: "Wrench", title: "No Digging", desc: "Keep jackhammers off the jobsite. Avoid digging out the concrete base structure." },
  { icon: "HardHat", title: "DOT Approved", desc: "Materials and load ratings designed to breeze through municipal inspections." }
];

 
const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Truck": return <Truck className={className} />;
    case "Settings": return <Settings className={className} />;
    case "Timer": return <Timer className={className} />;
    case "MoveDiagonal": return <MoveDiagonal className={className} />;
    case "Grid": return <Grid className={className} />;
    case "HardHat": return <HardHat className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Wrench": return <Wrench className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ComprehensivePavingRisersMapped() {
  return (
    <div className="w-full font-sans">

      {/* --- SHOWCASE SECTIONS (MAPPED) --- */}
      {RISER_SECTIONS.map((section, index) => {
        const isDark = section.theme === 'dark';
        const isImageLeft = index % 2 === 0;

        return (
          <section
            key={section.id}
            className={`py-20 relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900 border-b border-gray-100'}`}
          >
            {/* Dark mode background glow */}
            {isDark && (
              <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#CC0000]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            )}

            <div className="w-full px-6 md:px-8 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* --- IMAGE COLUMN --- */}
                <div className={`relative ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`relative z-10 aspect-square w-full rounded-2xl overflow-hidden border ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-slate-100 shadow-xl bg-slate-50'}`}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className={`object-contain p-8 ${isDark ? 'drop-shadow-[0_0_30px_rgba(201,37,38,0.2)]' : ''}`}
                    />

                    {/* --- COMING SOON OVERLAY --- */}
                    {section.isComingSoon && (
                      <div className="absolute bottom-0 left-0 right-0 bg-[#CC0000] text-white text-center py-4 font-black uppercase tracking-[0.25em] text-sm shadow-[0_-10px_20px_rgba(204,0,0,0.2)] z-20">
                        Comming Soon
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative square behind image (only on light theme) */}
                  {!isDark && (
                    <div className={`absolute -bottom-6 ${isImageLeft ? '-right-6' : '-left-6'} w-1/2 aspect-square bg-slate-50 border border-slate-200 rounded-2xl -z-10 hidden md:block`}></div>
                  )}
                </div>

                {/* --- TEXT CONTENT COLUMN --- */}
                <div className={`space-y-8 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Header Text */}
                  <div className="space-y-4">
                    <h4 className={`font-bold text-sm uppercase tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-[#CC0000]'}`}>
                      {section.overline}
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight">
                      {section.title} <br /> <span className="text-[#CC0000]">{section.highlightText}</span>
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-xl ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {section.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  {section.features && section.features.length > 0 && (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 ${isDark ? 'border-t border-zinc-800' : ''}`}>
                      {section.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center ${isDark ? 'bg-transparent' : 'bg-[#0F0F0F] text-[#CC0000]'}`}>
                            {renderIcon(feat.icon, `w-6 h-6 text-[#CC0000]`)}
                          </div>
                          <div>
                            <h5 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h5>
                            <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Meta Information Table */}
                  {section.meta && section.meta.length > 0 && (
                    <div className={`p-6 rounded-xl space-y-3 border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-slate-50 border-slate-100'}`}>
                      <div className={`flex justify-between border-b pb-2 ${isDark ? 'border-zinc-800' : 'border-slate-200'}`}>
                        <span className={`font-medium italic text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Our Pledge:</span>
                        <span className={`font-bold text-sm text-right italic ${isDark ? 'text-white' : 'text-slate-900'}`}>"Undertaking every casting... regardless."</span>
                      </div>
                      {section.meta.map((metaItem, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className={isDark ? 'text-zinc-500' : 'text-slate-500'}>{metaItem.label}</span>
                          <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{metaItem.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Button */}
                  <div className="pt-4">
                    <Link href={section.buttonLink}>
                      <Button className={`font-bold h-14 px-8 rounded-lg transition-transform hover:scale-105 w-full sm:w-auto ${isDark ? 'bg-[#CC0000] hover:bg-white hover:text-black text-white' : 'bg-[#CC0000] hover:bg-[#0F0F0F] text-white'}`}>
                        {section.buttonText} <ArrowUpRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* --- ADVANTAGES SECTION --- */}
      <section className="py-20 bg-[#CC0000] text-white">
        <div className="w-full px-6 md:px-8 lg:px-12 mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Why Paving Crews Choose Us</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              We design our risers to minimize road closure times and maximize daily paving footprints.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((adv, i) => (
              <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-xl backdrop-blur-sm text-center shadow-lg hover:bg-white/20 transition-colors group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                   {renderIcon(adv.icon, "w-12 h-12 text-white")}
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{adv.title}</h4>
                <p className="text-sm text-red-50 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="#contact">
              <Button className="bg-white text-[#CC0000] hover:bg-[#0F0F0F] hover:text-white px-10 h-16 text-lg font-black uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl rounded-lg">
                Equip Your Next Jobsite <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Layers, 
  ShieldCheck, 
  Cog, 
  Construction 
} from 'lucide-react';

const FEATURE_BADGES = [
  { icon: <Layers className="w-4 h-4 text-[#CC0000]" />, title: "ENGINEERED", subtitle: "SOLUTIONS" },
  { icon: <ShieldCheck className="w-4 h-4 text-[#CC0000]" />, title: "BUILT FOR", subtitle: "DURABILITY" },
  { icon: <Cog className="w-4 h-4 text-[#CC0000]" />, title: "EASY", subtitle: "INSTALLATION" },
  { icon: <Construction className="w-4 h-4 text-[#CC0000]" />, title: "BUILT FOR", subtitle: "PERFORMANCE" },
];

export default function PavingPathHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-[#f8f8f8] overflow-hidden font-sans border-b-4 border-[#CC0000]">
      {/* Reduced container min-height to strictly match banner proportion */}
      <div className="max-w-[1600px] mx-auto min-h-[220px] lg:min-h-[260px] grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* --- LEFT COLUMN: TYPOGRAPHY & BADGES MATRIX (7 Columns) --- */}
        <div className="lg:col-span-7 px-6 py-6 lg:py-8 space-y-4 z-10">
          
          {/* Main Headline Stack */}
          <div className="space-y-1">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none"
            >
              <span className="text-slate-900">PAVING</span>
              <span className="text-[#CC0000]">YOUR WAY</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight"
            >
              <span className="text-slate-900">FOR</span>
              <span className="bg-[#0F0F0F] text-white px-3 py-0.5 rounded-none inline-flex items-center gap-0.5">
                ANY SITUATION<span className="text-[#CC0000] font-mono">.</span>
              </span>
            </motion.div>
          </div>

          {/* Compact Feature Badges Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-200"
          >
            {FEATURE_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="shrink-0">{badge.icon}</div>
                <div className="text-[9px] font-black uppercase leading-tight tracking-wider text-slate-800">
                  <div>{badge.title}</div>
                  <div className="text-slate-500 font-bold">{badge.subtitle}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* --- RIGHT COLUMN: ANGLED RED BANNER & MANHOLE IMAGE (5 Columns) --- */}
        <div className="lg:col-span-5 relative h-full min-h-[200px] lg:min-h-[260px] bg-slate-900 overflow-hidden flex items-center justify-center">
          
          {/* Angled Red Banner Accent matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 z-0" />
          <div className="absolute -left-8 top-0 bottom-0 w-24 bg-[#CC0000] transform -skew-x-12 z-10 hidden lg:block" />
          <div className="absolute -left-16 top-0 bottom-0 w-16 bg-white/20 transform -skew-x-12 z-10 hidden lg:block" />

          {/* Low-profile Manhole Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full h-full min-h-[180px] p-2 flex items-center justify-center z-20"
          >
            <Image
              src="/images/paving_hero.png"
              alt="Paving Riser Manhole Cover Assembly"
              fill
              className="object-contain p-2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
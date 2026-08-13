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
    <section className="relative w-full bg-[#E0E0E0] overflow-hidden font-sans">
      <div className="w-full pl-6 md:pl-8 lg:pl-12 grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* --- LEFT COLUMN: BRAND TYPOGRAPHY & BADGES --- */}
        <div className="lg:col-span-7 py-6 lg:py-8 space-y-4 z-10">
          
          {/* Main Headline Stack */}
          <div className="space-y-1">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none"
            >
              <span className="text-[#0F0F0F]">PAVING</span>
              <span className="text-[#CC0000]">YOUR WAY</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight"
            >
              <span className="text-[#0F0F0F]">FOR</span>
              <span className="bg-[#0F0F0F] text-white px-3 py-0.5 rounded-none inline-flex items-center gap-0.5">
                ANY SITUATION<span className="text-[#CC0000] font-mono">.</span>
              </span>
            </motion.div>
          </div>

          {/* Feature Badges Matrix */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-zinc-200"
          >
            {FEATURE_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="shrink-0">{badge.icon}</div>
                <div className="text-xs font-black uppercase leading-tight tracking-wider text-[#0F0F0F]">
                  <div>{badge.title}</div>
                  <div className="text-zinc-500 font-bold">{badge.subtitle}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
        {/* --- RIGHT COLUMN: ANGLED BLACK & RED GRAPHIC WITH IMAGE --- */}
        <div className="lg:col-span-5 relative w-full overflow-hidden flex items-end justify-end">
          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full h-full flex items-center  justify-end z-20"
          >
            <Image  
              src="/images/paving_hero.png"
              alt="Paving Riser Manhole Cover Assembly"
              height={400}  
              width={500}
              className="object-contain object-right"
              priority
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
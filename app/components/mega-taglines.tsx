'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PavingPathHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-8  w-full flex items-center justify-center bg-white overflow-hidden font-sans">
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '32px 32px' }} />

       <div className="absolute top-0 left-0 w-32 h-32 border-l-8 border-t-8 border-[#CC0000] -translate-x-12 -translate-y-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Animated Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 bg-[#0F0F0F] px-6 py-2 shadow-2xl"
          >
            <Construction className="text-[#CC0000] w-5 h-5" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
              The Infrastructure Standard
            </span>
          </motion.div>

          {/* MAIN TAGLINE 1: "Paving your way..." */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] text-black"
            >
              Paving <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '2px black' }}>Your Way</span>
            </motion.h1>
          </div>

          {/* MAIN TAGLINE 2: "...for any situation" */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#CC0000]"
            >
              For Any Situation.
            </motion.h2>
          </div>

           {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 max-w-xl text-gray-500 font-bold text-lg md:text-xl leading-relaxed italic"
          >
            "From municipal streets to international airport runways, we provide the vertical precision required for the world's toughest environments."
          </motion.p>

           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Button className="bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-black px-12 h-20 text-lg uppercase transition-all rounded-none shadow-[20px_20px_0px_rgba(201,37,38,0.2)] hover:shadow-none group">
              Start Your Project <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>

            <Button variant="outline" className="border-4 border-black text-black hover:bg-[#0F0F0F] hover:text-white font-black px-12 h-20 text-lg uppercase transition-all rounded-none">
              View All Risers
            </Button>
          </motion.div> */}
        </div>
      </div>

      {/* Side Decorative Numbers (Industrial Blueprint Style) */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Elevation Accuracy</span>
          <span className="text-4xl font-black text-gray-100">±0.25"</span>
        </div>
      </div>

      {/* Vertical Brand Bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-64 w-1 bg-[#CC0000]" />
    </section>
  );
}
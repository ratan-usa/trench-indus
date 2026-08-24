'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, ChevronRight, Activity } from 'lucide-react';
import Link from 'next/link';

export default function VerifiedResultsBanner() {
  return (
    <section className="relative bg-[#0a0a0a] border-t border-b border-zinc-900 py-32 overflow-hidden font-sans">
      
      {/* Background Ambience & Textures */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#CC0000]/10 rounded-[100%] blur-[120px] opacity-70" />
        
        {/* Subtle Grid Pattern stormwater system */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Text Content */}
        <div className="flex flex-col items-center text-center space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-black/50 border border-zinc-800 rounded-sm shadow-xl backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#CC0000]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-300">
              Tested. Proven. Guaranteed.
            </span>
            <Activity className="w-4 h-4 text-[#CC0000]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 max-w-5xl"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
              Pushing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-200">Limits</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-zinc-400">With Verified Results.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative mt-8 group cursor-pointer"
          >
            {/* The Ultimate Badge */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CC0000] to-red-600 rounded-sm blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
            <div className="relative px-12 py-6 bg-black border border-zinc-800 rounded-sm flex items-center justify-center gap-6 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
              <Target className="w-8 h-8 text-[#CC0000] z-10" />
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-[0.2em] text-white z-10">
                The <span className="text-[#CC0000]">Ultimate</span>
              </h3>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-12"
          >
            <Link 
              href="/contact/quote" 
              className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#CC0000] hover:text-white transition-colors duration-300 group"
            >
              Explore the specifications <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

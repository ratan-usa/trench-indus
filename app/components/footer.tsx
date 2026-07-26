'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Flame, 
  Wrench,
  Construction,
  Ruler
} from 'lucide-react';

export default function HeavyFooter() {
  return (
    <footer id="contact" className="bg-[#0F0F0F] text-white pt-24 pb-12 border-t-8 border-[#CC0000] relative overflow-hidden font-sans">
      {/* Heavy Subtle Blueprint Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
      
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-16 relative z-10">
        
        {/* --- TOP BRAND HUD HEADER ROW --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-12 border-b border-zinc-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#CC0000]">
              <Construction className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                PAVING <span className="text-[#CC0000]">RISERS</span>
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Manhole, Valve Box & Catch Basin Elevation Systems • Class 30 Gray Iron
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wider">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black border border-zinc-800 rounded-sm text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CC0000]" /> AASHTO H-20 & HS-20 Traffic Rated
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black border border-zinc-800 rounded-sm text-zinc-400">
              <Wrench className="w-3.5 h-3.5 text-[#CC0000]" /> Pivoted Turnbuckle Gripping Power
            </span>
          </div>
        </div>

        {/* --- MAIN CORE CONTENT SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SECTION: HIGH-VOLUME CONTRACTOR OPERATIONS DESK (5 Columns Wide) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                <Flame className="w-4 h-4 fill-current" /> Estimating Desk
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                Get Bulk Wholesale <br />
                <span className="text-[#CC0000]">Riser Pricing Profiles.</span>
              </h3>
            </div>

            <div className="space-y-6">
              {/* Address Row */}
              <div className="flex items-start gap-4 p-4 bg-black/40 border border-zinc-900 rounded-sm group hover:border-[#CC0000] transition-colors duration-300">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 flex items-center justify-center shrink-0 text-[#CC0000]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h4 className="font-black uppercase tracking-wider text-zinc-400 text-xs mb-1">Casting Foundry Logistics</h4>
                  <p className="font-bold text-white leading-relaxed">
                    Paving Risers Supply<br />
                    105 Maxes Road<br />
                    Melville, NY 11747, USA
                  </p>
                </div>
              </div>

              {/* Address Row - Florida */}
              <div className="flex items-start gap-4 p-4 bg-black/40 border border-zinc-900 rounded-sm group hover:border-[#CC0000] transition-colors duration-300">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 flex items-center justify-center shrink-0 text-[#CC0000]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white leading-relaxed mt-1">
                    850 NW FEDERAL HWY<br />
                    STUART, FL 34994
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-[#CC0000]" />
                    <span className="font-mono font-bold text-white text-sm">(772) 297-0700</span>
                  </div>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-4 p-4 bg-black/40 border border-zinc-900 rounded-sm group hover:border-[#CC0000] transition-colors duration-300">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h4 className="font-black uppercase tracking-wider text-zinc-400 text-xs mb-1">Specs & Submittals Pipeline</h4>
                  <a href="mailto:info@pavingrisers.com" className="font-mono font-black text-white hover:text-[#CC0000] text-sm break-all transition-colors block mt-0.5">
                    info@pavingrisers.com
                  </a>
                </div>
              </div>

              {/* Wholesale Pricing Hotline Callout */}
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-zinc-950 to-black border border-zinc-900 rounded-sm">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm border border-zinc-800 flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm space-y-0.5">
                  <h4 className="font-black uppercase tracking-wider text-zinc-500 text-[10px]">Municipal Sales Division</h4>
                  <p className="font-black text-white text-base tracking-tight uppercase">Call Now for DOT Project Quotes</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: HEAVY RISER DIMENSIONAL DATA SPECIFICATION SUBMITTAL (7 Columns Wide) */}
          <div className="lg:col-span-7 bg-[#141414] border border-zinc-800 p-8 md:p-10 rounded-sm flex flex-col justify-between relative shadow-2xl group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#CC0000]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
                <Ruler className="w-5 h-5 text-[#CC0000]" />
                <h4 className="text-xl font-black uppercase tracking-tight">Custom Riser Fabrication Submittals</h4>
              </div>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-xl">
                We design and fabricate custom solid iron and expandable steel profiles. Provide your project details—including **Cover Diameter, Cover Thickness, Inside Clear Opening of Frame, and Height Need to Raise**—to receive an engineering quote within **24 hours**.
              </p>

              {/* Dynamic Compact Interactive Action Button Array */}
              <div className="pt-4 space-y-4">
                <Button size="lg" className="w-full bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase text-xs tracking-widest h-14 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group/btn">
                  Submit Field Dimensions <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
                <p className="text-[10px] font-mono font-bold text-zinc-600 uppercase text-center tracking-wider">
                  Accepting field logs, .dwg CAD lines, .step files, and dimension sheets
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM RUNNING LEGAL FOOTNOTE BAR --- */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs font-bold uppercase tracking-wider gap-4">
          <p className="font-mono text-center md:text-left">
            &copy; {new Date().getFullYear()} Paving Risers Manufacturing. Infrastructure Engineering Secured.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white border-b border-transparent hover:border-white pb-0.5 transition-all">Privacy Policy</Link>
            <Link href="#" className="hover:text-white border-b border-transparent hover:border-white pb-0.5 transition-all">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
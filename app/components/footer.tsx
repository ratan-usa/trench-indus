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

const FOOTER_LINKS = [
    {
        title: 'Products',
        links: [
            { name: 'Catch Basin / Inlet Risers', href: '/products/catch-basin-risers' },
            { name: 'Manhole Riser', href: '/products/manhole-riser' },
            { name: 'Valve Box Riser', href: '/products/valve-box-risers' },
            { name: 'Manhole Frame/Cover', href: '/products/manhole-frame-cover' },
            { name: 'Adjustment Risers', href: '/products/adjustment-risers' },
            { name: 'D-Shape Risers', href: '/products/d-shape-risers' },
            { name: 'Other Cast Iron Products', href: '/products/other-cast-iron' },
            { name: 'Utility Products', href: '/products/utility-product' },
            { name: 'Fabricated Steel', href: '/products/fabricated-steel' },
        ],
    },
    {
        title: 'Infrastructure',
        links: [
            { name: 'Municipal Roadway', href: '/solutions/paving-resurfacing' },
            { name: 'Storm Drainage', href: '/solutions/storm-drainage' },
            { name: 'Airport & Heavy Port', href: '/solutions/airports-ports' },
            { name: 'Sanitary Sewer', href: '/solutions/sanitary-sewer' },
        ],
    },
    {
        title: 'Technical Library',
        links: [
            { name: 'Literature & Specs', href: '/resources/literature' },
            { name: 'Video Gallery', href: '/resources/videos' },
            { name: 'Engineering Briefs', href: '/resources/briefs' },
            { name: 'Calculators & Tools', href: '/resources/calculators' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { name: 'Request a Quote', href: '/contact' },
            { name: 'Foundry Locations', href: '/about/locations' },
            { name: 'Submit Specifications', href: '/contact' },
        ],
    },
];

export default function HeavyFooter() {
  return (
    <footer id="contact" className="bg-[#CC0000] text-white pt-24 pb-12 border-t-8 border-black relative overflow-hidden font-sans"> 
      
      <div className="w-full px-6 md:px-8 lg:px-12 space-y-16 relative z-10">
        
        {/* --- TOP BRAND HUD HEADER ROW --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-12 border-b border-white/20">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-black">
              <Construction className="w-6 h-6 animate-pulse" />
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                PAVING <span className="text-black">RISERS</span>
              </span>
            </div>
            <p className="text-xs font-mono text-white/70 uppercase tracking-widest">
              Manhole, Valve Box & Catch Basin Elevation Systems • Class 30 Gray Iron
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wider">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/20 border border-white/10 rounded-sm text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-black" /> AASHTO H-20 & HS-20 Traffic Rated
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/20 border border-white/10 rounded-sm text-white">
              <Wrench className="w-3.5 h-3.5 text-black" /> Pivoted Turnbuckle Gripping Power
            </span>
          </div>
        </div>

        {/* --- MAIN CORE CONTENT SPLIT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SECTION: HIGH-VOLUME CONTRACTOR OPERATIONS DESK (4 Columns Wide) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-black flex items-center gap-2">
                <Flame className="w-4 h-4 fill-current" /> Estimating Desk
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                Get Bulk Wholesale <br />
                <span className="text-black">Riser Pricing Profiles.</span>
              </h3>
            </div>

            <div className="space-y-6">
              {/* Address Row */}
              <div className="flex items-start gap-4 p-4 bg-black/20 border border-black/10 rounded-sm group hover:border-black transition-colors duration-300">
                <div className="w-10 h-10 bg-black rounded-sm border border-black flex items-center justify-center shrink-0 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h4 className="font-black uppercase tracking-wider text-white/70 text-xs mb-1">Casting Foundry Logistics</h4>
                  <p className="font-bold text-white leading-relaxed">
                    Paving Risers Supply<br />
                    105 Maxes Road<br />
                    Melville, NY 11747, USA
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-black" />
                    <span className="font-mono font-bold text-white text-sm">(631) 458-1111</span>
                  </div>
                </div>
              </div>

              {/* Address Row - Florida */}
              <div className="flex items-start gap-4 p-4 bg-black/20 border border-black/10 rounded-sm group hover:border-black transition-colors duration-300">
                <div className="w-10 h-10 bg-black rounded-sm border border-black flex items-center justify-center shrink-0 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-white leading-relaxed mt-1">
                    850 NW FEDERAL HWY<br />
                    STUART, FL 34994
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4 text-black" />
                    <span className="font-mono font-bold text-white text-sm">(772) 297-0700</span>
                  </div>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-4 p-4 bg-black/20 border border-black/10 rounded-sm group hover:border-black transition-colors duration-300">
                <div className="w-10 h-10 bg-black rounded-sm border border-black flex items-center justify-center shrink-0 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <h4 className="font-black uppercase tracking-wider text-white/70 text-xs mb-1">Specs & Submittals Pipeline</h4>
                  <a href="mailto:info@pavingrisers.com" className="font-mono font-black text-white hover:text-black text-sm break-all transition-colors block mt-0.5">
                    info@pavingrisers.com
                  </a>
                </div>
              </div>

              {/* Wholesale Pricing Hotline Callout */}
              <div className="flex items-start gap-4 p-4 bg-black border border-black rounded-sm shadow-xl">
                <div className="w-10 h-10 bg-white/10 rounded-sm border border-white/10 flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm space-y-0.5">
                  <h4 className="font-black uppercase tracking-wider text-white/60 text-[10px]">Municipal Sales Division</h4>
                  <p className="font-black text-white text-base tracking-tight uppercase">Call Now for DOT Project Quotes</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: SITE MAP LINKS GRID (7 Columns Wide) */}
          <div className="lg:col-span-8 bg-black/20 border border-black/10 p-8 md:p-10 rounded-sm relative shadow-2xl group overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {FOOTER_LINKS.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h4 className="text-white font-black uppercase tracking-widest text-xs border-b border-white/20 pb-3 shadow-sm">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, lidx) => (
                      <li key={lidx}>
                        <Link href={link.href} className="text-white/80 hover:text-white hover:font-black text-xs font-bold uppercase tracking-wider transition-all inline-block hover:translate-x-1 transform duration-300">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM RUNNING LEGAL FOOTNOTE BAR --- */}
        <div className="pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center text-white/50 text-xs font-bold uppercase tracking-wider gap-4">
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
'use client';

import React from 'react';
import InteractiveProduct from './InteractiveProduct';

// --- DEFINITIONS MATCHING INTERACTIVEPRODUCT EXPECTATIONS ---
interface Hotspot {
  id: number; // Strictly matching the component's expected number type
  x: string;
  y: string;
  title: string;
  desc: string;
}

interface ProductDataItem {
  id: string; // Keep this as a string for React's top-level loop key
  imgSrc: string;
  HOTSPOTS: Hotspot[];
}

// --- UPDATED PRODUCT DATA WITH UNIQUE NUMERICAL IDs ---
const data: ProductDataItem[] = [
  {
    id: 'riser-15200',
    imgSrc: '/assets/PAVING-RISERS/paving riser 1.5200.png',
    HOTSPOTS: [
      { id: 101, x: '37%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 102, x: '45%', y: '70%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 103, x: '68%', y: '60%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }, 
  {
    id: 'riser-15205',
    imgSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
    HOTSPOTS: [
      { id: 201, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 202, x: '65%', y: '40%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 203, x: '69%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 204, x: '34%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }, 
  {
    id: 'riser-15203',
    imgSrc: '/assets/PAVING-RISERS/paving riser 1.5203.png',
    HOTSPOTS: [
      { id: 301, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
      { id: 302, x: '65%', y: '35%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
      { id: 303, x: '69%', y: '65%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    ]
  }
];

export default function ProductInteractiveImage() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-[#CC0000] text-3xl font-black mb-10 text-center uppercase tracking-tight">
          Product Features
        </h2>

        <div className="space-y-12">
          {data.map((link) => (
            <section key={link.id} className="pb-12 border-b border-gray-100 last:border-b-0">
              <InteractiveProduct
                imageSrc={link.imgSrc}
                altText="Paving Riser Blueprint Inspection"
                hotspots={link.HOTSPOTS}
              />
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-slate-400 text-sm italic">
          Hover over the points to see details
        </p>

      </div>
    </section>
  );
}
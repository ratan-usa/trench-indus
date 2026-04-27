import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// --- DATA ---
// I added a 'description' field to populate the text on hover
export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Adjustment Risers",
    slug: "adjustment-risers",
    description: "Adjust any manhole or catch basin to final grade with steel or cast iron riser rings.",
    imageSrc: "/assets/PAVING-RISERS/paving riser 1.5203.png",
  },
  {
    id: 2,
    title: "INFRA-RISER® Adjustment Risers",
    slug: "infra-riser-adjustment-risers",
    description: "Prolong structure life with the INFRA-RISER® rubber composite adjustment riser",
    imageSrc: "/assets/PAVING-RISERS/paving riser 1.5204.png",
  }
];

export default function AdjustmentProducts() {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="p-6 md:p-8 lg:p-12">

        {/* Section Header */}
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight mb-8">
          Adjustment Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="block group"
            >
              {/* Outer Card Container */}
              <div className="relative overflow-hidden h-[320px] bg-white border border-gray-200 border-b-[6px] border-b-transparent group-hover:border-b-[#CC0000] transition-all duration-300">

                {/* --- 1. DEFAULT STATE --- */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 bg-white transition-opacity duration-300 group-hover:opacity-0">
                  <div className="relative w-full flex-1 mb-6 flex items-center justify-center">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-600 text-center leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* --- 2. HOVER STATE --- */}
                <div className="absolute inset-0 flex flex-col items-center p-8 bg-[#f2f2f2] opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                  {/* Faded Watermark Image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-contain p-4 scale-110"
                    />
                  </div>

                  {/* Hover Content (Z-index to sit above watermark) */}
                  <div className="relative z-10 text-center w-full h-full flex flex-col">
                    {/* Top Title */}
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                      {category.title}
                    </h3>

                    {/* Middle Description */}
                    <p className="text-base text-slate-700 font-medium my-auto px-2 leading-snug">
                      {category.description}
                    </p>

                    {/* Bottom CTA */}
                    <div className="text-[#CC0000] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-1 pb-2">
                      SEE ALL <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
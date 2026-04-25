import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'delivery',
    overline: 'FEATURED SERVICE',
    title: 'Direct-to-Site Delivery',
    description: 'Get back on the job fast. Order standard and custom adjustment risers online or over the phone to get heavy-duty cast iron delivered straight to your staging area.',
    linkText: 'Schedule delivery',
    href: '#delivery'
  },
  {
    id: 'pricing',
    overline: 'FEATURED BENEFIT',
    title: 'Bulk & Volume Pricing',
    description: 'Maximize your project budget. We offer specialized contractor pricing and deep volume discounts on full pallets of steel and precast concrete grade rings.',
    linkText: 'View contractor pricing',
    href: '#pricing'
  },
  {
    id: 'desk',
    overline: 'FEATURED SERVICE',
    title: 'Pro Supply Desk',
    description: 'Our warehouse counters serve the unique needs of municipal paving crews. Find exactly what you need, from expert DOT spec advice to in-stock catch basin frames.',
    linkText: 'Find your local desk',
    href: '#locations'
  }
];

export default function ServicesAndSolutions() {
  return (
    <section className="bg-gray-50 font-sans">
      <div className="p-6 md:p-8 lg:p-12">
        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
            Services & Solutions
          </h2>
          <Link
            href="/pro-service"
            className="text-[#cc2221] font-medium hover:underline transition-colors"
          >
            View all Pro Services
          </Link>
        </div>

        {/* --- 3-COLUMN CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#cc2221] rounded-md overflow-hidden flex flex-col p-8 md:p-10 min-h-[320px] group shadow-sm hover:shadow-md transition-shadow"
            >

              {/* Decorative Geometric Background Pattern (Mimicking the original image) */}
              <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full border-[40px] border-black/10 pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full border-[30px] border-white/5 pointer-events-none"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">

                <div className="mt-auto md:mt-12">
                  {/* Overline */}
                  <h4 className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">
                    {card.overline}
                  </h4>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-auto">
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-white font-medium hover:text-gray-200 transition-colors text-sm md:text-base"
                  >
                    {card.linkText} <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
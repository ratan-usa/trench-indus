import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const INDUSTRY_SOLUTIONS = [
  {
    id: 'municipal',
    title: 'Municipal & DOT',
    description: "Exceed your city inspectors' expectations with access to thousands of DOT-approved, professional-grade adjustment risers and catch basin frames.",
    linkText: 'Explore municipal solutions',
    href: '#municipal',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: "Depend on Ben & Ben's as the big-job solution for commercial contractors. We supply the heavy-duty grading rings needed for high-traffic retail plazas and parking structures.",
    linkText: 'Find commercial solutions',
    href: '#commercial',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply',
    description: "Save time, cut costs, and optimize your jobsite operations by using us as your single-source supplier for direct-to-site delivery of all your cast iron and steel needs.",
    linkText: 'Discover logistics support',
    href: '#logistics',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  },
  {
    id: 'fabrication',
    title: 'Custom Fabrication',
    description: "Take advantage of our extensive fabrication facilities. We custom-weld non-standard rectangular inlets, sloped seats, and extra-heavy-duty frames to your exact specs.",
    linkText: 'Explore fabrication',
    href: '#fabrication',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  },
  {
    id: 'water',
    title: 'Water & Sewer',
    description: "Keep essential utilities accessible with our huge inventory of solid and expandable valve box risers, designed specifically for water distribution and sanitary sewer rehab.",
    linkText: 'Discover water solutions',
    href: '#water',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  },
  {
    id: 'industrial',
    title: 'Industrial Heavy-Duty',
    description: "Expect more from your infrastructure. We supply specialized 50-ton shock load grates and specialized access covers for factory and logistics center applications.",
    linkText: 'Explore industrial solutions',
    href: '#industrial',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png'
  }
];

export default function IndustrySolutionsGrid() {
  return (
    <section className="bg-white py-16 font-sans">
      <div className="p-6 md:p-8 lg:p-12">
        
        <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">
          Ben & Ben's Industry Solutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          {INDUSTRY_SOLUTIONS.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 group">
              
              {/* Image Left */}
              <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:min-h-[160px] bg-gray-100 overflow-hidden shrink-0">
                <Image 
                  src={item.imageSrc} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Right */}
              <div className="flex flex-col justify-center sm:w-3/5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={item.href} 
                    className="inline-flex items-center text-[#cc2221] font-bold text-sm hover:text-black transition-colors"
                  >
                    {item.linkText} <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
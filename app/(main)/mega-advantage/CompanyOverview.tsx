import React from 'react';
import Image from 'next/image';

const OVERVIEW_DATA = [
  {
    id: 'product-range',
    title: 'Product Range',
    description: 'Our extensive product range includes solid steel and cast iron adjustment risers, catch basin frames, utility vault access solutions, and custom fabricated grading rings tailored for municipal infrastructure.',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png', // Replace with an aerial shot of a large stocking yard or distribution center
    altText: 'Installed manhole cover on a city sidewalk'
  },
  {
    id: 'quality-manufacturing',
    title: 'Quality Manufacturing',
    description: 'Integrating automated foundry technology, lean fabrication processes, and decades of experience in crafting heavy-duty metal infrastructure products keeps our facilities performing at peak efficiency.',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png', // Replace with an aerial shot of a large stocking yard or distribution center
    altText: 'Worker operating heavy machinery in a foundry'
  },
  {
    id: 'distribution-network',
    title: 'Distribution Network',
    description: 'Mega Paving Risers and access solutions are available nationwide at our internal stocking locations and directly through our extensive network of heavy-materials distribution partners.',
    imageSrc: '/assets/PAVING-RISERS/d-shape.png', // Replace with an aerial shot of a large stocking yard or distribution center
    altText: 'Large outdoor inventory yard filled with infrastructure products'
  }
];

export default function CompanyOverview() {
  return (
    <section className="bg-white py-16 font-sans border-b border-gray-100">
      <div className="p-6 md:p-8 lg:p-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {OVERVIEW_DATA.map((item) => (
            <div key={item.id} className="flex flex-col group">

              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Fallback styling if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest -z-10">
                  [Image]
                </div>
              </div>

              {/* Title (Brand Red) */}
              <h3 className="text-xl font-bold text-[#cc2221] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
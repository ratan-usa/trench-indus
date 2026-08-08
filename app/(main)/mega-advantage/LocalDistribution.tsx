import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LocalDistribution() {
  return (
    <section className="bg-white py-16 font-sans border-b border-gray-100">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- HEADER --- */}
        <div className="mb-8 text-xl md:text-2xl font-bold text-gray-900">
          View <span className="text-[#CC0000]">your local inventory</span> and DOT specifications with an account!
        </div>

        {/* --- 3-IMAGE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative w-full h-64 bg-gray-100 rounded-sm overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/recatangle%20riser.png`} // Replace with street manhole image
              alt="Installed manhole riser on street"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 bg-gray-100 rounded-sm overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/recatangle%20riser.png`} // Replace with street manhole image
              alt="Utility valve box in commercial district"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-64 bg-gray-100 rounded-sm overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/recatangle%20riser.png`} // Replace with street manhole image
              alt="Catch basin frame and grate"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* --- FOOTER PARAGRAPH --- */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our nationwide distribution network, <Link href="#manufacturing" className="text-[#CC0000] hover:underline">USA-based manufacturing facilities</Link>, and <Link href="#sales" className="text-[#CC0000] hover:underline">regional sales hubs</Link> put us in the perfect position to back our paving risers with real, responsive customer service. Because we understand local municipal and state DOT standards inside and out, our regional production lines keep the exact cast iron and steel components you need within quick reach of your jobsite.
        </div>

      </div>
    </section>
  );
}
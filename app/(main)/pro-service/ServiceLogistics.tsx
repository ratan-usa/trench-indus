import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ServiceLogistics() {
  return (
    <section className="bg-white py-16 font-sans">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- TOP HEADER & INTRO --- */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How Trench Industries supports your crew
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-4xl leading-relaxed">
            We provide expert support for every stage of your paving and infrastructure projects. Discover how you can keep your jobsite fully stocked, cut down on installation time, and keep your paving crews moving with our dedicated supply and logistics services.
          </p>
        </div>

        {/* --- BOTTOM SPLIT SECTION --- */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 lg:gap-16">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Direct-to-Jobsite Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We stock a massive inventory of standard and custom adjustment risers so you never have to wait on parts. Our logistics team coordinates directly with your project managers to deliver heavy-duty cast iron and steel risers exactly when and where you need them, keeping your roadwork on schedule.
            </p>

            <a
              href="#delivery-solutions"
              className="inline-flex items-center text-[#CC0000] font-bold hover:text-black transition-colors group"
            >
              Discover delivery solutions
              <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-64 md:h-full min-h-[350px] overflow-hidden rounded-sm shadow-sm border border-gray-100">
              {/* Replace the src with an actual image of a delivery truck or jobsite staging area */}
              <Image
                src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/PAVING-RISERS/paving%20riser%201.5200.png`}
                alt="Trench Industries Delivery Truck at Jobsite"
                fill
                className="object-cover"
              />
              {/* Fallback styling if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 -z-10">
                <span className="text-gray-400 font-mono text-sm uppercase tracking-widest">
                  [Delivery Truck Image]
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
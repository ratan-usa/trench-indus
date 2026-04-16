import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ContractorServices() {
  return (
    <div className="font-sans">

      {/* --- SECTION 1: PRO TRADE SERVICES --- */}
      <section className="w-full">
        {/* Red Brand Banner Area */}
        <div className="bg-[#c92526] text-white flex flex-col md:flex-row items-stretch">

          <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
              Dedicated Support for Trade Professionals
            </h2>
            <p className="text-lg text-white/90 max-w-2xl font-medium">
              Explore our dedicated industry solutions, branch pickup options, and direct-to-jobsite delivery services for contractors and municipal workers.
            </p>
          </div>

          {/* Banner Image (Right Side) */}
          <div className="relative w-full md:w-1/3 min-h-[200px] md:min-h-full hidden md:block">
            <Image
              src="/assets/PAVING-RISERS/d-shape.png" // Replace with a shot of workers installing a riser
              alt="Contractors installing a manhole riser"
              fill
              className="object-cover opacity-60 mix-blend-multiply grayscale"
            />
            {/* Gradient fade to blend image with the red background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c92526] via-[#c92526] to-transparent"></div>
          </div>
        </div>

        {/* Light Grey Info Box */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We know that running a trade business means dealing with tight deadlines and sudden schedule changes. That's why we set up our contractor services to actually make your job easier. Our team works with you online, over the phone, or right at the warehouse counter to help you find the exact adjustment rings you need, saving you time and avoiding costly delays. Find out how we can supply everything your crew needs to get the road open on time.
              </p>

              <p className="text-gray-900 font-bold mb-6 text-lg">
                Let's talk about setting up a contractor account.
              </p>

              <a href="#contact" className="inline-flex items-center text-[#c92526] font-black uppercase tracking-wider hover:text-black transition-colors">
                Contact our pro desk <ChevronRight className="w-5 h-5 ml-1" strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </section>


      

    </div>
  );
}
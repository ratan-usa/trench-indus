import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function IndustrySolutionsBanner() {
  return (
    <section className="w-full font-sans border-b border-gray-200">
      
      {/* --- TOP BANNER (Red Theme) --- */}
      <div className="bg-[#cc2221] text-white flex flex-col md:flex-row items-stretch relative overflow-hidden">
        
        {/* Banner Text Area */}
        <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-white/90 max-w-2xl font-medium leading-relaxed">
            Expect heavy-duty, field-tested paving risers and infrastructure solutions from the industry experts to help your crew finish every municipal and commercial job on time.
          </p>
        </div>
        
        {/* Banner Background Image */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
            <Image 
              src="/assets/projects/ind-1.jpg" // Replace with a shot of workers or a foundry
              alt="Industrial workers" 
              fill 
              className="object-cover opacity-30 mix-blend-multiply grayscale"
            />
            {/* Gradient fade to seamlessly blend the image into the solid red background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#cc2221] via-[#cc2221]/80 to-transparent"></div>
        </div>
      </div>

      {/* --- BOTTOM INFO BOX (Light Gray) --- */}
      <div className="bg-gray-50">
        <div className="p-6 md:p-8 lg:p-12">
          <div className="max-w-4xl">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              Our experienced team works directly with contractors, municipal planners, and road crews to understand the exact scope of your paving project. Whether you are dealing with sloped manhole seats, non-standard catch basins, or high-traffic highway specs, our specialized fabrication division ensures you get the exact steel and cast iron components you need. See what Ben & Ben's can do to keep your infrastructure projects moving, no matter your line of work.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center text-[#cc2221] font-bold uppercase tracking-wider hover:text-black transition-colors group"
            >
              Contact our sales team 
              <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
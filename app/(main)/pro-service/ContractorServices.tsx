import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ContractorServices() {
    return (
        <div className="font-sans">

            {/* --- SECTION 1: PRO TRADE SERVICES --- */}
            <section className="w-full">
                {/* Red Brand Banner Area */}
                <div className="bg-[#cc2221] text-white flex flex-col md:flex-row items-stretch">

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
                        <div className="absolute inset-0 bg-gradient-to-r from-[#cc2221] via-[#cc2221]/80 to-transparent"></div>
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

                            <a href="#contact" className="inline-flex items-center text-[#cc2221] font-black uppercase tracking-wider hover:text-black transition-colors">
                                Contact our pro desk <ChevronRight className="w-5 h-5 ml-1" strokeWidth={3} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- SECTION 2: CUSTOM FABRICATION --- */}
            {/* <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
             <div>
              <div className="w-12 h-1.5 bg-[#cc2221] mb-6"></div>
              <h2 className="text-4xl font-black uppercase text-gray-900 mb-4 tracking-tight">
                Custom Fabrication
              </h2>
              <p className="text-gray-500 text-lg mb-8 font-medium">
                Specialty steel setups, non-standard catch basins, and heavy-duty DOT spec risers.
              </p>

              <h3 className="font-bold text-gray-900 text-xl mb-4">
                What Our Custom Division Handles
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                When standard off-the-shelf sizes won't fit the existing infrastructure, our fabrication team builds custom adjustment risers for:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2 mb-8 marker:text-[#cc2221] text-lg font-medium">
                <li>Non-standard rectangular curb inlets</li>
                <li>Sloped or heavily degraded manhole seats</li>
                <li>Emergency municipal road repairs</li>
                <li>High-load airport tarmac drains</li>
                <li>Specific regional DOT requirements</li>
              </ul>
            </div>

             <div className="relative w-full h-full min-h-[500px]">
                <div className="absolute top-0 left-0 w-48 h-32 hover:-translate-y-2 transition-transform duration-300">
                 <Image 
                   src="/assets/PAVING-RISERS/paving riser 1.5203.png" 
                   alt="Custom Rectangular Riser" 
                   fill 
                   className="object-contain drop-shadow-xl"
                 />
               </div>

                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-40 hover:-translate-y-2 transition-transform duration-300 z-10">
                 <Image 
                   src="/assets/PAVING-RISERS/paving riser 1.5203.png" 
                   alt="Solid Round Riser" 
                   fill 
                   className="object-contain drop-shadow-2xl"
                 />
               </div>

                <div className="absolute top-8 right-0 w-40 h-32 hover:-translate-y-2 transition-transform duration-300">
                 <Image 
                   src="/assets/PAVING-RISERS/paving riser 1.5203.png" 
                   alt="Square Catch Basin Riser" 
                   fill 
                   className="object-contain drop-shadow-lg"
                 />
               </div>

                <div className="absolute bottom-10 left-10 w-48 h-32 hover:-translate-y-2 transition-transform duration-300">
                 <Image 
                   src="/assets/PAVING-RISERS/paving riser 1.5203.png" 
                   alt="D-Shape Inlet Riser" 
                   fill 
                   className="object-contain drop-shadow-xl"
                 />
               </div>

                <div className="absolute bottom-0 right-10 w-32 h-48 hover:-translate-y-2 transition-transform duration-300">
                 <Image 
                   src="/assets/PAVING-RISERS/paving riser 1.5203.png" 
                   alt="Tall Valve Box Riser" 
                   fill 
                   className="object-contain drop-shadow-xl"
                 />
               </div>
            </div>

          </div>
        </div>
      </section> */}

        </div>
    );
}
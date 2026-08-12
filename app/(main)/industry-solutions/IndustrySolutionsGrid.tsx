import React from 'react';
import { ArrowRight, Box } from 'lucide-react';

const INDUSTRY_SOLUTIONS = [
  {
    id: 'municipal',
    title: 'Municipal & DOT',
    description: "Exceed your city inspectors' expectations with access to thousands of DOT-approved, professional-grade adjustment risers and catch basin frames.",
    linkText: 'Explore municipal solutions',
    href: '#municipal',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20with%20screws.600.png`
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: "Depend on Ben & Ben's as the big-job solution for commercial contractors. We supply the heavy-duty grading rings needed for high-traffic retail plazas and parking structures.",
    linkText: 'Find commercial solutions',
    href: '#commercial',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Sqaure%20Riser%20Coated%20Finish.611.png`
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply',
    description: "Save time, cut costs, and optimize your jobsite operations by using us as your single-source supplier for direct-to-site delivery of all your cast iron and steel needs.",
    linkText: 'Discover logistics support',
    href: '#logistics',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Round%20Riser%20Coated%20Finish.612.png`
  },
  {
    id: 'fabrication',
    title: 'Custom Fabrication',
    description: "Take advantage of our extensive fabrication facilities. We custom-weld non-standard rectangular inlets, sloped seats, and extra-heavy-duty frames to your exact specs.",
    linkText: 'Explore fabrication',
    href: '#fabrication',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Rectangle%20Paving%20Riser%201%20Coated%20finish.621.png`
  },
  {
    id: 'water',
    title: 'Water & Sewer',
    description: "Keep essential utilities accessible with our huge inventory of solid and expandable valve box risers, designed specifically for water distribution and sanitary sewer rehab.",
    linkText: 'Discover water solutions',
    href: '#water',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/D%20shape%20Riser%20with%20coated%20Finish.633.png`
  },
  {
    id: 'industrial',
    title: 'Industrial Heavy-Duty',
    description: "Expect more from your infrastructure. We supply specialized 50-ton shock load grates and specialized access covers for factory and logistics center applications.",
    linkText: 'Explore industrial solutions',
    href: '#industrial',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%201%20coated.655.png`
  },
  {
    id: 'utilities',
    title: 'Underground Utilities',
    description: "Access our deep inventory of standard and expandable adjustment rings. See for yourself why utility contractors rely on us to keep manholes and valve vaults perfectly aligned with final grade.",
    linkText: 'Find utility solutions',
    href: '#utilities',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%202%20coated.649.png`
  },
  {
    id: 'stormwater',
    title: 'Stormwater Management',
    description: "Rely on our watertight grade rings and heavy-duty catch basin frames for critical sanitary sewer and stormwater infrastructure projects to prevent inflow and infiltration.",
    linkText: 'Explore stormwater solutions',
    href: '#stormwater',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%203%20coated.644.png`
  },
  {
    id: 'residential',
    title: 'Residential Subdivisions',
    description: "From new neighborhood developments to HOA road resurfacing, we provide personalized support and a full catalog of curb inlets and meter box risers to keep your paving crews moving.",
    linkText: 'Explore residential solutions',
    href: '#residential',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20rectangle%20coated.670.png`
  },
  {
    id: 'heavy-infrastructure',
    title: 'Heavy-Infrastructure Projects',
    description: "From pre-bid planning to the final paving pass, Ben & Ben's operates on a massive scale to supply complex highway and airport expansions through single-source fabrication and dedicated logistics.",
    linkText: 'Partner on mega-projects',
    href: '#heavy-infrastructure',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Square%20coated.665.png`
  }
];

export default function IndustrySolutionsGrid() {
  return (
    <section className="bg-[#0A0A0A] py-24 font-sans text-white border-t border-[#333]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex items-center gap-4 mb-16 border-b border-[#333] pb-6">
          <Box className="w-8 h-8 text-[#CC0000]" />
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-widest">
            Specialized Sectors
          </h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {INDUSTRY_SOLUTIONS.map((item, index) => {
            // Make the first and 4th items span 2 columns on extra large screens for a dynamic bento feel
            const isWide = index === 0 || index === 3 || index === 6;

            return (
              <div 
                key={item.id} 
                className={cn(
                  "group relative flex flex-col bg-[#111] border border-[#333] hover:border-[#CC0000] hover:shadow-[0_0_40px_rgba(204,0,0,0.15)] transition-all duration-500 overflow-hidden",
                  isWide ? "xl:col-span-2 xl:flex-row" : "flex-col"
                )}
              >
                {/* Visual Area */}
                <div className={cn(
                  "relative bg-[#050505] p-8 flex items-center justify-center overflow-hidden border-[#222]",
                  isWide ? "w-full xl:w-1/2 border-b xl:border-b-0 xl:border-r h-64 xl:h-full" : "w-full border-b h-64"
                )}>
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                  
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out"
                  />

                  {/* ID Tag */}
                  <div className="absolute top-4 left-4 bg-[#CC0000] text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest z-20 shadow-lg">
                    SEC-{index + 1}
                  </div>
                </div>

                {/* Content Area */}
                <div className={cn(
                  "p-8 flex flex-col flex-grow relative",
                  isWide ? "w-full xl:w-1/2" : "w-full"
                )}>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-widest text-white mb-4 group-hover:text-[#CC0000] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs leading-loose mb-8 flex-grow">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-auto flex items-center justify-between border-t border-[#333] pt-6 group/btn"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover/btn:text-white transition-colors">
                      {item.linkText}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center group-hover/btn:bg-[#CC0000] group-hover/btn:border-[#CC0000] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover/btn:text-white group-hover/btn:-rotate-45 transition-all duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
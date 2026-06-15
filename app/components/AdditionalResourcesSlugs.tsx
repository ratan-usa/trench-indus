import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkIcon, PlayCircle } from 'lucide-react';

// --- DATA WITH SLUGS ---
const RESOURCES = [
  {
    id: 'res-1',
    title: 'Mega-Adjust™ White Paper',
    slug: 'mega-adjust-white-paper', // Used for routing
    type: 'document', // Determines the icon used
    imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png', // Replace with product photo
  },
  {
    id: 'res-2',
    title: 'Installation Guidelines',
    slug: 'installation-guidelines',
    type: 'document',
    imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png', // Replace with product photo
  },
  {
    id: 'res-3',
    title: 'Adjustment Riser Brochure',
    slug: 'adjustment-riser-brochure',
    type: 'document',
    imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png', // Replace with product photo
  },
  {
    id: 'res-4',
    title: 'Adjustment Riser Video',
    slug: 'adjustment-riser-video',
    type: 'video',
    imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png', // Replace with product photo
  }
];

export default function AdditionalResourcesSlugs() {
  return (
    <section className="bg-white w-full  font-sans border-t border-gray-100">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- HEADER --- */}
        <h2 className="text-3xl md:text-4xl font-black text-[#CC0000] uppercase tracking-tight mb-8">
          Additional Resources
        </h2>

        {/* --- 4-COLUMN GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.slug}`} // Dynamic routing using the slug
              className="group relative w-full aspect-[3/4] bg-gray-900 overflow-hidden rounded-sm block"
            >

              {/* Background Image */}
              <Image
                src={resource.imageSrc}
                alt={resource.title}
                fill
                className="object-cover opacity-90 transition-all duration-500"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 pointer-events-none"></div>

              {/* Top Text (Title) */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-snug drop-shadow-md">
                  {resource.title}
                </h3>
              </div>

              {/* Bottom Action Icon & Text */}
              <div className="absolute bottom-6 left-6 z-10 flex items-center text-[#CC0000] font-black uppercase tracking-widest text-sm group-hover:text-white transition-colors duration-300">
                {resource.type === 'video' ? (
                  <>
                    <PlayCircle className="w-5 h-5 mr-2" strokeWidth={2.5} />
                    Video
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-4 h-4 mr-2" strokeWidth={3} />
                    Link
                  </>
                )}
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
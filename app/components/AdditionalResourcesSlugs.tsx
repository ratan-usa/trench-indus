import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkIcon, PlayCircle } from 'lucide-react';

// --- DATA WITH SLUGS ---
const RESOURCES = [
  {
    id: 'res-1',
    title: 'Paving-Adjust™ White Paper',
    slug: 'Paving-Adjust-white-paper', // Used for routing
    type: 'document', // Determines the icon used
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_riser.811.png`, // Replace with product photo
  },
  {
    id: 'res-2',
    title: 'Installation Guidelines',
    slug: 'installation-guidelines',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Rise__with_Iron.635.png`, // Replace with product photo
  },
  {
    id: 'res-3',
    title: 'Adjustment Riser Brochure',
    slug: 'adjustment-riser-brochure',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Adjustbale_riser_coated_finish.808.png`, // Replace with product photo
  },
  {
    id: 'res-4',
    title: 'Manhole Riser Video',
    slug: 'manhole-riser-video',
    type: 'video',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Manhole_riser/Round_Riser_with_screw_iron_Finish.615.png`, // Replace with product photo
  },
  {
    id: 'res-5',
    title: 'Load Test Reports',
    slug: 'load-test-reports',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Rectangle_Riser_with_cast_iron.637.png`,
  },
  {
    id: 'res-6',
    title: 'Custom Fabrication Guide',
    slug: 'custom-fabrication-guide',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Custom_Riser/D_shape_Riser_Raw_Finish.602.png`,
  },
  {
    id: 'res-7',
    title: 'INFRA-RISER Specs',
    slug: 'infra-riser-specs',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trash_racks/tr1.21.png`,
  },
  {
    id: 'res-8',
    title: 'Case Study: Highway Paving',
    slug: 'case-study-highway-paving',
    type: 'document',
    imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/catch_basin_riser/Sqaure_Riser_iron.609.png`,
  }
];

export default function AdditionalResourcesSlugs() {
  return (
    <section className="bg-white w-full  font-sans border-t border-gray-100">
      <div className="px-6 md:px-8 lg:px-12 py-12">

        {/* --- HEADER --- */}
        <h2 className="text-3xl md:text-4xl font-black text-[#CC0000] uppercase tracking-tight mb-8">
          Additional Resources
        </h2>
 
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.slug}`} // Dynamic routing using the slug
              className="group bg-[#CC0000] relative w-full aspect-[3/4]  overflow-hidden rounded-sm block"
            >
 
              <Image
                src={resource.imageSrc}
                alt={resource.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover opacity-90 transition-all duration-500"
              />

  
              <div className="absolute top-6 left-6 right-6 z-10">
                <h3 className="text-white text-sm md:text-lg font-bold leading-snug drop-shadow-md">
                  {resource.title}
                </h3>
              </div> 
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
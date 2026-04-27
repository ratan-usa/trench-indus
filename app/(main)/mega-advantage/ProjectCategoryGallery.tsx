'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

// --- DATA ---
const FILTERS = ["All", "Airport", "Commercial", "Industrial", "Infrastructure", "Municipal", "Residential"];

const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "O'Hare Tarmac: Extra Heavy Duty Risers",
    category: "Airport",
    imageSrc: "/assets/projects/air-1.jpg",
  },
  {
    id: 2,
    title: "Ben & Ben's Retail Plaza: Parking Lot Drainage",
    category: "Commercial",
    imageSrc: "/assets/projects/comm-1.jpg",
  },
  {
    id: 3,
    title: "Logistics Hub: 50-Ton Loading Dock Grates",
    category: "Industrial",
    imageSrc: "/assets/projects/ind-1.jpg",
  },
  {
    id: 4,
    title: "Highway 101 Catch Basin Upgrades",
    category: "Infrastructure",
    imageSrc: "/assets/projects/hwy-1.jpg",
  },
  {
    id: 5,
    title: "City Center Resurfacing: Manhole Adjustments",
    category: "Municipal",
    imageSrc: "/assets/projects/muni-1.jpg",
  },
  {
    id: 6,
    title: "Suburban Water Meter Box Extensions",
    category: "Residential",
    imageSrc: "/assets/projects/res-1.jpg",
  }
];

export default function ProjectCategoryGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayedProjects = activeFilter === "All"
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="bg-white py-16 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* --- FILTER BAR --- */}
        {/* Matches the exact boxy, outline style from your reference image */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 border text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-[#0F0F0F] text-white border-black" // Active state (black box like reference)
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#CC0000] hover:text-[#CC0000]"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* --- IMAGE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 border border-gray-200 mb-3 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Simple Text Under Image */}
              <p className="text-gray-900 text-sm font-medium group-hover:text-[#CC0000] transition-colors">
                {project.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
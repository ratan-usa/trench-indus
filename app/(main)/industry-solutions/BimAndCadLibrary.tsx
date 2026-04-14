'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Round Risers", "Square & Rectangular", "Catch Basins", "Valve Boxes", "Custom Specs"];

const CAD_FILES = [
  { id: 1, title: "Solid Round Steel Risers - Full Catalog", category: "Round Risers", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
  { id: 2, title: "Expandable DOT Spec Risers", category: "Round Risers", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
  { id: 3, title: "4-Sided Rectangular Catch Basin Frames", category: "Catch Basins", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
  { id: 4, title: "3-Sided Curb Inlet Structures", category: "Catch Basins", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
  { id: 5, title: "Water Main Valve Box Extensions", category: "Valve Boxes", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
  { id: 6, title: "Sloped Seat & Custom Fab Drawings", category: "Custom Specs", image: "/assets/PAVING-RISERS/paving riser 1.5203.png" },
];

export default function BimAndCadLibrary() {
  const [activeFilter, setActiveFilter] = useState("All");

  const displayedFiles = activeFilter === "All" 
    ? CAD_FILES 
    : CAD_FILES.filter(f => f.category === activeFilter);

  return (
    <section className="bg-gray-50 py-16 font-sans">
      <div className="p-6 md:p-8 lg:p-12">
        
        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">CAD & BIM Library</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 border text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "bg-[#cc2221] text-white border-[#cc2221]" 
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#cc2221] hover:text-[#cc2221]"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="mb-10">
          <button className="px-5 py-2 border border-gray-300 text-sm font-bold text-gray-800 bg-white hover:bg-gray-100 transition-colors shadow-sm">
            Download Revit Content Archive
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {displayedFiles.map((file) => (
            <div key={file.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] bg-white border border-gray-200 mb-3 overflow-hidden shadow-sm flex items-center justify-center p-8">
                <Image 
                  src={file.image} 
                  alt={file.title} 
                  fill 
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-gray-900 font-medium group-hover:text-[#cc2221] transition-colors">
                {file.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
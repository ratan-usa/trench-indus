'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

const FILTERS = [
  "All", "Airport", "Commercial", "Education", "Furniture", 
  "Hospital", "Hospitality", "Industrial", "Infrastructure", 
  "Residential", "Retail"
];

const PROJECTS = [
  { id: 1, title: "Point Cloud Data to CAD Drawings", image: "/assets/bim-1.jpg" },
  { id: 2, title: "Convert 3D Scan images to BIM models", image: "/assets/bim-2.jpg" },
  { id: 3, title: "3D Scanned Point Cloud Data into BIM", image: "/assets/bim-3.jpg" },
  { id: 4, title: "Revit Families for Plumbing Products", image: "/assets/bim-4.jpg" },
  { id: 5, title: "BIM Objects for MEP Product Manufacturer", image: "/assets/bim-5.jpg" },
  { id: 6, title: "3D MEP Modeling for Residential Building", image: "/assets/bim-6.jpg" },
  { id: 7, title: "Large Scale Infrastructure Planning", image: "/assets/bim-7.jpg" },
  { id: 8, title: "Industrial Plant MEP Coordination", image: "/assets/bim-8.jpg" },
  { id: 9, title: "Commercial Building Facade BIM", image: "/assets/bim-9.jpg" },
];

export default function BIMGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="bg-white py-12 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-3 py-1 border text-sm transition-colors",
                activeFilter === filter
                  ? "bg-black text-white border-black" 
                  : "bg-white text-gray-800 border-gray-300 hover:border-gray-500"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="mb-10">
          <button className="px-4 py-1.5 border border-gray-300 text-sm text-gray-800 bg-white hover:bg-gray-50 transition-colors">
            Revit Content
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group">
              <div className="relative w-full aspect-[4/3] bg-gray-100 border border-gray-200 mb-2 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <p className="text-gray-900 text-sm">
                {project.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
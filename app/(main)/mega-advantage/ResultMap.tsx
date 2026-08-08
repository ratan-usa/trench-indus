import React from 'react';
import Image from 'next/image';

export default function ResultMap() {
  return (
    <section className="bg-white font-sans">
      <div className="p-6 md:p-8 lg:p-12">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#CC0000] mb-2">
            The result:
          </h2>
          <p className="text-gray-600 text-base">
            Our customers have unrivaled access to innovations, inventories and service in the field.
          </p>
        </div>

        {/* Map Area */}
        {/* Changed from aspect-ratio to explicit reduced heights */}
        <div className="relative w-full h-[300px] md:h-[400px] bg-white">

          <Image
            src="https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/assets/PAVING-RISERS/paving%20riser%201.5200.png" // Replace with the actual map image containing the state outlines, lines, and text
            alt="Map of Manufacturing Facilities, Sales Branches, and Distribution Centers"
            fill
            className="object-contain object-left md:object-center"
          />

          {/* Legend Overlay (Mimicking the bottom right legend) */}
          <div className="absolute bottom-4 right-4 bg-white border border-gray-200 p-4 shadow-sm flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 rounded-full bg-[#18a2e5]"></span>
              <span className="text-xs text-gray-500">Manufacturing Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 rounded-full bg-[#f47b20]"></span>
              <span className="text-xs text-gray-500">Sales/Stocking Branches</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 rounded-full bg-[#e34a9e]"></span>
              <span className="text-xs text-gray-500">Distribution Centers</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Zap, Thermometer, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

export default function PipingRiserFeature() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* === LEFT COLUMN: Content & Features === */}
            <div className="p-8 md:p-12 lg:p-16 space-y-8">

              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="h-8 w-1.5 bg-[#CC0000] rounded-full" />
                <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Critical Infrastructure
                </h2>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                High-Integrity <span className="text-[#CC0000]">Paving Risers</span> & Vertical Assemblies
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Mega Foundries provides precision-cast and forged components for specialized vertical piping risers used in demanding environments—from offshore drilling to high-pressure chemical plants.
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#CC0000] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Corrosion Resistance</h4>
                    <p className="text-sm text-gray-600">Alloys tailored for harsh marine and chemical exposure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#CC0000] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">High-Pressure Integrity</h4>
                    <p className="text-sm text-gray-600">Guaranteed reliability under extreme vertical stress loads.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Thermometer className="w-6 h-6 text-[#CC0000] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Thermal Stability</h4>
                    <p className="text-sm text-gray-600">Components built to operate flawlessly at high temperatures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 text-[#CC0000] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Precision Forging</h4>
                    <p className="text-sm text-gray-600">Minimized defects and superior fatigue resistance.</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="group bg-[#CC0000] hover:bg-[#0F0F0F] text-white px-8 py-6 text-base font-bold transition-all">
                    Request Specs & Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* === RIGHT COLUMN: Image & Visual === */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full ">

              <Image
                src="/assets/PAVING-RISERS/paving riser 1.5200.png" // Placeholder path
                alt="Industrial Piping Riser Components"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute inset-0 bg-slate-900/40"></div>

              {/* Visual Highlight Text */}
              <div className="absolute bottom-6 left-6 p-3 bg-[#0F0F0F]/50 backdrop-blur-sm rounded-md border border-[#CC0000]">
                <p className="text-xl font-bold text-white leading-none">ISO 9001 Certified Materials</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
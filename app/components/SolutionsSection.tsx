'use client';
import React, { useState } from 'react';
import {
  Trees,
  Layers,
  Grid,
  Hammer,
  Mountain,
  ArrowRight,
  Car,
  Flower2,
  Construction
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- DATA (UPDATED FOR PAVING-RISERS WEBSITE) ---

const TABS = [
  { id: 'terraces', label: 'PAVED TERRACES & DECKS' },
  { id: 'landscaping', label: 'LANDSCAPING & GARDENS' },
  { id: 'driveways', label: 'DRIVEWAYS & ACCESS AREAS' },
  { id: 'joinery', label: 'STRUCTURAL & CUSTOM WORKS' },
];

const SOLUTIONS_DATA = {
  // =========================
  // TERRACES / DECKS
  // =========================
  terraces: [
    {
      title: "Adjustable Paving Risers",
      icon: <Grid className="w-12 h-12" />,
      description: "Height-adjustable risers for concrete, stone & ceramic pavers.",
      href: "/solutions/adjustable-paving-risers"
    },
    {
      title: "Decking Support Risers",
      icon: <Layers className="w-12 h-12" />,
      description: "Precision leveling supports for timber & composite decking.",
      href: "/solutions/decking-support-risers"
    },
    {
      title: "Self-Leveling Pedestals",
      icon: <Construction className="w-12 h-12" />,
      description: "Automatic slope correction for uneven terrace surfaces.",
      href: "/solutions/self-leveling-pedestals"
    },
    {
      title: "Fixed Height Risers",
      icon: <Mountain className="w-12 h-12" />,
      description: "Cost-effective fixed risers for uniform terrace installations.",
      href: "/solutions/fixed-height-risers"
    },
    {
      title: "Heavy-Duty Pedestal Systems",
      icon: <Car className="w-12 h-12" />,
      description: "High load-bearing risers for commercial & public terraces.",
      href: "/solutions/heavy-duty-pedestals"
    }
  ],

  // =========================
  // LANDSCAPING
  // =========================
  landscaping: [
    {
      title: "Garden Paving Supports",
      icon: <Flower2 className="w-12 h-12" />,
      description: "Stable riser systems for garden paths & outdoor paving.",
      href: "/solutions/garden-paving-supports"
    },
    {
      title: "Raised Landscape Platforms",
      icon: <Trees className="w-12 h-12" />,
      description: "Elevated paving solutions for green zones & lawns.",
      href: "/solutions/raised-landscape-platforms"
    }
  ],

  // =========================
  // DRIVEWAYS / ACCESS
  // =========================
  driveways: [
    {
      title: "Vehicular Load Pedestals",
      icon: <Car className="w-12 h-12" />,
      description: "Reinforced risers designed to withstand vehicle traffic.",
      href: "/solutions/vehicular-load-pedestals"
    },
    {
      title: "Service & Access Decking",
      icon: <Hammer className="w-12 h-12" />,
      description: "Paving supports for utility access areas and ramps.",
      href: "/solutions/service-access-decking"
    }
  ],

  // =========================
  // STRUCTURAL / CUSTOM
  // =========================
  joinery: [
    {
      title: "Custom Pedestal Solutions",
      icon: <Construction className="w-12 h-12" />,
      description: "Tailor-made riser systems for complex architectural needs.",
      href: "/solutions/custom-pedestal-solutions"
    },
    {
      title: "Industrial Support Systems",
      icon: <Layers className="w-12 h-12" />,
      description: "Engineered risers for industrial flooring & rooftop projects.",
      href: "/solutions/industrial-support-systems"
    }
  ]
};

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('terraces');

  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- TABS HEADER --- */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 border-b border-gray-200 pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative",
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              )}
            >
              {tab.label}
              {/* The "Brush Stroke" Underline Effect */}
              {activeTab === tab.id && (
                <span className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#c92526] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SOLUTIONS_DATA[activeTab as keyof typeof SOLUTIONS_DATA]?.map((item, index) => (
            <div key={index} className="relative group">
              <Card className="h-full border border-gray-100 shadow-sm group-hover:shadow-lg group-hover:border-[#c92526] transition-all duration-300 pt-8 pb-12 bg-gray-50/50">
                <CardContent className="flex flex-col items-center text-center px-4">
                  {/* Icon Area */}
                  <div className="mb-6 text-gray-400 group-hover:text-[#c92526] transition-colors duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-black uppercase tracking-tight mb-2 min-h-[40px] flex items-center justify-center">
                    {item.title}
                  </h3>

                  {/* Description (Added context specifically for Risers) */}
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>

              {/* Floating Action Button */}
              <div className="absolute -bottom-5 left-0 right-0 flex justify-center z-10">
                <Button
                  size="icon"
                  className="rounded-full w-10 h-10 bg-[#c92526] hover:bg-black text-white shadow-md transition-all duration-300 group-hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback for empty tabs in this demo */}
        {SOLUTIONS_DATA[activeTab as keyof typeof SOLUTIONS_DATA]?.length === 0 && (
          <div className="text-center text-gray-400 py-12 italic">
            Select "Solutions for Terraces" to view products.
          </div>
        )}

      </div>
    </section>
  );
}
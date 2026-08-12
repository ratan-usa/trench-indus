'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Droplets,
    Zap,
    Wifi,
    Construction,
    Waves,
    Layers,
    Plane
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SOLUTIONS = [
    {
        id: 1,
        title: "STORM DRAINAGE",
        slug: "storm-drainage",
        icon: <Waves className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Catch basin risers, trench grates, and drainage access solutions designed for efficient stormwater management.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image3.jpeg`,
    },
    {
        id: 2,
        title: "SANITARY SEWER",
        slug: "sanitary-sewer",
        icon: <Droplets className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Manhole covers and risers engineered for safe, durable access to sanitary sewer systems.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image5.jpeg`,
    },
    {
        id: 3,
        title: "UTILITY – GAS, ELECTRIC & WATER",
        slug: "utility",
        icon: <Zap className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Access assemblies and riser solutions protecting underground gas, electric, and water utilities.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image13.jpg`,
    },
    {
        id: 4,
        title: "TELECOMMUNICATION",
        slug: "telecommunication",
        icon: <Wifi className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Secure covers and access points for fiber optic and telecommunication infrastructure in public spaces.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image14.jpeg`,
    },
    {
        id: 5,
        title: "WATER DISTRIBUTION",
        slug: "water-distribution",
        icon: <Droplets className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Valve boxes, hydrant surrounds, and access solutions for reliable water distribution networks.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image17.jpg`,
    },
    {
        id: 6,
        title: "STREETSCAPES & URBAN DESIGN",
        slug: "streetscapes",
        icon: <Construction className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Tree grates, frames, and covers designed to enhance aesthetics while supporting urban infrastructure.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image18.jpeg`,
    },
    {
        id: 7,
        title: "AIRPORTS & PORTS",
        slug: "airports-ports",
        icon: <Plane className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Heavy-duty trench grates and access systems built for extreme loads in airports and port facilities.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image19.jpeg`,
    },
    {
        id: 8,
        title: "PAVING & RESURFACING",
        slug: "paving-resurfacing",
        icon: <Layers className="w-10 h-10 mb-2 text-[#CC0000]" />,
        description: "Risers and frames designed to integrate seamlessly with paving and resurfacing projects.",
        imageSrc: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/assets/industries/image20.jpg`,
    },
];

export default function IndustrySolutions() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="p-6 md:p-8 lg:p-12 max-w-[1600px] mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
                        Industry <span className="text-[#CC0000]">Solutions</span>
                    </h2>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto text-lg">
                        Paving Risers delivers DOT-approved infrastructure solutions for municipalities and contractors across the USA.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {SOLUTIONS.map((item) => (
                        <Card key={item.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm bg-slate-50 flex flex-col h-full">

                            {/* Header Strip */}
                            <div className="bg-[#0F0F0F] text-white p-4 text-center font-bold uppercase tracking-wider text-sm md:text-base group-hover:bg-[#CC0000] transition-colors duration-300">
                                {item.title}
                            </div>

                            {/* Image Area */}
                            <div className="relative h-64 w-full bg-gray-200 overflow-hidden">

                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                                />

                                {/* Fallback overlay (visible if image fails to load or to darken the image) */}
                                <div className="absolute inset-0 bg-[#0F0F0F]/20 z-10 pointer-events-none"></div>

                                {/* Hover Description Overlay */}
                                <div className="absolute inset-0 bg-[#0F0F0F]/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <div className="flex flex-col items-center text-center">
                                        {item.icon}
                                        <p className="text-white font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Button Section using Link + Slug */}
                            <div className="p-6 bg-white flex flex-col items-center mt-auto border-t border-gray-100">
                                <Link href={`/solutions/${item.slug}`} className="w-full">
                                    <Button className="bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-bold uppercase w-full tracking-widest transition-colors h-12">
                                        Learn More
                                    </Button>
                                </Link>
                            </div>

                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
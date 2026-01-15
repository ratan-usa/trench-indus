import React from 'react';
import Image from 'next/image';
import {
    Droplets,
    Zap,
    Wifi,
    Construction,
    ArrowRight,
    Waves,
    Layers,
    Plane
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Branding: #cc2221 (Red)

const SOLUTIONS = [
    {
        id: 1,
        title: "STORM DRAINAGE",
        icon: <Waves className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Catch basin risers, trench grates, and drainage access solutions designed for efficient stormwater management.",
        imageSrc: "/assets/industries/image3.jpeg",
    },
    {
        id: 2,
        title: "SANITARY SEWER",
        icon: <Droplets className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Manhole covers and risers engineered for safe, durable access to sanitary sewer systems.",
        imageSrc: "/assets/industries/image5.jpeg",
    },
    {
        id: 3,
        title: "UTILITY – GAS, ELECTRIC & WATER",
        icon: <Zap className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Access assemblies and riser solutions protecting underground gas, electric, and water utilities.",
        imageSrc: "/assets/industries/image13.jpg",
    },
    {
        id: 4,
        title: "TELECOMMUNICATION",
        icon: <Wifi className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Secure covers and access points for fiber optic and telecommunication infrastructure in public spaces.",
        imageSrc: "/assets/industries/image14.jpeg",
    },
    {
        id: 5,
        title: "WATER DISTRIBUTION",
        icon: <Droplets className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Valve boxes, hydrant surrounds, and access solutions for reliable water distribution networks.",
        imageSrc: "/assets/industries/image17.jpg",
    },
    {
        id: 6,
        title: "STREETSCAPES & URBAN DESIGN",
        icon: <Construction className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Tree grates, frames, and covers designed to enhance aesthetics while supporting urban infrastructure.",
        imageSrc: "/assets/industries/image18.jpeg",
    },
    {
        id: 7,
        title: "AIRPORTS & PORTS",
        icon: <Plane className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Heavy-duty trench grates and access systems built for extreme loads in airports and port facilities.",
        imageSrc: "/assets/industries/image19.jpeg",
    },
    {
        id: 8,
        title: "PAVING & RESURFACING",
        icon: <Layers className="w-10 h-10 mb-2 text-[#cc2221]" />,
        description:
            "Risers and frames designed to integrate seamlessly with paving and resurfacing projects.",
        imageSrc: "/assets/industries/image20.jpg",
    },
];

export default function IndustrySolutions() {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
                        Industry <span className="text-[#cc2221]">Solutions</span>
                    </h2>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                        Mega Paving Risers delivers DOT-approved infrastructure solutions for municipalities and contractors across the USA.
                    </p>
                </div>

                {/* Grid Layout based on Reference Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SOLUTIONS.map((item) => (
                        <Card key={item.id} className="group overflow-hidden border-none shadow-lg rounded-sm bg-slate-50 flex flex-col h-full">

                            {/* Header Strip (Black Background like reference) */}
                            <div className="bg-black text-white p-4 text-center font-bold uppercase tracking-wider text-sm md:text-base group-hover:bg-[#cc2221] transition-colors duration-300">
                                {item.title}
                            </div>

                            {/* Image Area */}
                            <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                                {/* Fallback Icon if image fails or for styling */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 group-hover:scale-105 transition-transform duration-700">
                                    {/* In a real app, use next/image here. Using Icon for now as placeholder */}
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title} fill />
                                    {item.icon}
                                    <span className="text-xs text-gray-400 font-mono mt-2 uppercase">Image Placeholder</span>
                                </div>

                                {/* Overlay for description on Hover (optional modern touch) */}
                                <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-center font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Button Section */}
                            <div className="p-6 bg-white flex flex-col items-center mt-auto border-t border-gray-100">
                                <Button className="bg-[#cc2221] hover:bg-black text-white font-bold uppercase w-full tracking-widest">
                                    Learn More
                                </Button>
                            </div>

                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}
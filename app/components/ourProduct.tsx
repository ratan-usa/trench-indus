'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import {
    ChevronRight,
    ChevronLeft,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- UPDATED DATA WITH SLUGS ---
const CATEGORIES = [
    {
        id: 'round',
        slug: 'round-risers',
        title: 'Round Risers',
        types: ['Fixed', 'Expandable', 'Extension Rings'],
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Standard round risers for manholes and catch basins.',
        images: ['/assets/PAVING-RISERS/paving riser 1.5201.png', '/assets/PAVING-RISERS/paving riser 1.5203.png']
    },
    {
        id: 'square',
        slug: 'square-risers',
        title: 'Square Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Steel', 'Cast Iron'],
        description: 'Square frames suitable for specific catch basin designs.',
        images: ['/assets/PAVING-RISERS/paving riser 1.5205.png', '/assets/PAVING-RISERS/paving riser 1.5201.png']
    },
    {
        id: 'rect',
        slug: 'rectangle-risers',
        title: 'Rectangle Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Fabricated Steel', 'Cast Iron'],
        description: 'Durable rectangular risers for drainage and utility access.',
        images: ['/assets/PAVING-RISERS/recatangle riser.png', '/assets/PAVING-RISERS/paving riser 1.5205.png']
    },
    {
        id: 'd-shape',
        slug: 'd-shape-risers',
        title: 'D-Shape Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Steel', 'Cast Iron'],
        description: 'Specialized D-shape risers for curb inlets.',
        images: ['/assets/PAVING-RISERS/d-shape.png', '/assets/PAVING-RISERS/paving riser 1.5203.png']
    },
    {
        id: 'valve',
        slug: 'valve-box-risers',
        title: 'Valve Box Risers',
        types: ['With Flange', 'Without Flange'],
        materials: ['Cast Iron', 'Ductile Iron'],
        description: 'Heavy duty protection for water and gas valve boxes.',
        images: ['/assets/PAVING-RISERS/recatangle riser.png', '/assets/PAVING-RISERS/paving riser 1.5201.png']
    },
    {
        id: 'catch-basin',
        slug: 'catch-basin-frames',
        title: 'Catch Basin Frames',
        types: ['3-Sided', '4-Sided', 'Sloped'],
        materials: ['Fabricated Steel', 'Cast Iron'],
        description: 'Heavy-duty frames designed for precise curb and street level alignment.',
        images: ['/assets/PAVING-RISERS/paving riser 1.5203.png', '/assets/PAVING-RISERS/recatangle riser.png']
    },
    {
        id: 'precast',
        slug: 'precast-concrete-rings',
        title: 'Precast Concrete Rings',
        types: ['Grade Rings', 'Flat Top', 'Concentric'],
        materials: ['Precast Concrete'],
        description: 'Durable precast grade rings for rapid structural elevation.',
        images: ['/assets/PAVING-RISERS/paving riser 1.5205.png', '/assets/PAVING-RISERS/d-shape.png']
    },
    {
        id: 'covers',
        slug: 'manhole-covers',
        title: 'Manhole Covers',
        types: ['Solid', 'Vented', 'Watertight'],
        materials: ['Cast Iron', 'Ductile Iron'],
        description: 'High-traffic rated covers for all standard round openings.',
        images: ['/assets/PAVING-RISERS/paving riser 1.5201.png', '/assets/PAVING-RISERS/paving riser 1.5205.png']
    },
    {
        id: 'custom',
        slug: 'custom-fabrications',
        title: 'Custom Fabrications',
        types: ['Oversized', 'Specialty Shapes'],
        materials: ['Steel', 'Aluminum'],
        description: 'Welded-to-spec infrastructure components for unique projects.',
        images: ['/assets/PAVING-RISERS/recatangle riser.png', '/assets/PAVING-RISERS/paving riser 1.5203.png']
    }
];

function ProductCard({ cat }: { cat: typeof CATEGORIES[0] }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev + 1) % cat.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev === 0 ? cat.images.length - 1 : prev - 1));
    };

    return (
        <Card className="border-2 border-gray-100 hover:border-[#c92526] transition-all duration-300 shadow-none hover:shadow-xl bg-white overflow-hidden flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold uppercase">{cat.title}</CardTitle>
                <CardDescription className="text-gray-500 font-medium">{cat.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-2 flex-grow">
                <div className="relative h-56 w-full mb-6 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden group/slider">
                    <Image
                        src={cat.images[currentImage]}
                        alt={`${cat.title} image`}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover/slider:scale-105"
                    />
                    {cat.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Materials</h4>
                        <div className="flex flex-wrap gap-2">
                            {cat.materials.map((m) => (
                                <span key={m} className="text-xs font-bold border border-black px-2 py-1 rounded-none">
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Separator className="bg-gray-200" />
                    <div>
                        <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Configurations</h4>
                        <p className="text-sm font-medium text-gray-700">{cat.types.join(" / ")}</p>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="mt-auto pt-4">
                {/* DYNAMIC LINK TO PRODUCT PAGE */}
                <Link href={`/product/${cat.slug}`} className="w-full">
                    <Button className="w-full bg-black hover:bg-[#c92526] text-white font-bold transition-colors uppercase tracking-wider rounded-sm h-12">
                        View Specs <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default function OurProducts() {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <section id="products" className="p-6 md:p-8 lg:p-12 max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <Badge className="bg-black text-white mb-4 px-4 py-1 text-xs uppercase tracking-widest">
                        Official Catalog
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                        Our <span className="text-[#c92526]">Products</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CATEGORIES.map((cat) => (
                        <ProductCard key={cat.id} cat={cat} />
                    ))}
                </div>
            </section>
        </div>
    );
}
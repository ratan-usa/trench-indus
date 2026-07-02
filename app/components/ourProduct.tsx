'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronRight,
    ChevronLeft,
    Plus
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
import { PRODUCT_DATA, Product } from '@/lib/productData';

function ProductCard({ cat }: { cat: Product }) {
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
        <Card className="border-2 border-gray-100 hover:border-[#CC0000] transition-all duration-300 shadow-none hover:shadow-xl bg-white overflow-hidden flex flex-col">
            <CardHeader>
                <CardTitle className="text-2xl font-bold uppercase">{cat.title}</CardTitle>
                <CardDescription className="text-gray-500 font-medium line-clamp-1">{cat.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-2 flex-grow">
                <div className="relative h-56 w-full mb-6 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden group/slider">
                    <Image
                        src={cat.images[currentImage].src}
                        alt={`${cat.title} image`}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover/slider:scale-105"
                    />
                    {cat.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10 text-black hover:bg-[#CC0000] hover:text-white transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-1.5 rounded-full shadow-md opacity-0 group-hover/slider:opacity-100 z-10 text-black hover:bg-[#CC0000] hover:text-white transition-colors">
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
                        <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Configurations / Finishes</h4>
                        <div className="flex flex-wrap gap-2 min-h-[36px]">
                            {cat.images.map((img, idx) => (
                                <button
                                    key={img.label}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentImage(idx);
                                    }}
                                    className={`text-xs font-bold px-3 py-1.5 border transition-all rounded-sm ${
                                        currentImage === idx
                                            ? 'bg-[#CC0000] border-[#CC0000] text-white shadow-sm'
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                                    }`}
                                >
                                    {img.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="mt-auto pt-4">
                <Link href={`/product/${cat.slug}`} className="w-full">
                    <Button className="w-full bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold transition-colors uppercase tracking-wider rounded-sm h-12">
                        View Specs <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default function OurProducts() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter parameters to evaluate if initial subset view requires truncate slices
    const shouldTruncate = PRODUCT_DATA.length > 5 && !isExpanded;
    const displayedCategories = shouldTruncate ? PRODUCT_DATA.slice(0, 5) : PRODUCT_DATA;

    return (
        <div className="min-h-screen bg-white font-sans text-black">
            <section id="products" className="py-20 w-full px-6 md:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <Badge className="bg-[#0F0F0F] text-white mb-4 px-4 py-1 text-xs uppercase tracking-widest rounded-sm">
                        Official Catalog
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                        Our <span className="text-[#CC0000]">Products</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCategories.map((cat) => (
                        <ProductCard key={cat.id} cat={cat} />
                    ))}

                    {/* --- INJECTED 6TH SLOT: LOAD MORE DIGITAL TRUNCATE CARD --- */}
                    {shouldTruncate && (
                        <Card 
                            onClick={() => setIsExpanded(true)}
                            className="border-2 border-dashed border-slate-300 bg-slate-50/50 rounded-sm shadow-none hover:shadow-xl hover:border-[#CC0000] hover:bg-white transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer min-h-[500px] group"
                        >
                            <div className="w-14 h-14 bg-white border border-slate-200 text-slate-800 group-hover:bg-[#0F0F0F] group-hover:border-[#0F0F0F] group-hover:text-white rounded-full flex items-center justify-center shadow-sm transition-all duration-300 transform group-hover:scale-110 mb-4">
                                <Plus className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-[#CC0000] transition-colors">
                                Load More Systems
                            </h3>
                            <p className="text-sm text-slate-500 font-medium max-w-[240px] mt-2 leading-relaxed">
                                Expand catalog matrix fields to explore {PRODUCT_DATA.length - 5} remaining infrastructure riser lines.
                            </p>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}
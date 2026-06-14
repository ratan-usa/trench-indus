'use client';

import React, { use, useState, useRef } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft, FileText, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// --- FULL PRODUCT DATABASE (UPDATED FOR MULTIPLE IMAGES) ---
const PRODUCT_DATA = [
    {
        slug: 'round-risers',
        title: 'Round Paving Risers',
        description: 'The industry standard for manhole elevation. Precision-engineered for perfect fitment and zero-movement during heavy traffic.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'AASHTO H-20 & HS-20 Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Black Asphaltic Bituminous Coating'
        },
        features: ['Mega-Adjust™ Expansion system', 'No excavation required', 'DOT Approved', 'Stackable design'],
        images: [
            '/assets/PAVING-RISERS/paving riser 1.5201.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png',
            '/assets/PAVING-RISERS/paving riser 1.5205.png'
        ]
    },
    {
        slug: 'square-risers',
        title: 'Square Risers',
        description: 'Designed specifically for square catch basin frames and electrical vaults in urban environments.',
        specs: {
            material: 'Fabricated Steel or Cast Iron',
            loadRating: 'Commercial Load Rated',
            standardSizes: '24"x24", 30"x30", 36"x36"',
            heights: '1.5" to 4"',
            coating: 'Galvanized or Painted'
        },
        features: ['Perfect for utility vaults', 'Reinforced corners', 'Anti-slip surface compatibility'],
        images: [
            '/assets/PAVING-RISERS/paving riser 1.5205.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png',
            '/assets/PAVING-RISERS/recatangle riser.png'
        ]
    },
    {
        slug: 'rectangle-risers',
        title: 'Rectangle Risers',
        description: 'Durable rectangular solutions for larger storm drainage structures and curb inlets.',
        specs: {
            material: 'Heavy Duty Fabricated Steel',
            loadRating: 'H-20 Traffic Rated',
            standardSizes: '24"x36", 24"x48" (Custom Available)',
            heights: '2" to 8"',
            coating: 'Hot-Dip Galvanized'
        },
        features: ['Precision welded seams', 'Adjustable height bolts', 'Curb-side compatible'],
        images: [
            '/assets/PAVING-RISERS/recatangle riser.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png',
            '/assets/PAVING-RISERS/d-shape.png'
        ]
    },
    {
        slug: 'd-shape-risers',
        title: 'D-Shape Risers',
        description: 'Specialized D-profile risers engineered specifically for curb inlet manholes.',
        specs: {
            material: 'Cast Iron or Ductile Iron',
            loadRating: 'Heavy Duty Traffic Rated',
            standardSizes: 'Fits standard 24" & 30" D-frames',
            heights: '1" to 4"',
            coating: 'Bituminous Asphalt'
        },
        features: ['Flush curb alignment', 'No-shift installation', 'Storm-water optimized'],
        images: [
            '/assets/PAVING-RISERS/paving riser 1.5203.png',
            '/assets/PAVING-RISERS/d-shape.png']
    },
    {
        slug: 'valve-box-risers',
        title: 'Valve Box Risers',
        description: 'Protective extensions for gas and water valve boxes during road resurfacing.',
        specs: {
            material: 'Cast Iron ASTM A48',
            loadRating: 'Heavy Traffic Rated',
            standardSizes: '5-1/4" Drop-in',
            heights: '1" to 6"',
            coating: 'Black Dip'
        },
        features: ['Flanged and Non-flanged versions', 'Drop-in installation', 'Protects valve stems'],
        images: [
            '/assets/PAVING-RISERS/paving riser 1.5203.png',
            '/assets/PAVING-RISERS/recatangle riser.png']
    },
    {
        slug: 'catch-basin-frames',
        title: 'Catch Basin Frames',
        description: 'Robust frames for drainage structures, supporting various grate configurations.',
        specs: {
            material: 'Cast Iron or Structural Steel',
            loadRating: 'H-20 Traffic Rated',
            standardSizes: 'Custom to grate size',
            heights: 'Adjustable',
            coating: 'Black Paint'
        },
        features: ['3-Sided and 4-Sided options', 'Sloped for drainage', 'Easy grate fitment'],
        images: ['/assets/PAVING-RISERS/paving riser 1.5203.png',

            '/assets/PAVING-RISERS/paving riser 1.5203.png'
        ]
    },
    {
        slug: 'precast-concrete-rings',
        title: 'Precast Concrete Rings',
        description: 'High-strength concrete grade rings for rapid structural elevation.',
        specs: {
            material: '4000 PSI Precast Concrete',
            loadRating: 'Structural Load Rated',
            standardSizes: '24", 30", 36" ID',
            heights: '2", 4", 6"',
            coating: 'Natural'
        },
        features: ['Reinforced with steel', 'Precision flat top', 'Economical solution'],
        images: ['/assets/PAVING-RISERS/paving riser 1.5205.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png']
    },
    {
        slug: 'manhole-covers',
        title: 'Manhole Covers',
        description: 'High-traffic rated covers for a variety of municipal and industrial openings.',
        specs: {
            material: 'Ductile Iron or Grey Iron',
            loadRating: 'HS-20 Heavy Traffic',
            standardSizes: '24", 30", 32"',
            heights: 'N/A',
            coating: 'Anti-skid Black'
        },
        features: ['Vented or Solid', 'Custom lettering available', 'Gasketed for watertightness'],
        images: ['/assets/PAVING-RISERS/paving riser 1.5201.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png'
        ]
    },
    {
        slug: 'custom-fabrications',
        title: 'Custom Fabrications',
        description: 'Unique infrastructure components welded to your specific project blueprints.',
        specs: {
            material: 'Steel, Aluminum, or Stainless',
            loadRating: 'Custom Rated',
            standardSizes: 'Built-to-spec',
            heights: 'Custom',
            coating: 'Various options'
        },
        features: ['Bespoke engineering', 'Rapid prototyping', 'Certified welding'],
        images: ['/assets/PAVING-RISERS/recatangle riser.png',
            '/assets/PAVING-RISERS/paving riser 1.5203.png'
        ]
    }
];

export default function ProductSpecsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();

    const product = PRODUCT_DATA.find((p) => p.slug === resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({ opacity: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const productImages = product.images && product.images.length > 0
        ? product.images
        : ['/assets/PAVING-RISERS/paving riser 1.5201.png'];

    const handleNextImage = () => {
        setActiveIndex((prev) => (prev + 1) % productImages.length);
    };

    const handlePrevImage = () => {
        setActiveIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        // CRITICAL FIX: Wrapped the image URL path inside extra quotes '' to handle spaces inside filenames smoothly.
        setZoomStyle({
            opacity: 1,
            backgroundImage: `url('${productImages[activeIndex]}')`,
            backgroundPosition: `${x}% ${y}%`,
            backgroundSize: '250%',
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ opacity: 0 });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-6">

                {/* Navigation Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-sm font-bold text-gray-500 hover:text-[#CC0000] mb-8 uppercase tracking-widest transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Catalog
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">

                    {/* Left: Interactive Media Gallery Section */}
                    <div className="flex flex-col gap-4">

                        {/* Main Stage Display Container */}
                        <div
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative h-[400px] bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center p-8 overflow-hidden group cursor-zoom-in"
                        >
                            {/* Standard Display Image */}
                            <Image
                                src={productImages[activeIndex]}
                                alt={`${product.title} view ${activeIndex + 1}`}
                                fill
                                className="object-contain p-10 transition-opacity duration-200 group-hover:opacity-0"
                                priority
                            />

                            {/* Magnifying Glass Lens Canvas (Renders on Hover) */}
                            <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-200 bg-no-repeat bg-gray-50"
                                style={zoomStyle}
                            />

                            {/* Slider Arrows */}
                            {productImages.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-[#CC0000] hover:text-white flex items-center justify-center text-slate-800 shadow-sm border border-gray-100 transition-colors rounded-sm z-10"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-[#CC0000] hover:text-white flex items-center justify-center text-slate-800 shadow-sm border border-gray-100 transition-colors rounded-sm z-10"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Slide Thumbnails Selection List */}
                        {productImages.length > 1 && (
                            <div className="flex items-center gap-3 overflow-x-auto py-1">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`relative w-20 h-20 bg-gray-50 rounded-sm border p-2 flex-shrink-0 transition-all ${index === activeIndex
                                            ? 'border-[#CC0000] ring-1 ring-[#CC0000]'
                                            : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-contain p-1"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Technical Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-black uppercase text-slate-900 mb-4 tracking-tight">
                                {product.title}
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Specs List */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000] flex items-center">
                                <FileText className="w-4 h-4 mr-2" /> Technical Specifications
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase">
                                            {key.replace(/([A-Z])/g, ' $1')}
                                        </span>
                                        <span className="text-sm font-bold text-slate-800">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#CC0000] flex items-center">
                                <ShieldCheck className="w-4 h-4 mr-2" /> Performance Features
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                                        <div className="w-1.5 h-1.5 bg-[#CC0000] mr-3 rounded-full shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button className="w-full h-14 bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest text-lg transition-all rounded-sm shadow-lg">
                            Get A Quote for This Unit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
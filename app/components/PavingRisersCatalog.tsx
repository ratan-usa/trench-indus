import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    Snowflake,
    Hammer,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Box
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

// Branding Color Constant: #cc2221

// UPDATED: Added imageSrc paths. 
// Ensure these images exist in your public folder (e.g., public/round-riser.png)
const CATEGORIES = [
    {
        id: 'round',
        title: 'Round Risers',
        types: ['Fixed', 'Expandable', 'Extension Rings'],
        materials: ['Cast Iron', 'Ductile Iron', 'Aluminum'],
        description: 'Standard round risers for manholes and catch basins.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5201.png'
    },
    {
        id: 'square',
        title: 'Square Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Cast Iron', 'Ductile Iron', 'Aluminum'],
        description: 'Square frames suitable for specific catch basin designs.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png'
    },
    {
        id: 'rect',
        title: 'Rectangle Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Stainless Steel', 'Fabricated Steel', 'FRP'],
        description: 'Durable rectangular risers for drainage and utility access.',
        imageSrc: '/assets/PAVING-RISERS/recatangle riser.png'
    },
    {
        id: 'd-shape',
        title: 'D-Shape Risers',
        types: ['Fixed', 'Expandable'],
        materials: ['Cast Iron', 'Ductile Iron', 'Aluminum'],
        description: 'Specialized D-shape risers for curb inlets.',
        imageSrc: '/assets/PAVING-RISERS/d-shape.png'
    },
    {
        id: 'valve',
        title: 'Valve Box Risers',
        types: ['With Flange', 'Without Flange'],
        materials: ['Cast Iron', 'Ductile Iron'],
        description: 'Heavy duty protection for valve boxes.',
        imageSrc: '/assets/PAVING-RISERS/recatangle riser.png'
    }
];

const FEATURES = [
    {
        title: "Snow Plough Proof",
        icon: <Snowflake className="w-8 h-8 text-[#cc2221]" />,
        description: "Engineered to withstand heavy snow clearing equipment."
    },
    {
        title: "High Tensile Strength",
        icon: <Hammer className="w-8 h-8 text-black" />,
        description: "Superior durability and high impact resistance."
    },
    {
        title: "7 Years Warranty",
        icon: <ShieldCheck className="w-8 h-8 text-[#cc2221]" />,
        description: "Guaranteed quality and long-lasting performance."
    }
];

export default function MegaPavingRisers() {
    return (
        <div className="min-h-screen bg-white font-sans text-black">
 


            {/* --- FEATURES STRIP --- */}
            <section id="features" className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        {FEATURES.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="p-4 bg-white rounded-full shadow-lg border-2 border-transparent group-hover:border-[#cc2221] transition-all duration-300 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-black uppercase mb-3">{feature.title}</h3>
                                <p className="text-gray-600 font-medium">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* --- HERO SECTION --- */}
            <section className="relative bg-black text-white py-24 overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#cc2221] opacity-10 skew-x-[-20deg] translate-x-20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                        Built to <span className="text-[#cc2221]">Last</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
                        Professional Grade Paving Risers. <br />
                        <span className="text-white font-semibold">Cast Iron • Ductile Iron • Aluminum</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="./assets/catalog/MEGA PAVING RISERS CATALOGS.pdf">
                            <Button size="lg" className="bg-[#cc2221] hover:bg-[#a01b1a] text-white text-lg px-8 py-6 font-bold uppercase">
                                Download Catalog
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6 font-bold uppercase">
                            View Products
                        </Button>
                    </div>
                </div>
            </section>
            {/* --- PRODUCT CATALOG --- */}
            <section id="products" className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="bg-black hover:bg-black text-white mb-4 px-4 py-1 text-xs uppercase tracking-widest">
                        Official Catalog
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                        Our <span className="text-[#cc2221]">Products</span>
                    </h2>
                    <p className="text-gray-500 mt-4 font-medium max-w-xl mx-auto">
                        Available in standard sizes: 1", 1.5", 2", 2.5". <br />
                        Custom fabrication available upon request.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CATEGORIES.map((cat) => (
                        <Card key={cat.id} className="border-2 border-gray-100 hover:border-[#cc2221] transition-all duration-300 shadow-none hover:shadow-xl bg-white overflow-hidden">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase">{cat.title}</CardTitle>
                                <CardDescription className="text-gray-500 font-medium">{cat.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="pt-2">
                                {/* UPDATED: Image Component */}
                                <div className="relative h-56 w-full mb-6 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden">
                                    <Image 
                                        src={cat.imageSrc}
                                        alt={cat.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Materials</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.materials.map((m) => (
                                                <span key={m} className="text-xs font-bold border border-black px-2 py-1 rounded-none bg-transparent">
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Separator className="bg-gray-200" />
                                    <div>
                                        <h4 className="text-xs font-black text-black uppercase tracking-widest mb-2">Configurations</h4>
                                        <p className="text-sm font-medium text-gray-700">
                                            {cat.types.join(" / ")}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full bg-black hover:bg-[#cc2221] text-white font-bold transition-colors uppercase tracking-wider rounded-sm h-12">
                                    View Specs <ChevronRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* --- INVENTORY LIST --- */}
            <section className="bg-[#cc2221] text-white py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-black text-center mb-8 uppercase tracking-tight">
                        Full Inventory List
                    </h3>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-lg md:text-xl opacity-90">
                        <span>Manhole Covers</span>
                        <span className="opacity-50">/</span>
                        <span>Curb Inlets</span>
                        <span className="opacity-50">/</span>
                        <span>Catch Basins</span>
                        <span className="opacity-50">/</span>
                        <span>Frames & Grates</span>
                        <span className="opacity-50">/</span>
                        <span>Curb Boxes</span>
                        <span className="opacity-50">/</span>
                        <span>Meter Boxes</span>
                    </div>
                </div>
            </section>

        </div>
    );
}
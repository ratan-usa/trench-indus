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
                        <Link href={'#our-product'}>
                            <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6 font-bold uppercase">
                                View Products
                            </Button>
                        </Link>
                    </div>
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
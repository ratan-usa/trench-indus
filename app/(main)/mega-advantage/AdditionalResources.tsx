import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Link as LinkIcon } from 'lucide-react';

const RESOURCES = [
    {
        id: 'about',
        title: 'About Us',
        description: 'Learn about Ben & Ben\'s commitment to producing the highest quality paving risers and infrastructure solutions for municipal applications.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
        linkText: 'Link',
        href: '#about-us'
    },
    {
        id: 'usa',
        title: 'Made in the USA',
        description: 'Committed to providing American-made steel and cast iron products to build and sustain America\'s critical infrastructure.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
        linkText: 'Link',
        href: '#made-in-usa'
    },
    {
        id: 'history',
        title: 'Company History',
        description: 'A legacy built on heavy iron. Discover how our foundry operations have evolved to meet modern DOT and highway standards over the decades.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
        linkText: 'Link',
        href: '#history'
    },
    {
        id: 'specs',
        title: 'Product Briefs',
        description: 'Download detailed spec sheets, load ratings, and installation guides for our complete line of fixed and expandable adjustment risers.',
        imageSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
        linkText: 'Link',
        href: '#product-briefs'
    }
];

export default function AdditionalResources() {
    return (
        <section className="bg-white py-16 font-sans border-t border-gray-100">
            <div className="p-6 md:p-8 lg:p-12">

                {/* --- TOP: LEARN MORE SECTION --- */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#CC0000] mb-3">
                        Learn More
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium">
                        Talk to an expert at Ben & Ben's to find out how our adjustment risers can work for your next project. <Link href="#contact" className="text-[#CC0000] hover:underline transition-colors">Contact us today</Link> or schedule a <Link href="#lunch-and-learn" className="text-[#CC0000] hover:underline transition-colors">Lunch and Learn</Link>.
                    </p>
                </div>

                {/* --- BOTTOM: ADDITIONAL RESOURCES CAROUSEL/GRID --- */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-8">
                        Additional Resources
                    </h2>

                    <div className="relative flex items-center">

                        {/* Left Navigation Arrow (UI representation) */}
                        <button className="hidden md:flex absolute -left-12 w-10 h-10 border border-gray-300 items-center justify-center text-[#CC0000] hover:border-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-colors z-10 bg-white">
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                            {RESOURCES.map((resource) => (
                                <Link key={resource.id} href={resource.href} className="group block relative h-[420px] bg-gray-900 overflow-hidden border border-gray-200 hover:border-[#CC0000] transition-colors">

                                    {/* Background Image with Dark Overlay */}
                                    <Image
                                        src={resource.imageSrc}
                                        alt={resource.title}
                                        fill
                                        className="object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>

                                    {/* Card Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                                        {/* Top Title */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                                                {resource.title}
                                            </h3>
                                            <p className="text-sm text-gray-200 line-clamp-6 leading-relaxed">
                                                {resource.description}
                                            </p>
                                        </div>

                                        {/* Bottom Link Icon */}
                                        <div className="flex items-center text-[#CC0000] font-bold tracking-wide uppercase text-sm mt-auto group-hover:text-white transition-colors">
                                            <LinkIcon className="w-4 h-4 mr-2" strokeWidth={3} />
                                            {resource.linkText}
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Right Navigation Arrow (UI representation) */}
                        <button className="hidden md:flex absolute -right-12 w-10 h-10 border border-[#CC0000] items-center justify-center text-[#CC0000] hover:bg-[#CC0000] hover:text-white transition-colors z-10 bg-white">
                            <ChevronRight className="w-6 h-6" />
                        </button>

                    </div>

                    {/* Pagination Dots (UI representation) */}
                    <div className="flex justify-center gap-2 mt-8">
                        <span className="block w-2.5 h-2.5 rounded-full bg-gray-800"></span>
                        <span className="block w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    </div>

                </div>
            </div>
        </section>
    );
}
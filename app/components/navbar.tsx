'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

// Define the navigation structure
const NAV_LINKS = [
    {
        title: 'Main Product',
        href: '#products',
        dropdown: [
            { isHeader: true, name: 'Paving Riser Product Categories' },
            { name: 'Curb Inlet Riser', href: '/products/curb-inlet-riser' },
            { name: 'Catch Basin Riser', href: '/products/catch-basin-risers' },
            { 
                name: 'Manhole Riser', 
                href: '/products/manhole-riser',
                subDropdown: [
                    { name: 'Fixed Riser', href: '/products/fixed-riser' },
                    { name: 'Adjustable Riser', href: '/products/adjustable-riser' }
                ]
            },
            { name: 'Valve Box Riser', href: '/products/valve-box-risers' },
            { name: 'Installation Tools', href: '/products/installation-tools' },
            { 
                name: 'Specialty Castings & Steel', 
                href: '#',
                subDropdown: [
                    { name: 'Manhole Frame & Cover', href: '/products/manhole-frame-cover' },
                    { name: 'D-Shape Risers', href: '/products/d-shape-risers' },
                    { name: 'Other Cast Iron Products', href: '/products/other-cast-iron' },
                    { name: 'Utility Products', href: '/products/utility-product' },
                    { name: 'Fabricated Steel', href: '/products/fabricated-steel' },
                ]
            },
        ],
    },
    {
        title: 'Infrastructure',
        href: '/solutions',
        dropdown: [
            { name: 'Municipal Roadway', href: '/solutions/paving-resurfacing' },
            { name: 'Storm Drainage', href: '/solutions/storm-drainage' },
            { name: 'Airport & Heavy Port', href: '/solutions/airports-ports' },
            { name: 'Sanitary Sewer', href: '/solutions/sanitary-sewer' },
        ],
    },
    {
        title: 'Technical Library',
        href: '#library',
        dropdown: [
            { name: 'Literature & Specs', href: '/resources/literature' },
            { name: 'Video Gallery', href: '/resources/videos' },
            { name: 'Engineering Briefs', href: '/resources/briefs' },
            { name: 'Calculators & Tools', href: '/resources/calculators' },
        ],
    },
    {
        title: 'Contact',
        href: '#contact',
        dropdown: [
            { name: 'Request a Quote', href: '/contact/quote' },
            { name: 'Foundry Locations', href: '/about/locations' },
            { name: 'Submit Specifications', href: '/contact/specifications' },
        ],
    },
];

const Navbar = () => {
    return (
        <header className="bg-white border-b-[4px] border-[#CC0000] sticky top-0 z-50 shadow-sm font-sans">
            <div className="w-full px-6 md:px-8 lg:px-12 py-3 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href={'/'} className="shrink-0">
                    <Image
                        src={'https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/PAVING-RISERS-LOGO.png'}
                        alt='Mega Paving Risers'
                        height={80}
                        width={160}
                        className="object-contain h-12 w-auto sm:h-16 lg:h-20"
                    />
                </Link>

                {/* --- CENTER MENU --- */}
                <div className="hidden md:flex gap-1 lg:gap-2 h-full">
                    {NAV_LINKS.map((link) => (
                        <div key={link.title} className="group/main relative">
                            {/* Main Navigation Item */}
                            <button className="flex items-center gap-1 px-4 text-[#CC0000] py-2 text-[13px] font-black uppercase tracking-widest hover:text-black transition-colors group-hover/main:bg-gray-50">
                                {link.title}
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover/main:rotate-180" />
                            </button>

                            {/* Dropdown Menu (Black & Red Theme) */}
                            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-300 translate-y-2 group-hover/main:translate-y-0 z-[60]">
                                <ul className="w-72 bg-white border-t-[3px] border-[#CC0000] shadow-2xl ring-1 ring-black/5 overflow-visible">
                                    {link.dropdown.map((item: any, idx) => {
                                        
                                        if (item.isHeader) {
                                            return (
                                                <li key={`header-${idx}`} className="px-6 py-4 bg-zinc-50 border-b border-gray-200">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#CC0000] leading-tight block">
                                                        {item.name}
                                                    </span>
                                                </li>
                                            )
                                        }

                                        if (item.subDropdown) {
                                            return (
                                                <li key={item.name} className="group/sub relative">
                                                    <Link
                                                        href={item.href || '#'}
                                                        className="flex items-center justify-between w-full px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                        <ChevronRight className="w-4 h-4" />
                                                    </Link>
                                                    
                                                    {/* Nested Submenu */}
                                                    <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 translate-x-2 group-hover/sub:translate-x-0 z-[70]">
                                                        <ul className="w-56 bg-white border-t-[3px] border-[#CC0000] shadow-2xl ring-1 ring-black/5 overflow-hidden">
                                                            {item.subDropdown.map((subItem: any) => (
                                                                <li key={subItem.name}>
                                                                    <Link
                                                                        href={subItem.href}
                                                                        className="block px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            )
                                        }

                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href || '#'}
                                                    className="block px-6 py-4 text-[12px] font-bold text-black hover:bg-[#0F0F0F] hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- CTA BUTTON --- */}
                <Link href={'#contact'}>
                    <Button className="bg-[#0F0F0F] hover:bg-[#CC0000] text-white font-black hidden sm:flex rounded-none px-8 h-12 uppercase tracking-[0.15em] text-[11px] transition-all duration-300 border-b-2 border-transparent active:scale-95">
                        Get Quote
                    </Button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
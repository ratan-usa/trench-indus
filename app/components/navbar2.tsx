'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChevronDown } from 'lucide-react'

const NAV_LINKS = [
    {
        title: 'Products',
        href: '#products',
        dropdown: [
            { name: 'Round Manhole Risers', href: '/products/round-risers' },
            { name: 'Expandable Adjustment Rings', href: '/products/round-risers' },
            { name: 'Catch Basin Frames', href: '/products/catch-basin-frames' },
            { name: 'Curb Inlet Risers', href: '/products/d-shape-risers' },
            { name: 'Valve Box Extensions', href: '/products/valve-box-risers' },
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
            { name: 'DOT Approval Letters', href: '/resources/literature' },
            { name: 'Installation Videos', href: '/resources/videos' },
            { name: 'Load Test Reports', href: '/resources/briefs' },
            { name: 'CAD/BIM Riser Files', href: '/resources/calculators' },
        ],
    },
    {
        title: 'Contact',
        href: '#contact',
        dropdown: [
            { name: 'Request a Quote', href: '/contact' },
            { name: 'Foundry Locations', href: '/about/locations' },
            { name: 'Submit Specifications', href: '/contact' },
        ],
    },
];

const Navbar = () => {
    return (
        <header className="bg-white border-b-[4px] border-[#cc2221] sticky top-0 z-50 shadow-sm font-sans">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link href={'/'} className="shrink-0">
                    <Image
                        src={'/PAVING-RISERS-LOGO.png'}
                        alt='Mega Paving Risers'
                        height={80}
                        width={160}
                        className="object-contain h-12 w-auto sm:h-16 lg:h-20"
                    />
                </Link>

                {/* --- CENTER MENU --- */}
                <div className="hidden md:flex gap-1 lg:gap-2 h-full">
                    {NAV_LINKS.map((link) => (
                        <div key={link.title} className="group relative">
                            {/* Main Navigation Item */}
                            <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-black uppercase tracking-widest text-black hover:text-[#cc2221] transition-colors group-hover:bg-gray-50">
                                {link.title}
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu (Black & Red Theme) */}
                            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[60]">
                                <ul className="w-72 bg-white border-t-[3px] border-[#cc2221] shadow-2xl ring-1 ring-black/5 overflow-hidden">
                                    {link.dropdown.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="block px-6 py-4 text-[12px] font-bold text-black hover:bg-black hover:text-white border-b border-gray-100 last:border-0 transition-all duration-200"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- CTA BUTTON --- */}
                <Button className="bg-black hover:bg-[#cc2221] text-white font-black hidden sm:flex rounded-none px-8 h-12 uppercase tracking-[0.15em] text-[11px] transition-all duration-300 border-b-2 border-transparent active:scale-95">
                    Get Quote
                </Button>
            </div>
        </header>
    )
}

export default Navbar
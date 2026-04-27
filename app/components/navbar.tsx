import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* --- HEADER --- */}
            {/* --- LIGHT/RED THEME HEADER --- */}
            <header className="bg-white border-b-[4px] border-[#CC0000] sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href={'/'} className="shrink-0">
                        <Image
                            src={'/PAVING-RISERS-LOGO.png'}
                            alt='Mega Paving Risers'
                            height={80}
                            width={80}
                            className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-40"
                        />
                    </Link>

                    <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-700">
                        <a href="#products" className="hover:text-[#CC0000] transition-colors">Products</a>
                        <a href="#innovation" className="hover:text-[#CC0000] transition-colors">Innovation</a>
                        <a href="#library" className="hover:text-[#CC0000] transition-colors">Library</a>
                        <a href="#contact" className="hover:text-[#CC0000] transition-colors">Contact</a>
                    </div>

                    <Button className="bg-[#CC0000] hover:bg-[#0F0F0F] text-white font-bold hidden sm:flex rounded-sm">
                        Get Quote
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default Navbar
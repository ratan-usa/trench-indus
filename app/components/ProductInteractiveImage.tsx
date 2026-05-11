'use client';

import Image from 'next/image';
import InteractiveProduct from './InteractiveProduct';
interface ProductInteractiveImageProps {
    imgSrc: string,
    hotspot: string
}

const data = [
    {
        imgSrc: '/assets/PAVING-RISERS/paving riser 1.5200.png',
        HOTSPOTS: [
            { id: 1, x: '37%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
            { id: 2, x: '45%', y: '70%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
            { id: 3, x: '68%', y: '60%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
        ]
    }, {
        imgSrc: '/assets/PAVING-RISERS/paving riser 1.5205.png',
        HOTSPOTS: [
            { id: 1, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
            { id: 2, x: '65%', y: '40%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
            { id: 3, x: '69%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
            { id: 3, x: '34%', y: '62%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
        ]
    }, {
        imgSrc: '/assets/PAVING-RISERS/paving riser 1.5203.png',
        HOTSPOTS: [
            { id: 1, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
            { id: 2, x: '65%', y: '35%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
            { id: 3, x: '69%', y: '65%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
        ]
    }

]
export default function ProductInteractiveImage() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">

                <h2 className="text-[#CC0000] text-3xl font-black mb-10 text-center uppercase">
                    Product Features
                </h2>
                {data.map((link, index) => (
                    <section className='pb-12'>
                        <InteractiveProduct imageSrc={link.imgSrc} altText='Paving Riser' hotspots={link.HOTSPOTS} />
                    </section>
                ))}
                <p className="mt-8 text-center text-slate-400 text-sm italic">
                    Hover over the points to see details
                </p>

            </div>
        </section>
    );
}
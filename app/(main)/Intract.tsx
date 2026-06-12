import React from 'react'
import Product3DViewer from './Product3DViewer'
const riser_point = [
    { id: 1, x: '30%', y: '40%', title: 'Precision Angles', desc: 'Sloped & Tapered Risers' },
    { id: 2, x: '45%', y: '70%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
    { id: 3, x: '65%', y: '60%', title: 'Bulk Ready', desc: 'Cast Iron Paving Risers' },
];
// Example usage for two different products
const ROUND_RISER_DOTS = [
    {
        slot: "h1",
        position: "0.45m 1.2m 0.3m", // Found using the editor
        normal: "0m 1m 0m",
        title: "Locking Lug",
        description: "Secure mechanical engagement."
    }
];


const BASIN_FRAME_DOTS = [
    {
        slot: "h1",
        position: "-0.2m 0.5m 0.8m", // Different coordinates for this model
        normal: "0m 0m 1m",
        title: "Flow Channel",
        description: "Optimized for heavy runoff."
    }
];
const Intract = () => {
    return (
        <div>
            <header className="space-y-4">
                <h2 className="text-6xl font-black uppercase tracking-tighter">
                    Product <span className="text-[#c92526]">Visualization</span>
                </h2>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm italic">
                    Rotate the model to inspect technical hot-spots
                </p>
            </header>

            {/* First 3D Model Section */}
            <section className="space-y-8">
                <div className="flex items-center justify-between border-b-2 border-black pb-4">
                    <h4 className="text-xl font-black uppercase tracking-tight">01. Round Riser Assembly</h4>
                    <span className="text-xs font-black uppercase text-[#c92526]">Format: .GLB</span>
                </div>
                {/* <Product3DViewer src="/gib files/1 FT LEACHING GALLEY .glb" /> */}
                {/* <Product3DViewer src="/gib files/1 FT LEACHING GALLEY .glb" hotspots={ROUND_RISER_DOTS} /> */}

            </section>

            {/* Second 3D Model Section */}
            <section className="space-y-8">
                <div className="flex items-center justify-between border-b-2 border-black pb-4">
                    <h4 className="text-xl font-black uppercase tracking-tight">02. Catch Basin Frame</h4>
                    <span className="text-xs font-black uppercase text-[#c92526]">Format: .GLB</span>
                </div>
                {/* <Product3DViewer src="/gib files/2 FT LEACHING GALLEY .glb" /> */}
                {/* <Product3DViewer src="/gib files/2 FT LEACHING GALLEY .glb" hotspots={BASIN_FRAME_DOTS} /> */}
                <Product3DViewer />
            </section>
        </div>
    )
}

export default Intract

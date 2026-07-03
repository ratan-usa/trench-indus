export interface ProductImage {
    label: string;
    src: string;
}

export interface ProductSpecs {
    material: string;
    loadRating: string;
    standardSizes: string;
    heights: string;
    coating: string;
}

export interface Product {
    id: string;
    slug: string;
    title: string;
    description: string;
    materials: string[];
    specs: ProductSpecs;
    features: string[];
    images: ProductImage[];
}

export const PRODUCT_DATA: Product[] = [
    {
        id: 'round',
        slug: 'round-risers',
        title: 'Round Paving Risers',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Standard round risers for manholes and catch basins.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'AASHTO H-20 & HS-20 Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous Asphaltic Coated / Iron Finish'
        },
        features: ['Mega-Adjust™ Expansion system', 'No excavation required', 'DOT Approved', 'Stackable design'],
        images: [
            { label: 'Raw Finish', src: '/paving/Round Riser Raw Finish.613.png' },
            { label: 'Coated Finish', src: '/paving/Round Riser Coated Finish.612.png' },
            { label: 'Iron Finish', src: '/paving/Round Riser iron Finish.614.png' },
            { label: 'Round No-Screw Raw', src: '/paving/paving riser Round No screw raw.659.png' },
            { label: 'Round No-Screw Coated', src: '/paving/paving riser Round No screw coated.660.png' },
            { label: 'Round No-Screw Iron', src: '/paving/paving riser Round No screw iron.658.png' },
            { label: 'Round No-Screw Ductile Iron', src: '/paving/paving riser Round No screw ductile iron.662.png' },
            { label: 'Round No-Screw Steel', src: '/paving/paving riser Round No screw steel.661.png' }
        ]
    },
    {
        id: 'round-with-screws',
        slug: 'round-risers-with-screws',
        title: 'Round Risers with Screws',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Round risers featuring integrated set screws for precise height adjustment and level alignment without shims.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'AASHTO H-20 & HS-20 Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous Asphaltic Coated / Iron Finish'
        },
        features: ['Integrated Leveling Screws', 'No excavation required', 'DOT Approved', 'Stackable design'],
        images: [
            { label: 'Raw Finish', src: '/paving/Round Riser with screw Raw Finish.617.png' },
            { label: 'Coated Finish', src: '/paving/Round Riser with screw coated Finish.618.png' },
            { label: 'Iron Finish', src: '/paving/Round Riser with screw iron Finish.615.png' }
        ]
    },
    {
        id: 'square',
        slug: 'square-risers',
        title: 'Square Risers',
        materials: ['Steel', 'Cast Iron'],
        description: 'Designed specifically for square catch basin frames and electrical vaults in urban environments.',
        specs: {
            material: 'Fabricated Steel or Cast Iron',
            loadRating: 'Commercial Load Rated',
            standardSizes: '24"x24", 30"x30", 36"x36"',
            heights: '1.5" to 4"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Perfect for utility vaults', 'Reinforced corners', 'Anti-slip surface compatibility'],
        images: [
            { label: 'Raw Finish', src: '/paving/Sqaure Riser Raw Finish.610.png' },
            { label: 'Coated Finish', src: '/paving/Sqaure Riser Coated Finish.611.png' },
            { label: 'Iron Finish', src: '/paving/Sqaure Riser iron.609.png' },
            { label: 'Square Raw', src: '/paving/paving riser Square raw.666.png' },
            { label: 'Square Coated', src: '/paving/paving riser Square coated.665.png' },
            { label: 'Square Iron', src: '/paving/paving riser Square iron.667.png' },
            { label: 'Square Ductile Iron', src: '/paving/paving riser Square ductile iron.663.png' },
            { label: 'Square Ductile Steel', src: '/paving/paving riser Square ductile steel.664.png' }
        ]
    },
    {
        id: 'rect',
        slug: 'rectangle-risers',
        title: 'Rectangle Risers',
        materials: ['Fabricated Steel', 'Cast Iron'],
        description: 'Durable rectangular solutions for larger storm drainage structures and curb inlets.',
        specs: {
            material: 'Heavy Duty Fabricated Steel',
            loadRating: 'H-20 Traffic Rated',
            standardSizes: '24"x36", 24"x48" (Custom Available)',
            heights: '2" to 8"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Precision welded seams', 'Adjustable height bolts', 'Curb-side compatible'],
        images: [
            { label: 'Raw Finish', src: '/paving/Rectangle Riser Raw Finish.606.png' },
            { label: 'Coated Finish', src: '/paving/Rectangle Riser coated Finish.605.png' },
            { label: 'Iron Finish', src: '/paving/Rectangle Riser iron.608.png' },
            { label: 'Riser 1 Standard', src: '/paving/Rectangle Paving Riser 1.619.png' },
            { label: 'Riser 1 Coated', src: '/paving/Rectangle Paving Riser 1 Coated finish.621.png' },
            { label: 'Riser 1 Right', src: '/paving/Rectangle Paving Riser 1 Right.622.png' },
            { label: 'Riser 2 Raw', src: '/paving/Rectangle Paving Riser 2 Raw Finish.624.png' },
            { label: 'Riser 2 Black Coated', src: '/paving/Rectangle Paving Riser 2 Black Coated Finish.625.png' },
            { label: 'Riser 2 Iron', src: '/paving/Rectangle Paving Riser 2 Iron.623.png' },
            { label: 'Riser 3 Raw', src: '/paving/Rectangle Paving Riser 3 Raw Finish.627.png' },
            { label: 'Riser 3 Black Coated', src: '/paving/Rectangle Paving Riser 3 Black Coated Finish.626.png' },
            { label: 'Riser 3 Iron', src: '/paving/Rectangle Paving Riser 3 iron.628.png' },
            { label: 'Riser 4 Raw', src: '/paving/Rectangle Paving Riser 4 Raw Finish.630.png' },
            { label: 'Riser 4 Coated', src: '/paving/Rectangle Paving Riser 4 coated Finish.631.png' },
            { label: 'Riser 4 Iron', src: '/paving/Rectangle Paving Riser 4 iron.629.png' },
            { label: 'Rectangle Raw', src: '/paving/paving riser rectangle raw.669.png' },
            { label: 'Rectangle Coated', src: '/paving/paving riser rectangle coated.670.png' },
            { label: 'Rectangle Iron', src: '/paving/paving riser rectangle iron.668.png' },
            { label: 'Rectangle Ductile Iron', src: '/paving/paving riser rectangle ductile iron.672.png' },
            { label: 'Rectangle Steel', src: '/paving/paving riser rectangle steel.671.png' },
            { label: 'Paving Riser 1 Standard', src: '/paving/paving riser 1.641.png' },
            { label: 'Paving Riser 1 Raw', src: '/paving/paving riser 1 raw.656.png' },
            { label: 'Paving Riser 1 Coated', src: '/paving/paving riser 1 coated.655.png' },
            { label: 'Paving Riser 1 Iron', src: '/paving/paving riser 1 iron.657.png' },
            { label: 'Paving Riser 1 Ductile Iron', src: '/paving/paving riser 1 ductile iron.653.png' },
            { label: 'Paving Riser 1 Steel', src: '/paving/paving riser 1 steel.654.png' },
            { label: 'Paving Riser 2 Raw', src: '/paving/paving riser 2 raw .648.png' },
            { label: 'Paving Riser 2 Coated', src: '/paving/paving riser 2 coated.649.png' },
            { label: 'Paving Riser 2 Raw Iron', src: '/paving/paving riser 2 raw iron.647.png' },
            { label: 'Paving Riser 2 Ductile Iron', src: '/paving/paving riser 2 ductile iron.651.png' },
            { label: 'Paving Riser 2 Steel', src: '/paving/paving riser 2 steel.650.png' },
            { label: 'Paving Riser 3 Raw', src: '/paving/paving riser 3 raw.645.png' },
            { label: 'Paving Riser 3 Coated', src: '/paving/paving riser 3 coated.644.png' },
            { label: 'Paving Riser 3 Raw Iron', src: '/paving/paving riser 3 raw iron.646.png' },
            { label: 'Paving Riser 3 Ductile Iron', src: '/paving/paving riser 3 ductile iron.642.png' },
            { label: 'Paving Riser 3 Steel', src: '/paving/paving riser 3 Steel.643.png' }
        ]
    },
    {
        id: 'd-shape',
        slug: 'd-shape-risers',
        title: 'D-Shape Risers',
        materials: ['Steel', 'Cast Iron'],
        description: 'Specialized D-profile risers engineered specifically for curb inlet manholes.',
        specs: {
            material: 'Cast Iron or Ductile Iron',
            loadRating: 'Heavy Duty Traffic Rated',
            standardSizes: 'Fits standard 24" & 30" D-frames',
            heights: '1" to 4"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Flush curb alignment', 'No-shift installation', 'Storm-water optimized'],
        images: [
            { label: 'Raw Finish', src: '/paving/D shape Riser Raw Finish.602.png' },
            { label: 'Coated Finish', src: '/paving/D shape Riser coated Finish.604.png' },
            { label: 'Iron Finish', src: '/paving/D shape Riser Iron Finish.603.png' },
            { label: 'With Iron', src: '/paving/D shape Riser with Iron.635.png' },
            { label: 'With Steel', src: '/paving/D shape Riser with Steel.634.png' },
            { label: 'With Cast Iron', src: '/paving/D shape Riser with cast iron.636.png' },
            { label: 'With Coated Finish', src: '/paving/D shape Riser with coated Finish.633.png' }
        ]
    },
    {
        id: 'paving-riser-screws',
        slug: 'paving-risers-with-screws',
        title: 'Paving Risers with Screws',
        materials: ['Ductile Iron', 'Cast Iron'],
        description: 'Heavy duty riser systems featuring secure locking set screws for high traffic roadways and highways.',
        specs: {
            material: 'Heavy Duty Ductile Iron or Fabricated Steel',
            loadRating: 'AASHTO HS-25 Traffic Rated',
            standardSizes: '24", 30", 36"',
            heights: '1.5" to 8"',
            coating: 'Anti-corrosion coated / painted'
        },
        features: ['Heavy-Duty Set Screws', 'Anti-skid design', 'Perfect highway grade alignment'],
        images: [
            { label: 'Screws Option 1', src: '/paving/paving riser with screws.600.png' },
            { label: 'Screws Option 2', src: '/paving/paving riser with screws.601.png' }
        ]
    }
];

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
            { label: 'Iron Finish', src: '/paving/Round Riser iron Finish.614.png' }
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
            { label: 'Iron Finish', src: '/paving/Sqaure Riser iron.609.png' }
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
            { label: 'Iron Finish', src: '/paving/Rectangle Riser iron.608.png' }
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
            { label: 'Iron Finish', src: '/paving/D shape Riser Iron Finish.603.png' }
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
            { label: 'Option 1', src: '/paving/paving riser with screws.600.png' },
            { label: 'Option 2', src: '/paving/paving riser with screws.601.png' }
        ]
    }
];

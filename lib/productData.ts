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
        slug: 'round-grates',
        title: 'Round Trench Industries',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Standard round grates for trenches and catch basins.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'Heavy-Duty Trenching Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous infrastructureic Coated / Iron Finish'
        },
        features: ['Trenching-Adjust™ Expansion system', 'No excavation required', 'design to meet applicable DOT requirements', 'Stackable design'],
        images: [
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grate-horizontal-view_(12).jpeg` },
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grates-img-diagonal-view_(5).jpeg` },
            { label: 'Adjustable Coated', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grates-img-diagonal-view_(8).jpeg` },
            { label: 'Low Screw Coated', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TRENCH_GRATES_001_(4).jpeg` }
        ]
    },
    {
        id: 'round-with-screws',
        slug: 'round-grates-with-screws',
        title: 'Round Grates with Screws',
        materials: ['Cast Iron', 'Ductile Iron', 'Steel'],
        description: 'Round grates featuring integrated set screws for precise height adjustment and level alignment without shims.',
        specs: {
            material: 'Heavy Duty Cast Iron (ASTM A48 Class 35B)',
            loadRating: 'Heavy-Duty Trenching Traffic Rated',
            standardSizes: '24", 26", 28", 30", 32", 36"',
            heights: '1" to 6" in 1/2" increments',
            coating: 'Raw / Bituminous infrastructureic Coated / Iron Finish'
        },
        features: ['Integrated Leveling Screws', 'No excavation required', 'design to meet applicable DOT requirements', 'Stackable design'],
        images: [
            { label: 'Screws 3', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T12_12_04_319Z.jpeg` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T12_12_17_880Z.jpeg` },
        ]
    },
    {
        id: 'square',
        slug: 'square-grates',
        title: 'Square Grates',
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
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T18_45_49_105Z.jpeg` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2025_01_02T12_56_56_434Z.jpeg` }
        ]
    },
    {
        id: 'rect',
        slug: 'rectangle-grates',
        title: 'Rectangle Grates',
        materials: ['Fabricated Steel', 'Cast Iron'],
        description: 'Durable rectangular solutions for larger storm drainage structures and curb inlets.',
        specs: {
            material: 'Heavy Duty Fabricated Steel',
            loadRating: 'Load Rating: See individual product specification Traffic Rated',
            standardSizes: '24"x36", 24"x48" (Custom Available)',
            heights: '2" to 8"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Precision welded seams', 'Adjustable height bolts', 'Curb-side compatible'],
        images: [
            { label: 'Rectangle Grate', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TI-010.JPG` },
            { label: 'Iron Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/pre-trench-06.JPG` },
            { label: 'Coated Finish', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/pre-trench-04.jpg` },
            { label: 'With Cast Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TI-006.JPG` },
            { label: 'Grate 1 Right', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grate-horizontal-view_(12).jpeg` },
            { label: 'Grate 2 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grates-img-diagonal-view_(5).jpeg` },
            { label: 'Grate 3 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/trench-grates-img-diagonal-view_(8).jpeg` },
            { label: 'Grate 4 Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TRENCH_GRATES_001_(4).jpeg` },
            { label: 'Grate 4 Coated A', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T12_12_04_319Z.jpeg` },
            { label: 'Grate 4 Coated B', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T12_12_17_880Z.jpeg` },
            { label: 'Grate 4 Coated C', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2024_12_27T18_45_49_105Z.jpeg` }
        ]
    },
    {
        id: 'd-shape',
        slug: 'd-shape-grates',
        title: 'D-Shape Grates',
        materials: ['Steel', 'Cast Iron'],
        description: 'Specialized D-profile grates engineered specifically for curb inlet trenches.',
        specs: {
            material: 'Cast Iron or Ductile Iron',
            loadRating: 'Heavy Duty Traffic Rated',
            standardSizes: 'Fits standard 24" & 30" D-frames',
            heights: '1" to 4"',
            coating: 'Raw / Coated / Iron Finish'
        },
        features: ['Flush curb alignment', 'No-shift installation', 'Storm-water optimized'],
        images: [
            { label: 'D-Shape Grate', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/Skype_Picture_2025_01_02T12_56_56_434Z.jpeg` },
            { label: 'With Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TI-010.JPG` },
            { label: 'With Cast Iron', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/pre-trench-06.JPG` },
            { label: 'With Steel', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/pre-trench-04.jpg` }
        ]
    },
    {
        id: 'trenching-grate-screws',
        slug: 'trenching-grates-with-screws',
        title: 'Trench Industries with Screws',
        materials: ['Ductile Iron', 'Cast Iron'],
        description: 'Heavy duty grate systems featuring secure locking set screws for high traffic roadways and highways.',
        specs: {
            material: 'Heavy Duty Ductile Iron or Fabricated Steel',
            loadRating: 'Trenching Standard HS-25 Traffic Rated',
            standardSizes: '24", 30", 36"',
            heights: '1.5" to 8"',
            coating: 'Anti-corrosion coated / painted'
        },
        features: ['Heavy-Duty Set Screws', 'Anti-skid design', 'Perfect highway grade alignment'],
        images: [
            { label: 'Screws Option 2', src: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/TI-006.JPG` }
        ]
    }
];

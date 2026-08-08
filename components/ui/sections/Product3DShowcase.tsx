'use client';
import React, { useState, Suspense, useMemo } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Html } from '@react-three/drei';
import {
  Rotate3d,
  ChevronRight,
  Layers,
  Loader2,
  Box
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductModel {
  id: number;
  title: string;
  description: string;
  type: string;
  glbPath: string;
  thumbnail: string;
}

const PRODUCT_MODELS: ProductModel[] = [
  {
    id: 1,
    title: "Round Riser – Coated Finish",
    description: "Factory-applied corrosion-resistant coating protects against moisture, road salt, and chemical exposure in underground installations.",
    type: "ROUND",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/Hero%20Product.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Square%20coated.665.png`
  },
  {
    id: 2,
    title: "Round Riser with Screw",
    description: "Built-in heavy-duty set screws allow field crews to fine-tune vertical height and level alignment without shims or wedges.",
    type: "ROUND_WITH_SCREW",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/Round%20Riser%20with%20screw%20coated%20Finish.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20with%20screws.600.png`
  },
  {
    id: 3,
    title: "Square Riser – Coated Finish",
    description: "Heavy-duty square perimeter framework constructed to lift flat drainage grates and catch basin lids to final highway grade.",
    type: "SQUARE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/Square%20Riser%20coated%20Finish.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Square%20coated.665.png`
  },
  {
    id: 4,
    title: "Rectangle Riser – Coated Finish",
    description: "Elongated rectangular form factor designed specifically for oblong utility vault openings and trench-style drainage inlets.",
    type: "RECTANGLE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/RectangleRiser%20coated%20Finish.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/Rectangle%20Paving%20Riser%204%20coated%20Finish.631.png`
  },
  {
    id: 5,
    title: "D-Shape Riser – Coated Finish",
    description: "Straight-back vertical mounting edge optimized to align flush against poured concrete municipal curb lines.",
    type: "D_SHAPE",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/D%20shape%20Riser%20coated%20Finish.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/D%20shape%20Riser%20with%20coated%20Finish.633.png`
  },
  {
    id: 6,
    title: "MR3 Master Riser Assembly",
    description: "Complete master riser assembly showcasing the full multi-component stacking system for deep-set utility adjustments.",
    type: "ASSEMBLY",
    glbPath: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/gib%20files/mr3.glb`,
    thumbnail: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/paving/paving%20riser%20Round%20No%20screw%20steel.661.png`
  }
];

// ── GLB Model Renderer ──
function ModelViewer({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  return <primitive object={clonedScene} dispose={null} />;
}

// ── Canvas Loading Indicator ──
function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/90 border border-zinc-800 p-6 rounded-md text-center space-y-3 shadow-2xl backdrop-blur-md w-56">
        <Loader2 className="w-8 h-8 text-[#CC0000] animate-spin" />
        <p className="text-[10px] uppercase font-black tracking-widest text-white">Loading 3D Model...</p>
        <p className="text-[9px] text-gray-500 font-medium">Streaming geometry data</p>
      </div>
    </Html>
  );
}

export default function Product3DShowcase() {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const activeModel = PRODUCT_MODELS[activeModelIndex];

  return (
    <section className="bg-zinc-950 text-white py-4 border-t border-zinc-900">
      <div className="p-6 md:p-8 lg:p-12">

        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rotate3d className="text-[#CC0000] w-5 h-5 animate-spin-slow" />
              <span className="text-[#CC0000] font-bold uppercase tracking-widest text-sm">
                Interactive Showroom
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              3D Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Visualization</span>
            </h2>
          </div>
        </div>

        {/* --- MAIN AREA COMPACT SYNERGY CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* LEFT: 3D Canvas Viewport */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-[#e5e5e5] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden group">

              {/* Model ID Badge */}
              <div className="absolute top-4 left-4 bg-black/90 border border-zinc-800 rounded px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-gray-500 z-20 flex items-center gap-2 pointer-events-none">
                <Box className="w-3.5 h-3.5 text-[#CC0000]" /> {activeModel.type.replace('_', ' ')}
              </div>

              {/* 3D Canvas */}
              <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.7} />
                  <Stage environment="city" adjustCamera={true}>
                    <Suspense fallback={<CanvasLoader />}>
                      <ModelViewer url={activeModel.glbPath} />
                    </Suspense>
                  </Stage>
                  <OrbitControls makeDefault enableZoom={true} />
                </Canvas>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none">
                <div className="flex items-center gap-3 mb-1">
                  <Badge variant="outline" className="text-[#CC0000] border-[#CC0000] bg-[#CC0000]/10">
                    {activeModel.type.replace('_', ' ')}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold">{activeModel.title}</h3>
                <p className="text-gray-300 text-sm max-w-xl">{activeModel.description}</p>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm border border-zinc-800 px-3 py-1.5 rounded text-[9px] uppercase font-bold tracking-wide text-gray-500 z-20 pointer-events-none flex items-center gap-1.5">
                <Rotate3d className="w-3 h-3 text-[#CC0000]" /> Drag to Rotate • Scroll to Zoom
              </div>
            </div>
          </div>

          {/* RIGHT: Model Playlist with Strict Aspect-Video Height Adaptation */}
          <div className="lg:col-span-1 bg-zinc-900/50 rounded-lg border border-zinc-800 p-4 w-full aspect-video lg:aspect-auto lg:h-[56.25vw] lg:max-h-[500px] xl:max-h-[540px] 2xl:max-h-[640px] flex flex-col min-h-0 overflow-hidden">
            <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2 shrink-0">
              <Layers className="w-4 h-4" />
              3D Models
            </h4>

            {/* Scrollable Core Playlist Viewport */}
            <div className="space-y-3 overflow-y-scroll pr-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent flex-grow min-h-0">
              {PRODUCT_MODELS.map((model, idx) => (
                <div
                  key={model.id}
                  onClick={() => setActiveModelIndex(idx)}
                  className={cn(
                    "flex gap-4 p-3 rounded-md cursor-pointer transition-all border group select-none",
                    activeModelIndex === idx
                      ? "bg-[#0F0F0F] text-white border-[#CC0000]"
                      : "bg-[#0F0F0F] border-zinc-800 hover:border-zinc-600"
                  )}
                >
                  {/* Thumbnail */}
                  <div className="relative w-24 h-16 bg-zinc-200 rounded overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={model.thumbnail}
                      alt={model.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    {activeModelIndex === idx && (
                      <div className="absolute inset-0 bg-[#0F0F0F]/50 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-[#CC0000] rounded-full animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h5 className={cn(
                      "font-bold text-sm leading-tight mb-1 group-hover:text-[#CC0000] transition-colors truncate",
                      activeModelIndex === idx ? "text-[#CC0000]" : "text-white"
                    )}>
                      {model.title}
                    </h5>
                    <p className="text-xs text-gray-500 truncate">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action Section (Shrink Shield Protected) */}
            <div className="mt-4 pt-4 border-t border-zinc-800 text-center shrink-0">
              <p className="text-xs text-gray-500 mb-3">Need 3D CAD files for your project?</p>
              <Button variant="outline" className="w-full text-xs text-[#CC0000] border-[#CC0000] hover:bg-white hover:text-black uppercase rounded-sm h-10 transition-colors">
                Request CAD / BIM Files <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Pre-fetch models
PRODUCT_MODELS.forEach((model) => {
  useGLTF.preload(model.glbPath);
});
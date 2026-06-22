'use client';

import React, { useState, Suspense, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Html } from '@react-three/drei';
import * as THREE from 'three';
import {
    Box,
    Layers,
    Maximize2,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    Info,
    Loader2,
    FileCode
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

  

export interface Hotspot {
  : string;
  tle: string;
  scription: string;
   number;
   number;
   number;
  ecLabel: string;
  ecValue: string;
}

export interface GlbModel {
  : string;
  me: string;
  th: string;
  tspots: Hotspot[];
}

const GLB_MODELS: GlbModel[] = [
    {
        id: "round-paving-riser-1in",
        name: "1 Inch Round Paving Riser",
        path: "/gib files/mr3.glb", // Preserved exact local path per instructions
        hotspots: [
            {
                id: "r1-p1",
                title: "Precision Height Trim Flange",
                description: "Low-profile heavy-duty cast iron seating ring designed for thin micro-surfacing and single-lift asphalt overlays.",
                x: 0, y: 0.6, z: 0.5,
                specLabel: "Nominal Rise",
                specValue: '1" Clear Elevation'
            },
            {
                id: "r1-p2",
                title: "Bituminous Seating Base",
                description: "Machined flat bottom surface finished with an asphaltic bituminous coating to eliminate vibration rattle under heavy traffic loading.",
                x: 0.7, y: -0.2, z: 0.3,
                specLabel: "Material Spec",
                specValue: "ASTM A48 Class 35B Iron"
            }
        ]
    },
    {
        id: "mega-adjust-riser-2in",
        name: "2 Inch Mega-Adjust™ Expandable Riser",
        path: "/gib files/mr3.glb", // Preserved exact local path per instructions
        hotspots: [
            {
                id: "ma2-p1",
                title: "Mechanical Expansion Linkage",
                description: "Integrated heavy-duty turnbuckle assembly that expands outward horizontally to bite permanently into the existing utility frame base.",
                x: 0, y: 0.8, z: 0.4,
                specLabel: "Lock Mechanism",
                specValue: "Turnbuckle Expansion Bolt"
            },
            {
                id: "ma2-p2",
                title: "Heavy Load-Bearing Core",
                description: "Reinforced structural profile design engineered to bear continuous high-velocity impact loads from commercial truck traffic.",
                x: 0.6, y: 0, z: 0.4,
                specLabel: "Traffic Rating",
                specValue: "AASHTO H-20 & HS-20 Traffic"
            }
        ]
    },
    {
        id: "tapered-road-riser-3in",
        name: "3 Inch Custom Tapered Road Riser",
        path: "/gib files/mr3.glb", // Preserved exact local path per instructions
        hotspots: [
            {
                id: "tr3-p1",
                title: "Sloped Grade Profile",
                description: "Bespoke angled casting engineered specifically to accommodate severe road crowning, drainage slope pitches, or localized grade variations.",
                x: 0, y: 1.0, z: 0.5,
                specLabel: "Taper Pitch",
                specValue: "Custom Variable Slope"
            },
            {
                id: "tr3-p2",
                title: "Snowplow Protection Bevel",
                description: "Specially machined, run-out rim alignment profile that sits perfectly flush with the final wear course to prevent plow blade snags.",
                x: 0.5, y: -0.5, z: 0.3,
                specLabel: "Safety Profile",
                specValue: "Flush Anti-Snag Trim"
            }
        ]
    },
    {
        id: "catch-basin-riser-1250",
        name: "1250 Series Square Catch Basin Riser",
        path: "/gib files/mr3.glb", // Preserved exact local path per instructions
        hotspots: [
            {
                id: "cb-p1",
                title: "Fabricated Steel Outer Housing",
                description: "Heavy-duty perimeter framework box constructed to lift square flat drainage grates to final highway grade without excavation.",
                x: -0.5, y: 0.5, z: 0.4,
                specLabel: "Construction Type",
                specValue: "Structural Welded Steel"
            },
            {
                id: "cb-p2",
                title: "Corner Gusset Reinforcements",
                description: "Internal heavy-gauge structural plates welded at all core stress corners to prevent vertical deflection under load conditions.",
                x: 0, y: 0.9, z: 0,
                specLabel: "Reinforcement",
                specValue: "4-Point Welded Bracing"
            }
        ]
    },
    {
        id: "d-profile-curb-riser",
        name: "D-Shape Curb Inlet Riser Frame",
        path: "/gib files/mr3.glb", // Preserved exact local path per instructions
        hotspots: [
            {
                id: "cr-p1",
                title: "Asymmetric Flush Backing Flange",
                description: "Straight-back vertical mounting edge optimized to align directly flush against poured concrete municipal curb lines.",
                x: 0.5, y: 0.3, z: 0.5,
                specLabel: "Profile Style",
                specValue: "3-Sided D-Shape Curb Unit"
            },
            {
                id: "cr-p2",
                title: "Adjustable Equalizer Alignment Screws",
                description: "Heavy setting adjustment bolts positioned along the frame parameters to assist crews in truing up individual sides before laying final asphalt overlays.",
                x: 0, y: 0, z: 0.4,
                specLabel: "Leveling Control",
                specValue: "Integrated Leveling Set"
            }
        ]
    }
];

// ────────────────────────────────────────────────────
// 2. GLB MODEL RENDERER
// ────────────────────────────────────────────────────
function ModelViewer({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} dispose={null} />;
}

// ────────────────────────────────────────────────────
// 3. SINGLE 3D-ANCHORED HOTSPOT DOT
//    Lives INSIDE the Canvas / Stage so it rotates,
//    zooms and pans with the model.
// ────────────────────────────────────────────────────
function Hotspot3D({
    spot,
    isActive,
    isHovered,
    onHoverIn,
    onHoverOut,
    onClick,
}: {
    spot: Hotspot;
    isActive: boolean;
    isHovered: boolean;
    onHoverIn: () => void;
    onHoverOut: () => void;
    onClick: () => void;
}) {
    return (
        <Html
            position={[spot.x, spot.y, spot.z]}
            center
            distanceFactor={5}
            zIndexRange={[20, 0]}
            style={{ pointerEvents: 'auto' }}
        >
            <button
                onMouseEnter={onHoverIn}
                onMouseLeave={onHoverOut}
                onClick={onClick}
                className="relative flex items-center justify-center w-7 h-7 focus:outline-none group/dot"
                style={{ cursor: 'pointer' }}
            >
                {/* Ping ring */}
                <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                    style={{ backgroundColor: isActive ? '#CC0000' : '#555' }}
                />
                {/* Glow ring */}
                <span
                    className="absolute inline-flex h-5 w-5 rounded-full opacity-30 animate-pulse"
                    style={{ backgroundColor: isActive ? '#CC0000' : '#555' }}
                />
                {/* Core dot */}
                <span
                    className="relative inline-flex rounded-full h-3 w-3 shadow-lg"
                    style={{
                        backgroundColor: isActive ? '#CC0000' : '#555',
                        border: '2px solid rgba(255,255,255,0.5)',
                        boxShadow: isActive
                            ? '0 0 12px rgba(204,0,0,0.6)'
                            : '0 0 6px rgba(85,85,85,0.4)',
                    }}
                />

                {/* ── Hover tooltip card ── */}
                <div
                    className="absolute z-50 pointer-events-none transition-all duration-200 origin-bottom"
                    style={{
                        bottom: 'calc(100% + 12px)',
                        left: '50%',
                        transform: `translateX(-50%) ${isHovered ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.95)'}`,
                        opacity: isHovered ? 1 : 0,
                        width: '220px',
                    }}
                >
                    <div
                        className="rounded-md shadow-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, #0a0a0a 0%, #111111 100%)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        {/* Red accent bar */}
                        <div style={{ height: '3px', background: 'linear-gradient(90deg, #CC0000, #ff4444, #CC0000)' }} />

                        <div className="p-3 space-y-1.5">
                            <h4 className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">
                                {spot.title}
                            </h4>
                            <p className="text-[10px] text-[#888] leading-snug">
                                {spot.description}
                            </p>
                            <div
                                className="flex items-center gap-1.5 pt-1"
                                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <span className="text-[9px] font-bold uppercase tracking-widest text-[#CC0000]">
                                    {spot.specLabel}
                                </span>
                                <span className="text-[9px] text-[#555]">→</span>
                                <span className="text-[9px] font-mono text-white">
                                    {spot.specValue}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Arrow pointer */}
                    <div
                        className="mx-auto"
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid #111111',
                        }}
                    />
                </div>
            </button>
        </Html>
    );
}

// ────────────────────────────────────────────────────
// 4. IN-CANVAS LOADING INDICATOR
// ────────────────────────────────────────────────────
function CanvasLoader() {
    return (
        <Html center>
            <div className="flex flex-col items-center justify-center bg-black/90 border border-[#1a1a1a] p-6 rounded-sm text-center space-y-3 shadow-2xl backdrop-blur-md w-56">
                <Loader2 className="w-8 h-8 text-[#CC0000] animate-spin" />
                <p className="text-[10px] uppercase font-black tracking-widest text-white">Streaming Model Data...</p>
                <p className="text-[9px] text-[#555] font-medium">Extracting localized geometry matrices</p>
            </div>
        </Html>
    );
}

// ────────────────────────────────────────────────────
// 5. SCENE CONTENT  –  model + hotspots live together
//    so the dots are part of the 3D world.
// ────────────────────────────────────────────────────
function SceneContent({
    model,
    activeSpot,
    hoveredSpotId,
    onSpotClick,
    onSpotHoverIn,
    onSpotHoverOut,
}: {
    model: GlbModel;
    activeSpot: Hotspot | null;
    hoveredSpotId: string | null;
    onSpotClick: (s: Hotspot) => void;
    onSpotHoverIn: (s: Hotspot) => void;
    onSpotHoverOut: () => void;
}) {
    return (
        <>
            <Stage environment="city" adjustCamera={true}>
                <Suspense fallback={<CanvasLoader />}>
                    <ModelViewer url={model.path} />
                </Suspense>

                {/* Hotspot dots anchored in 3D space */}
                {model.hotspots.map((spot) => (
                    <Hotspot3D
                        key={spot.id}
                        spot={spot}
                        isActive={activeSpot?.id === spot.id}
                        isHovered={hoveredSpotId === spot.id}
                        onHoverIn={() => onSpotHoverIn(spot)}
                        onHoverOut={onSpotHoverOut}
                        onClick={() => onSpotClick(spot)}
                    />
                ))}
            </Stage>
            <OrbitControls makeDefault enableZoom={true} />
        </>
    );
}

// ────────────────────────────────────────────────────
// 6. MAIN EXPORTED COMPONENT
// ────────────────────────────────────────────────────
export default function Interactive3DShowcase() {
    const [activeModel, setActiveModel] = useState<GlbModel>(GLB_MODELS[0]);
    const [activeSpot, setActiveSpot] = useState<Hotspot | null>(GLB_MODELS[0].hotspots[0] ?? null);
    const [hoveredSpotId, setHoveredSpotId] = useState<string | null>(null);

    const handleModelChange = (model: GlbModel) => {
        setActiveModel(model);
        setActiveSpot(model.hotspots[0] ?? null);
        setHoveredSpotId(null);
    };

    return (
        <section className="bg-black text-white py-24 font-sans overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 space-y-12 relative z-10">

                {/* ── SECTION HEADER ── */}
                <div className="max-w-3xl space-y-4">
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-[#CC0000] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#CC0000]" /> Immersive Digital Twin Viewport
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1]">
                        Interactive 3D Structure <br />
                        <span className="text-[#CC0000]">Inspection Sandbox.</span>
                    </h2>
                    <p className="text-[#888] text-lg font-medium leading-relaxed">
                        Switch between asset structures instantly below. Rotate models in full 3D and hover over integrated hotspots to check field engineering specs.
                    </p>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* COL 1 — Model switcher sidebar */}
                    <div className="lg:col-span-3 flex flex-col gap-2 bg-[#0a0a0a] p-4 rounded-sm border border-[#1a1a1a] shadow-xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#555] px-2 mb-2 block">
                            Active GLB Repositories ({GLB_MODELS.length})
                        </span>
                        {GLB_MODELS.map((model) => {
                            const isActive = activeModel.id === model.id;
                            return (
                                <button
                                    key={model.id}
                                    onClick={() => handleModelChange(model)}
                                    className={`w-full flex items-center justify-between p-4 rounded-sm font-bold text-xs uppercase tracking-wide text-left transition-all duration-150 border ${isActive
                                        ? "bg-[#CC0000] border-[#CC0000] text-white pl-6 shadow-md"
                                        : "bg-[#111]/50 border-[#1a1a1a] text-[#888] hover:bg-[#111] hover:text-white hover:border-[#333]"
                                        }`}
                                >
                                    <div className="flex items-center gap-2 max-w-[85%]">
                                        <FileCode className="w-4 h-4 shrink-0" />
                                        <span className="truncate">{model.name}</span>
                                    </div>
                                    <ArrowRight className={`w-4 h-4 opacity-60 ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0'} transition-all`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* COL 2 — 3D Canvas viewport */}
                    <div className="lg:col-span-5 relative min-h-[500px] bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm overflow-hidden shadow-2xl group">

                        {/* Model ID badge */}
                        <div className="absolute top-4 left-4 bg-black/90 border border-[#1a1a1a] rounded-sm px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest text-[#888] z-20 flex items-center gap-2 pointer-events-none">
                            <Box className="w-3.5 h-3.5 text-[#CC0000]" /> Context ID: {activeModel.id}.glb
                        </div>

                        {/* ── The single Canvas — hotspots are INSIDE here ── */}
                        <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
                            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                                <ambientLight intensity={0.7} />
                                <SceneContent
                                    model={activeModel}
                                    activeSpot={activeSpot}
                                    hoveredSpotId={hoveredSpotId}
                                    onSpotClick={(s) => setActiveSpot(s)}
                                    onSpotHoverIn={(s) => { setActiveSpot(s); setHoveredSpotId(s.id); }}
                                    onSpotHoverOut={() => setHoveredSpotId(null)}
                                />
                            </Canvas>
                        </div>

                        {/* Bottom helper bar */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-[#1a1a1a] p-2 text-[10px] uppercase font-bold tracking-wide text-[#888] text-center flex items-center justify-center gap-2 rounded-sm pointer-events-none z-10">
                            <Info className="w-3.5 h-3.5 text-[#CC0000]" /> Click + Drag layout to rotate model view configurations
                        </div>
                    </div>

                    {/* COL 3 — Specs panel */}
                    <div className="lg:col-span-4 flex flex-col justify-between bg-[#0a0a0a] border border-[#1a1a1a] rounded-sm p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CC0000]/5 rounded-full blur-2xl pointer-events-none" />

                        {activeSpot ? (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
                                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#555] uppercase">
                                        Node: {activeSpot.id.toUpperCase()}
                                    </span>
                                    <span className="text-[9px] font-black uppercase tracking-wider text-[#CC0000] bg-[#CC0000]/10 border border-[#CC0000]/20 px-2 py-0.5 rounded-sm">
                                        Active Telemetry
                                    </span>
                                </div>

                                <div className="space-y-3 transition-all duration-300">
                                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                                        {activeSpot.title}
                                    </h3>
                                    <p className="text-sm text-[#777] font-medium leading-relaxed">
                                        {activeSpot.description}
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#1a1a1a]/60 p-4 rounded-sm space-y-3 mt-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#555] block">
                                        Material Structural Specs
                                    </span>
                                    <div className="flex justify-between items-center text-xs font-bold border-b border-[#1a1a1a]/60 pb-2">
                                        <span className="text-[#888] uppercase tracking-wider">Parameters:</span>
                                        <span className="text-white uppercase tracking-wide">{activeSpot.specLabel}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs font-bold pt-1">
                                        <span className="text-[#888] uppercase tracking-wider">Compliance metric:</span>
                                        <span className="text-[#CC0000] tracking-wide font-mono">{activeSpot.specValue}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-[#555] text-xs italic py-12">
                                No component nodes assigned to this product asset profile.
                            </div>
                        )}

                        <div className="pt-8 border-t border-[#1a1a1a] mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-xs font-medium text-[#888] leading-normal">
                                <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0" />
                                <span>All product casting matrices comply with municipal construction regulations.</span>
                            </div>

                            <Link href="#contact" className="block">
                                <Button className="w-full h-12 bg-[#CC0000] hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-sm rounded-sm shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                    Request Asset CAD Blueprint <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

// Pre-fetches models for faster file switching performance
GLB_MODELS.forEach((model) => {
    useGLTF.preload(model.path);
});
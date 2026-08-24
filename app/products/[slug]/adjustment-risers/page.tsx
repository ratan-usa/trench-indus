'use client';

import React, { useState } from 'react';
import { Search, X, Filter, Box, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { MOCK_FILTERS, adjustment_risers } from '@/lib/product';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [openFilters, setOpenFilters] = useState<{ [key: string]: boolean }>(
    MOCK_FILTERS.reduce((acc, filter) => ({ ...acc, [filter.category]: true }), {})
  );

  const toggleFilter = (category: string) => {
    setOpenFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleFilterChange = (category: string, option: string) => {
    setCurrentPage(1);
    setSelectedFilters((prev) => {
      const currentSelected = prev[category] || [];
      if (currentSelected.includes(option)) {
        return {
          ...prev,
          [category]: currentSelected.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentSelected, option],
        };
      }
    });
  };

  const filteredProducts = adjustment_risers.filter((product) => {
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    for (const [category, options] of Object.entries(selectedFilters)) {
      if (options.length === 0) continue;

      switch (category) {
        case 'MATERIAL':
          if (!options.includes(product.attributes.material)) return false;
          break;
        case 'SHAPE':
          if (!options.includes(product.attributes.shape)) return false;
          break;
        case 'CLEAR OPENING':
          if (!options.includes(product.attributes.clearOpening)) return false;
          break;
        case 'SEAT THICKNESS':
          if (!options.includes(product.attributes.seatThickness)) return false;
          break;
        case 'RISE':
          if (!options.includes(product.attributes.rise)) return false;
          break;
        case 'SURFACE':
          if (!options.includes(product.attributes.surface)) return false;
          break;
        case 'CLASSIC SERIES':
          if (!options.includes(product.attributes.classicSeries)) return false;
          break;
      }
    }
    return true;
  }).sort((a, b) => {
    if (sortOption === 'name-asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'name-desc') {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans text-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] border-b border-[#333] overflow-hidden flex items-end">
        <div className="absolute inset-0 bg-[url('https://pub-cda644091d0e4a2189f90506f8921d34.r2.dev/assets/trenching-RISERS/d-shape.png')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-[#CC0000]"></div>
              <span className="text-[#CC0000] font-bold uppercase tracking-[0.2em] text-xs">Infrastructure Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Adjustment <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Grates</span>
            </h1>
          </div>
          <p className="text-gray-400 font-medium max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            Industrial-grade grading rings and access solutions built for high-traffic municipal applications.
          </p>
        </div>
      </section>

      {/* MAIN CATALOG INTERFACE */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        
        {/* CONTROL BAR */}
        <div className="mb-12 border-b border-[#333] pb-6 flex flex-col md:flex-row justify-between items-end gap-6">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#CC0000]" />
            </div>
            <input
              type="text"
              className="w-full pl-12 pr-12 py-4 bg-[#111] border border-[#333] focus:border-[#CC0000] rounded-none text-white font-bold tracking-widest text-xs uppercase focus:ring-0 outline-none transition-colors placeholder:text-gray-600"
              placeholder="Query part numbers or dims..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 shrink-0">
              <span className="text-white">{filteredProducts.length}</span> Results
            </div>
            <div className="relative w-full md:w-[200px]">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full bg-[#111] border border-[#333] text-white text-xs font-bold uppercase tracking-widest p-4 outline-none focus:border-[#CC0000] cursor-pointer appearance-none"
              >
                <option value="default">Sort: Default</option>
                <option value="name-asc">Sort: Name (A-Z)</option>
                <option value="name-desc">Sort: Name (Z-A)</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SIDEBAR FILTERS (DARK MODE) */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-4">
                <div className="flex items-center gap-3">
                  <Filter className="w-4 h-4 text-[#CC0000]" />
                  <h2 className="text-sm font-black uppercase tracking-[0.2em]">Parameters</h2>
                </div>
                {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                  <button
                    onClick={() => { setSelectedFilters({}); setCurrentPage(1); }}
                    className="text-[10px] font-bold text-gray-500 hover:text-[#CC0000] uppercase tracking-widest transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {MOCK_FILTERS.map((filter, index) => {
                  const isOpen = openFilters[filter.category];
                  return (
                    <div key={index} className="border border-[#222] bg-[#111]">
                      <button
                        onClick={() => toggleFilter(filter.category)}
                        className="w-full flex items-center justify-between text-[11px] font-black text-gray-300 uppercase tracking-widest p-4 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                      >
                        <span>{filter.category}</span>
                        {isOpen ? <ChevronUp className="w-3 h-3 text-[#CC0000]" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}
                      </button>
                      
                      {/* Smooth height transition wrapper can be complex in react without libs, using max-height hack or just conditionally rendering with animate-in */}
                      {isOpen && (
                        <div className="px-4 pb-4 space-y-3 bg-[#0A0A0A] border-t border-[#222] pt-4 animate-in slide-in-from-top-2 fade-in duration-200">
                          {filter.options.map((option, optIndex) => {
                            const isChecked = selectedFilters[filter.category]?.includes(option) || false;
                            return (
                              <label key={optIndex} className="flex items-start cursor-pointer group">
                                <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleFilterChange(filter.category, option)}
                                    className="peer appearance-none h-4 w-4 border border-[#444] bg-[#111] checked:bg-[#CC0000] checked:border-[#CC0000] rounded-none cursor-pointer transition-colors"
                                  />
                                  <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                                <span className={cn(
                                  "ml-3 text-xs uppercase tracking-wider font-medium transition-colors duration-200",
                                  isChecked ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                                )}>
                                  {option}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <main className="w-full lg:w-3/4 xl:w-4/5">
            {filteredProducts.length === 0 ? (
              /* EMPTY STATE: Terminal Style */
              <div className="w-full bg-[#111] border border-[#333] p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="animate-pulse mb-6">
                  <Box className="w-12 h-12 text-[#CC0000]" />
                </div>
                <div className="font-mono text-xs text-gray-500 mb-2 uppercase tracking-widest">&gt; QUERY_RETURNED_NULL</div>
                <h3 className="text-xl font-black uppercase tracking-widest text-white mb-6">No Matching Specifications</h3>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedFilters({}); setCurrentPage(1); }}
                  className="bg-transparent border border-[#CC0000] hover:bg-[#CC0000] text-[#CC0000] hover:text-white px-8 py-3 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300"
                >
                  Clear Parameters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <div key={product.id} className="group flex flex-col bg-[#111] border border-[#333] hover:border-[#CC0000] hover:shadow-[0_0_30px_rgba(204,0,0,0.15)] transition-all duration-500 overflow-hidden cursor-pointer">
                      
                      {/* Image Viewer */}
                      <div className="relative w-full h-64 bg-[#0A0A0A] p-8 flex items-center justify-center overflow-hidden border-b border-[#222]">
                        {/* Technical Grid stormwater system */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        
                        <img
                          src={product.image}
                          alt={product.title}
                          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        
                        {/* SKU Badge */}
                        <div className="absolute top-4 right-4 bg-[#CC0000] text-white text-[9px] font-black px-2 py-1 uppercase tracking-[0.2em] z-20">
                          {product.id}
                        </div>
                      </div>

                      {/* Content Base */}
                      <div className="p-6 flex flex-col flex-grow relative">
                        <h3 className="text-sm font-black uppercase tracking-wider leading-relaxed mb-6 group-hover:text-[#CC0000] transition-colors line-clamp-2">
                          {product.title}
                        </h3>

                        {/* Specs Tech-Grid */}
                        <div className="grid grid-cols-2 gap-px bg-[#222] border border-[#222] mt-auto mb-6">
                          <div className="bg-[#111] p-3 flex flex-col">
                            <span className="text-[#CC0000] font-bold uppercase tracking-widest text-[9px] mb-1">Shape</span>
                            <span className="font-semibold text-gray-300 text-xs">{product.attributes.shape}</span>
                          </div>
                          <div className="bg-[#111] p-3 flex flex-col">
                            <span className="text-[#CC0000] font-bold uppercase tracking-widest text-[9px] mb-1">Material</span>
                            <span className="font-semibold text-gray-300 text-xs truncate" title={product.attributes.material}>{product.attributes.material}</span>
                          </div>
                          <div className="bg-[#111] p-3 flex flex-col col-span-2">
                            <span className="text-[#CC0000] font-bold uppercase tracking-widest text-[9px] mb-1">Clear Opening</span>
                            <span className="font-semibold text-gray-300 text-xs">{product.attributes.clearOpening}</span>
                          </div>
                        </div>

                        {/* Footer Action */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#333]">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                            View Specs
                          </span>
                          <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center group-hover:bg-[#CC0000] group-hover:border-[#CC0000] transition-colors">
                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center items-center space-x-2 flex-wrap gap-y-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setCurrentPage(i + 1);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={cn(
                          "w-12 h-12 flex items-center justify-center text-xs font-black uppercase tracking-widest transition-all duration-300",
                          currentPage === i + 1
                            ? "bg-[#CC0000] text-white"
                            : "bg-[#111] border border-[#333] text-gray-500 hover:border-white hover:text-white"
                        )}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalog;
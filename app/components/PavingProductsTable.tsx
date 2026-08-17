'use client';

import React, { useState, useMemo } from 'react';
import { PAVING_PRODUCTS, PavingProduct } from '@/lib/PAVING_PRODUCTS';
import { Search, Filter, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ITEMS_PER_PAGE = 15;

export default function PavingProductsTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(PAVING_PRODUCTS.map(p => p.Category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    return PAVING_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.Category === selectedCategory;
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        (product['Paving NO. (Raw)']?.toLowerCase().includes(searchLower)) ||
        (product['Base Code']?.toLowerCase().includes(searchLower)) ||
        (product['Description']?.toLowerCase().includes(searchLower)) ||
        (product['Parsed Size']?.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Handle Page Change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reset page on filter change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-24 bg-[#0a0a0a] font-sans border-t border-zinc-900 relative overflow-hidden" id="spec-table">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#CC0000]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              Complete <span className="text-[#CC0000]">Specifications</span>
            </h2>
            <p className="text-zinc-400 font-medium max-w-2xl text-lg">
              Search our comprehensive database of paving risers, adjustment rings, and catch basins. Filter by size, material, or paving number.
            </p>
          </div>

          <Button className="bg-[#CC0000] hover:bg-white text-white hover:text-black font-black uppercase tracking-widest rounded-sm h-12 px-6 transition-all duration-300">
            Download CSV <Download className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-zinc-500" />
            </div>
            <input
              type="text"
              placeholder="Search by Paving No, Base Code, Size, or Description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-sm pl-12 pr-4 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full lg:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Filter className="w-5 h-5 text-zinc-500" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-sm pl-12 pr-10 py-4 focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] appearance-none cursor-pointer transition-all"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-zinc-900 text-white">
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            {/* Custom Dropdown Arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-sm overflow-hidden backdrop-blur-sm shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/80 border-b border-zinc-800">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap">Paving NO.</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap">Category</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap">Size</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap">Height</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap">Material</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-zinc-400 min-w-[300px]">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {currentData.length > 0 ? (
                  currentData.map((product) => (
                    <tr key={product["SL No."]} className="hover:bg-zinc-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-bold text-white group-hover:text-[#CC0000] transition-colors">
                          {product["Paving NO. (Raw)"]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest bg-zinc-800 text-zinc-300">
                          {product.Category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-white whitespace-nowrap">
                        {product["Parsed Size"]}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-zinc-300 whitespace-nowrap">
                        {product["Height (in)"] ? `${product["Height (in)"]}"` : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-400 whitespace-nowrap">
                        {product["Material & Type"]}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-400 leading-relaxed">
                        {product.Description}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500 font-medium">
                      No products found matching your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-zinc-900/50 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-400">
                Showing <span className="text-white">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="text-white">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> of <span className="text-white">{filteredProducts.length}</span> results
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-sm border-zinc-700 bg-transparent text-white hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-zinc-700"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {/* Page Indicator */}
                <div className="px-4 py-2 text-sm font-bold text-white bg-zinc-800 rounded-sm">
                  {currentPage} / {totalPages}
                </div>

                <Button 
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-sm border-zinc-700 bg-transparent text-white hover:bg-[#CC0000] hover:text-white hover:border-[#CC0000] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-zinc-700"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

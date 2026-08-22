'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Rss } from 'lucide-react';
import { blogs } from '@/lib/blogData';

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32">
      
      {/* ─── HERO SECTION ─── */}
      <div className="relative w-full pt-48 pb-24 px-6 flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-sm">
            <Rss className="w-4 h-4 text-[#CC0000]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Industry Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Paving <span className="text-[#CC0000]">Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            Deep dives into infrastructure, verified installation methods, and the engineering behind modern road solutions.
          </p>
        </motion.div>
      </div>

      {/* ─── BLOG GRID ─── */}
      <div className="px-10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col bg-[#0a0a0a] border border-zinc-900 rounded-sm overflow-hidden hover:border-zinc-700 transition-colors duration-500"
            >
              {/* Image Container */}
              <Link href={`/blog/${blog.slug}`} className="relative h-72 w-full overflow-hidden bg-zinc-950 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image 
                  src={blog.image} 
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-[#CC0000] text-white text-xs font-black uppercase tracking-widest rounded-sm">
                  {blog.category}
                </div>
              </Link>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#CC0000]" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#CC0000]" />
                    {blog.author}
                  </div>
                </div>

                <Link href={`/blog/${blog.slug}`} className="group-hover:text-[#CC0000] transition-colors duration-300">
                  <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>

                <p className="text-zinc-400 leading-relaxed mb-8 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-900">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-[#CC0000] transition-colors group/link"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  // Simple Markdown to HTML parser for our basic needs
  const parseContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return '<br/>';
        if (trimmed.startsWith('###')) return `<h3 class="text-2xl font-black uppercase tracking-tight text-[#CC0000] mt-10 mb-4">${trimmed.replace('###', '').trim()}</h3>`;
        if (trimmed.startsWith('##')) return `<h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mt-12 mb-6">${trimmed.replace('##', '').trim()}</h2>`;
        if (trimmed.startsWith('-')) {
          let liContent = trimmed.replace('-', '').trim();
          // Bold parsing
          liContent = liContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#CC0000]">$1</strong>');
          return `<li class="ml-6 mb-2 text-zinc-300 relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-2 before:w-2 before:h-2 before:bg-[#CC0000] before:rounded-full">${liContent}</li>`;
        }
        
        let pContent = trimmed;
        pContent = pContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');
        return `<p class="text-lg text-zinc-400 leading-relaxed mb-6">${pContent}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#CC0000] selection:text-white pb-32 pt-32">
      
      {/* ─── BREADCRUMB & BACK NAV ─── */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#CC0000] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>
      </div>

      {/* ─── HERO HEADER ─── */}
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-[#CC0000]/10 text-[#CC0000] border border-[#CC0000]/20 text-xs font-black uppercase tracking-widest rounded-sm">
              {blog.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-zinc-500 border-t border-zinc-900 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#CC0000]" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#CC0000]" />
              {blog.author}
            </div>
          </div>
        </header>

        {/* ─── HERO IMAGE ─── */}
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden mb-16 flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.1)_0%,transparent_70%)]" />
          <Image 
            src={blog.image} 
            alt={blog.title}
            fill
            sizes="100vw"
            className="object-contain opacity-90 drop-shadow-2xl"
          />
        </div>

        {/* ─── CONTENT ─── */}
        <div 
          className="prose prose-invert prose-p:text-zinc-400 prose-headings:text-white prose-li:text-zinc-300 max-w-none"
          dangerouslySetInnerHTML={{ __html: parseContent(blog.content) }}
        />

        {/* ─── FOOTER CTA ─── */}
        <div className="mt-24 p-12 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-zinc-900 rounded-sm text-center">
          <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Upgrade Your <span className="text-[#CC0000]">Infrastructure?</span>
          </h3>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Connect with our engineering team today to discuss how our verified paving solutions can save your next project time and money.
          </p>
          <Link 
            href="/contact/quote"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#CC0000] hover:bg-[#0a0a0a] border border-transparent hover:border-[#CC0000] text-white text-sm font-black uppercase tracking-widest transition-all duration-300"
          >
            Get Certified Specs <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </div>
  );
}

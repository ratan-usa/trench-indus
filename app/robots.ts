import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'googlebot-image', allow: '/' },
      { userAgent: 'googlebot-mobile', allow: '/' },
      { userAgent: 'MSNBot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' },
      { userAgent: 'Teoma', allow: '/' },
      { userAgent: 'Gigabot', allow: '/' },
      { userAgent: 'Robozilla', allow: '/' },
      { userAgent: 'Nutch', allow: '/' },
      { userAgent: 'ia_archiver', allow: '/' },
      { userAgent: 'baiduspider', allow: '/' },
      { userAgent: 'naverbot', allow: '/' },
      { userAgent: 'yeti', allow: '/' },
      { userAgent: 'yahoo-mmcrawler', allow: '/' },
      { userAgent: 'psbot', allow: '/' },
      { userAgent: 'yahoo-blogs/v3.9', allow: '/' },
      { userAgent: '*', allow: '/', disallow: '/cgi-bin/' },
    ],
    sitemap: 'https://www.pavingrisers.com/sitemap.xml',
  }
}

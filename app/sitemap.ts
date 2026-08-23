import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trench-industries.com';

  const routes = [
    '',
    '/industry-solutions',
    '/paving-advantage',
    '/pro-service',
    '/products/catch-basin-risers',
    '/products/manhole-riser',
    '/products/valve-box-risers',
    '/products/manhole-frame-cover',
    '/products/adjustment-risers',
    '/products/d-shape-risers',
    '/products/other-cast-iron',
    '/products/utility-product',
    '/products/fabricated-steel',
    '/solutions/paving-resurfacing',
    '/solutions/storm-drainage',
    '/solutions/airports-ports',
    '/solutions/sanitary-sewer',
    '/resources/literature',
    '/resources/videos',
    '/resources/briefs',
    '/resources/calculators',
    '/contact/quote',
    '/about/locations',
    '/contact/specifications',
    '/product/round-risers',
    '/product/round-risers-with-screws',
    '/product/square-risers',
    '/product/rectangle-risers',
    '/product/d-shape-risers',
    '/products/infra-riser-adjustment-risers',
    '/resources/Paving-Adjust-white-paper',
    '/resources/installation-guidelines',
    '/resources/adjustment-riser-brochure',
    '/resources/adjustment-riser-video',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}

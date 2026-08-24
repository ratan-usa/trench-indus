import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trench-industries.com';

  const routes = [
    '',
    '/industry-solutions',
    '/trenching-advantage',
    '/pro-service',
    '/products/catch-basin-grates',
    '/products/trench-grate',
    '/products/valve-box-grates',
    '/products/trench-frame-cover',
    '/products/adjustment-grates',
    '/products/d-shape-grates',
    '/products/other-cast-iron',
    '/products/utility-product',
    '/products/fabricated-steel',
    '/solutions/trenching-streetscaping',
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
    '/product/round-grates',
    '/product/round-grates-with-screws',
    '/product/square-grates',
    '/product/rectangle-grates',
    '/product/d-shape-grates',
    '/products/infra-grate-adjustment-grates',
    '/resources/Trenching-Adjust-white-paper',
    '/resources/installation-guidelines',
    '/resources/adjustment-grate-brochure',
    '/resources/adjustment-grate-video',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}

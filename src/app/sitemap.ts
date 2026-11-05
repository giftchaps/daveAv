import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/installation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/event-production', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/service-support', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/video-production', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/equipment-sales', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/request-quote', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/team', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/support', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

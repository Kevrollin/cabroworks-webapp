import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const now = new Date()

  const images = [
    `${baseUrl}/projects/curved-driveway.webp`,
    `${baseUrl}/projects/concrete-finishing.webp`,
    `${baseUrl}/projects/paver-installation.webp`,
    `${baseUrl}/projects/park-walkway.webp`,
    `${baseUrl}/projects/block-laying.webp`,
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // example project pages (canonical URLs) — add more as you publish
    {
      url: `${baseUrl}/projects/concrete-finishing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/paver-installation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://aggreycabropavers.com'
const siteName = 'Aggrey Cabro Pavers Installations'

const coreKeywords = [
  'cabro installation kenya',
  'cabro paving nairobi',
  'driveway paving kenya',
  'parking paving kenya',
  'walkway paving kenya',
  'interlocking blocks kenya',
  'cabro blocks installation',
  'residential paving kenya',
  'commercial paving kenya',
  'landscaping and paving kenya',
  'kerb installation kenya',
  'drainage works kenya',
  'paving contractor nairobi',
  'best cabro company kenya',
  'cabro prices kenya',
  'cabro quotation nairobi',
  'cabro repairs kenya',
  'compound paving kenya',
  'estate road paving kenya',
  'paving services near me kenya',
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aggrey Cabro Pavers Installations | Professional Paving in Kenya',
    template: '%s | Aggrey Cabro Pavers Installations',
  },
  description:
    'Professional cabro installation, driveway paving, parking areas, walkways and outdoor finishing across Kenya. Clean paving. Solid workmanship. Built to last.',
  applicationName: siteName,
  category: 'Construction',
  keywords: coreKeywords,
  authors: [
    { name: 'Aggrey Cabro Pavers Installations' },
    { name: 'Kelvin Mukaria', url: 'https://kelvinmukaria.vercel.app' },
  ],
  creator: 'Kelvin Mukaria',
  publisher: 'Aggrey Cabro Pavers Installations',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aggrey Cabro Pavers Installations | Professional Paving in Kenya',
    description:
      'Professional cabro installation and outdoor paving across Kenya. Quality finish. Trusted workmanship.',
    type: 'website',
    locale: 'en_KE',
    siteName,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/projects/curved-driveway.webp`,
        width: 1200,
        height: 630,
        alt: 'Professional cabro paving installation in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aggrey Cabro Pavers Installations | Professional Paving in Kenya',
    description: 'Professional cabro installation and outdoor paving across Kenya.',
    images: [`${siteUrl}/projects/curved-driveway.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'replace-with-google-site-verification',
  },
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Nairobi',
    'designer': 'Kelvin Mukaria',
    'developer': 'Kelvin Mukaria',
    'tech-lead': 'Kelvin Mukaria',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#D97706',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteUrl}/#business`,
    name: siteName,
    legalName: siteName,
    description:
      'Professional cabro installation, driveway paving, parking areas, walkways and outdoor finishing across Kenya.',
    url: siteUrl,
    image: `${siteUrl}/projects/curved-driveway.webp`,
    telephone: '+254710535735',
    email: 'mwendebenendeta64@gmail.com',
    knowsAbout: coreKeywords,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressRegion: 'Nairobi County',
      addressLocality: 'Kamulu',
      streetAddress: 'Aggrey, Ambongo',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-1.3031934',
      longitude: '36.68248285',
    },
    areaServed: ['Kamulu', 'Nairobi', 'Kiambu', 'Nakuru', 'Mombasa', 'Kenya'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cabro Paving Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabro Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Driveway Paving' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parking Area Paving' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Walkways and Pathways' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kerb Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drainage Works' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabro Repairs' } },
      ],
    },
    sameAs: [
      'https://wa.me/254710535735',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: 'en-KE',
    publisher: {
      '@id': `${siteUrl}/#business`,
    },
  }

  const creditJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://kelvinmukaria.vercel.app/#person',
    name: 'Kelvin Mukaria',
    jobTitle: 'Designer, Developer and Tech Lead',
    url: 'https://kelvinmukaria.vercel.app',
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creditJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

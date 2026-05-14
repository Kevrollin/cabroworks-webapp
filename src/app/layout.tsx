import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aggrey Cabro Pavers Installations | Professional Paving in Kenya',
  description: 'Professional cabro installation, driveway paving, parking areas, walkways and outdoor finishing across Kenya. Clean paving. Solid workmanship. Built to last.',
  keywords: 'cabro installation Kenya, paving company Nairobi, driveway paving Kenya, walkway paving, parking lot paving, cabro pavers',
  authors: [{ name: 'Aggrey Cabro Pavers' }],
  creator: 'Aggrey Cabro Pavers',
  publisher: 'Aggrey Cabro Pavers',
  metadataBase: new URL('https://aggreycabro.co.ke'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aggrey Cabro Pavers Installations',
    description: 'Professional cabro installation and outdoor paving across Kenya. Quality finish. Trusted workmanship.',
    type: 'website',
    locale: 'en_KE',
    siteName: 'Aggrey Cabro Pavers Installations',
    url: 'https://aggreycabro.co.ke',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Professional cabro paving installation in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aggrey Cabro Pavers Installations',
    description: 'Professional cabro installation and outdoor paving across Kenya.',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Aggrey Cabro Pavers Installations',
    description: 'Professional cabro installation, driveway paving, parking areas, walkways and outdoor finishing across Kenya.',
    url: 'https://aggreycabro.co.ke',
    telephone: '+254710535735',
    email: 'info@aggreycabro.co.ke',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KE',
      addressRegion: 'Nairobi',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-1.3031934',
      longitude: '36.68248285',
    },
    areaServed: ['Nairobi', 'Kiambu', 'Nakuru', 'Mombasa', 'Kenya'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    priceRange: '$$',
    sameAs: [
      'https://wa.me/254710535735',
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

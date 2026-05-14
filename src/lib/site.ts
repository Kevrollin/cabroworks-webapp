const FALLBACK_SITE_URL = 'https://aggrey-pavers.vercel.app'

function normalizeSiteUrl(value: string | undefined): string | undefined {
  if (!value) {
    return undefined
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value.replace(/\/$/, '')
  }

  return `https://${value.replace(/\/$/, '')}`
}

export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  FALLBACK_SITE_URL

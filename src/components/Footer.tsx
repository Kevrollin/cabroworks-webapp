'use client'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Cabro Installation',
  'Driveway Paving',
  'Parking Areas',
  'Walkways & Pathways',
  'Kerb Installation',
  'Landscaping',
  'Drainage Works',
  'Cabro Repairs',
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111827] text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand - full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#D97706] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="1" y="8" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                  <rect x="11" y="8" width="8" height="8" rx="1" fill="white" opacity="0.65"/>
                  <rect x="1" y="1" width="8" height="5" rx="1" fill="white" opacity="0.65"/>
                  <rect x="11" y="1" width="8" height="5" rx="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-700 text-xs sm:text-sm tracking-wide">AGGREY CABRO</div>
                <div className="text-[#D97706] text-[10px] tracking-widest uppercase">Pavers Installations</div>
              </div>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Professional cabro installation across Kenya. Clean finish. Trusted workmanship. Built to last.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/254710535735"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="tel:+254710535735"
                className="w-9 h-9 bg-white/8 hover:bg-[#D97706] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Phone"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.86-1.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              <a
                href="mailto:info@aggreycabro.co.ke"
                className="w-9 h-9 bg-white/8 hover:bg-[#D97706] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-600 text-xs mb-4 text-white/70 tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-white/40 text-sm hover:text-[#D97706] transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-600 text-xs mb-4 text-white/70 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <span className="font-body text-white/40 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-600 text-xs mb-4 text-white/70 tracking-wide uppercase">Contact</h4>
            <div className="space-y-3.5">
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wide mb-0.5">Phone & WhatsApp</div>
                <a href="tel:+254710535735" className="font-body text-white/65 text-sm hover:text-[#D97706] transition-colors duration-200">
                  +254 710 535 735
                </a>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wide mb-0.5">Email</div>
                <a href="mailto:info@aggreycabro.co.ke" className="font-body text-white/65 text-xs hover:text-[#D97706] transition-colors duration-200 break-all">
                  info@aggreycabro.co.ke
                </a>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wide mb-0.5">Service Areas</div>
                <div className="font-body text-white/65 text-sm">
                  Nairobi · Kiambu · Nakuru<br/>Mombasa · Eldoret & more
                </div>
              </div>
              <div>
                <div className="font-body text-white/30 text-[10px] uppercase tracking-wide mb-0.5">Hours</div>
                <div className="font-body text-white/65 text-sm">Mon–Sat: 7AM – 6PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/25 text-xs">
            © {new Date().getFullYear()} Aggrey Cabro Pavers Installations. All rights reserved.
          </p>
          <div className="flex flex-col sm:items-end gap-0.5">
            <p className="font-body text-white/18 text-xs">
              Professional Paving Across Kenya
            </p>
            <p className="font-body text-white/30 text-[11px]">
              Designed, developed and tech-led by{' '}
              <a
                href="https://kelvinmukaria.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97706] hover:text-[#F59E0B] transition-colors duration-200"
              >
                Kelvin Mukaria
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

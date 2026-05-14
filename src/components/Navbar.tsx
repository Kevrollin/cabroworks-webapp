'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'nav-scrolled py-3' : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2.5 group flex-shrink-0"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#D97706] rounded-lg flex items-center justify-center shadow-md">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="8" width="8" height="8" rx="1" fill="white" opacity="0.9"/>
                <rect x="11" y="8" width="8" height="8" rx="1" fill="white" opacity="0.65"/>
                <rect x="1" y="1" width="8" height="5" rx="1" fill="white" opacity="0.65"/>
                <rect x="11" y="1" width="8" height="5" rx="1" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className={`font-heading font-700 text-xs sm:text-sm tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#1F2937]' : 'text-white'}`}>
                AGGREY CABRO
              </div>
              <div className={`text-[9px] sm:text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-[#D97706]' : 'text-[#F59E0B]'}`}>
                Pavers Installations
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link font-body text-sm font-500 transition-colors duration-300 ${
                  scrolled ? 'text-[#1F2937] hover:text-[#D97706]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+254710535735"
              className={`flex items-center gap-2 text-sm font-600 transition-colors duration-300 ${
                scrolled ? 'text-[#1F2937]' : 'text-white/90'
              }`}
            >
              <Phone size={14} />
              +254 710 535 735
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="bg-[#D97706] text-white text-sm font-600 px-5 py-2.5 rounded-full hover:bg-[#B45309] transition-all duration-300 shadow-md"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+254710535735"
              className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-[#D97706]' : 'text-white'}`}
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-[#1F2937]' : 'text-white'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[min(300px,85vw)] bg-[#FAFAF8] shadow-2xl transition-transform duration-300 flex flex-col ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#E7E3DC]">
            <span className="font-heading font-700 text-[#1F2937] text-sm">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="p-1.5 text-[#6B7280] rounded-lg" aria-label="Close menu">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-1 px-3 pt-4 overflow-y-auto">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-4 rounded-xl text-[#1F2937] font-body font-500 text-base hover:bg-[#F5F1EA] hover:text-[#D97706] transition-all duration-200 active:bg-[#F5F1EA]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="px-5 py-6 space-y-3 border-t border-[#E7E3DC]" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}>
            <a
              href="tel:+254710535735"
              className="flex items-center gap-3 text-[#1F2937] font-body font-500 text-sm py-2"
            >
              <Phone size={16} className="text-[#D97706]" />
              +254 710 535 735
            </a>
            <a
              href="https://wa.me/254710535735"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-2xl font-600 text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="w-full flex items-center justify-center bg-[#D97706] text-white py-3.5 rounded-2xl font-600 text-sm"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

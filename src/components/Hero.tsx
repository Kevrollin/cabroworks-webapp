'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative w-full h-screen min-h-[580px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
        alt="Professional cabro paving installation"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container-custom">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="w-6 h-px bg-[#D97706]" />
            <span className="text-[#F59E0B] text-xs font-body font-500 tracking-widest uppercase">
              Professional Paving — Kenya
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-heading font-800 text-white leading-[1.1] mb-4 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(2.1rem, 7vw, 4.8rem)',
              transitionDelay: '0.22s',
            }}
          >
            Professional Cabro<br />
            <span className="gradient-text">Installation</span>{' '}
            <span className="text-white/90">That Lasts.</span>
          </h1>

          {/* Subtext */}
          <p
            className={`font-body text-white/75 mb-8 max-w-md transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              lineHeight: '1.75',
              transitionDelay: '0.36s',
            }}
          >
            Driveways, walkways, compounds and commercial paving done right across Kenya. Clean finish. Trusted workmanship.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center justify-center gap-2 bg-[#D97706] text-white font-body font-600 px-7 py-3.5 rounded-full hover:bg-[#B45309] active:bg-[#B45309] transition-all duration-300 shadow-xl text-sm"
            >
              Get a Free Quote
            </button>
            <a
              href="https://wa.me/254710535735?text=Hello%2C%20I%20need%20a%20cabro%20paving%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-body font-600 px-7 py-3.5 rounded-full hover:bg-white/25 transition-all duration-300 text-sm"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 flex gap-7 sm:gap-12 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            {[
              { num: '500+', label: 'Projects' },
              { num: '10+', label: 'Yrs Experience' },
              { num: '200+', label: 'Happy Clients' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-heading font-700 text-white text-2xl sm:text-3xl leading-none">{stat.num}</div>
                <div className="font-body text-white/55 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#services')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/45 hover:text-white/70 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}

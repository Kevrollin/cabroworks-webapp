'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" ref={sectionRef}>
      <Image
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=80"
        alt="Professional paving background"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 cta-bg opacity-92 z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D97706]/8 rounded-full blur-3xl z-10" />

      <div className="relative z-20 container-custom text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-4">
          <span className="w-7 h-px bg-[#D97706]" />
          <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">Let&apos;s Work Together</span>
          <span className="w-7 h-px bg-[#D97706]" />
        </div>

        <h2 className="reveal font-heading font-700 text-white mb-4 max-w-xl mx-auto" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', lineHeight: '1.15' }}>
          Need Professional Paving Work?
        </h2>

        <p className="reveal font-body text-white/55 mb-8 max-w-sm mx-auto text-sm" style={{ lineHeight: '1.8' }}>
          Get in touch for a free site visit and quotation. No obligation. No pressure.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 bg-[#D97706] text-white font-body font-600 px-7 py-4 rounded-full hover:bg-[#B45309] active:bg-[#B45309] transition-all duration-300 shadow-xl text-sm"
          >
            Get a Free Quote
          </button>
          <a
            href="https://wa.me/254710535735?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20paving%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-600 px-7 py-4 rounded-full hover:bg-[#1da851] active:bg-[#1da851] transition-all duration-300 shadow-lg text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <p className="reveal font-body text-white/30 text-xs mt-7">
          We respond within a few hours. Site visits are free and carry no obligation.
        </p>
      </div>
    </section>
  )
}

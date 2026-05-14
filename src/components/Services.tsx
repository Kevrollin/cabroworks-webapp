'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="11" height="11" rx="1.5" fill="#D97706" opacity="0.9"/>
        <rect x="15" y="10" width="11" height="11" rx="1.5" fill="#D97706" opacity="0.55"/>
        <rect x="2" y="2" width="11" height="6" rx="1.5" fill="#D97706" opacity="0.55"/>
        <rect x="15" y="2" width="11" height="6" rx="1.5" fill="#D97706" opacity="0.9"/>
        <rect x="2" y="23" width="24" height="3" rx="1.5" fill="#6B7280" opacity="0.4"/>
      </svg>
    ),
    title: 'Cabro Installation',
    desc: 'Expert laying of interlocking concrete blocks for any outdoor surface.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M2 22 L26 22 L22 10 L6 10 Z" fill="#D97706" opacity="0.8"/>
        <rect x="10" y="4" width="8" height="6" rx="1" fill="#D97706" opacity="0.5"/>
        <path d="M0 22 L28 22" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Driveway Paving',
    desc: 'Durable, visually appealing driveways for residential and commercial properties.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="6" height="6" rx="1" fill="#D97706" opacity="0.8"/>
        <rect x="11" y="8" width="6" height="6" rx="1" fill="#D97706" opacity="0.6"/>
        <rect x="20" y="8" width="6" height="6" rx="1" fill="#D97706" opacity="0.8"/>
        <rect x="2" y="16" width="6" height="6" rx="1" fill="#D97706" opacity="0.6"/>
        <rect x="11" y="16" width="6" height="6" rx="1" fill="#D97706" opacity="0.8"/>
        <rect x="20" y="16" width="6" height="6" rx="1" fill="#D97706" opacity="0.6"/>
        <rect x="0" y="24" width="28" height="2" rx="1" fill="#6B7280" opacity="0.3"/>
      </svg>
    ),
    title: 'Parking Areas',
    desc: 'Well-finished parking lots for businesses, malls and institutions.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M2 26 C8 20 14 8 26 4" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="8" cy="20" r="2.5" fill="#D97706" opacity="0.6"/>
        <circle cx="16" cy="12" r="2.5" fill="#D97706" opacity="0.8"/>
        <circle cx="23" cy="6" r="2.5" fill="#D97706" opacity="0.6"/>
      </svg>
    ),
    title: 'Walkways & Pathways',
    desc: 'Clean, structured walking paths through gardens, compounds and estates.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="18" width="24" height="5" rx="1.5" fill="#D97706" opacity="0.7"/>
        <rect x="4" y="13" width="20" height="5" rx="1.5" fill="#D97706" opacity="0.85"/>
        <rect x="2" y="10" width="24" height="3" rx="1.5" fill="#6B7280" opacity="0.3"/>
      </svg>
    ),
    title: 'Kerb Installation',
    desc: 'Precision kerb laying that defines boundaries and enhances structure.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" fill="#6B7A4F" opacity="0.8"/>
        <path d="M5 24 Q10 16 14 14 Q18 16 23 24" fill="#6B7A4F" opacity="0.5"/>
        <rect x="0" y="24" width="28" height="3" rx="1" fill="#D97706" opacity="0.4"/>
      </svg>
    ),
    title: 'Landscaping',
    desc: 'Integrated green and paved outdoor spaces for a complete look.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 6 Q8 18 14 24 Q20 18 24 6" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M2 10 L26 10" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.4"/>
        <circle cx="14" cy="24" r="2" fill="#D97706" opacity="0.7"/>
      </svg>
    ),
    title: 'Drainage Works',
    desc: 'Proper drainage channels integrated into all paving projects.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="8" height="8" rx="1.5" fill="#D97706" opacity="0.4"/>
        <rect x="16" y="8" width="8" height="8" rx="1.5" fill="#D97706" opacity="0.9"/>
        <path d="M4 8 L12 8 L16 14 L24 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="20" r="3" fill="#6B7280" opacity="0.4"/>
        <circle cx="20" cy="20" r="3" fill="#6B7280" opacity="0.4"/>
      </svg>
    ),
    title: 'Cabro Repairs',
    desc: 'Restoration and repair of damaged or sunken paving blocks.',
  },
]

export default function Services() {
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
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section-padding bg-[#FAFAF8]" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-px bg-[#D97706]" />
            <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">What We Do</span>
            <span className="w-7 h-px bg-[#D97706]" />
          </div>
          <h2 className="reveal font-heading font-700 text-[#1F2937] mb-3" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
            Our Services
          </h2>
          <p className="reveal font-body text-[#6B7280] max-w-sm mx-auto text-sm" style={{ lineHeight: '1.75' }}>
            Every outdoor space deserves a clean finish. We handle the full scope.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} card-hover bg-white rounded-2xl p-4 sm:p-6 border border-[#F0ECE5] group`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-4 group-hover:bg-[#D97706]/10 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-heading font-600 text-[#1F2937] text-sm sm:text-base mb-1.5 group-hover:text-[#D97706] transition-colors duration-300 leading-snug">
                {s.title}
              </h3>
              <p className="font-body text-[#6B7280] text-xs sm:text-sm leading-relaxed hidden sm:block">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

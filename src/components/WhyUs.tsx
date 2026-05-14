'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const reasons = [
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M3 11 L8.5 16.5 L19 6" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    title: 'Clean Finish',
    desc: 'Sharp edges, level surfaces — every project completed to a high standard.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" fill="#D97706" opacity="0.8"/><rect x="12" y="3" width="7" height="7" rx="1.5" fill="#D97706" opacity="0.5"/><rect x="3" y="12" width="7" height="7" rx="1.5" fill="#D97706" opacity="0.5"/><rect x="12" y="12" width="7" height="7" rx="1.5" fill="#D97706" opacity="0.8"/></svg>),
    title: 'Durable Materials',
    desc: 'Quality cabro blocks and base materials built for longevity.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke="#D97706" strokeWidth="2"/><path d="M4 20 C4 16 18 16 18 20" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/></svg>),
    title: 'Professional Team',
    desc: 'Skilled, experienced and respectful crew on every site.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M3 7 L11 3 L19 7 L19 15 L11 19 L3 15 Z" stroke="#D97706" strokeWidth="2" fill="none"/><path d="M11 3 L11 19" stroke="#D97706" strokeWidth="1.5" opacity="0.4"/><path d="M3 7 L19 7" stroke="#D97706" strokeWidth="1.5" opacity="0.4"/></svg>),
    title: 'Transparent Pricing',
    desc: 'Fair, upfront quotes — no surprises or hidden charges.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#D97706" strokeWidth="2"/><path d="M11 6 L11 11 L15 13" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    title: 'On-Time Delivery',
    desc: 'We commit to timelines and respect your schedule.',
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M4 18 L11 4 L18 18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 13 L15 13" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/></svg>),
    title: 'Modern Designs',
    desc: 'Up-to-date patterns and finishes that look great for years.',
  },
]

export default function WhyUs() {
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
    <section id="why-us" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[260px] sm:h-[380px] md:h-[440px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
                alt="Cabro paving workmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 right-3 sm:right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-[#F5F1EA]">
              <div className="w-11 h-11 bg-[#D97706] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                  <path d="M3 11 L8.5 16.5 L19 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-700 text-[#1F2937] text-xl leading-none">500+</div>
                <div className="font-body text-[#6B7280] text-xs mt-0.5">Projects Done</div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -top-4 left-3 sm:left-4 bg-[#D97706] text-white rounded-2xl shadow-xl px-4 py-3">
              <div className="font-heading font-700 text-2xl leading-none">10+</div>
              <div className="font-body text-white/80 text-xs mt-1">Years Active</div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="reveal flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#D97706]" />
              <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">Why Choose Us</span>
            </div>
            <h2 className="reveal font-heading font-700 text-[#1F2937] mb-3 leading-tight" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
              These people know<br className="hidden sm:block" /> what they are doing.
            </h2>
            <p className="reveal font-body text-[#6B7280] mb-8 text-sm sm:text-base" style={{ lineHeight: '1.8' }}>
              We've built our reputation one project at a time. Every driveway, compound and parking lot — treated with the same care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-start gap-3 p-3.5 rounded-xl hover:bg-[#F5F1EA] transition-colors duration-300`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-600 text-[#1F2937] text-sm mb-0.5">{r.title}</h4>
                    <p className="font-body text-[#6B7280] text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

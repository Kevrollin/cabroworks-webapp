'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Site Visit',
    desc: 'We visit your site, assess the area and understand your vision. Free of charge.',
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="4" stroke="white" strokeWidth="2"/><path d="M5 20 C5 16 19 16 19 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>),
  },
  {
    num: '02',
    title: 'Quotation',
    desc: 'You receive a clear, detailed quotation — no surprises, no hidden costs.',
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="white" strokeWidth="2"/><path d="M8 8 L16 8 M8 12 L16 12 M8 16 L12 16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>),
  },
  {
    num: '03',
    title: 'Ground Prep',
    desc: 'Proper excavation, compaction and base preparation for lasting durability.',
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 18 L21 18" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M6 18 L6 10 L12 6 L18 10 L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Expert cabro laying with precision, pattern alignment and edge work.',
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="8" height="8" rx="1.5" fill="white" opacity="0.8"/><rect x="13" y="10" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="3" y="3" width="8" height="5" rx="1.5" fill="white" opacity="0.5"/><rect x="13" y="3" width="8" height="5" rx="1.5" fill="white" opacity="0.8"/></svg>),
  },
  {
    num: '05',
    title: 'Final Finish',
    desc: 'Sand compaction, joint filling, clean-up and handover walkthrough.',
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12 L9.5 17.5 L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
]

export default function Process() {
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
    <section id="process" className="section-padding bg-[#1F2937]" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-px bg-[#D97706]" />
            <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">How It Works</span>
            <span className="w-7 h-px bg-[#D97706]" />
          </div>
          <h2 className="reveal font-heading font-700 text-white mb-3" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
            Our Process
          </h2>
          <p className="reveal font-body text-white/50 max-w-sm mx-auto text-sm" style={{ lineHeight: '1.75' }}>
            Simple. Transparent. Professional. From first call to final finish.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:flex items-start justify-between gap-3 relative">
          <div className="absolute top-9 left-[8%] right-[8%] h-px bg-white/10 z-0" />
          <div className="absolute top-9 left-[8%] h-px z-0 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" style={{ width: '84%' }} />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center flex-1 relative z-10`}
            >
              <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#D97706] flex items-center justify-center mb-4 shadow-lg shadow-[#D97706]/25 flex-shrink-0">
                {step.icon}
              </div>
              <div className="font-heading font-700 text-[#D97706] text-xs mb-1 tracking-wider">{step.num}</div>
              <h4 className="font-heading font-600 text-white text-sm mb-1.5">{step.title}</h4>
              <p className="font-body text-white/45 text-xs leading-relaxed max-w-[130px]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="flex md:hidden flex-col gap-0 relative">
          <div className="absolute left-6 top-7 bottom-7 w-px bg-white/12 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex gap-5 relative z-10 pb-7 last:pb-0`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D97706] flex items-center justify-center shadow-md shadow-[#D97706]/25">
                {step.icon}
              </div>
              <div className="pt-1.5">
                <div className="font-heading font-700 text-[#D97706] text-xs mb-0.5 tracking-wider">{step.num}</div>
                <h4 className="font-heading font-600 text-white text-base mb-1">{step.title}</h4>
                <p className="font-body text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

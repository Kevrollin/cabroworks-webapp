'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'James Mwangi',
    role: 'Homeowner, Karen',
    text: 'Very clean work and completed on time. My driveway looks absolutely amazing. Would recommend Aggrey to anyone looking for quality paving.',
    rating: 5,
    initial: 'JM',
    color: '#D97706',
  },
  {
    name: 'Fatuma Odhiambo',
    role: 'Property Manager, Westlands',
    text: 'Professional team from start to finish. They did our parking lot and the finish is better than I expected. Clients have been complimenting the look.',
    rating: 5,
    initial: 'FO',
    color: '#6B7A4F',
  },
  {
    name: 'Peter Kamau',
    role: 'Contractor, Nakuru',
    text: 'I subcontracted Aggrey for a large estate project. Excellent work ethic, clean patterns, and no delays. Will work with them again.',
    rating: 5,
    initial: 'PK',
    color: '#B45309',
  },
  {
    name: 'Grace Wanjiku',
    role: 'Homeowner, Kiambu',
    text: "They finished our compound within 3 days. The cabro pattern we chose came out perfectly. Very neat — they left the site clean.",
    rating: 5,
    initial: 'GW',
    color: '#D97706',
  },
  {
    name: 'Samuel Otieno',
    role: 'Business Owner, Mombasa Rd',
    text: 'Good price and quality work. Our parking lot handles heavy vehicles daily and still looks new months later. Solid base preparation.',
    rating: 5,
    initial: 'SO',
    color: '#6B7A4F',
  },
  {
    name: 'Alice Njeri',
    role: 'Homeowner, Runda',
    text: "From the site visit to the final handover, everything was handled professionally. The WhatsApp updates were really helpful too.",
    rating: 5,
    initial: 'AN',
    color: '#B45309',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#D97706">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10l-3.6 2 .7-4L1.2 5.2l4-.6z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [cardWidth, setCardWidth] = useState(300)
  const CARD_GAP = 16
  const STEP = cardWidth + CARD_GAP

  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current) {
        const w = scrollRef.current.clientWidth
        setCardWidth(Math.min(320, Math.max(w - 52, 220)))
      }
    }
    updateCardWidth()
    const obs = new ResizeObserver(updateCardWidth)
    if (scrollRef.current) obs.observe(scrollRef.current)
    return () => obs.disconnect()
  }, [])

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

  const handleScroll = () => {
    if (!scrollRef.current) return
    const idx = Math.round(scrollRef.current.scrollLeft / STEP)
    setActiveIdx(Math.min(idx, testimonials.length - 1))
  }

  const scrollToIdx = (idx: number) => {
    scrollRef.current?.scrollTo({ left: idx * STEP, behavior: 'smooth' })
    setActiveIdx(idx)
  }

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIdx + 1) % testimonials.length
      scrollToIdx(next)
    }, 4000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, STEP])

  return (
    <section id="testimonials" className="section-padding bg-[#F5F1EA] overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <div className="reveal flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#D97706]" />
              <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">Client Stories</span>
              <span className="w-7 h-px bg-[#D97706]" />
            </div>
            <h2 className="reveal font-heading font-700 text-[#1F2937] mb-1" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
              What Clients Say
            </h2>
            <p className="reveal font-body text-[#6B7280] text-sm">Real feedback from real projects across Kenya.</p>
          </div>
          <div className="reveal flex items-center gap-2">
            <button
              onClick={() => scrollToIdx(Math.max(activeIdx - 1, 0))}
              disabled={activeIdx === 0}
              className="w-10 h-10 rounded-full border border-[#D97706] text-[#D97706] flex items-center justify-center hover:bg-[#D97706] hover:text-white transition-all duration-300 disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scrollToIdx(Math.min(activeIdx + 1, testimonials.length - 1))}
              disabled={activeIdx === testimonials.length - 1}
              className="w-10 h-10 rounded-full bg-[#D97706] text-white flex items-center justify-center hover:bg-[#B45309] transition-all duration-300 disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-3 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))] select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' } as React.CSSProperties}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 testimonial-card bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
            style={{ width: `${cardWidth}px`, scrollSnapAlign: 'start' }}
          >
            <div>
              <StarRating count={t.rating} />
              <p className="font-body text-[#1F2937] text-sm leading-relaxed mt-3 mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-[#F5F1EA]">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-heading font-700 text-xs flex-shrink-0"
                style={{ background: t.color }}
              >
                {t.initial}
              </div>
              <div>
                <div className="font-heading font-600 text-[#1F2937] text-sm leading-tight">{t.name}</div>
                <div className="font-body text-[#6B7280] text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="container-custom mt-5">
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx ? 'w-6 h-2 bg-[#D97706]' : 'w-2 h-2 bg-[#D97706]/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust bar */}
        <div className="reveal mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[#E7E3DC]">
          {[
            { num: '500+', label: 'Projects Done' },
            { num: '200+', label: 'Happy Clients' },
            { num: '10+', label: 'Years Active' },
            { num: '100%', label: 'Quality Promise' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-700 text-[#D97706] text-2xl sm:text-3xl">{stat.num}</div>
              <div className="font-body text-[#6B7280] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

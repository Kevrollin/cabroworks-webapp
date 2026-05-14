'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1590725140246-20acddc1ec6d?w=800&q=80',
    type: 'Residential Driveway',
    location: 'Karen, Nairobi',
    result: 'Full driveway transformation with herringbone pattern cabro.',
    tag: 'Driveway',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    type: 'Commercial Parking',
    location: 'Westlands, Nairobi',
    result: 'High-traffic parking area for a retail complex.',
    tag: 'Parking',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    type: 'Garden Walkway',
    location: 'Nakuru',
    result: 'Curved pathway through landscaped garden compound.',
    tag: 'Walkway',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    type: 'Estate Roads',
    location: 'Kiambu',
    result: 'Internal estate road network for gated community.',
    tag: 'Roads',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    type: 'Home Compound',
    location: 'Runda, Nairobi',
    result: 'Full compound paving for luxury residential property.',
    tag: 'Compound',
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    type: 'Apartment Parking',
    location: 'Kilimani, Nairobi',
    result: 'Multi-level apartment block parking and entry lane.',
    tag: 'Parking',
  },
]

export default function Projects() {
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
        // On mobile: near full width; on tablet/desktop: fixed
        const computed = window.innerWidth >= 768
          ? Math.min(340, w / 2 - 24)
          : Math.min(300, w - 52)
        setCardWidth(Math.max(computed, 220))
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
    setActiveIdx(Math.min(idx, projects.length - 1))
  }

  const scrollToIdx = (idx: number) => {
    scrollRef.current?.scrollTo({ left: idx * STEP, behavior: 'smooth' })
    setActiveIdx(idx)
  }

  return (
    <section id="projects" className="section-padding bg-[#1F2937] overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <div className="reveal flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#D97706]" />
              <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">Our Work</span>
              <span className="w-7 h-px bg-[#D97706]" />
            </div>
            <h2 className="reveal font-heading font-700 text-white mb-1" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
              Recent Projects
            </h2>
            <p className="reveal font-body text-white/50 text-sm">A sample of our work across Kenya.</p>
          </div>
          <div className="reveal flex items-center gap-2">
            <button
              onClick={() => scrollToIdx(Math.max(activeIdx - 1, 0))}
              disabled={activeIdx === 0}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[#D97706] hover:text-[#D97706] transition-all duration-300 disabled:opacity-30"
              aria-label="Previous project"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => scrollToIdx(Math.min(activeIdx + 1, projects.length - 1))}
              disabled={activeIdx === projects.length - 1}
              className="w-10 h-10 rounded-full bg-[#D97706] text-white flex items-center justify-center hover:bg-[#B45309] transition-all duration-300 disabled:opacity-30"
              aria-label="Next project"
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
        className="flex gap-4 overflow-x-auto pb-3 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' } as React.CSSProperties}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 img-zoom rounded-2xl overflow-hidden bg-[#1a2535] group relative"
            style={{ width: `${cardWidth}px`, scrollSnapAlign: 'start' }}
          >
            <div className="relative h-44 sm:h-52">
              <Image
                src={p.image}
                alt={p.type}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-[#D97706] text-white text-xs font-body font-600 px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-600 text-white text-base mb-1">{p.type}</h3>
              <div className="flex items-center gap-1.5 text-white/50 text-xs mb-2">
                <MapPin size={12} />
                {p.location}
              </div>
              <p className="font-body text-white/55 text-xs sm:text-sm leading-relaxed">{p.result}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="container-custom mt-5">
        <div className="flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIdx(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIdx ? 'w-6 h-2 bg-[#D97706]' : 'w-2 h-2 bg-white/20'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

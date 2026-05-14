'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const projectTypes = [
  'Residential Driveway',
  'Commercial Parking',
  'Walkways & Pathways',
  'Compound Paving',
  'Estate Roads',
  'Kerb Installation',
  'Landscaping',
  'Cabro Repairs',
  'Other',
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
          }
        })
      },
      { threshold: 0.06 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello Aggrey Cabro Pavers!\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nProject Type: ${form.projectType}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/254710535735?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass = `w-full bg-[#FAFAF8] border border-[#E7E3DC] rounded-xl px-4 py-3.5 font-body text-sm text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all duration-200`

  return (
    <section id="contact" className="section-padding bg-[#F5F1EA]" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="reveal flex items-center justify-center gap-3 mb-3">
            <span className="w-7 h-px bg-[#D97706]" />
            <span className="text-[#D97706] text-xs font-body font-600 tracking-widest uppercase">Get In Touch</span>
            <span className="w-7 h-px bg-[#D97706]" />
          </div>
          <h2 className="reveal font-heading font-700 text-[#1F2937] mb-2" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.6rem)' }}>
            Start Your Project
          </h2>
          <p className="reveal font-body text-[#6B7280] max-w-xs mx-auto text-sm" style={{ lineHeight: '1.75' }}>
            Fill the form or reach out directly. We respond fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="reveal space-y-6 order-2 lg:order-1">
            {/* Quick contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="tel:+254710535735" className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E7E3DC] hover:border-[#D97706]/40 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="font-body text-[#9CA3AF] text-[10px] uppercase tracking-wide mb-0.5">Call / WhatsApp</div>
                  <div className="font-body text-[#1F2937] text-sm font-500 group-hover:text-[#D97706] transition-colors">+254 710 535 735</div>
                </div>
              </a>
              <a href="mailto:mwendebenendeta64@gmail.com" className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E7E3DC] hover:border-[#D97706]/40 transition-colors duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                  <Mail size={17} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="font-body text-[#9CA3AF] text-[10px] uppercase tracking-wide mb-0.5">Email</div>
                  <div className="font-body text-[#1F2937] text-xs font-500 group-hover:text-[#D97706] transition-colors break-all">mwendebenendeta64@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E7E3DC]">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="font-body text-[#9CA3AF] text-[10px] uppercase tracking-wide mb-0.5">Service Area</div>
                  <div className="font-body text-[#1F2937] text-xs font-500">Kamulu, Nairobi & more</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-[#E7E3DC]">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="font-body text-[#9CA3AF] text-[10px] uppercase tracking-wide mb-0.5">Working Hours</div>
                  <div className="font-body text-[#1F2937] text-xs font-500">Mon–Sat: 7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-[#E7E3DC] shadow-sm" style={{ height: '200px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853631137!2d37.0730!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKamulu%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service location map"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/254710535735?text=Hello%2C%20I%20need%20a%20cabro%20paving%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-4 rounded-2xl font-body font-600 text-sm hover:bg-[#1da851] active:bg-[#1da851] transition-all duration-300 shadow-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp — Quick Response
            </a>
          </div>

          {/* Form */}
          <div className="reveal order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-[#E7E3DC]">
              <h3 className="font-heading font-600 text-[#1F2937] text-lg mb-5">Request a Quote</h3>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[#D97706]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14 L10.5 19.5 L23 8" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-heading font-600 text-[#1F2937] text-lg mb-2">Request Sent!</h4>
                  <p className="font-body text-[#6B7280] text-sm">We've opened WhatsApp with your details. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-[#6B7280] mb-1.5 block font-500">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Mwangi"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-[#6B7280] mb-1.5 block font-500">Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className={inputClass}
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs text-[#6B7280] mb-1.5 block font-500">Location / Area *</label>
                    <input
                      name="location"
                      type="text"
                      required
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Kamulu, Nairobi"
                      className={inputClass}
                      autoComplete="address-level2"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs text-[#6B7280] mb-1.5 block font-500">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(pt => (
                        <option key={pt} value={pt}>{pt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs text-[#6B7280] mb-1.5 block font-500">Additional Notes</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Size, timeline, any specifics..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#D97706] text-white font-body font-600 py-4 rounded-xl hover:bg-[#B45309] active:bg-[#B45309] transition-all duration-300 shadow-md text-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  <p className="font-body text-[#9CA3AF] text-xs text-center">
                    Opens WhatsApp with your details pre-filled. Free site visits included.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

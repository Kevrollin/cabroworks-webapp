# Aggrey Cabro Pavers Installations — Website

A premium, modern portfolio and lead-generation website for a professional cabro paving company in Kenya.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
aggrey-cabro/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata/SEO
│   │   ├── page.tsx          # Main page (all sections)
│   │   └── globals.css       # Global styles + animations
│   └── components/
│       ├── Navbar.tsx         # Sticky transparent navbar
│       ├── Hero.tsx           # Full-screen hero section
│       ├── Services.tsx       # 8-service cards grid
│       ├── Projects.tsx       # Portfolio/project showcase
│       ├── WhyUs.tsx          # Why choose us + image
│       ├── Process.tsx        # 5-step process timeline
│       ├── Testimonials.tsx   # Client testimonials grid
│       ├── CTA.tsx            # Call-to-action section
│       ├── Contact.tsx        # Contact form + details + map
│       ├── Footer.tsx         # Full footer
│       └── WhatsAppFloat.tsx  # Floating WhatsApp button
├── public/                    # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✏️ Customization

### 1. Update Contact Information
Search for `+254 700 000 000` and replace with the actual phone number.
Search for `info@aggreycabro.co.ke` and replace with the actual email.

### 2. Update Business Name / Branding
The company name appears in `Navbar.tsx` and `Footer.tsx`.

### 3. Update Images
Images use Unsplash URLs. To use your own:
- Add images to `/public/images/`
- Update the `src` props in components

### 4. Update Google Maps
In `Contact.tsx`, replace the Google Maps iframe `src` with your actual business location embed URL from [Google Maps](https://maps.google.com).

### 5. Update WhatsApp Link
Replace all `https://wa.me/254700000000` instances with your actual WhatsApp number.

### 6. Update Stats & Projects
Edit the `projects` array in `Projects.tsx` and stats numbers across components.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Orange | `#D97706` |
| Sand Beige | `#F5F1EA` |
| Concrete Gray | `#6B7280` |
| Background | `#FAFAF8` |
| Charcoal | `#1F2937` |
| Olive Green | `#6B7A4F` |

**Fonts:** Sora (headings) + Manrope (body) — loaded from Google Fonts

---

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com
```

---

## 📱 Features

- ✅ Mobile-first responsive design
- ✅ Sticky transparent navbar (scrolled effect)
- ✅ Smooth scroll-reveal animations
- ✅ Floating WhatsApp button with pulse
- ✅ WhatsApp-powered contact form
- ✅ Google Maps embed
- ✅ SEO metadata + OpenGraph
- ✅ Next.js Image optimization
- ✅ Hover animations throughout
- ✅ Mobile hamburger menu

---

## 📞 Support

For any questions about the website, reach out via the WhatsApp button on the site.

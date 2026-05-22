import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About | Soulard Electronic Security Products',
  description: 'Learn about Soulard Electronic Security Products — a stocking resource for end users specializing in electronic security products and commercial door hardware.',
}

const values = [
  {
    title: 'In-Stock Ready',
    desc: 'We maintain a deep inventory so the products you need ship the same day you order — no waiting on back-orders.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fast Fulfillment',
    desc: 'Same-day shipping and UPS delivery in 1–2 days nationwide. Your project timeline never stalls waiting on parts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Product Expertise',
    desc: 'Deep technical knowledge of every brand we carry — we help you find the right product for your specific application.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Trusted Brands',
    desc: 'We stock only the most reliable, field-proven brands — Allegion, Schlage, HID, Von Duprin, LCN, Aiphone, BEA, Vanderbilt, and Locknetics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        subtitle="A stocking resource for end users — specializing in electronic security products and commercial door hardware from three locations across the U.S."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Soulard Electronic Security Products was founded with a clear purpose: to be the most reliable stocking resource for contractors, integrators, and end users who need electronic security products and commercial door hardware — fast.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We specialize in Allegion (Schlage) locking hardware, HID Global credentials and readers, Von Duprin panic hardware, LCN door closers, Aiphone video intercoms, BEA motion sensors, Vanderbilt access control, and Locknetics electrified products. Our deep product knowledge, combined with a large on-hand inventory and same-day shipping capability, means we move fast when your project demands it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With stocking locations in Holland, Michigan; St. Louis, Missouri; and Tampa, Florida, we serve contractors and facilities professionals coast to coast with UPS delivery in 1–2 days.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80"
                alt="Security products warehouse inventory"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg border border-electric-blue/20 p-4">
                <div className="font-display text-electric-cyan text-2xl">15+</div>
                <div className="text-gray-500 text-xs mt-1">Years in the Industry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">What Drives Us</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider">Core Values</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-electric-blue/15 p-6 text-center hover:border-electric-blue/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-electric-blue/10 text-electric-blue mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                alt="Electronic security components and hardware"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Your Stocking <span className="gradient-text">Partner</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Deep in-stock inventory — most orders ship same day',
                  'UPS delivery nationwide in 1–2 days',
                  'New and replacement products both available',
                  'Allegion (Schlage) and HID Global product specialists',
                  'Von Duprin, LCN, Aiphone, BEA, Vanderbilt in stock',
                  'Parts and components sourced within 1–2 days if not stocked',
                  'Three stocking locations: Holland MI, St. Louis MO, Tampa FL',
                  'Expert product knowledge and application support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-electric-blue/90 transition-all shadow-neon-blue"
              >
                Get a Quote
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Where We Are</span>
          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-4">Our Locations</h2>
          <p className="text-gray-300 mb-10">Three stocking locations serving contractors and end users across the country</p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { city: 'Holland', state: 'Michigan' },
              { city: 'St. Louis', state: 'Missouri' },
              { city: 'Tampa', state: 'Florida' },
            ].map((loc) => (
              <div key={loc.city} className="border border-electric-blue/30 px-10 py-6 hover:border-electric-cyan/60 transition-colors">
                <div className="font-display text-electric-cyan text-lg uppercase tracking-widest">{loc.city}</div>
                <div className="text-steel-silver text-xs mt-1 uppercase tracking-wider">{loc.state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

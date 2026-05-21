import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Products | Soulard Technology',
  description: 'Electronic access control products for K-12 schools — card readers, controllers, door hardware, intercoms, and more.',
}

const categories = [
  {
    title: 'Access Control Panels',
    desc: 'The intelligence at the heart of every access control system. We spec and deploy controllers from Lenel, Software House, Genetec, and other leading platforms — scaled from single-door to enterprise-wide.',
    features: ['Single & multi-door controllers', 'IP-based & hybrid panels', 'Failsafe / fail-secure configurations', 'Battery backup & power supervision'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Card Readers & Credentials',
    desc: "From proximity cards to mobile credentials, we deploy the full spectrum of reader technologies — selecting the right credential type for each facility's threat level and budget.",
    features: ['HID, ASSA ABLOY & Allegion readers', 'Mobile & BLE credentials', 'Multi-technology readers', 'Smart card (MIFARE, DESFire)'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Door Hardware & Locking',
    desc: 'Electric strikes, magnetic locks, electrified hardware, and door position switches — we design locking systems that meet life-safety codes while delivering reliable access control.',
    features: ['Electric strikes & mag locks', 'Electrified panic hardware', 'Door position & REX sensors', 'ADA-compliant hardware'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Intercoms & Video Entry',
    desc: 'IP video intercoms at every entry point give staff visual confirmation before granting access — an essential layer for K-12 visitor management.',
    features: ['IP video intercoms', 'Door station cameras', 'Two-way audio', 'Integration with access control'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.902L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Visitor Management',
    desc: 'Purpose-built visitor management platforms that screen guests, print badges, and sync with your access control system — keeping unvetted visitors from roaming freely.',
    features: ['Sex offender screening', 'Driver\'s license scanning', 'Temporary badge printing', 'Watch-list alerts'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Security Management Software',
    desc: 'The software layer that ties everything together — scheduling, reporting, lockdown commands, and integrations with video surveillance and intrusion detection.',
    features: ['Lenel OnGuard', 'Software House CCURE 9000', 'Genetec Security Center', 'Cloud-managed platforms'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Product Portfolio"
        title="Products"
        subtitle="We specify, source, and support the right products for every K-12 security challenge — from a single door to a multi-campus district."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      {/* Intro strip */}
      <section className="py-12 bg-electric-blue">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg font-body max-w-3xl mx-auto leading-relaxed">
            Soulard Technology is manufacturer-agnostic. We recommend products based on your budget, facility layout, and security goals — not on vendor relationships.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">What We Offer</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">Product Categories</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="space-y-16">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-electric-blue/10 text-electric-blue">
                      {cat.icon}
                    </div>
                    <h3 className="font-display text-gray-900 text-xl uppercase tracking-wider">{cat.title}</h3>
                  </div>
                  <p className="text-steel-silver leading-relaxed mb-5">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative overflow-hidden rounded ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={600}
                    height={380}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            We'll conduct a free site assessment and recommend the right products for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Request a Free Assessment
            </Link>
            <Link href="/catalogs" className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white font-display uppercase tracking-widest text-sm hover:border-electric-cyan/60 transition-all">
              Browse Catalogs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

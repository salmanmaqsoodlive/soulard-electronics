import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Products | Soulard Electronic Security Products',
  description: 'Electronic security products and commercial door hardware — credentials, readers, locks, exit devices, door closers, cables, and more.',
}

const catalog = [
  {
    id: 'credentials',
    title: 'Credentials',
    image: '/product-access-control.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h20M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Proximity & Smart Technology Cards',
      'Proximity & Smart Technology Key Fobs',
      'Proximity Tag Stickers',
      'Non-Technology Cards',
    ],
  },
  {
    id: 'id-card-printers',
    title: 'ID Card Printer & Supplies',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Single Sided Printers',
      'Dual Sided Printers',
      'Ribbons & Other Badging Supplies',
    ],
  },
  {
    id: 'readers',
    title: 'Readers',
    image: 'https://amag.com/wp-content/uploads/2026/01/Red-Grp-Gray-Footer-1024x639.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Mobile-Enabled Multi-Technology Readers',
      'Multi-Technology Readers',
      'Proximity and Magstripe Readers',
      'FIPS201 Compliant Readers',
      'MT20 Multi-Technology Enrollment Reader',
    ],
  },
  {
    id: 'electromechanical',
    title: 'Electromechanical Solutions',
    image: '/product-locks.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    items: [
      'Electrified Mortise Locks',
      'Electrified Cylindrical Locks',
      'Electric Latch Retraction Kits',
      'Electrified Exit Trim Breakaway Lever Trim',
      'Delayed Egress/Alarm Kits',
    ],
  },
  {
    id: 'system-components',
    title: 'System Components',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Electric Strikes',
      'Power Supplies',
      'Key Switches',
      'Request-to-Exit Bars',
      'Electric Hinge',
      'Monitoring Stations and Consoles',
      'Door Position Switches',
      'Magnetic Locks',
      'Push Buttons',
      'Lockdown Buttons',
      'Electric Power Transfer',
      'Armored Door Cords',
      'Motion Sensors',
    ],
  },
  {
    id: 'networking-locking',
    title: 'Networking & Standalone Locking Solutions',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Smart Control Deadbolts',
      'Standalone Electronic Locks and Exit Trims',
      'Networked Electronic Hardwired Locks and Exit Trims',
      'Networked Electronic Wireless Locks and Exit Trims',
      'Network Wireless Elevator and Gate Kits',
      'Networked Wireless 2-Door PIM (Panel Interface Module)',
      'Networked Wireless 16-Door PIM (Panel Interface Module)',
    ],
  },
  {
    id: 'security-communication',
    title: 'Security Communication Solutions',
    image: '/product-other.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.899L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Aiphone Video/Intercom Systems',
    ],
  },
  {
    id: 'cable',
    title: 'Electronic Access & Security Cable',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      'Cat 6 Cable',
      'Composite Cable',
      'Stranded Plenum Shielded Cable',
      'Stranded Plenum Unshielded Cable',
      'Stranded Shielded Cable',
      'Stranded Unshielded Cable',
      'Stranded Twisted Cable',
    ],
  },
  {
    id: 'mechanical-hardware',
    title: 'Mechanical Door Hardware',
    image: '/product-exit-devices.webp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      'Cylindrical & Mortise Locksets',
      'Exit Devices',
      'Door Closers',
      'Overhead Stops',
      'Magnetic Hold-Opens',
      'Auto Door Operators',
      'Parts',
    ],
  },
]

export default function Products() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Product Catalog"
        title="Products"
        subtitle="New and replacement electronic security products and commercial door hardware — all in stock and ready to ship same day."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      {/* Intro strip */}
      <section className="py-10 bg-electric-blue">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg font-body max-w-3xl mx-auto leading-relaxed">
            Large in-stock inventory across 9 product categories. Most orders ship same day via UPS — 1–2 day delivery nationwide from Holland MI, St. Louis MO, and Tampa FL.
          </p>
        </div>
      </section>

      {/* PRODUCT CATALOG — single unified grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">
              What We Stock
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">
              Product Categories
            </h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalog.map((cat) => (
              <ProductCard
                key={cat.id}
                id={cat.id}
                title={cat.title}
                image={cat.image}
                icon={cat.icon}
                items={cat.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
            Need a Quote or Availability Check?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Contact us with your part number or product requirement and we&apos;ll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue"
            >
              Request a Quote
            </Link>
            <Link
              href="/catalogs"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-white font-display uppercase tracking-widest text-sm hover:border-electric-cyan/60 transition-all"
            >
              Browse Catalogs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

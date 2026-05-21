import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Products | Soulard Technology',
  description: 'Electronic access control products for K-12 schools — credentials, readers, Allegion locks, and system components.',
}

const catalog = [
  {
    category: 'Credentials & Readers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    groups: [
      {
        heading: 'Credentials (Schlage & HID)',
        items: [
          'Proximity & Smart Technology Cards',
          'Proximity & Smart Technology Key Fobs',
          'Proximity Tag Stickers',
          'Non-Technology Cards',
        ],
      },
      {
        heading: 'Readers (Schlage & HID)',
        items: [
          'Mobile-Enabled Multi-Technology Readers',
          'Proximity and Magstripe Readers',
          'FIPS201 Compliant Readers',
        ],
      },
    ],
  },
  {
    category: 'Allegion Hardwired / Wireless Locks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    groups: [
      {
        heading: 'Allegion Hardwired / Wireless Locks',
        items: [
          'Schlage XE360 Series Wireless Tubular Lock',
          'Schlage XE360 Wireless Mortise Lock',
          'Schlage XE360 Wireless Exit Wide Stile Lock',
          'Schlage Control Mobile Enabled Smart Interconnected Lock',
          'Schlage Control Mobile Enabled Smart Deadbolt',
          'Schlage LE Mobile Enabled Wireless Lock',
          'Schlage NDEB Mobile Enabled Wireless Lock',
          'Schlage AD-300 Networked Hardwired Cylindrical Lock',
          'Schlage AD-300 Networked Hardwired Mortise Lock',
          'Schlage AD-300 Networked Hardwired Exit Trim',
          'Schlage AD-400 Networked Wireless Cylindrical Lock',
          'Schlage AD-400 Networked Wireless Mortise Lock',
          'Schlage AD-400 Networked Wireless Exit Trim',
          'Schlage AD-200 Standalone; Rights on Lock',
          'Schlage AD-250 Standalone; Rights on Card',
        ],
      },
      {
        heading: 'Allegion AD Hardwired and Wireless Lock Parts',
        items: [
          'Reader Modules (KP, MS, MSK, MT/SI, MTK/SIK/FMK, DT)',
          'Magnetic Swipe Cleaning Cards',
          'Interior Escutcheon',
          'Interior Baseplate Gasket',
          'USB Cover Plug',
          'Cable, USB, AD/CO, Exit',
          'Exterior Escutcheon',
          'Exterior Gasket Kit',
          'Interior Baseplate Subassembly',
          'Exterior Baseplate Subassembly',
          'Interior Spring Cage',
          'Exterior Spring Cage',
          'Latches',
          'Exterior Lever (less cylinder)',
          'Interior Lever',
          'Spindle and Hub Kit',
        ],
      },
    ],
  },
  {
    category: 'System Components',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    groups: [
      {
        heading: 'System Components',
        items: [
          'Electric Strikes',
          'Power Supplies',
          'Key Switches',
          'Request-to-Exit Bars',
          'Electric Hinge',
          'Monitoring Stations and Consoles',
          'Door Position Switches',
          'Magnetic Locks',
          'Magnetic Hold Opens',
          'Push Buttons',
          'Lockdown Buttons',
          'Electric Power Transfers',
          'Armored Door Cords',
          'Motion Sensors',
        ],
      },
      {
        heading: 'Parts & Accessories',
        items: [
          'Spindle Spring',
          'Deadbolt Thumb Turn Assembly',
          'IPB Retrofit Kit Module',
          'Strike Faceplates and Armor Fronts',
          'Door Position Switch',
          'Door Thickness Kit',
          'Decorative Plates',
          'Offline/Hardwired Communication Module Cover',
          'Hardwired Upgrade Kit',
          'Hardwired Communication Module',
          'Wireless Upgrade Kit',
          'Wireless Communication Module Cover',
          'Wireless Communication Module',
          'Battery Holder and Cover Kit',
          'Battery Holder Kit',
          'Interior Cover Hardware Kit',
          'Interior Main Board',
          'Wiring Harness (Interior Main Board to Exterior Board)',
          'Rex Switch',
          'Request-To-Exit Switch Kit',
          'Motor Drive Assembly',
        ],
      },
    ],
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

      {/* Product Catalog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Full Catalog</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">Product Categories</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="space-y-16">
            {catalog.map((section) => (
              <div key={section.category} className="border border-gray-100 rounded-lg overflow-hidden">
                {/* Section header */}
                <div className="flex items-center gap-4 px-6 py-5 bg-gray-50 border-b border-gray-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-electric-blue/10 text-electric-blue flex-shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="font-display text-gray-900 text-lg uppercase tracking-wider">{section.category}</h3>
                </div>

                {/* Two-column product groups */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {section.groups.map((group) => (
                    <div key={group.heading} className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-electric-blue flex-shrink-0" />
                        <h4 className="font-display text-gray-700 text-xs uppercase tracking-[0.25em]">{group.heading}</h4>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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

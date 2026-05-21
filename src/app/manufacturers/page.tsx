import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Manufacturers | Soulard Technology',
  description: 'Soulard Technology partners with Allegion (Schlage) and HID Global — the industry leaders in access control hardware, credentials, and readers.',
}

const manufacturers = [
  {
    name: 'Allegion / Schlage',
    category: 'Door Hardware & Locking',
    desc: 'Allegion is a global pioneer in safety and security, with Schlage as its flagship brand. From wireless tubular locks to fully networked hardwired exit trim, Allegion delivers the physical locking infrastructure that anchors every access control deployment. Soulard Technology specifies Allegion hardware across K-12 facilities for its reliability, deep wireless capability, and seamless integration with electronic access platforms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    groups: [
      {
        heading: 'Wireless Locks',
        items: [
          'Schlage XE360 Series Wireless Tubular Lock',
          'Schlage XE360 Wireless Mortise Lock',
          'Schlage XE360 Wireless Exit Wide Stile Lock',
          'Schlage LE Mobile Enabled Wireless Lock',
          'Schlage NDEB Mobile Enabled Wireless Lock',
          'Schlage AD-400 Networked Wireless Cylindrical Lock',
          'Schlage AD-400 Networked Wireless Mortise Lock',
          'Schlage AD-400 Networked Wireless Exit Trim',
        ],
      },
      {
        heading: 'Hardwired & Standalone Locks',
        items: [
          'Schlage Control Mobile Enabled Smart Interconnected Lock',
          'Schlage Control Mobile Enabled Smart Deadbolt',
          'Schlage AD-300 Networked Hardwired Cylindrical Lock',
          'Schlage AD-300 Networked Hardwired Mortise Lock',
          'Schlage AD-300 Networked Hardwired Exit Trim',
          'Schlage AD-200 Standalone; Rights on Lock',
          'Schlage AD-250 Standalone; Rights on Card',
        ],
      },
      {
        heading: 'Lock Parts & Accessories',
        items: [
          'Reader Modules (KP, MS, MSK, MT/SI, MTK/SIK/FMK, DT)',
          'Interior & Exterior Escutcheons',
          'Interior & Exterior Baseplates and Subassemblies',
          'Spring Cages (Interior & Exterior)',
          'Latches & Levers',
          'Spindle and Hub Kit / Spindle Spring',
          'Communication Modules (Hardwired & Wireless)',
          'Upgrade Kits (Hardwired & Wireless)',
          'Battery Holder Kits',
          'Wiring Harness, Rex Switch, Motor Drive Assembly',
        ],
      },
    ],
  },
  {
    name: 'HID Global',
    category: 'Credentials & Readers',
    desc: "HID Global is the world's leading provider of trusted identity solutions. Their readers and credentials are the front line of access control — the point where a person proves who they are. Soulard Technology deploys HID products for their unmatched interoperability, longevity in the field, and support for the full spectrum of credential technologies from legacy proximity through to mobile and FIPS201-compliant smart cards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    groups: [
      {
        heading: 'Readers',
        items: [
          'Mobile-Enabled Multi-Technology Readers',
          'Proximity and Magstripe Readers',
          'FIPS201 Compliant Readers',
        ],
      },
      {
        heading: 'Credentials',
        items: [
          'Proximity & Smart Technology Cards',
          'Proximity & Smart Technology Key Fobs',
          'Proximity Tag Stickers',
          'Non-Technology Cards',
        ],
      },
    ],
  },
]

export default function Manufacturers() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Our Partners"
        title="Manufacturers"
        subtitle="We partner with Allegion and HID Global — two of the most trusted names in access control hardware, credentials, and readers."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* Intro strip */}
      <section className="py-12 bg-electric-blue">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg font-body max-w-3xl mx-auto leading-relaxed">
            Soulard Technology is manufacturer-agnostic. We recommend Allegion and HID products because they consistently deliver the best outcomes for K-12 institutions — not because of vendor agreements.
          </p>
        </div>
      </section>

      {/* Manufacturer Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Trusted Brands</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">Our Manufacturer Partners</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="space-y-16">
            {manufacturers.map((mfr) => (
              <div key={mfr.name} className="border border-gray-100 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-start gap-5 px-6 py-6 bg-gray-50 border-b border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center bg-electric-blue/10 text-electric-blue flex-shrink-0">
                    {mfr.icon}
                  </div>
                  <div>
                    <span className="font-display text-electric-cyan text-xs tracking-[0.3em] uppercase">{mfr.category}</span>
                    <h3 className="font-display text-gray-900 text-2xl uppercase tracking-wider mt-0.5">{mfr.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3 max-w-3xl">{mfr.desc}</p>
                  </div>
                </div>

                {/* Product groups */}
                <div className={`grid grid-cols-1 divide-y md:divide-y-0 md:divide-x divide-gray-100 ${mfr.groups.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                  {mfr.groups.map((group) => (
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

      {/* Why agnostic */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Our Approach</span>
          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-6">Manufacturer-Agnostic Consulting</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            We are not a reseller or a manufacturer's rep. We earn no commissions or bonuses for recommending one brand over another. Our only obligation is to you — the school district — and to finding the solution that best fits your needs and budget.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            This independence allows us to mix and match products from different manufacturers, leverage your existing infrastructure investments, and negotiate from a position of knowledge on your behalf.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
            Get Unbiased Advice
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

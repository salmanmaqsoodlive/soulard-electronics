import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Manufacturers | Soulard Electronic Security Products',
  description: 'We stock products from the most trusted brands in electronic security — Allegion, Schlage, HID, Von Duprin, LCN, Aiphone, BEA, Vanderbilt, and Locknetics.',
}

const manufacturers = [
  {
    name: 'Allegion / Schlage',
    category: 'Electronic Locks & Door Hardware',
    logo: '/Allegion.webp',
    desc: 'Allegion is a global pioneer in safety and security, with Schlage as its flagship locking brand. From wireless tubular locks to fully networked hardwired exit trim, Allegion delivers the physical locking infrastructure that anchors every access control deployment. We stock a comprehensive range of Schlage AD series, XE360, LE, NDEB, and Control series locks as well as all associated parts and accessories.',
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
        heading: 'Parts & Accessories',
        items: [
          'Reader Modules (KP, MS, MSK, MT/SI, MTK/SIK/FMK, DT)',
          'Interior & Exterior Escutcheons and Baseplates',
          'Spring Cages, Latches, and Levers',
          'Communication Modules (Hardwired & Wireless)',
          'Upgrade Kits, Battery Holders, Wiring Harness',
          'Spindle & Hub Kit, Rex Switch, Motor Drive Assembly',
        ],
      },
    ],
  },
  {
    name: 'HID Global',
    category: 'Credentials & Readers',
    logo: '/hid.webp',
    desc: "HID Global is the world's leading provider of trusted identity solutions. Their readers and credentials are the front line of access control — the point where a person proves who they are. We stock the full range of HID readers and credentials, supporting legacy proximity through to mobile and FIPS201-compliant smart card technologies.",
    groups: [
      {
        heading: 'Readers',
        items: [
          'Mobile-Enabled Multi-Technology Readers',
          'Proximity and Magstripe Readers',
          'FIPS201 Compliant Readers',
          'Signo Reader Series',
        ],
      },
      {
        heading: 'Credentials',
        items: [
          'Proximity & Smart Technology Cards',
          'Proximity & Smart Technology Key Fobs',
          'Proximity Tag Stickers',
          'Non-Technology Cards',
          'iCLASS SE Credentials',
        ],
      },
    ],
  },
  {
    name: 'Schlage Credentials & Readers',
    category: 'Credentials & Readers',
    logo: '/schlage.webp',
    desc: "Schlage by Allegion offers a full line of credentials and readers designed to work seamlessly with Schlage and third-party access control platforms. From proximity cards to mobile-enabled smart credentials, Schlage readers and cards provide the flexibility to support legacy and modern deployments across a wide range of facilities.",
    groups: [
      {
        heading: 'Readers',
        items: [
          'Proximity Readers',
          'Smart Card Readers',
          'Mobile-Enabled Readers',
          'Multi-Technology Readers',
          'Keypad Readers',
        ],
      },
      {
        heading: 'Credentials',
        items: [
          'Proximity Cards & Key Fobs',
          'Smart Cards (iCLASS / DESFire)',
          'Mobile Credentials',
          'Dual-Technology Cards',
          'Wristbands & Tag Stickers',
        ],
      },
    ],
  },
  {
    name: 'Von Duprin',
    category: 'Panic Hardware & Exit Devices',
    logo: '/Von_Duprin_Gray.webp',
    desc: 'Von Duprin is the industry standard for panic hardware and exit devices. Their products meet life-safety codes while offering electrified options for access control integration. We stock Von Duprin rim devices, mortise devices, and electric strikes for commercial door applications.',
    groups: [
      {
        heading: 'Exit Devices',
        items: [
          'Rim Exit Devices',
          'Mortise Exit Devices',
          'Concealed Vertical Rod Devices',
          'Surface Vertical Rod Devices',
        ],
      },
      {
        heading: 'Electrified Hardware',
        items: [
          'Electric Strikes',
          'Electrified Exit Devices',
          'Request-to-Exit Bars',
          'Power Transfers',
        ],
      },
    ],
  },
  {
    name: 'LCN',
    category: 'Door Closers & Electrified Hardware',
    logo: '/lcn.webp',
    desc: 'LCN is the premier brand for commercial door closers and electrified door hardware in North America. From standard surface closers to low-energy power operators, LCN products ensure doors close reliably every time while supporting ADA compliance and access control integration.',
    groups: [
      {
        heading: 'Door Closers',
        items: [
          'Surface-Mounted Door Closers',
          'Concealed Door Closers',
          'Parallel Arm Closers',
          'Hold-Open Closers',
        ],
      },
      {
        heading: 'Electrified Products',
        items: [
          'Electromagnetic Hold-Opens',
          'Low-Energy Power Operators',
          'Automatic Door Operators',
          'Electric Hinges',
        ],
      },
    ],
  },
  {
    name: 'Aiphone',
    category: 'Video Intercom Systems',
    logo: '/aiphone.webp',
    desc: 'Aiphone is a global leader in intercom communication systems. Their video intercom products enable secure, visual verification at building entry points and integrate with access control systems for controlled building access. We stock Aiphone IX, GT, and JO series systems for a wide range of applications.',
    groups: [
      {
        heading: 'Video Intercom Systems',
        items: [
          'IX Series IP Video Intercom',
          'GT Series Multi-Tenant System',
          'JO Series Video Intercom',
          'Door Stations and Master Stations',
        ],
      },
      {
        heading: 'Accessories',
        items: [
          'Surface and Flush Mount Boxes',
          'Door Station Rain Hoods',
          'Power Supplies',
          'Network Adapters and Controllers',
        ],
      },
    ],
  },
  {
    name: 'BEA',
    category: 'Motion Sensors & Activators',
    logo: '/bea.webp',
    desc: 'BEA is the leading manufacturer of sensing and activation technology for automatic doors, security gates, and access control systems. Their motion sensors, presence detectors, and push plates are used wherever hands-free door activation is required.',
    groups: [
      {
        heading: 'Sensors & Activators',
        items: [
          'Microwave Motion Sensors',
          'Infrared Presence Detectors',
          'Safety Sensors',
          'Push Plates and Wireless Activators',
        ],
      },
      {
        heading: 'Applications',
        items: [
          'Automatic Sliding Door Activation',
          'Swing Door Operators',
          'Access Control Request-to-Exit',
          'Gate and Barrier Activation',
        ],
      },
    ],
  },
  {
    name: 'Vanderbilt',
    category: 'Access Control Systems',
    logo: '/Vanderbilt.webp',
    desc: 'Vanderbilt provides scalable access control systems and security management platforms for commercial and enterprise facilities. Their products range from standalone controllers to fully networked, cloud-managed access platforms suitable for multi-site deployments.',
    groups: [
      {
        heading: 'Access Control',
        items: [
          'ACT Enterprise Access Controllers',
          'ACT Pro Standalone Controllers',
          'SMS Access Management Software',
          'Network Door Controllers',
        ],
      },
      {
        heading: 'System Integration',
        items: [
          'Video Management Integration',
          'Intrusion Detection Integration',
          'Cloud-Based Management',
          'Mobile Credential Support',
        ],
      },
    ],
  },
  {
    name: 'Locknetics',
    category: 'Electrified Locking Products',
    logo: '/locknetics.webp',
    desc: 'Locknetics by Allegion specializes in electrified locking products, electric strikes, and magnetic locks for commercial door access control applications. Their products provide reliable electric locking solutions that integrate with virtually any access control system.',
    groups: [
      {
        heading: 'Electric Locking',
        items: [
          'Electric Strikes',
          'Magnetic Locks',
          'Electromagnetic Locks',
          'Fail-Safe and Fail-Secure Options',
        ],
      },
      {
        heading: 'Accessories',
        items: [
          'Power Supplies',
          'Monitoring Stations',
          'Door Position Switches',
          'Lockdown Buttons',
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
        eyebrow="Our Brands"
        title="Manufacturers"
        subtitle="We stock products from the most trusted names in electronic security and commercial door hardware — ready to ship same day."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* Intro strip */}
      <section className="py-12 bg-electric-blue">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-lg font-body max-w-3xl mx-auto leading-relaxed">
            Every brand we carry was chosen for field-proven reliability, product depth, and the ability to serve end users with new and replacement parts. We stock what you need — when you need it.
          </p>
        </div>
      </section>

      {/* Manufacturer Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Stocked Brands</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">Brands We Carry</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="space-y-16">
            {manufacturers.map((mfr) => (
              <div key={mfr.name} className="border border-gray-100 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="flex items-start gap-5 px-6 py-6 bg-gray-50 border-b border-gray-100">
                  <div className="w-20 h-14 relative flex-shrink-0 bg-white border border-gray-100 rounded p-1">
                    <Image src={mfr.logo} alt={mfr.name} fill className="object-contain" />
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

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Need Something?</span>
          <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-6">Can&apos;t Find What You Need?</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            If we don&apos;t have your specific part or product in stock, we can typically source it from our manufacturer network within 1–2 days.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
            Ask About a Product
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

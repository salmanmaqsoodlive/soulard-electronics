import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Catalogs | Soulard Technology',
  description: 'Browse product catalogs, spec sheets, and data sheets from our manufacturer partners — all in one place.',
}

const catalogGroups = [
  {
    manufacturer: 'Lenel S2',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    items: [
      { title: 'OnGuard Platform Overview', type: 'Product Brochure', pages: 12 },
      { title: 'LenelS2 NetBox Datasheet', type: 'Data Sheet', pages: 4 },
      { title: 'BlueDiamond Mobile Access', type: 'Solution Guide', pages: 8 },
      { title: 'OnGuard Integration Guide', type: 'Technical Guide', pages: 24 },
    ],
  },
  {
    manufacturer: 'Software House',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    items: [
      { title: 'CCURE 9000 Platform Overview', type: 'Product Brochure', pages: 16 },
      { title: 'iSTAR Controller Datasheet', type: 'Data Sheet', pages: 6 },
      { title: 'CCURE K-12 School Solution', type: 'Solution Guide', pages: 10 },
      { title: 'Victor VMS Integration', type: 'Technical Guide', pages: 18 },
    ],
  },
  {
    manufacturer: 'Genetec',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    items: [
      { title: 'Security Center Overview', type: 'Product Brochure', pages: 14 },
      { title: 'Synergis Access Control', type: 'Data Sheet', pages: 4 },
      { title: 'Education Vertical Guide', type: 'Solution Guide', pages: 12 },
      { title: 'Genetec Mission Control', type: 'Product Brochure', pages: 8 },
    ],
  },
  {
    manufacturer: 'HID Global',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80',
    items: [
      { title: 'Signo Reader Series', type: 'Product Brochure', pages: 6 },
      { title: 'iCLASS SE Platform', type: 'Data Sheet', pages: 8 },
      { title: 'Mobile Access Overview', type: 'Solution Guide', pages: 10 },
      { title: 'Credential Technology Guide', type: 'Technical Guide', pages: 20 },
    ],
  },
  {
    manufacturer: 'Axis Communications',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    items: [
      { title: 'Axis A8207-VE Network Video Door Station', type: 'Data Sheet', pages: 4 },
      { title: 'AXIS A1601 Network Door Controller', type: 'Data Sheet', pages: 4 },
      { title: 'Axis School Security Guide', type: 'Solution Guide', pages: 14 },
      { title: 'IP Video Intercom Catalog', type: 'Product Catalog', pages: 32 },
    ],
  },
  {
    manufacturer: 'Allegion',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
    items: [
      { title: 'Schlage AD Series Catalog', type: 'Product Catalog', pages: 48 },
      { title: 'Von Duprin Panic Hardware', type: 'Product Catalog', pages: 36 },
      { title: 'School Security Solutions', type: 'Solution Guide', pages: 16 },
      { title: 'Wireless Lock Specification Guide', type: 'Technical Guide', pages: 22 },
    ],
  },
]

const categories = ['All', 'Product Catalog', 'Product Brochure', 'Data Sheet', 'Solution Guide', 'Technical Guide']

export default function Catalogs() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Literature & Downloads"
        title="Catalogs"
        subtitle="Product catalogs, data sheets, and solution guides from our manufacturer partners — everything you need to specify the right system."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Filter bar */}
      <section className="py-6 bg-gray-50 border-b border-gray-100 sticky top-[60px] z-30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-display text-gray-500 text-xs uppercase tracking-widest mr-2">Filter:</span>
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 text-xs font-body border cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-electric-blue text-white border-electric-blue'
                    : 'border-gray-200 text-gray-600 hover:border-electric-blue/40 hover:text-electric-blue'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Groups */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {catalogGroups.map((group) => (
            <div key={group.manufacturer}>
              {/* Manufacturer header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                <div className="relative w-20 h-14 overflow-hidden rounded flex-shrink-0">
                  <Image src={group.image} alt={group.manufacturer} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-gray-900 text-xl uppercase tracking-wider">{group.manufacturer}</h2>
                  <span className="text-steel-silver text-xs">{group.items.length} documents available</span>
                </div>
                <Link
                  href="/contact"
                  className="ml-auto hidden sm:inline-flex items-center gap-2 text-electric-blue text-xs font-display uppercase tracking-widest hover:text-electric-cyan transition-colors"
                >
                  Request Hard Copy
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
                </Link>
              </div>

              {/* Catalog items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="border border-gray-100 hover:border-electric-blue/30 hover:shadow-md transition-all p-5 group"
                  >
                    {/* Document icon */}
                    <div className="w-12 h-14 mb-4 relative flex-shrink-0">
                      <div className="w-12 h-14 bg-electric-blue/8 border border-electric-blue/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-electric-blue">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="absolute -top-1 -right-1 bg-electric-blue text-white text-[9px] px-1 font-display uppercase">PDF</span>
                    </div>

                    <span className="font-display text-electric-cyan text-[10px] tracking-widest uppercase block mb-1">{item.type}</span>
                    <h3 className="font-body text-gray-900 text-sm font-medium leading-snug mb-2">{item.title}</h3>
                    <span className="text-steel-silver text-xs">{item.pages} pages</span>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 text-center py-1.5 bg-electric-blue/8 text-electric-blue text-xs font-display uppercase tracking-wide hover:bg-electric-blue/15 transition-colors"
                      >
                        Download
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 text-center py-1.5 border border-gray-200 text-gray-500 text-xs font-display uppercase tracking-wide hover:border-electric-blue/40 hover:text-electric-blue transition-colors"
                      >
                        Request
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom request */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-4">
            Need a Specific Document?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            If you're looking for a spec sheet, installation guide, or product catalog that isn't listed here, contact us and we'll source it for you.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
            Request a Document
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

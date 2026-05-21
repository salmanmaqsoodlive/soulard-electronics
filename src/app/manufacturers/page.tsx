import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Manufacturers | Soulard Technology',
  description: 'We partner with the industry\'s leading access control manufacturers — Lenel, Software House, Genetec, HID, Axis, Allegion, and more.',
}

const manufacturers = [
  {
    name: 'Lenel S2',
    category: 'Access Control Platform',
    desc: 'A Carrier company and global leader in enterprise access control. Lenel\'s OnGuard platform powers some of the most demanding deployments worldwide, offering deep integration, scalability, and a rich ecosystem of partners.',
    products: ['OnGuard Access Control', 'Lenel Velocity', 'LenelS2 NetBox', 'BlueDiamond Mobile'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
  },
  {
    name: 'Software House',
    category: 'Enterprise Access Control',
    desc: 'Owned by Tyco (Johnson Controls), Software House\'s CCURE 9000 is an enterprise-class security and event management platform trusted by hospitals, universities, and government facilities.',
    products: ['CCURE 9000', 'iSTAR Controllers', 'C•CURE Access Control', 'Victor Video Management'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    color: 'bg-gray-50 border-gray-200',
    accentColor: 'text-gray-700',
  },
  {
    name: 'Genetec',
    category: 'Unified Security Platform',
    desc: 'Genetec\'s Security Center is an open and unified platform that combines access control, video surveillance, automatic license plate recognition, and communications.',
    products: ['Security Center', 'Synergis Access Control', 'AutoVu ALPR', 'Mission Control'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
  },
  {
    name: 'HID Global',
    category: 'Credentials & Readers',
    desc: 'The world\'s leading provider of trusted identity solutions. HID supplies the readers, cards, and mobile credentials that authenticate people at millions of doors globally.',
    products: ['iCLASS SE Readers', 'Signo Readers', 'Mobile Access', 'Seos Credentials'],
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-700',
  },
  {
    name: 'Axis Communications',
    category: 'Network Video & Intercoms',
    desc: 'Axis pioneered network video and continues to lead in IP cameras, video intercoms, and network audio — essential for perimeter monitoring and entry management at K-12 campuses.',
    products: ['IP Video Intercoms', 'Network Cameras', 'Door Controllers', 'Network Audio'],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    color: 'bg-red-50 border-red-200',
    accentColor: 'text-red-700',
  },
  {
    name: 'Allegion',
    category: 'Door Hardware & Locking',
    desc: 'Home to Schlage, Von Duprin, and LCN — Allegion delivers the physical door hardware that interfaces with electronic access control, from electrified panic hardware to electronic locks.',
    products: ['Schlage Electronic Locks', 'Von Duprin Panic Hardware', 'LCN Door Closers', 'AD Series Networked Locks'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    color: 'bg-yellow-50 border-yellow-200',
    accentColor: 'text-yellow-700',
  },
  {
    name: 'ASSA ABLOY',
    category: 'Door Opening Solutions',
    desc: 'The global leader in door opening solutions. ASSA ABLOY\'s portfolio includes Yale, Corbin Russwin, Sargent, and Aperio — covering everything from mechanical hardware to wireless locking.',
    products: ['Yale Electronic Locks', 'Aperio Wireless', 'Sargent Locks', 'CLIQ Remote Access'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
  },
  {
    name: 'Bosch Security',
    category: 'Integrated Security Systems',
    desc: 'Bosch delivers access control, intrusion detection, and video surveillance in a tightly integrated ecosystem — ideal for districts that want a single-vendor infrastructure.',
    products: ['Access Professional Edition', 'B Series Intrusion Panels', 'FLEXIDOME Cameras', 'Video Management System'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    color: 'bg-teal-50 border-teal-200',
    accentColor: 'text-teal-700',
  },
]

export default function Manufacturers() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Our Partners"
        title="Manufacturers"
        subtitle="We work with the industry's most trusted manufacturers — giving you access to best-in-class technology with unbiased, expert guidance."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* Intro */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Manufacturer Partners', value: '8+' },
              { label: 'Product Lines', value: '40+' },
              { label: 'Years of Partnerships', value: '15+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl text-electric-cyan mb-2">{stat.value}</div>
                <div className="text-steel-silver text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Trusted Brands</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">Our Manufacturer Partners</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {manufacturers.map((mfr) => (
              <div key={mfr.name} className="border border-gray-100 hover:border-electric-blue/30 hover:shadow-lg transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={mfr.image}
                    alt={mfr.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="font-display text-xs text-electric-cyan tracking-widest uppercase">{mfr.category}</span>
                    <h3 className="font-display text-white text-2xl uppercase tracking-wider">{mfr.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-steel-silver text-sm leading-relaxed mb-4">{mfr.desc}</p>
                  <div>
                    <span className="font-display text-xs text-gray-400 uppercase tracking-widest block mb-2">Key Products</span>
                    <div className="flex flex-wrap gap-2">
                      {mfr.products.map((p) => (
                        <span key={p} className="text-xs px-3 py-1 border border-electric-blue/20 text-electric-blue bg-electric-blue/5">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
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
          <p className="text-steel-silver leading-relaxed mb-6 text-lg">
            We are not a reseller or a manufacturer's rep. We earn no commissions or bonuses for recommending one brand over another. Our only obligation is to you — the school district — and to finding the solution that best fits your needs and budget.
          </p>
          <p className="text-steel-silver leading-relaxed mb-10">
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

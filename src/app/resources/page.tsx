import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Resources | Soulard Electronic Security Products',
  description: 'Electronic security product resources — buyer guides, technical FAQs, installation references, and industry links for contractors and end users.',
}

const guides = [
  {
    title: 'Schlage AD Series Lock Selection Guide',
    desc: 'Choosing between the AD-200, AD-250, AD-300, and AD-400 — understanding wired vs. wireless, standalone vs. networked, and credential compatibility.',
    readTime: '10 min read',
    category: "Buyer's Guide",
    icon: '🔒',
  },
  {
    title: 'Understanding Door Hardware for Commercial Facilities',
    desc: 'Life-safety codes, ADA requirements, and locking mode options explained — from electric strikes to classroom function locks to panic hardware.',
    readTime: '8 min read',
    category: 'Technical Guide',
    icon: '🚪',
  },
  {
    title: 'HID Credential Technology Comparison',
    desc: 'Proximity vs. smart card vs. mobile credentials — what each technology offers, backward compatibility considerations, and upgrade paths.',
    readTime: '10 min read',
    category: 'Technology',
    icon: '💳',
  },
  {
    title: 'Selecting the Right Door Closer',
    desc: 'How to match LCN closers to door weight, frame type, and usage frequency — plus when to specify electrified hold-open or low-energy operators.',
    readTime: '7 min read',
    category: 'Technical Guide',
    icon: '⚙️',
  },
  {
    title: 'Von Duprin Exit Device Basics',
    desc: 'Rim, mortise, and vertical rod exit devices explained — plus integration with electric strikes and electrified hardware for access control systems.',
    readTime: '9 min read',
    category: 'Technical Guide',
    icon: '🚨',
  },
  {
    title: 'Ordering Replacement Parts',
    desc: "How to identify the right replacement part for your Schlage lock, Von Duprin device, or LCN closer — including how to read part numbers and spec sheets.",
    readTime: '6 min read',
    category: 'How-To',
    icon: '📋',
  },
]

const faqs = [
  {
    q: 'Do you stock replacement parts for older Schlage locks?',
    a: 'Yes. We maintain a deep inventory of Schlage AD series parts including reader modules, escutcheons, baseplates, spring cages, levers, latches, and communication modules — for both current and legacy products. If we don\'t have it, we can typically source it within 1–2 days.',
  },
  {
    q: 'How fast can you ship?',
    a: 'Most in-stock orders placed before 3pm ship the same day via UPS. Standard UPS ground delivers to most of the continental U.S. within 1–2 business days from our Holland MI, St. Louis MO, or Tampa FL locations.',
  },
  {
    q: 'Can I order just one or two pieces, or do you have minimum order requirements?',
    a: 'No minimum order requirements. We serve end users and contractors of all sizes — whether you need one replacement credential or a full case of 500.',
  },
  {
    q: 'What credential technologies do you stock?',
    a: 'We stock the full range of HID Global credentials including legacy 125kHz proximity cards and fobs, 13.56MHz smart card credentials (iCLASS, iCLASS SE, iCLASS Seos), and FIPS201-compliant options. If you need help identifying the right credential for your existing readers, we can assist.',
  },
  {
    q: 'Can you help me identify a part I need?',
    a: 'Absolutely. Send us a photo or the model number of the product and we\'ll identify the correct replacement part. Our team has deep product knowledge across all brands we carry.',
  },
  {
    q: 'Do you carry products for electrified door applications?',
    a: 'Yes — we stock electric strikes, magnetic locks, power supplies, electric hinges, request-to-exit bars, lockdown buttons, door position switches, and armored door cords from brands including Von Duprin, Locknetics, and LCN.',
  },
]

const industryLinks = [
  { name: 'Security Industry Association (SIA)', url: '#', desc: 'Leading trade association for security solutions providers.' },
  { name: 'ASIS International', url: '#', desc: 'Global security management professionals organization.' },
  { name: 'Door Hardware Institute (DHI)', url: '#', desc: 'Professional association for the architectural openings industry.' },
  { name: 'National Fire Protection Association (NFPA)', url: '#', desc: 'Standards body covering egress, life safety, and door hardware codes.' },
  { name: 'Allegion Technical Support', url: '#', desc: 'Manufacturer technical resources for Schlage and Von Duprin products.' },
  { name: 'HID Global Technical Library', url: '#', desc: 'Product documentation, installation guides, and credential specs.' },
]

export default function Resources() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Knowledge Base"
        title="Resources"
        subtitle="Product guides, technical references, FAQs, and industry links for contractors, integrators, and facilities professionals."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
      />

      {/* Quick nav */}
      <section className="py-6 bg-gray-50 border-b border-gray-100 sticky top-[60px] z-30">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-display text-gray-500 text-xs uppercase tracking-widest">Jump to:</span>
            {['Tech Guides', 'FAQs', 'Industry Links'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs font-body text-gray-600 hover:text-electric-blue transition-colors border-b border-transparent hover:border-electric-blue pb-0.5"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Guides */}
      <section id="tech-guides" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Knowledge Base</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Technical & Buyer's Guides</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white border border-gray-100 hover:border-electric-blue/30 hover:shadow-md transition-all p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{guide.icon}</span>
                  <span className="text-xs px-2 py-0.5 bg-electric-blue/8 text-electric-blue font-display uppercase tracking-wide">{guide.category}</span>
                </div>
                <h3 className="font-body text-gray-900 font-semibold text-base leading-snug mb-3">{guide.title}</h3>
                <p className="text-steel-silver text-sm leading-relaxed mb-4">{guide.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-steel-silver text-xs">{guide.readTime}</span>
                  <Link
                    href="/contact"
                    className="text-electric-blue text-xs font-display uppercase tracking-widest hover:text-electric-cyan transition-colors group-hover:underline"
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Common Questions</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-100 hover:border-electric-blue/20 transition-colors">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-electric-blue text-white font-display text-xs font-bold mt-0.5">
                      Q
                    </div>
                    <div>
                      <h3 className="font-body text-gray-900 font-semibold mb-3 leading-snug">{faq.q}</h3>
                      <p className="text-steel-silver text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-steel-silver mb-4">Have a product question not answered here?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Links */}
      <section id="industry-links" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">External Resources</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Industry Links</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {industryLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="border border-gray-100 bg-white hover:border-electric-blue/30 hover:shadow-md transition-all p-5 group block"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-body text-gray-900 font-semibold text-sm leading-snug group-hover:text-electric-blue transition-colors">{link.name}</h3>
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-300 group-hover:text-electric-blue transition-colors flex-shrink-0 ml-2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-steel-silver text-xs leading-relaxed">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-4">
            Need a Product or Part?
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Contact us with your product or part number and we&apos;ll check stock and get you a quote fast — same-day shipping available.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

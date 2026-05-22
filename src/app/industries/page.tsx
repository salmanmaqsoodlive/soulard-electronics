import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Industries | Soulard Electronic Security Products',
  description: 'Electronic security products and commercial door hardware for commercial, healthcare, education, government, multi-family, and retail facilities.',
}

const segments = [
  {
    title: 'Commercial & Office',
    desc: 'Access control hardware, electronic locks, and door hardware for office buildings, corporate campuses, and commercial properties.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imageAlt: 'Modern commercial office building',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9h2M8 13h2M8 17h2M14 9h2M14 13h2M14 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare',
    desc: 'Compliant access control and locking hardware for hospitals, medical centers, clinics, and long-term care facilities.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    imageAlt: 'Healthcare facility corridor with secure access',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Electronic locks, credentials, readers, and door hardware for K-12 schools, colleges, and university campuses.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    imageAlt: 'Educational campus building',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 21v-4a2 2 0 014 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Government & Municipal',
    desc: 'Secure, code-compliant hardware for government buildings, courthouses, municipal offices, and public facilities.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    imageAlt: 'Government building facade',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Multi-Family Residential',
    desc: 'Intercoms, access control, and door hardware for apartment complexes, condominiums, and managed residential communities.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    imageAlt: 'Multi-family residential building',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 21h18M3 21V7l9-4 9 4v14M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Retail & Hospitality',
    desc: 'Electronic locking and access hardware for retail stores, hotels, restaurants, and entertainment venues.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    imageAlt: 'Retail and hospitality building entrance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Industries() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="Who We Serve"
        title="Industries"
        subtitle="Electronic security products and commercial door hardware for any facility type — stocked, shipped fast, and backed by expert product knowledge."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">End User Focus</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Products for <span className="gradient-text">Every Facility</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-5">
                Whether you manage a single commercial building or a multi-site enterprise, Soulard Electronic Security Products stocks the hardware you need. We serve end users, contractors, integrators, and facilities professionals across virtually every market vertical.
              </p>
              <p className="text-steel-silver leading-relaxed mb-5">
                Our inventory covers electronic locks, access control hardware, credentials, readers, panic devices, door closers, intercoms, and motion sensors — from the industry&apos;s most trusted brands.
              </p>
              <p className="text-steel-silver leading-relaxed">
                With stocking locations in Holland, Michigan; St. Louis, Missouri; and Tampa, Florida, we ship same-day via UPS to contractors and facilities teams nationwide.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="Electronic access control hardware"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Segments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Market Segments</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Industries We Serve</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg) => (
              <div key={seg.title} className="bg-white border border-electric-blue/15 overflow-hidden hover:border-electric-blue/40 hover:shadow-md transition-all group">
                <div className="relative h-44">
                  <Image src={seg.image} alt={seg.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-electric-blue/10 text-electric-blue mb-4 group-hover:bg-electric-blue/20 transition-colors">
                    {seg.icon}
                  </div>
                  <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-3">{seg.title}</h3>
                  <p className="text-steel-silver text-sm leading-relaxed">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Where We Ship From</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Our Stocking Locations</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto mb-4" />
            <p className="text-steel-silver max-w-xl mx-auto">
              Three distribution points ensure fast UPS delivery to contractors and end users across the continental United States.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {[
              { city: 'Holland', state: 'Michigan', desc: 'West Michigan distribution hub' },
              { city: 'St. Louis', state: 'Missouri', desc: 'Midwest headquarters and distribution' },
              { city: 'Tampa', state: 'Florida', desc: 'Southeast distribution center' },
            ].map((loc) => (
              <div key={loc.city} className="border border-electric-blue/15 p-6 hover:border-electric-blue/40 hover:shadow-md transition-all text-center">
                <div className="font-display text-electric-cyan text-xl uppercase tracking-wider mb-2">{loc.city}</div>
                <div className="font-display text-gray-900 text-sm uppercase tracking-wider mb-2">{loc.state}</div>
                <p className="text-steel-silver text-xs">{loc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Request a Quote
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

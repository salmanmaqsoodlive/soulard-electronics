import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Industries | Soulard Technology',
  description: 'K-12 education security specialists serving Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
}

const states = [
  { name: 'Florida', districts: 67, schools: '4,000+', highlight: 'Largest K-12 market we serve' },
  { name: 'Michigan', districts: 540, schools: '3,700+', highlight: 'Strong compliance requirements' },
  { name: 'Illinois', districts: 852, schools: '4,200+', highlight: 'Urban & rural district expertise' },
  { name: 'Missouri', districts: 520, schools: '2,400+', highlight: 'Soulard Technology home state' },
  { name: 'Indiana', districts: 293, schools: '1,900+', highlight: 'Growing security mandates' },
  { name: 'Ohio', districts: 610, schools: '3,600+', highlight: 'High-density urban districts' },
]

const segments = [
  {
    title: 'Elementary Schools',
    desc: 'Controlled single-entry points, classroom lockdown systems, and visitor management tailored to younger students.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 21v-4a2 2 0 014 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Middle Schools',
    desc: 'Scalable multi-zone access control for complex campus layouts with multiple buildings and entry points.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'High Schools',
    desc: 'Enterprise-grade systems handling hundreds of daily access events with full audit trails and integration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14l6.16-3.422A12.08 12.08 0 0122 17.18V21M12 14l-6.16-3.422A12.08 12.08 0 002 17.18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'District Administration',
    desc: 'Centralized management across all campuses from a single dashboard with role-based administrative access.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
        subtitle="Focused entirely on K-12 education institutions — the environments that need security most and deserve it most."
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
      />

      {/* Why K-12 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Primary Market</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Why <span className="gradient-text">K-12 Schools?</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-5">
                Schools are among the most security-complex environments in the world — open communities that must also be protected sanctuaries. The challenge of balancing access and security is unlike any other facility type.
              </p>
              <p className="text-steel-silver leading-relaxed mb-5">
                We focus exclusively on K-12 institutions because we understand the unique pressures: budget constraints, state compliance requirements, community expectations, and the absolute priority of student and staff safety.
              </p>
              <p className="text-steel-silver leading-relaxed">
                Our deep specialization means we deliver better outcomes faster — because we've already solved most of the challenges your institution faces.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80"
                alt="K-12 school"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Segments</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">School Segments We Serve</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((seg) => (
              <div key={seg.title} className="bg-white border border-electric-blue/15 p-6 hover:border-electric-blue/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-electric-blue/10 text-electric-blue mb-5 group-hover:bg-electric-blue/20 transition-colors">
                  {seg.icon}
                </div>
                <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-3">{seg.title}</h3>
                <p className="text-steel-silver text-sm leading-relaxed">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service States */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Coverage</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider mb-4">Our Service States</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {states.map((state) => (
              <div key={state.name} className="border border-electric-blue/15 p-6 hover:border-electric-blue/40 hover:shadow-md transition-all">
                <h3 className="font-display text-electric-cyan text-xl uppercase tracking-wider mb-4">{state.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="font-display text-gray-900 text-2xl">{state.districts}</div>
                    <div className="text-steel-silver text-xs mt-1">School Districts</div>
                  </div>
                  <div>
                    <div className="font-display text-electric-cyan text-2xl">{state.schools}</div>
                    <div className="text-steel-silver text-xs mt-1">K-12 Schools</div>
                  </div>
                </div>
                <p className="text-steel-silver text-xs border-t border-gray-100 pt-3">{state.highlight}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Request Free Assessment
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

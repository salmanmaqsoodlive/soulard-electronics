import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About | Soulard Technology',
  description: 'Learn about Soulard Technology — experienced security consultants specializing in K-12 electronic access control across Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.',
}

const values = [
  {
    title: 'Security First',
    desc: 'Student and staff safety drives every recommendation we make.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Budget Conscious',
    desc: 'Maximum security impact within your institutional budget constraints.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Fast Fulfillment',
    desc: 'Large inventory and same-day shipping means your project never stalls waiting on parts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Partnership',
    desc: 'Long-term relationships built on trust, transparency, and results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        subtitle="15+ years of specialized experience delivering access control solutions to K-12 institutions across six states."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Soulard Technology was founded with a singular purpose: to make enterprise-grade security accessible and affordable for K-12 educational institutions. We recognized that schools were being underserved — either paying too much for complex systems, or settling for inadequate security that put students and staff at risk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We specialize in Allegion (Schlage) locking hardware and HID Global credentials and readers — two of the most trusted names in access control. Our deep product knowledge, combined with a large on-hand inventory and same-day shipping capability, means we can move fast when your district needs it most.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly serve K-12 institutions across six states — Florida, Michigan, Illinois, Missouri, Indiana, and Ohio — helping districts create safer learning environments without sacrificing their budgets.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
                alt="Security consulting team"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg border border-electric-blue/20 p-4">
                <div className="font-display text-electric-cyan text-2xl">15+</div>
                <div className="text-gray-500 text-xs mt-1">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">What Drives Us</span>
            <h2 className="font-display text-3xl text-gray-900 uppercase tracking-wider">Core Values</h2>
            <div className="w-16 h-px bg-electric-blue mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-electric-blue/15 p-6 text-center hover:border-electric-blue/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-electric-blue/10 text-electric-blue mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80"
                alt="Security consultant at work"
                width={600}
                height={450}
                className="object-cover w-full rounded"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-6">
                Specialized <span className="gradient-text">Expertise</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Exclusive focus on K-12 security — not a generalist firm',
                  'Allegion (Schlage) and HID Global product specialists',
                  'Large inventory with same-day shipping available',
                  'UPS delivery — most orders arrive in 1–2 days',
                  'Parts and components sourced within 1–2 days if not in stock',
                  'Deep knowledge of state compliance requirements',
                  'Hands-on training for administrators and technical staff',
                  'Proven track record across 200+ institutions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-electric-blue text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-electric-blue/90 transition-all shadow-neon-blue"
              >
                Schedule a Consultation
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Coverage</span>
          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-4">Service Areas</h2>
          <p className="text-gray-300 mb-10">Proudly serving K-12 institutions across six states</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Florida', 'Michigan', 'Illinois', 'Missouri', 'Indiana', 'Ohio'].map((state) => (
              <div key={state} className="border border-electric-blue/30 px-8 py-4 hover:border-electric-cyan/60 transition-colors">
                <div className="font-display text-electric-cyan text-sm uppercase tracking-widest">{state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

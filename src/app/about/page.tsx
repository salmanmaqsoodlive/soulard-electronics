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
              <p className="text-steel-silver leading-relaxed mb-5">
                Soulard Technology was founded with a singular purpose: to make enterprise-grade security accessible and affordable for K-12 educational institutions. We recognized that schools were being underserved — either paying too much for complex systems, or settling for inadequate security that put students and staff at risk.
              </p>
              <p className="text-steel-silver leading-relaxed mb-5">
                Our team brings decades of combined experience in electronic access control, security system design, and institutional safety planning. We partner with leading access control platforms to provide unbiased consulting that prioritizes your institution's specific needs.
              </p>
              <p className="text-steel-silver leading-relaxed">
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
                <div className="text-steel-silver text-xs mt-1">Years Combined Experience</div>
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
            {[
              { icon: '🛡', title: 'Security First', desc: 'Student and staff safety drives every recommendation we make.' },
              { icon: '💡', title: 'Innovation', desc: 'We stay ahead of emerging technologies to bring you the best solutions.' },
              { icon: '💰', title: 'Budget Conscious', desc: 'Maximum security impact within your institutional budget constraints.' },
              { icon: '🤝', title: 'Partnership', desc: 'Long-term relationships built on trust, transparency, and results.' },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-electric-blue/15 p-6 text-center hover:border-electric-blue/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider mb-2">{v.title}</h3>
                <p className="text-steel-silver text-sm leading-relaxed">{v.desc}</p>
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
                  'Manufacturer-agnostic recommendations for unbiased advice',
                  'Deep knowledge of state compliance requirements',
                  'Hands-on training for all staff levels',
                  'Ongoing support long after implementation',
                  'Proven track record across 200+ institutions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-steel-silver text-sm">
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

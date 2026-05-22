import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Technical Support | Soulard Electronic Security Products',
  description: 'Product training and technical support for electronic security products and commercial door hardware from Soulard Electronic Security Products.',
}

const trainings = [
  { title: 'Schlage AD Series Lock Training', duration: '2 Hours', level: 'Installer', desc: 'Installation, configuration, and troubleshooting of the Schlage AD-200, AD-250, AD-300, and AD-400 series hardwired and wireless locks.' },
  { title: 'Schlage XE360 Wireless Locks', duration: '1.5 Hours', level: 'Installer', desc: 'Setup and commissioning for the XE360 wireless tubular, mortise, and exit wide stile lock series.' },
  { title: 'HID Credentials & Readers', duration: '2 Hours', level: 'All Levels', desc: 'Understanding HID credential technologies — proximity, smart card, and mobile — and pairing with compatible readers.' },
  { title: 'Von Duprin Panic Hardware', duration: '1 Hour', level: 'Installer', desc: 'Proper selection, installation, and adjustment of Von Duprin exit devices and electric strikes for commercial door applications.' },
  { title: 'Aiphone Video Intercom Systems', duration: '2 Hours', level: 'Installer', desc: 'Wiring, programming, and testing Aiphone IX and GT series video intercom systems for multi-tenant and single-entry applications.' },
  { title: 'LCN Door Closers & Electrified Hardware', duration: '1 Hour', level: 'Installer', desc: 'Selecting the correct LCN closer for the application, adjusting closing speed and backcheck, and integrating electrified hold-open products.' },
]

const support = [
  { tier: 'Pre-Sales', features: ['Product selection assistance', 'Application questions answered', 'Compatibility verification', 'Quote generation', 'Spec sheet and catalog requests'], price: 'Complimentary' },
  { tier: 'Post-Sales', features: ['Installation guidance by phone', 'Troubleshooting support', 'Replacement part identification', 'Warranty and return assistance', 'Upgrade path recommendations'], price: 'Complimentary' },
  { tier: 'Account Support', features: ['Dedicated account rep', 'Priority order processing', 'Volume pricing', 'Project staging and kitting', 'Standing inventory reservations', 'Custom ordering schedules'], price: 'Contact Us' },
]

export default function Training() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Knowledge & Support</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">
            Technical Support
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Product training and hands-on support to help you select, install, and troubleshoot the security hardware you purchase from us.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-10">Product Training</h2>
          <div className="space-y-5 mb-20">
            {trainings.map((t) => (
              <div key={t.title} className="glass p-7 hover:border-electric-cyan/20 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="font-display text-white text-lg uppercase tracking-wider">{t.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-1">Duration</div>
                      <div className="text-steel-silver text-sm">{t.duration}</div>
                    </div>
                    <div>
                      <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-1">Level</div>
                      <div className="text-steel-silver text-sm">{t.level}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-steel-silver text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-10">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {support.map((s) => (
              <div key={s.tier} className={`p-7 ${s.tier === 'Account Support' ? 'bg-electric-blue/10 border-2 border-electric-cyan/30' : 'glass'}`}>
                <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">{s.tier} Support</div>
                <div className="font-display text-white text-sm mb-5">{s.price}</div>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-steel-silver text-sm">
                      <div className="w-1.5 h-1.5 bg-electric-cyan/60 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue text-white font-display uppercase tracking-widest text-sm hover:bg-electric-blue/90 transition-all shadow-neon-blue">
              Contact Our Support Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

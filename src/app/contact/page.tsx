'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const contacts = [
  {
    name: 'Greg Hodge',
    company: 'Soulard Electronic Security Products',
    direct: '616-886-5222',
    tollfree: '866-404-5519',
    email: 'greg.hodge@soulardtechnology.net',
  },
  {
    name: 'Taylor Hodge',
    company: 'Soulard Electronic Security Products',
    direct: '616-886-0976',
    tollfree: '866-404-5519',
    email: 'taylor.hodge@soulardtechnology.net',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/greg.hodge@soulardtechnology.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          location: form.state || 'Not specified',
          message: form.message,
          _subject: `New Contact Form Submission from ${form.name}`,
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Failed to send message. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-electric-cyan" />
            <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Need a quote, product availability check, or technical help? Reach out — we respond fast.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 hover:border-electric-blue/30 hover:shadow-md transition-all p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-electric-blue/10 text-electric-blue font-display text-sm">
                    {c.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-display text-gray-900 text-sm uppercase tracking-wider">{c.name}</div>
                    <div className="font-display text-electric-cyan text-xs tracking-widest">{c.company}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href={`tel:${c.direct}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-electric-blue transition-colors group">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-electric-blue flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.15 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.13 7.86a16 16 0 006 6l1.22-1.22a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.13v2.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{c.direct} <span className="text-gray-400 text-xs">Direct</span></span>
                  </a>
                  <a href={`tel:${c.tollfree}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-electric-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-electric-blue flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.15 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.13 7.86a16 16 0 006 6l1.22-1.22a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.13v2.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{c.tollfree} <span className="text-gray-400 text-xs">Toll-Free</span></span>
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-sm text-electric-blue hover:text-electric-blue/80 transition-colors break-all">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    {c.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-8">Send Us a Message</h2>
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display text-gray-500 text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full bg-white border border-gray-200 focus:border-electric-blue text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="font-display text-gray-500 text-xs tracking-widest uppercase block mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full bg-white border border-gray-200 focus:border-electric-blue text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                        placeholder="john@district.edu"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-gray-500 text-xs tracking-widest uppercase block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-blue text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-display text-gray-500 text-xs tracking-widest uppercase block mb-2">State</label>
                    <select
                      value={form.state}
                      onChange={e => setForm({...form, state: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-blue text-gray-900 px-4 py-3 outline-none transition-colors text-sm"
                    >
                      <option value="">Select Location</option>
                      {['Holland, MI','St. Louis, MO','Tampa, FL','Other / Ship to Me'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-gray-500 text-xs tracking-widest uppercase block mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full bg-white border border-gray-200 focus:border-electric-blue text-gray-900 px-4 py-3 outline-none transition-colors text-sm resize-none"
                      placeholder="Tell us what products or parts you need..."
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm border border-red-200 bg-red-50 px-4 py-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-electric-blue hover:bg-electric-blue/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:-translate-y-0.5"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-electric-blue/20 p-12 text-center"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-electric-blue/10 text-electric-blue mx-auto mb-5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-3">Message Received</h3>
                  <p className="text-gray-600">We'll respond within 24 business hours. Thank you for reaching out.</p>
                </motion.div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-gray-900 text-2xl uppercase tracking-wider mb-4">Fast Quotes &amp; Same-Day Shipping</h2>
                <p className="text-gray-600 leading-relaxed">
                  Need a product quote, want to check stock availability, or have a technical question? Send us a message and we&apos;ll get back to you fast — usually within a few hours.
                </p>
              </div>
              <div className="space-y-4">
                <div className="border border-gray-100 p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-3">Stocking Locations</div>
                  <div className="flex flex-wrap gap-2">
                    {['Holland, MI','St. Louis, MO','Tampa, FL'].map(s => (
                      <span key={s} className="text-gray-600 text-sm border border-electric-blue/20 px-3 py-1">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="border border-gray-100 p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Response Time</div>
                  <div className="text-gray-900 text-sm">Within 24 business hours</div>
                </div>
                <div className="border border-gray-100 p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-2">Shipping</div>
                  <div className="text-gray-900 text-sm">Same-day on in-stock items &bull; UPS 1–2 day delivery</div>
                </div>
                <div className="border border-gray-100 p-5">
                  <div className="font-display text-electric-cyan text-xs tracking-widest uppercase mb-3">Toll-Free</div>
                  <a href="tel:866-404-5519" className="text-gray-900 text-sm hover:text-electric-blue transition-colors">866-404-5519</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience', icon: '🛡' },
  { value: 200, suffix: '+', label: 'Institutions Secured', icon: '🏫' },
  { value: 6, suffix: '', label: 'States Served', icon: '📍' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
]

const serviceAreas = ['Florida', 'Michigan', 'Illinois', 'Missouri', 'Indiana', 'Ohio']

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Security system"
            fill
            className="object-cover opacity-5"
            priority
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-60"
          style={{
            backgroundImage: 'linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse-slow z-[1]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-cyan/5 rounded-full blur-3xl animate-pulse-slow z-[1]" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-[2] container mx-auto px-6 pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-electric-cyan" />
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">K-12 Security Specialists</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl text-gray-900 uppercase leading-tight tracking-wider"
              >
                Securing
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-display text-6xl sm:text-7xl md:text-8xl uppercase leading-tight tracking-wider gradient-text"
              >
                The Future
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              Advanced electronic access control consulting and security management systems for K-12 education institutions across Florida, Michigan, Illinois, Missouri, Indiana, and Ohio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-body font-semibold text-sm uppercase tracking-widest transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Service area pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-16"
          >
            {serviceAreas.map((state, i) => (
              <span
                key={state}
                className="px-4 py-1.5 border border-electric-blue/30 text-electric-blue text-xs font-display tracking-[0.2em] uppercase"
              >
                {state}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        >
          <span className="font-display text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-navy-800 border-y border-electric-blue/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-50" />
        <div ref={statsRef} className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display text-4xl md:text-5xl text-electric-cyan mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-steel-silver text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVENTORY / SHIPPING / PARTS */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: 'Inventory',
                description: 'Large inventory, same-day shipping and technical support.',
                image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
                imageAlt: 'Organized warehouse shelving with technology inventory',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                heading: 'Quick Shipping',
                description: 'With the most products on the shelf and UPS delivery in 1–2 days, we eliminate unnecessary delays on your project.',
                image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80',
                imageAlt: 'Packages ready for fast delivery and shipping',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <circle cx="5.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="18.5" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                heading: 'Parts',
                description: 'Whatever part, component, or accessory you need — if we don\'t stock it, we can typically get it to you in 1–2 days.',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
                imageAlt: 'Electronic components and circuit board parts',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col border border-gray-100 hover:border-electric-blue/30 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-800/20" />
                </div>
                <div className="flex flex-col items-start p-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-electric-blue/10 text-electric-blue mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-gray-900 text-lg uppercase tracking-wider mb-3">{item.heading}</h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / K-12 FOCUS */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
            alt="K-12 school"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-800/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">Primary Market</span>
              <h2 className="font-display text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mb-6">
                K-12 Education<br />
                <span className="gradient-text">Security Experts</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-6">
                We understand the unique security challenges facing today's educational institutions. From elementary schools to high schools, Soulard Technology delivers comprehensive access control solutions that protect students and staff while respecting budget constraints.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Budget-conscious security solutions',
                  'Compliance with state safety mandates',
                  'Scalable for growing districts',
                  'Minimal disruption during implementation',
                  'Ongoing training for all staff levels',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-steel-silver text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-electric-cyan text-sm font-display uppercase tracking-widest hover:text-gray-900 transition-colors"
              >
                Explore K-12 Solutions
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80"
                  alt="Security consultant"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 glass p-5 rounded border border-electric-blue/20">
                <div className="font-display text-electric-cyan text-3xl">98%</div>
                <div className="text-steel-silver text-xs mt-1">Client Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">
              Service Areas
            </h2>
            <p className="text-steel-silver">Proudly serving K-12 institutions across six states</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((state, i) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(229,62,62,0.4)' }}
                className="glass p-6 rounded text-center cursor-pointer border border-electric-blue/10"
              >
                <div className="font-display text-electric-cyan text-lg uppercase tracking-wider">{state}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-electric-cyan/30 text-8xl font-display leading-none mb-4">"</div>
            <p className="font-body text-xl text-steel-silver leading-relaxed mb-8 italic">
              Soulard Technology transformed how our district approaches security. Their budget-conscious approach delivered enterprise-grade access control across all 12 of our facilities.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-cyan font-display">JD</div>
              <div className="text-left">
                <div className="text-gray-900 font-semibold text-sm">James Davidson</div>
                <div className="text-steel-silver text-xs">Director of Safety, Metro School District</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-30" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wider mb-6">
              Ready to Secure<br />
              <span className="gradient-text">Your Institution?</span>
            </h2>
            <p className="text-steel-silver text-lg mb-10 max-w-xl mx-auto">
              Get a free security assessment and consultation for your K-12 facility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue hover:bg-electric-blue/90 text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-1"
            >
              Schedule Free Assessment
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", icon: "🛡" },
  { value: 500, suffix: "+", label: "Products In Stock", icon: "📦" },
  { value: 3, suffix: "", label: "Stocking Locations", icon: "📍" },
  { value: 98, suffix: "%", label: "Same-Day Ship Rate", icon: "⚡" },
];

const locations = [
  "Holland, MI",
  "St. Louis, MO",
  "Tampa, FL",
  "Ships Nationwide",
];

const testimonials = [
  {
    quote:
      "Soulard Electronic is our go-to source for Schlage hardware and HID credentials. Their inventory depth and same-day shipping keep our projects on schedule.",
    name: "Mark Williams",
    title: "Facilities Director, Commercial Property Group",
    initials: "MW",
  },
  {
    quote:
      "When we need a specific replacement part that no one else has in stock, Soulard comes through every time. Excellent product knowledge and fast turnaround.",
    name: "Jennifer Park",
    title: "Senior Security Technician, Regional Healthcare Network",
    initials: "JP",
  },
  {
    quote:
      "They stock everything we need — credentials, readers, locks, and door hardware. One call gets us same-day shipping. That reliability is priceless on a job site.",
    name: "David Torres",
    title: "Owner, Torres Security Integration",
    initials: "DT",
  },
];

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const t = testimonials[index];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (i: number) => {
    setIndex(i);
    resetTimer();
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="relative min-h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="font-body text-xl text-steel-silver leading-relaxed mb-8 italic">
              {t.quote}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-cyan font-display">
                {t.initials}
              </div>
              <div className="text-left">
                <div className="text-gray-900 font-semibold text-sm">
                  {t.name}
                </div>
                <div className="text-steel-silver text-xs">{t.title}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          onClick={() =>
            go((index - 1 + testimonials.length) % testimonials.length)
          }
          className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-electric-blue/50 text-steel-silver hover:text-electric-blue transition-colors"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
            <path
              d="M19 12H5M12 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "bg-electric-blue w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
        <button
          onClick={() => go((index + 1) % testimonials.length)}
          className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-electric-blue/50 text-steel-silver hover:text-electric-blue transition-colors"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Electronic security products"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div
          className="absolute inset-0 z-[1] opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse-slow z-[1]" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-cyan/5 rounded-full blur-3xl animate-pulse-slow z-[1]"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-[2] container mx-auto px-6 pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-electric-cyan" />
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">
                Electronic Security Products
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="font-display text-6xl sm:text-7xl md:text-8xl text-gray-900 uppercase leading-tight tracking-wider"
              >
                Securing
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={heroLoaded ? { y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.45,
                }}
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
              A stocking resource for end users — new and replacement electronic
              security products and commercial door hardware. Serving contractors
              and facilities professionals from three locations with fast
              nationwide shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric-blue hover:bg-electric-blue/90 text-white font-body font-semibold text-sm uppercase tracking-widest transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-0.5"
              >
                Browse Products
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-2">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-electric-blue text-electric-blue font-body font-semibold text-sm uppercase tracking-widest hover:bg-electric-blue/10 transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-16"
          >
            {locations.map((loc) => (
              <span
                key={loc}
                className="px-4 py-1.5 border border-electric-blue/30 text-electric-blue text-xs font-display tracking-[0.2em] uppercase hover:bg-red-500/10 hover:border-red-400/40 hover:text-red-500 transition-all duration-300 cursor-default"
              >
                {loc}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        >
          <span className="font-display text-gray-400 text-xs tracking-widest uppercase">
            Scroll
          </span>
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
                <div className="font-body text-steel-silver text-sm tracking-wide">
                  {stat.label}
                </div>
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
                heading: "Inventory",
                description:
                  "Large in-stock inventory of electronic security products and commercial door hardware — ready to ship the same day you order.",
                image:
                  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
                imageAlt: "Organized warehouse shelving with security product inventory",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                heading: "Quick Shipping",
                description:
                  "With the most products on the shelf and UPS delivery in 1–2 days, we eliminate unnecessary delays on your project.",
                image:
                  "https://images.unsplash.com/photo-1672136882892-4758ddd19826?w=800&q=80",
                imageAlt: "FedEx cargo airplane on runway for fast nationwide shipping",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                heading: "Parts",
                description:
                  "Whatever part, component, or accessory you need — new or replacement — if we don't stock it, we can typically get it to you in 1–2 days.",
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
                imageAlt: "Electronic security components and hardware parts",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy-800/20" />
                </div>
                <div className="flex flex-col items-start p-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-electric-blue/10 text-electric-blue mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-gray-900 text-lg uppercase tracking-wider mb-3">
                    {item.heading}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt="Commercial building"
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
              <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase block mb-4">
                What We Do
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-gray-900 uppercase tracking-wider mb-6">
                New &amp; Replacement
                <br />
                <span className="gradient-text">Security Products</span>
              </h2>
              <p className="text-steel-silver leading-relaxed mb-6">
                Soulard Electronic Security Products is a stocking distributor
                for end users, contractors, and facilities professionals. We
                carry a broad range of new and replacement electronic security
                products and commercial door hardware — all available to ship
                same day from our three locations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Allegion (Schlage) electronic locking hardware",
                  "HID Global credentials and readers",
                  "Von Duprin panic hardware and exit devices",
                  "LCN door closers and electrified hardware",
                  "Aiphone video intercom systems",
                  "BEA motion sensors and activators",
                  "Vanderbilt access control systems",
                  "Locknetics electrified locking products",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-steel-silver text-sm">
                    <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-electric-cyan text-sm font-display uppercase tracking-widest hover:text-gray-900 transition-colors"
              >
                View Full Product Catalog
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                </svg>
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
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
                  alt="Electronic security hardware"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-5 rounded border border-electric-blue/20">
                <div className="font-display text-electric-cyan text-3xl">
                  1–2 Day
                </div>
                <div className="text-steel-silver text-xs mt-1">
                  UPS Delivery Nationwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR LOCATIONS */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 uppercase tracking-wider mb-4">
              Our Locations
            </h2>
            <p className="text-steel-silver">
              Three stocking locations — fast UPS delivery to contractors and end users nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { city: "Holland", state: "Michigan", abbr: "MI" },
              { city: "St. Louis", state: "Missouri", abbr: "MO" },
              { city: "Tampa", state: "Florida", abbr: "FL" },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-8 rounded text-center cursor-default border border-electric-blue/10 hover:border-electric-blue/40 transition-all duration-300"
              >
                <div className="font-display text-electric-cyan text-3xl uppercase tracking-widest mb-1">
                  {loc.abbr}
                </div>
                <div className="font-display text-gray-900 text-sm uppercase tracking-wider">
                  {loc.city}
                </div>
                <div className="text-steel-silver text-xs mt-1">{loc.state}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-6">
          <TestimonialCarousel />
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
              Ready to Order?
              <br />
              <span className="gradient-text">Get a Quote Today.</span>
            </h2>
            <p className="text-steel-silver text-lg mb-10 max-w-xl mx-auto">
              Fast pricing and same-day shipping on electronic security products
              and commercial door hardware.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-electric-blue hover:bg-electric-blue/90 text-white font-display uppercase tracking-widest text-sm transition-all shadow-neon-blue hover:shadow-neon-cyan hover:-translate-y-1"
            >
              Request a Quote
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

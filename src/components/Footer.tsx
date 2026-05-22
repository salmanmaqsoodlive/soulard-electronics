import Link from 'next/link'
import Image from 'next/image'
import BrandsMarquee from '@/components/BrandsMarquee'

const locations = ['Holland, MI', 'St. Louis, MO', 'Tampa, FL']
const company = ['About Us', 'Industries', 'Products', 'Manufacturers']

export default function Footer() {
  return (
    <>
    <BrandsMarquee />
    <footer className="bg-navy-800 border-t border-electric-blue/20">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6 inline-block bg-white rounded px-3 py-2">
              <Image
                src="/logo.jpg"
                alt="Soulard Technology"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-steel-silver text-sm leading-relaxed mb-6">
              A stocking resource for end users — new and replacement electronic security products and commercial door hardware. Three locations. Ships nationwide.
            </p>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span key={loc} className="text-xs border border-electric-blue/30 text-electric-blue px-2 py-0.5 rounded">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-gray-900 text-sm tracking-widest uppercase mb-6 after:block after:w-8 after:h-px after:bg-electric-blue after:mt-2">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <Link href="/about" className="text-steel-silver text-sm hover:text-electric-blue transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gray-900 text-sm tracking-widest uppercase mb-6 after:block after:w-8 after:h-px after:bg-electric-blue after:mt-2">Contact</h4>
            <div className="space-y-4 text-sm text-steel-silver">
              <p>Holland, MI &bull; St. Louis, MO &bull; Tampa, FL</p>
              <div className="space-y-1">
                <a href="mailto:greg.hodge@soulardesp.com" className="block hover:text-electric-blue transition-colors">greg.hodge@soulardesp.com</a>
                <a href="mailto:taylor.hodge@soulardesp.com" className="block hover:text-electric-blue transition-colors">taylor.hodge@soulardesp.com</a>
              </div>
              <a href="tel:866-404-5519" className="block hover:text-electric-blue transition-colors">866-404-5519</a>
              <Link
                href="/contact"
                className="inline-block mt-4 px-5 py-2.5 border border-electric-blue/50 text-electric-blue text-xs uppercase tracking-widest hover:bg-electric-blue/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-electric-blue/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-silver/60 text-xs">
            © {new Date().getFullYear()} Soulard Electronic Security Products. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-steel-silver/60 text-xs hover:text-electric-blue transition-colors">Privacy Policy</Link>
            <Link href="/" className="text-steel-silver/60 text-xs hover:text-electric-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

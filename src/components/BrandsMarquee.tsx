import Image from 'next/image'

const additionalBrands = [
  'Adams Rite', 'Alarms Controls', 'Alarm Lock', 'Altronix', 'AWID',
  'Bommer', 'Bosch Security', 'Camden Controls', 'Command Access Technologies',
  'Corbin Russwin', 'Detex', 'Don Jo', 'Dynalock', 'Falcon', 'Folger Adam',
  'Glynn Johnson', 'Hager Companies', 'HES', 'ISONAS', 'Ives', 'Kantech',
  'Keedex', 'MS Sedco', 'Norton Rixson', 'Sargent', 'SDC',
  'Schlage Residential', 'Schlage Locks', 'Schlage Electronics', 'STI', 'Trine',
]

const brandLogos = [
  { src: '/Allegion.webp', alt: 'Allegion' },
  { src: '/Vanderbilt.webp', alt: 'Vanderbilt' },
  { src: '/Von_Duprin_Gray.webp', alt: 'Von Duprin' },
  { src: '/aiphone.webp', alt: 'Aiphone' },
  { src: '/bea.webp', alt: 'BEA' },
  { src: '/hid.webp', alt: 'HID' },
  { src: '/lcn.webp', alt: 'LCN' },
  { src: '/locknetics.webp', alt: 'Locknetics' },
  { src: '/schlage.webp', alt: 'Schlage' },
]

export default function BrandsMarquee() {
  return (
    <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-10 bg-electric-cyan" />
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">
            Trusted Partners
          </span>
          <div className="h-px w-10 bg-electric-cyan" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl text-gray-900 uppercase tracking-wider">
          Security Brands We Carry
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex items-center animate-marquee hover:[animation-play-state:paused]">
          {[...brandLogos, ...brandLogos].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-10 w-36 h-16 relative grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <Image src={brand.src} alt={brand.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Additional brands text marquee */}
      <div className="relative overflow-hidden mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex items-center animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...additionalBrands, ...additionalBrands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 mx-6 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-electric-blue opacity-50 flex-shrink-0" />
              <span className="font-body text-sm font-medium text-gray-400 hover:text-electric-blue transition-colors duration-300 whitespace-nowrap cursor-default tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: string
  subtitle?: string
  image?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, image, children }: Props) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-electric-cyan" />
          <span className="font-display text-electric-cyan text-xs tracking-[0.4em] uppercase">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-gray-900 uppercase tracking-wider mb-4">{title}</h1>
        {subtitle && <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

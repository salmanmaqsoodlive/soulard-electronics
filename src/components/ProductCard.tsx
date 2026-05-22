'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductCardProps {
  id: string
  title: string
  image: string
  icon: React.ReactNode
  items: string[]
}

export default function ProductCard({ id, title, image, icon, items }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false)
  const preview = items.slice(0, 3)
  const rest = items.slice(3)

  return (
    <div
      id={id}
      className="group bg-white border border-gray-200 hover:border-electric-blue/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col scroll-mt-24 h-full"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-electric-blue/20 group-hover:bg-electric-blue transition-colors duration-300" />

      {/* Image */}
      <div className="relative h-80 overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Title */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <div className="w-8 h-8 flex items-center justify-center bg-electric-blue/10 text-electric-blue flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-display text-gray-900 text-sm uppercase tracking-wider group-hover:text-electric-blue transition-colors duration-200">
          {title}
        </h3>
      </div>

      {/* Items */}
      <ul className="px-5 pt-4 space-y-2">
        {preview.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0 mt-[7px]" />
            {item}
          </li>
        ))}

        {expanded && rest.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full flex-shrink-0 mt-[7px]" />
            {item}
          </li>
        ))}
      </ul>

      {/* View More / Less button */}
      {rest.length > 0 && (
        <div className="px-5 pb-5 pt-3 mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-electric-blue hover:text-electric-blue/70 transition-colors"
          >
            {expanded ? 'View Less' : `View More (${rest.length})`}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* Spacer when no button or all items shown without button */}
      {rest.length === 0 && <div className="pb-5" />}
    </div>
  )
}

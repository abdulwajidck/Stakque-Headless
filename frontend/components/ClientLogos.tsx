'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Client logos configuration
// Add your logo files to /public/clients/ directory
const clientLogos = [
  { name: 'TechCorp', logo: '/clients/client-1.svg', alt: 'TechCorp Logo' },
  { name: 'StartupX', logo: '/clients/client-2.svg', alt: 'StartupX Logo' },
  { name: 'GrowthCo', logo: '/clients/client-3.svg', alt: 'GrowthCo Logo' },
  { name: 'ScaleUp', logo: '/clients/client-4.svg', alt: 'ScaleUp Logo' },
  { name: 'InnovateLabs', logo: '/clients/client-5.svg', alt: 'InnovateLabs Logo' },
  { name: 'DigitalFirst', logo: '/clients/client-6.svg', alt: 'DigitalFirst Logo' },
  { name: 'NextGen', logo: '/clients/client-7.svg', alt: 'NextGen Logo' },
  { name: 'FutureBrand', logo: '/clients/client-8.svg', alt: 'FutureBrand Logo' },
]

export default function ClientLogos() {
  const [loadedLogos, setLoadedLogos] = useState<Set<number>>(new Set())

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-sm text-emerald-400 font-mono tracking-widest uppercase mb-4">Trusted By</p>
          <h2 className="text-3xl lg:text-4xl font-manrope font-semibold text-white">
            Companies we've helped scale
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group relative min-h-[80px]"
            >
              {/* Try to load actual logo */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={120}
                  height={60}
                  className="opacity-60 group-hover:opacity-100 transition-opacity object-contain filter brightness-0 invert"
                  onError={() => {
                    setLoadedLogos(prev => {
                      const newSet = new Set(prev)
                      newSet.add(index)
                      return newSet
                    })
                  }}
                  style={{ display: loadedLogos.has(index) ? 'none' : 'block' }}
                />
                {/* Fallback text (shown if image fails to load) */}
                {loadedLogos.has(index) && (
                  <div className="text-white/40 group-hover:text-white/60 text-sm font-semibold transition-colors text-center">
                    {client.name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/40">
            Add your client logos to <code className="text-emerald-400 px-2 py-1 rounded bg-white/5">/public/clients/</code> as <code className="text-emerald-400 px-2 py-1 rounded bg-white/5">client-1.svg</code>, <code className="text-emerald-400 px-2 py-1 rounded bg-white/5">client-2.svg</code>, etc.
          </p>
        </div>
      </div>
    </section>
  )
}


import { getLocation, getLocations } from '@/lib/strapi'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Globe } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export async function generateStaticParams() {
  const locations = await getLocations()
  return locations.map((location) => ({
    slug: location.attributes.slug,
  }))
}

export default async function LocationPage({ params }: { params: { slug: string } }) {
  const location = await getLocation(params.slug)

  if (!location) {
    notFound()
  }

  const { 
    name, 
    city, 
    state, 
    country, 
    address, 
    description, 
    image, 
    coordinates,
    seo 
  } = location.attributes

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      {/* Location Header */}
      <section className="relative pt-32 pb-24 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              {name}
            </h1>

            {/* Location Info */}
            <div className="glass-panel rounded-3xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  {address && (
                    <p className="text-white/60 text-sm mb-2">{address}</p>
                  )}
                  <p className="text-white/60 text-sm">
                    {city}{state && `, ${state}`} {country}
                  </p>
                </div>
              </div>

              {coordinates && (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Coordinates</h3>
                    <p className="text-white/60 text-sm font-mono">
                      {coordinates.lat}, {coordinates.lng}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Location Image */}
            {image && (
              <div className="mb-8 rounded-3xl overflow-hidden">
                <Image
                  src={image.data.attributes.url}
                  alt={name}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {/* Description */}
            {description && (
              <div 
                className="prose prose-invert max-w-none text-white/70 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const location = await getLocation(params.slug)
  
  if (!location) {
    return { title: 'Location Not Found' }
  }

  const seo = location.attributes.seo
  const { name, city, state, country } = location.attributes
  
  return {
    title: seo?.metaTitle || `${name} | Stakque Office Location`,
    description: seo?.metaDescription || `Stakque office in ${city}${state ? `, ${state}` : ''} ${country}. ${seo?.metaDescription || ''}`,
    openGraph: {
      title: `${name} | Stakque`,
      description: `Stakque office location in ${city}${state ? `, ${state}` : ''} ${country}`,
      type: 'website',
    },
  }
}


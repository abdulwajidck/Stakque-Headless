import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPage } from '@/lib/strapi'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  // Join slug array to form the path string (e.g., "about" or "services/marketing")
  // Note: WP usually has flat slugs, but this handles nested if needed, though WP API uses last part usually.
  // For simplicity assuming flat slug for standard pages or taking the last segment.
  const slug = resolvedParams.slug[resolvedParams.slug.length - 1]
  const page = await getPage(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${page.attributes.title} | Stakque`,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug[resolvedParams.slug.length - 1]
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200">
      <BackgroundGradients />
      <Navigation />

      <main className="pt-32 pb-24 relative z-10">
        <article className="max-w-4xl mx-auto px-6 lg:px-10">
          <header className="mb-16 text-center">
            <h1 
              className="text-4xl lg:text-6xl font-manrope font-semibold tracking-tight text-white mb-8"
              dangerouslySetInnerHTML={{ __html: page.attributes.title }}
            />
            {page.attributes.featuredImage && (
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10">
                <Image
                  src={page.attributes.featuredImage.data.attributes.url}
                  alt={page.attributes.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none prose-emerald
              prose-headings:font-manrope prose-headings:font-semibold prose-headings:tracking-tight
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-6 prose-li:text-white/70 prose-li:marker:text-emerald-500
              prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/80"
            dangerouslySetInnerHTML={{ __html: page.attributes.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  )
}

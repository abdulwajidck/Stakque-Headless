import { getBlogPost, getBlogPosts } from '@/lib/strapi'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
      slug: post.attributes.slug,
    }))
  } catch (error) {
    // Return empty array if no posts available (e.g., during build without Strapi)
    console.warn('No blog posts available for static generation:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const { title, content, publishedAt, featuredImage, category, seo } = post.attributes

  return (
    <article className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      {/* Article Header */}
      <section className="relative pt-32 pb-24 z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="flex items-center gap-4 mb-6">
            {category && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400 border border-emerald-500/20">
                {category}
              </span>
            )}
            <span className="text-sm text-white/40 font-mono">
              {new Date(publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-manrope font-semibold text-white mb-8 leading-tight">
            {title}
          </h1>

          {/* Featured Image */}
          {featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={featuredImage.data.attributes.url}
                alt={title}
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-invert max-w-none text-white/70 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{
              '--tw-prose-headings': '#ffffff',
              '--tw-prose-links': '#10b981',
              '--tw-prose-bold': '#ffffff',
            } as React.CSSProperties}
          />
        </div>
      </section>

      <Footer />
    </article>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  const seo = post.attributes.seo
  return {
    title: seo?.metaTitle || post.attributes.title,
    description: seo?.metaDescription || post.attributes.excerpt || '',
  }
}


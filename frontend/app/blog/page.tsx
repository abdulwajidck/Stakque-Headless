import { getBlogPosts } from '@/lib/strapi'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const allPosts = await getBlogPosts()

  // Pagination
  const currentPage = parseInt(params.page || '1', 10)
  const postsPerPage = 12
  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = allPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">INSIGHTS & ANALYSIS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc33] to-[#520063]">Stakque</span> Blog
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Deep dives into performance marketing, engineering growth, and the science behind scalable acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative z-10 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          {paginatedPosts.length > 0 ? (
            <>
              <div className="mb-8 text-sm text-white/50">
                Showing {startIndex + 1}-{Math.min(endIndex, allPosts.length)} of {allPosts.length} posts
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.attributes.slug}`}
                    className="glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-300 block"
                  >
                    {post.attributes.featuredImage && (
                      <div className="w-full h-48 rounded-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center mb-6 overflow-hidden">
                        <Image
                          src={post.attributes.featuredImage.data.attributes.url}
                          alt={post.attributes.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      {post.attributes.category && (
                        <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400 border border-emerald-500/20">
                          {post.attributes.category}
                        </span>
                      )}
                      <span className="text-xs text-white/40 font-mono">
                        {new Date(post.attributes.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-manrope font-semibold text-white mb-3 group-hover:text-[#ffcc33] transition-colors">
                      {post.attributes.title}
                    </h3>
                    {post.attributes.excerpt && (
                      <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.attributes.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-[#ffcc33] font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="relative z-10 pb-32">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/blog?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  Previous
                </Link>
              )}
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Link
                        key={page}
                        href={`/blog?page=${page}`}
                        className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                          page === currentPage
                            ? 'bg-[#ffcc33] text-[#520063] border-[#ffcc33] font-semibold'
                            : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {page}
                      </Link>
                    )
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 text-white/40">
                        ...
                      </span>
                    )
                  }
                  return null
                })}
              </div>

              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Blog | Stakque Performance Agency',
  description: 'Deep dives into performance marketing, engineering growth, and the science behind scalable acquisition.',
}

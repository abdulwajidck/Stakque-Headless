import { getCaseStudy, getCaseStudies } from '@/lib/strapi'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, TrendingUp, Award, Zap, Code2, CheckCircle2, Quote, ArrowRight, BarChart3, Target, Users, Clock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.attributes.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const { 
    title, 
    clientName, 
    category,
    industry, 
    challenge, 
    approach, 
    results, 
    metrics, 
    testimonial,
    featuredImage,
    seo 
  } = caseStudy.attributes

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            {(category || industry) && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide uppercase">
                  {category || industry}
                </span>
              </div>
            )}
            <h1 className="text-5xl lg:text-6xl font-manrope font-semibold text-white mb-6 leading-tight">
              {title}
            </h1>
            {clientName && (
              <div className="flex items-center gap-4 text-white/60">
                <Users className="w-4 h-4" />
                <span className="text-sm">Client: {clientName}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      {metrics && (
        <section className="relative z-10 pb-16">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="glass-panel rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(metrics).map(([key, value]: [string, any], index) => {
                  const colorClasses = [
                    'text-emerald-400',
                    'text-blue-400',
                    'text-purple-400',
                    'text-orange-400'
                  ]
                  const colorClass = colorClasses[index % colorClasses.length]
                  return (
                    <div key={key} className="text-center">
                      <div className={`text-4xl font-mono font-semibold ${colorClass} mb-2`}>
                        {value}
                      </div>
                      <div className="text-sm text-white/50">{key}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {challenge && (
                <div className="glass-panel rounded-3xl p-8 lg:p-10 group hover:border-emerald-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-manrope font-semibold text-white">The Challenge</h3>
                      {clientName && <p className="text-sm text-white/50 mt-1">{clientName}</p>}
                    </div>
                  </div>
                  <div 
                    className="text-white/70 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: challenge }}
                  />
                </div>
              )}

              {approach && (
                <div className="glass-panel rounded-3xl p-8 lg:p-10 group hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-manrope font-semibold text-white">Our Approach</h3>
                      <p className="text-sm text-white/50 mt-1">E3 Implementation</p>
                    </div>
                  </div>
                  <div 
                    className="text-white/70 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: approach }}
                  />
                </div>
              )}

              {results && (
                <div className="glass-panel rounded-3xl p-8 lg:p-10 border-emerald-500/20 group hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-manrope font-semibold text-white">The Results</h3>
                      <p className="text-sm text-white/50 mt-1">Performance Metrics</p>
                    </div>
                  </div>
                  <div 
                    className="text-white/70 leading-relaxed prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: results }}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {featuredImage && (
                <div className="glass-panel rounded-3xl p-8 overflow-hidden group">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={featuredImage.data.attributes.url}
                      alt={title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              )}

              {testimonial && (
                <div className="glass-panel rounded-3xl p-8 border-emerald-500/10">
                  <div className="text-emerald-400 mb-4">
                    <Quote className="w-8 h-8" />
                  </div>
                  {testimonial.quote && (
                    <p className="text-lg text-white/80 leading-relaxed font-light mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  )}
                  {testimonial.author && (
                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-sm font-semibold text-emerald-400">
                        {testimonial.author.name?.charAt(0) || 'C'}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {testimonial.author.name}
                        </p>
                        {testimonial.author.role && (
                          <p className="text-xs text-white/40">{testimonial.author.role}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Stats Card */}
              <div className="glass-panel rounded-3xl p-8 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 border-emerald-500/20">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  Key Highlights
                </h4>
                <div className="space-y-4">
                  {metrics && Object.entries(metrics).slice(0, 4).map(([key, value]: [string, any], index) => (
                    <div key={key} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="text-sm text-white/60">{key}</span>
                      <span className="text-sm font-mono font-semibold text-emerald-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="glass-panel rounded-3xl p-8 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <h4 className="text-lg font-semibold text-white mb-4">Ready for similar results?</h4>
                <p className="text-sm text-white/60 mb-6">
                  Let's discuss how we can engineer growth for your brand.
                </p>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies / CTA Section */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
              Ready to see similar results?
            </h2>
            <p className="text-xl text-white/60 mb-10 font-light">
              Let's discuss how we can engineer growth for your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug)
  
  if (!caseStudy) {
    return { title: 'Case Study Not Found' }
  }

  const seo = caseStudy.attributes.seo
  return {
    title: seo?.metaTitle || `${caseStudy.attributes.title} | Stakque`,
    description: seo?.metaDescription || `Case study: ${caseStudy.attributes.title}`,
  }
}


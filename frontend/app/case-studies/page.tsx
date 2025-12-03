import { getCaseStudies } from '@/lib/strapi'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Award, CheckCircle2, Zap, Quote } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default async function CaseStudiesPage() {
  let caseStudies: any[] = []
  try {
    caseStudies = await getCaseStudies()
  } catch (error) {
    console.error('Failed to fetch case studies:', error)
    // Continue with empty array to show fallback UI
  }

  // Get featured case study (first one, or null if none)
  const featuredCaseStudy = caseStudies.length > 0 ? caseStudies[0] : null
  const otherCaseStudies = caseStudies.slice(1)

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
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PROVEN RESULTS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Results that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">speak</span> for themselves
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              We don't just promise growth—we engineer it. Here's how we've transformed performance for forward-thinking brands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="relative z-10 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-4xl font-mono font-semibold text-emerald-400 mb-2">285%</div>
              <div className="text-sm text-white/50">Average YoY Client Growth</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-4xl font-mono font-semibold text-blue-400 mb-2">$500M+</div>
              <div className="text-sm text-white/50">Ad Spend Managed</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-4xl font-mono font-semibold text-purple-400 mb-2">3.8x</div>
              <div className="text-sm text-white/50">Average ROAS Improvement</div>
            </div>
            <div className="glass-panel rounded-2xl p-6 text-center">
              <div className="text-4xl font-mono font-semibold text-orange-400 mb-2">-42%</div>
              <div className="text-sm text-white/50">Average CPA Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="relative z-10 pb-32">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Featured Case Study</span>
              <h2 className="text-4xl font-manrope font-semibold text-white mb-4">{featuredCaseStudy.attributes.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Case Study Content */}
              <div className="space-y-8">
                {featuredCaseStudy.attributes.challenge && (
                  <div className="glass-panel rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center border border-emerald-500/20">
                        <TrendingUp className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">The Challenge</h3>
                        {featuredCaseStudy.attributes.clientName && (
                          <p className="text-sm text-white/50">{featuredCaseStudy.attributes.clientName}</p>
                        )}
                      </div>
                    </div>
                    <div 
                      className="text-white/70 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: featuredCaseStudy.attributes.challenge }}
                    />
                  </div>
                )}

                {featuredCaseStudy.attributes.approach && (
                  <div className="glass-panel rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/20">
                        <Zap className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Our Approach</h3>
                        <p className="text-sm text-white/50">E3 Implementation</p>
                      </div>
                    </div>
                    <div 
                      className="text-white/70 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: featuredCaseStudy.attributes.approach }}
                    />
                  </div>
                )}

                {featuredCaseStudy.attributes.results && (
                  <div className="glass-panel rounded-3xl p-8 border-emerald-500/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/20">
                        <Award className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">The Results</h3>
                        <p className="text-sm text-white/50">Performance Metrics</p>
                      </div>
                    </div>
                    {featuredCaseStudy.attributes.metrics && (
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        {Object.entries(featuredCaseStudy.attributes.metrics).map(([key, value]: [string, any]) => (
                          <div key={key}>
                            <div className="text-3xl font-mono font-semibold text-emerald-400 mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-white/50">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div 
                      className="text-white/70 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: featuredCaseStudy.attributes.results }}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {featuredCaseStudy.attributes.featuredImage && (
                  <div className="glass-panel rounded-3xl p-8">
                    <Image
                      src={featuredCaseStudy.attributes.featuredImage.data.attributes.url}
                      alt={featuredCaseStudy.attributes.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                )}

                {featuredCaseStudy.attributes.testimonial && (
                  <div className="glass-panel rounded-3xl p-8">
                    <div className="text-emerald-400 mb-4">
                      <Quote className="w-8 h-8" />
                    </div>
                    {featuredCaseStudy.attributes.testimonial.quote && (
                      <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
                        "{featuredCaseStudy.attributes.testimonial.quote}"
                      </p>
                    )}
                    {featuredCaseStudy.attributes.testimonial.author && (
                      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-sm font-semibold">
                          {featuredCaseStudy.attributes.testimonial.author.name?.charAt(0) || 'C'}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {featuredCaseStudy.attributes.testimonial.author.name}
                          </p>
                          {featuredCaseStudy.attributes.testimonial.author.role && (
                            <p className="text-xs text-white/40">{featuredCaseStudy.attributes.testimonial.author.role}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <Link
                  href={`/case-studies/${featuredCaseStudy.attributes.slug}`}
                  className="glass-panel rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      Read Full Case Study
                    </span>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Case Studies Grid */}
      {otherCaseStudies.length > 0 && (
        <section className="relative z-10 pb-32">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <h2 className="text-3xl font-manrope font-semibold text-white">More Case Studies</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              {otherCaseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/case-studies/${caseStudy.attributes.slug}`}
                  className="glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-transform duration-300 block"
                >
                  {caseStudy.attributes.featuredImage && (
                    <div className="mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={caseStudy.attributes.featuredImage.data.attributes.url}
                        alt={caseStudy.attributes.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    {(caseStudy.attributes.category || caseStudy.attributes.industry) && (
                      <span className="px-2 py-1 rounded-full bg-blue-500/20 text-xs text-blue-400 border border-blue-500/20">
                        {caseStudy.attributes.category || caseStudy.attributes.industry}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-manrope font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {caseStudy.attributes.title}
                  </h3>
                  {caseStudy.attributes.clientName && (
                    <p className="text-white/50 text-sm mb-4">Client: {caseStudy.attributes.clientName}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {caseStudies.length === 0 && (
        <section className="relative z-10 pb-32">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
            <div className="glass-panel rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-manrope font-semibold text-white mb-4">Case Studies Coming Soon</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                We're currently compiling our case studies. Check back soon to see how we've helped brands scale their growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Results & Case Studies | Stakque Performance Agency',
  description: "We don't just promise growth—we engineer it. Here's how we've transformed performance for forward-thinking brands.",
}


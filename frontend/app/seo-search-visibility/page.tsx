import Link from 'next/link'
import { Search, TrendingUp, Target, Check, ArrowRight, Clock, BarChart3 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function SEOSearchVisibilityPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">SEO & SEARCH VISIBILITY</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Boost Your SEO Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Visibility</span> Today!
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Unlock the power of search engine optimization and skyrocket your website&apos;s visibility. Drive more traffic, attract the right audience, and dominate search rankings with proven SEO strategies tailored to your success.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Instant Insights</h4>
              <p className="text-white/60 text-sm">Make data-backed decisions with real-time analytics that track every campaign&apos;s impact.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Maximum ROI</h4>
              <p className="text-white/60 text-sm">Every dollar works smarter—optimize budgets and maximize conversions with precision targeting.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Scalable Success</h4>
              <p className="text-white/60 text-sm">Adapt and grow effortlessly with dynamic strategies that evolve alongside market trends.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Why Keyword Research is the Key to SEO Success</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Unlock the true potential of your website by understanding how keyword research shapes search visibility. By targeting the right terms, you attract the right audience, boost engagement, and rank higher on search engines.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Aligns with User Intent:</strong> Target keywords that match what your audience is actually searching for.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Boosts Search Rankings:</strong> Strategic keyword optimization helps your pages rank higher in search results.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Maximizes Conversions:</strong> High-intent keywords attract visitors more likely to convert into customers.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Maximize Keyword Visibility & Dominate Rankings</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Unlock the power of strategic keyword growth to boost your search rankings and drive targeted traffic. By leveraging high-performing keywords, your brand gains visibility, credibility, and conversions.
            </p>
            <Link 
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-200"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Grow your business today
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Unlock new opportunities, attract more customers, and scale your business with our expert-driven solutions. Let&apos;s make growth effortless.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'SEO & Search Visibility Services | Stakque Digital',
  description: 'Unlock the power of search engine optimization and skyrocket your website\'s visibility. Drive more traffic, attract the right audience, and dominate search rankings.',
}


import Link from 'next/link'
import { ArrowRight, Home, Search, Code2, TrendingUp, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function NotFound() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10 min-h-[80vh] flex items-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Number with gradient */}
            <div className="mb-8">
              <h1 className="text-9xl lg:text-[12rem] font-manrope font-bold leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500">
                  404
                </span>
              </h1>
            </div>

            {/* Main Message */}
            <div className="mb-12 animate-[slideUp_0.8s_ease-out_both]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PAGE NOT FOUND</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-manrope font-semibold text-white mb-6 leading-tight">
                Looks like this page
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                  didn't convert
                </span>
              </h2>

              <p className="text-lg lg:text-xl text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
                The page you're looking for has been optimized out of existence. Don't worry—we're all about performance, even when it comes to 404s.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link 
                href="/"
                className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Home className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Go Home</h3>
                <p className="text-sm text-white/50">Return to the homepage</p>
              </Link>

              <Link 
                href="/solutions"
                className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Solutions</h3>
                <p className="text-sm text-white/50">Explore what we do</p>
              </Link>

              <Link 
                href="/case-studies"
                className="glass-panel rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-sm text-white/50">See our results</p>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-200 shadow-lg"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link 
                href="/book-consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Fun Stats */}
            <div className="mt-16 pt-12 border-t border-white/5">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-mono font-semibold text-emerald-400 mb-2">0%</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Bounce Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono font-semibold text-blue-400 mb-2">∞</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-mono font-semibold text-purple-400 mb-2">404</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Error Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <Footer />
    </div>
  )
}


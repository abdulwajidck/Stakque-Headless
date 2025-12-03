import Link from 'next/link'
import { BarChart3, Target, TrendingUp, Check, ArrowRight, Search, DollarSign } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function PerformanceAuditPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PERFORMANCE AUDIT</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Optimize Your Marketing with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Performance Audit</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              A performance audit empowers brands to stay ahead by assessing the success of their marketing campaigns. By analyzing key data and metrics, it provides insights into ad performance, highlights areas for optimization, and helps reduce unnecessary ad spend.
            </p>
            <Link 
              href="#audit-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-200"
            >
              Apply For Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">What makes our Audit stand out?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Our audit provides in-depth, data-driven insights to optimize marketing performance and maximize ROI. With a focus on efficiency, competitive benchmarking, and continuous improvement, we help brands stay ahead of the curve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <BarChart3 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Data-Driven Insights</h4>
              <p className="text-white/60 text-sm">We analyze real-time data and key performance metrics to provide actionable recommendations for better decision-making.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Competitive & Industry Benchmarking</h4>
              <p className="text-white/60 text-sm">We benchmark your performance against industry leaders to identify growth opportunities and keep you ahead.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Performance & Cost Optimization</h4>
              <p className="text-white/60 text-sm">Our audit optimizes your campaigns by reducing wasted ad spend and maximizing ROI.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Tailored Strategies for Growth</h4>
              <p className="text-white/60 text-sm">Our audit provides personalized recommendations and a clear roadmap for continuous improvement.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Our Performance Marketing Case Studies</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Explore how our data-driven strategies have helped brands optimize campaigns, reduce ad spend waste, and maximize ROI. Our case studies showcase real results, demonstrating the power of performance marketing in driving measurable business growth.
            </p>
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-200"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Do You Qualify?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Apply now if your business meets the criteria and unlock valuable marketing insights!
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-panel rounded-2xl p-6 bg-emerald-500/5 border-emerald-500/20">
                <DollarSign className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Ad Spend</h3>
                <p className="text-white/60 text-sm">Apply if you spend ₹3,00,000 or more monthly.</p>
              </div>
              <div className="glass-panel rounded-2xl p-6 bg-blue-500/5 border-blue-500/20">
                <TrendingUp className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Business Age</h3>
                <p className="text-white/60 text-sm">Eligible for businesses that have been operating for over one year.</p>
              </div>
            </div>
          </div>

          <div id="audit-form" className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Get Your Performance Audit Today</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Share your details below and let our experts evaluate your campaigns. We&apos;ll identify growth opportunities and provide a clear action plan for improvement.
            </p>
            <Link 
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all duration-200"
            >
              Apply For Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Ready to optimize your marketing?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Get a comprehensive performance audit and discover opportunities to reduce costs, improve ROI, and scale your campaigns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Book a Consultation
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
  title: 'Performance Audit Services | Stakque Digital',
  description: 'Optimize your marketing with a comprehensive performance audit. Analyze key metrics, identify optimization opportunities, and reduce unnecessary ad spend.',
}


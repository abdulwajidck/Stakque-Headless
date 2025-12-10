import Link from 'next/link'
import { Search, Database, FileText, CheckCircle, Server, Globe, ShieldCheck, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function EngagementPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PARTNERSHIP TIERS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Engagement <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">models</span> that align
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              We structure our partnerships to align incentives. We grow when you grow. Choose the model that fits your stage and scale.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 transition-all hover:border-white/20">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 mb-4 border border-white/5">One-time</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Diagnostic Audit</h3>
                <p className="text-sm text-white/50">Deep dive into your current account architecture and data integrity.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <Search className="w-5 h-5 text-white/40 shrink-0" />
                  Full Ad Account Analysis
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <Database className="w-5 h-5 text-white/40 shrink-0" />
                  Tracking & Pixel Verification
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <FileText className="w-5 h-5 text-white/40 shrink-0" />
                  Opportunity Roadmap
                </li>
              </ul>

              <Link href="/book-consultation" className="block w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all text-center">
                Book Audit
              </Link>
            </div>

            <div className="relative rounded-3xl bg-[#0F0F0F] border border-emerald-500/30 p-8 shadow-2xl shadow-emerald-900/10 scale-105 z-10">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl pointer-events-none"></div>
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-t-3xl"></div>
              
              <div className="mb-8 relative">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400 mb-4 border border-emerald-500/20">Most Common</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Growth Partner</h3>
                <p className="text-sm text-white/50">Full Integrated implementation. Monthly retainer + performance incentive.</p>
              </div>
              
              <ul className="space-y-4 mb-8 relative">
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <strong>Unified</strong> Team Structure
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  Daily Bid Management & Optimization
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  Creative Strategy & Feedback Loops
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  Custom Data Reporting Dashboard
                </li>
              </ul>

              <Link href="/book-consultation" className="block w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-emerald-500/25 relative text-center">
                Apply for Partnership
              </Link>
            </div>

            <div className="group relative rounded-3xl bg-[#0A0A0A] border border-white/5 p-8 transition-all hover:border-white/20">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 mb-4 border border-white/5">High Volume</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
                <p className="text-sm text-white/50">For brands spending $100k+/mo. Custom engineering and infrastructure.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <Server className="w-5 h-5 text-blue-400 shrink-0" />
                  Dedicated Engineering Resources
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <Globe className="w-5 h-5 text-blue-400 shrink-0" />
                  Global Market Expansion Strategy
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  Priority SLA & 24/7 Support
                </li>
              </ul>

              <Link href="/book-consultation" className="block w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-manrope font-semibold text-white mb-4">How It Works</h2>
            <p className="text-white/60">Our engagement process is designed for speed and transparency.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-mono font-semibold text-emerald-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Discovery Call</h3>
              <p className="text-sm text-white/50 leading-relaxed">30-minute conversation to understand your goals, challenges, and current setup.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-mono font-semibold text-blue-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Proposal & Alignment</h3>
              <p className="text-sm text-white/50 leading-relaxed">Custom proposal outlining recommended engagement model, timeline, and expected outcomes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-mono font-semibold text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Onboarding</h3>
              <p className="text-sm text-white/50 leading-relaxed">Rapid integration into your workflow. Access setup, team introductions, and kickoff within 48 hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-900/20 border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-mono font-semibold text-orange-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Execution & Growth</h3>
              <p className="text-sm text-white/50 leading-relaxed">Ongoing optimization, reporting, and strategic guidance. We grow together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Let's discuss which engagement model aligns with your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Engagement Models | Stakque Performance Agency',
  description: 'We structure our partnerships to align incentives. We grow when you grow. Choose the model that fits your stage and scale.',
}


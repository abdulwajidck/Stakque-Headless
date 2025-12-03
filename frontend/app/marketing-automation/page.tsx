import Link from 'next/link'
import { Zap, Clock, BarChart3, Check, ArrowRight, Mail, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function MarketingAutomationPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">MARKETING AUTOMATION</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Streamline Your Success with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Marketing Automation</span>!
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Supercharge your marketing efforts with automation that saves time, boosts efficiency, and drives results. Our expert solutions help you nurture leads, engage customers, and grow your business effortlessly—let&apos;s automate your growth today!
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Effortless Lead Nurturing</h4>
              <p className="text-white/60 text-sm">Automate personalized campaigns that guide leads through the funnel, turning prospects into loyal customers with ease.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Time-Saving Efficiency</h4>
              <p className="text-white/60 text-sm">Free up your team by automating repetitive tasks, so you can focus on strategy and creativity while driving better results.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Data-Driven Growth</h4>
              <p className="text-white/60 text-sm">Leverage actionable insights to optimize campaigns, increase engagement, and achieve measurable growth—all in real time.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Why Marketing Automation is the Key to Business Growth</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Unlock the potential of your marketing with automation that drives efficiency and results. By streamlining workflows and targeting the right audience, you save time, increase conversions, and scale your business effortlessly.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Saves Valuable Time:</strong> Automate repetitive tasks and focus on strategic initiatives that drive growth.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Increases Conversions:</strong> Personalized, timely messages nurture leads and guide them through the sales funnel.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Scales Your Efforts:</strong> Reach more customers with the same resources, maximizing your marketing ROI.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Maximize Your Marketing Impact & Dominate with Automation</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Unlock the power of marketing automation to supercharge your campaigns and drive growth. By streamlining workflows and delivering personalized experiences, we boost engagement, convert leads, and scale your success effortlessly.
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
  title: 'Marketing Automation Services | Stakque Digital',
  description: 'Supercharge your marketing efforts with automation that saves time, boosts efficiency, and drives results. Nurture leads, engage customers, and grow your business effortlessly.',
}


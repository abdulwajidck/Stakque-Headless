import Link from 'next/link'
import { Palette, Zap, TrendingUp, Check, ArrowRight, Monitor, Smartphone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function WebDesignDevelopmentPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">WEB DESIGN & DEVELOPMENT</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Elevate Your Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Stunning Web Design</span>!
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Transform your online presence with a website that captivates, converts, and grows your business. Our expert web design and development team crafts custom, user-friendly, and high-performing sites—tailored to make your brand shine. Let&apos;s build your digital success today!
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Palette className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Captivating Design</h4>
              <p className="text-white/60 text-sm">Grab attention with a visually stunning website that reflects your brand&apos;s unique identity and leaves a lasting impression.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Seamless User Experience</h4>
              <p className="text-white/60 text-sm">Keep visitors engaged with intuitive navigation and fast-loading pages, ensuring they stay longer and convert more.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Growth-Driven Performance</h4>
              <p className="text-white/60 text-sm">Drive measurable results with a website optimized for search engines, mobile devices, and conversions—built to scale with your business.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Why Web Design is the Key to Business Success</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Unlock the potential of your business with a website that drives results. By combining stunning design with seamless functionality, you attract more visitors, boost conversions, and establish a powerful online presence.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Attracts More Visitors:</strong> A well-designed website draws in potential customers and keeps them engaged.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Boosts Conversions:</strong> Intuitive design and clear calls-to-action guide visitors toward making a purchase or inquiry.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Strengthens Brand Credibility:</strong> A professional website builds trust and establishes your brand as a leader in your industry.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Maximize Your Online Impact & Dominate with Web Design</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Unlock the power of professional web design to elevate your brand&apos;s digital presence and drive growth. By crafting stunning, user-friendly websites, we boost engagement, attract more visitors, and turn clicks into loyal customers.
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
  title: 'Web Design & Development Services | Stakque Digital',
  description: 'Transform your online presence with a website that captivates, converts, and grows your business. Custom, user-friendly, and high-performing sites tailored to make your brand shine.',
}


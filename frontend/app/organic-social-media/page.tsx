import Link from 'next/link'
import { Users, Heart, Share2, Check, ArrowRight, TrendingUp, Target } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function OrganicSocialMediaPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">ORGANIC SOCIAL MEDIA</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Grow Your Brand with Organic Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Power</span>!
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Harness the strength of organic social media to build your brand, connect with your audience, and drive real engagement. Boost your online presence naturally and watch your business thrive—start today!
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Heart className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Authentic Engagement</h4>
              <p className="text-white/60 text-sm">Create meaningful connections with your audience through content that resonates. Drive likes, shares, and comments that amplify your brand&apos;s reach organically.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Cost-Effective Growth</h4>
              <p className="text-white/60 text-sm">Maximize your impact without paid ads. Our organic social media strategies help you grow your following and engagement while keeping costs low.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Sustainable Results</h4>
              <p className="text-white/60 text-sm">Build a foundation for long-term success. Our proven strategies ensure lasting growth that evolves with trends.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Why Organic Social Media is the Key to Brand Growth</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Tap into the power of organic social media to elevate your brand&apos;s presence. By creating authentic content and engaging your audience, you build trust, foster loyalty, and drive sustainable growth over time.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Builds Authentic Connections:</strong> Create genuine relationships with your audience through meaningful interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Drives Organic Engagement:</strong> Increase likes, shares, and comments without paid promotion.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Enhances Brand Loyalty:</strong> Consistent, valuable content builds trust and keeps your audience coming back.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Maximize Organic Reach & Dominate Social Engagement</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Unlock the power of organic social media to amplify your brand&apos;s reach and build a thriving community. By creating authentic, shareable content, you boost engagement, grow your following, and establish lasting credibility.
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
  title: 'Organic Social Media Services | Stakque Digital',
  description: 'Harness the strength of organic social media to build your brand, connect with your audience, and drive real engagement. Boost your online presence naturally.',
}


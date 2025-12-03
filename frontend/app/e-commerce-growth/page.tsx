import Link from 'next/link'
import { ShoppingCart, TrendingUp, Users, Check, ArrowRight, Zap, BarChart3 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function ECommerceGrowthPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">E-COMMERCE GROWTH</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Accelerate Your Online Store&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Success</span>!
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Unlock the full potential of your e-commerce business with strategies that drive sales, increase conversions, and enhance customer experiences. From optimized product listings to data-driven marketing, we help you scale effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Seamless Customer Journey</h4>
              <p className="text-white/60 text-sm">Deliver personalized shopping experiences that guide customers from discovery to purchase, increasing retention and satisfaction.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Operational Efficiency</h4>
              <p className="text-white/60 text-sm">Automate inventory management, order processing, and customer service to save time and optimize operations for peak performance.</p>
            </div>
            <div className="glass-panel rounded-3xl p-8 text-center">
              <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Data-Driven Sales Growth</h4>
              <p className="text-white/60 text-sm">Leverage analytics to track trends, optimize pricing, and enhance marketing efforts for higher engagement and revenue.</p>
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Why E-Commerce Growth is the Key to Business Success</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Unlock the full potential of your online store with strategies that drive sales, enhance customer experience, and maximize efficiency. By leveraging smart tools and data-driven insights, you can scale effortlessly, increase conversions, and achieve sustainable growth.
            </p>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Saves Time & Resources:</strong> Automation and optimization reduce manual work, allowing you to focus on growth.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Boosts Sales & Conversions:</strong> Optimized product pages, checkout flows, and marketing campaigns drive more revenue.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Optimizes Business Scalability:</strong> Systems and processes that grow with your business, from startup to enterprise.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-manrope font-semibold text-white mb-6">Accelerate Your E-Commerce Growth & Outshine the Competition</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Take your online store to the next level with strategies designed for success. Optimize your storefront, personalize customer experiences, and leverage data-driven insights to drive sales and boost retention. Whether you&apos;re scaling up or starting fresh, we empower your business to grow effortlessly.
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
  title: 'E-Commerce Growth Services | Stakque Digital',
  description: 'Unlock the full potential of your e-commerce business with strategies that drive sales, increase conversions, and enhance customer experiences. Scale effortlessly.',
}


import Link from 'next/link'
import { TrendingUp, Search, Code2, Zap, ShoppingCart, Users, BarChart3, ArrowRight, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

const legacyServices = [
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven performance marketing across all major ad platforms. Maximize ROI with AI-powered optimization and real-time campaign management.',
    link: '/performance-marketing',
    color: 'emerald',
    features: ['Google Ads Management', 'Meta Ads Optimization', 'TikTok & Programmatic', 'Real-time Analytics']
  },
  {
    icon: Search,
    title: 'SEO & Search Visibility',
    description: 'Boost your website\'s search engine visibility and dominate search rankings with proven SEO strategies tailored to your success.',
    link: '/seo-search-visibility',
    color: 'blue',
    features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO']
  },
  {
    icon: Code2,
    title: 'Web Design & Development',
    description: 'Custom web design and development services that combine beautiful aesthetics with high-performance engineering.',
    link: '/web-design-development',
    color: 'purple',
    features: ['Custom Web Design', 'E-commerce Development', 'CMS Integration', 'Performance Optimization']
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Streamline your marketing workflows with automated campaigns, email sequences, and CRM integrations that drive engagement.',
    link: '/marketing-automation',
    color: 'orange',
    features: ['Email Automation', 'CRM Setup', 'Workflow Automation', 'Lead Nurturing']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Growth',
    description: 'Accelerate your e-commerce growth with conversion optimization, cart abandonment recovery, and sales funnel enhancement.',
    link: '/e-commerce-growth',
    color: 'cyan',
    features: ['Conversion Optimization', 'Cart Abandonment', 'Product Feed Management', 'Sales Funnel Design']
  },
  {
    icon: Users,
    title: 'Organic Social Media',
    description: 'Build authentic brand presence and engage your audience through strategic organic social media management and content creation.',
    link: '/organic-social-media',
    color: 'pink',
    features: ['Content Strategy', 'Community Management', 'Social Media Audits', 'Engagement Optimization']
  },
  {
    icon: BarChart3,
    title: 'Performance Audit',
    description: 'Comprehensive performance audits that identify opportunities for improvement across your entire marketing stack.',
    link: '/performance-audit',
    color: 'yellow',
    features: ['Marketing Stack Audit', 'Campaign Analysis', 'Technical Review', 'ROI Assessment']
  }
]

export default function LegacyServicesPage() {
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
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">LEGACY SERVICES</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Standalone Services</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              While we specialize in integrated E3 performance marketing, we also offer standalone services for businesses looking for specific solutions. Explore our individual service offerings below.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legacyServices.map((service, index) => {
              const Icon = service.icon
              const colorClasses = {
                emerald: 'bg-emerald-900/20 border-emerald-500/20 text-emerald-400',
                blue: 'bg-blue-900/20 border-blue-500/20 text-blue-400',
                purple: 'bg-purple-900/20 border-purple-500/20 text-purple-400',
                orange: 'bg-orange-900/20 border-orange-500/20 text-orange-400',
                cyan: 'bg-cyan-900/20 border-cyan-500/20 text-cyan-400',
                pink: 'bg-pink-900/20 border-pink-500/20 text-pink-400',
                yellow: 'bg-yellow-900/20 border-yellow-500/20 text-yellow-400'
              }
              
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-manrope font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 text-sm text-white/50 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Looking for Integrated Solutions?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Our E3 Model combines multiple services into a unified performance marketing system. Explore our comprehensive approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/solutions" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              View E3 Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/book-consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Legacy Services | Standalone Marketing Services | Stakque',
  description: 'Explore our standalone marketing services including Performance Marketing, SEO, Web Design, Marketing Automation, E-commerce Growth, Social Media, and Performance Audits.',
}


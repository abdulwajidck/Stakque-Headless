import Link from 'next/link'
import { TrendingUp, Palette, Database, GitBranch, Network, BarChart3, Check, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

const solutions = [
  {
    icon: TrendingUp,
    title: 'Media Buying & Optimization',
    description: 'Automated bid management across Meta, Google, TikTok, and programmatic platforms. Real-time optimization driven by machine learning and statistical significance.',
    color: 'emerald',
    features: ['Multi-platform campaign management', 'Automated bid rules & scripts', '24/7 monitoring & alerts']
  },
  {
    icon: Palette,
    title: 'Creative Strategy & Testing',
    description: 'Data-driven creative development with systematic testing frameworks. We identify winning concepts through hypothesis-driven experiments, not guesswork.',
    color: 'blue',
    features: ['Creative hypothesis framework', 'Statistical significance testing', 'Performance-based iteration']
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'Custom data pipelines, server-side tracking, and unified attribution models. Own your data, control your insights.',
    color: 'purple',
    features: ['Server-side tracking setup', 'Custom data warehouses', 'Real-time dashboards']
  },
  {
    icon: GitBranch,
    title: 'Attribution & Analytics',
    description: 'Multi-touch attribution models that reflect true customer journeys. Move beyond last-click to understand the full funnel.',
    color: 'orange',
    features: ['Multi-touch attribution', 'Incrementality testing', 'Contribution margin analysis']
  },
  {
    icon: Network,
    title: 'Account Architecture',
    description: 'Strategic campaign structure designed for scale. We build accounts that can grow from $10k to $1M+ monthly spend without restructuring.',
    color: 'cyan',
    features: ['Scalable campaign structures', 'Audience segmentation strategy', 'Budget allocation frameworks']
  },
  {
    icon: BarChart3,
    title: 'Performance Reporting',
    description: 'Custom dashboards that focus on what matters: contribution margin, net revenue, and actionable insights. No vanity metrics.',
    color: 'pink',
    features: ['Real-time performance dashboards', 'Automated weekly reports', 'Executive summaries']
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">COMPREHENSIVE SOLUTIONS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">solutions</span> that scale
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              From media buying to creative strategy, from data infrastructure to attribution modeling—we build end-to-end systems that drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const colorClasses = {
                emerald: 'bg-emerald-900/20 border-emerald-500/20 text-emerald-400',
                blue: 'bg-blue-900/20 border-blue-500/20 text-blue-400',
                purple: 'bg-purple-900/20 border-purple-500/20 text-purple-400',
                orange: 'bg-orange-900/20 border-orange-500/20 text-orange-400',
                cyan: 'bg-cyan-900/20 border-cyan-500/20 text-cyan-400',
                pink: 'bg-pink-900/20 border-pink-500/20 text-pink-400'
              }
              
              return (
                <div key={index} className="glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[solution.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-manrope font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{solution.description}</p>
                  <ul className="space-y-3 text-sm text-white/50">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${colorClasses[solution.color as keyof typeof colorClasses].split(' ')[2]}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Ready to transform your performance?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Let's discuss which solutions align with your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/engagement" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              View Engagement Models
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Solutions | Stakque Performance Agency',
  description: 'From media buying to creative strategy, from data infrastructure to attribution modeling—we build end-to-end systems that drive measurable growth.',
}


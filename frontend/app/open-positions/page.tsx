import Link from 'next/link'
import { ArrowRight, Zap, Code, Globe } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

const positions = [
  {
    title: 'Senior Performance Media Buyer',
    location: 'Remote • San Francisco, CA',
    type: 'Full-time',
    color: 'emerald',
    description: "Lead media buying strategy across Meta, Google, and TikTok. You'll manage $500k+ monthly ad spend, build automated bid systems, and optimize for contribution margin—not vanity metrics.",
    requirements: [
      '5+ years performance marketing experience',
      'Python/SQL proficiency preferred',
      'Data-driven optimization mindset'
    ]
  },
  {
    title: 'Data Engineer',
    location: 'Remote • Global',
    type: 'Full-time',
    color: 'blue',
    description: "Build data pipelines, attribution models, and custom dashboards. You'll work with Python, BigQuery, and server-side tracking to engineer competitive advantages through data infrastructure.",
    requirements: [
      '3+ years data engineering experience',
      'Python, SQL, and cloud platforms',
      'Marketing analytics background a plus'
    ]
  },
  {
    title: 'Creative Strategist',
    location: 'Remote • New York, NY',
    type: 'Full-time',
    color: 'purple',
    description: "Develop creative hypotheses and manage systematic testing frameworks. You'll bridge the gap between creative intuition and statistical rigor, turning concepts into scalable performance.",
    requirements: [
      '4+ years creative strategy experience',
      'Performance marketing background',
      'Data-driven creative testing mindset'
    ]
  },
  {
    title: 'Account Strategist',
    location: 'Remote • London, UK',
    type: 'Full-time',
    color: 'orange',
    description: "Serve as the primary embedded point of contact for client growth teams. You'll translate business goals into performance strategies and ensure seamless execution across all channels.",
    requirements: [
      '3+ years account management experience',
      'Performance marketing expertise',
      'Strong communication & analytical skills'
    ]
  }
]

export default function OpenPositionsPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">JOIN THE TEAM</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">performance</span> marketing
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              We're looking for obsessive problem solvers who love data as much as they love design. If you're ready to engineer growth at scale, you belong here.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => {
              const colorClasses = {
                emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20',
                blue: 'bg-blue-500/20 text-blue-400 border-blue-500/20',
                purple: 'bg-purple-500/20 text-purple-400 border-purple-500/20',
                orange: 'bg-orange-500/20 text-orange-400 border-orange-500/20'
              }
              
              return (
                <div key={index} className="glass-panel rounded-3xl p-8 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full ${colorClasses[position.color as keyof typeof colorClasses]} mb-3 border`}>
                        {position.type}
                      </span>
                      <h3 className="text-2xl font-manrope font-semibold text-white mb-2">{position.title}</h3>
                      <p className="text-sm text-white/50">{position.location}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{position.description}</p>
                  <ul className="space-y-2 mb-6 text-sm text-white/50">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/upload-resume" className={`inline-flex items-center gap-2 text-sm font-medium ${colorClasses[position.color as keyof typeof colorClasses].split(' ')[2]} hover:opacity-80 transition-colors`}>
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-manrope font-semibold text-white mb-4">Why Stakque?</h2>
            <p className="text-white/60">We're building the future of performance marketing, and we need the best minds to do it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Impact at Scale</h3>
              <p className="text-sm text-white/50 leading-relaxed">Work on campaigns that drive millions in revenue. See your work directly impact client growth.</p>
            </div>
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Technical Excellence</h3>
              <p className="text-sm text-white/50 leading-relaxed">Build proprietary tools and systems. We invest in engineering, not just execution.</p>
            </div>
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Remote First</h3>
              <p className="text-sm text-white/50 leading-relaxed">Work from anywhere. We're distributed across 6 time zones, operating 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Don't see the right role?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd contribute.
          </p>
          <Link href="/upload-resume" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Open Positions | Stakque Performance Agency',
  description: "We're looking for obsessive problem solvers who love data as much as they love design. If you're ready to engineer growth at scale, you belong here.",
}


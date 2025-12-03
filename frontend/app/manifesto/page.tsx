import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

const principles = [
  {
    number: '01',
    title: 'Code Over Clicks',
    color: 'emerald',
    description: "If a task is repetitive, we automate it. If a process can be systematized, we engineer it. Manual media buying is dead. The future belongs to those who build systems, not those who manage spreadsheets.",
    details: "We write Python scripts for bid management. We build custom dashboards that update in real-time. We create data pipelines that eliminate manual reporting. Every hour spent on automation saves hundreds of hours in execution."
  },
  {
    number: '02',
    title: 'Radical Transparency',
    color: 'blue',
    description: "No black boxes. No hidden fees. No vanity metrics. You own your data, your ad accounts, and your attribution. We provide real-time dashboards that show the bad news as fast as the good.",
    details: "Transparency isn't just about reporting—it's about trust. When you can see exactly how every dollar is spent and every decision is made, you can make better strategic choices. We believe in showing you the truth, even when it's uncomfortable."
  },
  {
    number: '03',
    title: 'Scientific Method',
    color: 'purple',
    description: "We don't guess. Every creative test is a hypothesis. Every campaign is an experiment. We iterate based on statistical significance, not gut feeling.",
    details: "Growth is a science, not an art. We form hypotheses, run controlled experiments, measure results with statistical rigor, and iterate. If it can't be measured, it can't be improved. If it can't be improved, it's not worth doing."
  },
  {
    number: '04',
    title: 'Essential Metrics Only',
    color: 'orange',
    description: "Vanity metrics die here. We strip away the noise to focus purely on the essential levers that drive Net Revenue and Contribution Margin. If it doesn't impact the bottom line, we don't track it.",
    details: "Impressions don't pay salaries. Clicks don't pay rent. Only revenue matters. We measure what moves the needle: contribution margin, net revenue, and lifetime value. Everything else is distraction."
  },
  {
    number: '05',
    title: 'Embedded, Not External',
    color: 'emerald',
    description: "We don't function as a vendor. We operate as a tactical extension of your growth team. Shared Slack channels, weekly sprints, and deep cultural alignment mean zero friction and maximum speed.",
    details: "Traditional agencies stay on the outside. They send reports. They schedule meetings. They create distance. We embed ourselves in your workflow. We're in your Slack. We're in your sprints. We're part of your team, not a service provider."
  }
]

export default function ManifestoPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">OUR BELIEFS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Stakque</span> Manifesto
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Modern marketing is an engineering problem. Here's what we believe, and why we're different.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-16">
            {principles.map((principle, index) => {
              const colorClasses = {
                emerald: 'bg-emerald-900/20 border-emerald-500/20 text-emerald-400',
                blue: 'bg-blue-900/20 border-blue-500/20 text-blue-400',
                purple: 'bg-purple-900/20 border-purple-500/20 text-purple-400',
                orange: 'bg-orange-900/20 border-orange-500/20 text-orange-400'
              }
              
              return (
                <div key={index} className={`glass-panel rounded-3xl p-8 lg:p-12 ${index === principles.length - 1 ? 'border-emerald-500/20' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[principle.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                      <span className="text-xl font-mono font-semibold">{principle.number}</span>
                    </div>
                    <h2 className="text-3xl font-manrope font-semibold text-white">{principle.title}</h2>
                  </div>
                  <p className="text-lg text-white/70 leading-relaxed mb-4">{principle.description}</p>
                  <p className="text-white/60 leading-relaxed">{principle.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Ready to build the future?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            If these principles resonate with you, let's talk. We're always looking for partners who think differently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Our Manifesto | Stakque Performance Agency',
  description: "Modern marketing is an engineering problem. Here's what we believe, and why we're different.",
}


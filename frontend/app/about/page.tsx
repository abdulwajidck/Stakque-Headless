import Link from 'next/link'
import Image from 'next/image'
import { Code2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function AboutPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 animate-[slideUp_0.8s_ease-out_both]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
            <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">EST. 2021 • REMOTE FIRST</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
            We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">engines</span> <br />
            that power growth.
          </h1>

          <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Stakque was founded on a simple premise: Modern marketing is an engineering problem. We are a collective of data scientists, media buyers, and creatives bridging the gap between math and magic.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5 bg-white/[0.01]">
            <div>
              <div className="text-3xl font-mono font-medium text-white mb-1">500M+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-medium text-white mb-1">24</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Global Engineers</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-medium text-white mb-1">3x</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Avg. Client Scale</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-medium text-white mb-1">100%</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-semibold">Founder Led</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 h-[400px] lg:h-[600px]">
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Team collaborating"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white/80 font-mono text-sm mb-2">SAN FRANCISCO • HQ</p>
                <h3 className="text-2xl font-semibold text-white">Where data meets design.</h3>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="flex-1 relative rounded-3xl overflow-hidden border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Code on screen"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-white">Proprietary Tech</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative rounded-3xl bg-[#0F0F0F] border border-white/10 p-8 flex flex-col justify-center">
                <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-lg text-white font-medium mb-2">Distributed Team</p>
                <p className="text-sm text-white/50 leading-relaxed">Operating across 6 time zones to ensure 24/7 campaign optimization and monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-24 relative border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-manrope font-semibold text-white mb-4">Our DNA</h2>
              <p className="text-white/60 max-w-xl">We aren't a traditional agency. We operate like a software company, prioritizing systems over manual labor.</p>
            </div>
            <div className="hidden md:block">
              <Link href="/open-positions" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-2">
                See how we work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Code over Clicks</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                If a task is repetitive, we automate it. By building custom scripts for bid management, our strategists spend time on strategy, not spreadsheets.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Radical Transparency</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                No black boxes. You own your data, your ad accounts, and your attribution. We provide real-time dashboards that show the bad news as fast as the good.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-purple-900/20 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scientific Method</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                We don't guess. Every creative test is a hypothesis. Every campaign is an experiment. We iterate based on statistical significance, not gut feeling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Ready to build the future?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            We are always looking for obsessive problem solvers. If you love data as much as you love design, you belong here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/open-positions" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              View Open Positions
            </Link>
            <Link href="/manifesto" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              Read our Manifesto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'About Stakque | The Team Behind the Tech',
  description: 'Stakque was founded on a simple premise: Modern marketing is an engineering problem. We are a collective of data scientists, media buyers, and creatives bridging the gap between math and magic.',
}


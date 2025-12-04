'use client'

import Link from 'next/link'
import { ChevronDown, CheckCircle2, TrendingUp, ArrowDownRight, Zap, Users, Merge, Target, Focus, Cpu, Code2, Check, Search, Database, FileText, Server, Globe, ShieldCheck, Quote, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'
import ClientLogos from '@/components/ClientLogos'
import { useEffect, useRef } from 'react'

export default function HomePage() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<any>(null)

  useEffect(() => {
    let chartInstance: any = null

    if (typeof window !== 'undefined' && chartRef.current) {
      import('chart.js').then((ChartModule) => {
        const Chart = ChartModule.Chart
        const CategoryScale = ChartModule.CategoryScale
        const LinearScale = ChartModule.LinearScale
        const LineElement = ChartModule.LineElement
        const PointElement = ChartModule.PointElement
        const LineController = ChartModule.LineController
        const Filler = ChartModule.Filler
        const Tooltip = ChartModule.Tooltip
        const Legend = ChartModule.Legend

        // Register required components
        Chart.register(
          CategoryScale,
          LinearScale,
          LineElement,
          PointElement,
          LineController,
          Filler,
          Tooltip,
          Legend
        )

        const ctx = chartRef.current
        if (!ctx) return

        // Destroy existing chart if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy()
          chartInstanceRef.current = null
        }

        const context = ctx.getContext('2d')
        if (!context) return

        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Google Ads',
              data: [2.8, 3.1, 3.0, 3.5, 3.9, 4.1, 3.8],
              borderColor: '#10B981',
              backgroundColor: (context: any) => {
                const chart = context.chart
                const {ctx, chartArea} = chart
                if (!chartArea) {
                  return 'rgba(16, 185, 129, 0.4)'
                }
                const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                gradient.addColorStop(0, 'rgba(16, 185, 129, 0.0)')
                gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.2)')
                gradient.addColorStop(1, 'rgba(16, 185, 129, 0.4)')
                return gradient
              },
              borderWidth: 2,
              pointBackgroundColor: '#050505',
              pointBorderColor: '#10B981',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverBackgroundColor: '#10B981',
              pointHoverRadius: 5,
              fill: true,
              tension: 0.4
            },
            {
              label: 'Meta Ads',
              data: [1.2, 1.5, 1.3, 1.8, 2.1, 2.5, 1.8],
              borderColor: '#3B82F6',
              borderWidth: 3,
              borderDash: [12, 6],
              pointRadius: 0,
              pointHoverRadius: 0,
              fill: false,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                titleColor: '#fff',
                bodyColor: '#9ca3af',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                usePointStyle: true
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                border: {
                  display: false
                },
                ticks: {
                  color: 'rgba(255,255,255,0.3)',
                  font: {
                    family: "'JetBrains Mono', monospace",
                    size: 10
                  }
                }
              },
              y: {
                min: 1.0,
                max: 4.5,
                ticks: {
                  stepSize: 0.5,
                  color: 'rgba(255,255,255,0.3)',
                  font: {
                    family: "'JetBrains Mono', monospace",
                    size: 10
                  }
                },
                grid: {
                  color: 'rgba(255,255,255,0.05)',
                  lineWidth: 1
                },
                border: {
                  display: false
                }
              }
            }
          }
        })

        chartInstanceRef.current = chartInstance
      })
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
        chartInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="max-w-3xl animate-[slideUp_0.8s_ease-out_both]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">PIONEERING PERFORMANCE</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcc33] to-[#520063]">E3 Model</span> for <br />
                Scalable Growth.
          </h1>

              <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl font-light">
                Stakque isn't just an agency. We are an Engineered performance partner.
                <span className="text-white/90"> Embedded</span> in your team, focusing on the <span className="text-white/90">Essential</span> metrics, driving results through <span className="text-white/90">Engineered</span> systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  href="#methodology" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20"
                >
                  Explore the Methodology
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <Link 
                  href="/case-studies" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>$500M+ Managed Ad Spend</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Proprietary Tech Stack</span>
                </div>
              </div>
            </div>

            {/* Hero Visual / Dashboard Mockup */}
            <div className="relative lg:h-[600px] w-full animate-[fadeIn_1.2s_ease-out_0.2s_both]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
              
              <div className="relative w-full h-full glass-panel rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-white font-semibold font-manrope">Performance Overview</h3>
                    <p className="text-xs text-white/40 mt-1 font-mono">LIVE DATA STREAM • Q1 2025</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/60">ROAS Focus</span>
                    <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-white/40 mb-1">Total Revenue</p>
                    <p className="text-2xl font-mono text-white">$4.2M</p>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +24%
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-white/40 mb-1">Blended ROAS</p>
                    <p className="text-2xl font-mono text-white">3.8x</p>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +0.4
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-white/40 mb-1">CPA</p>
                    <p className="text-2xl font-mono text-white">$42.10</p>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                      <ArrowDownRight className="w-3 h-3" /> -12%
                    </span>
                  </div>
                </div>

                <div className="flex-1 w-full min-h-[300px]">
                  <canvas ref={chartRef} id="performanceChart"></canvas>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-white/60">Meta Ads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs text-white/60">Google Ads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs text-white/60">TikTok</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-xs text-white/60">Programmatic</span>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-10 p-4 glass-panel rounded-xl animate-[float_6s_ease-in-out_infinite] hidden xl:block max-w-[240px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Optimization</p>
                    <p className="text-xs text-white/60 mt-1">Campaign &quot;Scale_Q3&quot; scaled by 15% based on CPA targets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The E3 Methodology Section */}
      <section id="methodology" className="py-32 relative border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-manrope font-semibold tracking-tight text-white mb-6">
              The <span className="text-emerald-400">E3</span> Model.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Traditional agencies stay on the outside. Stakque is different. Our proprietary framework ensures alignment, focus, and systematic execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* E1: Embedded */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/50 hover:to-transparent transition-all duration-500">
              <div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <Users className="w-24 h-24 text-emerald-500/20 -mr-8 -mt-8" />
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Merge className="w-6 h-6 text-emerald-400" />
                </div>
                
                <h3 className="text-2xl font-manrope font-semibold text-white mb-2">Embedded</h3>
                <p className="text-sm font-mono text-emerald-500 mb-6 tracking-wide uppercase">Total Integration</p>
                
                <p className="text-white/60 leading-relaxed">
                  We don't function as a vendor. We operate as a tactical extension of your growth team. Shared Slack channels, weekly sprints, and deep cultural alignment mean zero friction and maximum speed.
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Slack/Teams Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>In-house meeting cadence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E2: Essential */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-transparent transition-all duration-500">
              <div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <Target className="w-24 h-24 text-blue-500/20 -mr-8 -mt-8" />
                </div>

                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center border border-blue-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Focus className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-2xl font-manrope font-semibold text-white mb-2">Essential</h3>
                <p className="text-sm font-mono text-blue-500 mb-6 tracking-wide uppercase">Radical Focus</p>
                
                <p className="text-white/60 leading-relaxed">
                  Vanity metrics die here. We strip away the noise to focus purely on the essential levers that drive Net Revenue and Contribution Margin. If it doesn't impact the bottom line, we don't track it.
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Contribution Margin Focus</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span>Zero Vanity Reporting</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E3: Engineered */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-transparent transition-all duration-500">
              <div className="relative h-full bg-[#0A0A0A] rounded-[14px] p-8 border border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <Cpu className="w-24 h-24 text-purple-500/20 -mr-8 -mt-8" />
                </div>

                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center border border-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-manrope font-semibold text-white mb-2">Engineered</h3>
                <p className="text-sm font-mono text-purple-500 mb-6 tracking-wide uppercase">Systematic Scale</p>
                
                <p className="text-white/60 leading-relaxed">
                  Growth is a science, not art. We leverage Python-based bid scripting, server-side tracking, and custom data lakes to engineer advantages that manual media buying simply cannot compete with.
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>Automated Rules & Scripts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span>CAPI & Server-side Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Proof Section */}
      <section id="results" className="py-24 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid xl:grid-cols-4 gap-6">
            <div className="xl:col-span-2 glass-panel rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-sm font-mono text-emerald-400">AGENCY PERFORMANCE</span>
                </div>
                <h3 className="text-4xl lg:text-6xl font-manrope font-light text-white leading-tight">
                  We don't guess.<br />
                  We <span className="text-white/40">engineer</span> outcomes.
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <p className="text-5xl font-mono text-white mb-2">285%</p>
                  <p className="text-sm text-white/50">Average YoY Client Growth</p>
                </div>
                <div>
                  <p className="text-5xl font-mono text-white mb-2">$500M+</p>
                  <p className="text-sm text-white/50">Ad Spend Managed</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div className="text-emerald-400 mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                &quot;Stakque's Embedded model changed everything. They aren't an agency; they are the most technical members of our marketing team. The CPA reduction was immediate.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">JD</div>
                <div>
                  <p className="text-sm font-semibold text-white">James Dalton</p>
                  <p className="text-xs text-white/40">CMO, FinTech Scale-up</p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div className="text-blue-400 mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                &quot;The engineering approach to creative testing and bid management allowed us to scale spend by 4x while maintaining our efficiency targets. Pure science.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">ES</div>
                <div>
                  <p className="text-sm font-semibold text-white">Elena S.</p>
                  <p className="text-xs text-white/40">Founder, E-com Brand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section id="engagement" className="py-32 relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">Partnership Tiers</span>
            <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">Engagement Models</h2>
            <p className="text-white/60 mb-4">We structure our partnerships to align incentives. We grow when you grow.</p>
            <Link href="/engagement" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              View All Engagement Models <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

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
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#ffcc33] to-[#520063] rounded-t-3xl"></div>
              
              <div className="mb-8 relative">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400 mb-4 border border-emerald-500/20">Most Common</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Growth Partner</h3>
                <p className="text-sm text-white/50">Full E3 implementation. Monthly retainer + performance incentive.</p>
              </div>
              
              <ul className="space-y-4 mb-8 relative">
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <strong>Embedded</strong> Team Structure
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  Daily Bid Management & Optimization
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  Creative Strategy & Feedback Loops
                </li>
                <li className="flex items-start gap-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
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

      <ClientLogos />

      <Footer />
    </div>
  )
}

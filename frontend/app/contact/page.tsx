'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, Send, Clock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    monthlySpend: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">LET'S BUILD TOGETHER</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-manrope font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">scale</span> your growth?
            </h1>

            <p className="text-lg lg:text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Whether you're looking to optimize existing campaigns or build a new performance engine from scratch, we're here to help. Let's discuss how the E3 model can transform your marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-manrope font-semibold text-white mb-4">Send us a message</h2>
                <p className="text-white/60">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="monthlySpend" className="block text-sm font-medium text-white/80 mb-2">Monthly Ad Spend</label>
                  <select
                    id="monthlySpend"
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({...formData, monthlySpend: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="0-10k">$0 - $10k</option>
                    <option value="10k-50k">$10k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k+">$500k+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                    placeholder="Tell us about your goals and challenges..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/25">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass-panel rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <a href="mailto:hello@stakque.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm">hello@stakque.com</a>
                    <p className="text-white/50 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                    <a href="tel:+14155551234" className="text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm">+1 (415) 555-1234</a>
                    <p className="text-white/50 text-sm mt-1">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6">Our Offices</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">San Francisco</h4>
                      <p className="text-white/50 text-sm">123 Market Street, Suite 400<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">New York</h4>
                      <p className="text-white/50 text-sm">456 Broadway, Floor 12<br />New York, NY 10013</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">London</h4>
                      <p className="text-white/50 text-sm">789 King's Road<br />London, UK SW3 4RD</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Remote</h4>
                      <p className="text-white/50 text-sm">We work across 6 time zones<br />24/7 campaign optimization</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-8 border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Response Time</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  We understand that growth doesn't wait. Our team commits to responding to all inquiries within 24 hours, with priority support for enterprise clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-manrope font-semibold text-white mb-6">
            Not sure where to start?
          </h2>
          <p className="text-xl text-white/60 mb-10 font-light">
            Book a free 30-minute consultation to discuss your goals and see if we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100">
              Schedule a Call
            </Link>
            <Link href="/#methodology" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5">
              Learn More About E3
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


'use client'

import { useState } from 'react'
import { ArrowRight, Upload, CheckCircle2, FileText, Linkedin, User, Mail, Phone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function UploadResumePage() {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-[slideUp_0.8s_ease-out_both]">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm mx-auto">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">CAREERS</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-manrope font-semibold tracking-tight text-white mb-6">
              Join the <span className="text-emerald-400">Team</span>
            </h1>
            <p className="text-lg text-white/60 font-light">
              Submit your application below. We review every submission personally.
            </p>
          </div>

          <div className="max-w-xl mx-auto glass-panel rounded-3xl p-8 lg:p-12 animate-[fadeIn_1s_ease-out_0.2s_both]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <User className="w-4 h-4 text-emerald-400" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" /> Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="linkedin" className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-emerald-400" /> LinkedIn URL
                </label>
                <input 
                  type="url" 
                  id="linkedin" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" /> Resume / CV
                </label>
                <div 
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                    dragActive 
                      ? 'border-emerald-500 bg-emerald-500/10' 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                  } ${file ? 'border-emerald-500/50 bg-emerald-900/10' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input 
                    type="file" 
                    id="resume" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                  
                  {file ? (
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      <p className="text-white font-medium">{file.name}</p>
                      <p className="text-xs text-white/40">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8 text-white/40 mb-2" />
                      <p className="text-white font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-white/40">PDF, DOCX up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium text-white/80">Cover Letter (Optional)</label>
                <textarea 
                  id="coverLetter" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us why you're a great fit..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] mt-4"
              >
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

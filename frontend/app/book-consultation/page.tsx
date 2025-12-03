'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar, Clock, User, Building, Target, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

type Step = 1 | 2 | 3 | 4

export default function BookConsultationPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    monthlySpend: '',
    primaryGoal: '',
    currentChallenges: '',
    preferredDate: '',
    preferredTime: '',
    timezone: 'PST',
    additionalInfo: ''
  })

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with your booking system
    console.log('Booking submitted:', formData)
    setCurrentStep(4)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.company
      case 2:
        return formData.monthlySpend && formData.primaryGoal
      case 3:
        return formData.preferredDate && formData.preferredTime
      default:
        return true
    }
  }

  const steps = [
    { number: 1, title: 'Your Info', icon: User },
    { number: 2, title: 'Business Details', icon: Building },
    { number: 3, title: 'Schedule', icon: Calendar },
    { number: 4, title: 'Confirm', icon: CheckCircle2 }
  ]

  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.number
                  const isCompleted = currentStep > step.number
                  
                  return (
                    <div key={step.number} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                          isActive 
                            ? 'bg-emerald-500 border-emerald-500 text-white' 
                            : isCompleted
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                            : 'bg-white/5 border-white/10 text-white/40'
                        }`}>
                          {isCompleted ? (
                            <Check className="w-6 h-6" />
                          ) : (
                            <Icon className="w-5 h-5" />
                          )}
                        </div>
                        <span className={`text-xs mt-2 font-medium ${
                          isActive ? 'text-white' : 'text-white/40'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`h-0.5 flex-1 mx-4 ${
                          isCompleted ? 'bg-emerald-500' : 'bg-white/10'
                        }`} />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-manrope font-semibold text-white mb-2">Tell us about yourself</h2>
                    <p className="text-white/60">We'll use this information to personalize your consultation.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Company *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="Your Company"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Job Title</label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="Marketing Director"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-manrope font-semibold text-white mb-2">Business Details</h2>
                    <p className="text-white/60">Help us understand your current situation and goals.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Monthly Ad Spend *</label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="0-10k">$0 - $10k</option>
                      <option value="10k-50k">$10k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Primary Goal *</label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      required
                    >
                      <option value="">Select your primary goal</option>
                      <option value="scale-growth">Scale Growth</option>
                      <option value="optimize-performance">Optimize Performance</option>
                      <option value="reduce-cpa">Reduce CPA</option>
                      <option value="improve-roas">Improve ROAS</option>
                      <option value="new-campaigns">Launch New Campaigns</option>
                      <option value="account-structure">Improve Account Structure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Current Challenges</label>
                    <textarea
                      value={formData.currentChallenges}
                      onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                      placeholder="What challenges are you facing with your current marketing efforts?"
                    />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-manrope font-semibold text-white mb-2">Schedule Your Consultation</h2>
                    <p className="text-white/60">Choose a date and time that works best for you. Consultations are 30 minutes.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Preferred Time *</label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleInputChange('preferredTime', time)}
                          className={`px-4 py-2 rounded-lg border transition-all ${
                            formData.preferredTime === time
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                              : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Timezone</label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    >
                      <option value="PST">Pacific Time (PST)</option>
                      <option value="MST">Mountain Time (MST)</option>
                      <option value="CST">Central Time (CST)</option>
                      <option value="EST">Eastern Time (EST)</option>
                      <option value="GMT">GMT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Additional Information</label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                      placeholder="Anything else we should know?"
                    />
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-manrope font-semibold text-white mb-2">Consultation Booked!</h2>
                    <p className="text-white/60">We've received your booking request and will send a confirmation email shortly.</p>
                  </div>
                  <div className="glass-panel rounded-xl p-6 mt-8 text-left">
                    <h3 className="text-lg font-semibold text-white mb-4">Booking Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/60">Name:</span>
                        <span className="text-white">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Email:</span>
                        <span className="text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Company:</span>
                        <span className="text-white">{formData.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Date & Time:</span>
                        <span className="text-white">{formData.preferredDate} at {formData.preferredTime} {formData.timezone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-200 hover:bg-gray-100"
                    >
                      Back to Home
                    </Link>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full transition-all duration-200 hover:bg-white/5"
                    >
                      View Case Studies
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/5">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                      currentStep === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={currentStep === 3 ? handleSubmit : handleNext}
                    disabled={!isStepValid()}
                    className={`inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25'
                        : 'opacity-50 cursor-not-allowed bg-white/5 text-white/40'
                    }`}
                  >
                    {currentStep === 3 ? 'Book Consultation' : 'Continue'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


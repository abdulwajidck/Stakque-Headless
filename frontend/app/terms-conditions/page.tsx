import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen antialiased bg-[#050505] text-white font-inter selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <BackgroundGradients />
      <Navigation />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 z-10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto animate-[slideUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide">LEGAL</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-manrope font-semibold text-white mb-6 leading-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Conditions</span>
            </h1>

            <p className="text-sm text-white/50 mb-12">
              <strong>Last Updated:</strong> 25/10/2025
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="prose prose-invert max-w-none space-y-12">
            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <p className="text-white/70 leading-relaxed mb-6">
                Welcome to <strong className="text-white">Stakque Digital Pvt. Ltd.</strong> (&quot;Stakque&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using our website <a href="https://stakque.com/" className="text-emerald-400 hover:text-emerald-300">www.stakque.com</a>, submitting any inquiry, or engaging our services, you (&quot;Client&quot;, &quot;you&quot;, &quot;your&quot;) agree to these Terms & Conditions (&quot;Terms&quot;). Please read them carefully before proceeding.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">1. Services</h2>
              <p className="text-white/70 leading-relaxed mb-4">1.1 We offer professional digital marketing, web development, and associated services, including:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Performance Marketing (Google, Meta, LinkedIn, and YouTube Ads)</li>
                <li>Web Design & Development (UI/UX, eCommerce, CMS websites)</li>
                <li>SEO & Search Visibility (on-page, off-page, technical optimization)</li>
                <li>Marketing Automation (CRM setup, email flows, WhatsApp automation)</li>
                <li>Social Media Management (organic growth, content, and strategy)</li>
                <li>E-commerce Growth & Analytics</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">1.2 The specific scope, timelines, deliverables, and pricing for each engagement will be defined in a separate <strong className="text-white">Proposal</strong>, <strong className="text-white">Service Agreement</strong>, or <strong className="text-white">Statement of Work (SOW)</strong>.</p>
              <p className="text-white/70 leading-relaxed">1.3 Services will be provided with due professional care, skill, and diligence in line with industry standards. However, performance outcomes depend on multiple factors beyond our control.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">2. Client Responsibilities</h2>
              <p className="text-white/70 leading-relaxed mb-4">2.1 You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Provide accurate and complete project-related information, materials, and access credentials (Google Ads, Meta Business, Analytics, website, etc.) in a timely manner.</li>
                <li>Review and approve work within reasonable timeframes.</li>
                <li>Ensure that all content, data, and materials provided do not infringe on third-party rights.</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">2.2 You acknowledge that delayed responses, incomplete data, or restricted access may affect timelines, results, and costs.</p>
              <p className="text-white/70 leading-relaxed">2.3 You agree <strong className="text-white">not</strong> to instruct Stakque to engage in misleading, illegal, or non-compliant marketing practices (spam, false claims, prohibited ad categories, etc.).</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">3. Fees, Payment & Refund Policy</h2>
              <p className="text-white/70 leading-relaxed mb-4">3.1 <strong className="text-white">Fees & Currency:</strong> All service fees and payments shall be made in the <strong className="text-white">currency mutually agreed</strong> between Stakque and the Client, as specified in the respective invoice, proposal, or service agreement.</p>
              <p className="text-white/70 leading-relaxed mb-4">3.2 <strong className="text-white">Exchange Rates & Transfer Fees:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>For international payments, all currency conversions will be based on the prevailing exchange rate at the time of transaction.</li>
                <li>The Client shall bear any applicable <strong className="text-white">bank transfer fees, gateway charges, or foreign exchange deductions</strong>.</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">3.3 <strong className="text-white">Payment Terms:</strong> Unless otherwise agreed, invoices must be cleared <strong className="text-white">prior to the commencement</strong> of the service cycle, or within the due date mentioned on the invoice.</p>
              <p className="text-white/70 leading-relaxed mb-4">3.4 <strong className="text-white">Ad Budgets:</strong> Advertising budgets (Google, Meta, LinkedIn, etc.) are <strong className="text-white">exclusive of service fees</strong> and must be paid directly to the respective platform or reimbursed to Stakque within <strong className="text-white">5 business days</strong> of invoicing, if advanced by Stakque.</p>
              <p className="text-white/70 leading-relaxed mb-4">3.5 <strong className="text-white">Refund Policy:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Once a project, campaign, or retainer has commenced, fees are <strong className="text-white">non-refundable</strong>.</li>
                <li>If a project is cancelled before initiation, refunds (if any) will be processed after deducting preparatory and administrative costs.</li>
                <li>Refunds do not apply to ongoing services, partially completed work, or monthly retainers.</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">3.6 <strong className="text-white">Late Payment:</strong> If payment is delayed beyond the due date, Stakque may:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Suspend or restrict ongoing services without notice, and/or</li>
                <li>Charge <strong className="text-white">1.5% monthly interest</strong> on outstanding balances.</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">4. Performance Disclaimer</h2>
              <p className="text-white/70 leading-relaxed mb-4">4.1 While we aim for measurable growth and success, <strong className="text-white">Stakque does not guarantee specific results</strong>, such as exact rankings, ROAS, leads, conversions, or revenue figures.</p>
              <p className="text-white/70 leading-relaxed mb-4">4.2 Marketing results depend on numerous external variables including algorithm updates, competitor activity, budget allocation, and client-side changes.</p>
              <p className="text-white/70 leading-relaxed">4.3 All projections, KPIs, and estimates are <strong className="text-white">indicative</strong>, not contractual.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">5. Ownership & Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed mb-4">5.1 Stakque retains full ownership of all internal methods, templates, processes, frameworks, and software (&quot;Agency IP&quot;).</p>
              <p className="text-white/70 leading-relaxed mb-4">5.2 Upon <strong className="text-white">full and final payment</strong>, the Client will own the final approved deliverables (e.g., website, ad creatives, reports, designs, or marketing assets) specifically created for the Client under the Agreement.</p>
              <p className="text-white/70 leading-relaxed mb-4">5.3 Unless otherwise agreed, <strong className="text-white">project source files, credentials, and raw data remain with Stakque</strong> until all dues are cleared.</p>
              <p className="text-white/70 leading-relaxed mb-4">5.4 If the Client terminates the engagement before full payment, <strong className="text-white">ownership of work-in-progress will remain with Stakque</strong>.</p>
              <p className="text-white/70 leading-relaxed">5.5 Stakque may use anonymized results, visuals, or project data as part of its marketing and portfolio, unless a <strong className="text-white">non-disclosure agreement (NDA)</strong> restricts such usage.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">6. Confidentiality</h2>
              <p className="text-white/70 leading-relaxed mb-4">6.1 Both parties agree to treat all non-public information, data, and materials shared during the engagement as <strong className="text-white">strictly confidential</strong>.</p>
              <p className="text-white/70 leading-relaxed mb-4">6.2 Confidential information may not be disclosed to third parties without written consent, except as required by law or regulatory authorities.</p>
              <p className="text-white/70 leading-relaxed">6.3 This obligation continues for <strong className="text-white">two (2) years</strong> after the end of the engagement.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">7. Data Protection & Privacy</h2>
              <p className="text-white/70 leading-relaxed mb-4">7.1 Stakque complies with applicable Indian data protection laws and (where applicable) international standards such as GDPR.</p>
              <p className="text-white/70 leading-relaxed mb-4">7.2 Client data and user data collected through campaigns or websites will only be used for agreed business purposes.</p>
              <p className="text-white/70 leading-relaxed mb-4">7.3 Clients are responsible for ensuring compliance with privacy laws governing their target audience (cookie notices, consent forms, etc.).</p>
              <p className="text-white/70 leading-relaxed">7.4 Stakque&apos;s full <strong className="text-white">Privacy Policy</strong> (available on our website) governs how we handle data.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">8. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed mb-4">8.1 Stakque&apos;s total liability arising from any claim shall not exceed the total fees paid by the Client for the <strong className="text-white">preceding 12 months</strong>.</p>
              <p className="text-white/70 leading-relaxed mb-4">8.2 Stakque will not be liable for any indirect, consequential, or incidental losses including lost revenue, business interruption, or data loss.</p>
              <p className="text-white/70 leading-relaxed">8.3 Nothing in this clause limits liability for fraud, willful misconduct, or acts of gross negligence.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">9. Term, Termination & Suspension</h2>
              <p className="text-white/70 leading-relaxed mb-4">9.1 Either party may terminate the Service Agreement with <strong className="text-white">30 days&apos; written notice</strong>, unless otherwise specified.</p>
              <p className="text-white/70 leading-relaxed mb-4">9.2 Stakque may terminate or suspend services immediately if:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Payments are overdue beyond 15 days,</li>
                <li>The Client breaches any material clause of this Agreement,</li>
                <li>The Client&apos;s actions risk reputational or legal harm to Stakque.</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">9.3 Upon termination:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>All unpaid dues become immediately payable.</li>
                <li>Access to project files, ad accounts, or data may be withdrawn until payment completion.</li>
                <li>Ongoing campaigns or ad spends will be paused.</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">10. Platform & Third-Party Services</h2>
              <p className="text-white/70 leading-relaxed mb-4">10.1 Stakque uses third-party platforms (e.g., Google Ads, Meta Ads, hosting, automation tools). These are governed by the respective platform&apos;s terms and policies.</p>
              <p className="text-white/70 leading-relaxed mb-4">10.2 Stakque is not responsible for outages, policy changes, or account suspensions caused by third-party platforms.</p>
              <p className="text-white/70 leading-relaxed">10.3 Clients agree to comply with all applicable platform policies and content standards.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">11. Force Majeure</h2>
              <p className="text-white/70 leading-relaxed">Neither party shall be liable for failure or delay in performance due to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, cyberattacks, or platform bans.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">12. Indemnification</h2>
              <p className="text-white/70 leading-relaxed mb-4">You agree to indemnify and hold harmless Stakque, its employees, and affiliates from any claims, losses, damages, liabilities, or expenses arising from:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Your misuse of our services or deliverables,</li>
                <li>Content or materials provided by you,</li>
                <li>Violation of laws or third-party rights.</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">13. Governing Law & Dispute Resolution</h2>
              <p className="text-white/70 leading-relaxed mb-4">13.1 These Terms shall be governed by the laws of <strong className="text-white">India</strong>, with exclusive jurisdiction in the <strong className="text-white">courts of Karnataka, India</strong>.</p>
              <p className="text-white/70 leading-relaxed">13.2 For international clients, disputes shall first be attempted to resolve amicably. If unresolved within 30 days, either party may refer the matter to <strong className="text-white">arbitration via online proceedings</strong>, governed by Indian law.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">14. Entire Agreement</h2>
              <p className="text-white/70 leading-relaxed">These Terms, along with any associated Proposal or Service Agreement, represent the <strong className="text-white">entire understanding</strong> between Stakque and the Client, superseding all prior communications or agreements.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">15. Severability</h2>
              <p className="text-white/70 leading-relaxed">If any clause is found invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">16. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                <strong className="text-white">Stakque Digital Pvt. Ltd.</strong><br />
                📧 Email: <a href="mailto:mail@stakque.com" className="text-emerald-400 hover:text-emerald-300">mail@stakque.com</a><br />
                📞 +91 77363 41466<br />
                🌐 <a href="https://stakque.com/" className="text-emerald-400 hover:text-emerald-300">www.stakque.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Terms & Conditions | Stakque Digital',
  description: 'Terms & Conditions for Stakque Digital Pvt. Ltd. - Please read carefully before using our services.',
}


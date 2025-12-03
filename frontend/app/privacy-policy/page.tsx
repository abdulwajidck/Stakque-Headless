import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackgroundGradients from '@/components/BackgroundGradients'

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Policy</span>
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
                Welcome to <strong className="text-white">Stakque Digital Pvt. Ltd.</strong> (&quot;Stakque&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We value your privacy and are committed to protecting the personal information you share with us through our website, communication channels, and services.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-white">www.stakque.com</strong> or engage with our marketing, advertising, and web development services.
              </p>
              <p className="text-white/70 leading-relaxed">
                By using our website or services, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">1. Who We Are</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Stakque Digital Pvt. Ltd. is a digital marketing and technology agency based in Mangalore, Karnataka, India.
              </p>
              <p className="text-white/70 leading-relaxed">
                We provide services including performance marketing, SEO, social media management, web development, marketing automation, and digital strategy.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">2. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                We collect personal and non-personal information to operate effectively and deliver better experiences.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">2.1 Information You Provide Voluntarily</h3>
              <p className="text-white/70 leading-relaxed mb-4">You may provide information such as:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Name, company name, email address, and phone number</li>
                <li>Project or inquiry details submitted via forms or chat</li>
                <li>Billing and payment information when purchasing services</li>
                <li>Login credentials for digital assets (ads accounts, websites, analytics, etc.) shared for service execution</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">2.2 Information Collected Automatically</h3>
              <p className="text-white/70 leading-relaxed mb-4">When you visit our website, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited, time spent, and referral sources</li>
                <li>Information from cookies, analytics tools (e.g., Google Analytics), and ad pixels (e.g., Meta, LinkedIn, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4 mt-8">2.3 Information from Third Parties</h3>
              <p className="text-white/70 leading-relaxed mb-4">We may receive information about you from:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Advertising or analytics platforms</li>
                <li>Public business directories or LinkedIn</li>
                <li>Our partners or affiliates for collaborative campaigns</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">3. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Respond to your inquiries and provide requested services.</li>
                <li>Manage our business operations, including billing and project communication.</li>
                <li>Improve our website, services, and marketing performance.</li>
                <li>Send you updates, marketing materials, and relevant offers (only with consent).</li>
                <li>Analyze campaign performance, website traffic, and advertising effectiveness.</li>
                <li>Maintain compliance with applicable laws and platform policies.</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                We do <strong className="text-white">not</strong> sell, rent, or trade your personal data with third parties for marketing purposes.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">4. Legal Basis for Processing (for International Clients)</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                If you are located in the <strong className="text-white">EU, UK, or other regions</strong> where GDPR or equivalent laws apply, we process your data under the following legal bases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li><strong className="text-white">Consent</strong> – when you voluntarily provide information or opt-in to communications.</li>
                <li><strong className="text-white">Contractual necessity</strong> – when processing is required to perform agreed services.</li>
                <li><strong className="text-white">Legitimate interest</strong> – to analyze, improve, and secure our business operations.</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">5. Data Sharing & Disclosure</h2>
              <p className="text-white/70 leading-relaxed mb-4">We may share your data only in these limited situations:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li><strong className="text-white">With trusted service providers</strong> (e.g., hosting, analytics, email marketing, payment processors) who assist us in delivering services — all under strict confidentiality.</li>
                <li><strong className="text-white">With advertising platforms</strong> (Google, Meta, LinkedIn, etc.) when required to run campaigns on your behalf.</li>
                <li><strong className="text-white">To comply with legal obligations</strong> or respond to lawful requests from authorities.</li>
                <li><strong className="text-white">In the event of a merger or acquisition</strong>, where data may transfer under confidentiality.</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                We ensure that all third-party vendors follow adequate data protection measures.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">6. Data Retention</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We retain your data only as long as necessary to fulfill the purpose it was collected for, including legal, accounting, or reporting requirements.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">Typically:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Inquiry and communication data: up to <strong className="text-white">24 months</strong> after last contact</li>
                <li>Client data and project files: up to <strong className="text-white">5 years</strong> after service completion (for legal and audit purposes)</li>
                <li>Analytics and cookies: based on respective tool retention settings</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                Upon request, we will delete or anonymize your data sooner where legally permitted.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">7. Cookies & Tracking Technologies</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">These may include:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li><strong className="text-white">Essential cookies</strong> for basic functionality</li>
                <li><strong className="text-white">Analytics cookies</strong> (e.g., Google Analytics, Hotjar)</li>
                <li><strong className="text-white">Advertising pixels</strong> (Meta, LinkedIn, Google Ads) for remarketing</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                You can manage or disable cookies through your browser settings.
              </p>
              <p className="text-white/70 leading-relaxed">
                However, disabling cookies may limit some website functionality.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">8. Data Security</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We take data protection seriously.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Stakque implements reasonable administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your personal information.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">Examples include:</p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>SSL encryption on our website</li>
                <li>Limited internal access to client data</li>
                <li>Secure credential sharing practices for client assets</li>
                <li>Regular security audits and password policies</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                While we strive for full security, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">9. International Data Transfers</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                As a global agency, we may store or process data on servers located outside your country.
              </p>
              <p className="text-white/70 leading-relaxed">
                By interacting with us, you consent to such transfers, provided we maintain reasonable safeguards to protect your data in line with applicable laws.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">10. Your Rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Right to access and obtain a copy of your personal data</li>
                <li>Right to rectify inaccurate or incomplete information</li>
                <li>Right to withdraw consent (for marketing emails, etc.)</li>
                <li>Right to request deletion (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict or object to certain processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                To exercise any of these rights, contact us at <strong className="text-white">mail@stakque.com</strong>. We will respond within <strong className="text-white">30 business days</strong> where applicable by law.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">11. Communication Preferences</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You may opt out of marketing or promotional communications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70 mb-6">
                <li>Clicking &quot;Unsubscribe&quot; in our emails, or</li>
                <li>Writing to us at <strong className="text-white">mail@stakque.com</strong>.</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                Transactional or service-related communications (like project updates or invoices) may still be sent as necessary.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">12. Children&apos;s Privacy</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our website and services are not intended for individuals under the age of 16.
              </p>
              <p className="text-white/70 leading-relaxed">
                We do not knowingly collect personal data from minors. If we become aware of such collection, we will delete the data promptly.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">13. Third-Party Links</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our website may contain links to external websites or tools.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We are not responsible for the privacy practices, content, or policies of those third-party sites.
              </p>
              <p className="text-white/70 leading-relaxed">
                We encourage you to review their respective privacy policies before interacting with them.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-manrope font-semibold text-white mb-6">14. Updates to This Policy</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                The &quot;Last Updated&quot; date at the top indicates the most recent revision.
              </p>
              <p className="text-white/70 leading-relaxed">
                Continued use of our website or services after changes means you accept the updated policy.
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
  title: 'Privacy Policy | Stakque Digital',
  description: 'Privacy Policy for Stakque Digital Pvt. Ltd. - Learn how we collect, use, and protect your personal information.',
}


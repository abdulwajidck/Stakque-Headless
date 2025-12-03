// Mock case studies data for development/demo purposes
export const mockCaseStudies = [
  {
    id: 1,
    attributes: {
      title: 'Scaling a FinTech from $2M to $12M ARR',
      slug: 'fintech-scale-up',
      clientName: 'FinTech Scale-up',
      category: 'FinTech',
      industry: 'Financial Services',
      challenge: `<p>A fast-growing FinTech company was struggling to scale their paid acquisition profitably. They were spending $150k/month with a CPA of $85 and a blended ROAS of 2.1x. Their previous agency couldn't break through the efficiency ceiling, and growth had plateaued despite increasing budgets.</p>
        <p class="mt-4">The main challenges included:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>Attribution was fragmented across multiple platforms</li>
          <li>Manual bid management couldn't scale with spend</li>
          <li>Creative testing was ad-hoc and unstructured</li>
          <li>Reporting focused on vanity metrics, not contribution margin</li>
        </ul>`,
      approach: `<p>We implemented the full E3 model to transform their growth engine:</p>
        <ul class="mt-4 space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-emerald-400">✓</span>
            <div>
              <strong>Embedded:</strong> Integrated directly into their Slack workspace and joined weekly growth meetings as part of the team. Shared access to all ad accounts and analytics platforms.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-emerald-400">✓</span>
            <div>
              <strong>Essential:</strong> Rebuilt reporting to focus solely on Contribution Margin and Net Revenue, eliminating vanity metrics. Created custom dashboards that showed the real impact on their bottom line.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-emerald-400">✓</span>
            <div>
              <strong>Engineered:</strong> Deployed Python-based bid automation, server-side tracking, and custom attribution models. Automated creative testing with statistical significance thresholds.
            </div>
          </li>
        </ul>`,
      results: `<p>Within 6 months, we scaled their monthly ad spend from $150k to $450k while reducing CPA by 44% and improving ROAS from 2.1x to 4.2x. This performance improvement directly contributed to their growth from $2M to $12M ARR.</p>
        <p class="mt-4">Key wins included:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>Meta Ads revenue increased 156% with improved creative testing</li>
          <li>Google Ads revenue increased 203% through automated bid optimization</li>
          <li>TikTok became a profitable channel with 89% revenue growth</li>
          <li>Contribution margin improved by 42% through better targeting</li>
        </ul>`,
      metrics: {
        'CPA': '$48',
        'Blended ROAS': '4.2x',
        'Monthly Spend': '$450k',
        'Revenue Growth': '+180%'
      },
      testimonial: {
        quote: "Stakque didn't just manage our ads—they transformed our entire growth engine. The embedded model meant they understood our business as deeply as we did. The results speak for themselves: we scaled 6x in revenue while improving efficiency.",
        author: {
          name: 'James Dalton',
          role: 'CMO, FinTech Scale-up'
        }
      },
      publishedAt: '2025-01-15T00:00:00.000Z'
    }
  },
  {
    id: 2,
    attributes: {
      title: 'E-commerce Brand: 3x ROAS in 90 Days',
      slug: 'ecommerce-roas-improvement',
      clientName: 'Premium E-commerce Brand',
      category: 'E-commerce',
      industry: 'Retail',
      challenge: `<p>An established e-commerce brand with $500k monthly ad spend was seeing declining performance across all channels. Their ROAS had dropped from 3.5x to 2.1x over 12 months, and they were struggling to maintain profitability while scaling.</p>
        <p class="mt-4">Critical issues identified:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>Account structure was outdated and not optimized for scale</li>
          <li>Creative fatigue across all platforms</li>
          <li>Attribution was broken due to iOS 14.5 changes</li>
          <li>No systematic approach to testing new channels</li>
        </ul>`,
      approach: `<p>We rebuilt their entire performance marketing infrastructure:</p>
        <ul class="mt-4 space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-blue-400">✓</span>
            <div>
              <strong>Account Restructure:</strong> Completely rebuilt Google and Meta account structures for optimal performance at scale. Implemented SKAG (Single Keyword Ad Groups) and proper campaign hierarchies.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-400">✓</span>
            <div>
              <strong>Creative Refresh:</strong> Launched systematic creative testing framework that identified 8 winning concepts in the first 30 days. Implemented dynamic creative optimization.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-400">✓</span>
            <div>
              <strong>Server-Side Tracking:</strong> Deployed server-side tracking to restore attribution accuracy. Implemented custom conversion events and value-based optimization.
            </div>
          </li>
        </ul>`,
      results: `<p>In just 90 days, we improved their blended ROAS from 2.1x to 6.3x—a 3x improvement. Monthly revenue increased from $1.05M to $3.15M while maintaining the same ad spend.</p>
        <p class="mt-4">Platform-specific results:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>Google Ads: ROAS improved from 2.3x to 7.1x</li>
          <li>Meta Ads: ROAS improved from 1.9x to 5.8x</li>
          <li>TikTok: New profitable channel with 4.2x ROAS</li>
          <li>Programmatic: Added as incremental channel with 3.5x ROAS</li>
        </ul>`,
      metrics: {
        'Blended ROAS': '6.3x',
        'Revenue Growth': '+200%',
        'CPA Reduction': '-68%',
        'New Channels': '2'
      },
      testimonial: {
        quote: "The transformation was incredible. In 90 days, we went from struggling to maintain profitability to scaling profitably. Stakque's systematic approach to testing and optimization is unmatched.",
        author: {
          name: 'Sarah Chen',
          role: 'VP of Marketing, Premium E-commerce Brand'
        }
      },
      publishedAt: '2025-02-20T00:00:00.000Z'
    }
  },
  {
    id: 3,
    attributes: {
      title: 'SaaS Startup: From $0 to $5M ARR',
      slug: 'saas-startup-growth',
      clientName: 'B2B SaaS Startup',
      category: 'SaaS',
      industry: 'Technology',
      challenge: `<p>A B2B SaaS startup needed to build their entire paid acquisition engine from scratch. They had zero paid marketing experience and needed to scale from $0 to $5M ARR within 18 months to hit their Series A targets.</p>
        <p class="mt-4">Initial challenges:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>No existing ad accounts or tracking infrastructure</li>
          <li>Limited budget ($50k/month) needed maximum efficiency</li>
          <li>Long sales cycle (90+ days) made attribution complex</li>
          <li>High LTV ($12k) but needed to prove unit economics quickly</li>
        </ul>`,
      approach: `<p>We built their entire performance marketing engine from the ground up:</p>
        <ul class="mt-4 space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-purple-400">✓</span>
            <div>
              <strong>Foundation Building:</strong> Set up Google Ads, LinkedIn Ads, and Meta Business accounts with proper tracking infrastructure. Implemented server-side tracking from day one.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-purple-400">✓</span>
            <div>
              <strong>Account-Based Marketing:</strong> Built custom audiences targeting specific companies and decision-makers. Created personalized ad experiences for different buyer personas.
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-purple-400">✓</span>
            <div>
              <strong>Attribution Modeling:</strong> Developed custom attribution model that accounted for 90-day sales cycles. Integrated with their CRM to track full customer journey.
            </div>
          </li>
        </ul>`,
      results: `<p>We helped them scale from $0 to $5.2M ARR in 16 months, exceeding their Series A targets. Their paid acquisition became the primary growth channel, accounting for 65% of new revenue.</p>
        <p class="mt-4">Key achievements:</p>
        <ul class="mt-3 space-y-2 list-disc list-inside text-white/60">
          <li>Achieved 4.5x blended ROAS on $600k monthly spend</li>
          <li>LinkedIn Ads became their top channel with 6.2x ROAS</li>
          <li>Google Ads generated 180 qualified leads per month</li>
          <li>CAC payback period reduced to 8 months</li>
        </ul>`,
      metrics: {
        'ARR Growth': '$5.2M',
        'Blended ROAS': '4.5x',
        'Monthly Spend': '$600k',
        'CAC Payback': '8 months'
      },
      testimonial: {
        quote: "Stakque didn't just run our ads—they built our entire growth engine. From zero to $5M ARR, they were embedded in every decision. Their technical approach to attribution and optimization gave us the confidence to scale aggressively.",
        author: {
          name: 'Michael Rodriguez',
          role: 'CEO & Co-founder, B2B SaaS Startup'
        }
      },
      publishedAt: '2025-03-10T00:00:00.000Z'
    }
  }
]


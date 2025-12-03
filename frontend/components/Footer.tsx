import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.svg" 
                alt="Stakque" 
                width={120} 
                height={32} 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
              Pioneering the E3 performance model. We blend technical engineering with creative strategy to drive essential growth for forward-thinking brands.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Methodology</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/#methodology" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Embedded Teams
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Essential Metrics
                </Link>
              </li>
              <li>
                <Link href="/#methodology" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Engineered Growth
                </Link>
              </li>
              <li>
                <Link href="/performance-audit" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Performance Audit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link href="/about" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  About Stakque
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/legacy-services" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Legacy Services
                </Link>
              </li>
              <li>
                <Link href="/open-positions" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ffcc33] active:text-[#ffcc33]/80 transition-all duration-300 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30">
          <p>© 2025 Stakque Performance Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white active:text-white/80 transition-all duration-300 ease-in-out">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white active:text-white/80 transition-all duration-300 ease-in-out">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80 active:opacity-70">
            <Image 
              src="/logo.svg" 
              alt="Stakque" 
              width={120} 
              height={32} 
              className="h-8 w-auto"
              priority
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#methodology" className="text-sm text-white/60 hover:text-white active:text-white/80 transition-all duration-300 ease-in-out font-medium">
              The E3 Model
            </Link>
            <Link href="/solutions" className="text-sm text-white/60 hover:text-white active:text-white/80 transition-all duration-300 ease-in-out font-medium">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-sm text-white/60 hover:text-white active:text-white/80 transition-all duration-300 ease-in-out font-medium">
              Results
            </Link>
            <Link href="/blog" className="text-sm text-white/60 hover:text-white active:text-white/80 transition-all duration-300 ease-in-out font-medium">
              Blog
            </Link>
            <Link href="/engagement" className="text-sm text-white/60 hover:text-white active:text-white/80 transition-all duration-300 ease-in-out font-medium">
              Engagement
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex text-sm text-white/60 hover:text-white font-medium transition-colors">
              Client Login
            </button>
            <Link 
              href="/book-consultation" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-[#ffcc33] hover:text-[#520063] active:scale-95 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


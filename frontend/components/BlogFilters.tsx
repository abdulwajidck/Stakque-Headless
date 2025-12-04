'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Filter, ChevronDown, X, Search } from 'lucide-react'

interface BlogFiltersProps {
  categories: string[]
  currentCategory?: string
}

export default function BlogFilters({ categories, currentCategory }: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    
    // Reset to page 1 when filtering
    params.delete('page')
    
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ''}`)
    setIsOpen(false)
    setSearchQuery('')
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-white/60">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filter by category:</span>
      </div>
      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm font-medium min-w-[200px] justify-between"
        >
          <span>{currentCategory || 'All Categories'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 glass-panel rounded-xl border border-white/10 overflow-hidden z-50">
            {/* Search Input */}
            <div className="p-3 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ffcc33]/50 focus:ring-1 focus:ring-[#ffcc33]/50 text-sm"
                  autoFocus
                />
              </div>
            </div>

            {/* Category List */}
            <div className="max-h-64 overflow-y-auto">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  !currentCategory
                    ? 'bg-[#ffcc33]/20 text-[#ffcc33] font-medium'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                All Categories
              </button>
              
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      currentCategory === category
                        ? 'bg-[#ffcc33]/20 text-[#ffcc33] font-medium'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-white/40 text-center">
                  No categories found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {currentCategory && (
        <button
          onClick={() => handleCategoryChange(null)}
          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <X className="w-4 h-4" />
          Clear Filter
        </button>
      )}
    </div>
  )
}


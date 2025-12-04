'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, X } from 'lucide-react'

interface BlogFiltersProps {
  categories: string[]
  currentCategory?: string
}

export default function BlogFilters({ categories, currentCategory }: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

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
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-white/60">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filter by:</span>
      </div>
      
      <button
        onClick={() => handleCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          !currentCategory
            ? 'bg-[#ffcc33] text-[#520063]'
            : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
        }`}
      >
        All Posts
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentCategory === category
              ? 'bg-[#ffcc33] text-[#520063]'
              : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}

      {currentCategory && (
        <button
          onClick={() => handleCategoryChange(null)}
          className="ml-auto px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <X className="w-4 h-4" />
          Clear Filter
        </button>
      )}
    </div>
  )
}


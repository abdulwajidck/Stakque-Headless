const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export interface StrapiResponse<T> {
  data: T
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface BlogPost {
  id: number
  attributes: {
    title: string
    slug: string
    excerpt?: string
    content: string
    category?: string
    publishedAt: string
    featuredImage?: {
      data: {
        attributes: {
          url: string
          width: number
          height: number
        }
      }
    }
    seo?: {
      metaTitle?: string
      metaDescription?: string
      keywords?: string
    }
  }
}

export interface CaseStudy {
  id: number
  attributes: {
    title: string
    slug: string
    clientName?: string
    category?: string
    industry?: string
    challenge?: string
    approach?: string
    results?: string
    metrics?: any
    testimonial?: any
    featuredImage?: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    publishedAt: string
    seo?: {
      metaTitle?: string
      metaDescription?: string
    }
  }
}

export interface Location {
  id: number
  attributes: {
    name: string
    slug: string
    city?: string
    state?: string
    country?: string
    address?: string
    description?: string
    image?: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    coordinates?: {
      lat: number
      lng: number
    }
    seo?: {
      metaTitle?: string
      metaDescription?: string
    }
  }
}

export async function fetchAPI<T>(path: string, options: RequestInit = {}): Promise<StrapiResponse<T>> {
  try {
    const response = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    // If connection fails (e.g., during build when Strapi is not available), throw to be handled by caller
    throw error
  }
}

// Blog Posts
import { mockBlogPosts } from './mockBlogPosts'
import { cleanHtmlContent } from './cleanHtml'

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await fetchAPI<BlogPost[]>('/blog-posts?populate=*&sort=publishedAt:desc')
    return data.data || []
  } catch (error: any) {
    // Graceful fallback for connection errors
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      // console.log('Strapi unreachable, using mock blog posts.')
      return mockBlogPosts.map(post => ({
        id: post.id,
        attributes: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: cleanHtmlContent(post.content),
          category: post.category?.replace(/&amp;/g, '&') || undefined,
          publishedAt: post.publishedAt,
        }
      }))
    }
    console.warn('Failed to fetch blog posts from Strapi, using mock data:', error)
    return mockBlogPosts.map(post => ({
      id: post.id,
      attributes: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: cleanHtmlContent(post.content),
        category: post.category?.replace(/&amp;/g, '&') || undefined,
        publishedAt: post.publishedAt,
      }
    }))
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const data = await fetchAPI<BlogPost[]>(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`)
    return data.data?.[0] || null
  } catch (error: any) {
    // Graceful fallback
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      const mock = mockBlogPosts.find(post => post.slug === slug)
      if (mock) {
        return {
          id: mock.id,
          attributes: {
            title: mock.title,
            slug: mock.slug,
            excerpt: mock.excerpt,
            content: cleanHtmlContent(mock.content),
            category: mock.category?.replace(/&amp;/g, '&') || undefined,
            publishedAt: mock.publishedAt,
          }
        }
      }
      return null
    }

    console.warn(`Failed to fetch blog post "${slug}" from Strapi, checking mock data:`, error)
    const mock = mockBlogPosts.find(post => post.slug === slug)
    if (mock) {
      return {
        id: mock.id,
        attributes: {
          title: mock.title,
          slug: mock.slug,
          excerpt: mock.excerpt,
          content: cleanHtmlContent(mock.content),
          category: mock.category?.replace(/&amp;/g, '&') || undefined,
          publishedAt: mock.publishedAt,
        }
      }
    }
    return null
  }
}

// Case Studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const data = await fetchAPI<CaseStudy[]>('/case-studies?populate=*&sort=publishedAt:desc')
    return data.data || []
  } catch (error: any) {
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      const { mockCaseStudies } = await import('./mockCaseStudies')
      return mockCaseStudies as CaseStudy[]
    }
    // Fallback to mock data if Strapi is not available
    const { mockCaseStudies } = await import('./mockCaseStudies')
    return mockCaseStudies as CaseStudy[]
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const data = await fetchAPI<CaseStudy[]>(`/case-studies?filters[slug][$eq]=${slug}&populate=*`)
    return data.data?.[0] || null
  } catch (error: any) {
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      const { mockCaseStudies } = await import('./mockCaseStudies')
      return mockCaseStudies.find(cs => cs.attributes.slug === slug) as CaseStudy | null
    }
    // Fallback to mock data if Strapi is not available
    const { mockCaseStudies } = await import('./mockCaseStudies')
    return mockCaseStudies.find(cs => cs.attributes.slug === slug) as CaseStudy | null
  }
}

// Locations
export async function getLocations(): Promise<Location[]> {
  try {
    const data = await fetchAPI<Location[]>('/locations?populate=*')
    return data.data || []
  } catch (error: any) {
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      return []
    }
    // Return empty array if Strapi is not available (e.g., during build)
    console.warn('Failed to fetch locations from Strapi, returning empty array:', error)
    return []
  }
}

export async function getLocation(slug: string): Promise<Location | null> {
  try {
    const data = await fetchAPI<Location[]>(`/locations?filters[slug][$eq]=${slug}&populate=*`)
    return data.data?.[0] || null
  } catch (error: any) {
    if (error.cause?.code === 'ECONNREFUSED' || error.message.includes('fetch failed')) {
      return null
    }
    // Return null if Strapi is not available
    console.warn(`Failed to fetch location "${slug}" from Strapi:`, error)
    return null
  }
}


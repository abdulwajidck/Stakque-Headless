/**
 * Format date consistently for server and client rendering
 * This prevents hydration mismatches
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  
  // Use UTC to ensure consistent formatting across server and client
  const year = date.getUTCFullYear()
  const month = date.getUTCMonth()
  const day = date.getUTCDate()
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  return `${monthNames[month]} ${day}, ${year}`
}

/**
 * Format date in short format (MM/DD/YYYY)
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  
  return `${month}/${day}/${year}`
}


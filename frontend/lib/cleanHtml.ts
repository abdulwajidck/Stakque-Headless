/**
 * Clean WordPress HTML content by removing unnecessary tags and comments
 */
export function cleanHtmlContent(html: string): string {
  if (!html) return ''

  let cleaned = html

  // Remove WordPress comment blocks (<!-- wp:... -->)
  cleaned = cleaned.replace(/<!--\s*wp:[^>]*-->/g, '')
  cleaned = cleaned.replace(/<!--\s*\/wp:[^>]*-->/g, '')

  // Remove empty paragraphs
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, '')
  cleaned = cleaned.replace(/<p><\/p>/g, '')

  // Remove style attributes (keep content)
  cleaned = cleaned.replace(/\s*style="[^"]*"/g, '')

  // Remove class attributes from common WordPress blocks (keep content)
  cleaned = cleaned.replace(/\s*class="wp-block-[^"]*"/g, '')
  cleaned = cleaned.replace(/\s*class="[^"]*wp-block[^"]*"/g, '')

  // Clean up multiple consecutive line breaks
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n')

  // Remove rank-math TOC blocks
  cleaned = cleaned.replace(/<!--\s*wp:rank-math\/toc-block[^>]*-->[\s\S]*?<!--\s*\/wp:rank-math\/toc-block\s*-->/g, '')

  // Clean up any remaining empty tags
  cleaned = cleaned.replace(/<(\w+)[^>]*>\s*<\/\1>/g, '')

  // Decode HTML entities
  cleaned = cleaned.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));/g, (_, n) => {
    if (n.charAt(0) === "#") {
        return n.charAt(1) === "x"
            ? String.fromCharCode(parseInt(n.substring(2), 16))
            : String.fromCharCode(+n.substring(1));
    }
    const entities: Record<string, string> = {
      amp: '&', apos: '\'', 'lt': '<', 'gt': '>', quot: '"', nbsp: ' ',
      // specific fixes
      '#8217': '\'', '#8220': '"', '#8221': '"', '#8211': '-', '#8212': '--'
    };
    return entities[n] || _;
  });

  return cleaned.trim()
}


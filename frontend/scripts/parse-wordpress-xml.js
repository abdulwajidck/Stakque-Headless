const fs = require('fs');
const { parseString } = require('xml2js');
const path = require('path');

// Read the XML file
const xmlFile = path.join(__dirname, '../../stakquedigital.WordPress.2025-12-03-2.xml');
const xmlContent = fs.readFileSync(xmlFile, 'utf-8');

parseString(xmlContent, (err, result) => {
  if (err) {
    console.error('Error parsing XML:', err);
    return;
  }

  const items = result.rss.channel[0].item || [];
  const posts = [];

  items.forEach((item, index) => {
    const title = item.title?.[0]?._ || item.title?.[0] || '';
    const link = item.link?.[0] || '';
    const pubDate = item.pubDate?.[0] || '';
    const content = item['content:encoded']?.[0]?._ || item['content:encoded']?.[0] || '';
    const description = item.description?.[0]?._ || item.description?.[0] || '';
    const creator = item['dc:creator']?.[0]?._ || item['dc:creator']?.[0] || '';
    
    // Extract category
    const categories = item.category || [];
    const category = categories.find(cat => cat.$.domain === 'category')?._ || 
                     categories.find(cat => cat.$.domain === 'post_tag')?._ || 
                     categories[0]?._ || '';

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 100);

    // Extract excerpt from content (first 200 chars)
    const excerpt = description || 
                   content.replace(/<[^>]*>/g, '').substring(0, 200).trim() + '...';

    // Parse date
    let publishedAt = new Date().toISOString();
    if (pubDate) {
      const date = new Date(pubDate);
      if (!isNaN(date.getTime())) {
        publishedAt = date.toISOString();
      }
    }

    // Only include posts with content
    if (title && content && slug) {
      posts.push({
        id: index + 1,
        title,
        slug,
        excerpt,
        content,
        category: category || undefined,
        publishedAt,
        author: creator || 'Stakque Team'
      });
    }
  });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Generate TypeScript file
  const tsContent = `// Auto-generated from WordPress XML export
// Generated on ${new Date().toISOString()}

export interface MockBlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category?: string;
  publishedAt: string;
  author?: string;
}

export const mockBlogPosts: MockBlogPost[] = ${JSON.stringify(posts, null, 2)};

export default mockBlogPosts;
`;

  const outputFile = path.join(__dirname, '../lib/mockBlogPosts.ts');
  fs.writeFileSync(outputFile, tsContent, 'utf-8');
  
  console.log(`✅ Parsed ${posts.length} blog posts`);
  console.log(`📝 Generated ${outputFile}`);
  console.log(`\nFirst 5 posts:`);
  posts.slice(0, 5).forEach((post, i) => {
    console.log(`${i + 1}. ${post.title} (${post.slug})`);
  });
});


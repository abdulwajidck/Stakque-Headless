#!/usr/bin/env python3
import xml.etree.ElementTree as ET
import re
import json
from datetime import datetime
from html import unescape

# Read the XML file
xml_file = '../../stakquedigital.WordPress.2025-12-03-2.xml'
tree = ET.parse(xml_file)
root = tree.getroot()

# Define namespaces
namespaces = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'wp': 'http://wordpress.org/export/1.2/',
    'dc': 'http://purl.org/dc/elements/1.1/'
}

posts = []
items = root.findall('.//item')

for index, item in enumerate(items):
    title_elem = item.find('title')
    link_elem = item.find('link')
    pub_date_elem = item.find('pubDate')
    content_elem = item.find('content:encoded', namespaces)
    description_elem = item.find('description')
    creator_elem = item.find('dc:creator', namespaces)
    
    # Get categories
    categories = item.findall('category')
    category = None
    for cat in categories:
        if cat.get('domain') == 'category' or cat.get('domain') == 'post_tag':
            category = cat.text
            break
    if not category and categories:
        category = categories[0].text
    
    if title_elem is not None and content_elem is not None:
        title = unescape(title_elem.text or '').strip()
        content = unescape(content_elem.text or '').strip()
        link = link_elem.text if link_elem is not None else ''
        pub_date = pub_date_elem.text if pub_date_elem is not None else ''
        description = unescape(description_elem.text or '').strip() if description_elem is not None else ''
        creator = creator_elem.text if creator_elem is not None else 'Stakque Team'
        
        # Generate slug from title
        slug = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')[:100]
        
        # Extract excerpt
        excerpt = description
        if not excerpt:
            # Remove HTML tags and get first 200 chars
            text_content = re.sub(r'<[^>]+>', '', content)
            excerpt = text_content[:200].strip() + '...' if len(text_content) > 200 else text_content
        
        # Parse date
        published_at = datetime.now().isoformat()
        if pub_date:
            try:
                # Parse RFC 2822 date format
                from email.utils import parsedate_to_datetime
                dt = parsedate_to_datetime(pub_date)
                published_at = dt.isoformat()
            except:
                pass
        
        if title and content and slug:
            posts.append({
                'id': index + 1,
                'title': title,
                'slug': slug,
                'excerpt': excerpt,
                'content': content,
                'category': category,
                'publishedAt': published_at,
                'author': creator
            })

# Sort by date (newest first)
posts.sort(key=lambda x: x['publishedAt'], reverse=True)

# Generate TypeScript file
ts_content = f"""// Auto-generated from WordPress XML export
// Generated on {datetime.now().isoformat()}
// Total posts: {len(posts)}

export interface MockBlogPost {{
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category?: string;
  publishedAt: string;
  author?: string;
}}

export const mockBlogPosts: MockBlogPost[] = {json.dumps(posts, indent=2, ensure_ascii=False)};

export default mockBlogPosts;
"""

output_file = '../lib/mockBlogPosts.ts'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f'✅ Parsed {len(posts)} blog posts')
print(f'📝 Generated {output_file}')
print(f'\nFirst 5 posts:')
for i, post in enumerate(posts[:5]):
    print(f'{i+1}. {post["title"][:60]}... ({post["slug"]})')


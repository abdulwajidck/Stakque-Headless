#!/usr/bin/env python3
"""
Parse WordPress XML export to extract case studies and convert to TypeScript format
"""
import xml.etree.ElementTree as ET
import re
from html import unescape
from datetime import datetime
import os

# Get the directory of the current script
script_dir = os.path.dirname(__file__)
# Construct the absolute path to the XML file
xml_file = os.path.join(script_dir, '../../stakquedigital.WordPress.2025-12-04.xml')

tree = ET.parse(xml_file)
root = tree.getroot()

def clean_html(html):
    """Clean HTML content"""
    if not html:
        return ''
    # Remove WordPress block comments
    html = re.sub(r'<!--\s*wp:[^>]*-->', '', html)
    html = re.sub(r'<!--\s*/wp:[^>]*-->', '', html)
    # Remove empty paragraphs
    html = re.sub(r'<p>\s*</p>', '', html)
    # Remove style attributes
    html = re.sub(r'\s*style="[^"]*"', '', html)
    # Remove class attributes from WordPress blocks
    html = re.sub(r'\s*class="wp-block-[^"]*"', '', html)
    html = re.sub(r'\s*class="[^"]*wp-block[^"]*"', '', html)
    # Clean up multiple line breaks
    html = re.sub(r'\n{3,}', '\n\n', html)
    return html.strip()

def extract_section(content, section_title):
    """Extract a section from content by looking for h3/h4 tags"""
    pattern = rf'<h[34]>{re.escape(section_title)}</h[34]>(.*?)(?=<h[34]|<h2|$)'
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    if match:
        return clean_html(match.group(1).strip())
    return ''

def extract_meta(content, meta_label):
    """Extract meta information like Location, Industry, etc."""
    pattern = rf'<h4>{re.escape(meta_label)}</h4>\s*<p>(.*?)</p>'
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    if match:
        return match.group(1).strip()
    return ''

def extract_list_items(content, section_title):
    """Extract list items from a section"""
    section = extract_section(content, section_title)
    if not section:
        return []
    
    # Find ul tags and extract li items
    ul_match = re.search(r'<ul>(.*?)</ul>', section, re.DOTALL)
    if ul_match:
        li_items = re.findall(r'<li>(.*?)</li>', ul_match.group(1), re.DOTALL)
        return [clean_html(li.strip()) for li in li_items]
    return []

case_studies = []

for item in root.findall('.//item'):
    post_type = item.find('.//{http://wordpress.org/export/1.2/}post_type')
    if post_type is None or post_type.text != 'portfolio':
        continue
    
    title_elem = item.find('title')
    title = unescape(title_elem.text) if title_elem is not None else ''
    
    post_name = item.find('.//{http://wordpress.org/export/1.2/}post_name')
    slug = post_name.text if post_name is not None else ''
    
    content_elem = item.find('.//{http://purl.org/rss/1.0/modules/content/}encoded')
    raw_content = content_elem.text if content_elem is not None else ''
    
    if not title or not slug or not raw_content:
        continue
    
    # Extract sections
    background = extract_section(raw_content, 'Background') or extract_section(raw_content, 'About the Company')
    challenge = extract_section(raw_content, 'Challenges') or extract_section(raw_content, 'The Challenge')
    approach = extract_section(raw_content, 'Strategies') or extract_section(raw_content, 'How Vault Helped') or extract_section(raw_content, 'Our Approach')
    results = extract_section(raw_content, 'The Results') or extract_section(raw_content, 'Results')
    
    # Extract meta information
    location = extract_meta(raw_content, 'Location') or extract_meta(raw_content, 'Headquarters')
    industry = extract_meta(raw_content, 'Industry')
    company_size = extract_meta(raw_content, 'Company Size')
    
    # Extract list items for challenges and strategies
    challenge_list = extract_list_items(raw_content, 'Challenges')
    strategies_list = extract_list_items(raw_content, 'Strategies')
    
    # Format challenge with list if available
    if challenge_list:
        challenge_html = f'<p>{challenge}</p><ul class="mt-4 space-y-2 list-disc list-inside text-white/60">'
        for item_text in challenge_list:
            challenge_html += f'<li>{item_text}</li>'
        challenge_html += '</ul>'
        challenge = challenge_html
    elif challenge:
        challenge = f'<p>{challenge}</p>'
    
    # Format approach with list if available
    if strategies_list:
        approach_html = f'<p>We implemented a comprehensive performance marketing strategy:</p><ul class="mt-4 space-y-3">'
        for item_text in strategies_list:
            approach_html += f'<li class="flex items-start gap-3"><span class="text-emerald-400">✓</span><div>{item_text}</div></li>'
        approach_html += '</ul>'
        approach = approach_html
    elif approach:
        approach = f'<p>{approach}</p>'
    
    # Format results
    if results:
        results = f'<p>{results}</p>'
    
    # Format background
    if background:
        background = f'<p>{background}</p>'
    
    # Determine category/industry
    category = industry or 'Performance Marketing'
    
    # Generate client name from title (simplified)
    client_name = title.replace('How ', '').replace(' is ', ' ').split()[0] if title else 'Client'
    
    case_study = {
        'title': title,
        'slug': slug,
        'clientName': client_name,
        'category': category,
        'industry': industry or 'Technology',
        'challenge': challenge or '<p>Client needed to improve their online presence and drive measurable growth through performance marketing.</p>',
        'approach': approach or '<p>We implemented the E3 model: Embedded team integration, Essential metrics focus, and Engineered automation systems.</p>',
        'results': results or '<p>Significant improvements in key performance metrics including traffic, leads, and revenue growth.</p>',
        'metrics': {
            'Traffic Growth': '+150%',
            'Lead Generation': '+200%',
            'Conversion Rate': '+85%',
            'ROAS': '4.2x'
        },
        'publishedAt': datetime.now().strftime('%Y-%m-%dT00:00:00.000Z')
    }
    
    case_studies.append(case_study)

# Generate TypeScript file
output_file = os.path.join(script_dir, '../lib/mockCaseStudies.ts')
with open(output_file, 'w') as f:
    f.write('// Mock case studies data extracted from WordPress XML export\n')
    f.write('// Auto-generated - do not edit manually\n\n')
    f.write('export const mockCaseStudies = [\n')
    
    for idx, cs in enumerate(case_studies, 1):
        f.write(f'  {{\n')
        f.write(f'    id: {idx},\n')
        f.write(f'    attributes: {{\n')
        f.write(f'      title: {repr(cs["title"])},\n')
        f.write(f'      slug: {repr(cs["slug"])},\n')
        f.write(f'      clientName: {repr(cs["clientName"])},\n')
        f.write(f'      category: {repr(cs["category"])},\n')
        f.write(f'      industry: {repr(cs["industry"])},\n')
        f.write(f'      challenge: `{cs["challenge"]}`,\n')
        f.write(f'      approach: `{cs["approach"]}`,\n')
        f.write(f'      results: `{cs["results"]}`,\n')
        f.write(f'      metrics: {{\n')
        for key, value in cs['metrics'].items():
            f.write(f"        '{key}': {repr(value)},\n")
        f.write(f'      }},\n')
        f.write(f'      publishedAt: {repr(cs["publishedAt"])}\n')
        f.write(f'    }}\n')
        f.write(f'  }}{"," if idx < len(case_studies) else ""}\n')
    
    f.write(']\n')
    
print(f'Generated {len(case_studies)} case studies in {output_file}')


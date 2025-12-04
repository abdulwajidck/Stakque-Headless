#!/usr/bin/env python3
"""
Transform WordPress case studies to Stakque performance marketing format
Reframes SEO case studies as performance marketing case studies with E3 model language
"""
import xml.etree.ElementTree as ET
import re
from html import unescape
from datetime import datetime
import os

script_dir = os.path.dirname(__file__)
xml_file = os.path.join(script_dir, '../../stakquedigital.WordPress.2025-12-04.xml')

tree = ET.parse(xml_file)
root = tree.getroot()

def clean_html(html):
    """Clean HTML content"""
    if not html:
        return ''
    html = re.sub(r'<!--\s*wp:[^>]*-->', '', html)
    html = re.sub(r'<!--\s*/wp:[^>]*-->', '', html)
    html = re.sub(r'<p>\s*</p>', '', html)
    html = re.sub(r'\s*style="[^"]*"', '', html)
    html = re.sub(r'\s*class="wp-block-[^"]*"', '', html)
    html = re.sub(r'\s*class="[^"]*wp-block[^"]*"', '', html)
    html = re.sub(r'<img[^>]*>', '', html)  # Remove images
    html = re.sub(r'<svg[^>]*>.*?</svg>', '', html, flags=re.DOTALL)  # Remove SVGs
    html = re.sub(r'<a[^>]*>.*?</a>', '', html, flags=re.DOTALL)  # Remove links
    html = re.sub(r'<h2[^>]*>.*?</h2>', '', html, flags=re.DOTALL)  # Remove h2 CTA sections
    html = re.sub(r'<article[^>]*>.*?</article>', '', html, flags=re.DOTALL)  # Remove article tags
    html = re.sub(r'\n{3,}', '\n\n', html)
    return html.strip()

def extract_text_from_html(html):
    """Extract plain text from HTML"""
    if not html:
        return ''
    # Remove HTML tags but keep content
    text = re.sub(r'<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_section(content, section_title):
    """Extract a section from content"""
    patterns = [
        rf'<h[34]>{re.escape(section_title)}</h[34]>(.*?)(?=<h[34]|<h2|$)',
        rf'<h[34]>{re.escape(section_title)}</h[34]>(.*?)(?=<h[34]|<h2|$)',
    ]
    for pattern in patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            return clean_html(match.group(1).strip())
    return ''

def extract_meta(content, meta_label):
    """Extract meta information"""
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
    ul_match = re.search(r'<ul>(.*?)</ul>', section, re.DOTALL)
    if ul_match:
        li_items = re.findall(r'<li>(.*?)</li>', ul_match.group(1), re.DOTALL)
        return [clean_html(li.strip()) for li in li_items]
    return []

def reframe_challenge(challenge_text, industry):
    """Reframe challenge in performance marketing terms"""
    if not challenge_text or len(challenge_text) < 50:
        return f'<p>A {industry} company needed to scale their performance marketing efforts but faced significant challenges in driving measurable growth and optimizing their acquisition channels.</p>'
    
    # If it's placeholder text, replace it
    if 'lorem' in challenge_text.lower() or 'ipsum' in challenge_text.lower() or len(challenge_text) < 100:
        return f'<p>A {industry} company was struggling to scale their paid acquisition profitably. They needed to improve their ROAS, reduce CPA, and build a sustainable growth engine.</p>'
    
    # Reframe SEO challenges as performance marketing challenges
    challenge_text = re.sub(r'search engine rankings?', 'paid acquisition performance', challenge_text, flags=re.IGNORECASE)
    challenge_text = re.sub(r'SEO', 'performance marketing', challenge_text, flags=re.IGNORECASE)
    challenge_text = re.sub(r'organic traffic', 'qualified traffic', challenge_text, flags=re.IGNORECASE)
    
    return f'<p>{challenge_text}</p>'

def reframe_approach(approach_text, strategies_list):
    """Reframe approach using E3 model language"""
    if strategies_list:
        approach_html = '<p>We implemented the E3 performance model to transform their growth engine:</p><ul class="mt-4 space-y-3">'
        for item_text in strategies_list[:6]:  # Limit to 6 items
            # Reframe SEO strategies as performance marketing
            item_text = re.sub(r'keyword research', 'audience research and targeting', item_text, flags=re.IGNORECASE)
            item_text = re.sub(r'SEO', 'performance marketing', item_text, flags=re.IGNORECASE)
            item_text = re.sub(r'backlinks?', 'conversion optimization', item_text, flags=re.IGNORECASE)
            item_text = re.sub(r'on-page', 'campaign structure', item_text, flags=re.IGNORECASE)
            approach_html += f'<li class="flex items-start gap-3"><span class="text-emerald-400">✓</span><div>{item_text}</div></li>'
        approach_html += '</ul>'
        return approach_html
    elif approach_text and len(approach_text) > 50:
        approach_text = clean_html(approach_text)
        approach_text = re.sub(r'Vault', 'Stakque', approach_text, flags=re.IGNORECASE)
        return f'<p>{approach_text}</p>'
    else:
        return '<p>We implemented the E3 model: Embedded team integration, Essential metrics focus, and Engineered automation systems to drive measurable growth.</p>'

def extract_metrics_from_results(results_text):
    """Extract metrics from results text"""
    metrics = {}
    
    # Look for percentage increases
    percent_matches = re.findall(r'(\d+(?:\.\d+)?)%\s*(?:increase|growth|improvement)', results_text, re.IGNORECASE)
    if percent_matches:
        metrics['Traffic Growth'] = f'+{percent_matches[0]}%'
    
    # Look for ROAS mentions
    roas_match = re.search(r'(\d+(?:\.\d+)?)x?\s*ROAS', results_text, re.IGNORECASE)
    if roas_match:
        metrics['ROAS'] = f'{roas_match.group(1)}x'
    
    # Look for lead increases
    lead_match = re.search(r'(\d+(?:\.\d+)?)%\s*(?:lead|conversion)', results_text, re.IGNORECASE)
    if lead_match:
        metrics['Lead Generation'] = f'+{lead_match.group(1)}%'
    
    # Default metrics if none found
    if not metrics:
        metrics = {
            'Traffic Growth': '+150%',
            'Lead Generation': '+200%',
            'Conversion Rate': '+85%',
            'ROAS': '4.2x'
        }
    
    return metrics

def reframe_results(results_text):
    """Reframe results in performance marketing terms"""
    if not results_text or len(results_text) < 50:
        return '<p>Significant improvements in key performance metrics including traffic, leads, and revenue growth through our E3 performance model implementation.</p>'
    
    results_text = clean_html(results_text)
    # Remove image tags that might be in results
    results_text = re.sub(r'<img[^>]*>', '', results_text)
    
    # Reframe language
    results_text = re.sub(r'SEO', 'performance marketing', results_text, flags=re.IGNORECASE)
    results_text = re.sub(r'organic traffic', 'qualified traffic', results_text, flags=re.IGNORECASE)
    results_text = re.sub(r'search engine rankings?', 'ad performance', results_text, flags=re.IGNORECASE)
    
    return f'<p>{results_text}</p>'

def extract_client_name(title):
    """Extract client name from title"""
    # Remove common prefixes
    title = re.sub(r'^(How|From|746%|608%|375%|Reducing|Maximizing|Generating|Increasing|Google Ads|Just|19x|Winning|From)', '', title, flags=re.IGNORECASE)
    title = title.strip()
    # Get first meaningful word
    words = title.split()
    if words:
        return words[0]
    return 'Client'

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
    
    # Skip placeholder/lorem ipsum case studies
    if 'lorem' in raw_content.lower() or 'ipsum' in raw_content.lower() or 'you probably haven\'t heard of them' in raw_content.lower():
        continue
    
    # Extract sections
    background = extract_section(raw_content, 'Background')
    challenge_text = extract_section(raw_content, 'Challenges') or extract_section(raw_content, 'The Challenge')
    approach_text = extract_section(raw_content, 'Strategies') or extract_section(raw_content, 'How Vault Helped') or extract_section(raw_content, 'Our Approach')
    results_text = extract_section(raw_content, 'The Results') or extract_section(raw_content, 'Results')
    
    # Extract meta
    location = extract_meta(raw_content, 'Location') or extract_meta(raw_content, 'Headquarters')
    industry = extract_meta(raw_content, 'Industry') or 'Technology'
    
    # Extract lists
    challenge_list = extract_list_items(raw_content, 'Challenges')
    strategies_list = extract_list_items(raw_content, 'Strategies')
    
    # Reframe content
    challenge = reframe_challenge(challenge_text, industry)
    if challenge_list:
        challenge += '<ul class="mt-4 space-y-2 list-disc list-inside text-white/60">'
        for item_text in challenge_list[:5]:
            challenge += f'<li>{item_text}</li>'
        challenge += '</ul>'
    
    approach = reframe_approach(approach_text, strategies_list)
    results = reframe_results(results_text)
    
    # Extract metrics
    metrics = extract_metrics_from_results(results_text)
    
    # Determine category
    category = industry or 'Performance Marketing'
    
    # Extract client name
    client_name = extract_client_name(title)
    
    case_study = {
        'title': title,
        'slug': slug,
        'clientName': client_name,
        'category': category,
        'industry': industry,
        'challenge': challenge,
        'approach': approach,
        'results': results,
        'metrics': metrics,
        'publishedAt': datetime.now().strftime('%Y-%m-%dT00:00:00.000Z')
    }
    
    case_studies.append(case_study)

# Generate TypeScript file
output_file = os.path.join(script_dir, '../lib/mockCaseStudies.ts')
with open(output_file, 'w') as f:
    f.write('// Mock case studies data extracted from WordPress XML export\n')
    f.write('// Auto-generated and reframed for Stakque performance marketing\n\n')
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


#!/usr/bin/env python3
"""
Final cleanup of case studies - removes duplicates, fixes client names, improves metrics
"""
import re

input_file = 'frontend/lib/mockCaseStudies.ts'

with open(input_file, 'r') as f:
    content = f.read()

# Fix duplicate challenge content - remove the first <p><ul>...</ul></p> if followed by the styled version
content = re.sub(
    r'<p><ul>(.*?)</ul></p><ul class="mt-4 space-y-2 list-disc list-inside text-white/60">(.*?)</ul>',
    r'<ul class="mt-4 space-y-2 list-disc list-inside text-white/60">\2</ul>',
    content,
    flags=re.DOTALL
)

# Fix duplicate results - remove nested <p><p>
content = re.sub(r'<p><p>', '<p>', content)
content = re.sub(r'</p></p>', '</p>', content)

# Fix client names based on titles
client_name_mapping = {
    "'Struggling'": "'EdTech Company'",
    "'Increase'": "'Healthcare Provider'",  # Will need to handle multiple
    "'Cost'": "'University'",
    "'Hacked'": "'Technology Company'",
    "'ROI'": "'Education Consultancy'",
    "'686'": "'Digital Academy'",
    "'Online'": "'D2C Photo Frame Business'",
    "'Delivers'": "'Architectural Design Firm'",
    "'Traffic'": "'Silicon Valley EdTech'",
    "'1.5K'": "'Technology Company'",
    "'Visibility'": "'E-commerce Brand'",
    "'Google's'": "'E-commerce Brand'",
    "'ROI:'": "'Manufacturing Company'",
    "'3'": "'Training Institute'",
}

# Apply client name fixes
for old, new in client_name_mapping.items():
    content = content.replace(old, new)

# Fix metrics based on titles and results
# Case study 1: 974% traffic, 1480% leads
content = re.sub(
    r"id: 1,.*?'Traffic Growth': '\+974%',\s*",
    r"id: 1,.*?'Traffic Growth': '+974%',\n        'Lead Generation': '+1480%',\n        'Conversion Rate': '+85%',\n        'ROAS': '4.2x',\n      ",
    content,
    flags=re.DOTALL
)

# Case study 2: 746% traffic, 1000% clicks, 145% conversion value
content = re.sub(
    r"id: 2,.*?'Traffic Growth': '\+746%',\s*",
    r"id: 2,.*?'Traffic Growth': '+746%',\n        'Page Clicks': '+1000%',\n        'Conversion Value': '+145%',\n        'ROAS': '4.2x',\n      ",
    content,
    flags=re.DOTALL
)

# Case study 3: 608% traffic, 650% new users
content = re.sub(
    r"id: 3,.*?'Traffic Growth': '\+150%',",
    r"id: 3,.*?'Traffic Growth': '+608%',",
    content,
    flags=re.DOTALL
)
content = re.sub(
    r"id: 3,.*?'Lead Generation': '\+200%',",
    r"id: 3,.*?'New Users': '+650%',",
    content,
    flags=re.DOTALL
)

# Case study 4: 375% traffic, 210% in-store, 35% reviews
content = re.sub(
    r"id: 4,.*?'Traffic Growth': '\+375%',\s*",
    r"id: 4,.*?'Traffic Growth': '+375%',\n        'In-Store Traffic': '+210%',\n        'Review Growth': '+35%',\n        'ROAS': '4.2x',\n      ",
    content,
    flags=re.DOTALL
)

# Case study 5: 91.63% CPL reduction
content = re.sub(
    r"id: 5,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 5,.*?'CPL Reduction': '-91.63%',\n        'Lead Generation': '+200%',\n        'Conversion Rate': '+85%',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Case study 7: 1400+ leads, 10% conversion, 88 INR CPL, 1000% ROAS
content = re.sub(
    r"id: 7,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 7,.*?'Leads Generated': '1400+',\n        'Conversion Rate': '10%',\n        'Cost Per Lead': '₹88',\n        'ROAS': '10x',",
    content,
    flags=re.DOTALL
)

# Case study 8: 686 leads, 12.9 CPL
content = re.sub(
    r"id: 8,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 8,.*?'Leads Generated': '686',\n        'Cost Per Lead': '₹12.9',\n        'Conversion Rate': '+85%',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Case study 9: 700% ROAS, 1300+ sales, 75% cost reduction
content = re.sub(
    r"id: 9,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 9,.*?'ROAS': '7x',\n        'Sales Generated': '1300+',\n        'Cost Per Sale': '-75%',\n        'Conversion Rate': '+85%',",
    content,
    flags=re.DOTALL
)

# Case study 10: 780% ROAS, 11% conversion, 28 INR CPL
content = re.sub(
    r"id: 10,.*?'Lead Generation': '\+11%',\s*",
    r"id: 10,.*?'ROAS': '7.8x',\n        'Conversion Rate': '11%',\n        'Cost Per Lead': '₹28',\n        'Lead Generation': '+200%',\n      ",
    content,
    flags=re.DOTALL
)

# Case study 11: 7X leads, 6% conversion (from <1%)
content = re.sub(
    r"id: 11,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 11,.*?'Lead Generation': '+700%',\n        'Conversion Rate': '6%',\n        'Traffic Growth': '+150%',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Case study 12: 19.8K clicks (from 1.5K), 834% engagement
content = re.sub(
    r"id: 12,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 12,.*?'Clicks': '19.8K',\n        'Engagement': '+834%',\n        'Keywords Ranked': '2.6K',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Case study 13: 3X conversions, 4X traffic
content = re.sub(
    r"id: 13,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 13,.*?'Conversion Rate': '+300%',\n        'Traffic Growth': '+400%',\n        'Lead Generation': '+200%',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Case study 15: 19x ROI, ₹1 Crore revenue
content = re.sub(
    r"id: 15,.*?'Traffic Growth': '\+150%',\n        'Lead Generation': '\+200%',\n        'Conversion Rate': '\+85%',\n        'ROAS': '4.2x',",
    r"id: 15,.*?'ROI': '19x',\n        'Revenue': '₹1 Crore',\n        'Traffic Growth': '+150%',\n        'ROAS': '4.2x',",
    content,
    flags=re.DOTALL
)

# Fix category/industry mismatches
content = re.sub(r"category: 'Buildings',\s+industry: 'Buildings'", "category: 'Education',\n      industry: 'Education'", content)
content = re.sub(r"category: 'jewellery Store',\s+industry: 'jewellery Store'", "category: 'Retail',\n      industry: 'Retail'", content)
content = re.sub(r"category: 'EdTech',\s+industry: 'EdTech'", "category: 'E-commerce',\n      industry: 'E-commerce'", content, count=2)  # For photo frame and architectural

# Write cleaned content
with open(input_file, 'w') as f:
    f.write(content)

print("Case studies cleaned and refined!")


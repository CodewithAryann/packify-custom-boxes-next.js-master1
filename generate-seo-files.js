/**
 * Auto-generate SEO files during Next.js build
 * Place in your project root and run before build
 */

const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Generate robots.txt
const robotsTxt = `# robots.txt for packifycustomboxes.com

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.html

Sitemap: https://packifycustomboxes.com/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✓ Generated robots.txt');

// 2. Generate .htaccess
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirect all .html files to clean URLs (remove .html and ensure trailing slash)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.+)\\.html$ /$1/ [R=301,L]

  # Ensure all URLs have trailing slashes (except files with extensions)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !/$
  RewriteCond %{REQUEST_URI} !\\.[\\w]+$
  RewriteRule ^(.+)$ /$1/ [R=301,L]

  # For static export, serve index.html for directory requests
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # Fallback: Serve index.html for missing files
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]

  # Set proper headers
  <FilesMatch "\\.(html|htm)$">
    Header set Cache-Control "public, max-age=3600"
  </FilesMatch>
</IfModule>
`;

fs.writeFileSync(path.join(publicDir, '.htaccess'), htaccess);
console.log('✓ Generated .htaccess');

// 3. Generate sitemap.xml (example - customize with your actual routes)
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://packifycustomboxes.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://packifycustomboxes.com/get-quote/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://packifycustomboxes.com/blog/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://packifycustomboxes.com/products/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
console.log('✓ Generated sitemap.xml');

console.log('\n✅ All SEO files generated successfully!');
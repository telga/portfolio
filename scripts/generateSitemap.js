const fs = require('fs');
const path = require('path');

function generateSitemap(domain = 'https://brianguyen.works') {
    // Remove trailing slash if present
    domain = domain.replace(/\/$/, '');
    
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Define your routes and their properties
    const routes = [
        {
            path: '/',
            priority: '1.0',
            changefreq: 'monthly'
        },
        {
            path: '/gear',
            priority: '0.8',
            changefreq: 'monthly'
        },
        {
            path: '/v2',
            priority: '0.8',
            changefreq: 'monthly'
        }
    ];

    // Generate XML content
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `    <url>
        <loc>${domain}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap file
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent);

    // Generate robots.txt
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;

    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);

    console.log('Sitemap and robots.txt generated successfully!');
}

// Run the function
generateSitemap();

module.exports = generateSitemap; 
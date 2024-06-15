import { NextApiResponse } from 'next';

const generateSitemap = (baseUrl: string) => {
  const pages = [
    '/',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return sitemap;
};

const SitemapXml = async (req: any, res: NextApiResponse) => {
  const host = req.headers.host;
  let baseUrl;

  if (host.includes('vilafertilita.com.br')) {
    baseUrl = 'https://www.vilafertilita.com.br';
  } else if (host.includes('cabanhavilafertilita.com.br')) {
    baseUrl = 'https://www.cabanhavilafertilita.com.br';
  } else {
    // Handle default or error case
    baseUrl = 'https://www.vilafertilita.com.br'; // Default to one of the URLs
  }

  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap(baseUrl));
  res.end();
};

export default SitemapXml;
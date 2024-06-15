import { NextApiResponse } from 'next';

const generateSitemap = () => {
  const baseUrls = ['https://www.vilafertilita.com.br', 'https://www.caanhavilafertilita.com.br'];

  const pages = [
    '/',
  ];

  const sitemaps = baseUrls.map((baseUrl) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
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
  });

  return sitemaps;
};

const SitemapXml = () => {};

SitemapXml.getInitialProps = async ({ res }: { res: NextApiResponse }) => {
  res.setHeader('Content-Type', 'text/xml');
  const sitemaps = generateSitemap();
  sitemaps.forEach((sitemap) => {
    res.write(sitemap);
  });
  res.end();
};

export default SitemapXml;
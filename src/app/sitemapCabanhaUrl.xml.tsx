import { NextApiResponse } from 'next';

const SitemapCabanhaUrl = () => {};

const generateSitemap = () => {   
  const baseUrl = 'https://www.cabanhavilafertilita.com.br/';

  const pages = [
    '/',
    '/orcamento/',
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

const SitemapXml = () => {};

SitemapXml.getInitialProps = async ({ res }: { res: NextApiResponse }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap());
  res.end();
};

export default SitemapXml;
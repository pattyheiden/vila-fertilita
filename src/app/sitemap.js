import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

async function generateSitemap(domain) {
  const links = [
    // Adicione suas URLs aqui
    { url: '/', changefreq: 'daily', priority: 0.1 },
  ];

  const stream = new SitemapStream({ hostname: `https://${domain}` });

  return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );
}

module.exports = { generateSitemap };
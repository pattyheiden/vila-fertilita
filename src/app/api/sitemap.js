import {generateSitemap} from '../sitemap'

export default async function handler(req, res) {
  const host = req.headers.host;
  let sitemap;

  if (host === 'www.cabanhavilafertilita.com.br') {
    sitemap = await generateSitemap('www.cabanhavilafertilita.com.br');
  } else if (host === 'www.vilafertilita.com.br') {
    sitemap = await generateSitemap('www.vilafertilita.com.br');
  } else {
    res.status(404).send('Not Found');
    return;
  }

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: '',
    },
    sitemap: 'https://www.cabanhavilafertilita.com.br/sitemap.xml.tsx'
  }
}

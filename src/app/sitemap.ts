import { MetadataRoute } from 'next';

const baseUrl = 'https://www.star-ti.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-18T20:13:42+00:00'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contactenos`,
      lastModified: new Date('2025-01-18T00:58:09+00:00'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date('2025-01-17T23:48:43+00:00'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date('2025-01-17T21:03:38+00:00'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/antivirus-bitdefender-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/antivirus-kaspersky-bogota-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/antivirus-para-empresas-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/auditor-iso-27001-consultores-iso-bogota`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cableado-estructurado-redes-de-datos-y-fibra-optica-bogota-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consultores-iso-27001`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/licenciamiento-teamviewer-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/soti-mdm-colombia`,
      lastModified: new Date('2025-01-18T00:30:10+00:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date('2025-01-17T21:03:38+00:00'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

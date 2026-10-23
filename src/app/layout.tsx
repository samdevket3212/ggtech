import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SiteShell } from '@/components/layout/SiteShell';
import { site } from '@/content/site';
import '@/styles/tokens.css';
import '@/styles/globals.css';

const display = localFont({ src: './fonts/SpaceGrotesk-Variable.woff2', variable: '--ff-display', weight: '300 700', display: 'swap' });
const sans = localFont({ src: './fonts/Inter-Variable.woff2', variable: '--ff-sans', weight: '100 900', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'GG Technology Media | Creative Design & Development Studio in Vista, CA', template: '%s | GG Technology Media' },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#0B0B10', colorScheme: 'dark', viewportFit: 'cover' };

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  slogan: site.tagline,
  address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region, addressCountry: site.country },
  areaServed: 'Worldwide',
  knowsAbout: ['2D and 3D design', 'Game design', 'Brand identity', 'UI/UX design', 'Web development', 'Software development', 'Digital marketing'],
  ...(site.email ? { email: site.email } : {}),
  ...(site.phone ? { telephone: site.phone.tel } : {}),
  ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} data-theme="dark">
      <body>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}

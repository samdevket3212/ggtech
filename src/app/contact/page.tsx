import { ContactPage } from '@/components/pages/ContactPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Start a Project | Contact GG Technology Media',
  absoluteTitle: true,
  description: 'Have a design, branding, game, website, or software project in mind? Contact GG Technology Media in Vista, California.',
  path: '/contact',
});

type Props = { searchParams: Promise<{ service?: string | string[] }> };

export default async function Page({ searchParams }: Props) {
  const s = (await searchParams).service;
  return <ContactPage serviceSlug={typeof s === 'string' ? s : undefined} />;
}

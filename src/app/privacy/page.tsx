import { LegalPage } from '@/components/pages/LegalPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = { ...pageMetadata({ title: 'Privacy Policy', description: 'How GG Technology Media handles information sent through this website.', path: '/privacy' }), robots: { index: false } };

export default function Page() {
  return <LegalPage kind="privacy" />;
}

import { ProcessPage } from '@/components/pages/ProcessPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'How We Work',
  description: 'How GG Technology Media takes creative and technical projects from discovery and design through development, launch and beyond.',
  path: '/process',
});

export default function Page() {
  return <ProcessPage />;
}

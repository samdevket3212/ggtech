import { WorkPage } from '@/components/pages/WorkPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Selected Work & Creative Concepts',
  description: 'Explore visual design, 3D art, game interface concepts, brand identities, and digital product explorations from GG Technology Media.',
  path: '/work',
});

export default function Page() {
  return <WorkPage />;
}

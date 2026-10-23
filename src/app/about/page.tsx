import { AboutPage } from '@/components/pages/AboutPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'About Our Creative Studio',
  description: 'Learn about GG Technology Media, a creative design and technology studio based in Vista, California.',
  path: '/about',
});

export default function Page() {
  return <AboutPage />;
}

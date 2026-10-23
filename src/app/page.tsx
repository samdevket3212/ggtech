import { HomePage } from '@/components/pages/HomePage';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'GG Technology Media | Creative Design & Development Studio in Vista, CA',
  absoluteTitle: true,
  description: site.description,
  path: '/',
});

export default function Page() {
  return <HomePage />;
}

import { ServicesPage } from '@/components/pages/ServicesPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Creative Design & Digital Services',
  description: 'Explore creative and digital services, including 2D/3D design, game design, branding, UI/UX, web development, software, and digital marketing.',
  path: '/services',
});

export default function Page() {
  return <ServicesPage />;
}

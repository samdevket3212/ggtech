import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getProject } from '@/content/projects';
import { getService, services } from '@/content/services';
import { projects } from '@/content/projects';
import { SiteShell } from '@/components/layout/SiteShell';
import { HomePage } from '@/components/pages/HomePage';
import { WorkPage } from '@/components/pages/WorkPage';
import { ProjectPage } from '@/components/pages/ProjectPage';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { ServicePage } from '@/components/pages/ServicePage';
import { AboutPage } from '@/components/pages/AboutPage';
import { ProcessPage } from '@/components/pages/ProcessPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { LegalPage } from '@/components/pages/LegalPage';
import { NotFoundPage } from '@/components/pages/NotFoundPage';
import { Icon } from '@/components/shared/Icon';
import { tokenToPath, useRouteToken } from './platform';

const IN_PAGE = new Set(['main', 'studio-intro', 'design', 'development', 'growth']);

const titles: Record<string, string> = {
  '/': 'GG Technology Media | Creative Design & Development Studio in Vista, CA',
  '/work': 'Selected Work & Creative Concepts | GG Technology Media',
  '/services': 'Creative Design & Digital Services | GG Technology Media',
  '/about': 'About Our Creative Studio | GG Technology Media',
  '/process': 'How We Work | GG Technology Media',
  '/contact': 'Start a Project | Contact GG Technology Media',
  '/privacy': 'Privacy Policy | GG Technology Media',
  '/terms': 'Terms of Use | GG Technology Media',
};

function resolve(token: string) {
  const t = IN_PAGE.has(token) ? '' : token;
  const { path, service } = tokenToPath(t);
  const segs = path.split('/').filter(Boolean);
  if (path === '/') return { el: <HomePage />, title: titles['/'] };
  if (path === '/work') return { el: <WorkPage />, title: titles[path] };
  if (segs[0] === 'work' && segs.length === 2) {
    const p = getProject(segs[1]);
    if (p) return { el: <ProjectPage project={p} />, title: `${p.name}: ${p.title} | GG Technology Media` };
  }
  if (path === '/services') return { el: <ServicesPage />, title: titles[path] };
  if (segs[0] === 'services' && segs.length === 2) {
    const s = getService(segs[1]);
    if (s) return { el: <ServicePage service={s} />, title: `${s.seoTitle} | GG Technology Media` };
  }
  if (path === '/about') return { el: <AboutPage />, title: titles[path] };
  if (path === '/process') return { el: <ProcessPage />, title: titles[path] };
  if (path === '/contact') return { el: <ContactPage serviceSlug={service} />, title: titles[path] };
  if (path === '/privacy') return { el: <LegalPage kind="privacy" />, title: titles[path] };
  if (path === '/terms') return { el: <LegalPage kind="terms" />, title: titles[path] };
  return { el: <NotFoundPage />, title: 'Page Not Found | GG Technology Media' };
}

function PreviewBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="preview-banner" role="note">
      <span>Preview build. The form isn&apos;t connected yet, so email ggtechdesigns@gmail.com instead.</span>
      <button type="button" onClick={() => setOpen(false)} aria-label="Dismiss preview note">
        <Icon name="close" size={14} />
      </button>
    </div>
  );
}

function App() {
  const token = useRouteToken();
  const routeKey = IN_PAGE.has(token) ? 'home' : token || 'home';
  const { el, title } = resolve(token);
  useEffect(() => {
    document.title = title;
    if (!IN_PAGE.has(token)) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    else document.getElementById(token)?.scrollIntoView();
  }, [routeKey]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <SiteShell>
      <div className="route" key={routeKey}>
        {el}
      </div>
      <PreviewBanner />
    </SiteShell>
  );
}

// Referenced so tree-shaking keeps every route's data in the bundle.
void services;
void projects;

createRoot(document.getElementById('root')!).render(<App />);

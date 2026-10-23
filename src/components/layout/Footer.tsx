import { footerExplore, site } from '@/content/site';
import { services } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Button } from '../shared/Button';
import { Monogram } from '../shared/Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" data-theme="dark">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__statement">
            <Monogram height={72} className="site-footer__mark" />
            <p className="site-footer__headline">
              Great ideas start somewhere.
              <br />
              <span>Let&apos;s start here.</span>
            </p>
            <Button href="/contact" size="lg">
              Start a Project
            </Button>
          </div>
          <div className="site-footer__cols">
            <nav aria-label="Explore">
              <h2 className="site-footer__h">Explore</h2>
              <ul>
                {footerExplore.map((l) => (
                  <li key={l.href}>
                    <AppLink href={l.href}>{l.label}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services">
              <h2 className="site-footer__h">Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <AppLink href={`/services/${s.slug}`}>{s.slug === 'branding-logo-design' ? 'Branding' : s.name}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="site-footer__h">Find Us</h2>
              <ul>
                <li>{site.location}</li>
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                )}
                {site.phone && (
                  <li>
                    <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                  </li>
                )}
                {site.social.map((s) => (
                  <li key={s.href}>
                    <AppLink href={s.href}>{s.label}</AppLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="site-footer__wordmark" aria-hidden="true">
          GG Technology Media
        </p>
        <div className="site-footer__bottom">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul>
            <li>
              <AppLink href="/privacy">Privacy Policy</AppLink>
            </li>
            <li>
              <AppLink href="/terms">Terms of Use</AppLink>
            </li>
          </ul>
          <p className="site-footer__closing">{site.closingLine}</p>
        </div>
      </div>
    </footer>
  );
}

import { getProject } from '@/content/projects';
import { getService, type Service } from '@/content/services';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Button } from '../shared/Button';
import { CTASection } from '../shared/CTASection';
import { FAQAccordion } from '../shared/FAQAccordion';
import { ProjectCard } from '../shared/ProjectCard';
import { ServiceCard } from '../shared/ServiceCard';
import { ServiceArtwork } from '../visuals/ServiceArtwork';

export function ServicePage({ service }: { service: Service }) {
  const related = service.relatedProjects.map(getProject).filter((p): p is NonNullable<typeof p> => !!p);
  const relatedServices = service.relatedServices.map(getService).filter((s): s is Service => !!s);
  const contactHref = `/contact?service=${service.slug}`;
  return (
    <>
      <section className={`svc-hero svc-hero--${service.art}`} data-theme="dark" aria-labelledby="svc-title">
        <div className="container svc-hero__inner">
          <div className="svc-hero__copy">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name }]} />
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="svc-hero__title" id="svc-title">
              {service.headline}
            </h1>
            <p className="svc-hero__lead">{service.summary}</p>
            <div className="svc-hero__actions">
              <Button href={contactHref}>{service.ctaLabel}</Button>
            </div>
          </div>
          <div className="svc-hero__art">
            <ServiceArtwork kind={service.art} />
          </div>
        </div>
      </section>

      <section className="section svc-intro" data-theme="light" aria-labelledby="svc-intro-title">
        <div className="container svc-intro__grid">
          <h2 className="svc-intro__title" id="svc-intro-title" data-reveal>
            {service.sectionHeading}
          </h2>
          <div className="svc-intro__body" data-reveal>
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section svc-deliverables" data-theme="light" aria-labelledby="svc-del-title">
        <div className="container">
          <p className="eyebrow" id="svc-del-title">
            {service.deliverablesLabel}
          </p>
          <ul className="svc-deliverables__list">
            {service.deliverables.map((d, i) => (
              <li key={d} data-reveal>
                <span className="svc-deliverables__n">{String(i + 1).padStart(2, '0')}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section svc-approach" data-theme="dark" aria-labelledby="svc-approach-title">
        <div className="container svc-approach__grid">
          <p className="eyebrow">Our approach</p>
          <div>
            <h2 className="svc-approach__title" id="svc-approach-title" data-reveal>
              {service.approachHeading}
            </h2>
            <p className="svc-approach__body" data-reveal>
              {service.approachBody}
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section svc-related" data-theme="dark" aria-labelledby="svc-related-title">
          <div className="container">
            <div className="svc-related__head">
              <h2 className="svc-related__title" id="svc-related-title">
                Related visual work
              </h2>
              <Button href="/work" variant="link">
                View All Work
              </Button>
            </div>
            <div className={'svc-related__grid svc-related__grid--' + related.length}>
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} shape={related.length === 1 ? 'wide' : 'standard'} showSummary={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section svc-more" data-theme="light" aria-labelledby="svc-more-title">
        <div className="container">
          <h2 className="svc-more__title" id="svc-more-title" data-reveal>
            Related services
          </h2>
          <div className="svc-more__grid">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" data-theme="dark" aria-labelledby="svc-faq-title">
        <div className="container faq-section__grid">
          <h2 className="faq-section__title" id="svc-faq-title" data-reveal>
            Questions about {service.name}.
          </h2>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      <CTASection heading={service.ctaHeading} primary={{ label: service.ctaLabel, href: contactHref }} secondary={{ label: 'Explore Our Services', href: '/services' }} />
    </>
  );
}

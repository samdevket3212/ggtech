import { projects, type Project } from '@/content/projects';
import { getService } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';
import { Tag } from '../shared/Tag';
import { ProjectArtwork } from '../visuals/ProjectArtwork';

export function ProjectPage({ project }: { project: Project }) {
  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];
  const isConcept = project.type === 'Studio Concept';
  return (
    <article className={`case case--${project.tone}`}>
      <header className="case-hero" data-theme="dark">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: project.name }]} />
          <div className="case-hero__head">
            <div>
              <p className="eyebrow case-hero__index">
                {project.index} · {project.name}
              </p>
              <h1 className="case-hero__title">{project.title}</h1>
            </div>
            <div className="case-hero__meta">
              {isConcept && <Tag kind="concept">{project.type}</Tag>}
              <p className="case-hero__summary">{project.overview}</p>
            </div>
          </div>
        </div>
        <div className="case-hero__media">
          <ProjectArtwork tone={project.tone} alt={project.coverAlt} />
        </div>
      </header>

      <section className="section case-facts" data-theme="dark" aria-label="Project details">
        <div className="container case-facts__grid">
          <dl className="case-facts__list">
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Disciplines</dt>
              <dd>{project.disciplines.join(', ')}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.categories.join(' / ')}</dd>
            </div>
          </dl>
          {isConcept && (
            <p className="case-facts__disclaimer">
              {project.name} is an independent studio exploration created to show our creative approach. It is not a client commission, and it has no client, budget,
              timeline or results attached.
            </p>
          )}
        </div>
      </section>

      <section className="section case-story" data-theme="light" aria-label="Case study">
        <div className="container case-story__grid">
          <div className="case-story__block" data-reveal>
            <h2 className="case-story__h">The Idea</h2>
            <p>{project.idea}</p>
          </div>
          <div className="case-story__block" data-reveal>
            <h2 className="case-story__h">The Direction</h2>
            <p>{project.direction}</p>
          </div>
          <div className="case-story__block" data-reveal>
            <h2 className="case-story__h">The Details</h2>
            <ul className="case-story__focus">
              {project.focusAreas.map((f) => (
                <li key={f}>
                  <Tag>{f}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section case-gallery" data-theme="dark" aria-labelledby="experience-title">
        <div className="container">
          <h2 className="case-gallery__title" id="experience-title" data-reveal>
            The Experience
          </h2>
          <div className="case-gallery__grid">
            {project.gallery.map((g, gi) => (
              <figure key={g.caption} className={'case-gallery__item' + (gi === 0 ? ' case-gallery__item--wide' : '')} data-reveal>
                <div className="case-gallery__media">
                  <ProjectArtwork tone={project.tone} variant={g.variant} alt={`${project.name}: ${g.caption}. Concept frame.`} />
                </div>
                <figcaption>
                  <span>{String(gi + 1).padStart(2, '0')}</span> {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-deliverables" data-theme="light" aria-labelledby="deliverables-title">
        <div className="container case-deliverables__grid">
          <h2 className="case-deliverables__title" id="deliverables-title" data-reveal>
            Key creative deliverables
          </h2>
          <ul className="case-deliverables__list">
            {project.focusAreas.map((f, k) => (
              <li key={f} data-reveal>
                <span>{String(k + 1).padStart(2, '0')}</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="case-deliverables__services">
            <p className="eyebrow">Related services</p>
            <ul>
              {project.relatedServices.map((slug) => {
                const s = getService(slug);
                return s ? (
                  <li key={slug}>
                    <AppLink href={`/services/${slug}`}>
                      {s.name} <Icon name="arrow" size={16} />
                    </AppLink>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="next-project" data-theme="dark" aria-label="Next project">
        <AppLink href={`/work/${next.slug}`} className="next-project__link" data-cursor="Next">
          <div className="next-project__media">
            <ProjectArtwork tone={next.tone} alt={next.coverAlt} />
          </div>
          <div className="container next-project__copy">
            <span className="eyebrow">Next Project</span>
            <span className="next-project__title">
              {next.name} <Icon name="arrow" size={48} strokeWidth={1.5} />
            </span>
            <span className="next-project__sub">{next.title}</span>
          </div>
        </AppLink>
      </section>

      <section className="section case-cta" data-theme="dark" aria-label="Start a project">
        <div className="container case-cta__inner">
          <p className="case-cta__text">Have an idea of your own? Let&apos;s talk.</p>
          <Button href="/contact">Start a Project</Button>
        </div>
      </section>
    </article>
  );
}

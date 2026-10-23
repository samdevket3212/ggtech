import { serviceCategories, servicesByCategory } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { CTASection } from '../shared/CTASection';
import { Icon } from '../shared/Icon';
import { ServiceArtwork } from '../visuals/ServiceArtwork';

export function ServicesPage() {
  let row = 0;
  return (
    <>
      <section className="page-hero" data-theme="dark" aria-labelledby="services-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Our Services</p>
          <h1 className="page-hero__title" id="services-title">
            From imagination to interaction.
          </h1>
          <p className="page-hero__lead">
            One creative studio. Multiple disciplines. We connect expressive design, purposeful development, and digital thinking to bring projects from concept to
            reality.
          </p>
          <nav className="page-hero__jump" aria-label="Service categories">
            {serviceCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                {c.number} {c.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {serviceCategories.map((c) => (
        <section key={c.id} id={c.id} className="section svc-cat" data-theme={c.id === 'development' ? 'dark' : 'light'} aria-labelledby={`cat-${c.id}`}>
          <div className="container">
            <header className="svc-cat__head">
              <p className="svc-cat__num">
                {c.number} · {c.label}
              </p>
              <h2 className="svc-cat__title" id={`cat-${c.id}`} data-reveal>
                {c.heading}
              </h2>
              <p className="svc-cat__desc" data-reveal>
                {c.description}
              </p>
            </header>
            <div className="svc-rows">
              {servicesByCategory(c.id).map((s) => {
                const flip = row++ % 2 === 1;
                return (
                  <article key={s.slug} className={'svc-row' + (flip ? ' svc-row--flip' : '')} data-reveal>
                    <div className={`svc-row__art svc-row__art--${s.art}`}>
                      <ServiceArtwork kind={s.art} />
                    </div>
                    <div className="svc-row__copy">
                      <p className="svc-row__num">{s.number}</p>
                      <h3 className="svc-row__title">{s.name}</h3>
                      <p className="svc-row__desc">{s.summary}</p>
                      <ul className="svc-row__caps" aria-label={`${s.name} capabilities`}>
                        {s.deliverables.slice(0, 5).map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <AppLink className="svc-row__link" href={`/services/${s.slug}`}>
                        Explore Service<span className="gg-visually-hidden">: {s.name}</span> <Icon name="arrow" size={18} />
                      </AppLink>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
      <CTASection
        heading="Great projects rarely fit into one category."
        body="Need branding and a website? Game visuals and interface design? Product design and development? We can help connect the right disciplines around your idea."
        primary={{ label: 'Tell Us About Your Project', href: '/contact' }}
      />
    </>
  );
}

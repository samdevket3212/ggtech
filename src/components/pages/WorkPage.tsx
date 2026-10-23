import { CTASection } from '../shared/CTASection';
import { WorkGrid } from '../shared/WorkGrid';

export function WorkPage() {
  return (
    <>
      <section className="page-hero" data-theme="dark" aria-labelledby="work-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Selected Work &amp; Studio Explorations</p>
          <h1 className="page-hero__title" id="work-title">
            A little imagination goes a long way.
          </h1>
          <p className="page-hero__lead">
            A collection of visual ideas, identities, interactive concepts, and digital experiences that explore how creative thinking can shape the way we see,
            play, and interact.
          </p>
          <p className="page-hero__note">
            <span className="gg-tag__dot" aria-hidden="true" /> Every piece shown here is an original studio concept, not commissioned client work.
          </p>
        </div>
      </section>
      <section className="section section--tight-top work-section" data-theme="dark" aria-label="Projects">
        <div className="container">
          <WorkGrid />
        </div>
      </section>
      <CTASection
        compact
        heading="Have an idea of your own?"
        body="Bring us the challenge, the rough idea or the early concept."
        primary={{ label: 'Start a Project', href: '/contact' }}
        secondary={{ label: 'Explore Our Services', href: '/services' }}
      />
    </>
  );
}

import { processStages } from '@/content/site';
import { CTASection } from '../shared/CTASection';
import { Tag } from '../shared/Tag';

const principles = [
  { heading: 'Clear communication', body: 'We keep project decisions, expectations, and feedback understandable.' },
  { heading: 'Purposeful iteration', body: 'Feedback helps refine the work while protecting the agreed creative direction and objectives.' },
  { heading: 'Design consistency', body: 'We pay attention to how each element contributes to the overall experience.' },
];

export function ProcessPage() {
  return (
    <>
      <section className="page-hero" data-theme="dark" aria-labelledby="process-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">How We Work</p>
          <h1 className="page-hero__title" id="process-title">
            From the first thought to the final detail.
          </h1>
          <p className="page-hero__lead">We believe clear communication, strong creative direction, and thoughtful execution are the foundations of good work.</p>
        </div>
      </section>

      <section className="section process-intro" data-theme="light" aria-labelledby="pi-title">
        <div className="container process-intro__grid">
          <h2 className="process-intro__title" id="pi-title" data-reveal>
            A connected process for creative and technical projects.
          </h2>
          <p className="process-intro__body" data-reveal>
            Every project is different, but our approach follows a clear path: understand the challenge, define the direction, develop the solution, and prepare it for
            the people who will experience it.
          </p>
        </div>
      </section>

      <section className="section process-steps" data-theme="dark" aria-label="Process stages">
        <div className="container">
          <ol className="process-steps__list">
            {processStages.map((s) => (
              <li key={s.number} className="process-step" data-reveal>
                <div className="process-step__rail">
                  <span className="process-step__num">{s.number}</span>
                  <span className="process-step__name">{s.longName ?? s.name}</span>
                </div>
                <div className="process-step__body">
                  <h2 className="process-step__heading">{s.heading}</h2>
                  <p>{s.body}</p>
                  <p className="eyebrow process-step__label">Possible deliverables</p>
                  <ul className="process-step__deliverables">
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <Tag>{d}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section work-principles" data-theme="light" aria-labelledby="wp-title">
        <div className="container">
          <h2 className="work-principles__title" id="wp-title" data-reveal>
            The way we like to work.
          </h2>
          <div className="work-principles__grid">
            {principles.map((p) => (
              <article key={p.heading} className="work-principle" data-reveal>
                <h3>{p.heading}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Let's figure out what your project could become." primary={{ label: 'Start the Conversation', href: '/contact' }} />
    </>
  );
}

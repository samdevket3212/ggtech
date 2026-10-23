import { CTASection } from '../shared/CTASection';
import { Monogram } from '../shared/Logo';

const principles = [
  { n: '01', label: 'Expression', heading: 'Make it distinctive.', body: 'We explore visual ideas that give brands, products, and experiences their own character.' },
  {
    n: '02',
    label: 'Precision',
    heading: 'Make every detail count.',
    body: 'From typography and interaction to motion and technical implementation, thoughtful details define the overall experience.',
  },
  {
    n: '03',
    label: 'Purpose',
    heading: 'Make it meaningful.',
    body: 'Creative work should do more than attract attention. It should communicate, guide, and serve a clear purpose.',
  },
];

const disciplines = ['2D & 3D Artwork', 'Gaming Experiences', 'Brand Identity', 'Digital Product Design', 'Web Development', 'Software Engineering', 'Digital Marketing'];

export function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about" data-theme="dark" aria-labelledby="about-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">The Studio</p>
          <h1 className="page-hero__title" id="about-title">
            Creative thinking. <em>Technical making.</em>
          </h1>
          <p className="page-hero__lead">
            GG Technology Media is a design-led creative technology studio based in Vista, California, bringing together visual design, interactive experiences, and
            digital development.
          </p>
        </div>
        <Monogram height={420} className="page-hero__mark" />
      </section>

      <section className="section about-philosophy" data-theme="light" aria-labelledby="philosophy-title">
        <div className="container about-philosophy__grid">
          <p className="eyebrow">Philosophy</p>
          <div>
            <h2 className="about-philosophy__title" id="philosophy-title" data-reveal>
              We believe the best ideas shouldn&apos;t stop at the concept stage.
            </h2>
            <div className="about-philosophy__body" data-reveal>
              <p>
                A strong idea deserves exceptional creative execution. A beautiful interface deserves thoughtful engineering. A memorable brand deserves a consistent
                experience wherever people encounter it.
              </p>
              <p>Our approach connects these disciplines, allowing design and technology to inform each other throughout the creative process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section principles" data-theme="dark" aria-labelledby="principles-title">
        <div className="container">
          <h2 className="eyebrow" id="principles-title">
            What drives us
          </h2>
          <div className="principles__list">
            {principles.map((p) => (
              <article key={p.n} className="principle" data-reveal>
                <p className="principle__label">
                  <span>{p.n}</span> {p.label}
                </p>
                <h3 className="principle__heading">{p.heading}</h3>
                <p className="principle__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section disciplines" data-theme="light" aria-labelledby="disc-title">
        <div className="container disciplines__grid">
          <div>
            <h2 className="disciplines__title" id="disc-title" data-reveal>
              One studio. Different perspectives.
            </h2>
            <div className="disciplines__body" data-reveal>
              <p>
                Our creative focus spans 2D and 3D artwork, gaming experiences, brand identity, and digital product design, supported by web development, software
                engineering, and digital marketing.
              </p>
              <p>This combination allows projects to move between disciplines without losing their creative direction.</p>
            </div>
          </div>
          <ul className="disciplines__orbit" aria-label="Disciplines">
            {disciplines.map((d, i) => (
              <li key={d} className={i < 4 ? 'is-core' : ''}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section location" data-theme="dark" aria-labelledby="location-title">
        <div className="container location__grid">
          <h2 className="location__title" id="location-title" data-reveal>
            Rooted in Vista, California.
          </h2>
          <div className="location__body" data-reveal>
            <p>GG Technology Media is based in Vista, California, creating design and digital experiences for ambitious ideas and projects.</p>
            <p className="location__coords" aria-hidden="true">
              VISTA · CA · USA
            </p>
          </div>
        </div>
      </section>

      <CTASection heading="Let's make something worth remembering." primary={{ label: 'Work With Us', href: '/contact' }} />
    </>
  );
}

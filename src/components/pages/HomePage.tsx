import { homeFaqs, processStages } from '@/content/site';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Button } from '../shared/Button';
import { CTASection } from '../shared/CTASection';
import { FAQAccordion } from '../shared/FAQAccordion';
import { Icon } from '../shared/Icon';
import { Marquee } from '../shared/Marquee';
import { ProjectCard } from '../shared/ProjectCard';
import { SectionHeading } from '../shared/SectionHeading';
import { ServiceCard } from '../shared/ServiceCard';
import { HeroArtwork } from '../visuals/HeroArtwork';

const capabilityBlocks = [
  {
    label: 'Design',
    heading: 'Make something unforgettable.',
    body: 'Visual identities, illustrations, 3D art, interactive worlds, and digital product experiences designed with purpose.',
    href: '/services#design',
  },
  {
    label: 'Develop',
    heading: 'Make it real.',
    body: 'Modern websites, digital platforms, and applications developed to translate ambitious designs into real-world functionality.',
    href: '/services#development',
  },
  {
    label: 'Grow',
    heading: 'Make an impact.',
    body: "Thoughtful creative campaigns and digital marketing that connect what you've built with the people it's for.",
    href: '/services#growth',
  },
];

export function HomePage() {
  const [orbit, playstate, kinetic, flowstate] = projects;
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" data-theme="dark" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">Independent Creative Technology Studio · Vista, California</p>
            <h1 className="hero__title" id="hero-title">
              We make digital worlds <em>worth exploring.</em>
            </h1>
            <p className="hero__lead">
              We turn ambitious ideas into extraordinary visual experiences. From 2D and 3D design to game worlds, memorable identities, and intuitive digital
              products, we blend creative thinking with technology to bring ideas to life.
            </p>
            <div className="hero__actions">
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
              <Button href="/contact">Start a Project</Button>
            </div>
          </div>
          <div className="hero__art">
            <HeroArtwork />
          </div>
        </div>
        <a className="hero__scroll" href="#studio-intro">
          <span>Scroll to discover</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Studio introduction */}
      <section className="section intro" data-theme="light" id="studio-intro" aria-labelledby="intro-title">
        <div className="container intro__grid">
          <SectionHeading
            layout="split"
            eyebrow="What we do"
            id="intro-title"
            title="Big ideas deserve more than ordinary execution."
            intro={
              <>
                <p>At GG Technology Media, design isn&apos;t decoration. It&apos;s how ideas take shape, products become intuitive, and brands create meaningful connections.</p>
                <p>We bring together visual storytelling, interactive design, and technical development to create work that looks distinctive and functions beautifully.</p>
              </>
            }
            action={
              <Button href="/about" variant="link" icon="arrow-up-right">
                Get to Know Our Studio
              </Button>
            }
          />
          <div className="intro__experiment" aria-hidden="true">
            <span className="intro__letter intro__letter--a">G</span>
            <span className="intro__letter intro__letter--b">G</span>
            <span className="intro__grid-lines" />
          </div>
        </div>
      </section>

      {/* 4. Featured work */}
      <section className="section featured" data-theme="dark" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured__head">
            <SectionHeading
              eyebrow="Selected Explorations"
              id="featured-title"
              title="Made to be seen. Built to be experienced."
              intro="A look at the visual systems, interfaces, identities, and interactive ideas that define our creative approach."
            />
            <Button href="/work" variant="secondary" className="featured__all">
              View All Work
            </Button>
          </div>
          <div className="featured__grid">
            <div className="featured__a">
              <ProjectCard project={orbit} shape="wide" />
            </div>
            <div className="featured__b">
              <ProjectCard project={playstate} shape="tall" />
            </div>
            <div className="featured__c">
              <ProjectCard project={kinetic} shape="tall" />
            </div>
            <div className="featured__d">
              <ProjectCard project={flowstate} shape="wide" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="section services-preview" data-theme="light" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our Expertise"
            id="services-title"
            title="Creative by nature. Technical by design."
            intro="From the first sketch to the final launch, we bring the disciplines together to create distinctive, functional digital experiences."
          />
          <div className="services-preview__grid">
            {services.map((s, i) => (
              <div key={s.slug} className={`services-preview__cell services-preview__cell--${i + 1}`}>
                <ServiceCard service={s} variant={i === 0 || i === 1 ? 'feature' : i === 6 ? 'wide' : 'standard'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Signature statement */}
      <section className="section manifesto" data-theme="dark" aria-labelledby="manifesto-title">
        <div className="container">
          <h2 className="manifesto__lines" id="manifesto-title">
            <span className="manifesto__line manifesto__line--1" data-reveal>
              Not just how it looks.
            </span>
            <span className="manifesto__line manifesto__line--2" data-reveal>
              Not just how it works.
            </span>
            <span className="manifesto__line manifesto__line--3" data-reveal>
              How it all comes <em>together.</em>
            </span>
          </h2>
          <p className="manifesto__body" data-reveal>
            Beautiful design gets attention. Thoughtful experiences keep it. Great technology makes it possible.
          </p>
        </div>
      </section>

      {/* 7. Process preview */}
      <section className="section process-preview" data-theme="dark" aria-labelledby="process-title">
        <div className="container">
          <div className="process-preview__head">
            <SectionHeading
              eyebrow="The Process"
              id="process-title"
              title="Good work doesn't happen by accident."
              intro="Every project starts with understanding the idea and ends with something built to make an impact."
            />
            <Button href="/process" variant="secondary">
              Explore Our Process
            </Button>
          </div>
          <ol className="process-preview__steps">
            {processStages.map((s) => (
              <li key={s.number} className="process-preview__step" data-reveal>
                <p className="process-preview__num">
                  {s.number} <span>/</span>
                </p>
                <h3 className="process-preview__name">{s.name}</h3>
                <p>{s.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Capabilities */}
      <section className="section capabilities" data-theme="light" aria-labelledby="cap-title">
        <div className="container">
          <h2 className="capabilities__title" id="cap-title" data-reveal>
            Different disciplines. One creative direction.
          </h2>
          <div className="capabilities__blocks">
            {capabilityBlocks.map((b, i) => (
              <AppLink key={b.label} href={b.href} className={`cap-block cap-block--${i + 1}`} data-reveal>
                <span className="cap-block__label">{b.label}</span>
                <span className="cap-block__heading">{b.heading}</span>
                <span className="cap-block__body">{b.body}</span>
                <span className="cap-block__arrow" aria-hidden="true">
                  <Icon name="arrow" size={24} />
                </span>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section faq-section" data-theme="dark" aria-labelledby="faq-title">
        <div className="container faq-section__grid">
          <h2 className="faq-section__title" id="faq-title" data-reveal>
            A few things you might be wondering.
          </h2>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <CTASection
        heading="Have something ambitious in mind?"
        body="Let's shape the idea, explore the possibilities, and create something that deserves attention."
        primary={{ label: "Let's Create Something", href: '/contact' }}
        secondary={{ label: 'Explore Our Services', href: '/services' }}
      />
    </>
  );
}

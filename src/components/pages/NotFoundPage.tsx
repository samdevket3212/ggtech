import { Button } from '../shared/Button';

export function NotFoundPage() {
  return (
    <section className="not-found" data-theme="dark" aria-labelledby="nf-title">
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <h1 className="not-found__title" id="nf-title">
          This page drifted out of orbit.
        </h1>
        <p className="not-found__lead">The page you were looking for doesn&apos;t exist or has moved.</p>
        <div className="not-found__actions">
          <Button href="/" variant="secondary" icon="arrow-left">
            Back to Home
          </Button>
          <Button href="/work">Explore Our Work</Button>
        </div>
      </div>
    </section>
  );
}

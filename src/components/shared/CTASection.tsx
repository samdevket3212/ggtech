import type { ReactNode } from 'react';
import { GlowObject } from '../visuals/GlowObject';
import { Button } from './Button';

export function CTASection({
  heading,
  body,
  primary,
  secondary,
  compact = false,
}: {
  heading: ReactNode;
  body?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  compact?: boolean;
}) {
  return (
    <section className={'cta-section' + (compact ? ' cta-section--compact' : '')} data-theme="dark" aria-labelledby="cta-heading">
      <GlowObject className="cta-section__glow" />
      <div className="container cta-section__inner">
        <h2 className="cta-section__title" id="cta-heading" data-reveal>
          {heading}
        </h2>
        {body && (
          <p className="cta-section__body" data-reveal>
            {body}
          </p>
        )}
        <div className="cta-section__actions" data-reveal>
          <Button href={primary.href} size="lg">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="link">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

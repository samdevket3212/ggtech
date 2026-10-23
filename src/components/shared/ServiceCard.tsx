import { AppLink } from '@/lib/platform';
import type { Service } from '@/content/services';
import { ServiceArtwork } from '../visuals/ServiceArtwork';
import { Icon } from './Icon';

export function ServiceCard({ service, variant = 'standard' }: { service: Service; variant?: 'standard' | 'feature' | 'wide' }) {
  return (
    <article className={`gg-service gg-service--${variant} gg-service--${service.art}`} data-reveal>
      <div className="gg-service__art">
        <ServiceArtwork kind={service.art} />
      </div>
      <div className="gg-service__body">
        <span className="gg-service__num">{service.number}</span>
        <h3 className="gg-service__title">{service.name}</h3>
        <p className="gg-service__desc">{service.cardText}</p>
        <AppLink className="gg-service__link" href={`/services/${service.slug}`}>
          <span>Explore Service</span>
          <span className="gg-visually-hidden">: {service.name}</span>
          <Icon name="arrow" size={18} />
        </AppLink>
      </div>
    </article>
  );
}

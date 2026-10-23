import { site } from '@/content/site';
import { getService } from '@/content/services';
import { ContactForm } from '../shared/ContactForm';
import { CopyContact } from '../shared/CopyContact';
import { Icon } from '../shared/Icon';

export function ContactPage({ serviceSlug }: { serviceSlug?: string }) {
  const initial = serviceSlug ? getService(serviceSlug)?.contactLabel : undefined;
  return (
    <section className="contact" data-theme="dark" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Start Something</p>
          <h1 className="contact__title" id="contact-title">
            Let&apos;s make something <em>remarkable.</em>
          </h1>
          <p className="contact__lead">Have a project, an early idea, or a challenge that needs a creative perspective? Tell us a little about it.</p>
          <ul className="contact__details">
            <li>
              <Icon name="pin" size={20} />
              Based in {site.location}
            </li>
            {site.email && (
              <li>
                <Icon name="mail" size={20} />
                <CopyContact href={`mailto:${site.email}`} value={site.email} label="email address" />
              </li>
            )}
            {site.phone && (
              <li>
                <Icon name="phone" size={20} />
                <CopyContact href={`tel:${site.phone.tel}`} value={site.phone.display} label="phone number" />
              </li>
            )}
          </ul>
          <ol className="contact__next" aria-label="What happens next">
            <li>
              <span>01</span>Tell us about the idea, however early it is.
            </li>
            <li>
              <span>02</span>We read every inquiry and reply with questions or next steps.
            </li>
            <li>
              <span>03</span>Together we shape the scope and direction.
            </li>
          </ol>
        </div>
        <div className="contact__form">
          <ContactForm initialService={initial} key={initial ?? 'none'} />
        </div>
      </div>
    </section>
  );
}

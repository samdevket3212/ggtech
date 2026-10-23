'use client';
import { useRef, useState, type FormEvent } from 'react';
import { contactOptions, site } from '@/content/site';
import { AppLink, submitInquiry, type InquiryPayload } from '@/lib/platform';
import { Icon } from './Icon';

type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured';

const direct = [site.email && `email us at ${site.email}`, site.phone && `call ${site.phone.display}`].filter(Boolean).length
  ? 'Please ' + [site.email && `email us at ${site.email}`, site.phone && `call ${site.phone.display}`].filter(Boolean).join(' or ') + '.'
  : 'Please use our business contact details.';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(p: Pick<InquiryPayload, 'name' | 'email' | 'message' | 'consent'>): Errors {
  const e: Errors = {};
  if (!p.name.trim()) e.name = 'Tell us what to call you.';
  if (!p.email.trim()) e.email = 'Add an email address so we can reply.';
  else if (!EMAIL.test(p.email.trim())) e.email = 'Enter a valid email address, like name@company.com.';
  if (p.message.trim().length < 10) e.message = 'Share a sentence or two about your project.';
  if (!p.consent) e.consent = 'Please agree to the privacy terms so we can respond.';
  return e;
}

function Chips({
  legend,
  name,
  options,
  multiple,
  value,
  onChange,
  optional,
}: {
  legend: string;
  name: string;
  options: string[];
  multiple: boolean;
  value: string[];
  onChange: (v: string[]) => void;
  optional?: boolean;
}) {
  return (
    <fieldset className="gg-choices">
      <legend className="gg-field__label">
        {legend}
        {optional && <span className="gg-field__opt"> (optional)</span>}
      </legend>
      <div className="gg-choices__list">
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <label key={o} className={'gg-chip' + (on ? ' gg-chip--on' : '')}>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={o}
                checked={on}
                onChange={() => onChange(multiple ? (on ? value.filter((x) => x !== o) : [...value, o]) : on ? [] : [o])}
                onClick={(e) => {
                  if (!multiple && on) {
                    e.preventDefault();
                    onChange([]);
                  }
                }}
              />
              {on && multiple && <Icon name="check" size={16} />}
              <span>{o}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function ContactForm({ initialService }: { initialService?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [svc, setSvc] = useState<string[]>(initialService ? [initialService] : []);
  const [budget, setBudget] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    const errs = validateInquiry({ name, email, message, consent });
    setErrors(errs);
    const firstError = (['name', 'email', 'message', 'consent'] as const).find((k) => errs[k]);
    if (firstError) {
      requestAnimationFrame(() => document.getElementById(`cf-${firstError}`)?.focus());
      return;
    }
    setStatus('sending');
    const res = await submitInquiry({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      services: svc,
      budget: budget[0] ?? '',
      timeline: timeline[0] ?? '',
      message: message.trim(),
      consent,
      website,
    });
    const next: Status = res.ok ? 'sent' : res.reason === 'not-configured' ? 'not-configured' : 'error';
    setStatus(next);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--done" ref={statusRef} tabIndex={-1} role="status">
        <span className="contact-form__done-icon">
          <Icon name="check" size={28} strokeWidth={2.25} />
        </span>
        <h2 className="contact-form__title">Message received.</h2>
        <p>Thanks for reaching out to GG Technology Media. Your inquiry has been submitted successfully.</p>
      </div>
    );
  }

  const field = (id: keyof Errors) => ({ 'aria-invalid': errors[id] ? true : undefined, 'aria-describedby': errors[id] ? `${id}-error` : undefined });
  const errorEl = (id: keyof Errors) => (
    <p id={`${id}-error`} className="gg-field__error" aria-live="polite">
      {errors[id] && (
        <>
          <Icon name="alert" size={16} />
          <span>{errors[id]}</span>
        </>
      )}
    </p>
  );

  return (
    <form className="contact-form" ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby="form-title">
      <h2 className="contact-form__title" id="form-title">
        Tell us about your idea.
      </h2>
      <div className="contact-form__row">
        <div className={'gg-field' + (errors.name ? ' gg-field--error' : '')}>
          <label className="gg-field__label" htmlFor="cf-name">
            Your Name<span className="gg-field__req" aria-hidden="true"> *</span>
          </label>
          <input id="cf-name" className="gg-field__control" name="name" autoComplete="name" placeholder="What should we call you?" required value={name} onChange={(e) => setName(e.target.value)} {...field('name')} />
          {errorEl('name')}
        </div>
        <div className={'gg-field' + (errors.email ? ' gg-field--error' : '')}>
          <label className="gg-field__label" htmlFor="cf-email">
            Email Address<span className="gg-field__req" aria-hidden="true"> *</span>
          </label>
          <input id="cf-email" className="gg-field__control" type="email" name="email" inputMode="email" autoComplete="email" placeholder="Where can we reach you?" required value={email} onChange={(e) => setEmail(e.target.value)} {...field('email')} />
          {errorEl('email')}
        </div>
      </div>
      <div className="gg-field">
        <label className="gg-field__label" htmlFor="cf-company">
          Company / Organization<span className="gg-field__opt"> (optional)</span>
        </label>
        <input id="cf-company" className="gg-field__control" name="company" autoComplete="organization" placeholder="Your company name (optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <Chips legend="What do you need help with?" name="services" options={contactOptions.services} multiple value={svc} onChange={setSvc} />
      <Chips legend="Estimated Project Budget" name="budget" options={contactOptions.budgets} multiple={false} value={budget} onChange={setBudget} optional />
      <p className="contact-form__note">Budget ranges help us plan the conversation. They are not minimum prices.</p>
      <Chips legend="Desired Timeline" name="timeline" options={contactOptions.timelines} multiple={false} value={timeline} onChange={setTimeline} optional />
      <div className={'gg-field' + (errors.message ? ' gg-field--error' : '')}>
        <label className="gg-field__label" htmlFor="cf-message">
          Tell us about your project<span className="gg-field__req" aria-hidden="true"> *</span>
        </label>
        <textarea id="cf-message" className="gg-field__control" name="message" rows={6} required placeholder="What are you hoping to create? Share your goals, inspiration, or anything you think we should know." value={message} onChange={(e) => setMessage(e.target.value)} {...field('message')} />
        {errorEl('message')}
      </div>
      <div className="contact-form__hp" aria-hidden="true">
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className={'gg-check' + (errors.consent ? ' gg-check--error' : '')}>
        <input id="cf-consent" type="checkbox" className="gg-check__input" checked={consent} onChange={(e) => setConsent(e.target.checked)} {...field('consent')} />
        <label htmlFor="cf-consent" className="gg-check__label">
          <span className="gg-check__box" aria-hidden="true">
            <Icon name="check" size={14} strokeWidth={2.5} />
          </span>
          <span>
            I agree to the processing of my information for the purpose of responding to this inquiry, as described in the <AppLink href="/privacy">Privacy Policy</AppLink>.
          </span>
        </label>
        {errorEl('consent')}
      </div>
      <div className="contact-form__submit">
        <button type="submit" className="gg-btn gg-btn--primary gg-btn--lg" disabled={status === 'sending'} aria-busy={status === 'sending'}>
          <span className="gg-btn__label">{status === 'sending' ? 'Sending…' : 'Send Project Inquiry'}</span>
          <span className="gg-btn__icon gg-btn__icon--arrow-up-right">{status === 'sending' ? <span className="gg-spinner" /> : <Icon name="arrow-up-right" size={18} />}</span>
        </button>
      </div>
      <div ref={statusRef} tabIndex={-1} aria-live="assertive" className="contact-form__status">
        {(status === 'error' || status === 'not-configured') && (
          <div className="contact-form__alert" role="alert">
            <Icon name="alert" size={20} />
            <div>
              <p className="contact-form__alert-title">Something didn&apos;t go through.</p>
              <p>
                {status === 'not-configured'
                  ? `Online inquiries aren't connected yet, so your message was not sent. ${direct}`
                  : `Please try again. If the problem continues, ${direct.charAt(0).toLowerCase() + direct.slice(1)}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

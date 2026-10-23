'use client';
import { useEffect, useState } from 'react';
import { navigation } from '@/content/site';
import { AppLink, useCurrentPath } from '@/lib/platform';
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';
import { Logo } from '../shared/Logo';

export function Header() {
  const path = useCurrentPath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => path === href || path.startsWith(href + '/');

  return (
    <header className={'site-header' + (scrolled || open ? ' is-scrolled' : '') + (open ? ' is-open' : '')}>
      <div className="site-header__bar">
        <Logo href="/" size={38} className="site-header__logo" />
        <nav className="site-header__nav" aria-label="Main">
          {navigation.map((l) => (
            <AppLink key={l.href} href={l.href} className="site-header__link" aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </AppLink>
          ))}
        </nav>
        <Button href="/contact" className="site-header__cta">
          Start a Project
        </Button>
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="gg-visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <nav aria-label="Mobile">
          {navigation.map((l, i) => (
            <AppLink key={l.href} href={l.href} className="mobile-nav__link" style={{ '--i': i } as React.CSSProperties} aria-current={isActive(l.href) ? 'page' : undefined}>
              <span className="mobile-nav__num">0{i + 1}</span>
              {l.label}
            </AppLink>
          ))}
        </nav>
        <Button href="/contact" size="lg">
          Start a Project
        </Button>
        <p className="mobile-nav__foot">Vista, California, USA</p>
      </div>
    </header>
  );
}

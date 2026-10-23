'use client';
import { useEffect } from 'react';
import { useCurrentPath } from '@/lib/platform';

/**
 * Scroll reveals and the portfolio cursor. Content is fully visible at rest: only
 * elements below the first screen are prepared for a reveal, and nothing is hidden
 * when motion is reduced or IntersectionObserver is missing.
 */
export function Effects() {
  const path = useCurrentPath();

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)'));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.classList.add('is-revealed');
            el.classList.remove('is-pending');
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) {
        el.classList.add('is-revealed');
        return;
      }
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute('data-reveal')) : [];
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.setProperty('--reveal-delay', `${Math.min(idx, 5) * 80}ms`);
      el.classList.add('is-pending');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = document.createElement('div');
    dot.className = 'gg-cursor';
    dot.setAttribute('aria-hidden', 'true');
    dot.textContent = 'View';
    document.body.appendChild(dot);
    let raf = 0;
    const move = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.('[data-cursor]');
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        dot.classList.toggle('is-on', !!t);
      });
    };
    const leave = () => dot.classList.remove('is-on');
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      dot.remove();
    };
  }, []);

  return null;
}

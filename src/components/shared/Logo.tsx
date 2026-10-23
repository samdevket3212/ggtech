import { useId } from 'react';
import { AppLink } from '@/lib/platform';

const G_FRONT = 'M50.97 17.03A24 24 0 1 0 58 34M63 34H44.8';
const G_BACK = 'M70.97 17.03A24 24 0 1 0 78 34M83 34H64.8';

export function Monogram({ height = 40, className }: { height?: number; className?: string }) {
  const id = 'ggm' + useId().replace(/[^A-Za-z0-9_-]/g, '');
  return (
    <svg className={['gg-logo__mark', className].filter(Boolean).join(' ')} viewBox="5 5 78 58" height={height} width={(height * 78) / 58} aria-hidden="true" focusable="false">
      <defs>
        <mask id={id} maskUnits="userSpaceOnUse" x={-20} y={-20} width={140} height={120}>
          <rect x={-20} y={-20} width={140} height={120} fill="#fff" />
          <path d={G_FRONT} fill="none" stroke="#000" strokeWidth={16} />
        </mask>
      </defs>
      <g fill="none" strokeWidth={10}>
        <path d={G_BACK} className="gg-logo__back" mask={`url(#${id})`} />
        <path d={G_FRONT} className="gg-logo__front" />
      </g>
    </svg>
  );
}

export function Logo({ size = 40, href, variant = 'wordmark', className }: { size?: number; href?: string; variant?: 'wordmark' | 'monogram'; className?: string }) {
  const content = (
    <>
      <Monogram height={size} />
      {variant === 'wordmark' && (
        <span className="gg-logo__text" aria-hidden="true">
          <span>Technology</span>
          <span>Media</span>
        </span>
      )}
      <span className="gg-visually-hidden">GG Technology Media</span>
    </>
  );
  const cls = ['gg-logo', variant === 'wordmark' && 'gg-logo--wordmark', className].filter(Boolean).join(' ');
  const style = { '--gg-logo-size': size + 'px' } as React.CSSProperties;
  if (href)
    return (
      <AppLink href={href} className={cls} style={style}>
        {content}
      </AppLink>
    );
  return (
    <span className={cls} style={style}>
      {content}
    </span>
  );
}

import type { ReactNode } from 'react';
export function Tag({ kind = 'default', children, className }: { kind?: 'default' | 'concept' | 'accent'; children?: ReactNode; className?: string }) {
  return (
    <span className={['gg-tag', `gg-tag--${kind}`, className].filter(Boolean).join(' ')}>
      {kind === 'concept' && <span className="gg-tag__dot" aria-hidden="true" />}
      {children ?? (kind === 'concept' ? 'Studio Concept' : null)}
    </span>
  );
}

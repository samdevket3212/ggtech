import type { ServiceArtKind } from '@/content/services';

/*
 * One original composition per service. Line work uses currentColor, so each piece
 * follows the section theme; accents come from the brand tokens. Motion is CSS
 * (see .sa-* in globals.css) and stops under prefers-reduced-motion.
 */
export function ServiceArtwork({ kind, className }: { kind: ServiceArtKind; className?: string }) {
  const cls = ['sa', `sa--${kind}`, className].filter(Boolean).join(' ');
  switch (kind) {
    case '2d-3d':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="sa3d-orb" cx="35%" cy="30%" r="75%">
              <stop offset="0" stopColor="#e9e6ff" />
              <stop offset="0.35" stopColor="#9188FF" />
              <stop offset="1" stopColor="#1d1850" />
            </radialGradient>
          </defs>
          <g className="sa-spin" style={{ transformOrigin: '150px 150px' }} fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M150 50L237 100V200L150 250L63 200V100Z" />
            <path d="M63 100L150 150L237 100M150 150V250" />
            <path d="M150 50L150 150M63 200L150 150L237 200" strokeDasharray="3 5" opacity="0.6" />
          </g>
          <circle cx="285" cy="170" r="62" fill="url(#sa3d-orb)" />
          <ellipse cx="285" cy="250" rx="58" ry="7" fill="currentColor" opacity="0.12" />
          <circle cx="330" cy="70" r="12" className="sa-accent sa-bob" />
          <path d="M40 270h120M40 270v-8M100 270v-8M160 270v-8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'game':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M30 70V40h30M370 70V40h-30M30 230v30h30M370 230v30h-30" strokeWidth="2.5" />
          </g>
          <g className="sa-pulse" style={{ transformOrigin: '200px 150px' }}>
            <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="200" cy="150" r="4" className="sa-accent" />
            <path d="M200 98v18M200 184v18M148 150h18M234 150h18" stroke="currentColor" strokeWidth="1.5" />
          </g>
          <rect x="52" y="62" width="110" height="8" rx="4" fill="currentColor" opacity="0.18" />
          <rect x="52" y="62" width="78" height="8" rx="4" className="sa-accent sa-bar" />
          <rect x="52" y="78" width="110" height="5" rx="2.5" fill="currentColor" opacity="0.18" />
          <rect x="52" y="78" width="54" height="5" rx="2.5" className="sa-violet" />
          <g transform="translate(286 196)">
            <rect width="62" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.25" />
            <path d="M8 34l14-12 10 8 14-16 8 6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <circle cx="40" cy="18" r="3.5" className="sa-accent" />
          </g>
          <g transform="translate(52 212)" fill="none" stroke="currentColor" strokeWidth="1.25">
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={i * 30} width="24" height="24" rx="5" opacity={i === 1 ? 1 : 0.55} />
            ))}
            <rect x="30" width="24" height="24" rx="5" className="sa-violet-fill" stroke="none" />
          </g>
        </svg>
      );
    case 'brand':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g stroke="currentColor" strokeWidth="0.75" opacity="0.35" fill="none">
            <path d="M40 60h320M40 240h320M80 30v240M320 30v240" />
            <circle cx="200" cy="150" r="90" />
          </g>
          <text x="200" y="196" textAnchor="middle" className="sa-type">
            Aa
          </text>
          <g className="sa-morph">
            <rect x="290" y="70" width="56" height="56" className="sa-accent" rx="28" />
          </g>
          <rect x="54" y="196" width="40" height="40" className="sa-violet" />
          <text x="54" y="58" className="sa-caption">
            DISPLAY / 500
          </text>
        </svg>
      );
    case 'uiux':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g className="sa-drift-a">
            <rect x="60" y="56" width="200" height="150" rx="14" className="sa-panel" />
            <rect x="78" y="76" width="70" height="8" rx="4" fill="currentColor" opacity="0.8" />
            <rect x="78" y="94" width="120" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <rect x="78" y="150" width="76" height="30" rx="15" className="sa-accent" />
            <rect x="164" y="150" width="76" height="30" rx="15" fill="none" stroke="currentColor" strokeWidth="1.25" />
          </g>
          <g className="sa-drift-b">
            <rect x="238" y="96" width="106" height="186" rx="18" className="sa-panel" />
            <rect x="252" y="114" width="78" height="56" rx="8" className="sa-violet" />
            <rect x="252" y="182" width="60" height="6" rx="3" fill="currentColor" opacity="0.7" />
            <rect x="252" y="196" width="78" height="5" rx="2.5" fill="currentColor" opacity="0.25" />
            <rect x="252" y="208" width="70" height="5" rx="2.5" fill="currentColor" opacity="0.25" />
            <rect x="268" y="262" width="46" height="4" rx="2" fill="currentColor" opacity="0.5" />
          </g>
          <path d="M150 230c30 30 60 30 88 0" fill="none" stroke="currentColor" strokeDasharray="4 5" strokeWidth="1.25" opacity="0.6" />
        </svg>
      );
    case 'web':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <rect x="30" y="40" width="340" height="220" rx="12" className="sa-panel" />
          <path d="M30 72h340" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="50" cy="56" r="4" fill="currentColor" opacity="0.4" />
          <circle cx="64" cy="56" r="4" fill="currentColor" opacity="0.4" />
          <rect x="96" y="50" width="180" height="12" rx="6" fill="currentColor" opacity="0.12" />
          <g className="sa-reflow">
            <rect className="sa-b1 sa-violet" x="52" y="92" width="190" height="96" rx="6" />
            <rect className="sa-b2" x="256" y="92" width="92" height="44" rx="6" fill="currentColor" opacity="0.2" />
            <rect className="sa-b3 sa-accent" x="256" y="144" width="92" height="44" rx="6" />
            <rect className="sa-b4" x="52" y="200" width="296" height="10" rx="5" fill="currentColor" opacity="0.2" />
            <rect className="sa-b5" x="52" y="220" width="200" height="10" rx="5" fill="currentColor" opacity="0.2" />
          </g>
          <text x="52" y="282" className="sa-caption">
            {'</> 360 · 768 · 1440'}
          </text>
        </svg>
      );
    case 'software':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <rect x="30" y="40" width="64" height="220" rx="10" className="sa-panel" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="44" y={66 + i * 26} width={i === 1 ? 36 : 28} height="6" rx="3" fill="currentColor" opacity={i === 1 ? 0.9 : 0.3} />
          ))}
          <rect x="106" y="40" width="264" height="120" rx="10" className="sa-panel" />
          <path className="sa-line" d="M126 132l34-22 30 12 34-34 32 18 34-30 40 10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="330" cy="86" r="5" className="sa-accent" />
          <g transform="translate(106 172)">
            <rect width="128" height="88" rx="10" className="sa-panel" />
            {[30, 54, 40, 66, 48].map((h, i) => (
              <rect key={i} className="sa-grow" style={{ animationDelay: `${i * 120}ms` }} x={16 + i * 21} y={76 - h} width="12" height={h} rx="3" fill={i === 3 ? 'var(--violet)' : 'currentColor'} opacity={i === 3 ? 1 : 0.35} />
            ))}
          </g>
          <g transform="translate(242 172)">
            <rect width="128" height="88" rx="10" className="sa-panel" />
            <circle cx="44" cy="44" r="24" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.15" />
            <circle cx="44" cy="44" r="24" fill="none" className="sa-ring" strokeWidth="8" strokeDasharray="100 151" transform="rotate(-90 44 44)" />
            <rect x="80" y="34" width="34" height="6" rx="3" fill="currentColor" opacity="0.7" />
            <rect x="80" y="48" width="24" height="5" rx="2.5" fill="currentColor" opacity="0.3" />
          </g>
        </svg>
      );
    case 'marketing':
    default:
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g className="sa-tilt-a">
            <rect x="48" y="40" width="150" height="210" rx="4" className="sa-violet" />
            <text x="62" y="96" className="sa-poster">
              SAY
            </text>
            <text x="62" y="136" className="sa-poster">
              MORE.
            </text>
            <circle cx="150" cy="200" r="30" className="sa-accent" />
          </g>
          <g className="sa-tilt-b">
            <rect x="214" y="70" width="140" height="140" rx="10" className="sa-panel" />
            <rect x="228" y="84" width="112" height="76" rx="6" fill="currentColor" opacity="0.14" />
            <rect x="228" y="170" width="70" height="6" rx="3" fill="currentColor" opacity="0.7" />
            <rect x="228" y="184" width="96" height="5" rx="2.5" fill="currentColor" opacity="0.3" />
          </g>
          <path d="M226 254l26-18 24 10 30-26 30 14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="336" cy="234" r="5" className="sa-accent" />
        </svg>
      );
  }
}

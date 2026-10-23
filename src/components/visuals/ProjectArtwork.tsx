import type { ReactNode } from 'react';
import type { ProjectTone } from '@/content/projects';

/*
 * Original concept artwork for the four studio explorations, drawn as SVG so the
 * site never shows a broken or stock image. Variant 0 is the cover; 1-4 are the
 * case study gallery frames listed in the brief. Artwork may use art colours
 * outside the UI palette (PLAYSTATE cyan, KINETIC orange).
 */
const INK = '#0B0B10';
const LIME = '#C8FF5F';
const VIOLET = '#9188FF';
const IVORY = '#F6F5F0';
const CYAN = '#22D3EE';
const ORANGE = '#FF6B2C';
const DISPLAY = 'var(--font-display)';
const fitFor = (v: number): 'slice' | 'meet' => (v === 0 ? 'slice' : 'meet');

function Frame({ children, bg, label, fit = 'slice' }: { children: ReactNode; bg: string; label: string; fit?: 'slice' | 'meet' }) {
  return (
    <svg className="pa" viewBox="0 0 1600 1000" preserveAspectRatio={`xMidYMid ${fit}`} role="img" aria-label={label} style={{ background: bg }}>
      <rect width="1600" height="1000" fill={bg} />
      {children}
    </svg>
  );
}

function OrbitDefs({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={`${id}-sky`} cx="70%" cy="30%" r="80%">
        <stop offset="0" stopColor="#2c2560" />
        <stop offset="0.6" stopColor={INK} />
      </radialGradient>
      <radialGradient id={`${id}-orb`} cx="34%" cy="28%" r="78%">
        <stop offset="0" stopColor="#f1efff" />
        <stop offset="0.2" stopColor={VIOLET} />
        <stop offset="0.6" stopColor="#3a3290" />
        <stop offset="1" stopColor="#0e0c22" />
      </radialGradient>
      <radialGradient id={`${id}-lime`} cx="35%" cy="30%" r="70%">
        <stop offset="0" stopColor="#f4ffd9" />
        <stop offset="0.35" stopColor={LIME} />
        <stop offset="1" stopColor="#56800e" />
      </radialGradient>
      <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="40" />
      </filter>
    </defs>
  );
}

function Orbit({ v, label }: { v: number; label: string }) {
  const id = `orb${v}`;
  if (v === 1) {
    return (
      <Frame fit={fitFor(v)} bg={INK} label={label}>
        <OrbitDefs id={id} />
        <circle cx="1050" cy="560" r="760" fill={`url(#${id}-orb)`} />
        <ellipse cx="820" cy="300" rx="180" ry="90" fill="#fff" opacity="0.28" filter={`url(#${id}-glow)`} />
        <path d="M0 860 C 500 700 1100 980 1600 760" stroke={LIME} strokeWidth="26" fill="none" />
        <text x="80" y="140" fill={IVORY} fontFamily={DISPLAY} fontSize="38" letterSpacing="6" opacity="0.7">
          MATERIAL 03 · SATIN VIOLET
        </text>
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame fit={fitFor(v)} bg={INK} label={label}>
        <OrbitDefs id={id} />
        <rect width="1600" height="1000" fill={`url(#${id}-sky)`} />
        <ellipse cx="800" cy="1080" rx="1200" ry="320" fill="#141224" />
        {[
          [300, 520, 120],
          [760, 380, 210],
          [1250, 560, 90],
          [1080, 250, 40],
        ].map(([x, y, r], i) => (
          <g key={i}>
            <ellipse cx={x} cy={800} rx={r * 1.1} ry={r * 0.12} fill="#000" opacity="0.6" />
            <circle cx={x} cy={y} r={r} fill={i === 3 ? `url(#${id}-lime)` : `url(#${id}-orb)`} />
          </g>
        ))}
        <ellipse cx="760" cy="380" rx="420" ry="90" fill="none" stroke={LIME} strokeWidth="8" transform="rotate(-10 760 380)" />
      </Frame>
    );
  }
  if (v === 3) {
    const lights = ['#2c2560', '#3c1f4f', '#10263a', '#2b2a12'];
    return (
      <Frame fit={fitFor(v)} bg="#08080c" label={label}>
        <OrbitDefs id={id} />
        {lights.map((c, i) => {
          const x = 60 + (i % 2) * 760;
          const y = 50 + Math.floor(i / 2) * 470;
          return (
            <g key={i}>
              <rect x={x} y={y} width="720" height="430" rx="24" fill={c} />
              <circle cx={x + 360} cy={y + 215} r="150" fill={i === 3 ? `url(#${id}-lime)` : `url(#${id}-orb)`} opacity={1 - i * 0.12} />
              <text x={x + 32} y={y + 60} fill={IVORY} fontFamily={DISPLAY} fontSize="30" letterSpacing="4" opacity="0.75">
                {['KEY 45°', 'RIM 120°', 'COOL FILL', 'LIME BOUNCE'][i]}
              </text>
            </g>
          );
        })}
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame fit={fitFor(v)} bg="#141320" label={label}>
        <OrbitDefs id={id} />
        <rect x="160" y="90" width="1280" height="820" rx="28" fill={INK} stroke="#30303A" strokeWidth="3" />
        <rect x="160" y="90" width="1280" height="64" rx="28" fill="#17171F" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={210 + i * 30} cy="122" r="9" fill="#30303A" />
        ))}
        <text x="240" y="390" fill={IVORY} fontFamily={DISPLAY} fontSize="96" fontWeight="500" letterSpacing="-3">
          A world
        </text>
        <text x="240" y="490" fill={IVORY} fontFamily={DISPLAY} fontSize="96" fontWeight="500" letterSpacing="-3">
          in motion.
        </text>
        <rect x="240" y="560" width="250" height="70" rx="35" fill={LIME} />
        <circle cx="1080" cy="520" r="230" fill={`url(#${id}-orb)`} />
        <ellipse cx="1080" cy="560" rx="330" ry="70" fill="none" stroke={LIME} strokeWidth="10" transform="rotate(-12 1080 560)" />
      </Frame>
    );
  }
  return (
    <Frame fit={fitFor(v)} bg={INK} label={label}>
      <OrbitDefs id={id} />
      <rect width="1600" height="1000" fill={`url(#${id}-sky)`} />
      <circle cx="840" cy="500" r="300" fill={VIOLET} opacity="0.3" filter={`url(#${id}-glow)`} />
      <circle cx="840" cy="480" r="290" fill={`url(#${id}-orb)`} />
      <path d="M380 600 A 520 150 -12 0 0 1300 420" stroke={LIME} strokeWidth="22" fill="none" strokeLinecap="round" />
      <circle cx="1220" cy="230" r="46" fill={`url(#${id}-lime)`} />
      <circle cx="420" cy="300" r="14" fill={IVORY} opacity="0.8" />
    </Frame>
  );
}

function Playstate({ v, label }: { v: number; label: string }) {
  const id = `ps${v}`;
  const defs = (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#03101f" />
        <stop offset="0.55" stopColor="#0a2d57" />
        <stop offset="1" stopColor="#020a14" />
      </linearGradient>
      <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="10" />
      </filter>
    </defs>
  );
  const grid = (
    <g stroke={CYAN} strokeOpacity="0.28" strokeWidth="2">
      {Array.from({ length: 21 }, (_, i) => (
        <line key={'v' + i} x1={800} y1={560} x2={-1200 + i * 200} y2={1000} />
      ))}
      {[600, 650, 720, 820, 960].map((y) => (
        <line key={'h' + y} x1="0" y1={y} x2="1600" y2={y} />
      ))}
    </g>
  );
  if (v === 1) {
    const items = ['NEW EXPEDITION', 'CONTINUE', 'LOADOUT', 'SETTINGS', 'EXIT'];
    return (
      <Frame fit={fitFor(v)} bg="#03101f" label={label}>
        {defs}
        <rect width="1600" height="1000" fill={`url(#${id}-sky)`} opacity="0.8" />
        {grid}
        <text x="140" y="240" fill="#e0f7ff" fontFamily={DISPLAY} fontSize="110" fontWeight="600" letterSpacing="10">
          PLAYSTATE
        </text>
        {items.map((t, i) => (
          <g key={t} transform={`translate(140 ${330 + i * 92})`}>
            {i === 1 && <rect x="-20" y="-52" width="600" height="72" rx="6" fill={CYAN} opacity="0.16" stroke={CYAN} strokeWidth="2" />}
            <text fill={i === 1 ? '#e0f7ff' : '#7aa7c7'} fontFamily={DISPLAY} fontSize="46" letterSpacing="6">
              {t}
            </text>
          </g>
        ))}
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame fit={fitFor(v)} bg="#03101f" label={label}>
        {defs}
        <rect width="1600" height="1000" fill={`url(#${id}-sky)`} />
        {grid}
        <circle cx="800" cy="470" r="90" fill="none" stroke="#7dd3fc" strokeWidth="4" />
        <path d="M800 340v60M800 540v60M670 470h60M870 470h60" stroke="#7dd3fc" strokeWidth="4" />
        <g transform="translate(90 80)">
          <rect width="520" height="40" rx="8" fill="#ffffff" opacity="0.12" />
          <rect width="380" height="40" rx="8" fill={CYAN} />
          <rect y="60" width="520" height="24" rx="6" fill="#ffffff" opacity="0.12" />
          <rect y="60" width="220" height="24" rx="6" fill={VIOLET} />
        </g>
        <g transform="translate(1250 690)">
          <rect width="260" height="220" rx="20" fill="#020a14" stroke={CYAN} strokeWidth="3" />
          <path d="M40 170l60-50 50 30 70-80" stroke="#7dd3fc" strokeWidth="4" fill="none" />
          <circle cx="220" cy="70" r="12" fill={LIME} />
        </g>
        <text x="90" y="920" fill="#e0f7ff" fontFamily={DISPLAY} fontSize="40" letterSpacing="6">
          SECTOR 7 · 04:12
        </text>
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame fit={fitFor(v)} bg="#041222" label={label}>
        {defs}
        <text x="120" y="150" fill="#e0f7ff" fontFamily={DISPLAY} fontSize="56" letterSpacing="8">
          INVENTORY
        </text>
        {Array.from({ length: 18 }, (_, i) => {
          const x = 120 + (i % 6) * 150;
          const y = 220 + Math.floor(i / 6) * 150;
          const sel = i === 7;
          return (
            <g key={i}>
              <rect x={x} y={y} width="130" height="130" rx="14" fill={sel ? CYAN : '#0b2a4a'} fillOpacity={sel ? 0.22 : 1} stroke={sel ? CYAN : '#164a77'} strokeWidth="3" />
              {i % 4 !== 3 && <rect x={x + 40} y={y + 40} width="50" height="50" rx={i % 2 ? 25 : 6} fill={i % 3 === 0 ? VIOLET : i % 3 === 1 ? CYAN : LIME} opacity="0.85" transform={`rotate(${i % 2 ? 0 : 45} ${x + 65} ${y + 65})`} />}
            </g>
          );
        })}
        <rect x="1080" y="220" width="400" height="430" rx="18" fill="#0b2a4a" stroke="#164a77" strokeWidth="3" />
        <text x="1120" y="300" fill="#e0f7ff" fontFamily={DISPLAY} fontSize="40">
          Prism Core
        </text>
        <rect x="1120" y="340" width="300" height="14" rx="7" fill="#164a77" />
        <rect x="1120" y="340" width="210" height="14" rx="7" fill={CYAN} />
        <rect x="1120" y="380" width="300" height="14" rx="7" fill="#164a77" />
        <rect x="1120" y="380" width="120" height="14" rx="7" fill={VIOLET} />
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame fit={fitFor(v)} bg="#e6f6fb" label={label}>
        <text x="100" y="330" fill="#031a33" fontFamily={DISPLAY} fontSize="230" fontWeight="600" letterSpacing="-6">
          Aa 04
        </text>
        <text x="110" y="420" fill="#2f5d80" fontFamily={DISPLAY} fontSize="40" letterSpacing="8">
          HUD TYPE · ICON GRID 24
        </text>
        {Array.from({ length: 12 }, (_, i) => {
          const x = 110 + (i % 6) * 230;
          const y = 520 + Math.floor(i / 6) * 220;
          return (
            <g key={i} transform={`translate(${x} ${y})`} fill="none" stroke="#031a33" strokeWidth="8" strokeLinejoin="round">
              <rect width="170" height="170" rx="24" fill="#ffffff" stroke="none" />
              {i % 4 === 0 && <circle cx="85" cy="85" r="44" />}
              {i % 4 === 1 && <path d="M45 125L85 45l40 80z" />}
              {i % 4 === 2 && <path d="M45 85h80M85 45v80" />}
              {i % 4 === 3 && <rect x="48" y="48" width="74" height="74" rx="10" stroke={CYAN} />}
            </g>
          );
        })}
      </Frame>
    );
  }
  return (
    <Frame fit={fitFor(v)} bg="#03101f" label={label}>
      {defs}
      <rect width="1600" height="1000" fill={`url(#${id}-sky)`} />
      <path d="M0 560 L220 470 L360 520 L560 400 L760 500 L980 380 L1180 480 L1400 420 L1600 500 V560Z" fill="#06213f" />
      {grid}
      <g transform="translate(110 100)">
        <rect width="440" height="150" rx="12" fill={CYAN} fillOpacity="0.08" stroke={CYAN} strokeWidth="3" />
        <rect x="30" y="40" width="250" height="16" rx="8" fill={CYAN} />
        <rect x="30" y="80" width="380" height="10" rx="5" fill="#7dd3fc" opacity="0.4" />
      </g>
      <circle cx="800" cy="420" r="70" fill="none" stroke="#7dd3fc" strokeWidth="4" />
      <circle cx="800" cy="420" r="120" fill="none" stroke={CYAN} strokeOpacity="0.15" strokeWidth="24" />
      <circle cx="800" cy="420" r="6" fill={LIME} />
      <circle cx="800" cy="420" r="70" fill="none" stroke={CYAN} strokeWidth="10" opacity="0.4" filter={`url(#${id}-glow)`} />
    </Frame>
  );
}

function Kinetic({ v, label }: { v: number; label: string }) {
  if (v === 1) {
    return (
      <Frame fit={fitFor(v)} bg={IVORY} label={label}>
        {[INK, ORANGE, LIME, IVORY].map((c, i) => (
          <rect key={c} x={i * 400} y="0" width="400" height="560" fill={c} stroke={c === IVORY ? '#d9d7cd' : 'none'} />
        ))}
        <text x="60" y="860" fill={INK} fontFamily={DISPLAY} fontSize="300" fontWeight="700" letterSpacing="-12">
          Aa
        </text>
        <text x="640" y="760" fill={INK} fontFamily={DISPLAY} fontSize="56" fontWeight="500">
          Kinetic Display 700
        </text>
        <text x="640" y="840" fill="#62626F" fontFamily={DISPLAY} fontSize="40">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
        </text>
      </Frame>
    );
  }
  if (v === 2) {
    const posters: [string, string, string][] = [
      [ORANGE, INK, 'MOVE'],
      [INK, LIME, 'TURN'],
      [LIME, INK, 'SHIFT'],
    ];
    return (
      <Frame fit={fitFor(v)} bg="#e9e7df" label={label}>
        {posters.map(([bg, fg, word], i) => (
          <g key={word} transform={`translate(${120 + i * 470} ${110 + (i % 2) * 60}) rotate(${(i - 1) * 2})`}>
            <rect width="420" height="720" fill={bg} />
            <text x="30" y="160" fill={fg} fontFamily={DISPLAY} fontSize="150" fontWeight="700" letterSpacing="-6">
              {word}
            </text>
            <text x="30" y="660" fill={fg} fontFamily={DISPLAY} fontSize="420" fontWeight="700" letterSpacing="-20">
              K
            </text>
          </g>
        ))}
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame fit={fitFor(v)} bg={INK} label={label}>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${260 + i * 400} ${120 + (i === 1 ? -40 : 40)})`}>
            <rect width="320" height="660" rx="48" fill={[IVORY, ORANGE, LIME][i]} />
            <text x="40" y={i === 1 ? 560 : 320} fill={INK} fontFamily={DISPLAY} fontSize={i === 1 ? 300 : 90} fontWeight="700" letterSpacing="-6">
              {i === 1 ? 'K' : 'Hello.'}
            </text>
            <rect x="40" y="580" width="140" height="44" rx="22" fill={INK} opacity={i === 1 ? 0 : 1} />
          </g>
        ))}
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame fit={fitFor(v)} bg={IVORY} label={label}>
        <g className="pa-kinetic-trail">
          {[0.12, 0.25, 0.45, 1].map((o, i) => (
            <text key={i} x={300 + i * 120} y="800" fill={i === 3 ? INK : ORANGE} opacity={o} fontFamily={DISPLAY} fontSize="760" fontWeight="700" letterSpacing="-30">
              K
            </text>
          ))}
        </g>
        <circle cx="1350" cy="260" r="120" fill={LIME} />
        <text x="80" y="120" fill={INK} fontFamily={DISPLAY} fontSize="40" letterSpacing="8">
          LOGO IN MOTION · 0.8S EASE-OUT
        </text>
      </Frame>
    );
  }
  return (
    <Frame fit={fitFor(v)} bg={IVORY} label={label}>
      <rect x="880" y="140" width="720" height="220" fill={ORANGE} />
      <circle cx="1240" cy="740" r="190" fill={LIME} />
      <text x="80" y="1080" fill={INK} fontFamily={DISPLAY} fontSize="1180" fontWeight="700" letterSpacing="-60">
        K
      </text>
      <text x="900" y="300" fill={INK} fontFamily={DISPLAY} fontSize="72" fontWeight="700" letterSpacing="4">
        KINETIC
      </text>
    </Frame>
  );
}

function Flowstate({ v, label }: { v: number; label: string }) {
  const panel = (x: number, y: number, w: number, h: number, extra?: ReactNode, fill = '#FFFFFF') => (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="22" fill={fill} stroke="#DCDAD2" strokeWidth="2" />
      {extra}
    </g>
  );
  const bars = (n: number, w: number, h: number) =>
    Array.from({ length: n }, (_, i) => {
      const bh = h * (0.3 + ((i * 37) % 60) / 100);
      return <rect key={i} x={i * (w / n) + 8} y={h - bh} width={w / n - 16} height={bh} rx="6" fill={i === n - 3 ? VIOLET : '#d9d6f5'} />;
    });
  if (v === 1) {
    return (
      <Frame fit={fitFor(v)} bg="#EFEDE6" label={label}>
        {panel(
          120,
          100,
          420,
          800,
          <>
            {['Overview', 'Projects', 'Workflows', 'Reports', 'Team', 'Settings'].map((t, i) => (
              <g key={t} transform={`translate(30 ${70 + i * 90})`}>
                {i === 2 && <rect x="-10" y="-46" width="380" height="68" rx="14" fill="#ece9ff" />}
                <rect y="-28" width="30" height="30" rx="8" fill={i === 2 ? VIOLET : '#c9c6d8'} />
                <text x="54" y="-4" fill={INK} fontFamily="var(--font-sans)" fontSize="34" fontWeight={i === 2 ? 600 : 400}>
                  {t}
                </text>
              </g>
            ))}
          </>,
        )}
        {panel(600, 100, 880, 380, <text x="40" y="80" fill={INK} fontFamily={DISPLAY} fontSize="48">Workflows</text>)}
        {panel(600, 520, 880, 380, <g transform="translate(40 60)">{bars(10, 800, 260)}</g>)}
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame fit={fitFor(v)} bg="#EFEDE6" label={label}>
        {panel(
          100,
          100,
          1400,
          800,
          <>
            <text x="60" y="100" fill={INK} fontFamily={DISPLAY} fontSize="56">
              Throughput
            </text>
            <path d="M60 640 C 260 560 360 600 520 480 S 860 340 1000 400 S 1260 240 1340 200" fill="none" stroke={VIOLET} strokeWidth="10" />
            <path d="M60 640 C 260 560 360 600 520 480 S 860 340 1000 400 S 1260 240 1340 200 V720 H60Z" fill={VIOLET} opacity="0.12" />
            {[200, 330, 460, 590, 720].map((y) => (
              <line key={y} x1="60" x2="1340" y1={y} y2={y} stroke="#e5e3dc" strokeWidth="2" />
            ))}
            <circle cx="1340" cy="200" r="16" fill={INK} />
          </>,
        )}
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame fit={fitFor(v)} bg="#EFEDE6" label={label}>
        <g transform="translate(140 160)">
          <rect width="300" height="100" rx="50" fill={INK} />
          <rect x="340" width="300" height="100" rx="50" fill="none" stroke={INK} strokeWidth="4" />
          <rect x="680" width="300" height="100" rx="50" fill={VIOLET} />
          <rect x="0" y="160" width="160" height="80" rx="40" fill={VIOLET} />
          <circle cx="120" cy="200" r="30" fill="#fff" />
          <rect x="220" y="160" width="160" height="80" rx="40" fill="#d9d6e8" />
          <circle cx="260" cy="200" r="30" fill="#fff" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={i * 440} y="320" width="400" height="300" rx="24" fill="#fff" stroke="#DCDAD2" strokeWidth="2" />
          ))}
          <rect x="40" y="370" width="200" height="24" rx="12" fill={INK} />
          <rect x="480" y="370" width="300" height="24" rx="12" fill="#c9c6d8" />
          <rect x="920" y="370" width="160" height="24" rx="12" fill={VIOLET} />
        </g>
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame fit={fitFor(v)} bg="#E7E4DC" label={label}>
        {[0, 1].map((i) => (
          <g key={i} transform={`translate(${430 + i * 420} ${80 + i * 60})`}>
            <rect width="360" height="760" rx="56" fill={INK} />
            <rect x="18" y="18" width="324" height="724" rx="42" fill="#FBFAF7" />
            <rect x="40" y="90" width="180" height="22" rx="11" fill={INK} />
            {i === 0 ? (
              <g transform="translate(40 160)">{bars(6, 280, 220)}</g>
            ) : (
              [0, 1, 2, 3].map((r) => <rect key={r} x="40" y={160 + r * 120} width="280" height="96" rx="18" fill={r === 1 ? '#ece9ff' : '#fff'} stroke="#DCDAD2" strokeWidth="2" />)
            )}
          </g>
        ))}
      </Frame>
    );
  }
  return (
    <Frame fit={fitFor(v)} bg="#EFEDE6" label={label}>
      {panel(
        150,
        130,
        880,
        640,
        <>
          <rect x="40" y="40" width="240" height="26" rx="13" fill={INK} />
          <rect x="40" y="90" width="400" height="16" rx="8" fill="#c9c6d8" />
          <g transform="translate(40 180)">{bars(9, 800, 380)}</g>
        </>,
      )}
      {panel(
        720,
        330,
        700,
        480,
        <>
          <rect x="40" y="40" width="200" height="22" rx="11" fill={INK} />
          {[0, 1, 2, 3].map((r) => (
            <g key={r} transform={`translate(40 ${110 + r * 86})`}>
              <rect width="620" height="66" rx="14" fill={r === 1 ? '#ece9ff' : '#F6F5F0'} />
              <circle cx="40" cy="33" r="14" fill={r === 1 ? VIOLET : '#c9c6d8'} />
              <rect x="74" y="26" width={220 + r * 40} height="14" rx="7" fill="#9b98ad" />
            </g>
          ))}
        </>,
      )}
      {panel(260, 690, 400, 170, <><rect x="40" y="50" width="160" height="22" rx="11" fill="#F6F5F0" /><rect x="40" y="96" width="260" height="16" rx="8" fill="#62626F" /></>, INK)}
    </Frame>
  );
}

export function ProjectArtwork({ tone, variant = 0, alt }: { tone: ProjectTone; variant?: number; alt: string }) {
  const p = { v: variant, label: alt };
  switch (tone) {
    case 'orbit':
      return <Orbit {...p} />;
    case 'playstate':
      return <Playstate {...p} />;
    case 'kinetic':
      return <Kinetic {...p} />;
    default:
      return <Flowstate {...p} />;
  }
}

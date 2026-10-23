'use client';
import { useEffect, useRef, useState } from 'react';

/*
 * The hero sculpture: the GG monogram rebuilt as two thick, glossy rings in satin
 * black and violet, lit from the upper left with lime rim light, floating over a
 * soft shadow, with an orbit of words. Pure SVG + CSS, so it renders instantly,
 * never blocks the text, and has a natural static fallback.
 */
const R = 150; // ring centreline radius
const W = 64; // ring thickness
const CX1 = 250; // front G centre
const CX2 = 375; // rear G centre
const CY = 290;

function gPath(cx: number, cy: number) {
  const a = Math.PI / 4;
  const x1 = cx + R * Math.cos(a);
  const y1 = cy - R * Math.sin(a);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)}A${R} ${R} 0 1 0 ${cx + R} ${cy}M${cx + R + W / 2} ${cy}H${cx + R * 0.42}`;
}

export function HeroArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setMotion(true);
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--px', x.toFixed(3));
        el.style.setProperty('--py', y.toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const front = gPath(CX1, CY);
  const back = gPath(CX2, CY);
  const words = 'DESIGN ✳ CREATE ✳ PLAY ✳ BUILD ✳ '.repeat(6);

  return (
    <div className="hero-art" ref={ref} role="img" aria-label="A glossy sculpture of two interlocking G forms in black and violet, lit with lime highlights, circled by the words Design, Create, Play and Build.">
      <svg className="hero-art__svg" viewBox="0 0 640 600" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="ha-glow" cx="55%" cy="45%" r="55%">
            <stop offset="0" stopColor="#9188FF" stopOpacity="0.55" />
            <stop offset="0.45" stopColor="#3b3480" stopOpacity="0.28" />
            <stop offset="1" stopColor="#0B0B10" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ha-front" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5d5878" />
            <stop offset="0.28" stopColor="#1b1a26" />
            <stop offset="0.62" stopColor="#0c0c12" />
            <stop offset="1" stopColor="#2b2650" />
          </linearGradient>
          <linearGradient id="ha-back" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d8d4ff" />
            <stop offset="0.25" stopColor="#9188FF" />
            <stop offset="0.65" stopColor="#4b42b0" />
            <stop offset="1" stopColor="#1d1850" />
          </linearGradient>
          <linearGradient id="ha-sheen" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ha-rim" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#C8FF5F" />
            <stop offset="0.35" stopColor="#C8FF5F" stopOpacity="0.9" />
            <stop offset="0.6" stopColor="#C8FF5F" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ha-orb" cx="35%" cy="30%" r="70%">
            <stop offset="0" stopColor="#f4ffd9" />
            <stop offset="0.3" stopColor="#C8FF5F" />
            <stop offset="1" stopColor="#5f8a12" />
          </radialGradient>
          <radialGradient id="ha-orb2" cx="35%" cy="30%" r="70%">
            <stop offset="0" stopColor="#e9e6ff" />
            <stop offset="0.35" stopColor="#9188FF" />
            <stop offset="1" stopColor="#231d63" />
          </radialGradient>
          <filter id="ha-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="ha-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <mask id="ha-gap" maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="600">
            <rect width="640" height="600" fill="#fff" />
            <path d={front} fill="none" stroke="#000" strokeWidth={W + 22} />
          </mask>
          <clipPath id="ha-top"><rect x="0" y="0" width="640" height="330" /></clipPath>
          <clipPath id="ha-bottom"><rect x="0" y="330" width="640" height="300" /></clipPath>
          <path id="ha-orbit" d="M40 330a280 78 0 1 0 560 0a280 78 0 1 0 -560 0" />
        </defs>

        <circle cx="330" cy="290" r="300" fill="url(#ha-glow)" className="hero-art__glow" />

        <g className="hero-art__orbit-back" clipPath="url(#ha-top)">
          <use href="#ha-orbit" className="hero-art__ring" />
          <text className="hero-art__words">
            <textPath href="#ha-orbit" startOffset="0%">
              {words}
              {motion && <animate attributeName="startOffset" from="0%" to="-50%" dur="40s" repeatCount="indefinite" />}
            </textPath>
          </text>
        </g>

        <ellipse cx="320" cy="540" rx="210" ry="24" fill="#000" opacity="0.7" filter="url(#ha-soft)" className="hero-art__shadow" />

        <g className="hero-art__float">
          <g className="hero-art__layer-back">
            <g mask="url(#ha-gap)">
              <path d={back} fill="none" stroke="url(#ha-back)" strokeWidth={W} />
              <path d={back} fill="none" stroke="url(#ha-sheen)" strokeWidth={W * 0.38} transform="translate(-8 -10)" filter="url(#ha-blur)" opacity="0.8" />
            </g>
          </g>
          <g className="hero-art__layer-front">
            <path d={front} fill="none" stroke="url(#ha-rim)" strokeWidth={W} transform="translate(5 5)" />
            <path d={front} fill="none" stroke="url(#ha-front)" strokeWidth={W} />
            <path d={front} fill="none" stroke="url(#ha-sheen)" strokeWidth={W * 0.3} transform="translate(-10 -12)" filter="url(#ha-blur)" opacity="0.55" />
          </g>
          <circle className="hero-art__orb" cx="548" cy="138" r="26" fill="url(#ha-orb)" />
          <circle className="hero-art__orb hero-art__orb--2" cx="96" cy="470" r="15" fill="url(#ha-orb2)" />
        </g>

        <g className="hero-art__orbit-front" clipPath="url(#ha-bottom)">
          <use href="#ha-orbit" className="hero-art__ring" />
          <text className="hero-art__words">
            <textPath href="#ha-orbit" startOffset="0%">
              {words}
              {motion && <animate attributeName="startOffset" from="0%" to="-50%" dur="40s" repeatCount="indefinite" />}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}

/** The abstract glowing object behind the final calls to action. */
export function GlowObject({ className }: { className?: string }) {
  return (
    <div className={['glow-object', className].filter(Boolean).join(' ')} aria-hidden="true">
      <svg viewBox="0 0 600 600" focusable="false">
        <defs>
          <radialGradient id="go-core" cx="40%" cy="35%" r="70%">
            <stop offset="0" stopColor="#efeeff" />
            <stop offset="0.25" stopColor="#9188FF" />
            <stop offset="0.7" stopColor="#2a2370" />
            <stop offset="1" stopColor="#0B0B10" />
          </radialGradient>
          <radialGradient id="go-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0.4" stopColor="#9188FF" stopOpacity="0.45" />
            <stop offset="1" stopColor="#9188FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="300" fill="url(#go-halo)" />
        <g className="glow-object__spin">
          <circle cx="300" cy="300" r="170" fill="url(#go-core)" />
          <ellipse cx="300" cy="300" rx="260" ry="62" fill="none" stroke="#C8FF5F" strokeWidth="6" transform="rotate(-18 300 300)" />
        </g>
      </svg>
    </div>
  );
}

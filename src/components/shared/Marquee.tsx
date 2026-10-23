const ITEMS = ['2D Design', '3D Art', 'Game Design', 'Brand Identity', 'UI/UX', 'Web Experiences', 'Software', 'Digital Marketing'];
export function Marquee({ items = ITEMS }: { items?: string[] }) {
  const run = (hidden: boolean) => (
    <ul className="gg-marquee__run" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <span className="gg-marquee__star" aria-hidden="true">
            ✳
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="gg-marquee" aria-label="Our disciplines">
      <div className="gg-marquee__track">
        {run(false)}
        {run(true)}
      </div>
    </section>
  );
}

import { AppLink } from '@/lib/platform';
import type { Project } from '@/content/projects';
import { ProjectArtwork } from '../visuals/ProjectArtwork';
import { Icon } from './Icon';
import { Tag } from './Tag';

export function ProjectCard({ project, shape = 'standard', headingLevel = 3, showSummary = true }: { project: Project; shape?: 'standard' | 'tall' | 'wide'; headingLevel?: 2 | 3; showSummary?: boolean }) {
  const H = `h${headingLevel}` as 'h2' | 'h3';
  return (
    <article className={`gg-project gg-project--${shape}`} data-reveal>
      <AppLink href={`/work/${project.slug}`} className="gg-project__link" data-cursor="View">
        <div className="gg-project__media">
          <ProjectArtwork tone={project.tone} alt={project.coverAlt} />
          {project.type === 'Studio Concept' && <Tag kind="concept" className="gg-project__concept" />}
          <span className="gg-project__arrow" aria-hidden="true">
            <Icon name="arrow-up-right" size={22} />
          </span>
        </div>
        <div className="gg-project__meta">
          <p className="gg-project__index">
            {project.index} · {project.name}
          </p>
          <H className="gg-project__title">{project.title}</H>
          {showSummary && <p className="gg-project__desc">{project.summary}</p>}
          <ul className="gg-project__cats" aria-label="Disciplines">
            {project.categories.map((c) => (
              <li key={c}>
                <Tag>{c}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </AppLink>
    </article>
  );
}

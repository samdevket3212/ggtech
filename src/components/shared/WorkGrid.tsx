'use client';
import { useState } from 'react';
import { projects, workFilters, type WorkFilter } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

const SHAPES: ('wide' | 'tall' | 'standard')[] = ['wide', 'tall', 'tall', 'wide'];

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const shown = projects.filter((p) => filter === 'all' || p.filters.includes(filter));
  return (
    <div className="work-grid-wrap">
      <div className="work-filters" role="group" aria-label="Filter projects by discipline">
        {workFilters.map((f) => {
          const count = f.id === 'all' ? projects.length : projects.filter((p) => p.filters.includes(f.id as Exclude<WorkFilter, 'all'>)).length;
          return (
            <button key={f.id} type="button" className={'work-filter' + (filter === f.id ? ' is-active' : '')} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
              <span className="work-filter__count">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="gg-visually-hidden" aria-live="polite">
        {shown.length} {shown.length === 1 ? 'project' : 'projects'} shown
      </p>
      <div className={'work-grid' + (shown.length < projects.length ? ' work-grid--filtered' : '')} key={filter}>
        {shown.map((p, i) => (
          <div key={p.slug} className={`work-grid__item work-grid__item--${shown.length === projects.length ? SHAPES[i] : 'standard'}`} style={{ '--i': i } as React.CSSProperties}>
            <ProjectCard project={p} shape={shown.length === projects.length ? SHAPES[i] : 'standard'} headingLevel={2} />
          </div>
        ))}
      </div>
    </div>
  );
}

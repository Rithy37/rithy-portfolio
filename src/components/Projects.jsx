import { useState } from 'react'
import './Projects.css'

const FILTERS = [
  { id: 'all', label: 'all' },
  { id: 'automation', label: 'automation' },
  { id: 'frontend', label: 'frontend' },
]

const PROJECTS = [
  {
    id: 'playwright-suite',
    name: 'Playwright E2E Suite',
    description:
      'Page-Object-Model test suite covering login, cart, and checkout flows, with CI running the suite on every push via GitHub Actions.',
    tags: ['automation'],
    status: 'PASSING',
    url: 'https://github.com/Rithy37/playWrightProject',
    linkLabel: 'View repo',
  },
  {
    id: 'placeholder-frontend',
    name: '[Replace] Frontend Project',
    description:
      'Swap this card for a real frontend project — the app you built during your 1.5 years as a frontend developer, or something new.',
    tags: ['frontend'],
    status: 'DRAFT',
    url: '',
    linkLabel: 'Add link',
  },
  {
    id: 'placeholder-automation',
    name: '[Replace] Cypress or Selenium Suite',
    description:
      'Swap this card for a Cypress or Selenium project from your test analyst work, or a fresh one built to show range beyond Playwright.',
    tags: ['automation'],
    status: 'DRAFT',
    url: '',
    linkLabel: 'Add link',
  },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter))

  return (
    <section id="projects" className="section" data-test="projects-section">
      <p className="section-label">projects.spec</p>
      <h2 className="section-title">Test suite: projects</h2>
      <p className="section-intro">
        Filter by category — same idea as tagging tests by suite.
      </p>

      <div className="project-filters mono" data-test="project-filters">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
            data-test={`project-filter-${f.id}`}
            onClick={() => setActiveFilter(f.id)}
            aria-pressed={activeFilter === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="project-grid" data-test="project-grid">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            data-test="project-card"
            data-project-tags={project.tags.join(',')}
          >
            <div className="project-card-top">
              <span
                className={`project-status mono ${
                  project.status === 'PASSING' ? 'passing' : 'draft'
                }`}
                data-test="project-status"
              >
                {project.status}
              </span>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn"
                data-test="project-link"
              >
                {project.linkLabel} →
              </a>
            ) : (
              <span className="project-link-placeholder mono">
                {project.linkLabel}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

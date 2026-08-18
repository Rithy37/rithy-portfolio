import { useState } from 'react'
import './Projects.css'

const FILTERS = [
  { id: 'all', label: 'all' },
  { id: 'automation', label: 'automation' },
  { id: 'frontend', label: 'frontend' },
  { id: 'manual', label: 'manual testing' },
]

const PROJECTS = [
  {
    id: 'manual-testing',
    name: 'Manual Testing Experience',
    description:
      'Hands-on experience across functional, integration, regression, system and UAT testing for enterprise applications. I design and execute test cases, validate business requirements, investigate defects, and perform data validation using SQL. I have also tested AWS-integrated services including Lambda, Step Functions, DynamoDB, S3 and CloudWatch to validate end-to-end application workflows and integrations.',
    tags: ['manual'],
    status: 'Private Enterprise Project',
    url: 'https://www2.nzqa.govt.nz/',
    linkLabel: 'Visit NZQA Website',
  },
  {
    id: 'nzqa-learner-portal',
    name: 'Professional Enterprise Frontend Development',
    description:
      'Contributed to the frontend development of the new Learner & Education Provider portal at NZQA, building new features, fixing defects, and improving the user experience as part of an Agile team.',
    tags: ['frontend'],
    status: 'Private Enterprise Project',
    url: 'https://www2.nzqa.govt.nz/',
    linkLabel: 'Visit NZQA Website',
  },
  {
    id: 'test-automation',
    name: 'Professional Enterprise Test Automation',
    description:
      'Enhanced and maintained Cypress and Selenium automation suites for enterprise web applications at NZQA. Built automated regression tests, maintained existing test cases, and collaborated with developers to improve software quality. The project is private and cannot be shared publicly.',
    tags: ['automation'],
    status: 'Private Enterprise Project',
    url: 'https://www2.nzqa.govt.nz/',
    linkLabel: 'Visit NZQA Website',
  },
  {
    id: 'playwright-suite',
    name: 'Playwright E2E Suite',
    description:
      'Page-Object-Model test suite covering login, cart, and checkout flows, with CI running the suite on every push via GitHub Actions. Please note that this is an on-going learning project.',
    tags: ['automation'],
    status: 'Personal Project',
    url: 'https://github.com/Rithy37/playWrightProject',
    linkLabel: 'View repo',
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
        Filter by category, same idea as tagging tests by suite
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
                  project.status === 'Personal Project' ? 'passing' : 'draft'
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

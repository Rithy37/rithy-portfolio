import './Skills.css'

const SKILLS = [
  'Playwright',
  'Cypress',
  'Selenium',
  'JavaScript',
  'React',
  'HTML / CSS',
  'Java',
  'Python',
  'AWS',
  'SQL',
  'Systems Integration Testing',
  'API Testing',
  'Functional Testing',
  'Exploratory Testing',
  'Regression Testing',
  'UAT'
]

function Skills() {
  return (
    <section id="skills" className="section" data-test="skills-section">
      <p className="section-label">skills.spec</p>
      <h2 className="section-title">Technical & QA Capabilities</h2>
      <p className="section-intro">
        Testing methodologies, tools, language, and frameworks I use to build and test enterprise applications.
      </p>
      <div className="skills-grid" data-test="skills-grid">
        {SKILLS.map((skill) => (
          <span className="skill-bubble" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills

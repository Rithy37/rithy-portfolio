import './Skills.css'

const SKILLS = [
  { name: 'Test Automation (Cypress)', coverage: 92 },
  { name: 'Test Automation (Selenium)', coverage: 88 },
  { name: 'Test Automation (Playwright)', coverage: 80 },
  { name: 'JavaScript / TypeScript', coverage: 85 },
  { name: 'React', coverage: 70 },
  { name: 'HTML / CSS', coverage: 90 },
]

function Skills() {
  return (
    <section id="skills" className="section" data-test="skills-section">
      <p className="section-label">skills.spec</p>
      <h2 className="section-title">Coverage report</h2>
      <p className="section-intro">
        Self-assessed, not auto-generated — but I know what a real coverage
        report should look like.
      </p>

      <div className="coverage-table mono" data-test="skills-table">
        {SKILLS.map((skill) => (
          <div
            className="coverage-row"
            key={skill.name}
            data-test={`skill-row-${skill.name.split(' ')[0].toLowerCase()}`}
          >
            <span className="coverage-name">{skill.name}</span>
            <div className="coverage-bar-track">
              <div
                className="coverage-bar-fill"
                style={{ width: `${skill.coverage}%` }}
              />
            </div>
            <span className="coverage-pct">{skill.coverage}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

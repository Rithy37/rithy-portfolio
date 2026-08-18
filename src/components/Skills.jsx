import "./Skills.css";

const SKILL_GROUPS = [
  {
    category: "Automation Tools",
    color: "var(--accent-blue)",
    skills: ["Playwright", "Cypress", "Selenium"],
  },
  {
    category: "Languages & Stack",
    color: "var(--accent-teal)",
    skills: ["JavaScript", "React", "HTML / CSS", "Java", "Python", "SQL", "AWS"],
  },
  {
    category: "Testing Practices",
    color: "var(--accent-amber)",
    skills: [
      "Systems Integration",
      "API Testing",
      "Functional",
      "Exploratory",
      "Regression",
      "UAT",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-eyebrow">
        <span className="skills-dot" />
        skills.spec
      </div>
      <h2 className="skills-title">Technical &amp; QA Capabilities</h2>
      <p className="skills-dek">
        Testing methodologies, tools, language, and frameworks I use to build
        and test enterprise applications.
      </p>

      <div className="skills-panel">
        {SKILL_GROUPS.map((group) => (
          <div className="skills-row" key={group.category}>
            <span className="skills-cat">
              <span
                className="skills-swatch"
                style={{ background: group.color }}
              />
              {group.category}
            </span>
            <span className="skills-items">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skills-tag"
                  style={{ color: group.color }}
                >
                  <span className="skills-bracket">[</span>
                  {skill}
                  <span className="skills-bracket">]</span>
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

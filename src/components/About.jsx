function About() {
  return (
    <section id="about" className="section" data-test="about-section">
      <p className="section-label">about.spec</p>
      <h2 className="section-title">Where testing meets building</h2>
      <p className="section-intro" style={{ marginBottom: 0 }}>
        I've spent 3.5+ years working as a Test Analyst, with experience in functional, system integration (SIT), and API testing. I also build automated test suites using Cypress and Selenium to catch regressions before they reach production.
        Along the way, I spent 1.5 years working as a frontend developer. That means I don't just test someone else's UI, I understand the code behind it and the decisions that shape it.
        This website is both my portfolio and a live application for the Playwright test suite I'm currently building as I learn the framework. You can explore the tests below.
      </p>
    </section>
  )
}

export default About

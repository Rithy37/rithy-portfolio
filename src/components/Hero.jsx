import { useEffect, useState } from 'react'
import './Hero.css'

const ASSERTIONS = [
  '3.5 years as a Test Analyst',
  'Manual and Automation Testing experience',
  '1.5 years as a Frontend Developer',
]

function Hero() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleCount >= ASSERTIONS.length) {
      const doneTimer = setTimeout(() => setDone(true), 300)
      return () => clearTimeout(doneTimer)
    }
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 450)
    return () => clearTimeout(timer)
  }, [visibleCount])

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="section-label">RUNNING hero.spec.js</p>
          <h1 className="hero-title">
            From testing to development,<br />I’m all about building better software.
          </h1>
          <p className="hero-subtitle">
            Test analyst and frontend developer. I write the automation
            suite <em>and</em> the interface it tests.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" data-test="cta-projects">
              View projects
            </a>
            <a href="#contact" className="btn" data-test="cta-contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-terminal mono" data-test="hero-terminal">
          <div className="hero-terminal-bar">
            <span className="hero-dot" style={{ background: '#f2617a' }} />
            <span className="hero-dot" style={{ background: '#f0a83e' }} />
            <span className="hero-dot" style={{ background: '#2dd4bf' }} />
            <span className="hero-terminal-title">about-me.spec.js</span>
          </div>
          <div className="hero-terminal-body">
            {ASSERTIONS.map((line, i) => (
              <div
                key={line}
                className={`hero-line ${i < visibleCount ? 'visible' : ''}`}
                data-test={`hero-line-${i}`}
              >
                <span className="hero-check">✓</span> {line}
              </div>
            ))}
            {done && (
              <div className="hero-summary" data-test="hero-summary">
                3 passed <span className="hero-summary-time">(1.4s)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

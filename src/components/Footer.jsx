import './Footer.css'

function Footer() {
  return (
    <footer className="footer mono" data-test="footer">
      <span>© {new Date().getFullYear()} — built &amp; tested by Rithy</span>
      <div className="footer-links">
        <a href="https://github.com/Rithy37" target="_blank" rel="noreferrer">
          github
        </a>
        <a href="https://github.com/Rithy37/playWrightProject" target="_blank" rel="noreferrer">
          test-suite
        </a>
      </div>
    </footer>
  )
}

export default Footer

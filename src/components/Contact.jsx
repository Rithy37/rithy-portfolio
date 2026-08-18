import { useState } from 'react'
import './Contact.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required'
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = 'Enter a valid email'
    }
    if (!values.message.trim()) nextErrors.message = 'Message is required'
    return nextErrors
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const nextErrors = validate()
  setErrors(nextErrors)

  if (Object.keys(nextErrors).length > 0) return

  try {
    const response = await fetch('https://formspree.io/f/xvkpvpzb', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
        _subject: 'New portfolio message',
        _replyto: values.email
      })
    })

    if (response.ok) {
      setSubmitted(true)
      setValues({ name: '', email: '', message: '' })
    } else {
      alert('Something went wrong. Please try again.')
    }
  } catch (error) {
    alert('Failed to send message. Please try again later.')
  }
}

  if (submitted) {
    return (
      <section id="contact" className="section" data-test="contact-section">
        <p className="section-label">contact.spec</p>
        <div className="contact-success mono" data-test="contact-success">
          <span className="hero-check">✓</span> message.sent — I'll reply soon.
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section" data-test="contact-section">
      <p className="section-label">contact.spec</p>
      <h2 className="section-title">Get in touch</h2>
      <p className="section-intro">
        Open to Test Analyst, Test Automation Engineer, or Junior Dev roles, reach out below <span>&#128588;</span>
      </p>

      <form
        className="contact-form"
        data-test="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-field">
          <label htmlFor="name" className="mono">
            name:
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            data-test="contact-name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <span className="form-error" data-test="contact-error-name">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email" className="mono">
            email:
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            data-test="contact-email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && (
            <span className="form-error" data-test="contact-error-email">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="message" className="mono">
            message:
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={handleChange('message')}
            data-test="contact-message"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <span className="form-error" data-test="contact-error-message">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary" data-test="contact-submit">
          Send message
        </button>
      </form>
    </section>
  )
}

export default Contact

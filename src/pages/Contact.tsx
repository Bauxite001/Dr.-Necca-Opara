import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    border: '1.5px solid var(--border)',
    background: 'var(--white)',
    color: 'var(--body-text)',
    borderRadius: 10,
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ background: 'var(--white)' }}>
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)', padding: '160px 32px 80px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 20 }}>
          Let's <em style={{ color: 'var(--blue)' }}>Connect</em>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto' }}>
          Whether you are seeking a consultation, a collaboration, a speaking invitation, or simply a conversation — I am glad you reached out.
        </p>
      </section>

      {/* Quick contacts */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { icon: '✉', label: 'General Enquiries', value: 'info@drneccaopara.com', href: 'mailto:info@drneccaopara.com' },
            { icon: '◈', label: 'Speaking', value: 'speaking@drneccaopara.com', href: 'mailto:speaking@drneccaopara.com' },
            { icon: '◉', label: 'Media', value: 'media@drneccaopara.com', href: 'mailto:media@drneccaopara.com' },
            { icon: '◎', label: 'WhatsApp', value: '+234 900 000 0000', href: 'https://wa.me/2349000000000' },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="bento-card" style={{ display: 'block', padding: '32px 28px', textDecoration: 'none' }}>
              <p style={{ fontSize: 24, marginBottom: 14, color: 'var(--blue)' }}>{c.icon}</p>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-gray)', marginBottom: 6 }}>{c.label}</p>
              <p style={{ fontSize: 14, color: 'var(--body-text)', fontWeight: 500 }}>{c.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '0 32px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--charcoal)' }}>Send a Message</h2>
          </div>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '64px 40px', background: 'var(--blue-light)', borderRadius: 'var(--radius)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--charcoal)', marginBottom: 12 }}>Message Received</h3>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.75 }}>
                Thank you for reaching out. Dr. Necca's team will be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+234 ..." style={inputStyle} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required style={inputStyle}>
                    <option value="">Select a subject</option>
                    <option>Book a Consultation</option>
                    <option>Speaking Enquiry</option>
                    <option>Media / Press</option>
                    <option>Training / Education</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', display: 'block', marginBottom: 8 }}>Your Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Tell us how we can help you..." style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => (e.target.style.borderColor = 'var(--blue)')} onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <button type="submit" className="btn-blue" style={{ alignSelf: 'flex-start', borderRadius: 8 }}>Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

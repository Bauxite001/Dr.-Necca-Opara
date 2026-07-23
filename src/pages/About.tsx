import { Link } from 'react-router-dom'
import ImageWithFallback from '@/components/ImageWithFallback'
import heroPhoto from '@/imports/image.png'
import clinicPhoto from '@/imports/image-1.png'
import heroPhoto2 from '@/imports/image-6.png'

export default function About() {
  return (
    <div style={{ background: 'var(--white)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">About Dr. Necca</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 24 }}>
              A Life Devoted to<br /><em style={{ color: 'var(--blue)' }}>Medicine & Beauty</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.85 }}>
              Dr. Necca Opara is a Nigerian physician, internationally certified aesthetic medicine expert, speaker, mentor, entrepreneur, and the Founder & Medical Director of Venus Aesthetics.
            </p>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
            <ImageWithFallback src={heroPhoto} alt="Dr. Necca Opara editorial portrait" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <span className="section-label">My Story</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--charcoal)', marginBottom: 36 }}>
            From Curiosity to <em style={{ color: 'var(--blue)' }}>Purpose</em>
          </h2>
          {[
            "Born and raised in Nigeria, I was always fascinated by the human body — both its complexity and its beauty. I pursued medicine at the University of Lagos, where I graduated with my MBBS, determined to make a meaningful difference in people's lives.",
            "After qualifying, I found myself drawn to a niche that was still evolving on the African continent: aesthetic medicine. I saw an opportunity not just to practise, but to pioneer. I sought out advanced training in the United Kingdom and Italy, studying under globally respected practitioners and returning to Nigeria with skills that were, at the time, largely unavailable locally.",
            "In 2017, I founded Venus Aesthetics in Lagos — not just as a clinic, but as a standard. A statement that African patients deserve excellence. That our skin, our features, and our identities deserve to be treated with the same precision, care, and artistry as anywhere in the world.",
            "Today, Venus Aesthetics is one of the most respected aesthetic medicine clinics on the continent. Beyond clinical practice, I have trained over 300 physicians through the Venus Aesthetics Training Academy, spoken at conferences across Africa, Europe, and North America, and mentored the next generation of aesthetic practitioners.",
          ].map((para, i) => (
            <p key={i} style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.9, marginBottom: 24 }}>{para}</p>
          ))}
        </div>
      </section>

      {/* Credentials zig-zag */}
      <section style={{ background: 'var(--off-white)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="zigzag-row">
            <div>
              <span className="section-label">Qualifications</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--charcoal)', marginBottom: 40 }}>
                Credentials & <em style={{ color: 'var(--blue)' }}>Certifications</em>
              </h2>
              {[
                { year: '2012', title: 'MBBS', org: 'University of Lagos, Nigeria' },
                { year: '2014', title: 'Certificate in Aesthetic Medicine', org: 'Royal College of Physicians, UK' },
                { year: '2015', title: 'Advanced Injectables Training', org: 'European Academy of Aesthetic Medicine, Italy' },
                { year: '2018', title: 'Diploma in Clinical Dermatology', org: 'International Association of Dermatology' },
                { year: '2021', title: 'Fellowship, Aesthetic Medicine', org: 'American Board of Aesthetic Medicine' },
              ].map((c, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--blue)', flexShrink: 0, width: 44 }}>{c.year}</p>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--body-text)', marginBottom: 2 }}>{c.title}</p>
                    <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{c.org}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: 20, position: 'relative' }}>
                <ImageWithFallback src={clinicPhoto} alt="Dr. Necca in her clinic" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 60%)' }} />
              </div>
              <div style={{ background: 'var(--blue)', padding: '28px 32px', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'white', lineHeight: 1.6 }}>
                  "Excellence is not an act — it is a habit. Every patient, every treatment, every day."
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>— Dr. Necca Opara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center' }}>Work With Me</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)', marginBottom: 20 }}>
          Ready to <em style={{ color: 'var(--blue)' }}>Begin?</em>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
          Whether for a consultation, a speaking invitation, or a mentorship conversation — I am here.
        </p>
        <Link to="/contact" className="btn-blue" style={{ borderRadius: 8 }}>Meet Necca</Link>
      </section>
    </div>
  )
}

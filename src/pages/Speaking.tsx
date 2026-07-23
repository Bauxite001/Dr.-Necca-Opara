import { Link } from 'react-router-dom'
import ImageWithFallback from '@/components/ImageWithFallback'
import scrubsPhoto from '@/imports/image-3.png'
import stylePhoto from '@/imports/image-4.png'

const topics = [
  { title: 'Aesthetic Medicine in Africa', desc: 'The state, future, and global relevance of aesthetic medicine practice on the African continent.' },
  { title: 'Female Entrepreneurship in Medicine', desc: 'Navigating business ownership, leadership, and authenticity as a woman in the medical space.' },
  { title: 'Clinical Excellence & Patient Safety', desc: 'Setting the gold standard for aesthetic practice — protocols, ethics, and accountability.' },
  { title: 'Building a Medical Brand', desc: 'How physicians can build credible personal brands without compromising clinical integrity.' },
  { title: 'The Future of Beauty', desc: 'Technology, science, and cultural shifts shaping the next decade of aesthetic medicine globally.' },
  { title: 'Mentorship & Medical Leadership', desc: 'Why mentorship is the most powerful investment a physician can make.' },
]

const pastEvents = [
  { name: 'African Aesthetic Medicine Summit', location: 'Lagos, 2024', role: 'Keynote Speaker' },
  { name: 'TEDx Victoria Island', location: 'Lagos, 2023', role: 'Speaker' },
  { name: 'Forbes Women Africa Forum', location: 'Nairobi, 2023', role: 'Panellist' },
  { name: 'International Society of Aesthetic Physicians', location: 'London, 2022', role: 'Presenter' },
  { name: 'Women in Leadership Medicine', location: 'Cape Town, 2022', role: 'Keynote Speaker' },
]

export default function Speaking() {
  return (
    <div style={{ background: 'var(--white)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">Speaking & Leadership</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 24 }}>
              Ideas Worth<br /><em style={{ color: 'var(--blue)' }}>Sharing</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 36 }}>
              Dr. Necca is a passionate, compelling speaker who blends clinical expertise with authentic personal storytelling — leaving every audience informed, inspired, and ready to act.
            </p>
            <a href="mailto:speaking@drneccaopara.com" className="btn-blue" style={{ borderRadius: 8 }}>
              Submit a Speaking Enquiry
            </a>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
            <ImageWithFallback src={scrubsPhoto} alt="Dr. Necca Opara" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* Topics bento */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Topics</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)' }}>
              What Dr. Necca <em style={{ color: 'var(--blue)' }}>Speaks About</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {topics.map((t, i) => (
              <div key={i} className="bento-card" style={{ padding: '36px 30px', borderTop: `3px solid ${i === 0 ? 'var(--blue)' : 'var(--border)'}` }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--charcoal)', marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.75 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zig-zag highlight */}
      <section style={{ background: 'var(--off-white)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="zigzag-row reverse">
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
              <ImageWithFallback src={stylePhoto} alt="Dr. Necca Opara in white ensemble" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 60%)' }} />
            </div>
            <div>
              <span className="section-label">Past Engagements</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--charcoal)', marginBottom: 40 }}>
                Where She Has <em style={{ color: 'var(--blue)' }}>Spoken</em>
              </h2>
              {pastEvents.map((e, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: 10 }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, color: 'var(--charcoal)', marginBottom: 2 }}>{e.name}</p>
                    <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{e.location}</p>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', background: 'var(--blue-light)', padding: '6px 14px', borderRadius: 20 }}>{e.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)', marginBottom: 16 }}>
          Book Dr. Necca <em style={{ color: 'var(--blue)' }}>For Your Event</em>
        </h2>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>
          For keynotes, panels, workshops, and media appearances, reach out to the speaking team.
        </p>
        <a href="mailto:speaking@drneccaopara.com" className="btn-blue" style={{ borderRadius: 8 }}>speaking@drneccaopara.com</a>
      </section>
    </div>
  )
}

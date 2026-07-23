const resources = [
  {
    category: 'Patient Resources',
    items: [
      { title: 'Pre-Treatment Checklist', desc: 'What to do (and avoid) in the 48 hours before your aesthetic appointment.' },
      { title: 'Post-Treatment Care Guide', desc: 'Comprehensive guidance for caring for your skin after common aesthetic procedures.' },
      { title: 'Consent & Medical History Form', desc: 'Download and complete before your first consultation to save time at the clinic.' },
    ],
  },
  {
    category: 'Physician Resources',
    items: [
      { title: 'Aesthetic Medicine Training Brochure', desc: 'Full details on the Venus Aesthetics Training Academy programmes and dates.' },
      { title: 'CPD Event Calendar', desc: "Stay updated on Dr. Necca's upcoming educational events, workshops, and masterclasses." },
      { title: 'Mentorship Programme Overview', desc: 'Information on the one-to-one mentorship programme for physicians in aesthetic practice.' },
    ],
  },
  {
    category: 'Media & Press',
    items: [
      { title: 'Media Kit', desc: "High-resolution photos, biography, and brand assets for press and editorial use." },
      { title: 'Speaker Rider', desc: "Dr. Necca's requirements, topics, and logistics information for event organisers." },
    ],
  },
]

export default function Resources() {
  return (
    <div>
      <section style={{ paddingTop: 80, background: 'var(--charcoal)', padding: '160px 32px 96px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Resources</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'white', lineHeight: 1.1 }}>
          Helpful<br /><em>Resources</em>
        </h1>
      </section>

      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {resources.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 72 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 32 }}>{group.category}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
                {group.items.map((item, ii) => (
                  <div key={ii} style={{ padding: '32px 28px', border: '1px solid var(--border)', borderRadius: 4, cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--charcoal)', marginBottom: 10 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 20 }}>{item.desc}</p>
                    <a href="#" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
                      Download →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

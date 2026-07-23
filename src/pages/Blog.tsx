const posts = [
  { title: '5 Things to Know Before Your First Aesthetic Treatment', category: 'Patient Guide', date: 'July 2025' },
  { title: 'The Difference Between Botox and Fillers', category: 'Education', date: 'June 2025' },
  { title: 'How to Choose a Qualified Aesthetic Practitioner', category: 'Safety', date: 'May 2025' },
  { title: 'Skin Care Routines That Maximise Your Treatment Results', category: 'Skincare', date: 'April 2025' },
  { title: 'The Rise of Medical Aesthetics Clinics in Nigeria', category: 'Industry', date: 'March 2025' },
  { title: 'Anti-Ageing: Myths vs. Medical Facts', category: 'Education', date: 'February 2025' },
]

export default function Blog() {
  return (
    <div style={{ background: 'var(--white)' }}>
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)', padding: '160px 32px 80px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center' }}>Blog</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1 }}>
          Knowledge, <em style={{ color: 'var(--blue)' }}>Shared Freely</em>
        </h1>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', maxWidth: 480, margin: '20px auto 0', lineHeight: 1.75 }}>
          Practical guides, educational articles, and expert commentary on aesthetic medicine and wellness.
        </p>
      </section>

      <section style={{ padding: '80px 32px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" className="bento-card" style={{ display: 'block', textDecoration: 'none', padding: '32px 28px' }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 12 }}>{p.category}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 16 }}>{p.title}</h2>
              <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{p.date}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

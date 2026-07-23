import { useState } from 'react'

const articles = [
  { title: 'The Future of Aesthetic Medicine in Africa', excerpt: 'How a continent once overlooked by the global beauty industry is now setting new standards in clinical aesthetic practice.', category: 'Industry', date: 'June 2025', readTime: '8 min read', featured: true },
  { title: 'My Philosophy on Natural-Looking Results', excerpt: "Why I believe the best aesthetic treatment is one nobody can tell you've had — and how we achieve that at Venus Aesthetics.", category: 'Practice', date: 'May 2025', readTime: '6 min read', featured: false },
  { title: 'Navigating Entrepreneurship as a Female Physician', excerpt: 'The unspoken challenges, the hard-won lessons, and the unexpected joys of building a business inside a medical career.', category: 'Leadership', date: 'April 2025', readTime: '10 min read', featured: false },
  { title: 'Why I Started the Venus Aesthetics Training Academy', excerpt: 'There was a gap. Physicians across Africa wanted to practise aesthetics safely, but the training was not accessible. So I built it.', category: 'Education', date: 'March 2025', readTime: '7 min read', featured: false },
  { title: 'Skin: Science, Culture, and Identity', excerpt: 'Exploring the deeply personal relationship between skin health, cultural identity, and self-confidence across the African diaspora.', category: 'Wellness', date: 'February 2025', readTime: '9 min read', featured: false },
  { title: 'On Mentorship: What I Wish I Had Known Earlier', excerpt: 'The mentors who shaped my career, the ones I wished I had, and what I now offer the physicians who come to me for guidance.', category: 'Mentorship', date: 'January 2025', readTime: '6 min read', featured: false },
]

const categories = ['All', 'Industry', 'Practice', 'Leadership', 'Education', 'Wellness', 'Mentorship']

export default function Journal() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active)

  return (
    <div style={{ background: 'var(--white)' }}>
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)', padding: '160px 32px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Dr. Necca's Journal</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 20 }}>
            Thoughts, <em style={{ color: 'var(--blue)' }}>Insights & Perspectives</em>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.75, maxWidth: 480, margin: '0 auto' }}>
            Essays on medicine, beauty, leadership, and the life of building something meaningful.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)', padding: '0 32px', position: 'sticky', top: 88, zIndex: 50 }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', gap: 4, overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ padding: '18px 18px', fontSize: 12, fontWeight: active === cat ? 700 : 400, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'none', border: 'none', borderBottom: active === cat ? '2px solid var(--blue)' : '2px solid transparent', color: active === cat ? 'var(--blue)' : 'var(--warm-gray)', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <section style={{ padding: '64px 32px 96px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {/* Featured */}
          {active === 'All' && articles.filter(a => a.featured).map((a, i) => (
            <div key={i} className="bento-card" style={{ padding: '48px', marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 16 }}>
                Featured · {a.category}
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 16, maxWidth: 680 }}>{a.title}</h2>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.75, maxWidth: 600, marginBottom: 24 }}>{a.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{a.date} · {a.readTime}</p>
                <a href="#" className="btn-blue" style={{ marginLeft: 'auto', padding: '10px 20px', borderRadius: 8, fontSize: 12 }}>Read Article</a>
              </div>
            </div>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {filtered.filter(a => !a.featured || active !== 'All').map((a, i) => (
              <article key={i} className="bento-card" style={{ padding: '32px 28px' }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>{a.category}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 10 }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--warm-gray)', lineHeight: 1.7, marginBottom: 20 }}>{a.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: 12, color: 'var(--warm-gray)' }}>{a.date} · {a.readTime}</p>
                  <a href="#" style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)', textDecoration: 'none' }}>Read →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

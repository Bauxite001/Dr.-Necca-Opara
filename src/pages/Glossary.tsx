import { useState } from 'react'

const terms = [
  { term: 'Botulinum Toxin (Botox)', def: 'A purified protein derived from Clostridium botulinum, used in small doses to temporarily relax facial muscles and reduce the appearance of dynamic wrinkles.' },
  { term: 'Cannula', def: "A blunt-tipped needle used in filler injections, preferred in certain areas for its reduced risk of bruising and vascular complications compared to sharp needles." },
  { term: 'Chemical Peel', def: "A treatment in which a chemical solution is applied to the skin to remove damaged outer layers, improving texture, tone, and the appearance of fine lines and pigmentation." },
  { term: 'Collagen', def: 'The most abundant protein in the skin, providing structure, firmness, and elasticity. Collagen production declines with age, contributing to wrinkles and skin laxity.' },
  { term: 'Dermal Filler', def: 'Injectable substances — commonly hyaluronic acid — used to restore volume, smooth lines, and enhance facial contours.' },
  { term: 'Hyaluronic Acid (HA)', def: 'A naturally occurring sugar molecule that attracts and retains water in the skin. Used both topically and as an injectable filler due to its hydrating and volumising properties.' },
  { term: 'Microneedling', def: "A procedure using fine needles to create micro-injuries in the skin, stimulating collagen production and improving skin texture, scars, and pore size." },
  { term: 'PDO Thread Lift', def: 'A minimally invasive procedure using polydioxanone threads to lift and tighten sagging skin, stimulating collagen production at the treatment site.' },
  { term: 'Profhilo', def: "A bio-remodelling injectable that spreads beneath the skin and stimulates collagen and elastin production, improving skin quality and hydration rather than adding volume." },
  { term: 'Radiofrequency (RF)', def: 'An energy-based treatment that heats the deeper layers of skin to stimulate collagen production, resulting in tighter, firmer skin without surgery.' },
  { term: 'Rhinoplasty (Non-surgical)', def: 'The use of dermal fillers to reshape and refine the nose without surgery, correcting bumps, asymmetry, or drooping tips.' },
  { term: 'Skin Laxity', def: "The looseness or sagging of the skin, typically caused by the loss of collagen and elastin as part of the ageing process." },
]

const letters = [...new Set(terms.map(t => t.term[0]))].sort()

export default function Glossary() {
  const [filter, setFilter] = useState('')
  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(filter.toLowerCase()) || t.def.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <section style={{ paddingTop: 80, background: 'var(--charcoal)', padding: '160px 32px 96px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Glossary</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'white', lineHeight: 1.1 }}>
          Aesthetic Medicine<br /><em>Terminology</em>
        </h1>
        <div style={{ marginTop: 40, maxWidth: 480, margin: '40px auto 0' }}>
          <input
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Search terms…"
            style={{ width: '100%', padding: '14px 20px', fontSize: 15, border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 2, outline: 'none', fontFamily: 'var(--font-body)' }}
          />
        </div>
      </section>

      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {filtered.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--border)', alignItems: 'baseline' }}>
              <dt style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--charcoal)', fontWeight: 500 }}>{t.term}</dt>
              <dd style={{ fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.75, margin: 0 }}>{t.def}</dd>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ fontSize: 16, color: 'var(--warm-gray)', textAlign: 'center', padding: '60px 0' }}>No matching terms found.</p>
          )}
        </div>
      </section>
    </div>
  )
}

const comparisons = [
  {
    topic: 'Botox vs. Dermal Fillers',
    col1: 'Botox (Botulinum Toxin)',
    col2: 'Dermal Fillers',
    rows: [
      { label: 'What it does', v1: 'Relaxes muscles that cause wrinkles', v2: 'Adds volume and smooths static lines' },
      { label: 'Best for', v1: 'Forehead lines, crow\'s feet, frown lines', v2: 'Lips, cheeks, nasolabial folds, under-eyes' },
      { label: 'Duration', v1: '3–6 months', v2: '6–18 months depending on product' },
      { label: 'Pain level', v1: 'Minimal (fine needle)', v2: 'Minimal to mild (often with numbing)' },
      { label: 'Downtime', v1: 'None to minimal', v2: 'None to minimal' },
      { label: 'Results visible', v1: '3–7 days', v2: 'Immediately' },
    ],
  },
  {
    topic: 'Medical-Grade vs. Over-the-Counter Skincare',
    col1: 'Medical-Grade Skincare',
    col2: 'Over-the-Counter (OTC)',
    rows: [
      { label: 'Ingredient concentration', v1: 'Higher — clinically tested', v2: 'Lower — for general consumer safety' },
      { label: 'Penetration depth', v1: 'Reaches deeper skin layers', v2: 'Acts on surface only' },
      { label: 'Clinical evidence', v1: 'Peer-reviewed studies', v2: 'Limited or cosmetic claims only' },
      { label: 'Availability', v1: 'Physician-dispensed', v2: 'Retail / pharmacy' },
      { label: 'Cost', v1: 'Higher', v2: 'Lower' },
      { label: 'Results', v1: 'Measurable, documented', v2: 'Variable' },
    ],
  },
]

export default function Comparison() {
  return (
    <div>
      <section style={{ paddingTop: 80, background: 'var(--beige)', padding: '160px 32px 96px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, fontWeight: 500 }}>Comparison Guides</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1 }}>
          Side-by-Side<br /><em>Comparisons</em>
        </h1>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', maxWidth: 480, margin: '24px auto 0', lineHeight: 1.75 }}>
          Making informed decisions begins with understanding your options. Here are clear, clinical comparisons.
        </p>
      </section>

      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {comparisons.map((comp, ci) => (
            <div key={ci} style={{ marginBottom: 80 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--charcoal)', marginBottom: 32, paddingBottom: 20, borderBottom: '2px solid var(--gold)' }}>
                {comp.topic}
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '16px 20px', background: 'var(--beige)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--warm-gray)', fontWeight: 500, width: '30%' }}>Feature</th>
                      <th style={{ textAlign: 'left', padding: '16px 20px', background: 'var(--charcoal)', color: 'white', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400 }}>{comp.col1}</th>
                      <th style={{ textAlign: 'left', padding: '16px 20px', background: 'var(--gold)', color: 'white', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 400 }}>{comp.col2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comp.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: '1px solid var(--border)', background: ri % 2 === 0 ? 'white' : 'var(--beige)' }}>
                        <td style={{ padding: '16px 20px', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em', color: 'var(--warm-gray)', textTransform: 'uppercase' }}>{row.label}</td>
                        <td style={{ padding: '16px 20px', color: 'var(--charcoal)' }}>{row.v1}</td>
                        <td style={{ padding: '16px 20px', color: 'var(--charcoal)' }}>{row.v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

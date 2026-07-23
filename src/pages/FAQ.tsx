import { useState } from 'react'

const faqs = [
  { q: 'What is aesthetic medicine?', a: 'Aesthetic medicine is a branch of medicine focused on improving the cosmetic appearance of patients through non-surgical procedures such as injectables, skin rejuvenation, and body contouring. It combines medical science with artistic judgement to enhance natural features safely.' },
  { q: 'Am I a good candidate for aesthetic treatment?', a: "Most adults in good general health are candidates for aesthetic treatments. During your consultation at Venus Aesthetics, Dr. Necca will assess your skin, anatomy, health history, and aesthetic goals to recommend the most appropriate treatments." },
  { q: 'How do I book a consultation with Dr. Necca?', a: "You can book a consultation via the Contact page on this website, by emailing info@drneccaopara.com, or by WhatsApp on +234 900 000 0000." },
  { q: 'Are the treatments safe?', a: "Safety is the cornerstone of everything we do at Venus Aesthetics. All treatments are performed by Dr. Necca Opara, a qualified physician, or under her direct supervision. We use only clinically approved products and follow evidence-based protocols." },
  { q: 'What is the recovery time for most treatments?', a: "Most of our treatments have minimal downtime. Injectable treatments typically allow you to return to daily activities the same day." },
  { q: 'Can Dr. Necca speak at my event?', a: "Yes. Dr. Necca accepts speaking invitations for medical conferences, corporate events, TEDx, and leadership forums. Please email speaking@drneccaopara.com with details of your event." },
  { q: 'Does Dr. Necca offer training for physicians?', a: "Yes. Through the Venus Aesthetics Training Academy, Dr. Necca offers comprehensive aesthetic medicine training for qualified physicians and medical professionals." },
  { q: 'How can I follow Dr. Necca on social media?', a: "You can follow Dr. Necca on Instagram, LinkedIn, Twitter/X, and YouTube. Links are available in the footer of this website." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ background: 'var(--white)' }}>
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)', padding: '160px 32px 80px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center' }}>FAQ</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1 }}>
          Frequently Asked <em style={{ color: 'var(--blue)' }}>Questions</em>
        </h1>
      </section>

      <section style={{ padding: '80px 32px 96px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="bento-card" style={{ marginBottom: 12, overflow: 'visible' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--charcoal)' }}>{faq.q}</p>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', background: open === i ? 'var(--blue)' : 'var(--blue-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: open === i ? 'white' : 'var(--blue)',
                  fontSize: 18, fontWeight: 300, transition: 'all 0.25s',
                }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p style={{ fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.8, padding: '0 28px 24px' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

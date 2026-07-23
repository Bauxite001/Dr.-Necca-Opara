import { useState, useRef, useEffect } from 'react'

interface Message { role: 'user' | 'assistant'; text: string }

const quickActions = [
  { label: 'Book Appointment', action: 'book' },
  { label: 'WhatsApp', action: 'whatsapp' },
  { label: 'Email', action: 'email' },
  { label: 'Leave a Message', action: 'message' },
]

const knowledge: { q: RegExp; a: string }[] = [
  { q: /who is dr\.? necca|about necca|biography/i, a: "Dr. Necca Opara is a Nigerian physician, internationally certified aesthetic medicine expert, speaker, mentor, and entrepreneur. She is the Founder and Medical Director of Venus Aesthetics, one of Africa's leading aesthetic medicine clinics." },
  { q: /venus aesthetics|clinic/i, a: "Venus Aesthetics is Dr. Necca's flagship aesthetic medicine clinic based in Lagos, Nigeria. It offers a full suite of medical aesthetic treatments delivered with clinical excellence and luxury." },
  { q: /speaking|keynote|conference/i, a: "Dr. Necca is a sought-after speaker. To enquire about speaking engagements, email speaking@drneccaopara.com." },
  { q: /media|press|interview|feature/i, a: "For media enquiries, please contact media@drneccaopara.com. Dr. Necca has been featured in Vogue Africa, Forbes Africa, Channels TV, and more." },
  { q: /contact|reach|email|phone/i, a: "You can reach Dr. Necca's team at info@drneccaopara.com, or WhatsApp +234 900 000 0000. Office hours: Monday–Friday, 9am–5pm (WAT)." },
  { q: /book|appointment|consultation/i, a: "To book a consultation at Venus Aesthetics, visit the Contact page or click 'Book Appointment' below." },
  { q: /qualifications|credentials|training|certified/i, a: "Dr. Necca holds an MBBS and is internationally certified in aesthetic medicine, with advanced training in the UK and Italy." },
]

function getReply(input: string): string {
  for (const { q, a } of knowledge) {
    if (q.test(input)) return a
  }
  return "Thank you for your message! Dr. Necca's team will be in touch shortly. For urgent enquiries, WhatsApp +234 900 000 0000 or email info@drneccaopara.com."
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hello! I'm Dr. Necca's virtual assistant. How can I help you today?" },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { role: 'user', text }, { role: 'assistant', text: getReply(text) }])
    setInput('')
  }

  const handleAction = (action: string) => {
    if (action === 'whatsapp') window.open('https://wa.me/2349000000000', '_blank')
    else if (action === 'email') window.open('mailto:info@drneccaopara.com')
    else if (action === 'book') window.open('/contact')
    else if (action === 'message') setInput('I would like to leave a message: ')
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 200,
          width: 58, height: 58, borderRadius: '50%',
          background: 'var(--blue)', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(37,99,235,0.4)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.55)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.4)' }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 96, right: 28, zIndex: 200,
          width: 360, maxHeight: 520, background: 'white',
          borderRadius: 20, display: 'flex', flexDirection: 'column',
          overflow: 'hidden', animation: 'fadeUp 0.25s ease',
          boxShadow: '0 20px 60px rgba(37,99,235,0.15), 0 4px 16px rgba(0,0,0,0.08)',
        }}>
          {/* Header */}
          <div style={{ background: 'var(--blue)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'white', flexShrink: 0 }}>DN</div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'white', marginBottom: 1 }}>Dr. Necca's Assistant</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>● Online · Replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '82%', padding: '10px 14px',
                  borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.role === 'user' ? 'var(--blue)' : 'var(--off-white)',
                  color: m.role === 'user' ? 'white' : 'var(--body-text)',
                  fontSize: 13, lineHeight: 1.6,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Quick actions */}
          <div style={{ padding: '8px 14px', borderTop: '1px solid var(--border)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {quickActions.map(qa => (
              <button key={qa.action} onClick={() => handleAction(qa.action)} style={{ padding: '6px 12px', fontSize: 11, fontWeight: 500, background: 'var(--blue-light)', border: 'none', borderRadius: 20, cursor: 'pointer', color: 'var(--blue)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>
                {qa.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
              placeholder="Ask me anything…"
              style={{ flex: 1, padding: '10px 14px', fontSize: 13, border: '1.5px solid var(--border)', borderRadius: 10, outline: 'none', fontFamily: 'var(--font-body)', color: 'var(--body-text)', background: 'var(--off-white)' }}
              onFocus={e => (e.target.style.borderColor = 'var(--blue)')}
              onBlur={e => (e.target.style.borderColor = 'var(--border)')}
            />
            <button onClick={() => send(input)} style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--blue)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

import { Link } from 'react-router-dom'
import logo from '@/imports/image-5.png'

const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Resources', to: '/resources' },
      { label: 'Comparison', to: '/comparison' },
      { label: 'Glossary', to: '/glossary' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Speaking Enquiries', to: '/speaking' },
      { label: 'Media Requests', to: '/media' },
      { label: 'Journal', to: '/journal' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'LinkedIn', href: '#', icon: 'IN' },
  { label: 'Twitter / X', href: '#', icon: 'X' },
  { label: 'YouTube', href: '#', icon: 'YT' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
      {/* Newsletter bar */}
      <div style={{ background: 'var(--blue)', padding: '56px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'white', marginBottom: 6 }}>Stay in the loop</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              Insights on aesthetics, wellness, and leadership — delivered to your inbox.
            </p>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Your email address"
              required
              style={{ padding: '14px 20px', fontSize: 14, fontFamily: 'var(--font-body)', border: 'none', background: 'rgba(255,255,255,0.15)', color: 'white', outline: 'none', minWidth: 260, borderRadius: '8px 0 0 8px' }}
            />
            <button type="submit" style={{ padding: '14px 24px', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', background: 'var(--charcoal)', color: 'white', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', borderRadius: '0 8px 8px 0' }}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '64px 32px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
          {/* Brand */}
          <div>
            <img src={logo} alt="Dr. Necca Opara" style={{ height: 52, width: 'auto', objectFit: 'contain', marginBottom: 20 }} />
            <p style={{ fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.8, maxWidth: 220, marginBottom: 24 }}>
              Nigerian physician. Aesthetic medicine expert. Speaker, mentor & entrepreneur. Founder of Venus Aesthetics.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--border)', borderRadius: 8, fontSize: 10, fontWeight: 700, color: 'var(--warm-gray)', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--warm-gray)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 20 }}>{col.title}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map(link => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <Link to={link.to} style={{ fontSize: 14, color: 'var(--warm-gray)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 20 }}>Contact</p>
            <div style={{ fontSize: 14, lineHeight: 2.2 }}>
              <a href="mailto:info@drneccaopara.com" style={{ display: 'block', color: 'var(--warm-gray)', textDecoration: 'none' }}>info@drneccaopara.com</a>
              <a href="https://wa.me/2349000000000" target="_blank" rel="noreferrer" style={{ display: 'block', color: 'var(--warm-gray)', textDecoration: 'none' }}>WhatsApp: +234 900 000 0000</a>
              <span style={{ display: 'block', color: 'var(--warm-gray)', opacity: 0.6 }}>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', marginTop: 48, paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>© {new Date().getFullYear()} Dr. Necca Opara. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[{ label: 'Privacy', to: '/privacy' }, { label: 'Terms', to: '/terms' }, { label: 'Cookies', to: '/cookies' }].map(l => (
              <Link key={l.label} to={l.to} style={{ fontSize: 13, color: 'var(--warm-gray)', textDecoration: 'none' }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

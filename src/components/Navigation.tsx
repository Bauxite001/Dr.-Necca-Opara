import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '@/imports/image-5.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Speaking', to: '/speaking' },
  { label: 'Media', to: '/media' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
        background: scrolled || menuOpen
          ? 'rgba(255,255,255,0.97)'
          : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 1px 0 rgba(37,99,235,0.08), 0 4px 24px rgba(37,99,235,0.06)' : '0 1px 0 rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 88 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={logo}
              alt="Dr. Necca Opara signature"
              style={{ height: 116, width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
            {navLinks.map(({ label, to }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--blue)' : 'var(--body-text)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: 2,
                  }}
                  onMouseEnter={e => !active && (e.currentTarget.style.color = 'var(--blue)')}
                  onMouseLeave={e => !active && (e.currentTarget.style.color = 'var(--body-text)')}
                >
                  {label}
                  {active && (
                    <span style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 2, background: 'var(--blue)', borderRadius: 1 }} />
                  )}
                </Link>
              )
            })}

            <Link to="/contact" className="btn-blue" style={{ padding: '12px 24px', borderRadius: 8, fontSize: 12 }}>
              Meet Necca
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" stroke="var(--body-text)" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="19" y1="3" x2="3" y2="19" stroke="var(--body-text)" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="var(--body-text)" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="var(--body-text)" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke="var(--body-text)" strokeWidth="1.8" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={{ borderTop: '1px solid var(--border)', paddingBottom: 28, paddingTop: 8 }}>
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                style={{ display: 'block', padding: '13px 0', fontSize: 14, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: location.pathname === to ? 'var(--blue)' : 'var(--body-text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="btn-blue" style={{ marginTop: 20, borderRadius: 8 }}>
              Meet Necca
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

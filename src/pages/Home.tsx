import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithFallback from '@/components/ImageWithFallback'

import heroPhoto from '@/imports/image-6.png'
import clinicPhoto from '@/imports/image-1.png'
import stylePhoto from '@/imports/image-4.png'
import scrubsPhoto from '@/imports/image-3.png'
import closeupPhoto from '@/imports/image-2.png'
import portraitPhoto from '@/imports/image.png'

// ── Animated counter ─────────────────────────────────────────────
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

function StatCard({ value, suffix, label, desc }: { value: number; suffix: string; label: string; desc: string }) {
  const { count, ref } = useCounter(value)
  return (
    <div
      ref={ref}
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius)',
        padding: '36px 32px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--border)',
      }}
    >
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 5vw, 64px)', fontWeight: 700, color: 'var(--blue)', lineHeight: 1, marginBottom: 8 }}>
        {count}{suffix}
      </p>
      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--body-text)', marginBottom: 6 }}>{label}</p>
      <p style={{ fontSize: 13, color: 'var(--warm-gray)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}

const testimonials = [
  { name: 'Adaeze Obi', title: 'Patient, Lagos', quote: "Dr. Necca transformed not just my appearance but my confidence. Her expertise and warmth are unmatched." },
  { name: 'Chisom Eze', title: 'Patient & Referral', quote: "I flew in from Abuja specifically to see Dr. Necca. Worth every kilometre. The results speak for themselves." },
  { name: 'Dr. Funke Adeyemi', title: 'Fellow Physician', quote: "A true pioneer in aesthetic medicine on the continent. Her clinical standards are world-class." },
]

const journalPosts = [
  { title: 'The Future of Aesthetic Medicine in Africa', date: 'June 2025', category: 'Industry' },
  { title: 'My Philosophy on Natural-Looking Results', date: 'May 2025', category: 'Practice' },
  { title: 'Navigating Entrepreneurship as a Female Physician', date: 'April 2025', category: 'Leadership' },
]

const galleryImages = [
  { src: portraitPhoto, alt: 'Dr. Necca Opara elegant portrait', span: 'tall' },
  { src: heroPhoto, alt: 'Dr. Necca Opara glamorous close-up', span: 'normal' },
  { src: clinicPhoto, alt: 'Dr. Necca in her clinic', span: 'normal' },
  { src: scrubsPhoto, alt: 'Dr. Necca in blue scrubs', span: 'normal' },
  { src: closeupPhoto, alt: 'Dr. Necca close portrait', span: 'normal' },
  { src: stylePhoto, alt: 'Dr. Necca in white ensemble', span: 'normal' },
]

export default function Home() {
  return (
    <div style={{ background: 'var(--white)' }}>

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 50%, #EFF6FF 100%)',
          paddingTop: 88,
        }}
      >
        {/* Decorative blue shapes */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '3%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '60px 32px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left: text */}
          <div style={{ animation: 'fadeUp 0.7s ease both' }}>
            <span className="section-label">Physician · Aesthetic Expert · Entrepreneur</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.08, marginBottom: 28 }}>
              Where Medicine<br />
              <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Meets Beauty</em>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--warm-gray)', lineHeight: 1.75, marginBottom: 44, maxWidth: 480 }}>
              I believe beauty is science. As a physician and aesthetic medicine expert, I help people reveal their most confident selves — safely, artistically, and authentically.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-blue" style={{ borderRadius: 10, padding: '15px 32px' }}>
                Meet Necca
              </Link>
              <Link to="/about" className="btn-outline" style={{ borderRadius: 10, padding: '15px 32px' }}>
                My Story
              </Link>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', gap: 32, marginTop: 52, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
              {[['500+', 'Patients'], ['10+', 'Years'], ['300+', 'Trained']].map(([num, lbl]) => (
                <div key={lbl}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>{num}</p>
                  <p style={{ fontSize: 12, color: 'var(--warm-gray)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero image */}
          <div style={{ position: 'relative', animation: 'scaleIn 0.8s ease both 0.2s' }}>
            <div
              className="img-blue-overlay"
              style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
            >
              <ImageWithFallback
                src={heroPhoto}
                alt="Dr. Necca Opara portrait"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              {/* Blue gradient bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(37,99,235,0.25) 0%, transparent 100%)' }} />
            </div>

            {/* Floating card: Venus Aesthetics */}
            <div style={{
              position: 'absolute', bottom: 32, left: -28,
              background: 'white', borderRadius: 14, padding: '18px 22px',
              boxShadow: 'var(--shadow-md)', minWidth: 200,
              border: '1px solid var(--border)',
            }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 4 }}>Founder & Medical Director</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--charcoal)' }}>Venus Aesthetics</p>
            </div>

            {/* Floating card: Rating */}
            <div style={{
              position: 'absolute', top: 32, right: -24,
              background: 'var(--blue)', borderRadius: 14, padding: '16px 20px',
              boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
            }}>
              <p style={{ fontSize: 24, fontWeight: 700, color: 'white', lineHeight: 1 }}>★ 5.0</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>Patient Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WELCOME MESSAGE ─────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>A Personal Welcome</span>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 32px)', fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.55, marginBottom: 36 }}>
            "I became a physician because I believed in the power of medicine to transform lives. I built Venus Aesthetics because I believed beauty deserved that same clinical rigour."
          </blockquote>
          <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 28 }}>
            I am Dr. Necca Opara — a Nigerian-born physician, aesthetic medicine specialist, and the founder of Venus Aesthetics. Over the past decade, I have dedicated my career to merging the science of medicine with the art of beauty, training the next generation of aesthetic practitioners across Africa.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontStyle: 'italic', color: 'var(--blue)' }}>— Dr. Necca Opara</p>
        </div>
      </section>

      {/* ─── BENTO ABOUT SNAPSHOT ────────────────────────────────── */}
      <section style={{ padding: '0 32px 96px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>The Physician</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--charcoal)' }}>
              Science, Art, <em style={{ color: 'var(--blue)' }}>and Purpose</em>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="bento-grid" style={{ alignItems: 'stretch' }}>
            {/* Large photo card — col 1-5 */}
            <div className="bento-card" style={{ gridColumn: '1 / 6', gridRow: '1 / 3', minHeight: 480, position: 'relative' }}>
              <ImageWithFallback
                src={clinicPhoto}
                alt="Dr. Necca in her clinic"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 480 }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, rgba(37,99,235,0.45) 0%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 28, left: 28, color: 'white' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 6 }}>Medical Director</p>
                <p style={{ fontSize: 13, opacity: 0.85 }}>Venus Aesthetics, Lagos</p>
              </div>
            </div>

            {/* Bio text card — col 6-12 */}
            <div className="bento-card" style={{ gridColumn: '6 / 13', padding: '44px 44px' }}>
              <span className="section-label">My Background</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 20 }}>
                From Lagos to International Stages
              </h3>
              <p style={{ fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 24 }}>
                After my MBBS at the University of Lagos, I pursued advanced aesthetic medicine training in the UK and Italy, returning to Nigeria with a mission: to raise the standard of aesthetic practice on the continent.
              </p>
              <p style={{ fontSize: 15, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 32 }}>
                Today, Venus Aesthetics is a landmark clinic in Lagos, and my training programmes have equipped hundreds of physicians across Africa with the skills to practise safely and artistically.
              </p>
              <Link to="/about" className="btn-blue" style={{ borderRadius: 8 }}>
                Read My Full Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </Link>
            </div>

            {/* Values card — col 6-9 */}
            <div className="bento-card" style={{ gridColumn: '6 / 10', padding: '32px', background: 'var(--blue)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'white', fontStyle: 'italic', lineHeight: 1.55 }}>
                "Excellence is not an act — it is a habit. Every patient, every treatment, every day."
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 16, letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Dr. Necca Opara</p>
            </div>

            {/* Stats card — col 10-13 */}
            <div className="bento-card" style={{ gridColumn: '10 / 13', padding: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[['10+', 'Years of Excellence'], ['500+', 'Patients Treated'], ['300+', 'Physicians Trained']].map(([num, lbl]) => (
                  <div key={lbl} style={{ borderBottom: '1px solid var(--border)', paddingBottom: 20, lastChild: { borderBottom: 'none' } as any }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>{num}</p>
                    <p style={{ fontSize: 12, color: 'var(--warm-gray)', marginTop: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZIG-ZAG JOURNEY ─────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>My Journey</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--charcoal)' }}>
              Milestones That <em style={{ color: 'var(--blue)' }}>Shaped My Purpose</em>
            </h2>
          </div>

          {/* Single row: image left, combined text right */}
          <div className="zigzag-row">
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <ImageWithFallback
                src={scrubsPhoto}
                alt="Dr. Necca in blue scrubs"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, transparent 50%)' }} />
            </div>
            <div>
              <span className="section-label">2017 — Present</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 20 }}>
                From Clinic to Continent
              </h3>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 20 }}>
                With world-class training and an unshakeable vision, Dr. Necca opened Venus Aesthetics in Lagos — not just as a clinic, but as a declaration that African patients deserve global standards of care. The clinic quickly became a landmark in aesthetic medicine on the continent, known for its clinical precision, luxurious care, and unwavering commitment to natural, beautiful results.
              </p>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 32 }}>
                Recognising the gap in accessible, credible aesthetic medicine training across Africa, Dr. Necca launched the Venus Aesthetics Training Academy. Over 300 physicians across the continent have been equipped with the skills to practise safely and artistically. The academy continues to grow, with new programmes launching annually.
              </p>
              <Link to="/journey" className="btn-outline" style={{ borderRadius: 8 }}>
                See Full Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY BENTO ────────────────────────────────────── */}
      <section style={{ padding: '0 32px 96px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', paddingTop: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>My Philosophy</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--charcoal)' }}>
              The Principles <em style={{ color: 'var(--blue)' }}>I Live By</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '◈', title: 'Clinical Excellence', desc: 'Every treatment decision is grounded in evidence, anatomy, and the highest safety standards.' },
              { icon: '◉', title: 'Authentic Beauty', desc: 'I believe in enhancing who you already are — never erasing what makes you uniquely you.' },
              { icon: '◎', title: 'Continuous Learning', desc: 'Medicine evolves. I invest relentlessly in keeping my skills at the leading edge.' },
              { icon: '◇', title: 'Empowerment', desc: 'My patients leave informed and confident. Knowledge is as important as the treatment itself.' },
            ].map((val, i) => (
              <div
                key={i}
                className="bento-card"
                style={{ padding: '40px 32px', background: i === 0 ? 'var(--blue)' : 'var(--white)' }}
              >
                <p style={{ fontSize: 30, marginBottom: 20, color: i === 0 ? 'white' : 'var(--blue)' }}>{val.icon}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: i === 0 ? 'white' : 'var(--charcoal)', marginBottom: 12 }}>{val.title}</h3>
                <p style={{ fontSize: 14, color: i === 0 ? 'rgba(255,255,255,0.8)' : 'var(--warm-gray)', lineHeight: 1.75 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VENUS AESTHETICS ZIG-ZAG ────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="zigzag-row">
            <div>
              <span className="section-label">Venus Aesthetics</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 24 }}>
                Africa's Premier<br /><em style={{ color: 'var(--blue)' }}>Aesthetic Clinic</em>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 20 }}>
                Venus Aesthetics was born from a vision: that patients in Lagos and across Africa deserve access to world-class aesthetic medicine — without compromise.
              </p>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 36 }}>
                From advanced injectables and skin rejuvenation to body contouring and bespoke facial treatments, every service is delivered by Dr. Necca and her rigorously trained team.
              </p>
              <div style={{ display: 'flex', gap: 28, marginBottom: 40 }}>
                {[['500+', 'Patients'], ['98%', 'Satisfaction'], ['15+', 'Treatments']].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--blue)' }}>{num}</p>
                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--warm-gray)' }}>{lbl}</p>
                  </div>
                ))}
              </div>
              <a href="https://venusaesthetics.com" target="_blank" rel="noreferrer" className="btn-blue" style={{ borderRadius: 8 }}>
                Visit Venus Aesthetics
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <ImageWithFallback
                src={portraitPhoto}
                alt="Dr. Necca Opara editorial portrait"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 24, right: 24, background: 'var(--blue)', borderRadius: 12, padding: '16px 20px', color: 'white' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontStyle: 'italic' }}>"Luxury is precision."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT STATS ────────────────────────────────────────── */}
      <section style={{ background: 'var(--off-white)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Impact</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)' }}>
              The Numbers Behind <em style={{ color: 'var(--blue)' }}>the Mission</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            <StatCard value={500} suffix="+" label="Patients Treated" desc="At Venus Aesthetics, Lagos" />
            <StatCard value={10} suffix="+" label="Years of Practice" desc="Clinical & aesthetic medicine" />
            <StatCard value={300} suffix="+" label="Physicians Trained" desc="Across Africa" />
            <StatCard value={50} suffix="+" label="Speaking Engagements" desc="Global conferences & panels" />
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Gallery</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--charcoal)' }}>
              Through the <em style={{ color: 'var(--blue)' }}>Lens</em>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--warm-gray)', marginTop: 16, maxWidth: 440, margin: '16px auto 0' }}>
              Moments from the clinic, the stage, and the story of a life lived with intention.
            </p>
          </div>

          {/* Masonry-style bento gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: 16 }}>
            {/* Large portrait — row span 2 */}
            <div className="gallery-item" style={{ gridRow: '1 / 3', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageWithFallback
                src={portraitPhoto}
                alt="Dr. Necca Opara elegant portrait"
                style={{ width: '100%', height: '100%', minHeight: 520, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div className="gallery-overlay" />
            </div>
            {/* Top-right image */}
            <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageWithFallback
                src={heroPhoto}
                alt="Dr. Necca Opara glamorous close-up"
                style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div className="gallery-overlay" />
            </div>
            {/* Top-right-far image */}
            <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageWithFallback
                src={clinicPhoto}
                alt="Dr. Necca in her clinic"
                style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div className="gallery-overlay" />
            </div>
            {/* Bottom-middle image */}
            <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageWithFallback
                src={scrubsPhoto}
                alt="Dr. Necca in blue scrubs"
                style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div className="gallery-overlay" />
            </div>
            {/* Bottom-right image */}
            <div className="gallery-item" style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <ImageWithFallback
                src={stylePhoto}
                alt="Dr. Necca in white ensemble"
                style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div className="gallery-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPEAKING ZIG-ZAG ────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="zigzag-row reverse">
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <ImageWithFallback
                src={closeupPhoto}
                alt="Dr. Necca Opara close portrait"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />
            </div>
            <div>
              <span className="section-label">Speaking & Leadership</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 20 }}>
                Amplifying Voices,<br /><em style={{ color: 'var(--blue)' }}>Shifting Perspectives</em>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 28 }}>
                From medical conferences and TEDx stages to boardrooms and mentorship circles, Dr. Necca brings authentic, evidence-based perspectives on aesthetic medicine, female entrepreneurship, and health leadership in Africa.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {['Keynote Speaking', 'Panel Discussions', 'Physician Mentorship', 'Media Appearances', 'Corporate Wellness'].map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                    <p style={{ fontSize: 15, color: 'var(--body-text)' }}>{s}</p>
                  </div>
                ))}
              </div>
              <Link to="/speaking" className="btn-blue" style={{ borderRadius: 8 }}>
                Speaking Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDIA BENTO ─────────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Media & Recognition</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)' }}>
              As <em style={{ color: 'var(--blue)' }}>Seen & Heard</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 48 }}>
            {['Vogue Africa', 'Channels TV', 'The Guardian', 'Forbes Africa', 'TechCabal', 'Arise News'].map(pub => (
              <div key={pub} className="bento-card" style={{ padding: '28px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--warm-gray)', textAlign: 'center', fontStyle: 'italic' }}>{pub}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/media" className="btn-outline" style={{ borderRadius: 8 }}>View All Coverage</Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────────────────── */}
      <section style={{ background: 'var(--off-white)', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Testimonials</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)' }}>
              Words That <em style={{ color: 'var(--blue)' }}>Mean the Most</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i} className="bento-card" style={{ padding: '40px 36px' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 22, color: 'var(--blue)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>"</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.65, marginBottom: 28 }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--body-text)' }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: 'var(--warm-gray)', marginTop: 2 }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL PREVIEW ─────────────────────────────────────── */}
      <section style={{ padding: '96px 32px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span className="section-label">Journal</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--charcoal)' }}>
                Thoughts, <em style={{ color: 'var(--blue)' }}>Insights & Ideas</em>
              </h2>
            </div>
            <Link to="/journal" className="btn-outline" style={{ borderRadius: 8 }}>All Articles</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {journalPosts.map((p, i) => (
              <Link to="/journal" key={i} style={{ textDecoration: 'none', display: 'block' }} className="bento-card">
                <div style={{ padding: '32px 28px' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 12 }}>{p.category}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: 16 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{p.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, var(--blue) 0%, #1D4ED8 100%)', padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <span className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.8)' }}>
            Begin Your Journey
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', lineHeight: 1.15, marginBottom: 24 }}>
            Ready to Transform<br /><em>Your Story?</em>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 44 }}>
            Whether you are seeking a consultation, a collaboration, or a conversation — I would love to hear from you.
          </p>
          <Link
            to="/contact"
            style={{ display: 'inline-block', padding: '18px 44px', background: 'white', color: 'var(--blue)', textDecoration: 'none', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 10 }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

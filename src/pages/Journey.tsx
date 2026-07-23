import ImageWithFallback from '@/components/ImageWithFallback'
import heroPhoto from '@/imports/image.png'
import clinicPhoto from '@/imports/image-1.png'
import stylePhoto from '@/imports/image-4.png'
import heroPhoto6 from '@/imports/image-6.png'

const milestones = [
  { year: '1989', title: 'Born in Nigeria', desc: 'Necca Opara was born in Nigeria, growing up with a deep curiosity about science, beauty, and what it means to care for others.', img: null },
  { year: '2006', title: 'Entering Medicine', desc: 'Enrolling at the University of Lagos Faculty of Medicine, Necca discovered her calling: the science of the human body, and the art of transforming lives through it.', img: null },
  { year: '2012', title: 'MBBS & The Beginning', desc: 'Graduating as Dr. Necca Opara — ready to practise, and already looking beyond conventional medicine toward a field only just emerging in Nigeria.', img: clinicPhoto },
  { year: '2014–2016', title: 'International Training', desc: 'Advanced aesthetic medicine training in the UK and Italy — studying under world-renowned practitioners, gaining qualifications rare on the African continent.', img: heroPhoto6 },
  { year: '2017', title: 'Founding Venus Aesthetics', desc: 'With a clear vision and world-class skills, Dr. Necca opened Venus Aesthetics in Lagos — not just a clinic, but a declaration that African patients deserve global standards of care.', img: stylePhoto },
  { year: '2020', title: 'The Training Academy', desc: 'Recognising the gap in accessible aesthetic medicine training across Africa, Dr. Necca launched the Venus Aesthetics Training Academy — equipping over 300 physicians to date.', img: null },
  { year: '2022–2023', title: 'Continental Recognition', desc: "Featured in Forbes Africa, Vogue Africa, and speaking at conferences across the continent and internationally — Dr. Necca's platform became a voice for Africa in global aesthetic medicine.", img: null },
  { year: '2024–Present', title: 'The Next Chapter', desc: 'Expanding the training academy, mentoring a new generation of aesthetic physicians, and continuing to advocate for clinical excellence as a global voice in aesthetic medicine.', img: heroPhoto },
]

export default function Journey() {
  return (
    <div style={{ background: 'var(--white)' }}>
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)', padding: '160px 32px 80px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center' }}>My Journey</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--charcoal)', lineHeight: 1.1 }}>
          A Life Told <em style={{ color: 'var(--blue)' }}>in Milestones</em>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.75, maxWidth: 480, margin: '20px auto 0' }}>
          From Lagos to London, from medical school to founding a landmark clinic — every step shaped the purpose I carry today.
        </p>
      </section>

      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {milestones.map((m, i) => (
            <div key={i} className="zigzag-row" style={{ marginBottom: 80 }}>
              {/* Content side */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <span className="section-label">{m.year}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: 16 }}>{m.title}</h3>
                <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85 }}>{m.desc}</p>
              </div>

              {/* Image or placeholder side */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                {m.img ? (
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                    <ImageWithFallback
                      src={m.img}
                      alt={m.title}
                      style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 60%)' }} />
                  </div>
                ) : (
                  <div style={{ borderRadius: 'var(--radius)', background: 'var(--blue-light)', height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 700, color: 'var(--blue)', opacity: 0.3 }}>{m.year.slice(0, 4)}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

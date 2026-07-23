import ImageWithFallback from '@/components/ImageWithFallback'
import closeupPhoto from '@/imports/image-2.png'

const mediaItems = [
  { outlet: 'Vogue Africa', title: 'The Physician Redefining Beauty in Nigeria', type: 'Feature', year: '2024', url: '#' },
  { outlet: 'Forbes Africa', title: "30 Entrepreneurs Shaping Africa's Future", type: 'List Feature', year: '2024', url: '#' },
  { outlet: 'Channels TV', title: 'An Interview on Aesthetic Medicine in Nigeria', type: 'TV Interview', year: '2024', url: '#' },
  { outlet: 'The Guardian Nigeria', title: 'Dr. Necca Opara: Beauty with a Medical Conscience', type: 'Profile', year: '2023', url: '#' },
  { outlet: 'Arise News', title: 'Aesthetic Medicine: A Growing Industry', type: 'Panel Discussion', year: '2023', url: '#' },
  { outlet: 'TechCabal Health', title: 'How Technology is Transforming Aesthetic Practice', type: 'Op-Ed', year: '2023', url: '#' },
  { outlet: 'Business Day Nigeria', title: 'Venus Aesthetics: The Standard-Bearer', type: 'Business Profile', year: '2022', url: '#' },
  { outlet: 'Bella Naija', title: 'My Journey: Dr. Necca Opara in Her Own Words', type: 'Interview', year: '2022', url: '#' },
]

export default function Media() {
  return (
    <div style={{ background: 'var(--white)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 88, background: 'linear-gradient(135deg, #EFF6FF 0%, #F8F9FB 100%)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">Media & Recognition</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 24 }}>
              Press & <em style={{ color: 'var(--blue)' }}>Recognition</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--warm-gray)', lineHeight: 1.85, marginBottom: 16 }}>
              Dr. Necca Opara's work has been recognised by leading publications, broadcasters, and organisations across Africa and globally.
            </p>
            <p style={{ fontSize: 14, color: 'var(--warm-gray)' }}>
              For media requests: <a href="mailto:media@drneccaopara.com" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>media@drneccaopara.com</a>
            </p>
          </div>
          <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', position: 'relative' }}>
            <ImageWithFallback src={closeupPhoto} alt="Dr. Necca Opara" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,99,235,0.12) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* Media bento grid */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {mediaItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                className="bento-card"
                style={{ display: 'block', padding: '32px 28px', textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue)' }}>{item.type}</p>
                  <p style={{ fontSize: 12, color: 'var(--warm-gray)' }}>{item.year}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--charcoal)', lineHeight: 1.4, marginBottom: 10 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: 'var(--warm-gray)', fontWeight: 500 }}>{item.outlet}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media enquiries */}
      <section style={{ background: 'linear-gradient(135deg, var(--blue) 0%, #1D4ED8 100%)', padding: '80px 32px', textAlign: 'center' }}>
        <span className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.8)' }}>Media Enquiries</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'white', marginBottom: 16 }}>Work With Us</h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.75 }}>
          For interviews, press features, brand collaborations, and editorial partnerships.
        </p>
        <a href="mailto:media@drneccaopara.com" style={{ display: 'inline-block', padding: '14px 32px', border: '1.5px solid rgba(255,255,255,0.5)', color: 'white', textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 8 }}>
          media@drneccaopara.com
        </a>
      </section>
    </div>
  )
}

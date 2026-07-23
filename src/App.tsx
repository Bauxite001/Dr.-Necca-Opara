import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Journey from '@/pages/Journey'
import Speaking from '@/pages/Speaking'
import Media from '@/pages/Media'
import Journal from '@/pages/Journal'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import Blog from '@/pages/Blog'
import Resources from '@/pages/Resources'
import Comparison from '@/pages/Comparison'
import Glossary from '@/pages/Glossary'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function SimplePolicy({ title }: { title: string }) {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: '120px 32px 96px', background: 'var(--beige)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--charcoal)' }}>{title}</h1>
      </section>
      <section style={{ padding: '80px 32px', maxWidth: 800, margin: '0 auto' }}>
        <p style={{ fontSize: 16, color: 'var(--warm-gray)', lineHeight: 1.85 }}>
          This policy page is currently being prepared. Please check back soon or contact us at info@drneccaopara.com for any queries.
        </p>
      </section>
    </div>
  )
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/media" element={<Media />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/privacy" element={<SimplePolicy title="Privacy Policy" />} />
          <Route path="/terms" element={<SimplePolicy title="Terms of Service" />} />
          <Route path="/cookies" element={<SimplePolicy title="Cookie Policy" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

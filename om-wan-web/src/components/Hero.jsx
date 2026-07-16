export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: 'url("/khejri_desert_hero.png")' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div style={{ marginBottom: '1rem', color: 'var(--forest-green)', fontWeight: '700', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          🇮🇳 India&apos;s First Green Investment Platform
        </div>
        <h1 style={{ lineHeight: '1.2' }}>
          Invest in Forests.<br/>Grow Wealth. Restore the Planet.
        </h1>
        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
          Be part of India&apos;s first green investment platform where your investment helps restore native forests, capture carbon, protect biodiversity, and create long-term value for both you and the environment.
        </p>
        <p style={{ marginTop: '1.2rem', fontSize: '1.3rem', fontWeight: '700', color: 'var(--forest-green)' }}>
          We own the land. You own the trees.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#plans" className="btn-primary">Own Your First Tree</a>
          <a href="#about" className="btn-primary btn-secondary">See How It Works</a>
        </div>
      </div>
    </section>
  );
}

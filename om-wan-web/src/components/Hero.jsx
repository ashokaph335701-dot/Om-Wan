export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: 'url("/khejri_desert_hero.png")' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Restore Ecosystems.<br/>Fight Climate Change.</h1>
        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
          Join Om Wan's revolutionary approach to native tree forests in Rajasthan. 
          We own the land, you own the trees.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#plans" className="btn-primary">Plant Trees Now</a>
          <a href="#about" className="btn-primary btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

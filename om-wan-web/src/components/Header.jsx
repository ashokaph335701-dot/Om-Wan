

export default function Header() {
  return (
    <header className="header-nav">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/Logo.jpeg" alt="Om Wan" style={{ height: '50px', borderRadius: '50%' }} />
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#impact">Impact</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#plans">Plans</a>
      </nav>
      <div>
        <a href="#plans" className="btn-primary" style={{ padding: '8px 20px', fontSize: '1rem' }}>
          Buy Trees
        </a>
      </div>
    </header>
  );
}

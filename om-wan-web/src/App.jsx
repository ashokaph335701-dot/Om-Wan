import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutOmWan from './components/AboutOmWan'
import NativeTrees from './components/NativeTrees'
import Impact from './components/Impact'
import HowItWorks from './components/HowItWorks'
import Advantages from './components/Advantages'
import FutureVision from './components/FutureVision'
import PricingPlans from './components/PricingPlans'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Impact />
      <AboutOmWan />
      <NativeTrees />
      <HowItWorks />
      <Advantages />
      <PricingPlans />
      <Calculator />
      <FutureVision />
      
      <footer style={{ margin: '0', padding: '4rem 5%', textAlign: 'center', backgroundColor: 'var(--text-dark)', color: 'white' }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Om Wan</h3>
        <p style={{ margin: '1rem auto', maxWidth: '500px', color: '#9CA3AF' }}>
          Join our mission to restore India's native forests and reconnect with nature.
        </p>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <a href="https://www.facebook.com/share/13vN9zrpdN/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/omwanofficial/profilecard/?igsh=MWVrd3dybjhqdDlqMg==" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/omwan/about/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://youtube.com/@omwannofficial?feature=shared" target="_blank" rel="noreferrer">YouTube</a>
          <a href="mailto:omwaninfo@gmail.com">Email Us</a>
        </div>
        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#6B7280' }}>© 2026 Om Wan. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

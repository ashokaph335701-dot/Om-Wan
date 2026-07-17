import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function AboutOmWan() {
  return (
    <section id="about" className="section-padding bg-gray">
      <motion.div 
        className="z-pattern-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="z-content">
          <h2>Who Are We?</h2>
          <p>
            Om Wan is India&apos;s first native tree ownership platform, where every tree is a living investment. 
            You own the tree, while we manage the land, lifetime care, and sustainable harvesting. 
            As your tree matures, you earn returns from its natural by-products, while your investment helps restore 
            biodiversity, improve soil health, recharge groundwater, and combat desertification.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="https://maps.app.goo.gl/FQ5ubS7BfTbn79TSA" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} /> Explore Our First Forest
            </a>
          </div>
        </div>
        <div className="z-image">
          <img src="/natural_farming_impact.png" alt="Natural Farming in Rajasthan" />
        </div>
      </motion.div>

      <motion.div 
        className="z-pattern-row reverse"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="z-content">
          <h2>Why the Khejri Tree?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Known as the "Lifeline of the Desert," the native Khejri tree is critical to Rajasthan's ecosystem and communities.
          </p>
          <ul style={{ listStyle: 'none', color: 'var(--text-dark)' }}>
            <li style={{ marginBottom: '1rem' }}><strong>🌱 Soil Health:</strong> Fixes nitrogen and enriches organic matter.</li>
            <li style={{ marginBottom: '1rem' }}><strong>💧 Water Recharge:</strong> Deep roots stabilise soil and promote water infiltration.</li>
            <li style={{ marginBottom: '1rem' }}><strong>🛡️ Resilience:</strong> Thrives in arid conditions with high survival rates.</li>
            <li><strong>💰 Economic Impact:</strong> Highly valued products like Sangri pods offer sustainable income streams.</li>
          </ul>
        </div>
        <div className="z-image">
          <img src="/khejri_desert_hero.png" alt="Khejri Tree" />
        </div>
      </motion.div>
    </section>
  );
}

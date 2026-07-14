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
            Om Wan is India's first organization dedicated to building native tree forests, 
            distinguished by its unique "Om Wan owns the land, and you own the trees" approach. 
            Starting with the vibrant landscapes of Rajasthan, we aim to rejuvenate ecosystems, 
            combat desertification, and address biodiversity loss.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://maps.app.goo.gl/FQ5ubS7BfTbn79TSA" target="_blank" rel="noreferrer" className="btn-primary btn-secondary">
              <MapPin size={18} /> View Project Site (Bikaner)
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

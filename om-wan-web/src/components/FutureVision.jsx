import { motion } from 'framer-motion';
import { Tent, Music, BookOpen } from 'lucide-react';

export default function FutureVision() {
  return (
    <section id="vision" className="section-padding">
      <motion.div 
        className="z-pattern-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="z-content">
          <h2>Future of Om Wan</h2>
          <p style={{ marginBottom: '2rem' }}>
            A vision for holistic growth, sustainability, and community immersion in the lap of nature.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Tent color="var(--forest-green)" size={32} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Sustainable Luxury Huts</h4>
                <p>Eco-friendly accommodations offering guests an immersive nature experience.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Music color="var(--forest-green)" size={32} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Annual Classical Music Festival</h4>
                <p>Celebrating the vibrant culture of Rajasthan in harmony with nature.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <BookOpen color="var(--forest-green)" size={32} />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Agroforestry Courses</h4>
                <p>On-site and online programs designed to educate about sustainable farming.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="z-image">
          <img src="/eco_luxury_hut.png" alt="Eco Luxury Hut" />
        </div>
      </motion.div>
    </section>
  );
}

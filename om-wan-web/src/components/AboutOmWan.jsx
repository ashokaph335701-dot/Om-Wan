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
        <div className="z-image" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '400px' }}>
          {/* 1. Main forest image with slow cinematic push-in */}
          <motion.img 
            src="/rajasthan_native_forest.jpg" 
            alt="Authentic native forest in Bikaner, Rajasthan" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 2. Natural Sunlight filtration overlay */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(220,165,71,0.08) 0%, rgba(0,0,0,0) 60%)',
            pointerEvents: 'none',
            zIndex: 2
          }} />

          {/* 3. Floating Dust Particles */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 3 }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '3px',
                  height: '3px',
                  background: 'rgba(220, 165, 71, 0.4)',
                  borderRadius: '50%',
                  top: Math.random() * 80 + '%',
                  left: Math.random() * 80 + '%',
                }}
                animate={{
                  y: [0, -30, -50],
                  x: [0, 20, 40],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3
                }}
              />
            ))}
          </div>

          {/* 4. Flying Birds in Canopy (Runs occasionally) */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 3 }}>
            <motion.svg
              viewBox="0 0 100 100"
              style={{ position: 'absolute', width: '25px', height: '25px', top: '15%', left: '-10%' }}
              animate={{
                x: ['0vw', '110%'],
                y: ['0px', '20px', '-10px']
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            >
              <path d="M 0,10 Q 5,5 10,10 Q 15,5 20,10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 100"
              style={{ position: 'absolute', width: '20px', height: '20px', top: '25%', left: '-10%' }}
              animate={{
                x: ['0vw', '110%'],
                y: ['20px', '0px', '10px']
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
                delay: 6
              }}
            >
              <path d="M 0,10 Q 5,5 10,10 Q 15,5 20,10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
            </motion.svg>
          </div>
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

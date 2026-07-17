import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function AboutOmWan() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const benefits = [
    "Resilience & Natural Growth",
    "Improve Soil Health",
    "Recharge Groundwater",
    "Enhance Biodiversity",
    "Combat Desertification",
    "Support Local Communities",
    "Create Long-Term Value"
  ];

  return (
    <section id="about" style={{ background: '#0a0d0a', color: '#FFFFFF', padding: '120px 5% 100px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Section 1: Who Are We? */}
        <motion.div 
          className="z-pattern-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '10rem' }}
        >
          <div className="z-content">
            <h2 style={{ color: '#FFFFFF', fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
              Who Are We?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.7' }}>
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

            {/* 4. Flying Birds in Canopy */}
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
            </div>
          </div>
        </motion.div>


        {/* Section 2: Why Only Native Trees? (Overhaul) */}
        <div style={{ marginTop: '8rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
              Why Only Native Trees?
            </h2>
            <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
          </div>

          {isMobile ? (
            /* Dedicated Mobile Stack Layout */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
              
              {/* Circular Forest Centerpiece */}
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-gold)',
                boxShadow: '0 10px 30px rgba(194, 158, 90, 0.15)',
                position: 'relative'
              }}>
                <motion.img 
                  src="/rajasthan_native_forest.jpg" 
                  alt="Rajasthan Forest" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  animate={{ 
                    scale: hoveredIdx !== null ? 1.05 : 1.01 
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Stacked Frosted Capsules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setHoveredIdx(hoveredIdx === i ? null : i)}
                    style={{
                      background: hoveredIdx === i ? 'rgba(77, 122, 79, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      border: hoveredIdx === i ? '1px solid var(--forest-green)' : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '30px',
                      padding: '1.1rem',
                      textAlign: 'center',
                      fontSize: '0.92rem',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      color: hoveredIdx === i ? 'var(--accent-gold)' : '#FFFFFF',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {benefit}
                  </motion.div>
                ))}
              </div>

            </div>
          ) : (
            /* Desktop Radial Interactive Layout */
            <div style={{ 
              position: 'relative', 
              width: '600px', 
              height: '600px', 
              margin: '0 auto', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              
              {/* SVG Canvas for Organic Connection curves */}
              <svg 
                viewBox="0 0 600 600" 
                style={{ 
                  position: 'absolute', 
                  top: 0, left: 0, 
                  width: '100%', height: '100%', 
                  pointerEvents: 'none', 
                  zIndex: 2 
                }}
              >
                <defs>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {benefits.map((_, i) => {
                  const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
                  const targetX = 300 + 210 * Math.cos(angle);
                  const targetY = 300 + 210 * Math.sin(angle);
                  const isHovered = hoveredIdx === i;

                  // Curves slightly curving inward
                  return (
                    <motion.path
                      key={i}
                      d={`M 300,300 Q ${300 + (targetX - 300) * 0.4},${300 + (targetY - 300) * 0.4 - 15} ${targetX},${targetY}`}
                      stroke={isHovered ? "var(--accent-gold)" : "rgba(255, 255, 255, 0.12)"}
                      strokeWidth={isHovered ? 2.5 : 1}
                      fill="none"
                      filter={isHovered ? "url(#goldGlow)" : "none"}
                      style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                    />
                  );
                })}
              </svg>

              {/* Center Circular Forest Hero */}
              <div style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--accent-gold)',
                zIndex: 4,
                boxShadow: '0 0 40px rgba(194, 158, 90, 0.12)'
              }}>
                <motion.img 
                  src="/rajasthan_native_forest.jpg" 
                  alt="Authentic Rajasthan Forest" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    filter: hoveredIdx !== null ? 'brightness(1.08) contrast(1.02)' : 'brightness(0.95)'
                  }}
                  animate={{ 
                    scale: hoveredIdx !== null ? 1.04 : 1.01 
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Light Ray Filter */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(135deg, rgba(220,165,71,0.06) 0%, rgba(0,0,0,0) 70%)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Orbiting Text Capsules */}
              {benefits.map((benefit, i) => {
                const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
                const radius = 230; // Orbit distance
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isHovered = hoveredIdx === i;

                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      background: isHovered ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: isHovered ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '30px',
                      padding: '10px 20px',
                      whiteSpace: 'nowrap',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      color: isHovered ? 'var(--accent-gold)' : '#FFFFFF',
                      cursor: 'pointer',
                      zIndex: 5,
                      boxShadow: isHovered ? '0 10px 25px rgba(194, 158, 90, 0.05)' : 'none',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {benefit}
                  </motion.div>
                );
              })}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Advantages() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const advantages = [
    {
      id: 0,
      title: "100% Survival Rate",
      desc: "Guaranteed tree survival through replanting, monitoring, and professional care."
    },
    {
      id: 1,
      title: "Tree Ownership & Returns",
      desc: "Direct lease ownership of your tree with long-term crop yield revenues."
    },
    {
      id: 2,
      title: "Lifetime Care",
      desc: "Hassle-free irrigation, protection, and maintenance by our dedicated local staff."
    },
    {
      id: 3,
      title: "Regular Growth Updates",
      desc: "Geotagged growth logs and regular carbon tracking reports."
    },
    {
      id: 4,
      title: "Sustainable Restoration",
      desc: "Restore desert ecosystems and native biodiversity in Rajasthan."
    },
    {
      id: 5,
      title: "Future Member Benefits",
      desc: "Exclusive future discounts on eco-academies and cultural retreats."
    }
  ];

  return (
    <section 
      id="advantages" 
      style={{ 
        background: '#0a0d0a', 
        color: '#FFFFFF', 
        padding: '120px 5% 100px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Background ambient radial gradients */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(35, 59, 37, 0.12) 0%, rgba(10, 13, 10, 0) 80%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ maxWidth: '1350px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Why Plant with Om Wan?
          </h2>
          <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
        </div>

        {isMobile ? (
          /* Mobile Stacked Ecosystem */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            
            {/* Centerpiece growing Khejri Tree */}
            <div style={{ position: 'relative', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
                {/* Roots */}
                <path d="M 100,160 Q 80,180 70,195 M 100,160 Q 115,182 125,195" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Trunk */}
                <motion.path 
                  d="M 100,160 V 100 Q 80,80 70,60 M 100,110 Q 120,90 130,70" 
                  stroke="var(--accent-gold)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0.3 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                {/* Growing foliage */}
                <motion.g
                  initial={{ scale: 0.3, originX: '100px', originY: '100px' }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                >
                  <circle cx="70" cy="50" r="18" fill="rgba(77, 122, 79, 0.4)" />
                  <circle cx="130" cy="60" r="16" fill="rgba(77, 122, 79, 0.35)" />
                  <circle cx="100" cy="40" r="22" fill="rgba(77, 122, 79, 0.45)" />
                </motion.g>
              </svg>
            </div>

            {/* Benefit expandable cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
              {advantages.map((adv, i) => {
                const isOpen = hoveredIdx === i;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setHoveredIdx(isOpen ? null : i)}
                    style={{
                      background: isOpen ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(10px)',
                      border: isOpen ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '24px',
                      padding: '1.4rem 1.6rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
                      {adv.title}
                    </h3>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: '0.8rem' }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.65)', margin: 0, lineHeight: '1.5', overflow: 'hidden' }}
                        >
                          {adv.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        ) : (
          /* Desktop Interactive Radial Ecosystem */
          <div style={{ 
            position: 'relative', 
            width: '600px', 
            height: '600px', 
            margin: '0 auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            
            {/* Organic Branches SVG layer */}
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
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Trunk representation inside SVG */}
              <path d="M 300,430 V 300" stroke="#C29E5A" strokeWidth="4" strokeLinecap="round" opacity={0.15} />

              {advantages.map((_, i) => {
                const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
                const radius = 230;
                const targetX = 300 + radius * Math.cos(angle);
                const targetY = 300 + radius * Math.sin(angle);
                const isHovered = hoveredIdx === i;

                // Branches curve organically from the tree core (300, 300)
                return (
                  <g key={i}>
                    {/* Organic branch connecting line */}
                    <motion.path
                      d={`M 300,300 Q ${300 + (targetX - 300) * 0.4},${300 + (targetY - 300) * 0.4 - 20} ${targetX},${targetY}`}
                      stroke={isHovered ? "var(--accent-gold)" : "rgba(77, 122, 79, 0.15)"}
                      strokeWidth={isHovered ? 3.5 : 1}
                      fill="none"
                      filter={isHovered ? "url(#goldGlow)" : "none"}
                      style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                    />
                    
                    {/* Emerging leaves on active branch */}
                    {isHovered && (
                      <g>
                        <motion.circle 
                          cx={300 + (targetX - 300) * 0.5} 
                          cy={300 + (targetY - 300) * 0.5 - 8} 
                          r="4" 
                          fill="var(--forest-green)" 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          transition={{ duration: 0.3 }} 
                        />
                        <motion.circle 
                          cx={300 + (targetX - 300) * 0.7} 
                          cy={300 + (targetY - 300) * 0.7 - 6} 
                          r="3" 
                          fill="var(--forest-green)" 
                          initial={{ scale: 0 }} 
                          animate={{ scale: 1 }} 
                          transition={{ duration: 0.3, delay: 0.15 }} 
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Growing Khejri Tree */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '260px',
              height: '260px',
              zIndex: 4,
              pointerEvents: 'none'
            }}>
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                {/* Roots */}
                <path d="M 100,170 Q 85,185 75,195 M 100,170 Q 115,185 125,195" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                {/* Trunk */}
                <motion.path 
                  d="M 100,170 V 90 Q 80,70 65,48 M 100,110 Q 125,85 135,62 M 100,90 V 50" 
                  stroke="var(--accent-gold)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0.2 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />
                {/* Foliage Clouds */}
                <motion.g
                  initial={{ scale: 0.2, originX: '100px', originY: '90px' }}
                  whileInView={{ scale: hoveredIdx !== null ? 1.05 : 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
                >
                  <circle cx="65" cy="45" r="22" fill="rgba(77, 122, 79, 0.35)" />
                  <circle cx="135" cy="55" r="20" fill="rgba(77, 122, 79, 0.3)" />
                  <circle cx="100" cy="35" r="26" fill="rgba(77, 122, 79, 0.4)" />
                  <circle cx="95" cy="75" r="16" fill="rgba(77, 122, 79, 0.25)" />
                </motion.g>
              </svg>
            </div>

            {/* Orbiting Glass Benefit Capsules */}
            {advantages.map((adv, i) => {
              const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
              const radius = 230;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isHovered = hoveredIdx === i;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 5
                  }}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      background: isHovered ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      border: isHovered ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '24px',
                      padding: isHovered ? '1.2rem 1.6rem' : '0.8rem 1.4rem',
                      color: isHovered ? 'var(--accent-gold)' : '#FFFFFF',
                      cursor: 'pointer',
                      boxShadow: isHovered ? '0 10px 25px rgba(194, 158, 90, 0.05)' : 'none',
                      maxWidth: '260px',
                      textAlign: 'center',
                      transition: 'background 0.3s, border-color 0.3s, color 0.3s, box-shadow 0.3s, padding 0.3s'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 style={{ fontSize: '0.94rem', fontWeight: '800', margin: 0, whiteSpace: isHovered ? 'normal' : 'nowrap' }}>
                      {adv.title}
                    </h3>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', margin: '0.5rem 0 0', lineHeight: '1.4', overflow: 'hidden' }}
                        >
                          {adv.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, TrendingUp, Droplet, Twitter, Users } from 'lucide-react';

export default function Impact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsLeft = [
    {
      id: 1,
      title: "Regenerate Nature",
      desc: "Restore degraded land with native forests built to thrive for generations.",
      icon: <Sprout size={22} />,
      themeColor: "#4d7a4f",
      highlightPart: "foliage",
      indicator: "Ecosystem Restoration Active"
    },
    {
      id: 2,
      title: "A Living Asset",
      desc: "Own a growing tree with long-term value—not just a one-time donation.",
      icon: <TrendingUp size={22} />,
      themeColor: "#C29E5A",
      highlightPart: "trunk",
      indicator: "Equity Valuation Tracking"
    },
    {
      id: 3,
      title: "Restore Water",
      desc: "Native forests improve soil health and naturally support groundwater recharge.",
      icon: <Droplet size={22} />,
      themeColor: "#3a86c8",
      highlightPart: "roots",
      indicator: "Aquifer Infiltration Active"
    }
  ];

  const cardsRight = [
    {
      id: 4,
      title: "Bring Biodiversity Back",
      desc: "Create habitats for birds, pollinators, and wildlife.",
      icon: <Twitter size={22} />, // Lucide Twitter icon as elegant bird silhouette
      themeColor: "#e07a5f",
      highlightPart: "biodiversity",
      indicator: "Habitat Expansion Active"
    },
    {
      id: 5,
      title: "Empower Rural Communities",
      desc: "Support local jobs, sustainable livelihoods, and ethical forest management.",
      icon: <Users size={22} />,
      themeColor: "#f4a261",
      highlightPart: "base",
      indicator: "Rural Sewak Employment Verified"
    }
  ];

  // Helper to draw connecting line/particles based on hovered card position
  const getParticleFlow = () => {
    if (!hoveredCard) return null;
    const isLeft = hoveredCard <= 3;
    return (
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: isLeft ? '15%' : '85%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: hoveredCard === 2 ? 'var(--accent-gold)' : 'var(--forest-green)',
          zIndex: 4,
          pointerEvents: 'none',
          boxShadow: '0 0 15px currentColor'
        }}
        animate={{
          x: isLeft ? [0, 150, 200] : [0, -150, -200],
          y: [0, -40, -80],
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  };

  return (
    <section id="impact" className="section-padding bg-gray" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Minimal Editorial Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3.2rem', fontWeight: '900', marginTop: '0.8rem', letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
            Why Om Wan Matters
          </h2>
          <p style={{ maxWidth: '650px', margin: '1.2rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.6' }}>
            We replace abstract charity with physical biological assets. Your tree grows in value while permanently healing the desert.
          </p>
        </div>

        {/* 3-Column Luxury Layout */}
        <div className="impact-grid-container" style={{ gap: '3.5rem' }}>
          
          {/* Left Column (Cards) */}
          <div className="impact-col-left">
            {cardsLeft.map((card) => (
              <motion.div
                key={card.id}
                className="glass-card-premium"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{
                  borderLeft: hoveredCard === card.id ? `4px solid ${card.themeColor}` : '1px solid rgba(63, 99, 65, 0.06)',
                  background: hoveredCard === card.id ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.45)'
                }}
              >
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    color: hoveredCard === card.id ? card.themeColor : 'var(--forest-green)',
                    background: hoveredCard === card.id ? 'rgba(255,255,255,0.9)' : 'rgba(35, 59, 37, 0.04)',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: hoveredCard === card.id ? '0 10px 20px rgba(0,0,0,0.02)' : 'none'
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-dark)' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.55' }}>
                      {card.desc}
                    </p>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ marginTop: '1rem', borderTop: '1px solid rgba(35, 59, 37, 0.05)', paddingTop: '0.8rem' }}
                    >
                      <span className="impact-tag" style={{ background: `${card.themeColor}12`, color: card.themeColor, margin: 0 }}>
                        {card.indicator} &rarr;
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Futuristic Bio-Digital Khejri Tree */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px' }}>
            
            {/* Ambient Background Aura */}
            <motion.div
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(194, 158, 90, 0.08) 0%, rgba(35, 59, 37, 0.03) 60%, rgba(255,255,255,0) 100%)',
                filter: 'blur(40px)',
                zIndex: 1
              }}
              animate={{
                scale: hoveredCard ? [1, 1.15, 1] : [1, 1.05, 1],
                opacity: hoveredCard ? [0.8, 1, 0.8] : 0.6
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Glowing Tracer Particle Lines linking active cards to center tree */}
            <AnimatePresence>
              {hoveredCard && (
                <motion.svg
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                >
                  {/* Left Tracers */}
                  {hoveredCard === 1 && <motion.path d="M 0,90 Q 70,90 85,90" stroke="#4d7a4f" strokeWidth="1.5" strokeDasharray="4 4" fill="none" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />}
                  {hoveredCard === 2 && <motion.path d="M 0,220 Q 70,220 90,160" stroke="#C29E5A" strokeWidth="1.5" strokeDasharray="4 4" fill="none" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />}
                  {hoveredCard === 3 && <motion.path d="M 0,350 Q 80,350 95,210" stroke="#3a86c8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />}

                  {/* Right Tracers */}
                  {hoveredCard === 4 && <motion.path d="M 320,150 Q 250,150 120,95" stroke="#e07a5f" strokeWidth="1.5" strokeDasharray="4 4" fill="none" animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />}
                  {hoveredCard === 5 && <motion.path d="M 320,300 Q 250,300 110,195" stroke="#f4a261" strokeWidth="1.5" strokeDasharray="4 4" fill="none" animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />}
                </motion.svg>
              )}
            </AnimatePresence>

            {/* Tree Container with subtle environmental swaying */}
            <motion.div
              style={{ width: '300px', height: '360px', position: 'relative', zIndex: 3 }}
              animate={{ rotate: [-0.6, 0.6, -0.6] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                
                {/* 1. Roots Network (Pulsates blue/aquatic when Card 3 is hovered) */}
                <motion.g
                  animate={{ 
                    stroke: hoveredCard === 3 ? "#3a86c8" : "rgba(35,59,37,0.35)",
                    strokeWidth: hoveredCard === 3 ? 3 : 1.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M100 190 C100 205, 80 215, 60 225" strokeLinecap="round" />
                  <path d="M100 190 C95 200, 110 215, 120 225" strokeLinecap="round" />
                  <path d="M103 190 C113 205, 128 208, 140 215" strokeLinecap="round" />
                  <path d="M97 190 C92 202, 70 208, 78 228" strokeLinecap="round" />
                </motion.g>

                {/* 2. Soil/Base (Glows orange when Card 5 is hovered) */}
                <motion.path
                  d="M40 190 C70 187, 130 187, 160 190 L150 194 L50 194 Z"
                  fill={hoveredCard === 5 ? "#f4a261" : "rgba(35,59,37,0.2)"}
                  animate={{ 
                    scale: hoveredCard === 5 ? 1.03 : 1,
                    opacity: hoveredCard === 5 ? 1 : 0.6 
                  }}
                  style={{ transformOrigin: '100px 190px' }}
                  transition={{ duration: 0.4 }}
                />

                {/* 3. Trunk & Branch Skeletal Structure (Traces gold when Card 2 is hovered) */}
                <motion.path
                  d="M95 190 V140 C95 125, 75 115, 65 95 M105 190 V150 C105 135, 125 125, 135 105 M100 140 V90"
                  stroke={hoveredCard === 2 ? "var(--accent-gold)" : "var(--forest-green)"}
                  strokeWidth={hoveredCard === 2 ? "3.5" : "2"}
                  strokeLinecap="round"
                  animate={{ 
                    stroke: hoveredCard === 2 ? "var(--accent-gold)" : "rgba(35,59,37,0.6)"
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* 4. Foliage Cloud Vectors (Shifts colors and scales when Card 1 is hovered) */}
                <motion.g
                  animate={{ 
                    fill: hoveredCard === 1 ? "var(--forest-green)" : "rgba(35, 59, 37, 0.45)",
                    scale: hoveredCard === 1 ? 1.05 : 1
                  }}
                  style={{ transformOrigin: '100px 100px', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <circle cx="70" cy="85" r="25" />
                  <circle cx="130" cy="95" r="24" />
                  <circle cx="100" cy="60" r="32" />
                  <circle cx="95" cy="110" r="20" />
                </motion.g>

                {/* 5. Wildlife/Birds Elements (Glows when Card 4 is hovered) */}
                <motion.g
                  animate={{ 
                    stroke: hoveredCard === 4 ? "#e07a5f" : "rgba(35,59,37,0.25)",
                    opacity: hoveredCard === 4 ? 1 : 0.3
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M50 55 Q55 50, 60 55 Q65 50, 70 55" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M145 65 Q150 60, 155 65 Q160 60, 165 65" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M100 30 Q105 25, 110 30 Q115 25, 120 30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </motion.g>

                {/* 6. Glowing Tech Verification Nodes (Pulsing connection points) */}
                <motion.g>
                  <circle cx="70" cy="85" r="3" fill="var(--accent-gold)" />
                  <circle cx="130" cy="95" r="3" fill="var(--accent-gold)" />
                  <circle cx="100" cy="60" r="4" fill="var(--accent-gold)" />
                  <circle cx="95" cy="190" r="3" fill="var(--accent-gold)" />
                </motion.g>
              </svg>
            </motion.div>
          </div>

          {/* Right Column (Cards - Centered vertically using style flex) */}
          <div className="impact-col-right" style={{ justifyContent: 'center', height: '100%', gap: '3rem' }}>
            {/* Card 4 */}
            <motion.div
              className="glass-card-premium"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -4, scale: 1.01 }}
              style={{
                borderLeft: hoveredCard === 4 ? `4px solid ${cardsRight[0].themeColor}` : '1px solid rgba(63, 99, 65, 0.06)',
                background: hoveredCard === 4 ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.45)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  color: hoveredCard === 4 ? cardsRight[0].themeColor : 'var(--forest-green)',
                  background: hoveredCard === 4 ? 'rgba(255,255,255,0.9)' : 'rgba(35, 59, 37, 0.04)',
                  padding: '12px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  {cardsRight[0].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-dark)' }}>
                    {cardsRight[0].title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.55' }}>
                    {cardsRight[0].desc}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {hoveredCard === 4 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ marginTop: '1rem', borderTop: '1px solid rgba(35, 59, 37, 0.05)', paddingTop: '0.8rem' }}
                  >
                    <span className="impact-tag" style={{ background: `${cardsRight[0].themeColor}12`, color: cardsRight[0].themeColor, margin: 0 }}>
                      {cardsRight[0].indicator} &rarr;
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="glass-card-premium"
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -4, scale: 1.01 }}
              style={{
                borderLeft: hoveredCard === 5 ? `4px solid ${cardsRight[1].themeColor}` : '1px solid rgba(63, 99, 65, 0.06)',
                background: hoveredCard === 5 ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.45)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  color: hoveredCard === 5 ? cardsRight[1].themeColor : 'var(--forest-green)',
                  background: hoveredCard === 5 ? 'rgba(255,255,255,0.9)' : 'rgba(35, 59, 37, 0.04)',
                  padding: '12px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  {cardsRight[1].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-dark)' }}>
                    {cardsRight[1].title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.55' }}>
                    {cardsRight[1].desc}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {hoveredCard === 5 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ marginTop: '1rem', borderTop: '1px solid rgba(35, 59, 37, 0.05)', paddingTop: '0.8rem' }}
                  >
                    <span className="impact-tag" style={{ background: `${cardsRight[1].themeColor}12`, color: cardsRight[1].themeColor, margin: 0 }}>
                      {cardsRight[1].indicator} &rarr;
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, TrendingUp, Droplet, Twitter, Users, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Impact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsLeft = [
    {
      id: 1,
      title: "Regenerate Nature",
      desc: "Restore degraded land with native forests built to thrive for generations.",
      icon: <Sprout size={24} />,
      themeColor: "#4d7a4f",
      highlightPart: "foliage",
      indicator: "Forest growth active"
    },
    {
      id: 2,
      title: "A Living Asset",
      desc: "Own a growing tree with long-term value—not just a one-time donation.",
      icon: <TrendingUp size={24} />,
      themeColor: "#C29E5A",
      highlightPart: "trunk",
      indicator: "Asset value scaling"
    },
    {
      id: 3,
      title: "Restore Water",
      desc: "Native forests improve soil health and naturally support groundwater recharge.",
      icon: <Droplet size={24} />,
      themeColor: "#3a86c8",
      highlightPart: "roots",
      indicator: "Aquifer recharge active"
    }
  ];

  const cardsRight = [
    {
      id: 4,
      title: "Bring Biodiversity Back",
      desc: "Create habitats for birds, pollinators, and wildlife.",
      icon: <Twitter size={24} />, // Lucide Twitter serves as clean bird outline indicator
      themeColor: "#e07a5f",
      highlightPart: "biodiversity",
      indicator: "Habitat restore active"
    },
    {
      id: 5,
      title: "Empower Rural Communities",
      desc: "Support local jobs, sustainable livelihoods, and ethical forest management.",
      icon: <Users size={24} />,
      themeColor: "#f4a261",
      highlightPart: "base",
      indicator: "Sewak employment verified"
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
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', fontSize: '0.85rem' }}>
            🌍 Ecosystem Solution
          </span>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', marginTop: '0.8rem' }}>Why Om Wan Matters</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            We bridge the gap between financial prosperity and environmental regeneration.
          </p>
        </div>

        {/* 3-Column Layout: Left Cards | Center Tree | Right Cards */}
        <div className="impact-grid-container">
          
          {/* Left Column */}
          <div className="impact-col-left">
            {cardsLeft.map((card) => (
              <motion.div
                key={card.id}
                className="glass-card-premium"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                style={{
                  borderLeft: hoveredCard === card.id ? `4px solid ${card.themeColor}` : '1px solid rgba(63, 99, 65, 0.08)'
                }}
              >
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ 
                    color: hoveredCard === card.id ? card.themeColor : 'var(--forest-green)',
                    background: hoveredCard === card.id ? 'rgba(255,255,255,0.8)' : 'rgba(35, 59, 37, 0.04)',
                    padding: '10px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Minimal Popup detail */}
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

          {/* Center Column: Animated SVG Khejri Tree */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '450px' }}>
            {getParticleFlow()}

            {/* Tree Container with Gentle Swaying */}
            <motion.div
              style={{ width: '320px', height: '380px', position: 'relative', zIndex: 3 }}
              animate={{ rotate: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Sunrays/Atmosphere (Highlight when card 6 is hovered - summary card) */}
                <motion.g
                  animate={{ opacity: hoveredCard === 6 ? 0.3 : 0.08 }}
                  transition={{ duration: 0.5 }}
                >
                  <circle cx="100" cy="90" r="80" fill="url(#sunGlow)" />
                </motion.g>

                {/* Roots (Highlight when card 3 is hovered) */}
                <motion.g
                  animate={{ 
                    stroke: hoveredCard === 3 ? "#3a86c8" : "#8d7b68",
                    strokeWidth: hoveredCard === 3 ? 3.5 : 2.5,
                    scale: hoveredCard === 3 ? 1.05 : 1
                  }}
                  style={{ transformOrigin: '100px 200px', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <path d="M100 200 C100 215, 80 220, 60 230" strokeLinecap="round" />
                  <path d="M100 200 C95 210, 110 225, 120 235" strokeLinecap="round" />
                  <path d="M105 200 C115 215, 130 218, 145 225" strokeLinecap="round" />
                  <path d="M95 200 C90 212, 70 218, 80 238" strokeLinecap="round" />
                </motion.g>

                {/* Base/Ground (Highlight when card 5 is hovered) */}
                <motion.path
                  d="M30 200 C70 196, 130 196, 170 200 C175 205, 25 205, 30 200 Z"
                  fill={hoveredCard === 5 ? "#e29e5f" : "#233B25"}
                  animate={{ opacity: hoveredCard === 5 ? 0.95 : 0.8 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Trunk (Highlight when card 2 is hovered) */}
                <motion.path
                  d="M93 200 L95 140 C95 130, 80 120, 70 100 L73 98 C85 118, 100 122, 102 135 L107 200 Z"
                  fill={hoveredCard === 2 ? "var(--accent-gold)" : "#5C4033"}
                  animate={{ scale: hoveredCard === 2 ? 1.03 : 1 }}
                  style={{ transformOrigin: '100px 200px' }}
                  transition={{ duration: 0.5 }}
                />
                <motion.path
                  d="M104 200 L102 150 C102 135, 120 125, 130 105 L133 107 C122 127, 106 138, 108 200 Z"
                  fill={hoveredCard === 2 ? "var(--accent-gold)" : "#4A3229"}
                  animate={{ scale: hoveredCard === 2 ? 1.03 : 1 }}
                  style={{ transformOrigin: '100px 200px' }}
                  transition={{ duration: 0.5 }}
                />

                {/* Foliage / Leaves (Highlight when card 1 is hovered) */}
                <motion.g
                  animate={{ 
                    fill: hoveredCard === 1 ? "var(--forest-green)" : "#4d7a4f",
                    scale: hoveredCard === 1 ? 1.06 : 1
                  }}
                  style={{ transformOrigin: '100px 100px', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <circle cx="70" cy="90" r="30" opacity="0.8" />
                  <circle cx="130" cy="100" r="28" opacity="0.85" />
                  <circle cx="100" cy="65" r="38" opacity="0.9" />
                  <circle cx="95" cy="115" r="22" opacity="0.75" />
                </motion.g>

                {/* Biodiversity / Wildlife (Highlight when card 4 is hovered) */}
                <motion.g
                  animate={{ opacity: hoveredCard === 4 ? 1 : 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Floating bird silhouettes */}
                  <path d="M50 60 Q55 55, 60 60 Q65 55, 70 60" stroke="#FAF8F5" strokeWidth="1.5" fill="none" />
                  <path d="M140 70 Q145 65, 150 70 Q155 65, 160 70" stroke="#FAF8F5" strokeWidth="1.5" fill="none" />
                  <path d="M100 35 Q105 30, 110 35 Q115 30, 120 35" stroke="#FAF8F5" strokeWidth="1.5" fill="none" />
                </motion.g>

                <defs>
                  <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#C29E5A" />
                    <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Ambient indicator */}
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', position: 'absolute', bottom: '15px' }}>
              Interactive Khejri Tree
            </span>
          </div>

          {/* Right Column */}
          <div className="impact-col-right">
            {/* Card 4 */}
            <motion.div
              className="glass-card-premium"
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -4 }}
              style={{
                borderLeft: hoveredCard === 4 ? `4px solid ${cardsRight[0].themeColor}` : '1px solid rgba(63, 99, 65, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  color: hoveredCard === 4 ? cardsRight[0].themeColor : 'var(--forest-green)',
                  background: hoveredCard === 4 ? 'rgba(255,255,255,0.8)' : 'rgba(35, 59, 37, 0.04)',
                  padding: '10px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  {cardsRight[0].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    {cardsRight[0].title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
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
              whileHover={{ y: -4 }}
              style={{
                borderLeft: hoveredCard === 5 ? `4px solid ${cardsRight[1].themeColor}` : '1px solid rgba(63, 99, 65, 0.08)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  color: hoveredCard === 5 ? cardsRight[1].themeColor : 'var(--forest-green)',
                  background: hoveredCard === 5 ? 'rgba(255,255,255,0.8)' : 'rgba(35, 59, 37, 0.04)',
                  padding: '10px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  {cardsRight[1].icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    {cardsRight[1].title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
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

            {/* Card 6: Dynamic Summary Card */}
            <motion.div
              className="glass-card-premium"
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -4 }}
              style={{
                borderLeft: hoveredCard === 6 ? '4px solid var(--accent-gold)' : '1px solid rgba(63, 99, 65, 0.08)',
                background: hoveredCard === 6 ? 'rgba(194, 158, 90, 0.08)' : 'rgba(255, 255, 255, 0.45)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  color: hoveredCard === 6 ? 'var(--accent-gold)' : 'var(--forest-green)',
                  background: hoveredCard === 6 ? 'rgba(255,255,255,0.8)' : 'rgba(35, 59, 37, 0.04)',
                  padding: '10px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                    One Tree. Six Impacts.
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                    A single planting creates a legacy asset scaling environmental value forever.
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {hoveredCard === 6 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{ marginTop: '1rem', borderTop: '1px solid rgba(35, 59, 37, 0.05)', paddingTop: '0.8rem' }}
                  >
                    <span className="impact-tag" style={{ background: 'rgba(194, 158, 90, 0.1)', color: 'var(--accent-gold)', margin: 0 }}>
                      System locked verification
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* Footer Flow Indicator */}
        <div style={{ 
          marginTop: '6rem', 
          textAlign: 'center', 
          borderTop: '1px solid var(--border-light)', 
          paddingTop: '3.5rem' 
        }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', marginBottom: '1.5rem' }}>
            🌳 One Tree. Six Lasting Impacts.
          </h4>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '12px', 
            flexWrap: 'wrap',
            color: 'var(--forest-green)',
            fontWeight: '700',
            fontSize: '0.98rem'
          }}>
            <span>🌍 Climate Action</span>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            <span>💧 Water Security</span>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            <span>🌳 Native Forests</span>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            <span>🦜 Biodiversity</span>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            <span>👨‍🌾 Community Impact</span>
            <ArrowRight size={14} style={{ opacity: 0.5 }} />
            <span style={{ color: 'var(--accent-gold)' }}>📈 Long-Term Value</span>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Disable hover-tilt coordinates tracking on touch devices
    if (window.innerWidth <= 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  const cardsLeft = [
    {
      id: 1,
      title: "Regenerate",
      desc: "Native forests built to thrive for generations.",
      themeColor: "#4d7a4f"
    },
    {
      id: 2,
      title: "Living Value",
      desc: "An organic growing asset with long-term yield.",
      themeColor: "#C29E5A"
    },
    {
      id: 3,
      title: "Restore Water",
      desc: "Recharging desert aquifers naturally.",
      themeColor: "#3a86c8"
    }
  ];

  const cardsRight = [
    {
      id: 4,
      title: "Biodiversity",
      desc: "Creating homes for native wildlife and pollinators.",
      themeColor: "#e07a5f"
    },
    {
      id: 5,
      title: "Empowerment",
      desc: "Fair green employment for rural families.",
      themeColor: "#f4a261"
    }
  ];

  const windParticles = Array.from({ length: 15 });

  return (
    <section 
      id="impact" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: '#0a0d0a', 
        color: '#FFFFFF',
        padding: '120px 5% 100px',
        perspective: '1000px'
      }}
    >
      {/* 1. Background glow centering */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, rgba(35, 59, 37, 0.15) 0%, rgba(194, 158, 90, 0.04) 40%, rgba(10, 13, 10, 0) 70%)`,
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.1s ease'
        }}
      />

      {/* 2. Floating Wind Particles */}
      {windParticles.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            background: Math.random() > 0.5 ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 2,
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%'
          }}
          animate={{
            x: [0, Math.random() * 150 + 50],
            y: [0, -Math.random() * 100 - 50],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Why Om Wan Matters
          </h2>
          <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
        </div>

        {/* Asymmetrical Parallax Composition */}
        <div 
          className="impact-grid-container" 
          style={{ 
            alignItems: 'stretch',
            transform: `rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          
          {/* Left Column (Parallax Floating Cards) */}
          <div className="impact-col-left" style={{ justifyContent: 'center' }}>
            {cardsLeft.map((card, idx) => (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === card.id ? null : card.id)}
                className="glass-card-premium"
                style={{
                  background: hoveredCard === card.id ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                  border: hoveredCard === card.id ? `1px solid ${card.themeColor}` : '1px solid rgba(255, 255, 255, 0.06)',
                  transform: `translateZ(${idx * 15}px)`,
                  boxShadow: hoveredCard === card.id ? `0 15px 35px ${card.themeColor}12` : 'none'
                }}
              >
                <h3 style={{ fontWeight: '900', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.55)', margin: 0, lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Futuristic Bio-Digital Tree Artwork */}
          <div className="tree-column" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              className="tree-center-container"
              style={{ 
                transform: `translateZ(40px)`
              }}
              animate={{ rotate: [-0.5, 0.5, -0.5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                
                {/* Aquifer Roots */}
                <motion.g
                  animate={{ 
                    stroke: hoveredCard === 3 ? "#3a86c8" : "rgba(255,255,255,0.15)",
                    strokeWidth: hoveredCard === 3 ? 3 : 1.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M100 185 C100 200, 80 210, 60 220" strokeLinecap="round" />
                  <path d="M100 185 C95 195, 110 210, 120 220" strokeLinecap="round" />
                  <path d="M102 185 C112 200, 128 203, 140 210" strokeLinecap="round" />
                  <path d="M97 185 C92 197, 70 203, 78 223" strokeLinecap="round" />
                </motion.g>

                {/* Base Earth Soil */}
                <motion.path
                  d="M45 185 C75 182, 125 182, 155 185 L145 189 L55 189 Z"
                  fill={hoveredCard === 5 ? "#f4a261" : "rgba(255,255,255,0.1)"}
                  animate={{ 
                    scale: hoveredCard === 5 ? 1.02 : 1,
                    opacity: hoveredCard === 5 ? 0.9 : 0.4 
                  }}
                  style={{ transformOrigin: '100px 185px' }}
                  transition={{ duration: 0.4 }}
                />

                {/* Gold Trunk */}
                <motion.path
                  d="M96 185 V135 C96 120, 78 110, 68 90 M104 185 V145 C104 130, 122 120, 132 100 M100 135 V85"
                  stroke={hoveredCard === 2 ? "var(--accent-gold)" : "rgba(255,255,255,0.25)"}
                  strokeWidth={hoveredCard === 2 ? "3" : "1.8"}
                  strokeLinecap="round"
                  transition={{ duration: 0.4 }}
                />

                {/* Ethereal Foliage Clouds */}
                <motion.g
                  animate={{ 
                    fill: hoveredCard === 1 ? "var(--forest-green)" : "rgba(77, 122, 79, 0.25)",
                    scale: hoveredCard === 1 ? 1.04 : 1
                  }}
                  style={{ transformOrigin: '100px 90px', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <circle cx="72" cy="80" r="24" />
                  <circle cx="128" cy="90" r="22" />
                  <circle cx="100" cy="55" r="30" />
                  <circle cx="96" cy="105" r="18" />
                </motion.g>

                {/* Abstract Birds */}
                <motion.g
                  animate={{ 
                    stroke: hoveredCard === 4 ? "#e07a5f" : "rgba(255,255,255,0.1)",
                    opacity: hoveredCard === 4 ? 0.9 : 0.2
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M52 50 Q57 45, 62 50 Q67 45, 72 50" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M142 60 Q147 55, 152 60 Q157 55, 162 60" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M100 25 Q105 20, 110 25 Q115 20, 120 25" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </motion.g>

                {/* Glowing Core Nodes */}
                <circle cx="72" cy="80" r="2.5" fill="var(--accent-gold)" />
                <circle cx="128" cy="90" r="2.5" fill="var(--accent-gold)" />
                <circle cx="100" cy="55" r="3" fill="var(--accent-gold)" />
                <circle cx="96" cy="185" r="2.5" fill="var(--accent-gold)" />
              </svg>
            </motion.div>
          </div>

          {/* Right Column (Centered vertically for layout balance) */}
          <div className="impact-col-right" style={{ justifyContent: 'center', gap: '3rem' }}>
            {cardsRight.map((card, idx) => (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setHoveredCard(hoveredCard === card.id ? null : card.id)}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card-premium"
                style={{
                  background: hoveredCard === card.id ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                  border: hoveredCard === card.id ? `1px solid ${card.themeColor}` : '1px solid rgba(255, 255, 255, 0.06)',
                  transform: `translateZ(${(idx + 1) * 20}px)`,
                  boxShadow: hoveredCard === card.id ? `0 15px 35px ${card.themeColor}12` : 'none'
                }}
              >
                <h3 style={{ fontWeight: '900', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.55)', margin: 0, lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

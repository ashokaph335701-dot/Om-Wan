import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FutureVision() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10;
      const y = (clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const initiatives = [
    {
      id: 0,
      title: "Eco Luxury Retreats",
      desc: "Stay in sustainable eco-luxury huts surrounded by restored native forests.",
      emoji: "🌿",
      pos: { left: '8%', top: '15%' },
      anchor: { x: '88%', y: '115%' } // relative branch connection points to center
    },
    {
      id: 1,
      title: "Climate Workshops",
      desc: "Expert-led workshops and seminars on climate conservation and native forestry.",
      emoji: "🌱",
      pos: { left: '5%', top: '55%' },
      anchor: { x: '88%', y: '35%' }
    },
    {
      id: 2,
      title: "Cultural Experiences",
      desc: "Celebrate Rajasthan's rich heritage through classical music festivals.",
      emoji: "🎶",
      pos: { right: '8%', top: '10%' },
      anchor: { x: '12%', y: '120%' }
    },
    {
      id: 3,
      title: "Agroforestry Learning",
      desc: "Hands-on training and programs in regenerative desert agriculture.",
      emoji: "🌾",
      pos: { right: '5%', top: '48%' },
      anchor: { x: '12%', y: '45%' }
    },
    {
      id: 4,
      title: "Eco Events & Festivals",
      desc: "Host eco festivals and corporate retreats in the heart of restored nature.",
      emoji: "🌍",
      pos: { right: '8%', top: '80%' },
      anchor: { x: '12%', y: '-25%' }
    }
  ];

  return (
    <section 
      id="vision" 
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
        background: 'radial-gradient(circle at 50% 50%, rgba(35, 59, 37, 0.1) 0%, rgba(10, 13, 10, 0) 80%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ maxWidth: '1350px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Future of Om Wan
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.8rem', maxWidth: '600px', margin: '0.8rem auto 0', lineHeight: '1.5' }}>
            A vision where nature, learning, culture, and community grow together.
          </p>
          <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
        </div>

        {isMobile ? (
          /* Mobile Stacked vision */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            
            {/* Centerpiece Image of the Eco Luxury Hut */}
            <motion.div 
              style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/eco_luxury_hut.jpg" 
                alt="Eco Luxury Hut Centerpiece" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </motion.div>

            {/* Experience list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
              {initiatives.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '24px',
                    padding: '1.4rem 1.6rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start'
                  }}
                >
                  <span style={{ fontSize: '1.8rem', lineHeight: '1' }}>{item.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ) : (
          /* Desktop Interactive Landscape canvas */
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '650px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            
            {/* Organic Branches SVG pathways */}
            <svg 
              viewBox="0 0 1200 650" 
              style={{ 
                position: 'absolute', 
                top: 0, left: 0, 
                width: '100%', height: '100%', 
                pointerEvents: 'none', 
                zIndex: 2 
              }}
            >
              <defs>
                <filter id="goldGlowVision" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {initiatives.map((item, i) => {
                const isHovered = hoveredIdx === item.id;
                // Parse coordinates for drawing connector branches
                const isLeft = item.pos.left !== undefined;
                const startX = isLeft ? parseFloat(item.pos.left) * 12 : 1200 - parseFloat(item.pos.right) * 12;
                const startY = parseFloat(item.pos.top) * 6.5;

                // Center coordinates (600, 325)
                const centerAnchorX = 600 + (isLeft ? -180 : 180);
                const centerAnchorY = 325;

                return (
                  <motion.path
                    key={i}
                    d={`M ${startX + (isLeft ? 230 : -10)},${startY + 40} C ${startX + (isLeft ? 300 : -80)},${startY + 40} ${centerAnchorX + (isLeft ? -50 : 50)},${centerAnchorY} ${centerAnchorX},${centerAnchorY}`}
                    stroke={isHovered ? "var(--accent-gold)" : "rgba(77, 122, 79, 0.15)"}
                    strokeWidth={isHovered ? 3.5 : 1}
                    fill="none"
                    filter={isHovered ? "url(#goldGlowVision)" : "none"}
                    style={{ transition: 'stroke 0.4s, stroke-width 0.4s' }}
                  />
                );
              })}
            </svg>

            {/* Central Eco Luxury Hut Centerpiece Container */}
            <div style={{
              position: 'absolute',
              width: '420px',
              height: '320px',
              zIndex: 4,
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: hoveredIdx !== null ? '0 25px 60px rgba(194, 158, 90, 0.12)' : '0 20px 50px rgba(0, 0, 0, 0.4)',
              transform: `scale(1) translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s'
            }}>
              <img 
                src="/eco_luxury_hut.jpg" 
                alt="Future eco luxury hut centerpiece" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transform: hoveredIdx !== null ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.8s ease'
                }} 
              />
              
              {/* Soft overlay vignette inside image container */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(180deg, rgba(10, 13, 10, 0) 60%, rgba(10, 13, 10, 0.5) 100%)',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Floating Experience Panels */}
            {initiatives.map((item, i) => {
              const isHovered = hoveredIdx === item.id;
              const isLeft = item.pos.left !== undefined;

              const style = {
                position: 'absolute',
                zIndex: 5,
                width: '260px',
                background: isHovered ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(20px)',
                border: isHovered ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '24px',
                padding: '1.2rem 1.4rem',
                cursor: 'pointer',
                boxShadow: isHovered ? '0 15px 35px rgba(194, 158, 90, 0.05)' : 'none',
                boxSizing: 'border-box',
                transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                ...item.pos
              };

              return (
                <div
                  key={i}
                  style={style}
                  onMouseEnter={() => setHoveredIdx(item.id)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>{item.emoji}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '800', color: isHovered ? 'var(--accent-gold)' : '#FFFFFF', margin: 0, transition: 'color 0.3s' }}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.55)', margin: 0, lineHeight: '1.45' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
}

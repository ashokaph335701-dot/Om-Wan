import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FutureVision() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
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
      const x = (clientX / window.innerWidth - 0.5) * 8;
      const y = (clientY / window.innerHeight - 0.5) * 8;
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
      img: "/eco_luxury_hut.jpg"
    },
    {
      id: 1,
      title: "Climate Workshops",
      desc: "Expert-led workshops and seminars on climate conservation and native forestry.",
      img: "/climate_workshops.jpg"
    },
    {
      id: 2,
      title: "Cultural Experiences",
      desc: "Celebrate Rajasthan's rich heritage through classical music festivals in nature.",
      img: "/cultural_experiences.jpg"
    },
    {
      id: 3,
      title: "Agroforestry Learning",
      desc: "Hands-on training and educational programs in regenerative desert agriculture.",
      img: "/agroforestry_learning.jpg"
    },
    {
      id: 4,
      title: "Eco Events & Festivals",
      desc: "Host eco festivals and corporate retreats in the heart of restored nature.",
      img: "/eco_events.jpg"
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
        background: 'radial-gradient(circle at 50% 50%, rgba(35, 59, 37, 0.08) 0%, rgba(10, 13, 10, 0) 80%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ maxWidth: '1350px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: isMobile ? '2.5rem' : '3.6rem', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Future of Om Wan
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.8rem', maxWidth: '600px', margin: '0.8rem auto 0', lineHeight: '1.5' }}>
            A vision where nature, learning, culture, and community grow together.
          </p>
          <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
        </div>

        {isMobile ? (
          /* Mobile Stacked vision cards with direct image rendering */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '28px',
                  overflow: 'hidden'
                }}
              >
                {/* Image top */}
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                {/* Description content */}
                <div style={{ padding: '1.6rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop Structured Split Portfolio layout */
          <div style={{ 
            display: 'flex', 
            gap: '4rem', 
            alignItems: 'center',
            position: 'relative'
          }}>
            
            {/* Left Side: Aligned selector list of Initiatives */}
            <div style={{ 
              flex: 1.1, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem' 
            }}>
              {initiatives.map((item, i) => {
                const active = activeIdx === item.id;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveIdx(item.id)}
                    style={{
                      background: active ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(15px)',
                      border: active ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '20px',
                      padding: '1.1rem 1.3rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      boxSizing: 'border-box',
                      boxShadow: active ? '0 10px 25px rgba(194, 158, 90, 0.05)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Small preview thumbnail photo */}
                    <div style={{
                      width: '75px',
                      height: '52px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: active ? '1.5px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'border-color 0.3s'
                    }}>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 style={{ 
                        fontSize: '1.02rem', 
                        fontWeight: '800', 
                        color: active ? 'var(--accent-gold)' : '#FFFFFF', 
                        margin: '0 0 0.3rem 0',
                        transition: 'color 0.3s'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: active ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.45)', margin: 0, lineHeight: '1.4', transition: 'color 0.3s' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Showcase center image display frame */}
            <div style={{ 
              flex: 1.3, 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '420px',
                borderRadius: '32px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={initiatives[activeIdx].img}
                    alt={initiatives[activeIdx].title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }} 
                  />
                </AnimatePresence>
                
                {/* Soft natural dark ambient gradient overlay on image */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(180deg, rgba(10, 13, 10, 0) 60%, rgba(10, 13, 10, 0.45) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

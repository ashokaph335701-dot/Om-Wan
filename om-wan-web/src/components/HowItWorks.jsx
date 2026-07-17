import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const steps = [
    {
      id: 0,
      title: "Invest",
      desc: "Choose your native tree or plan.",
      color: "#C29E5A"
    },
    {
      id: 1,
      title: "Own",
      desc: "Receive your Tree ID & Certificate.",
      color: "#4a7c59"
    },
    {
      id: 2,
      title: "Plant",
      desc: "Planted in our protected forest.",
      color: "#688f4e"
    },
    {
      id: 3,
      title: "Care",
      desc: "Lifetime monitor and protection.",
      color: "#3a86c8"
    },
    {
      id: 4,
      title: "Track",
      desc: "Follow growth via live updates.",
      color: "#f4a261"
    },
    {
      id: 5,
      title: "Harvest",
      desc: "By-products collected responsibly.",
      color: "#e07a5f"
    },
    {
      id: 6,
      title: "Earn",
      desc: "Earn returns while restoring nature.",
      color: "#C29E5A"
    }
  ];

  const renderIllustration = (id, isHovered) => {
    switch (id) {
      case 0: // INVEST
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <path d="M30,85 C40,75 50,70 60,75 C70,70 80,75 90,85" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" fill="none" />
            <path d="M40,90 Q60,75 80,90" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
            <path d="M60,75 V45" stroke="#688f4e" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M60,55 Q45,50 50,40 Q60,45 60,55" fill="var(--forest-green)" opacity={0.85} />
            <path d="M60,50 Q75,45 70,35 Q60,40 60,50" fill="var(--forest-green)" opacity={0.85} />
            <motion.circle cx="60" cy="30" r="2.5" fill="var(--accent-gold)" animate={{ y: [0, 45], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeIn' }} />
            <motion.circle cx="50" cy="35" r="2" fill="var(--accent-gold)" animate={{ y: [0, 40], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeIn', delay: 0.5 }} />
            <motion.circle cx="70" cy="33" r="2" fill="var(--accent-gold)" animate={{ y: [0, 42], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn', delay: 0.8 }} />
            <path d="M60,75 Q50,90 45,100 M60,75 Q70,90 75,102 M60,82 Q60,95 62,105" stroke={isHovered ? "var(--accent-gold)" : "rgba(255,255,255,0.25)"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 1: // OWN
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <rect x="35" y="25" width="50" height="70" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" fill="rgba(255,255,255,0.02)" />
            <line x1="45" y1="40" x2="75" y2="40" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <line x1="45" y1="50" x2="65" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <line x1="45" y1="60" x2="70" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <circle cx="68" cy="78" r="7" fill={isHovered ? "var(--accent-gold)" : "rgba(194, 158, 90, 0.4)"} style={{ transition: 'fill 0.3s' }} />
            <polygon points="65,83 68,92 71,83" fill={isHovered ? "var(--accent-gold)" : "rgba(194, 158, 90, 0.4)"} style={{ transition: 'fill 0.3s' }} />
            <motion.g animate={{ y: isHovered ? [0, -4, 0] : 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
              <path d="M60,10 Q66,10 66,16 C66,22 60,28 60,28 C60,28 54,22 54,16 Q54,10 60,10 Z" fill="#e07a5f" />
              <circle cx="60" cy="16" r="2.5" fill="#FFFFFF" />
            </motion.g>
          </svg>
        );
      case 2: // PLANT
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <path d="M20,95 C40,90 80,90 100,95 L95,105 L25,105 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M42,92 L55,75 M55,75 L48,68 L35,85 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            <path d="M72,92 V55" stroke="#4d7a4f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M72,70 Q60,65 65,58 Q72,62 72,70" fill="#4d7a4f" />
            <path d="M72,62 Q84,57 80,50 Q72,54 72,62" fill="#4d7a4f" />
            <motion.path 
              d="M35,40 Q40,35 45,40 Q50,35 55,40" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="1.2" 
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        );
      case 3: // CARE
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <path d="M60,95 V65" stroke="#C29E5A" strokeWidth="3" />
            <path d="M60,70 Q45,60 40,50 M60,75 Q75,65 80,55" stroke="#C29E5A" strokeWidth="2" fill="none" />
            <circle cx="60" cy="45" r="16" fill="rgba(77, 122, 79, 0.3)" />
            <circle cx="48" cy="50" r="12" fill="rgba(77, 122, 79, 0.25)" />
            <circle cx="72" cy="52" r="12" fill="rgba(77, 122, 79, 0.25)" />
            <motion.circle cx="95" cy="25" r="6" fill="#C29E5A" opacity={0.6} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
            <path d="M25,25 Q35,20 40,25 Q45,20 50,25 C50,25 25,25 25,25" fill="rgba(255,255,255,0.2)" />
            <motion.line x1="30" y1="30" x2="27" y2="38" stroke="#3a86c8" strokeWidth="1.5" animate={{ y: [0, 8], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity }} />
            <motion.line x1="42" y1="30" x2="39" y2="38" stroke="#3a86c8" strokeWidth="1.5" animate={{ y: [0, 8], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} />
          </svg>
        );
      case 4: // TRACK
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <rect x="42" y="20" width="36" height="80" rx="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            <path d="M46,80 L52,70 L58,74 L66,55 L74,45" stroke="#f4a261" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="66" cy="55" r="3" fill="#FFFFFF" />
            <motion.circle 
              cx="60" cy="60" r="28" 
              stroke="rgba(255,255,255,0.15)" 
              strokeWidth="1" 
              strokeDasharray="4 4" 
              fill="none" 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        );
      case 5: // HARVEST
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <path d="M60,95 V55" stroke="#C29E5A" strokeWidth="3.5" />
            <path d="M60,65 Q45,55 35,45 M60,65 Q75,55 85,45" stroke="#C29E5A" strokeWidth="2.2" fill="none" />
            <path d="M60,25 C40,25 30,45 35,60 C45,60 50,50 60,50 C70,50 75,60 85,60 C90,45 80,25 60,25 Z" fill="rgba(77, 122, 79, 0.4)" />
            <circle cx="45" cy="48" r="2.5" fill="#f4a261" />
            <circle cx="75" cy="48" r="2.5" fill="#f4a261" />
            <circle cx="60" cy="38" r="2.5" fill="#f4a261" />
            <path d="M48,92 H72 L76,105 H44 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <motion.circle 
              cx="60" cy="42" r="2" 
              fill="#f4a261" 
              animate={{ y: [0, 52], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeIn" }}
            />
          </svg>
        );
      case 6: // EARN
        return (
          <svg viewBox="0 0 120 120" style={{ width: '70px', height: '70px' }}>
            <path d="M25,95 L95,95" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M30,85 Q60,75 90,35" stroke="var(--accent-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M82,35 H92 V45" stroke="var(--accent-gold)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="90" cy="35" r="14" fill="rgba(194, 158, 90, 0.08)" filter="blur(4px)" />
            <motion.path 
              d="M50,60 Q55,50 60,60" 
              stroke="var(--accent-gold)" 
              strokeWidth="1.5" 
              fill="none"
              animate={{ y: [0, -10], opacity: [0, 0.8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path 
              d="M70,50 Q75,40 80,50" 
              stroke="var(--accent-gold)" 
              strokeWidth="1.5" 
              fill="none"
              animate={{ y: [0, -8], opacity: [0, 0.8, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="how-it-works" 
      style={{ 
        background: '#0a0d0a', 
        color: '#FFFFFF', 
        padding: '120px 5% 100px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Background radial gradient glow */}
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
            How It Works
          </h2>
          <div style={{ width: '40px', height: '1.5px', background: 'var(--accent-gold)', margin: '1.5rem auto 0', opacity: 0.6 }} />
        </div>

        {isMobile ? (
          /* Mobile Winding Journey (Vertical layout) */
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center', padding: '0 10px' }}>
            
            {/* Vertical organic path connector */}
            <svg style={{ position: 'absolute', top: '60px', bottom: '60px', left: '50%', width: '40px', height: 'calc(100% - 120px)', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 1 }}>
              <motion.path
                d="M 20,0 Q 5,150 20,300 T 20,600 T 20,900 T 20,1200"
                stroke="rgba(77, 122, 79, 0.15)"
                strokeWidth="2.5"
                fill="none"
              />
              <motion.path
                d="M 20,0 Q 5,150 20,300 T 20,600 T 20,900 T 20,1200"
                stroke="var(--accent-gold)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            {steps.map((step) => {
              const isHovered = activeStep === step.id;
              return (
                <div 
                  key={step.id} 
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '300px' }}
                >
                  {/* Circular Illustration wrapper */}
                  <div style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: isHovered ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                    border: isHovered ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    marginBottom: '1.2rem',
                    boxShadow: isHovered ? '0 8px 20px rgba(194, 158, 90, 0.08)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                    {renderIllustration(step.id, isHovered)}
                  </div>

                  {/* Stage Text */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    {step.title.toUpperCase()}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: '1.5' }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}

          </div>
        ) : (
          /* Desktop Continuous Horizontal Journey */
          <div style={{ position: 'relative', padding: '40px 0' }}>
            
            {/* Horizontal Winding Path SVG */}
            <svg style={{ position: 'absolute', top: '100px', left: 0, width: '100%', height: '120px', pointerEvents: 'none', zIndex: 1 }}>
              <motion.path
                d="M 50,60 Q 150,110 250,60 T 450,60 T 650,60 T 850,60 T 1050,60 T 1250,60"
                stroke="rgba(77, 122, 79, 0.12)"
                strokeWidth="3"
                fill="none"
              />
              <motion.path
                d="M 50,60 Q 150,110 250,60 T 450,60 T 650,60 T 850,60 T 1050,60 T 1250,60"
                stroke="var(--accent-gold)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            {/* Stages Row Grid */}
            <div style={{ display: 'flex', gap: '2.2rem', position: 'relative', zIndex: 2 }}>
              {steps.map((step) => {
                const isHovered = activeStep === step.id;
                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    style={{ flex: 1, textAlign: 'center', transition: 'transform 0.4s ease' }}
                  >
                    {/* Floating illustration circle wrapper */}
                    <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 1.8rem' }}>
                      <motion.div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: isHovered ? 'rgba(77, 122, 79, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: isHovered ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(15px)',
                          boxShadow: isHovered ? '0 10px 25px rgba(194, 158, 90, 0.08)' : 'none',
                          cursor: 'pointer',
                          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s'
                        }}
                        whileHover={{ scale: 1.08 }}
                      >
                        {renderIllustration(step.id, isHovered)}
                      </motion.div>
                    </div>

                    {/* Stage Text */}
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: isHovered ? 'var(--accent-gold)' : '#FFFFFF', marginBottom: '0.6rem', transition: 'color 0.3s' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.55)', margin: '0 auto', maxWidth: '170px', lineHeight: '1.5' }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

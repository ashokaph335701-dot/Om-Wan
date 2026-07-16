import { motion } from 'framer-motion';

const Leaf = ({ delay, duration, startX, startY, endX, rotate }) => {
  return (
    <motion.svg
      className="hero-leaf"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(220, 165, 71, 0.25)" /* Accent gold tone for aesthetic contrast */
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ x: startX, y: startY, opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{ 
        x: [startX, startX + (endX - startX) / 2, endX], 
        y: ['-5vh', '50vh', '105vh'], 
        opacity: [0, 0.6, 0.6, 0], 
        scale: [0.5, 1, 1, 0.8], 
        rotate: [0, rotate / 2, rotate] 
      }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      style={{ position: 'absolute', zIndex: 3, pointerEvents: 'none' }}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 3 1.5 6 3.5 8L12 22l6.5-2c2-2 3.5-5 3.5-8 0-5.5-4.5-10-10-10z" />
      <path d="M12 2v20" />
    </motion.svg>
  );
};

const leafConfigs = [
  { delay: 0, duration: 15, startX: '10vw', startY: '-5vh', endX: '25vw', rotate: 360 },
  { delay: 3, duration: 18, startX: '30vw', startY: '-5vh', endX: '45vw', rotate: -270 },
  { delay: 6, duration: 14, startX: '50vw', startY: '-5vh', endX: '35vw', rotate: 180 },
  { delay: 2, duration: 16, startX: '70vw', startY: '-5vh', endX: '85vw', rotate: -180 },
  { delay: 8, duration: 20, startX: '85vw', startY: '-5vh', endX: '65vw', rotate: 360 },
  { delay: 5, duration: 17, startX: '20vw', startY: '-5vh', endX: '5vw', rotate: -360 },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="hero-section">
      {/* Background with Zoom Effect */}
      <motion.div 
        className="hero-bg-container"
        animate={{ scale: [1.02, 1.07] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        style={{ 
          backgroundImage: 'url("/cinematic_forest_hero.jpg")',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />
      
      {/* Deep overlay mask */}
      <div className="hero-overlay" />

      {/* Floating Leaves */}
      {leafConfigs.map((cfg, idx) => (
        <Leaf key={idx} {...cfg} />
      ))}

      {/* Glassmorphic Card Content */}
      <motion.div 
        className="hero-glass-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="hero-tag"
          variants={itemVariants}
          style={{ 
            color: 'var(--accent-gold)', 
            fontWeight: '700', 
            fontSize: '1.1rem', 
            letterSpacing: '3px', 
            textTransform: 'uppercase',
            marginBottom: '1.2rem' 
          }}
        >
          🇮🇳 India&apos;s First Green Investment Platform
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
        >
          Grow Wealth.<br/>Restore the Planet.
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Your money grows. Trees grow. The planet heals.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          variants={itemVariants}
          style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#plans" className="btn-hero-primary">Own Your First Tree</a>
          <a href="#about" className="btn-hero-secondary">See How It Works</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

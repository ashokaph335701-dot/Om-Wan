import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Check, IndianRupee, Leaf, Trees, Droplet, Bird, Users, Sparkles, Sprout } from 'lucide-react';
import './Calculator.css';

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;

    let startTime = null;
    const duration = 1000; // 1s animation

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeProgress);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{prefix}{displayValue.toLocaleString('en-IN')}{suffix}</span>;
};

export default function Calculator() {
  const [treeCount, setTreeCount] = useState(10);
  const [selectedTree, setSelectedTree] = useState("Khejri");
  const [isHoveringPie, setIsHoveringPie] = useState(false);

  const treeData = {
    "Khejri": {
      id: "Khejri",
      name: "Khejri Tree",
      price: 1599,
      annualReturn: 1231,
      productiveLife: 20,
      startsProducing: "4-5 years",
      emoji: "🌳"
    },
    "Amla": {
      id: "Amla",
      name: "Amla Tree",
      price: 1899,
      annualReturn: 1785,
      productiveLife: 15,
      startsProducing: "4-5 years",
      emoji: "🌿"
    },
    "Neem": {
      id: "Neem",
      name: "Neem Tree",
      price: 1499,
      annualReturn: 750,
      productiveLife: 25,
      startsProducing: "5-6 years",
      emoji: "🌱"
    }
  };

  const currentData = treeData[selectedTree];
  const totalInvestment = currentData.price * treeCount;
  
  // Financials
  const totalAnnualGross = currentData.annualReturn * treeCount;
  const investorAnnual = Math.round(totalAnnualGross * 0.7);
  const omwanAnnual = Math.round(totalAnnualGross * 0.3);
  const estimatedLifetimeWealth = investorAnnual * currentData.productiveLife;

  // Environmental Impact
  const carbonCapture = treeCount * 25; // kg per year
  const waterConservation = treeCount * 1000; // liters per year

  // Forest Stage
  const getForestStage = () => {
    if (treeCount <= 20) return { title: "Sapling Phase", icon: <Sprout size={48} /> };
    if (treeCount <= 100) return { title: "Small Plantation", icon: <Leaf size={48} /> };
    if (treeCount <= 500) return { title: "Orchard Ecosystem", icon: <Trees size={48} /> };
    return { title: "Native Forest", icon: <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}><Trees size={64} /></motion.div> };
  };
  const forestStage = getForestStage();

  const handleSliderChange = (e) => {
    setTreeCount(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    let val = parseInt(e.target.value) || 0;
    if (val > 1000) val = 1000;
    if (val < 1) val = 1;
    setTreeCount(val);
  };

  // Pie Chart calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const investorDash = (70 / 100) * circumference;
  const omwanDash = (30 / 100) * circumference;

  return (
    <section id="calculator" className="section-padding bg-gray" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Animated Elements */}
      <div className="calc-bg-elements">
        <div className="calc-blob blob-1"></div>
        <div className="calc-blob blob-2"></div>
      </div>

      <div className="calculator-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>Tree Investment Calculator</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Visualize your financial returns and environmental impact.</p>
          </motion.div>
        </div>

        {/* Step 1: Choose Tree */}
        <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
          <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Step 1 — Choose Your Tree</h3>
          <div className="tree-select-grid">
            {Object.values(treeData).map((tree, idx) => (
              <motion.div 
                key={tree.id}
                className={`tree-card ${selectedTree === tree.id ? 'selected' : ''}`}
                onClick={() => setSelectedTree(tree.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {selectedTree === tree.id && (
                  <motion.div className="tree-card-check" initial={{ scale: 0 }} animate={{ scale: 1 }}><Check size={16} /></motion.div>
                )}
                <div className="tree-emoji-container">{tree.emoji}</div>
                <h4 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '0.5rem' }}>{tree.name}</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: '1rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Price</span>
                  <span style={{ fontWeight: '600' }}>₹{tree.price.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Produces In</span>
                  <span style={{ fontWeight: '600' }}>{tree.startsProducing}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Productive Life</span>
                  <span style={{ fontWeight: '600' }}>{tree.productiveLife} years</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step 2: Choose Number of Trees */}
        <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Step 2 — Choose Number of Trees</h3>
          
          <div className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--forest-green)' }}>{forestStage.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Watching your forest grow.</p>
              </div>
              <div style={{ color: 'var(--forest-green)' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={forestStage.title} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                    {forestStage.icon}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <input type="range" min="1" max="1000" value={treeCount} onChange={handleSliderChange} className="premium-slider" />
              <input 
                type="number" 
                min="1" max="1000" 
                value={treeCount} 
                onChange={handleInputChange} 
                style={{ 
                  width: '80px', padding: '10px', borderRadius: '8px', 
                  border: '1px solid var(--border-light)', textAlign: 'center', 
                  fontSize: '1.1rem', fontWeight: 'bold', outline: 'none' 
                }} 
              />
            </div>
          </div>
        </div>

        {/* Step 3: Live Results */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Step 3 — Live Results</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            
            {/* Financial Details */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Investment</p>
                <h4 style={{ fontSize: '2rem', color: 'var(--text-dark)' }}>₹<AnimatedCounter value={totalInvestment} /></h4>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)' }} />
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Est. Annual Income (Your 70%)</p>
                <h4 style={{ fontSize: '1.8rem', color: 'var(--forest-green)' }}>₹<AnimatedCounter value={investorAnnual} /></h4>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Om Wan Conservation (30%)</p>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--accent-gold)' }}>₹<AnimatedCounter value={omwanAnnual} /></h4>
              </div>
            </div>

            {/* Income Distribution Ring */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Income Distribution</p>
              
              <div 
                className="circular-chart"
                onMouseEnter={() => setIsHoveringPie(true)}
                onMouseLeave={() => setIsHoveringPie(false)}
              >
                <svg viewBox="0 0 160 160" width="100%" height="100%" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="80" cy="80" r="70" className="circle-bg" />
                  <circle 
                    cx="80" cy="80" r="70" 
                    className="circle-fill-investor" 
                    strokeDasharray={`${investorDash} ${circumference}`}
                    style={{ filter: isHoveringPie ? 'drop-shadow(0 0 8px rgba(63,99,65,0.6))' : 'none' }}
                  />
                  <circle 
                    cx="80" cy="80" r="70" 
                    className="circle-fill-omwan" 
                    strokeDasharray={`${omwanDash} ${circumference}`}
                    strokeDashoffset={-investorDash}
                  />
                </svg>
                <div className="chart-center-text">
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--forest-green)' }}>70%</span>
                  <br />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>You</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center', height: '40px' }}>
                <AnimatePresence mode="wait">
                  {isHoveringPie ? (
                    <motion.p key="omwan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', maxWidth: '200px' }}>
                      30% funds maintenance, biodiversity, and local communities.
                    </motion.p>
                  ) : (
                    <motion.p key="investor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ fontSize: '0.85rem', color: 'var(--forest-green)', maxWidth: '200px' }}>
                      Hover to see Om Wan's conservation impact.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Animated Wealth Card */}
          <motion.div 
            className="wealth-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="wealth-glow"></div>
            <Sparkles style={{ margin: '0 auto', marginBottom: '1rem', color: 'var(--accent-gold)' }} size={32} />
            <p style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '0.5rem' }}>Estimated Lifetime Wealth</p>
            <h1 style={{ fontSize: '4rem', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              ₹<AnimatedCounter value={estimatedLifetimeWealth} />
            </h1>
            <p style={{ opacity: 0.7, marginTop: '1rem', fontSize: '0.9rem' }}>Based on {currentData.productiveLife} years of productive life after maturity.</p>
          </motion.div>

          {/* Environmental Impact */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '2rem' }}>Your Environmental Impact</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <Trees className="impact-icon" size={32} />
                <h4 style={{ fontSize: '1.5rem' }}><AnimatedCounter value={treeCount} /></h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Trees Conserved</p>
              </div>
              <div className="impact-item">
                <Leaf className="impact-icon" size={32} />
                <h4 style={{ fontSize: '1.5rem' }}><AnimatedCounter value={carbonCapture} /> kg</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Carbon Captured / yr</p>
              </div>
              <div className="impact-item">
                <Droplet className="impact-icon" size={32} />
                <h4 style={{ fontSize: '1.5rem' }}><AnimatedCounter value={waterConservation} /> L</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Water Conserved / yr</p>
              </div>
              <div className="impact-item">
                <Bird className="impact-icon" size={32} />
                <h4 style={{ fontSize: '1.5rem' }}>{Math.max(1, Math.round(treeCount * 0.1))}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Acres Restored</p>
              </div>
              <div className="impact-item">
                <Users className="impact-icon" size={32} />
                <h4 style={{ fontSize: '1.5rem' }}><AnimatedCounter value={treeCount * 2} /> hrs</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Community Support</p>
              </div>
            </div>
          </div>

          {/* Interactive Story Panel */}
          <motion.div 
            style={{ 
              marginTop: '4rem', 
              padding: '2rem', 
              background: 'rgba(63, 99, 65, 0.05)', 
              borderRadius: '16px', 
              borderLeft: '4px solid var(--forest-green)' 
            }}
            key={`${treeCount}-${selectedTree}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
              <strong>You are investing in {treeCount} {currentData.name}s.</strong> After they become productive in {currentData.startsProducing}, your trees could generate recurring annual income while restoring biodiversity and supporting long-term conservation through Om Wan.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

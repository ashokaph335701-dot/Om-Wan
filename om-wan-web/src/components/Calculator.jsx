import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndianRupee, CheckCircle2, Info, Leaf } from 'lucide-react';

// Custom hook for smooth number counting
function useCountUp(endValue, duration = 800) {
  const [value, setValue] = useState(endValue);
  const prevEndValue = useRef(endValue);
  const currentValRef = useRef(value);

  useEffect(() => {
    if (endValue === prevEndValue.current) return;
    
    let startTimestamp = null;
    const startValue = currentValRef.current;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setValue(current);
      currentValRef.current = current;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
    prevEndValue.current = endValue;
  }, [endValue, duration]);

  return value;
}

const AnimatedNum = ({ value, prefix = "", suffix = "" }) => {
  const animatedValue = useCountUp(value);
  return <span>{prefix}{animatedValue.toLocaleString('en-IN')}{suffix}</span>;
};

const treeData = {
  "Amla": {
    name: "Amla",
    scientific: "Phyllanthus emblica",
    cost: 1899,
    annualReturn: 1785,
    startsProducing: "4-5 years",
    productiveLife: "30+ years",
    lifetimeMultiplier: 25,
    icon: "🌿",
    gradient: "linear-gradient(135deg, #dcfce7 0%, #22c55e 100%)"
  },
  "Khejri": {
    name: "Khejri",
    scientific: "Prosopis cineraria",
    cost: 1599,
    annualReturn: 1231,
    startsProducing: "4-5 years",
    productiveLife: "50+ years",
    lifetimeMultiplier: 40,
    icon: "🌳",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)"
  },
  "Neem": {
    name: "Neem",
    scientific: "Azadirachta indica",
    cost: 1499,
    annualReturn: 750,
    startsProducing: "5-6 years",
    productiveLife: "100+ years",
    lifetimeMultiplier: 80,
    icon: "🌱",
    gradient: "linear-gradient(135deg, #d1fae5 0%, #059669 100%)"
  }
};

export default function Calculator() {
  const [selectedTree, setSelectedTree] = useState("Khejri");
  const [treeCount, setTreeCount] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const currentTree = treeData[selectedTree];
  
  const totalInvestment = currentTree.cost * treeCount;
  const totalAnnualReturn = currentTree.annualReturn * treeCount;
  
  // 70/30 split logic
  const investorAnnualIncome = Math.round(totalAnnualReturn * 0.7);
  const omWanAnnualShare = Math.round(totalAnnualReturn * 0.3);
  
  const lifetimeWealth = investorAnnualIncome * currentTree.lifetimeMultiplier;

  const handleTreeCountChange = (val) => {
    const num = parseInt(val) || 0;
    if (num > 1000) setTreeCount(1000);
    else if (num < 1) setTreeCount(1);
    else setTreeCount(num);
  };

  // Circular Ring Variables
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const investorDash = circumference * 0.7;
  const omWanDash = circumference * 0.3;

  return (
    <section id="calculator" className="section-padding bg-gray" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle Background Elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Investment Calculator</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Discover your potential returns and environmental impact.
        </p>
      </div>

      <div className="calc-container">
        
        {/* Step 1: Tree Selection */}
        <div className="calc-step">
          <h3 className="step-title">1. Select Your Tree</h3>
          <div className="tree-cards-grid">
            {Object.keys(treeData).map((key) => {
              const tree = treeData[key];
              const isSelected = selectedTree === key;
              
              return (
                <motion.div
                  key={key}
                  className={`tree-card premium-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedTree(key)}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px -5px rgba(63, 99, 65, 0.15)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {isSelected && (
                    <motion.div 
                      className="check-badge"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <CheckCircle2 size={16} color="white" />
                    </motion.div>
                  )}
                  
                  <div className="tree-icon-wrapper" style={{ background: tree.gradient }}>
                    <span className="tree-emoji">{tree.icon}</span>
                  </div>
                  
                  <h4 className="tree-name">{tree.name}</h4>
                  <div className="tree-cost">₹{tree.cost.toLocaleString('en-IN')}</div>
                  
                  <div className="tree-details">
                    <div className="detail-row">
                      <span>Produces in:</span>
                      <strong>{tree.startsProducing}</strong>
                    </div>
                    <div className="detail-row">
                      <span>Lifespan:</span>
                      <strong>{tree.productiveLife}</strong>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Quantity Slider */}
        <div className="calc-step">
          <h3 className="step-title">2. Number of Trees</h3>
          <div className="premium-card slider-card">
            <div className="slider-header">
              <span className="slider-label">Quantity</span>
              <input 
                type="number" 
                min="1" max="1000" 
                value={treeCount}
                onChange={(e) => handleTreeCountChange(e.target.value)}
                className="quantity-input"
              />
            </div>
            
            <div className="slider-wrapper">
              <input 
                type="range" 
                min="1" max="1000" 
                value={treeCount}
                onChange={(e) => setTreeCount(parseInt(e.target.value))}
                className="premium-slider"
                style={{ 
                  background: `linear-gradient(to right, var(--forest-green) ${(treeCount / 1000) * 100}%, var(--border-light) ${(treeCount / 1000) * 100}%)` 
                }}
              />
            </div>
            
            <div className="slider-markers">
              <span>1</span>
              <span>1,000 max</span>
            </div>
          </div>
        </div>

        {/* Step 3: Results Section */}
        <div className="calc-step results-section">
          <h3 className="step-title">3. Your Investment Returns</h3>
          
          <div className="results-grid">
            
            {/* Wealth Card (Featured) */}
            <div className="premium-card wealth-card">
              <div className="wealth-glow"></div>
              <span className="result-label">Estimated Lifetime Wealth</span>
              <div className="wealth-amount">
                <AnimatedNum value={lifetimeWealth} prefix="₹" />
              </div>
              <p className="wealth-subtext">Over {currentTree.productiveLife} of productive life</p>
            </div>
            
            {/* Secondary Metrics */}
            <div className="metrics-grid">
              <div className="premium-card metric-card">
                <span className="result-label">Total Investment</span>
                <div className="metric-value">
                  <AnimatedNum value={totalInvestment} prefix="₹" />
                </div>
              </div>
              
              <div className="premium-card metric-card">
                <span className="result-label">Starts Producing In</span>
                <div className="metric-value highlight-text">
                  {currentTree.startsProducing}
                </div>
              </div>
            </div>

            {/* Income Split visualization */}
            <div className="premium-card split-card">
              <h4 className="split-title">Annual Income Distribution</h4>
              
              <div className="split-content">
                {/* SVG Ring */}
                <div className="ring-wrapper">
                  <svg width="140" height="140" viewBox="0 0 140 140" className="income-ring">
                    {/* Om Wan 30% */}
                    <circle
                      cx="70" cy="70" r={radius}
                      fill="none" 
                      stroke="#E5E7EB" 
                      strokeWidth="12"
                      strokeDasharray={`${omWanDash} ${circumference}`}
                      strokeDashoffset={-investorDash}
                      strokeLinecap="round"
                      className="ring-segment omwan-segment"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    />
                    {/* Investor 70% */}
                    <circle
                      cx="70" cy="70" r={radius}
                      fill="none" 
                      stroke="var(--forest-green)" 
                      strokeWidth="12"
                      strokeDasharray={`${investorDash} ${circumference}`}
                      strokeLinecap="round"
                      className="ring-segment investor-segment"
                    />
                  </svg>
                  
                  <AnimatePresence>
                    {showTooltip && (
                      <motion.div 
                        className="ring-tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        Reinvested into tree care, monitoring, protection, biodiversity conservation, and community-led management.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Legend */}
                <div className="split-legend">
                  <div className="legend-item investor-item">
                    <div className="legend-marker investor-marker"></div>
                    <div className="legend-text">
                      <span className="legend-label">Your Share (70%)</span>
                      <span className="legend-value"><AnimatedNum value={investorAnnualIncome} prefix="₹" />/yr</span>
                    </div>
                  </div>
                  
                  <div 
                    className="legend-item omwan-item"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <div className="legend-marker omwan-marker"></div>
                    <div className="legend-text">
                      <span className="legend-label">Om Wan Share (30%) <Info size={14} className="info-icon" /></span>
                      <span className="legend-value"><AnimatedNum value={omWanAnnualShare} prefix="₹" />/yr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Live Summary Text */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${selectedTree}-${treeCount}`}
            className="live-summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              "You are investing in <strong>{treeCount} {currentTree.name} trees</strong> with a total investment of <strong>₹{totalInvestment.toLocaleString('en-IN')}</strong>. 
              After the trees become productive, you could receive an estimated annual income while building long-term wealth through a living natural asset."
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

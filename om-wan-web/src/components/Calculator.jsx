import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

// Custom CountUp Hook
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
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setValue(current);
      currentValRef.current = current;
      
      if (progress < 1) window.requestAnimationFrame(step);
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
  "Amla": { name: "Amla", cost: 1899, returnRate: 0.60, color: "#22c55e", image: "/images/amla.jpg" },
  "Khejri": { name: "Khejri", cost: 1599, returnRate: 0.55, color: "#f59e0b", image: "/images/khejri.jpg" },
  "Neem": { name: "Neem", cost: 1499, returnRate: 0.50, color: "#059669", image: "/images/neem.jpg" }
};

export default function Calculator() {
  const [selectedTree, setSelectedTree] = useState("Khejri");
  const [treeCount, setTreeCount] = useState(100);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const currentTree = treeData[selectedTree];
  
  const totalInvestment = currentTree.cost * treeCount;
  const totalAnnualReturn = totalInvestment * currentTree.returnRate;
  const investorAnnualIncome = Math.round(totalAnnualReturn * 0.7);
  const lifetimeReturn = investorAnnualIncome * 25;

  const handleTreeCountChange = (val) => {
    const num = parseInt(val) || 0;
    if (num > 1000) setTreeCount(1000);
    else if (num < 1) setTreeCount(1);
    else setTreeCount(num);
  };

  // Ring Variables
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const investorDash = circumference * 0.7;
  const reinvestedDash = circumference * 0.3;

  return (
    <section id="calculator" className="section-padding" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      
      <div className="compact-calc-wrapper">
        
        {/* Left Column: Content */}
        <div className="calc-left-col">
          
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.2rem', color: 'var(--text-dark)', fontWeight: '800' }}>Investment Calculator</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              🌿 <span>Annual returns are estimated to be paid every year for <strong>25 years</strong>.</span>
            </p>
          </div>

          <div className="compact-inputs-row">
            {/* Custom Dropdown */}
            <div className="compact-input-group" style={{ flex: 1 }}>
              <label className="minimal-label">Select Tree</label>
              <div className="custom-dropdown-container">
                <div 
                  className="custom-dropdown-header compact"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-dark)' }}>{currentTree.name}</span>
                  <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                    <ChevronDown size={18} color="var(--text-muted)" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      className="custom-dropdown-list compact"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {Object.keys(treeData).map(key => (
                        <div 
                          key={key}
                          className={`dropdown-item compact ${selectedTree === key ? 'active' : ''}`}
                          onClick={() => { setSelectedTree(key); setDropdownOpen(false); }}
                        >
                          <span style={{ fontSize: '1rem' }}>{treeData[key].name}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="compact-input-group" style={{ flex: 1.5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label className="minimal-label" style={{ marginBottom: 0 }}>Number of Trees</label>
                <input 
                  type="number" 
                  min="1" max="1000" 
                  value={treeCount}
                  onChange={(e) => handleTreeCountChange(e.target.value)}
                  className="minimal-num-input compact"
                />
              </div>
              
              <div className="minimal-slider-container" style={{ marginTop: '0.5rem' }}>
                <input 
                  type="range" 
                  min="1" max="1000" 
                  value={treeCount}
                  onChange={(e) => setTreeCount(parseInt(e.target.value))}
                  className="minimal-slider"
                  style={{ 
                    background: `linear-gradient(to right, var(--forest-green) ${(treeCount / 1000) * 100}%, #e2e8f0 ${(treeCount / 1000) * 100}%)` 
                  }}
                />
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="compact-results-area">
            
            <div className="compact-result-grid">
              <motion.div className="compact-card highlight-card" whileHover={{ y: -3 }}>
                <div className="card-label">Total Investment</div>
                <div className="card-value"><AnimatedNum value={totalInvestment} prefix="₹" /></div>
              </motion.div>

              <motion.div className="compact-card" whileHover={{ y: -3 }}>
                <div className="card-label">Estimated Annual Income</div>
                <div className="card-value" style={{ color: 'var(--forest-green)' }}><AnimatedNum value={investorAnnualIncome} prefix="₹" /></div>
              </motion.div>

              <motion.div className="compact-card" style={{ gridColumn: '1 / -1' }} whileHover={{ y: -3 }}>
                <div className="card-label">Estimated Lifetime Return (25 Yrs)</div>
                <div className="card-value"><AnimatedNum value={lifetimeReturn} prefix="₹" /></div>
              </motion.div>
            </div>

            {/* Revenue Split Ring Inline */}
            <div className="compact-split-visual">
              <div className="ring-wrapper-tiny">
                <svg width="70" height="70" viewBox="0 0 70 70" className="income-ring">
                  <circle
                    cx="35" cy="35" r={radius}
                    fill="none" stroke="#E5E7EB" strokeWidth="6"
                    strokeDasharray={`${reinvestedDash} ${circumference}`}
                    strokeDashoffset={-investorDash}
                    strokeLinecap="round"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ cursor: 'help' }}
                  />
                  <circle
                    cx="35" cy="35" r={radius}
                    fill="none" stroke="var(--forest-green)" strokeWidth="6"
                    strokeDasharray={`${investorDash} ${circumference}`}
                    strokeLinecap="round"
                  />
                </svg>
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div 
                      className="minimal-tooltip"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                    >
                      30% of the annual return generated by your trees is automatically reinvested by Om Wan into tree care, monitoring, protection, and biodiversity conservation, ensuring healthy trees and sustainable long-term returns.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="compact-split-labels">
                <div className="split-label small">
                  <div className="dot" style={{ background: 'var(--forest-green)' }}></div>
                  70% Investor
                </div>
                <div className="split-label small" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{ cursor: 'help' }}>
                  <div className="dot" style={{ background: '#E5E7EB' }}></div>
                  30% Reinvested into Tree Care <Info size={12} color="var(--text-muted)"/>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="calc-right-col">
           <AnimatePresence mode="wait">
              <motion.div 
                key={selectedTree}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="animated-tree-container"
              >
                {/* Time-Lapse Tree Image */}
                <div className="tree-time-lapse" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <img 
                       src={currentTree.image} 
                       alt={currentTree.name} 
                       style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                     />
                </div>
              </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info, Search, CalendarDays, Wallet } from 'lucide-react';

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
  "Amla": { name: "Amla", cost: 1899, annualReturn: 1785, color: "#22c55e", emoji: "🌳" },
  "Khejri": { name: "Khejri", cost: 1599, annualReturn: 1231, color: "#f59e0b", emoji: "🌲" },
  "Neem": { name: "Neem", cost: 1499, annualReturn: 750, color: "#059669", emoji: "🌿" }
};

export default function Calculator() {
  const [selectedTree, setSelectedTree] = useState("Khejri");
  const [treeCount, setTreeCount] = useState(50);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const currentTree = treeData[selectedTree];
  
  const totalInvestment = currentTree.cost * treeCount;
  const totalAnnualReturn = currentTree.annualReturn * treeCount;
  
  const investorAnnualIncome = Math.round(totalAnnualReturn * 0.7);
  const omWanAnnualShare = Math.round(totalAnnualReturn * 0.3);

  const handleTreeCountChange = (val) => {
    const num = parseInt(val) || 0;
    if (num > 1000) setTreeCount(1000);
    else if (num < 1) setTreeCount(1);
    else setTreeCount(num);
  };

  // Ring Variables
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const investorDash = circumference * 0.7;
  const omWanDash = circumference * 0.3;

  return (
    <section id="calculator" className="section-padding" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      
      <div className="minimal-calc-wrapper">
        
        {/* Top Section: Inputs & Visuals */}
        <div className="minimal-top-grid">
          
          {/* Inputs Column */}
          <div className="minimal-inputs">
            
            {/* Custom Dropdown */}
            <div className="input-group">
              <label className="minimal-label">Select Tree</label>
              <div className="custom-dropdown-container">
                <div 
                  className="custom-dropdown-header"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>{currentTree.emoji}</span>
                    <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{currentTree.name}</span>
                  </div>
                  <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                    <ChevronDown size={20} color="var(--text-muted)" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div 
                      className="custom-dropdown-list"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {Object.keys(treeData).map(key => (
                        <div 
                          key={key}
                          className={`dropdown-item ${selectedTree === key ? 'active' : ''}`}
                          onClick={() => { setSelectedTree(key); setDropdownOpen(false); }}
                        >
                          <span style={{ fontSize: '1.2rem' }}>{treeData[key].emoji}</span>
                          <span>{treeData[key].name}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="input-group" style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
                <label className="minimal-label">Number of Trees</label>
                <input 
                  type="number" 
                  min="1" max="1000" 
                  value={treeCount}
                  onChange={(e) => handleTreeCountChange(e.target.value)}
                  className="minimal-num-input"
                />
              </div>
              
              <div className="minimal-slider-container">
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

            {/* Split visualization inline */}
            <div className="minimal-split-visual" style={{ marginTop: '3rem' }}>
              <div className="ring-wrapper-small">
                <svg width="100" height="100" viewBox="0 0 100 100" className="income-ring">
                  <circle
                    cx="50" cy="50" r={radius}
                    fill="none" stroke="#E5E7EB" strokeWidth="8"
                    strokeDasharray={`${omWanDash} ${circumference}`}
                    strokeDashoffset={-investorDash}
                    strokeLinecap="round"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ cursor: 'help' }}
                  />
                  <circle
                    cx="50" cy="50" r={radius}
                    fill="none" stroke="var(--forest-green)" strokeWidth="8"
                    strokeDasharray={`${investorDash} ${circumference}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="ring-center-text">70/30</div>
                
                <AnimatePresence>
                  {showTooltip && (
                    <motion.div 
                      className="minimal-tooltip"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      30% is reinvested into tree care, monitoring, protection, biodiversity conservation, and community-led management to ensure your trees remain healthy and productive.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="split-labels">
                <div className="split-label">
                  <div className="dot" style={{ background: 'var(--forest-green)' }}></div>
                  Investor Share (70%)
                </div>
                <div className="split-label" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{ cursor: 'help' }}>
                  <div className="dot" style={{ background: '#E5E7EB' }}></div>
                  Om Wan Share (30%) <Info size={14} color="var(--text-muted)"/>
                </div>
              </div>
            </div>

          </div>

          {/* Visualization Column */}
          <div className="minimal-visual-scene">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedTree}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="animated-tree-container"
              >
                {/* Glowing Background */}
                <div className="tree-glow" style={{ background: `radial-gradient(circle, ${currentTree.color}40 0%, rgba(255,255,255,0) 70%)` }}></div>
                
                {/* Tree Sway Animation Container */}
                <div className="tree-sway">
                  <span className="huge-emoji">{currentTree.emoji}</span>
                </div>
                
                {/* Floating Leaves */}
                <div className="floating-leaf leaf-1" style={{ color: currentTree.color }}>🍃</div>
                <div className="floating-leaf leaf-2" style={{ color: currentTree.color }}>🍂</div>
                <div className="floating-leaf leaf-3" style={{ color: currentTree.color }}>🍃</div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Section: 4 Results Cards */}
        <div className="minimal-results-grid">
          
          <motion.div className="minimal-card highlight-card" whileHover={{ y: -5 }}>
            <div className="card-icon"><Wallet size={24} /></div>
            <div className="card-label">Total Investment</div>
            <div className="card-value"><AnimatedNum value={totalInvestment} prefix="₹" /></div>
          </motion.div>

          <motion.div className="minimal-card" whileHover={{ y: -5 }}>
            <div className="card-label" style={{ color: 'var(--forest-green)' }}>Estimated Annual Income</div>
            <div className="card-value" style={{ color: 'var(--forest-green)' }}><AnimatedNum value={investorAnnualIncome} prefix="₹" /></div>
            <div className="card-subtext">Your 70% Share</div>
          </motion.div>

          <motion.div className="minimal-card" whileHover={{ y: -5 }}>
            <div className="card-label">Om Wan Share</div>
            <div className="card-value"><AnimatedNum value={omWanAnnualShare} prefix="₹" /></div>
            <div className="card-subtext">30% Reinvested</div>
          </motion.div>

          <motion.div className="minimal-card" whileHover={{ y: -5 }}>
            <div className="card-icon"><CalendarDays size={24} /></div>
            <div className="card-label">Annual Return Period</div>
            <div className="card-value fixed-value">25 Years</div>
            <div className="card-subtext" style={{ fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: 1.4 }}>
              You will receive an estimated annual income every year for 25 years.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

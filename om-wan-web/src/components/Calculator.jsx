import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info, Wallet } from 'lucide-react';

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
  "Amla": { name: "Amla", cost: 1899, annualReturn: 1785, color: "#22c55e", image: "/images/amla.jpg" },
  "Khejri": { name: "Khejri", cost: 1599, annualReturn: 1231, color: "#f59e0b", image: "/images/khejri.jpg" },
  "Neem": { name: "Neem", cost: 1499, annualReturn: 750, color: "#059669", image: "/images/neem.jpg" }
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
  const reinvestedShare = Math.round(totalAnnualReturn * 0.3);

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
  const reinvestedDash = circumference * 0.3;

  return (
    <section id="calculator" className="section-padding" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      
      <div className="minimal-calc-wrapper">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Investment Calculator</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            🌿 <span>Estimated annual returns are paid every year for <strong>25 years</strong>.</span>
          </p>
        </div>

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
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden' }}>
                      <img src={currentTree.image} alt={currentTree.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
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
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={treeData[key].image} alt={treeData[key].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
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
                  {/* Reinvested 30% */}
                  <circle
                    cx="50" cy="50" r={radius}
                    fill="none" stroke="#E5E7EB" strokeWidth="8"
                    strokeDasharray={`${reinvestedDash} ${circumference}`}
                    strokeDashoffset={-investorDash}
                    strokeLinecap="round"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={{ cursor: 'help' }}
                  />
                  {/* Investor 70% */}
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
                      30% is reinvested into tree care, monitoring, protection, and biodiversity conservation to keep your trees healthy and productive.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="split-labels">
                <div className="split-label">
                  <div className="dot" style={{ background: 'var(--forest-green)' }}></div>
                  Your Annual Income (70%)
                </div>
                <div className="split-label" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} style={{ cursor: 'help' }}>
                  <div className="dot" style={{ background: '#E5E7EB' }}></div>
                  Reinvested into Care (30%) <Info size={14} color="var(--text-muted)"/>
                </div>
              </div>
            </div>

          </div>

          {/* Realistic Image Visualization Column */}
          <div className="minimal-visual-scene">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedTree}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6 }}
                className="animated-tree-container"
              >
                {/* Glowing Background */}
                <div className="tree-glow" style={{ background: `radial-gradient(circle, ${currentTree.color}30 0%, rgba(255,255,255,0) 70%)` }}></div>
                
                {/* Image Sway Container */}
                <div className="tree-sway" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '4px solid white', position: 'relative' }}>
                     <img 
                       src={currentTree.image} 
                       alt={currentTree.name} 
                       style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                     />
                  </div>
                </div>
                
                {/* Floating Leaves overlay */}
                <div className="floating-leaf leaf-1" style={{ color: currentTree.color }}>🍃</div>
                <div className="floating-leaf leaf-2" style={{ color: currentTree.color }}>🍂</div>
                <div className="floating-leaf leaf-3" style={{ color: currentTree.color }}>🍃</div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Section: 3 Results Cards */}
        <div className="minimal-results-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          
          <motion.div className="minimal-card highlight-card" whileHover={{ y: -5 }}>
            <div className="card-icon"><Wallet size={24} color="rgba(255,255,255,0.8)" /></div>
            <div className="card-label">Total Investment</div>
            <div className="card-value"><AnimatedNum value={totalInvestment} prefix="₹" /></div>
          </motion.div>

          <motion.div className="minimal-card" whileHover={{ y: -5 }}>
            <div className="card-label" style={{ color: 'var(--forest-green)' }}>Your Estimated Annual Income</div>
            <div className="card-value" style={{ color: 'var(--forest-green)' }}><AnimatedNum value={investorAnnualIncome} prefix="₹" /></div>
            <div className="card-subtext">70% Share</div>
          </motion.div>

          <motion.div className="minimal-card" whileHover={{ y: -5 }}>
            <div className="card-label">30% Reinvested into Care</div>
            <div className="card-value"><AnimatedNum value={reinvestedShare} prefix="₹" /></div>
            <div className="card-subtext">For long-term conservation</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

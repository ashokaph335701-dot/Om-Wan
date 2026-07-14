import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Wallet } from 'lucide-react';

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
  
  const currentTree = treeData[selectedTree];
  
  const totalInvestment = currentTree.cost * treeCount;
  const totalAnnualReturn = currentTree.annualReturn * treeCount;
  const investorAnnualIncome = Math.round(totalAnnualReturn * 0.7);

  const handleTreeCountChange = (val) => {
    const num = parseInt(val) || 0;
    if (num > 1000) setTreeCount(1000);
    else if (num < 1) setTreeCount(1);
    else setTreeCount(num);
  };

  return (
    <section id="calculator" className="section-padding" style={{ background: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      
      <div className="minimal-calc-wrapper">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: 'var(--text-dark)', fontWeight: '800' }}>Investment Calculator</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '40px', height: '40px', overflow: 'hidden' }}>
                      <img src={currentTree.image} alt={currentTree.name} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '1.2rem', color: 'var(--text-dark)' }}>{currentTree.name}</span>
                  </div>
                  <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                    <ChevronDown size={24} color="var(--text-muted)" />
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
                          <div style={{ width: '32px', height: '32px', overflow: 'hidden' }}>
                            <img src={treeData[key].image} alt={treeData[key].name} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                          </div>
                          <span style={{ fontSize: '1.1rem' }}>{treeData[key].name}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quantity Slider */}
            <div className="input-group" style={{ marginTop: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
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

          </div>

          {/* Realistic Image Visualization Column */}
          <div className="minimal-visual-scene">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedTree}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="animated-tree-container"
              >
                {/* Sunlight Glow Background */}
                <div className="sunlight-glow" style={{ background: `radial-gradient(circle, ${currentTree.color}25 0%, rgba(255,255,255,0) 70%)` }}></div>
                
                {/* Alive Tree Container (breathing + sway) */}
                <div className="tree-alive" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 5 }}>
                     <img 
                       src={currentTree.image} 
                       alt={currentTree.name} 
                       style={{ width: '120%', maxWidth: '400px', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                     />
                </div>
                
                {/* Fresh Leaves (Growth Animation) */}
                <div className="fresh-leaf leaf-pos-1" style={{ background: currentTree.color }}></div>
                <div className="fresh-leaf leaf-pos-2" style={{ background: currentTree.color }}></div>
                <div className="fresh-leaf leaf-pos-3" style={{ background: currentTree.color }}></div>
                <div className="fresh-leaf leaf-pos-4" style={{ background: currentTree.color }}></div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Section: 2 Results Cards */}
        <div className="minimal-results-grid">
          
          <motion.div className="minimal-card highlight-card" whileHover={{ y: -5 }}>
            <div className="card-icon"><Wallet size={28} color="rgba(255,255,255,0.9)" /></div>
            <div className="card-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Total Investment</div>
            <div className="card-value" style={{ color: 'white' }}><AnimatedNum value={totalInvestment} prefix="₹" /></div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div className="minimal-card" style={{ flexGrow: 1 }} whileHover={{ y: -5 }}>
              <div className="card-label" style={{ color: 'var(--forest-green)', fontSize: '1.2rem' }}>Estimated Annual Income</div>
              <div className="card-value" style={{ color: 'var(--forest-green)', fontSize: '2.5rem' }}><AnimatedNum value={investorAnnualIncome} prefix="₹" /></div>
            </motion.div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', padding: '0 1rem', lineHeight: '1.4' }}>
              🌿 *30% of the annual revenue is automatically reinvested into tree care and conservation to ensure healthy, productive trees.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, TreePine, ChevronDown, Leaf } from 'lucide-react';

export default function Calculator() {
  const [treeCount, setTreeCount] = useState(10);
  const [selectedTree, setSelectedTree] = useState("Khejri");

  const treeData = {
    "Khejri": {
      cost: 1599,
      annualReturn: 1231,
      name: "Khejri",
      maturity: "4-5 years",
      icon: "🌳"
    },
    "Amla": {
      cost: 1899,
      annualReturn: 1785,
      name: "Amla",
      maturity: "4-5 years",
      icon: "🌿"
    },
    "Neem": {
      cost: 1499,
      annualReturn: 750,
      name: "Neem",
      maturity: "5-6 years",
      icon: "🌱"
    }
  };

  const currentData = treeData[selectedTree];
  const totalInvestment = currentData.cost * treeCount;
  const estimatedAnnualReturn = currentData.annualReturn * treeCount;

  const handleTreeCountChange = (value) => {
    const num = parseInt(value) || 0;
    if (num > 1000) setTreeCount(1000);
    else if (num < 1) setTreeCount(1);
    else setTreeCount(num);
  };

  return (
    <section id="calculator" className="section-padding bg-gray">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Estimated Return Calculator</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Select your tree species and enter the quantity to see your estimated annual returns.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {/* Left Side: Inputs */}
        <div style={{ flex: '1 1 400px', padding: '3rem', position: 'relative' }}>
          
          {/* Subtle background graphic */}
          <Leaf size={150} color="var(--bg-secondary)" style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.5, pointerEvents: 'none' }} />

          <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--forest-green)', display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 2 }}>
            <TreePine /> Investment Details
          </h3>

          <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontWeight: '600', color: 'var(--text-dark)' }}>Tree Species</label>
            <div style={{ position: 'relative' }}>
              <select 
                value={selectedTree} 
                onChange={(e) => setSelectedTree(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '14px 16px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--border-light)', 
                  appearance: 'none', 
                  background: 'var(--bg-secondary)', 
                  color: 'var(--text-dark)', 
                  fontSize: '1rem', 
                  fontWeight: '500', 
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
              >
                <option value="Khejri">Khejri (Prosopis cineraria)</option>
                <option value="Amla">Amla (Indian Gooseberry)</option>
                <option value="Neem">Neem (Indian Lilac)</option>
              </select>
              <ChevronDown style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
            </div>
          </div>

          <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <label style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Number of Trees</label>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Max: 1,000</span>
            </div>
            <input 
              type="number" 
              min="1" 
              max="1000" 
              value={treeCount} 
              onChange={(e) => handleTreeCountChange(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-light)', 
                background: 'var(--bg-secondary)', 
                color: 'var(--text-dark)', 
                fontSize: '1.1rem', 
                fontWeight: '600', 
                outline: 'none',
                transition: 'border-color 0.3s',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <input 
              type="range" 
              min="1" 
              max="1000" 
              value={treeCount} 
              onChange={(e) => setTreeCount(parseInt(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', height: '6px', borderRadius: '4px', accentColor: 'var(--forest-green)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>1</span>
              <span>1,000</span>
            </div>
          </div>
        </div>

        {/* Right Side: Output */}
        <div style={{ 
          flex: '1 1 300px', 
          background: 'linear-gradient(135deg, var(--forest-green), #2F4A30)',
          color: 'white',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentData.icon}</div>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '0.5rem' }}>Estimated Annual Return</p>
          <h2 style={{ color: 'var(--accent-gold)', fontSize: '3rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IndianRupee size={40} strokeWidth={3} /> {estimatedAnnualReturn.toLocaleString('en-IN')}
          </h2>
          
          <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', width: '100%' }}>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Cost per Tree:</span> <strong>₹{currentData.cost.toLocaleString('en-IN')}</strong>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Total Investment:</span> <strong>₹{totalInvestment.toLocaleString('en-IN')}</strong>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, display: 'flex', justifyContent: 'space-between' }}>
              <span>Maturity Period:</span> <strong>{currentData.maturity}</strong>
            </p>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.6 }}>
            *Approximate returns based on market values at maturity.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

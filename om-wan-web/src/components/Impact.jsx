import { motion } from 'framer-motion';
import { Droplet, Sun, ShieldCheck, Coins } from 'lucide-react';

export default function Impact() {
  const metrics = [
    { value: "61%", label: "Of Rajasthan is covered by the Thar Desert", icon: <Sun size={32} /> },
    { value: "62%", label: "Drop in groundwater levels over two decades", icon: <Droplet size={32} /> },
    { value: "100%", label: "Survival rate guaranteed for Om Wan trees", icon: <ShieldCheck size={32} /> },
    { value: "70%", label: "Of tree by-product returns go to the owner", icon: <Coins size={32} /> }
  ];

  return (
    <section id="impact" className="section-padding">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>The Climate Impact</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Desertification and groundwater depletion are threatening livelihoods in Rajasthan. Here is why our native forest model matters.
        </p>
      </div>
      
      <div className="grid-cards">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div className="card-icon" style={{ display: 'flex', justifyContent: 'center' }}>
              {metric.icon}
            </div>
            <h3 style={{ fontSize: '3rem', margin: '0 0 1rem 0', color: 'var(--forest-green)' }}>{metric.value}</h3>
            <p style={{ color: 'var(--text-dark)', fontWeight: '600' }}>{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

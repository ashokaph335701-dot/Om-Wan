import { motion } from 'framer-motion';

export default function NativeTrees() {
  const trees = [
    { name: "Khejri (Prosopis cineraria)", emoji: "🌳", desc: "The 'Lifeline of the Desert', crucial for soil stability and high nutritional value." },
    { name: "Amla (Phyllanthus emblica)", emoji: "🌿", desc: "A highly valued medicinal tree rich in Vitamin C, known for boosting immunity." },
    { name: "Neem (Azadirachta indica)", emoji: "🌱", desc: "Famous for its purifying and medicinal properties, excellent for pest control naturally." }
  ];

  return (
    <section className="section-padding bg-gray">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Species We Plant</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(10, 13, 10, 0.65)', marginTop: '0.8rem', fontStyle: 'italic', fontWeight: '500' }}>
          * We are continuously exploring more native tree options.
        </p>
      </div>
      
      <div className="grid-cards">
        {trees.map((tree, i) => (
          <motion.div 
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{tree.emoji}</div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--forest-green)' }}>{tree.name}</h4>
            <p style={{ fontSize: '0.95rem' }}>{tree.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Map, Leaf, LineChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Site Assessment & Planning",
      desc: "We assess the land for soil quality and water availability, designing a plantation plan tailored to the specific site.",
      icon: <Map size={40} />
    },
    {
      title: "2. Native Tree Plantation",
      desc: "You buy a tree. We assign you a unique plant ID with geotagged location, ensuring complete transparency.",
      icon: <Leaf size={40} />
    },
    {
      title: "3. Monitoring & Growth",
      desc: "Our Om Wan Sewaks provide ongoing support. You receive monthly progress reports on the growth of your forest.",
      icon: <LineChart size={40} />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>Module of Execution</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          How we ensure a 100% survival rate for your trees.
        </p>
      </div>

      <div className="grid-cards">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-icon">{step.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

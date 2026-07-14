import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, TrendingUp, Sparkles, Sprout, Building } from 'lucide-react';

export default function Advantages() {
  const advantages = [
    {
      title: "100% Survival Rate",
      desc: "We guarantee the survival of every tree planted through proper care, maintenance, and regular monitoring.",
      icon: <ShieldCheck size={40} />
    },
    {
      title: "70% Ownership",
      desc: "Buyers have full ownership of the trees, with the opportunity to receive returns from tree by-products once they mature.",
      icon: <TrendingUp size={40} />
    },
    {
      title: "Free Lifetime Maintenance",
      desc: "Om Wan takes care of all aspects of tree care from plantation to maturity, offering hassle-free long-term management.",
      icon: <HeartHandshake size={40} />
    },
    {
      title: "Regular Monitoring",
      desc: "Dedicated Om Wan Sewaks conduct weekly visits, and buyers receive monthly updates, ensuring transparent tracking.",
      icon: <Sprout size={40} />
    },
    {
      title: "Sustainable Practices",
      desc: "Support a project that combats desertification, enhances biodiversity, and promotes climate change action.",
      icon: <Sparkles size={40} />
    },
    {
      title: "Exciting Future Benefits",
      desc: "Receive exclusive perks and discounts on future initiatives, including eco-friendly accommodations and cultural events.",
      icon: <Building size={40} />
    }
  ];

  return (
    <section id="advantages" className="section-padding bg-gray">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>Why Plant with Om Wan?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Discover the unique benefits and long-term value of becoming a part of India's first native tree forest community.
        </p>
      </div>

      <div className="grid-cards">
        {advantages.map((adv, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-icon" style={{ display: 'flex', justifyContent: 'center' }}>
              {adv.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>{adv.title}</h3>
            <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>{adv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

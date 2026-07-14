import { motion } from 'framer-motion';
import { Leaf, TreePine, Trees } from 'lucide-react';

export default function PricingPlans() {
  const handleCheckout = (planName) => {
    alert(`Redirecting to Stripe Checkout for ${planName}...`);
  };

  const plans = [
    {
      name: "Seedling Plan",
      trees: "1–5 Trees",
      icon: <Leaf size={48} className="card-icon" />,
      benefits: [
        "Free access to Meditation Center",
        "Access to Agroforestry Courses",
        "Priority entry to Music Festival",
        "Discount on accommodations"
      ]
    },
    {
      name: "Sapling Plan",
      trees: "6–10 Trees",
      icon: <TreePine size={48} className="card-icon" />,
      benefits: [
        "First 2 days free luxury huts",
        "Free access to Meditation Center",
        "Access to Agroforestry Courses",
        "Discount on Music Festival"
      ]
    },
    {
      name: "Forest Plan",
      trees: "11+ Trees",
      icon: <Trees size={48} className="card-icon" />,
      benefits: [
        "Annual 3 days free luxury huts",
        "Free access to Meditation Center",
        "Free entry to Music Festival",
        "Complimentary airport transfer"
      ]
    }
  ];

  return (
    <section id="plans" className="section-padding bg-gray">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>Ownership Plans</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Invest in nature via SIP or One-Time payment. Secure your Stripe-powered transaction to start your forest.
        </p>
      </div>

      <div className="grid-cards" style={{ alignItems: 'stretch' }}>
        {plans.map((plan, index) => (
          <motion.div 
            key={plan.name}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {plan.icon}
            </div>
            <h3 style={{ textAlign: 'center' }}>{plan.name}</h3>
            <p style={{ textAlign: 'center', color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '2rem' }}>
              {plan.trees}
            </p>
            
            <ul className="pricing-features" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              {plan.benefits.map((benefit, i) => (
                <li key={i}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px', color: 'var(--forest-green)' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div style={{ marginTop: 'auto' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '1.5rem' }}
                onClick={() => handleCheckout(plan.name)}
              >
                Select Plan
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

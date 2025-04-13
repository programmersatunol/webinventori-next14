import styles from './services.module.css';

export default function Services() {
  const services = [
    {
      title: "Inventory Management",
      description: "Comprehensive inventory tracking and management system for businesses of all sizes.",
      icon: "📦",
      features: [
        "Real-time stock tracking",
        "Automated reorder points",
        "Barcode scanning",
        "Multi-location support"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Powerful analytics tools to help you make data-driven decisions for your business.",
      icon: "📊",
      features: [
        "Custom report generation",
        "Sales forecasting",
        "Performance metrics",
        "Data visualization"
      ]
    },
    {
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management to optimize your business operations.",
      icon: "🔄",
      features: [
        "Supplier management",
        "Order tracking",
        "Demand forecasting",
        "Cost optimization"
      ]
    }
  ];

  return (
    <div className="container">
      <section className="section">
        <h1 className="heading">Our Services</h1>
        <p className="subheading">
          Streamline your inventory management with our comprehensive solutions
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#" className={styles.learnMore}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
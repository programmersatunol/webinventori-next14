import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  const cards = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To revolutionize inventory management through innovative digital solutions that empower businesses to thrive in the modern economy.'
    },
    {
      icon: '👀',
      title: 'Our Vision',
      description: 'To become the global leader in inventory management solutions, setting the standard for efficiency, innovation, and customer success.'
    },
    {
      icon: '💎',
      title: 'Core Values',
      description: 'Innovation, integrity, customer focus, and excellence drive everything we do. We believe in creating lasting value for our clients.'
    },
    {
      icon: '🚀',
      title: 'Our Approach',
      description: 'We combine cutting-edge technology with industry expertise to deliver tailored solutions that meet your unique business needs.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="container">
        <div className={styles.aboutContainer}>
        {/* Cover Section */}
        <section className={styles.coverSection}>
            <Image
            src="/images/illustration-anime-city.jpg"
            alt="Anime City Illustration"
            quality={90}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className={styles.coverImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <h1 className={styles.overlayTitle}>
                Transforming Inventory Management
              </h1>
              <p className={styles.overlayText}>
                We're dedicated to helping businesses optimize their operations through innovative inventory solutions.
          </p>
              </div>
          </div>
          <div className={styles.experienceTag}>
            Trusted Since 2014
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
    </div>
          ))}
        </section>

        {/* Cards Grid Section */}
        <section>
          <h2 className="heading">Why Choose Us</h2>
          <p className="subheading">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
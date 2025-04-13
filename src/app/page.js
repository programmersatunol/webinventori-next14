import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.highlight}>WebInventori</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your Complete Inventory Management Solution
          </p>
          <div className={styles.heroText}>
            <p>
              WebInventori provides powerful tools to manage your inventory efficiently.
              From small businesses to large enterprises, we've got you covered.
            </p>
          </div>
          <div className={styles.heroCta}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

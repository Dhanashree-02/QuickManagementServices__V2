import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Professional Management Services</h1>
          <p className={styles.heroSubtitle}>We help businesses grow and succeed through expert management solutions</p>
          <div className={styles.heroCta}>
            <Button to="/services" variant="primary">Our Services</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
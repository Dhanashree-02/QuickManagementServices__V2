import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Professional <span>Management</span> Services
          </h1>
          <p className={styles.heroSubtitle}>
            Empowering businesses with innovative strategies and expert solutions to achieve sustainable growth.
          </p>
          <div className={styles.heroCta}>
            <Button to="/services" variant="primary" className={styles.btn}>Explore Services</Button>
            <Button to="/contact" variant="secondary">Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

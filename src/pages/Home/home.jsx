import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './Home.module.css';

const Home = () => {
  const services = [
    {
      id: 1,
      title: 'Business Consulting',
      description: 'Strategic business consulting to help your company grow and succeed in today\'s competitive market.',
      image: '/images/service1.jpg'
    },
    {
      id: 2,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to optimize your business finances and maximize profits.',
      image: '/images/service2.jpg'
    },
    {
      id: 3,
      title: 'Market Analysis',
      description: 'In-depth market analysis to identify opportunities and position your business for success.',
      image: '/images/service3.jpg'
    }
  ];

  return (
    <div>
      <Hero />
      
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We provide comprehensive management solutions for your business needs</p>
          
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>About Quick Management Services</h2>
              <p>We are a dedicated team of management professionals committed to helping businesses achieve their goals through strategic planning, operational excellence, and innovative solutions.</p>
              <p>With years of experience across various industries, we bring expertise and insights to every client engagement.</p>
              <a href="/about" className={styles.aboutLink}>Learn more about us</a>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3>200+</h3>
                <p>Clients Served</p>
              </div>
              <div className={styles.statItem}>
                <h3>95%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to transform your business?</h2>
            <p>Contact us today for a free consultation and discover how our management services can help you achieve your business goals.</p>
            <a href="/contact" className={styles.ctaButton}>Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
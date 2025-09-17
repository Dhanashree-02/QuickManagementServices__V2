import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './Services.module.css';

const Services = () => {
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
    },
    {
      id: 4,
      title: 'Operations Management',
      description: 'Streamline your business operations for maximum efficiency and productivity.',
      image: '/images/service4.jpg'
    },
    {
      id: 5,
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategic plans to guide your business toward long-term success.',
      image: '/images/service5.jpg'
    },
    {
      id: 6,
      title: 'Risk Management',
      description: 'Identify and mitigate potential risks to protect your business and ensure continuity.',
      image: '/images/service6.jpg'
    }
  ];

  return (
    <div className={styles.services}>
      <section className={styles.servicesHero}>
        <div className="container">
          <h1 className={styles.servicesTitle}>Our Services</h1>
          <p className={styles.servicesSubtitle}>Comprehensive management solutions for your business</p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className={styles.servicesIntro}>
            <h2>How We Can Help Your Business</h2>
            <p>At Quick Management Services, we offer a wide range of management solutions designed to help businesses of all sizes achieve their goals. Our team of experts works closely with you to understand your unique challenges and develop tailored strategies for success.</p>
          </div>
          
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
      
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">How we work with you to deliver exceptional results</p>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consultation</h3>
              <p>We begin with a thorough consultation to understand your business, goals, and challenges.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Analysis</h3>
              <p>Our team conducts a comprehensive analysis of your current situation and identifies opportunities.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Strategy Development</h3>
              <p>We develop a tailored strategy designed to address your specific needs and achieve your goals.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Implementation</h3>
              <p>We work with you to implement the strategy, providing guidance and support throughout the process.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h3>Evaluation & Refinement</h3>
              <p>We continuously evaluate results and refine our approach to ensure optimal outcomes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to get started?</h2>
            <p>Contact us today to schedule a consultation and discover how our services can benefit your business.</p>
            <a href="/contact" className={styles.ctaButton}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './Services.module.css';

// Importing images properly from assets
import service1 from "../../../src/assets/Service/Business Consulting.jpg";
import service2 from "../../../src/assets/Service/Financial Planning.jpg";
import service3 from "../../../src/assets/Service/Market Analysis.webp";
import service4 from "../../../src/assets/Service/Financial Planning.jpg";
import service5 from "../../../src/assets/Service/Market Analysis.webp";
import service6 from "../../../src/assets/Service/Business Consulting.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Business Consulting',
      description: 'Strategic business consulting to help your company grow and succeed in today\'s competitive market.',
      image: service1,
    },
    {
      id: 2,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to optimize your business finances and maximize profits.',
      image: service2,
    },
    {
      id: 3,
      title: 'Market Analysis',
      description: 'In-depth market analysis to identify opportunities and position your business for success.',
      image: service3,
    },
    {
      id: 4,
      title: 'Operations Management',
      description: 'Streamline your business operations for maximum efficiency and productivity.',
      image: service4,
    },
    {
      id: 5,
      title: 'Strategic Planning',
      description: 'Develop comprehensive strategic plans to guide your business toward long-term success.',
      image: service5,
    },
    {
      id: 6,
      title: 'Risk Management',
      description: 'Identify and mitigate potential risks to protect your business and ensure continuity.',
      image: service6,
    },
  ];

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <h1 className={styles.servicesTitle}>Our Services</h1>
          <p className={styles.servicesSubtitle}>
            Comprehensive management solutions for your business
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesIntro}>
            <h2>How We Can Help Your Business</h2>
            <p>
              At Quick Management Services, we offer a wide range of management solutions designed to help businesses of all sizes achieve their goals. Our team of experts works closely with you to understand your unique challenges and develop tailored strategies for success.
            </p>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service) => (
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

      {/* Process Section */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">How we work with you to deliver exceptional results</p>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div>
                <h3>Consultation</h3>
                <p>We begin with a thorough consultation to understand your business, goals, and challenges.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div>
                <h3>Analysis</h3>
                <p>Our team conducts a comprehensive analysis of your current situation and identifies opportunities.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div>
                <h3>Strategy Development</h3>
                <p>We develop a tailored strategy designed to address your specific needs and achieve your goals.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div>
                <h3>Implementation</h3>
                <p>We work with you to implement the strategy, providing guidance and support throughout the process.</p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <div>
                <h3>Evaluation & Refinement</h3>
                <p>We continuously evaluate results and refine our approach to ensure optimal outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to get started?</h2>
            <p>
              Contact us today to schedule a consultation and discover how our services can benefit your business.
            </p>
            <a href="/contact" className={styles.ctaButton}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

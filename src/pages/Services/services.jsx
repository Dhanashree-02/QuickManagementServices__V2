import { useEffect, useRef } from "react";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './Services.module.css';

// Importing images from assets
import service1 from "../../../src/assets/Service/Business Consulting.jpg";
import service2 from "../../../src/assets/Service/Financial Planning.jpg";
import service3 from "../../../src/assets/Service/Market Analysis.webp";
import service4 from "../../../src/assets/Service/Financial Planning.jpg";
import service5 from "../../../src/assets/Service/Market Analysis.webp";
import service6 from "../../../src/assets/Service/Business Consulting.jpg";

const Services = () => {
  const stepRefs = useRef([]); // 🔹 For scroll-triggered animation

  // Scroll-triggered animation for process steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate); // add animation class
            observer.unobserve(entry.target); // stop observing after animating
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach(el => el && observer.observe(el));
  }, []);

  const services = [
    {
      id: 1,
      title: 'Blockchain Services',
      description: 'Secure and scalable blockchain development services, including smart contracts, decentralized applications (dApps), and enterprise blockchain solutions.',
      image: service1,
    },
    {
      id: 2,
      title: 'Big Data Analysis',
      description: 'Turn complex datasets into actionable insights with advanced big data analytics, data visualization, and AI-driven decision-making.',
      image: service2,
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Leverage cloud infrastructure to scale your business. From cloud migration to cloud-native applications, we deliver reliable and secure solutions.',
      image: service3,
    },
    {
      id: 4,
      title: 'IoT Solutions and Services',
      description: 'Build smart, connected systems with our IoT expertise. From device integration to data monitoring and predictive analytics, we’ve got you covered.',
      image: service4,
    },
    {
      id: 5,
      title: 'Web Application Development',
      description: 'Modern, responsive, and high-performance web applications tailored to your business requirements, ensuring seamless user experiences.',
      image: service5,
    },
    {
      id: 6,
      title: 'Mobile Application Development',
      description: 'Custom iOS and Android mobile applications with intuitive design, strong security, and high performance to engage users on the go.',
      image: service6,
    },
  ];

  const processSteps = [
    {
      title: "Consultation",
      description: "We start by understanding your requirements, goals, and vision."
    },
    {
      title: "Analysis",
      description: "Our experts analyze the challenges and identify the right solutions for your business."
    },
    {
      title: "Strategy Development",
      description: "We design a tailored roadmap that aligns with your business objectives and future growth."
    },
    {
      title: "Implementation",
      description: "We execute the strategy with precision, ensuring seamless delivery and minimal disruption."
    },
    {
      title: "Evaluation & Refinement",
      description: "We continuously monitor and refine our solutions for maximum efficiency and results."
    }
  ];

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className="container">
          <h1 className={styles.servicesTitle}>Our Services</h1>
          <p className={styles.servicesSubtitle}>
            Advanced technology and consulting solutions for your business
          </p>
        </div>
      </section>

      {/* Services Intro */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesIntro}>
            <h2>Empowering Businesses with Innovation</h2>
            <p>
              At Quick Management Services, we provide cutting-edge technology and consulting services
              to help organizations innovate, grow, and stay ahead in a competitive digital landscape.
              Our solutions are customized to meet the specific challenges and opportunities of your business.
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
          <p className="section-subtitle">How we deliver innovative digital solutions</p>

          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={el => stepRefs.current[index] = el} // 🔹 reference for Intersection Observer
                className={styles.processStep}
                style={{ transitionDelay: `${index * 0.3}s` }} // stagger effect
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to transform your business?</h2>
            <p>
              Let’s collaborate to build secure, scalable, and innovative solutions that drive long-term success.
            </p>
            <a href="/contact" className={styles.ctaButton}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

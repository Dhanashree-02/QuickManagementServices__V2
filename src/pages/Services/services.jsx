import { useEffect, useRef } from "react";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import styles from './Services.module.css';

const Services = () => {
  const stepRefs = useRef([]);
  const devStepRefs = useRef([]); // 🆕 Separate refs for Development Process

  // Scroll-triggered animation for process steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach(el => el && observer.observe(el));
    devStepRefs.current.forEach(el => el && observer.observe(el)); // 🆕 observe dev process steps
  }, []);

  const services = [
    {
      id: 1,
      title: 'Blockchain Services',
      description: 'Secure and scalable blockchain development services, including smart contracts, decentralized applications (dApps), and enterprise blockchain solutions.',
      image: 'https://i.pinimg.com/736x/c6/6c/b6/c66cb6fa625bc0c0fdf372f5b0e67e35.jpg',
    },
    {
      id: 2,
      title: 'Big Data Analysis',
      description: 'Turn complex datasets into actionable insights with advanced big data analytics, data visualization, and AI-driven decision-making.',
      image: "https://i.pinimg.com/1200x/bc/fc/14/bcfc14f5ab1bebfc02222224b7fa1801.jpg",
    },
    {
      id: 3,
      title: 'Cloud Computing',
      description: 'Leverage cloud infrastructure to scale your business. From cloud migration to cloud-native applications, we deliver reliable and secure solutions.',
      image: "https://i.pinimg.com/736x/e6/48/8b/e6488bcab627b69f2948bd5138493be2.jpg",
    },
    {
      id: 4,
      title: 'IoT Solutions and Services',
      description: 'Build smart, connected systems with our IoT expertise. From device integration to data monitoring and predictive analytics, we’ve got you covered.',
      image: "https://i.pinimg.com/736x/18/e3/fb/18e3fb1b4007e6622d3607dac693c513.jpg",
    },
    {
      id: 5,
      title: 'Web Application Development',
      description: 'Modern, responsive, and high-performance web applications tailored to your business requirements, ensuring seamless user experiences.',
      image: "https://i.pinimg.com/1200x/e3/ea/71/e3ea71cc2c19b2ae2d060dc51d1a3cbe.jpg",
    },
    {
      id: 6,
      title: 'Mobile Application Development',
      description: 'Custom iOS and Android mobile applications with intuitive design, strong security, and high performance to engage users on the go.',
      image: "https://i.pinimg.com/736x/67/93/15/679315a06e8f6de01b44d9a9ed58200a.jpg",
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

  // 🆕 New Development Process Steps
  const devProcessSteps = [
    {
      title: "Requirement Gathering & Planning",
      description: "We collaborate with stakeholders to define scope, requirements, and timelines."
    },
    {
      title: "UI/UX Design",
      description: "Our designers create wireframes and prototypes to visualize user journeys."
    },
    {
      title: "Development",
      description: "Using agile methodologies, we build scalable and secure applications step by step."
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing ensures performance, security, and functionality before launch."
    },
    {
      title: "Deployment",
      description: "We launch the solution smoothly with minimal downtime and complete support."
    },
    {
      title: "Maintenance & Support",
      description: "We provide updates, optimizations, and ongoing support to keep solutions future-ready."
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
                ref={el => stepRefs.current[index] = el}
                className={styles.processStep}
                style={{ transitionDelay: `${index * 0.3}s` }}
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

     {/* Development Process Section */}
<section className={`section ${styles.devProcessSection}`}>
  <div className="container">
    <h2 className="section-title">Our Development Process</h2>
    <p className="section-subtitle">
      Step-by-step approach to building scalable and innovative digital products
    </p>

    <div className={styles.devProcessTimeline}>
      {[
        {
          step: 1,
          title: "Requirement Gathering",
          description: "We collect business needs, define the scope, and prepare the foundation for success.",
          image: "https://i.pinimg.com/736x/72/fc/24/72fc24c6b5c4a5d7b9e1f23a1dfcd5ef.jpg"
        },
        {
          step: 2,
          title: "UI/UX Design",
          description: "Designers craft user-friendly interfaces and seamless experiences.",
          image: "https://i.pinimg.com/736x/1a/3f/76/1a3f76f7c78a62d3cf9e8f60481fcb71.jpg"
        },
        {
          step: 3,
          title: "Development",
          description: "Build secure, scalable, and high-performance applications with modern tech.",
          image: "https://i.pinimg.com/736x/ab/8b/6c/ab8b6c49bcd3b6d2f9936d26f8f27c6b.jpg"
        },
        {
          step: 4,
          title: "Testing & QA",
          description: "Ensure flawless performance, security, and usability across all devices.",
          image: "https://i.pinimg.com/736x/56/64/12/566412d0db973a37d3c71e53e9b77c34.jpg"
        },
        {
          step: 5,
          title: "Deployment",
          description: "Launch the product with smooth integration into your environment.",
          image: "https://i.pinimg.com/736x/1f/6b/36/1f6b3692f2ef7f7d44f9246a09de7f14.jpg"
        },
        {
          step: 6,
          title: "Maintenance & Support",
          description: "Continuous updates, fixes, and improvements for long-term success.",
          image: "https://i.pinimg.com/736x/6d/41/87/6d4187b2a2f3f39a78ef4d2367e472db.jpg"
        }
      ].map((item, index) => (
        <div 
          className={styles.devProcessItem}
          key={index}
        >
          <div className={styles.devStep}>
            <div className={styles.stepNumber}>{item.step}</div>
            <h3>{item.title}</h3>
          </div>
          <div className={styles.devContent}>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
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

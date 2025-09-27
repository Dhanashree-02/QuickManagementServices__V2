import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ServiceDetail.module.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Updated mock services for your new list
    const mockServices = {
      '1': {
        id: '1',
        title: 'Blockchain Services',
        description: 'Secure, scalable, and innovative blockchain solutions for businesses.',
        fullDescription:
          'Our blockchain services enable businesses to leverage decentralized technology for improved security, transparency, and efficiency. From smart contract development to enterprise blockchain integration, we help companies unlock new opportunities in digital transformation.',
        features: [
          'Smart contract development',
          'Private and public blockchain solutions',
          'Decentralized applications (DApps)',
          'Blockchain consulting and strategy',
          'Integration with existing systems',
        ],
        image: '/images/blockchain.jpg',
      },
      '2': {
        id: '2',
        title: 'Big Data Analysis',
        description: 'Transform raw data into actionable insights for better decision-making.',
        fullDescription:
          'Our big data analysis services help organizations make sense of massive datasets. Using advanced analytics, AI, and machine learning, we extract valuable insights that drive growth, optimize operations, and improve customer experiences.',
        features: [
          'Predictive analytics and forecasting',
          'Data visualization and dashboards',
          'Machine learning model development',
          'Customer behavior analysis',
          'Real-time data processing',
        ],
        image: '/images/big-data.jpg',
      },
      '3': {
        id: '3',
        title: 'Cloud Computing',
        description: 'Flexible and cost-effective cloud solutions to scale your business.',
        fullDescription:
          'We provide end-to-end cloud computing services to help businesses migrate, manage, and optimize their IT infrastructure. From cloud storage to serverless computing, we ensure your business benefits from high performance and scalability.',
        features: [
          'Cloud migration and deployment',
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Cloud security and compliance',
          'Hybrid and multi-cloud strategies',
        ],
        image: '/images/cloud-computing.jpg',
      },
      '4': {
        id: '4',
        title: 'IoT Solutions and Services',
        description: 'Connect devices and data for smarter, automated business solutions.',
        fullDescription:
          'Our IoT services empower businesses to connect devices, collect data, and automate processes. We build custom IoT ecosystems that improve operational efficiency, enable predictive maintenance, and enhance user experiences.',
        features: [
          'IoT device integration',
          'Data collection and analytics',
          'Industrial IoT (IIoT) solutions',
          'Smart home and city applications',
          'Predictive maintenance systems',
        ],
        image: '/images/iot.jpg',
      },
      '5': {
        id: '5',
        title: 'Web Application Development',
        description: 'Custom web apps tailored to meet your business goals.',
        fullDescription:
          'Our web application development team builds responsive, scalable, and user-friendly applications. Whether it’s an e-commerce site, enterprise dashboard, or SaaS platform, we deliver solutions that perform seamlessly across devices.',
        features: [
          'Custom web app development',
          'Progressive web apps (PWA)',
          'E-commerce platforms',
          'API integration and development',
          'UI/UX design and optimization',
        ],
        image: '/images/web-development.jpg',
      },
      '6': {
        id: '6',
        title: 'Mobile Application Development',
        description: 'Innovative mobile apps for iOS and Android platforms.',
        fullDescription:
          'We design and develop high-performance mobile applications that engage users and drive business growth. Our team specializes in both native and cross-platform apps, ensuring top-notch user experience and functionality.',
        features: [
          'iOS and Android native app development',
          'Cross-platform mobile apps',
          'App UI/UX design',
          'App testing and quality assurance',
          'App deployment and maintenance',
        ],
        image: '/images/mobile-development.jpg',
      },
    };

    // Simulate API call
    setTimeout(() => {
      if (mockServices[id]) {
        setService(mockServices[id]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!service) {
    return <div className={styles.error}>Service not found</div>;
  }

  return (
    <div className={styles.serviceDetail}>
       
          <div className={styles.serviceHeader}>
        <h1>{service.title}</h1>
        <div className={styles.serviceBanner}>
          <div className={styles.imageContainer}>
            {/* In a real app, you would use an actual image */}
            <div className={styles.placeholderImage}>
              {service.title.charAt(0)}
            </div>
        </div>
      </div>
      </div>

      <div className={styles.serviceContent}>
        <div className={styles.serviceDescription}>
          <h2>Overview</h2>
          <p>{service.fullDescription}</p>
        </div>

        <div className={styles.serviceFeatures}>
          <h2>Key Features</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.serviceActions}>
          <Button to="/contact" variant="primary">
            Request a Consultation
          </Button>
          <Button to="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

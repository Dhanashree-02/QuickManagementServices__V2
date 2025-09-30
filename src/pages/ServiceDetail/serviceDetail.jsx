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
        description: 'Secure and scalable blockchain solutions to revolutionize business operations.',
        fullDescription:
          "Our Blockchain Services help businesses embrace decentralization with security, scalability, and transparency at the core. We specialize in designing and implementing smart contracts, building decentralized applications (DApps), and deploying both public and private blockchain networks. By integrating blockchain into your enterprise systems, we enable fraud prevention, process automation, and trusted peer-to-peer transactions. From strategy consulting to development and maintenance, our solutions ensure smooth adoption of blockchain tailored to your industry needs.",
        features: [
          'Smart contract development',
          'Enterprise-grade blockchain integration',
          'Decentralized applications (DApps)',
          'Blockchain consulting and strategy',
          'Custom public and private blockchain solutions',
        ],
        image: 'https://i.pinimg.com/736x/c6/6c/b6/c66cb6fa625bc0c0fdf372f5b0e67e35.jpg',
      },
      '2': {
        id: '2',
        title: 'Big Data Analytics',
        description: 'Turn complex data into valuable insights that drive business growth.',
        fullDescription:
          "Our Big Data Analytics services empower organizations to process, analyze, and visualize large volumes of structured and unstructured data. Using advanced technologies such as AI, machine learning, and predictive analytics, we uncover patterns, trends, and correlations hidden in data. This enables better decision-making, operational efficiency, and improved customer engagement. From real-time dashboards to custom forecasting models, we help businesses harness the true power of data and achieve measurable results.",
        features: [
          'Predictive analytics and forecasting',
          'Data visualization dashboards',
          'Machine learning model development',
          'Customer and market behavior analysis',
          'Real-time big data processing',
        ],
        image: "https://i.pinimg.com/1200x/bc/fc/14/bcfc14f5ab1bebfc02222224b7fa1801.jpg",
      },
      '3': {
        id: '3',
        title: 'Cloud Computing Solutions',
        description: 'Flexible cloud solutions for secure, scalable, and cost-effective IT infrastructure.',
        fullDescription:
          "We offer end-to-end Cloud Computing Solutions to help businesses migrate, modernize, and manage their IT infrastructure. Our expertise spans IaaS, PaaS, SaaS, serverless computing, and hybrid cloud deployments. By leveraging cloud platforms, we enable businesses to scale on demand, reduce infrastructure costs, and improve agility. Our services include seamless cloud migration, security compliance, automation, and monitoring, ensuring your business remains innovative and competitive in a digital-first world.",
        features: [
          'Cloud migration and deployment',
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Cloud security, compliance, and monitoring',
          'Hybrid and multi-cloud strategies',
        ],
        image: 'https://i.pinimg.com/736x/e6/48/8b/e6488bcab627b69f2948bd5138493be2.jpg',
      },
      '4': {
        id: '4',
        title: 'IoT Solutions & Services',
        description: 'Smart IoT solutions to connect devices, data, and processes efficiently.',
        fullDescription:
          "Our Internet of Things (IoT) Solutions connect devices, sensors, and systems to enable real-time monitoring, data collection, and intelligent automation. From industrial IoT (IIoT) to smart homes and smart cities, we build custom IoT ecosystems that enhance efficiency, reduce downtime, and improve decision-making. With predictive maintenance, advanced analytics, and seamless device integration, we help businesses create smarter environments and deliver enhanced user experiences.",
        features: [
          'IoT device and sensor integration',
          'Data collection and real-time analytics',
          'Industrial IoT (IIoT) solutions',
          'Smart home and smart city applications',
          'Predictive maintenance systems',
        ],
        image: 'https://i.pinimg.com/736x/18/e3/fb/18e3fb1b4007e6622d3607dac693c513.jpg',
      },
      '5': {
        id: '5',
        title: 'Web Application Development',
        description: 'Custom-built web apps designed for performance, security, and scalability.',
        fullDescription:
          "Our Web Application Development services deliver powerful, responsive, and scalable solutions tailored to your business needs. Whether it's an e-commerce store, enterprise dashboard, or SaaS platform, we focus on creating seamless user experiences combined with high-end performance. We specialize in custom development, API integrations, database management, and UI/UX optimization. Every application is designed to be mobile-friendly, secure, and capable of handling business growth effectively.",
        features: [
          'Custom web app development',
          'Progressive Web Apps (PWA)',
          'E-commerce platforms and portals',
          'API design, integration, and management',
          'User-focused UI/UX design',
        ],
        image: 'https://i.pinimg.com/1200x/e3/ea/71/e3ea71cc2c19b2ae2d060dc51d1a3cbe.jpg',
      },
      '6': {
        id: '6',
        title: 'Mobile Application Development',
        description: 'Innovative mobile applications to boost engagement and business reach.',
        fullDescription:
          "We design and develop cutting-edge mobile applications that combine functionality with a superior user experience. From iOS and Android native apps to cross-platform frameworks, we ensure robust performance and seamless design. Our services cover the complete mobile app lifecycle, including UI/UX design, backend integration, rigorous testing, deployment, and ongoing support. Whether it's a consumer app, enterprise tool, or gaming platform, we deliver apps that drive engagement and business success.",
        features: [
          'Native iOS and Android app development',
          'Cross-platform mobile apps (Flutter/React Native)',
          'Custom app UI/UX design',
          'Quality assurance and performance testing',
          'App deployment, updates, and maintenance',
        ],
        image: 'https://i.pinimg.com/736x/67/93/15/679315a06e8f6de01b44d9a9ed58200a.jpg',
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
            <div className={styles.serviceBanner}>
              <div className={styles.imageContainer}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceImage}
                />
              </div>
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

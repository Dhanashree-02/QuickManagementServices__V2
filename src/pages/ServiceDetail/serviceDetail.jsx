import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './ServiceDetail.module.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the service data from an API
    // This is mock data for demonstration purposes
    const mockServices = {
      '1': {
        id: '1',
        title: 'Business Management',
        description: 'Our business management services help you streamline operations, improve efficiency, and drive growth. We provide comprehensive solutions tailored to your specific business needs.',
        fullDescription: 'Our business management services are designed to help organizations of all sizes optimize their operations and achieve sustainable growth. We work closely with your team to identify areas for improvement and implement effective strategies that drive results. Our experienced consultants bring industry-specific knowledge and best practices to help you navigate challenges and capitalize on opportunities.',
        features: [
          'Strategic planning and execution',
          'Process optimization and workflow design',
          'Performance measurement and KPI tracking',
          'Change management and organizational development',
          'Resource allocation and capacity planning'
        ],
        image: '/images/business-management.jpg'
      },
      '2': {
        id: '2',
        title: 'Financial Consulting',
        description: 'Our financial consulting services provide expert guidance on financial planning, investment strategies, and risk management to help you achieve your financial goals.',
        fullDescription: 'Our financial consulting services offer comprehensive financial guidance to help individuals and businesses make informed decisions about their financial future. We take a holistic approach to understanding your unique financial situation and goals, then develop customized strategies to help you achieve them. Our team of certified financial advisors stays up-to-date with the latest market trends and regulatory changes to provide you with sound advice.',
        features: [
          'Financial analysis and forecasting',
          'Investment strategy and portfolio management',
          'Risk assessment and mitigation planning',
          'Tax planning and optimization',
          'Retirement and succession planning'
        ],
        image: '/images/financial-consulting.jpg'
      },
      '3': {
        id: '3',
        title: 'Marketing Strategy',
        description: 'Our marketing strategy services help you develop and implement effective marketing campaigns to reach your target audience and drive customer engagement.',
        fullDescription: 'Our marketing strategy services are designed to help businesses build strong brands, connect with their target audiences, and drive measurable results. We combine market research, consumer insights, and creative thinking to develop marketing strategies that differentiate your business and create competitive advantage. Our data-driven approach ensures that your marketing investments deliver optimal returns.',
        features: [
          'Brand development and positioning',
          'Market research and customer segmentation',
          'Digital marketing and social media strategy',
          'Content creation and campaign management',
          'Marketing analytics and ROI measurement'
        ],
        image: '/images/marketing-strategy.jpg'
      }
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
          <Button to="/contact" variant="primary">Request a Consultation</Button>
          <Button to="/services" variant="secondary">View All Services</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;